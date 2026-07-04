import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site";

type InquiryPayload = {
  name: string;
  companyName?: string;
  email: string;
  phone?: string;
  message: string;
  website?: string;
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 3;
const requestLog = new Map<string, number[]>();

function sanitizeText(value: string) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function validatePayload(payload: InquiryPayload) {
  const sanitized = {
    name: sanitizeText(payload.name || ""),
    companyName: sanitizeText(payload.companyName || ""),
    email: sanitizeText(payload.email || "").toLowerCase(),
    phone: sanitizeText(payload.phone || ""),
    message: sanitizeText(payload.message || ""),
    website: sanitizeText(payload.website || ""),
  };

  if (sanitized.website) {
    return { error: "Spam detection triggered.", status: 400 };
  }

  if (!sanitized.name) {
    return { error: "Name is required.", status: 400 };
  }

  if (!sanitized.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitized.email)) {
    return { error: "A valid email address is required.", status: 400 };
  }

  if (!sanitized.message || sanitized.message.length < 20) {
    return {
      error: "Please provide a message with at least 20 characters.",
      status: 400,
    };
  }

  return { sanitized };
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const recentRequests = (requestLog.get(identifier) || []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );

  recentRequests.push(now);
  requestLog.set(identifier, recentRequests);

  return recentRequests.length > MAX_SUBMISSIONS;
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT
    ? Number(process.env.SMTP_PORT)
    : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !port || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InquiryPayload;
    const result = validatePayload(body);

    if ("error" in result) {
      return NextResponse.json(
        { message: result.error },
        { status: result.status },
      );
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const identifier = forwardedFor?.split(",")[0]?.trim() || "local";

    if (isRateLimited(identifier)) {
      return NextResponse.json(
        {
          message:
            "Too many submissions from this source. Please try again shortly.",
        },
        { status: 429 },
      );
    }

    const payload = result.sanitized;
    const transporter = createTransporter();

    if (transporter) {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || siteConfig.email,
        to: process.env.CONTACT_RECIPIENT_EMAIL || siteConfig.email,
        replyTo: payload.email,
        subject: `New website inquiry from ${payload.name}`,
        text: [
          `Name: ${payload.name}`,
          `Company: ${payload.companyName || "Not provided"}`,
          `Email: ${payload.email}`,
          `Phone: ${payload.phone || "Not provided"}`,
          "",
          "Message:",
          payload.message,
        ].join("\n"),
      });
    } else {
      console.info("[contact-inquiry]", payload);
    }

    return NextResponse.json(
      {
        message:
          "Your inquiry has been received. Our team will follow up shortly.",
      },
      { status: transporter ? 200 : 202 },
    );
  } catch (error) {
    console.error("[contact-route-error]", error);
    return NextResponse.json(
      {
        message:
          "We could not process your inquiry right now. Please email us directly.",
      },
      { status: 500 },
    );
  }
}
