"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandMark } from "@/components/icons";
import { navigation, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/" aria-label={`${siteConfig.name} home`}>
          <BrandMark className="brand__mark" width={42} height={42} />
          <span>
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.legalName}</small>
          </span>
        </Link>

        <button
          className="mobile-nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-navigation"
          className={`site-nav ${isOpen ? "site-nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "is-active" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
