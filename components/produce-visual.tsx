import type { CSSProperties } from "react";

import type { Product } from "@/lib/content";

type ProduceVisualProps = {
  product: Product;
  size?: "small" | "medium" | "large";
};

export function ProduceVisual({ product, size = "medium" }: ProduceVisualProps) {
  return (
    <div
      className={`produce-visual produce-visual--${size}`}
      style={
        {
          "--visual-primary": product.palette.primary,
          "--visual-secondary": product.palette.secondary,
          "--visual-accent": product.palette.accent,
        } as CSSProperties
      }
      aria-hidden="true"
    >
      <span className="produce-visual__halo" />
      <span className="produce-visual__shape produce-visual__shape--one" />
      <span className="produce-visual__shape produce-visual__shape--two" />
      <span className="produce-visual__shape produce-visual__shape--three" />
      <span className="produce-visual__grid" />
    </div>
  );
}
