import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="section not-found-page">
      <div className="container not-found-page__inner">
        <p className="eyebrow">404</p>
        <h1>That page could not be found.</h1>
        <p>
          The route may have changed, or the page might no longer exist. You can return to the homepage
          or continue browsing the product catalog.
        </p>
        <div className="hero-actions">
          <Link className="button button--primary" href="/">
            Go home
          </Link>
          <Link className="button button--secondary" href="/product">
            View products
          </Link>
        </div>
      </div>
    </section>
  );
}
