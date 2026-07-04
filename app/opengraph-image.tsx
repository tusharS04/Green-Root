import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "radial-gradient(circle at top left, rgba(224,184,79,0.35), transparent 35%), linear-gradient(135deg, #11261c, #2d4d37 55%, #e0b84f)",
          color: "#f7f1df",
          padding: 56,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(247,241,223,0.24)",
            borderRadius: 28,
            padding: 48,
            background: "rgba(14, 24, 19, 0.28)",
          }}
        >
          <div style={{ fontSize: 28, letterSpacing: 2, textTransform: "uppercase" }}>
            Green Roots Exim
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 760 }}>
            <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.04 }}>
              Fresh produce exports with a polished buyer-first presentation.
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.4, color: "rgba(247,241,223,0.88)" }}>
              Fruits, vegetables, certifications, and direct inquiry workflows for global importers.
            </div>
          </div>
          <div style={{ display: "flex", gap: 24, fontSize: 24 }}>
            <span>Mumbai, India</span>
            <span>Export-ready</span>
            <span>{siteConfig.phone}</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
