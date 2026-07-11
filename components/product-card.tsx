import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/lib/content";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card product-card">
      <div className="card-visual">
        <div className="product-image-frame">
          <Image
            src={product.image}
            alt={product.imageAlt}
            width={1200}
            height={900}
            className="product-image"
            sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </div>
      <div className="card-body">
        <div className="card-meta">
          <span className="chip">{product.category}</span>
          <span className="card-origin">{product.origin}</span>
        </div>
        <h3>{product.name}</h3>
        <p className="card-desc">{product.shortDescription}</p>
        <div className="card-moq">
          <span>MOQ:</span> <strong>{product.moq}</strong>
        </div>
        <div className="card-actions">
          <Link className="button button--secondary button--sm" href={`/product/${product.slug}`}>
            Details
          </Link>
          <Link className="button button--primary button--sm" href="/contact">
            + Inquire
          </Link>
        </div>
      </div>
    </article>
  );
}
