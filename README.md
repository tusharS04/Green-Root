# Green Roots Exim Website

Production-ready Next.js website for an agricultural export company, built from the provided specification PDF with the admin panel intentionally deferred to a later phase.

## Stack

- Next.js App Router
- TypeScript
- CSS-first custom design system
- Server route for contact inquiries

## Run locally

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env.local` and update the values.

- `NEXT_PUBLIC_SITE_URL`: deployed site URL
- `CONTACT_RECIPIENT_EMAIL`: inbox for website inquiries
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`: optional SMTP config for sending contact form emails

If SMTP is not configured, the contact API still accepts submissions and logs them server-side with a `202` response.

## Included routes

- `/`
- `/about`
- `/product`
- `/product/[slug]`
- `/certificates`
- `/gallery`
- `/contact`
- `/privacy-policy`
- `/terms`

## Production notes

- `robots.txt`, `sitemap.xml`, manifest, metadata, and Open Graph image route are included.
- Contact form includes validation, spam honeypot handling, and simple rate limiting.
- Admin functionality is intentionally excluded from this release and can be added in a future phase.
