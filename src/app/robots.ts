import type { MetadataRoute } from "next";

const SITE = "https://vallorex.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/studio/",
        "/_next/",
        "/admin/",
        // Pagination-style query strings (wildcard rules are honored by major crawlers e.g. Googlebot)
        "/*?*page=",
        "/*&*page=",
      ],
    },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
