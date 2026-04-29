import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";

import portableTextComponents from "@/components/blog/PortableTextComponents";
import { Badge } from "@/components/ui/badge";
import client, { type BlogPost, urlFor } from "@/lib/sanity";

export const revalidate = 60;

const postQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset,
        alt,
        caption
      }
    },
    "categories": categories[]->{
      title,
      slug
    },
    author->{
      name,
      role,
      image
    },
    seoTitle,
    seoDescription
  }
`;

const slugsQuery = `
  *[_type == "post" && defined(slug.current)][]{
    "slug": slug.current
  }
`;

function formatDate(date?: string) {
  if (!date) {
    return null;
  }

  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

async function getPost(slug: string) {
  return client.fetch<BlogPost | null>(postQuery, { slug }, { next: { revalidate: 60 } });
}

export async function generateStaticParams() {
  const slugs = await client.fetch<Array<{ slug: string }>>(
    slugsQuery,
    {},
    { next: { revalidate: 60 } },
  );

  return slugs.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {};
  }

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt || "";
  const ogImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).fit("crop").url()
    : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://vallorex.com/blog/${post.slug.current}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const coverImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1600).height(900).fit("crop").url()
    : null;
  const publishedDate = formatDate(post.publishedAt);

  return (
    <div className="bg-background">
      <section className="border-b border-slate-200/80 bg-white">
        <div className="container mx-auto max-w-[1100px] px-4 py-6 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-brand-orange"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </div>
      </section>

      <article className="pb-20">
        <header className="bg-midnight py-16 text-white md:py-24">
          <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3">
              {publishedDate ? (
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
                  {publishedDate}
                </span>
              ) : null}

              {(post.author?.name || post.categories?.length) && publishedDate ? (
                <span className="h-1 w-1 rounded-full bg-white/30" />
              ) : null}

              {post.author?.name ? (
                <span className="text-xs font-semibold text-white/75">{post.author.name}</span>
              ) : null}

              {post.categories?.length ? (
                <>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  {post.categories.slice(0, 3).map((category) => (
                    <Badge
                      key={category.slug?.current || category.title}
                      variant="outline"
                      className="rounded-full border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80"
                    >
                      {category.title}
                    </Badge>
                  ))}
                </>
              ) : null}
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-[56px]">
              {post.title}
            </h1>

            {post.excerpt ? (
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{post.excerpt}</p>
            ) : null}
          </div>
        </header>

        <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          {coverImageUrl ? (
            <div className="-mt-10 overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_20px_80px_rgb(15,23,42,0.12)] md:-mt-14">
              <div className="relative aspect-[16/9]">
                <Image
                  src={coverImageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1200px) 100vw, 1100px"
                />
              </div>
            </div>
          ) : null}

          <div className="mx-auto mt-12 max-w-[760px]">
            <PortableText value={post.body || []} components={portableTextComponents} />
          </div>
        </div>
      </article>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";

import portableTextComponents from "@/components/blog/PortableTextComponents";
import { Badge } from "@/components/ui/badge";
import client, { type BlogPost, urlFor } from "@/lib/sanity";

export const revalidate = 60;

const postQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset,
        alt,
        caption
      }
    },
    tags,
    seoTitle,
    seoDescription
  }
`;

const slugsQuery = `
  *[_type == "post" && defined(slug.current)][]{
    "slug": slug.current
  }
`;

function formatDate(date?: string) {
  if (!date) {
    return null;
  }

  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

async function getPost(slug: string) {
  return client.fetch<BlogPost | null>(postQuery, { slug }, { next: { revalidate: 60 } });
}

export async function generateStaticParams() {
  const slugs = await client.fetch<Array<{ slug: string }>>(
    slugsQuery,
    {},
    { next: { revalidate: 60 } },
  );

  return slugs.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {};
  }

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt || "";
  const ogImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).fit("crop").url()
    : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://vallorex.com/blog/${post.slug.current}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const coverImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1600).height(900).fit("crop").url()
    : null;
  const publishedDate = formatDate(post.publishedAt);

  return (
    <div className="bg-background">
      <section className="border-b border-slate-200/80 bg-white">
        <div className="container mx-auto max-w-[1100px] px-4 py-6 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-brand-orange"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </div>
      </section>

      <article className="pb-20">
        <header className="bg-midnight py-16 text-white md:py-24">
          <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3">
              {publishedDate ? (
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
                  {publishedDate}
                </span>
              ) : null}
              {publishedDate && post.tags?.length ? (
                <span className="h-1 w-1 rounded-full bg-white/30" />
              ) : null}
              {post.tags?.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-full border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-[56px]">
              {post.title}
            </h1>

            {post.excerpt ? (
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
                {post.excerpt}
              </p>
            ) : null}
          </div>
        </header>

        <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          {coverImageUrl ? (
            <div className="-mt-10 overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_20px_80px_rgb(15,23,42,0.12)] md:-mt-14">
              <div className="relative aspect-[16/9]">
                <Image
                  src={coverImageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1200px) 100vw, 1100px"
                />
              </div>
            </div>
          ) : null}

          <div className="mx-auto mt-12 max-w-[760px]">
            <PortableText value={post.body || []} components={portableTextComponents} />
          </div>
        </div>
      </article>
    </div>
  );
}
