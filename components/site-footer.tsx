import Link from "next/link";

import {
  BrandMark,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <div className="brand brand--footer">
            <BrandMark className="brand__mark" width={32} height={32} />
            <span>
              <strong>Green Roots Exim</strong>
            </span>
          </div>
          <p>
            Premium agricultural produce exports from India — fresh fruits, vegetables, and specialty commodities sourced and delivered to 18+ countries worldwide.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">FSSAI</span>
            <span className="footer-badge">APEDA</span>
            <span className="footer-badge">ISO 22000</span>
            <span className="footer-badge">Organic Sourcing</span>
          </div>
          <div className="social-links" aria-label="Social media links">
            <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile">
              <LinkedInIcon width={18} height={18} />
            </a>
            <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Visit Instagram profile">
              <InstagramIcon width={18} height={18} />
            </a>
            <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Visit Facebook profile">
              <FacebookIcon width={18} height={18} />
            </a>
          </div>
        </div>

        <div>
          <h3>Products</h3>
          <ul className="footer-links">
            <li><Link href="/product/alphonso-mango">Alphonso Mango</Link></li>
            <li><Link href="/product/pomegranate">Pomegranate</Link></li>
            <li><Link href="/product/green-grapes">Green Grapes</Link></li>
            <li><Link href="/product/cavendish-banana">Cavendish Banana</Link></li>
            <li><Link href="/product">Browse All Products</Link></li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/product">Products</Link></li>
            <li><Link href="/certificates">Certifications</Link></li>
            <li><Link href="/gallery">Operations Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact Details</h3>
          <ul className="contact-list">
            <li>
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.country}
              </span>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>{siteConfig.phone}</a>
            </li>
            <li style={{ marginTop: "12px" }}>
              <a 
                className="button button--whatsapp-footer" 
                href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
              >
                💬 WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
        <p className="footer-legal-reg">IEC: ABCDE1234F &bull; GST: 27ABCDE1234F1Z5</p>
      </div>
    </footer>
  );
}
