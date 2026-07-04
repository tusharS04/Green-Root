import { DefaultHeroActions, PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Our Export Company",
  description:
    "Learn about our mission, export philosophy, sourcing values, and the company story behind Green Roots Exim.",
  path: "/about",
});

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Green Roots Exim",
    url: absoluteUrl("/about"),
    description: "Company overview, mission, goals, and sourcing philosophy.",
  };

  return (
    <>
      <StructuredData data={aboutSchema} />

      <PageHero
        eyebrow="About us"
        title="A modern produce exporter with a practical commitment to freshness."
        description="We designed this company story around trust, sourcing discipline, and a clear export proposition for international buyers."
        actions={<DefaultHeroActions />}
      />

      <section className="section">
        <div className="container split-panel">
          <div>
            <SectionHeading
              eyebrow="Company overview"
              title={`${siteConfig.legalName} is positioned as a fast-growing export business based in Mumbai, India.`}
              description="The website presents the company as commercially polished while staying grounded in agriculture, traceability, and buyer support."
            />
          </div>
          <div className="rich-panel">
            <p>
              We showcase the company as an export partner that understands both produce quality and the
              systems surrounding it: certification readiness, product communication, packaging logic,
              and destination-focused execution.
            </p>
            <p>
              Every section of the site reinforces the same idea: a buyer should feel they are dealing
              with a serious, responsive, and detail-oriented team rather than a generic trading profile.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container mission-banner">
          <p className="eyebrow">Mission statement</p>
          <blockquote>
            “Our mission is to establish ourselves as the touchstone of freshness by connecting global
            markets with responsibly sourced Indian produce.”
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our goal"
            title="Build long-term buyer relationships through better sourcing communication."
            description="The About page turns the company narrative into concrete operating principles."
          />
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Freshness without ambiguity</h3>
              <p>Clear product descriptions, practical specs, and export-market context reduce buyer guesswork.</p>
            </article>
            <article className="feature-card">
              <h3>Respect for local farms</h3>
              <p>We frame growers and sourcing networks as part of the quality story, not as invisible supply inputs.</p>
            </article>
            <article className="feature-card">
              <h3>Professional execution</h3>
              <p>Documentation, responsiveness, and presentation are treated as essential parts of export quality.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container timeline-grid">
          <article className="timeline-card">
            <span>01</span>
            <h3>Source thoughtfully</h3>
            <p>Work with region-appropriate produce clusters and product-specific harvest windows.</p>
          </article>
          <article className="timeline-card">
            <span>02</span>
            <h3>Grade precisely</h3>
            <p>Prioritize size, finish, maturity, and packaging readiness before shipment planning.</p>
          </article>
          <article className="timeline-card">
            <span>03</span>
            <h3>Communicate clearly</h3>
            <p>Keep importers informed through inquiry, documentation, and destination-facing product details.</p>
          </article>
        </div>
      </section>
    </>
  );
}
