import type { MetadataRoute } from "next";
import { concepts, upanishads } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://theinneratlas.example";
  const staticRoutes = ["", "/explore", "/concepts", "/compare", "/shanti-mantras", "/about"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...upanishads.map(({ slug }) => ({ url: `${base}/upanishads/${slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...concepts.map(({ slug }) => ({ url: `${base}/concepts/${slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
