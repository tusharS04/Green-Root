import Link from "next/link";

import { CertificateCard } from "@/components/certificate-card";
import { ArrowUpRight } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { certificates, products, stats, testimonials } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";

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

      {/* 1. HERO SECTION - DARK FOREST GRADIENT */}
      <section className="hero section">
        <div className="container hero__container">
          <div className="hero__grid">
            <div className="hero__content">
              <Reveal direction="up" delay={0.1}>
                <p className="eyebrow">TRUSTED AGRICULTURAL EXPORTS</p>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <h1>India's Finest <em>Agri Produce</em> to the World</h1>
              </Reveal>
              <Reveal direction="up" delay={0.3}>
                <p className="hero__description">
                  {siteConfig.legalName} coordinates cold-chain supply and compliance-backed sourcing, delivering fresh fruits and vegetables to premium buyers globally.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.4}>
                <div className="hero-actions">
                  <Link className="button button--primary" href="/product">
                    Explore Catalog
                  </Link>
                  <Link className="button button--secondary" href="/contact">
                    Request Quote
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="hero__stack">
              <Reveal direction="left" delay={0.3}>
                <div className="hero__stats-grid">
                  <div className="hero__stat-card">
                    <h3><Counter value="15+" /></h3>
                    <p>Years Sourcing Experience</p>
                  </div>
                  <div className="hero__stat-card">
                    <h3><Counter value="18+" /></h3>
                    <p>Countries Served</p>
                  </div>
                  <div className="hero__stat-card">
                    <h3><Counter value="25+" /></h3>
                    <p>Grower Networks & Clusters</p>
                  </div>
                  <div className="hero__stat-card">
                    <h3><Counter value="10k+" /></h3>
                    <p>MT Annual Export Volume</p>
                  </div>
                </div>
              </Reveal>
              <Reveal direction="left" delay={0.4}>
                <div className="hero__tags-container">
                  <span className="hero__tag">Mangoes</span>
                  <span className="hero__tag">Grapes</span>
                  <span className="hero__tag">Pomegranates</span>
                  <span className="hero__tag">Onions</span>
                  <span className="hero__tag">Chillies</span>
                  <span className="hero__tag">Okra</span>
                  <span className="hero__tag">Drumsticks</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE SCROLLING TICKER */}
      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker">
          <div className="ticker__item">Global Sourcing Partner</div>
          <div className="ticker__item">Freshness Guaranteed</div>
          <div className="ticker__item">APEDA Certified Exporter</div>
          <div className="ticker__item">FIEO Member</div>
          <div className="ticker__item">Strict Grading Standards</div>
          <div className="ticker__item">100% Quality Checked</div>
          <div className="ticker__item">Fast Shipment Dispatch</div>
          
          <div className="ticker__item">Global Sourcing Partner</div>
          <div className="ticker__item">Freshness Guaranteed</div>
          <div className="ticker__item">APEDA Certified Exporter</div>
          <div className="ticker__item">FIEO Member</div>
          <div className="ticker__item">Strict Grading Standards</div>
          <div className="ticker__item">100% Quality Checked</div>
          <div className="ticker__item">Fast Shipment Dispatch</div>
        </div>
      </div>

      {/* 3. WHO WE ARE - LIGHT BACKGROUND */}
      <section className="section">
        <div className="container split-panel">
          <Reveal direction="up" delay={0.1}>
            <div>
              <SectionHeading
                eyebrow="Who we are"
                title="A disciplined export desk built for global commercial standards."
                description="We position the company as a dependable sourcing partner for clients who expect clear product information, thoughtful presentation, and responsive inquiry handling."
              />
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <div className="rich-panel">
              <p>
                Based in Mumbai, Green Roots Exim represents a modern agriculture export business that
                values product quality and the operational discipline around it: sizing, packaging, documentation,
                cold chain maintenance, and buyer communication.
              </p>
              <p>
                The result is a public-facing website designed to convert interest into structured inquiries while
                reinforcing credibility through certificates, technical specs, and accessible communication channels.
              </p>
              <Link className="inline-link" href="/about">
                Read the company story
                <ArrowUpRight width={16} height={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS - LIGHT BACKGROUND, STAGGERED MASONRY */}
      <section className="section section--soft">
        <div className="container">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="Featured products"
              title="A focused portfolio of export-ready produce."
              description="Each product card leads into a full detail page with origin, shelf life, packaging, MOQ, and market context."
            />
          </Reveal>
          <div className="card-grid card-grid--products card-grid--staggered">
            {featuredProducts.map((product, idx) => (
              <Reveal key={product.id} direction="up" delay={idx * 0.1}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MARKETS EXPORT REACH - DARK GREEN CONTAINER SECTION */}
      <section className="section section--dark-green">
        <div className="container">
          <div className="markets-layout">
            <Reveal direction="up" delay={0.1}>
              <div className="markets-content">
                <p className="eyebrow">Export Reach</p>
                <h2>18+ Global Markets & Sourcing Hubs</h2>
                <p className="markets-description">
                  We coordinate cold-chain reefer shipping and air freight shipments to modern trade buyers,
                  wholesale distributors, and retail importers across multiple continents.
                </p>
                <Link className="button button--primary" href="/contact">
                  Enquire About Your Market
                </Link>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <div className="markets-grid">
                <span className="market-tag">Saudi Arabia</span>
                <span className="market-tag">United Arab Emirates</span>
                <span className="market-tag">United Kingdom</span>
                <span className="market-tag">Netherlands</span>
                <span className="market-tag">Qatar</span>
                <span className="market-tag">Oman</span>
                <span className="market-tag">Singapore</span>
                <span className="market-tag">Malaysia</span>
                <span className="market-tag">Germany</span>
                <span className="market-tag">Russia</span>
                <span className="market-tag">Australia</span>
                <span className="market-tag">Japan</span>
                <span className="market-tag">South Africa</span>
                <span className="market-tag">Bahrain</span>
                <span className="market-tag">Kuwait</span>
                <span className="market-tag">Canada</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US - EDITORIAL ALTERNATING LIST */}
      <section className="section">
        <div className="container split-panel">
          <Reveal direction="up" delay={0.1}>
            <div className="editorial-feature-left">
              <p className="eyebrow">OPERATIONAL EXCELLENCE</p>
              <h2>Sourced with discipline, shipped with care.</h2>
              <p className="description">
                We believe export quality is not accidental. It is the result of direct farmer contracts, post-harvest sorting guidelines, transit-ready grading, and rigorous packaging compliance.
              </p>
              <div className="editorial-feature-quote">
                <blockquote>
                  "Our goal is to build long-term commercial trust signals by handling grading, sorting, and documents with absolute operational discipline."
                </blockquote>
                <cite>— Export Operations Desk</cite>
              </div>
            </div>
          </Reveal>
          
          <div className="editorial-feature-right">
            <div className="editorial-list">
              <Reveal direction="up" delay={0.1}>
                <div className="editorial-item">
                  <div className="editorial-item__num">01</div>
                  <div className="editorial-item__content">
                    <h3>Direct Farm Sourcing</h3>
                    <p>Sourced directly from India's core grower regions with complete traceability back to the farm.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.15}>
                <div className="editorial-item">
                  <div className="editorial-item__num">02</div>
                  <div className="editorial-item__content">
                    <h3>Rigorous Quality Checks</h3>
                    <p>Multi-stage sorting controls pod size, skin finish, blemish count, and maturity before packaging.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <div className="editorial-item">
                  <div className="editorial-item__num">03</div>
                  <div className="editorial-item__content">
                    <h3>Flexible Packaging</h3>
                    <p>Custom corrugated cartons, telescopic boxes, or mesh bags designed to withstand ocean transit.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.25}>
                <div className="editorial-item">
                  <div className="editorial-item__num">04</div>
                  <div className="editorial-item__content">
                    <h3>Full Export Compliance</h3>
                    <p>Pre-sorted documentation, phyto-certificates, APEDA certificates, and custom clearances handled.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.3}>
                <div className="editorial-item">
                  <div className="editorial-item__num">05</div>
                  <div className="editorial-item__content">
                    <h3>Reliable Cold Chain</h3>
                    <p>Reefer-container temperature monitoring and rapid pre-cooling prevent shelf degradation.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS - LARGE SINGLE-QUOTE EDITORIAL SECTION */}
      <section className="section section--soft">
        <div className="container">
          <Reveal direction="up">
            <div className="editorial-quote-container">
              <span className="quote-icon">“</span>
              <blockquote className="editorial-quote-text">
                {testimonials[0].quote}
              </blockquote>
              <cite className="editorial-quote-cite">— {testimonials[0].author}</cite>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. CERTIFICATES - LIGHT BACKGROUND */}
      <section className="section">
        <div className="container">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="Certificates preview"
              title="Important accreditations are visible without overwhelming the buyer journey."
              description="The certificates page provides a fuller gallery and context for compliance-focused conversations."
            />
          </Reveal>
          <div className="card-grid card-grid--certificates">
            {certificates.slice(0, 2).map((certificate, idx) => (
              <Reveal key={certificate.id} direction="up" delay={idx * 0.15}>
                <CertificateCard certificate={certificate} />
              </Reveal>
            ))}
          </div>
          <div className="section-cta">
            <Reveal direction="up" delay={0.3}>
              <Link className="button button--secondary" href="/certificates">
                View all certifications
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA - DARK GREEN SECTION */}
      <section className="section cta-banner">
        <div className="container cta-banner__inner">
          <Reveal direction="up" delay={0.1}>
            <div>
              <p className="eyebrow">Ready to discuss supply?</p>
              <h2>Let’s build your next export inquiry around clarity and confidence.</h2>
              <p>
                Whether you need a container program, a mixed-load requirement, or a product availability
                discussion, the contact workflow is set up to move quickly.
              </p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <Link className="button button--primary" href="/contact">
              Contact us now
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
