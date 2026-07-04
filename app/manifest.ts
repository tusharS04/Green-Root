import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Green Roots Exim",
    short_name: "Green Roots",
    description: "Fresh fruits and vegetables exporter from India.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4efdf",
    theme_color: "#24452f",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
