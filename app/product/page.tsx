import { ProductCard } from "@/components/product-card";
import { DefaultHeroActions, PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { products } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Browse export-ready fruits and vegetables with structured specifications, category grouping, and inquiry pathways.",
  path: "/product",
});

const categories = Array.from(new Set(products.map((product) => product.category)));

export default function ProductsPage() {
  const listingSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Product Listing",
    url: absoluteUrl("/product"),
    description: "Export-ready fresh fruit and vegetable catalog.",
  };

  return (
    <>
      <StructuredData data={listingSchema} />

      <PageHero
        eyebrow="Our products"
        title="A curated export catalog built for clarity, not clutter."
        description="Each product page contains the core specifications buyers usually ask for first: origin, shelf life, packaging, MOQ, and export-market fit."
        actions={<DefaultHeroActions />}
      />

      <section className="section">
        <div className="container">
          <Reveal direction="up" delay={0.1}>
            <SectionHeading
              eyebrow="Categories"
              title="Fresh fruits and vegetables grouped to make buyer exploration faster."
              description="The product grid is responsive, structured, and intentionally simple to scan across devices."
            />
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <div className="category-pills" role="list" aria-label="Product categories">
              {categories.map((category) => (
                <span className="chip chip--solid" key={category}>
                  {category}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="card-grid card-grid--products">
            {products.map((product, idx) => (
              <Reveal key={product.id} direction="up" delay={(idx % 4) * 0.1}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
