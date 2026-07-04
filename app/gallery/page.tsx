import { GalleryCard } from "@/components/gallery-card";
import { DefaultHeroActions, PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { galleryMoments } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Explore a visual-style gallery representing sourcing, grading, packing, cold chain, and export dispatch stages.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Gallery",
          url: absoluteUrl("/gallery"),
          description: "Representative gallery for sourcing and export operations.",
        }}
      />

      <PageHero
        eyebrow="Gallery"
        title="A visual narrative of the export workflow."
        description="This gallery page adds depth to the brand story by showing how sourcing, grading, packing, and dispatch fit together."
        actions={<DefaultHeroActions />}
      />

      <section className="section">
        <div className="container gallery-grid">
          {galleryMoments.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
