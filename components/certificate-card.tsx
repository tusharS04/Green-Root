import type { CSSProperties } from "react";

import type { Certificate } from "@/lib/content";

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <article className="certificate-card">
      <div className="certificate-card__document" style={{ "--certificate-accent": certificate.accent } as CSSProperties}>
        <span className="certificate-card__seal" />
        <span className="certificate-card__ribbon" />
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
