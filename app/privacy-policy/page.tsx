import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the privacy policy for how inquiry information is handled on the Green Roots Exim website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container legal-page">
        <p className="eyebrow">Privacy policy</p>
        <h1>Privacy Policy</h1>
        <p>
          We collect the information you submit through the contact form only for responding to inquiries,
          managing buyer communication, and improving our service quality.
        </p>
        <h2>What we collect</h2>
        <p>Name, company name, email address, phone number, and inquiry message.</p>
        <h2>How we use it</h2>
        <p>
          Inquiry data is used for direct communication, shipment-related follow-up, and internal business
          development workflows. We do not sell your personal information.
        </p>
        <h2>Security</h2>
        <p>
          We use reasonable technical and organizational measures to protect submitted information. You
          should still avoid sending highly sensitive data through general web forms.
        </p>
      </div>
    </section>
  );
}
