export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  shortDescription: string;
  description: string[];
  origin: string;
  shelfLife: string;
  packaging: string;
  moq: string;
  exportMarkets: string[];
  imageAlt: string;
  image: string;
  galleryImages: string[];
  highlights: string[];
  palette: {
    primary: string;
    secondary: string;
    accent: string;
  };
  featured?: boolean;
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  year: string;
  accent: string;
};

export type GalleryMoment = {
  id: string;
  title: string;
  caption: string;
  accent: string;
};

export const products: Product[] = [
  {
    id: "prod-alphonso-mango",
    name: "Alphonso Mango",
    slug: "alphonso-mango",
    category: "Fresh Fruits",
    tagline: "Premium hand-selected mangoes with rich aroma and export-ready packing.",
    shortDescription:
      "A signature Indian mango variety prized for sweetness, bright saffron flesh, and consistent grading.",
    description: [
      "Our Alphonso mango program is built for premium retail and wholesale buyers who need excellent color uniformity, aroma retention, and transit-safe packaging. Each lot is sorted for maturity and blemish control before dispatch.",
      "We coordinate harvest timing, pre-cooling, and palletized logistics to help importers receive fruit with dependable texture and shelf performance. The result is a product that arrives looking refined and tasting unmistakably authentic.",
    ],
    origin: "Ratnagiri, Maharashtra, India",
    shelfLife: "14 to 21 days under cold-chain conditions",
    packaging: "2 kg, 3 kg, and 5 kg corrugated export cartons",
    moq: "1 x 20 ft reefer container",
    exportMarkets: ["UAE", "Qatar", "United Kingdom", "Singapore"],
    imageAlt: "Stylized export-grade Alphonso mango display.",
    image: "/images/products/alphonso-mango.png",
    galleryImages: [
      "/images/products/alphonso-mango.png",
      "/images/products/alphonso-mango.png",
      "/images/products/alphonso-mango.png",
    ],
    highlights: ["Brix-focused sourcing", "Traceable orchard batches", "Reefer-ready packing"],
    palette: {
      primary: "#ef8f1d",
      secondary: "#f8d16d",
      accent: "#7b4b1f",
    },
    featured: true,
  },
  {
    id: "prod-pomegranate",
    name: "Pomegranate",
    slug: "pomegranate",
    category: "Fresh Fruits",
    tagline: "Ruby-red arils, durable rind strength, and strong shelf appeal.",
    shortDescription:
      "A high-demand export fruit selected for color, firmness, and consistency across shipments.",
    description: [
      "Our pomegranates are sourced from experienced grower clusters that prioritize rind finish, internal color, and size grading suitable for modern trade and traditional distribution channels alike.",
      "Each shipment is prepared with careful post-harvest handling, allowing buyers to balance premium presentation with dependable arrival quality across regional and long-haul routes.",
    ],
    origin: "Solapur, Maharashtra, India",
    shelfLife: "30 to 45 days under recommended storage",
    packaging: "3 kg and 5 kg telescopic cartons",
    moq: "1 x 20 ft reefer container",
    exportMarkets: ["Bangladesh", "Malaysia", "Saudi Arabia", "Netherlands"],
    imageAlt: "Stylized premium pomegranate cluster prepared for export.",
    image: "/images/products/pomegranate.png",
    galleryImages: [
      "/images/products/pomegranate.png",
      "/images/products/pomegranate.png",
      "/images/products/pomegranate.png",
    ],
    highlights: ["Uniform caliber sorting", "Strong rind integrity", "Long-haul export suitability"],
    palette: {
      primary: "#8d2436",
      secondary: "#d64c63",
      accent: "#f0b4b8",
    },
    featured: true,
  },
  {
    id: "prod-green-grapes",
    name: "Green Grapes",
    slug: "green-grapes",
    category: "Fresh Fruits",
    tagline: "Crisp bite, balanced sweetness, and premium bunch presentation.",
    shortDescription:
      "Carefully packed green grapes developed for importers who value freshness and attractive shelf display.",
    description: [
      "Our green grape line emphasizes bunch uniformity, berry bloom retention, and transit resilience. The product is especially suited to buyers who need dependable visual presentation in retail environments.",
      "Cooling discipline, moisture management, and export packing standards help extend freshness while protecting the fruit through port handling and international distribution.",
    ],
    origin: "Nashik, Maharashtra, India",
    shelfLife: "28 to 35 days under cold storage",
    packaging: "4.5 kg punnets or liner bag cartons",
    moq: "1 x 20 ft reefer container",
    exportMarkets: ["Russia", "UAE", "Oman", "Sri Lanka"],
    imageAlt: "Stylized green grape bunches arranged in export cartons.",
    image: "/images/products/green-grapes.png",
    galleryImages: [
      "/images/products/green-grapes.png",
      "/images/products/green-grapes.png",
      "/images/products/green-grapes.png",
    ],
    highlights: ["Retail-ready presentation", "Moisture-controlled packing", "Cold-chain disciplined supply"],
    palette: {
      primary: "#5f8f2b",
      secondary: "#b6d867",
      accent: "#2d4520",
    },
    featured: true,
  },
  {
    id: "prod-banana",
    name: "Cavendish Banana",
    slug: "cavendish-banana",
    category: "Fresh Fruits",
    tagline: "Consistent finger length, bright peel color, and stable shelf behavior.",
    shortDescription:
      "Export-grade Cavendish bananas managed for color control and dependable arrival quality.",
    description: [
      "Our Cavendish banana program focuses on mature-green harvest windows, robust carton design, and shipment planning that supports reliable ripening behavior in destination markets.",
      "This makes it a practical option for importers who need a steady commercial product with presentation quality and operational predictability.",
    ],
    origin: "Jalgaon, Maharashtra, India",
    shelfLife: "21 to 28 days with cold-chain management",
    packaging: "13.5 kg ventilated cartons",
    moq: "1 x 40 ft reefer container",
    exportMarkets: ["Iran", "Kuwait", "Nepal", "Bahrain"],
    imageAlt: "Stylized Cavendish banana hands in a premium export arrangement.",
    image: "/images/products/cavendish-banana.png",
    galleryImages: ["/images/products/cavendish-banana.png"],
    highlights: ["Ripening-friendly harvest stage", "Ventilated cartons", "High-volume export capability"],
    palette: {
      primary: "#d6a70f",
      secondary: "#f2db73",
      accent: "#6b5710",
    },
  },
  {
    id: "prod-okra",
    name: "Fresh Okra",
    slug: "fresh-okra",
    category: "Vegetables",
    tagline: "Tender pods with clean finish and strict size selection.",
    shortDescription:
      "A frequently shipped vegetable line designed for buyers who need freshness, uniformity, and visual cleanliness.",
    description: [
      "We source okra with close attention to pod tenderness, color, and length consistency. The product is packed rapidly after sorting to preserve freshness and reduce handling stress.",
      "For distributors and food service importers, this creates a dependable vegetable line that performs well across fast-moving channels.",
    ],
    origin: "Gujarat and Maharashtra grower network",
    shelfLife: "10 to 14 days in refrigerated conditions",
    packaging: "2 kg, 4 kg, and 5 kg ventilated cartons",
    moq: "500 kg mixed load or container program",
    exportMarkets: ["UAE", "Qatar", "Bahrain", "Maldives"],
    imageAlt: "Stylized display of trimmed export-grade okra pods.",
    image: "/images/products/fresh-okra.png",
    galleryImages: ["/images/products/fresh-okra.png"],
    highlights: ["Tender harvest selection", "Fast pack-out cycle", "Flexible commercial pack sizes"],
    palette: {
      primary: "#3d7a3a",
      secondary: "#8dcf6b",
      accent: "#243d25",
    },
    featured: true,
  },
  {
    id: "prod-red-onion",
    name: "Red Onion",
    slug: "red-onion",
    category: "Vegetables",
    tagline: "Strong skin finish, reliable size bands, and long-haul shipping practicality.",
    shortDescription:
      "Commercial export onion selected for durability, clean curing, and broad destination suitability.",
    description: [
      "Our red onions are curated for outer skin strength, curing quality, and packaging efficiency. Buyers benefit from consistent grading and dependable commercial readiness.",
      "The supply program supports containerized exports with a focus on minimizing transit damage and maximizing usable shelf life on arrival.",
    ],
    origin: "Nashik, Maharashtra, India",
    shelfLife: "45 to 60 days in dry and ventilated conditions",
    packaging: "10 kg, 20 kg, and mesh bag formats",
    moq: "1 x 20 ft container",
    exportMarkets: ["Sri Lanka", "Malaysia", "UAE", "Mauritius"],
    imageAlt: "Stylized red onion composition highlighting export quality bulbs.",
    image: "/images/products/red-onion.png",
    galleryImages: ["/images/products/red-onion.png"],
    highlights: ["Commercial grade stability", "Ventilated packing options", "Transit-friendly curing"],
    palette: {
      primary: "#8b5a6b",
      secondary: "#c790a2",
      accent: "#3a2430",
    },
  },
  {
    id: "prod-green-chilli",
    name: "Green Chilli",
    slug: "green-chilli",
    category: "Vegetables",
    tagline: "Vibrant green color, firm skin, and carefully controlled handling.",
    shortDescription:
      "Fresh green chilli exported for buyers who need visual punch and strong packing discipline.",
    description: [
      "This product line emphasizes firmness, color brightness, and low field damage. It is especially suitable for ethnic retail and food distribution channels seeking high-impact freshness.",
      "We maintain careful sorting and packing routines to protect the chillies through transport while preserving their clean, market-ready presentation.",
    ],
    origin: "Karnataka and Maharashtra supply zones",
    shelfLife: "10 to 14 days under refrigeration",
    packaging: "2 kg and 4 kg punnets or cartons",
    moq: "500 kg mixed load or container program",
    exportMarkets: ["Singapore", "UAE", "Oman", "Qatar"],
    imageAlt: "Stylized export presentation of bright green chillies.",
    image: "/images/products/green-chilli.svg",
    galleryImages: ["/images/products/green-chilli.svg"],
    highlights: ["High visual freshness", "Protected handling", "Flexible mixed-load exports"],
    palette: {
      primary: "#26724c",
      secondary: "#69c87f",
      accent: "#143223",
    },
  },
  {
    id: "prod-drumstick",
    name: "Drumstick",
    slug: "drumstick",
    category: "Vegetables",
    tagline: "Long, straight pods selected for premium ethnic retail and wholesale trade.",
    shortDescription:
      "A specialty vegetable line prepared for freshness, shape consistency, and destination-ready packing.",
    description: [
      "Our drumsticks are sourced for length, straightness, and clean surface finish, with efficient post-harvest handling that helps preserve freshness through dispatch and export movement.",
      "The product is well-suited for importers serving communities and retailers that expect both authenticity and disciplined presentation.",
    ],
    origin: "Tamil Nadu and Maharashtra sourcing network",
    shelfLife: "7 to 10 days in chilled conditions",
    packaging: "5 kg lined cartons",
    moq: "500 kg mixed load or pallet program",
    exportMarkets: ["UAE", "Kuwait", "Canada", "United Kingdom"],
    imageAlt: "Stylized drumstick bundle displayed in export-ready form.",
    image: "/images/products/drumstick.svg",
    galleryImages: ["/images/products/drumstick.svg"],
    highlights: ["Specialty produce expertise", "Straightness sorting", "Community retail demand fit"],
    palette: {
      primary: "#5f7f31",
      secondary: "#b5d16d",
      accent: "#2d381b",
    },
  },
];

