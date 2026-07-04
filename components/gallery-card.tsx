import type { CSSProperties } from "react";

import type { GalleryMoment } from "@/lib/content";

export function GalleryCard({ item }: { item: GalleryMoment }) {
  return (
    <article className="gallery-card">
      <div className="gallery-card__visual" style={{ "--gallery-accent": item.accent } as CSSProperties}>
        <span />
        <span />
        <span />
      </div>
      <div className="gallery-card__body">
        <h3>{item.title}</h3>
        <p>{item.caption}</p>
      </div>
    </article>
  );
}
