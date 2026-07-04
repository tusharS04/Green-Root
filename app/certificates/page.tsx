import { CertificateCard } from "@/components/certificate-card";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { DefaultHeroActions, PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { certificates } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Certifications and Memberships",
  description:
    "Review the export registrations, memberships, and quality-supporting credentials presented by Green Roots Exim.",
  path: "/certificates",
});

export default function CertificatesPage() {
  const certificateSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Certifications and Memberships",
    url: absoluteUrl("/certificates"),
    description: "Certificate gallery and export memberships.",
  };

  return (
    <>
      <StructuredData data={certificateSchema} />

      <PageHero
        eyebrow="Certifications"
        title="Certifications and memberships that reinforce buyer confidence."
        description="We have obtained key government and export board registrations to support quality, legitimacy, and practical trade trust."
        actions={<DefaultHeroActions />}
      />

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--certificates">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <h2>Certificate gallery preview</h2>
          <p className="muted-copy">
            The lightbox interaction is ready for real certificate scans in a later content pass.
          </p>
          <LightboxGallery
            label="Certificates gallery"
            items={certificates.map((certificate) => ({
              title: certificate.title,
              description: `${certificate.issuer} • ${certificate.year}`,
              accent: certificate.accent,
            }))}
          />
        </div>
      </section>
    </>
  );
}
