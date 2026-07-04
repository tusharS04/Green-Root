import Link from "next/link";

import {
  BrandMark,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";
import { footerLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <div className="brand brand--footer">
            <BrandMark className="brand__mark" width={42} height={42} />
            <span>
              <strong>{siteConfig.name}</strong>
              <small>{siteConfig.legalName}</small>
            </span>
          </div>
          <p>
            Export-focused sourcing, grading, certification support, and buyer-first communication for
            fresh fruits and vegetables from India.
          </p>
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
          <h3>Quick Links</h3>
          <ul className="footer-links">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              <MapPinIcon width={18} height={18} />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.country}
              </span>
            </li>
            <li>
              <PhoneIcon width={18} height={18} />
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>{siteConfig.phone}</a>
            </li>
            <li>
              <MailIcon width={18} height={18} />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
        <p>Admin operations are planned for a later phase and are intentionally excluded from this release.</p>
      </div>
    </footer>
  );
}
