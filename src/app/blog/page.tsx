import type { Metadata } from "next";
import ResourcesPageClient from "./_client";
import client, { type BlogPostListItem } from "@/lib/sanity";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog | Vallorex",
  description: "Engineering insights, technical deep-dives, and strategy from the Vallorex team.",
};

const POSTS_PER_PAGE = 12;

const postsPageQuery = `
  *[_type == "post"] | order(publishedAt desc) [$offset...$limit] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    "categories": categories[]->{
      title,
      slug
    }
  }
`;

const postsCountQuery = `
  count(*[_type == "post"])
`;

function parsePage(value: unknown) {
  const raw = Array.isArray(value) ? value[0] : value;
  const num = typeof raw === "string" ? Number.parseInt(raw, 10) : Number.NaN;
  return Number.isFinite(num) && num > 0 ? num : 1;
}

async function getPostsPage(page: number) {
  const offset = (page - 1) * POSTS_PER_PAGE;
  const limit = offset + POSTS_PER_PAGE;

  return client.fetch<BlogPostListItem[]>(
    postsPageQuery,
    { offset, limit },
    { next: { revalidate: 60 } },
  );
}

async function getTotalPostsCount() {
  return client.fetch<number>(postsCountQuery, {}, { next: { revalidate: 60 } });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedSearchParams = (await searchParams) || {};
  const currentPage = parsePage(resolvedSearchParams.page);

  const [posts, totalPosts] = await Promise.all([getPostsPage(currentPage), getTotalPostsCount()]);
  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const safePosts = safePage === currentPage ? posts : await getPostsPage(safePage);

  return (
    <ResourcesPageClient
      posts={safePosts}
      pagination={{
        currentPage: safePage,
        totalPages,
        totalPosts,
        perPage: POSTS_PER_PAGE,
      }}
    />
  );
}
