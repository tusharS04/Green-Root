import type { CSSProperties } from "react";
import type { Certificate } from "@/lib/content";

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <article className="certificate-card">
      <div className="certificate-card__document" style={{ "--certificate-accent": certificate.accent } as CSSProperties}>
        <div className="certificate-card__badge-svg">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: "90px", height: "90px" }}>
            {/* Outer decorative shield/border */}
            <path d="M60 15L95 32V78L60 105L25 78V32L60 15Z" stroke="var(--certificate-accent)" strokeWidth="3" strokeLinejoin="round" />
            {/* Inner shield accent */}
            <path d="M60 22L88 36V74L60 97L32 74V36L60 22Z" stroke="var(--certificate-accent)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            {/* Star symbols on top */}
            <path d="M60 38L62 43L67 43.5L63.5 47L64.5 52L60 49.5L55.5 52L56.5 47L53 43.5L58 43L60 38Z" fill="var(--certificate-accent)" />
            {/* Official seal details */}
            <circle cx="60" cy="62" r="18" stroke="var(--certificate-accent)" strokeWidth="2.5" />
            <path d="M60 52V62L66 66" stroke="var(--certificate-accent)" strokeWidth="2" strokeLinecap="round" />
            {/* Ribbon ribbons hanging from seal */}
            <path d="M48 90L60 82L72 90V105L60 98L48 105V90Z" fill="var(--certificate-accent)" opacity="0.85" />
          </svg>
        </div>
        <p className="certificate-card__year">{certificate.year}</p>
      </div>
      <div className="certificate-card__body">
        <h3>{certificate.title}</h3>
        <p>{certificate.description}</p>
        <dl className="meta-pairs">
          <div>
            <dt>Issuer</dt>
            <dd>{certificate.issuer}</dd>
          </div>
          <div>
            <dt>Issued</dt>
            <dd>{new Date(certificate.issueDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
