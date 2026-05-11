import type { MetadataRoute } from "next";

import client from "@/lib/sanity";
import { caseStudies } from "@/lib/case-studies";

const SITE = "https://vallorex.com";

/** Homepage keeps trailing slash; other paths have no trailing slash (see next.config trailingSlash). */
function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE}${normalized}`;
}

export const revalidate = 60;

/** Mirrors every `src/app/services/<slug>/page.tsx` route (excluding the index `services/page.tsx`). */
const SERVICE_PATHS: string[] = [
  "/services/ai-engineering",
  "/services/blockchain",
  "/services/data-analytics",
  "/services/product-engineering",
  "/services/ai-strategy-roadmap",
  "/services/ai-development",
  "/services/custom-llm-development",
  "/services/ml-data-pipelines",
  "/services/ml-ops-infrastructure",
  "/services/ai-agents-automation",
  "/services/data-platform-engineering",
  "/services/business-intelligence",
  "/services/predictive-analytics",
  "/services/cloud-data-migration",
  "/services/smart-contract-development",
  "/services/smart-contract-audits",
  "/services/defi-protocol-design",
  "/services/layer2-rollups",
  "/services/nft-token-engineering",
  "/services/blockchain-engineering",
  "/services/web3-integration",
  "/services/full-stack-development",
  "/services/mobile-applications",
  "/services/api-integrations",
  "/services/qa-testing",
  "/services/technology-consulting",
];

// Blog slugs from Sanity CMS; case study slugs from `caseStudies` in @/lib/case-studies.
const blogSlugsQuery = `
  *[_type == "post" && defined(slug.current)]{
    "slug": slug.current,
    "publishedAt": publishedAt
  }
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: absoluteUrl("/services"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/industries"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/technologies"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/case-studies"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/blog"), lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: absoluteUrl("/company"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/team"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/careers"), lastModified: new Date(), changeFrequency: "weekly", priority: 0.65 },
    { url: absoluteUrl("/privacy-policy"), lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/cookie-policy"), lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms-of-service"), lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_PATHS.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  const posts = await client.fetch<Array<{ slug: string; publishedAt?: string }>>(
    blogSlugsQuery,
    {},
    { next: { revalidate: 60 } },
  );

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: absoluteUrl(`/case-studies/${cs.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...caseStudyRoutes];
}
