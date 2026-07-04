import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "Review the terms governing use of the Green Roots Exim website and inquiry channels.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container legal-page">
        <p className="eyebrow">Terms of use</p>
        <h1>Terms of Use</h1>
        <p>
          This website is provided for general information about our business, product portfolio, and
          export inquiry process.
        </p>
        <h2>Content accuracy</h2>
        <p>
          We aim to keep all information current and professional, but product availability, packaging,
          and shipping terms may change based on seasonality and destination requirements.
        </p>
        <h2>Inquiry expectations</h2>
        <p>
          Submission of a contact form does not create a binding commercial agreement. Final trade terms
          are subject to direct confirmation, documentation, and mutually accepted contracts.
        </p>
        <h2>Intellectual property</h2>
        <p>
          The site design, written content, and brand presentation belong to the company unless stated
          otherwise.
        </p>
      </div>
    </section>
  );
}
