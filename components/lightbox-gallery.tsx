"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";

type LightboxItem = {
  title: string;
  description: string;
  accent: string;
  image?: string;
  imageAlt?: string;
};

export function LightboxGallery({
  items,
  label,
}: {
  items: LightboxItem[];
  label: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="lightbox-grid" role="list" aria-label={label}>
        {items.map((item, index) => (
          <button
            key={item.title}
            className="lightbox-tile"
            type="button"
            onClick={() => setActiveIndex(index)}
            style={{ "--tile-accent": item.accent } as CSSProperties}
          >
            {item.image ? (
              <span className="lightbox-tile__image">
                <Image
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  width={1200}
                  height={900}
                  className="product-image"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </span>
            ) : (
              <span className="lightbox-tile__visual" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            )}
            <span className="lightbox-tile__body">
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </span>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeItem.title}>
          <button className="lightbox__backdrop" type="button" aria-label="Close gallery item" onClick={() => setActiveIndex(null)} />
          <div className="lightbox__panel">
            <button className="lightbox__close" type="button" onClick={() => setActiveIndex(null)}>
              Close
            </button>
            {activeItem.image ? (
              <div className="lightbox__preview lightbox__preview--image">
                <Image
                  src={activeItem.image}
                  alt={activeItem.imageAlt || activeItem.title}
                  width={1200}
                  height={900}
                  className="product-image"
                  sizes="90vw"
                />
              </div>
            ) : (
              <div className="lightbox__preview" style={{ "--tile-accent": activeItem.accent } as CSSProperties}>
                <span />
                <span />
                <span />
              </div>
            )}
            <div className="lightbox__content">
              <h3>{activeItem.title}</h3>
              <p>{activeItem.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
