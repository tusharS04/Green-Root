import { ContactForm } from "@/components/contact-form";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Reach Green Roots Exim for fresh produce inquiries, sourcing discussions, and export coordination.",
  path: "/contact",
});

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absoluteUrl("/contact"),
    name: "Contact Green Roots Exim",
    description: "Contact page with company information, inquiry form, and map.",
  };

  return (
    <>
      <StructuredData data={contactSchema} />

      <PageHero
        eyebrow="Get in touch"
        title="Start the conversation with a clear export inquiry."
        description="Use the contact form for pricing requests, sampling discussions, destination-market questions, or certification-related buyer checks."
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-panel">
            <article className="contact-info-card">
              <MapPinIcon width={22} height={22} />
              <div>
                <h2>Office Address</h2>
                <p>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.country}
                </p>
              </div>
            </article>
            <article className="contact-info-card">
              <PhoneIcon width={22} height={22} />
              <div>
                <h2>Phone</h2>
                <p>
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>{siteConfig.phone}</a>
                  <br />
                  <a href={`tel:${siteConfig.alternatePhone.replace(/\s+/g, "")}`}>{siteConfig.alternatePhone}</a>
                </p>
              </div>
            </article>
            <article className="contact-info-card">
              <MailIcon width={22} height={22} />
              <div>
                <h2>Email</h2>
                <p>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </p>
              </div>
            </article>
            <div className="map-frame">
              <iframe
                title="Map showing Vashi, Navi Mumbai"
                src="https://maps.google.com/maps?q=Vashi%20Navi%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="form-panel">
            <h2>Inquiry Form</h2>
            <p className="muted-copy">
              Share your interest, target market, or product requirements and we’ll follow up with the
              right context.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
