import Link from "next/link";

import { CertificateCard } from "@/components/certificate-card";
import { ArrowUpRight } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { ProduceVisual } from "@/components/produce-visual";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { certificates, products, stats, testimonials } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Fresh Fruits and Vegetables Exporter from India",
  description:
    "Discover premium fresh fruits, vegetables, certifications, and export-ready sourcing support from a Mumbai-based agriculture export company.",
  path: "/",
});

const featuredProducts = products.filter((product) => product.featured).slice(0, 4);

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };

  return (
    <>
      <StructuredData data={homeSchema} />

      <section className="hero section">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow">Export-ready agricultural sourcing</p>
            <h1>Fresh produce from India, presented with discipline buyers can trust.</h1>
            <p className="hero__description">
              {siteConfig.legalName} helps importers, distributors, and retail partners source fruits
              and vegetables with strong presentation, reliable communication, and certification-backed
              confidence.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" href="/contact">
                Get in Touch
              </Link>
              <Link className="button button--secondary" href="/product">
                Browse Products
              </Link>
            </div>
            <div className="hero__meta">
              <span>Mumbai based</span>
              <span>Export certifications</span>
              <span>Responsive buyer support</span>
            </div>
          </div>

          <div className="hero__visual-stack">
            <div className="hero__visual-card hero__visual-card--primary">
              <ProduceVisual product={featuredProducts[0]} size="large" />
            </div>
            <div className="hero__visual-card hero__visual-card--secondary">
              <div>
                <p className="eyebrow">Featured categories</p>
                <h2>Fruits, vegetables, certifications, and buyer-first logistics.</h2>
                <p>
                  Built for importers who value quality presentation, practical packaging, and steady
                  communication from inquiry through dispatch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((item) => (
              <article className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A polished export front built around freshness, consistency, and commercial clarity."
              description="We position the company as a dependable sourcing partner for clients who expect clear product information, thoughtful presentation, and responsive inquiry handling."
            />
          </div>
          <div className="rich-panel">
            <p>
              Based in Mumbai, Green Roots Exim represents a modern agriculture export business that
              values product quality and the discipline around it: grading, packaging, documentation,
              and buyer communication.
            </p>
            <p>
              The result is a public-facing website designed to convert attention into inquiries while
              reinforcing credibility through certificates, structured product details, and accessible
              contact channels.
            </p>
            <Link className="inline-link" href="/about">
              Read the company story
              <ArrowUpRight width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Featured products"
            title="A focused portfolio of export-ready produce."
            description="Each product card leads into a full detail page with origin, shelf life, packaging, MOQ, and market context."
          />
          <div className="card-grid card-grid--products">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why choose us"
            title="Commercial trust signals built directly into the experience."
            description="The website emphasizes reliability through product transparency, certification visibility, responsive inquiry flow, and a refined visual system."
          />
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Quality-led sourcing</h3>
              <p>We highlight grading discipline, maturity control, and packaging choices that matter to importers.</p>
            </article>
            <article className="feature-card">
              <h3>Certification visibility</h3>
              <p>Memberships and registrations are surfaced clearly so buyers can assess export readiness fast.</p>
            </article>
            <article className="feature-card">
              <h3>Inquiry-first structure</h3>
              <p>Every page supports the core conversion path: explore, evaluate, and start an export conversation.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="Built to feel credible to serious buyers."
            description="The site uses concise social proof and partner-oriented language to reinforce a professional tone."
          />
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.author}>
                <p>“{testimonial.quote}”</p>
                <strong>{testimonial.author}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Certificates preview"
            title="Important accreditations are visible without overwhelming the buyer journey."
            description="The certificates page provides a fuller gallery and context for compliance-focused conversations."
          />
          <div className="card-grid card-grid--certificates">
            {certificates.slice(0, 2).map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
          <div className="section-cta">
            <Link className="button button--secondary" href="/certificates">
              View all certifications
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <p className="eyebrow">Ready to discuss supply?</p>
            <h2>Let’s build your next export inquiry around clarity and confidence.</h2>
            <p>
              Whether you need a container program, a mixed-load requirement, or a product availability
              discussion, the contact workflow is set up to move quickly.
            </p>
          </div>
          <Link className="button button--primary" href="/contact">
            Contact us now
          </Link>
        </div>
      </section>
    </>
  );
}
