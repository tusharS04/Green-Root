import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <section className="page-hero section">
      <div className="container">
        <div className="page-hero__panel">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__description">{description}</p>
          {actions ? <div className="hero-actions">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function DefaultHeroActions() {
  return (
    <>
      <Link className="button button--primary" href="/contact">
        Start an Inquiry
      </Link>
      <Link className="button button--secondary" href="/product">
        Explore Products
      </Link>
    </>
  );
}
