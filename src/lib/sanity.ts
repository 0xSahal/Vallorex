import { createClient } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "@portabletext/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_READ_TOKEN;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
}

if (!dataset) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_DATASET");
}

if (!apiVersion) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_API_VERSION");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  token: token || undefined,
  perspective: "published",
});

const imageBuilder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source);
}

export interface SanitySlug {
  current: string;
}

export interface SanityImage {
  _type?: "image";
  alt?: string;
  asset?: {
    _ref?: string;
    _type?: "reference";
  };
}

export interface BlogPostListItem {
  _id: string;
  title: string;
  slug: SanitySlug;
  publishedAt?: string;
  excerpt?: string;
  mainImage?: SanityImage;
  tags?: string[];
  categories?: Array<{
    title: string;
    slug?: SanitySlug;
  }>;
  author?: {
    name?: string;
    role?: string;
    image?: SanityImage;
  };
}

export interface BlogPost extends BlogPostListItem {
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
}

export default client;
