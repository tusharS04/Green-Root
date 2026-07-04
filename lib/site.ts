export const siteConfig = {
  name: "Green Roots Exim",
  legalName: "Siddhivinayak Foreign Exim Private Limited",
  title: "Green Roots Exim | Fresh Fruits and Vegetables Exporter from India",
  description:
    "Professional agriculture export website for Indian fresh fruits and vegetables, featuring products, certifications, and direct inquiry workflows for global buyers.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.greenrootsexim.com",
  email: "inquiries@greenrootsexim.com",
  phone: "+91 22 4898 2200",
  alternatePhone: "+91 98765 43210",
  address: {
    line1: "B-408, Meridian Trade Centre",
    line2: "Vashi, Navi Mumbai, Maharashtra 400703",
    country: "India",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  keywords: [
    "fresh fruit exporter india",
    "vegetable exporter mumbai",
    "agricultural export company",
    "indian produce export",
    "global produce supplier",
    "certified fruit exporter",
  ],
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/product", label: "Products" },
  { href: "/certificates", label: "Certificates" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/product", label: "Products" },
  { href: "/certificates", label: "Certificates" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