export const certificates: Certificate[] = [
  {
    id: "cert-apeda",
    title: "APEDA Registration",
    issuer: "Agricultural and Processed Food Products Export Development Authority",
    issueDate: "2024-04-15",
    description:
      "Validates the company’s standing within India’s agricultural export ecosystem and supports export-market confidence.",
    year: "2024",
    accent: "#2f6b4f",
  },
  {
    id: "cert-fieo",
    title: "FIEO Membership",
    issuer: "Federation of Indian Export Organisations",
    issueDate: "2024-07-03",
    description:
      "Demonstrates active participation in India’s export trade network and commitment to compliant international business practices.",
    year: "2024",
    accent: "#8f5b2e",
  },
  {
    id: "cert-iec",
    title: "Importer Exporter Code",
    issuer: "Directorate General of Foreign Trade",
    issueDate: "2023-11-08",
    description:
      "Core statutory registration enabling the company to operate cross-border trade activities responsibly.",
    year: "2023",
    accent: "#7f3142",
  },
  {
    id: "cert-udyam",
    title: "Udyam Registration",
    issuer: "Government of India",
    issueDate: "2023-09-18",
    description:
      "Recognizes the business under India’s MSME framework and reinforces operational legitimacy.",
    year: "2023",
    accent: "#6e7a28",
  },
];

