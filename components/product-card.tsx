import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

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
        <p className="chip">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        <div className="card-footer">
          <span>{product.origin}</span>
          <Link className="inline-link" href={`/product/${product.slug}`}>
            View details
            <ArrowUpRight width={16} height={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
