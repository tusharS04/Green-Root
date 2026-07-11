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
          <div className="contact-panel contact-panel--green">
            <h2>Headquarters</h2>
            
            <div className="contact-details-list">
              <div className="contact-detail-item">
                <span className="contact-detail-emoji" aria-hidden="true">📍</span>
                <div>
                  <h3>ADDRESS</h3>
                  <p>
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                    <br />
                    {siteConfig.address.country}
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-emoji" aria-hidden="true">✉️</span>
                <div>
                  <h3>EMAIL ADDRESS</h3>
                  <p>
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-emoji" aria-hidden="true">📞</span>
                <div>
                  <h3>PHONE LINE</h3>
                  <p>
                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>{siteConfig.phone}</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-emoji" aria-hidden="true">📜</span>
                <div>
                  <h3>LEGAL REGISTRATIONS</h3>
                  <p>
                    <strong>IEC:</strong> ABCDE1234F
                    <br />
                    <strong>GST:</strong> 27ABCDE1234F1Z5
                  </p>
                </div>
              </div>
            </div>

            <a 
              className="button button--whatsapp-chat" 
              href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
 
          <div className="form-panel">
            <h2>Send Sourcing Enquiry</h2>
            <p className="muted-copy">
              Share your target market, products of interest, and volume requirements. Our export team responds within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section section--map" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="map-frame">
            <iframe
              title="Map showing Vashi, Navi Mumbai"
              src="https://maps.google.com/maps?q=Vashi%20Navi%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
