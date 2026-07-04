import type { MetadataRoute } from "next";

import { products } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/product",
    "/certificates",
    "/gallery",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.7,
    })),
    ...products.map((product) => ({
      url: absoluteUrl(`/product/${product.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