export const galleryMoments: GalleryMoment[] = [
  {
    id: "gallery-orchard",
    title: "Orchard Selection",
    caption: "Seasonal sourcing begins with maturity checks, visual grading, and harvest-window planning.",
    accent: "#8fbf5f",
  },
  {
    id: "gallery-sorting",
    title: "Sorting & Grading",
    caption: "Every lot is sorted for size, surface finish, and consistency before pack-out.",
    accent: "#d9862f",
  },
  {
    id: "gallery-packing",
    title: "Export Packing",
    caption: "Ventilated cartons, liners, and pallet discipline help preserve quality through transit.",
    accent: "#b55b52",
  },
  {
    id: "gallery-cold-chain",
    title: "Cold Chain",
    caption: "Pre-cooling and reefer logistics protect freshness across destination markets.",
    accent: "#4e7b8f",
  },
  {
    id: "gallery-qa",
    title: "Quality Review",
    caption: "Documentation, traceability, and dispatch checks support confidence for global buyers.",
    accent: "#6f6d3d",
  },
  {
    id: "gallery-dispatch",
    title: "Container Dispatch",
    caption: "We coordinate shipment readiness with practical communication and timeline discipline.",
    accent: "#3f6a55",
  },
];

export const stats = [
  { value: "18+", label: "Export destinations supported" },
  { value: "48 hrs", label: "Average pack-out coordination window" },
  { value: "95%", label: "Repeat-buyer program retention target" },
  { value: "8-point", label: "Design and operating discipline" },
];

export const testimonials = [
  {
    quote:
      "The team communicates clearly, packs professionally, and treats quality as a commercial responsibility rather than a slogan.",
    author: "Produce Buyer, Dubai",
  },
  {
    quote:
      "Their shipment readiness and grading consistency helped us reduce friction at intake and move faster with retail partners.",
    author: "Importer, Kuala Lumpur",
  },
  {
    quote:
      "We value the combination of responsive service, documentation clarity, and practical product knowledge.",
    author: "Distributor, Doha",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
