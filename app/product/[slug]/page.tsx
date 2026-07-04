import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { ProductCard } from "@/components/product-card";
import { StructuredData } from "@/components/structured-data";
import { getProductBySlug, products } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return buildMetadata({
      title: "Product not found",
      description: "The requested product could not be found.",
      path: `/product/${slug}`,
    });
  }

  return buildMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/product/${product.slug}`,
    keywords: [product.category, product.origin, ...product.exportMarkets],
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (item) => item.slug !== product.slug && item.category === product.category,
  ).slice(0, 3);

  const galleryItems = [
    {
      title: `${product.name} overview`,
      description: "Primary hero-style product view designed to emphasize color, composition, and premium presentation.",
      accent: product.palette.primary,
      image: product.galleryImages[0],
      imageAlt: product.imageAlt,
    },
    {
      title: `${product.name} packaging view`,
      description: `A supplementary panel referencing ${product.packaging.toLowerCase()} and export-readiness.`,
      accent: product.palette.secondary,
      image: product.galleryImages[1] || product.galleryImages[0],
      imageAlt: `${product.name} packaging visual`,
    },
    {
      title: `${product.name} close detail`,
      description: "An additional composition for gallery interaction and lightbox-style browsing.",
      accent: product.palette.accent,
      image: product.galleryImages[2] || product.galleryImages[0],
      imageAlt: `${product.name} close-up visual`,
    },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    category: product.category,
    sku: product.id,
    brand: "Green Roots Exim",
    manufacturer: "Siddhivinayak Foreign Exim Private Limited",
    url: absoluteUrl(`/product/${product.slug}`),
    countryOfOrigin: product.origin,
  };

  return (
    <>
      <StructuredData data={productSchema} />

      <section className="section product-detail-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/product", label: "Products" },
              { label: product.name },
            ]}
          />

          <div className="product-detail-hero__grid">
            <div className="product-detail-hero__visual">
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={1200}
                height={900}
                className="product-image"
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="product-detail-hero__content">
              <p className="chip chip--solid">{product.category}</p>
              <h1>{product.name}</h1>
              <p className="product-detail-hero__tagline">{product.tagline}</p>
              <p>{product.shortDescription}</p>
              <div className="hero-actions">
                <Link className="button button--primary" href="/contact">
                  Contact us for pricing
                </Link>
                <Link className="button button--secondary" href="/contact">
                  Request sample
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div className="rich-panel">
            <h2>Description</h2>
            {product.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="spec-card">
            <h2>Specifications</h2>
            <dl className="spec-list">
              <div>
                <dt>Origin</dt>
                <dd>{product.origin}</dd>
              </div>
              <div>
                <dt>Shelf life</dt>
                <dd>{product.shelfLife}</dd>
              </div>
              <div>
                <dt>Packaging</dt>
                <dd>{product.packaging}</dd>
              </div>
              <div>
                <dt>MOQ</dt>
                <dd>{product.moq}</dd>
              </div>
              <div>
                <dt>Export markets</dt>
                <dd>{product.exportMarkets.join(", ")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="split-panel split-panel--compact">
            <div>
              <h2>Product highlights</h2>
              <ul className="bullet-list">
                {product.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Additional views</h2>
              <p className="muted-copy">
                The detail page includes a lightbox-style gallery treatment so the media presentation can
                scale later when actual product photography is added.
              </p>
            </div>
          </div>
          <LightboxGallery items={galleryItems} label={`${product.name} image gallery`} />
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="section">
          <div className="container">
            <h2>Related products</h2>
            <div className="card-grid card-grid--products">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
