import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { BlogPostListItem, urlFor } from "@/lib/sanity";

function formatDate(date?: string) {
  if (!date) {
    return "Coming soon";
  }

  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface BlogCardProps {
  post: BlogPostListItem;
}

export function BlogCard({ post }: BlogCardProps) {
  const href = `/blog/${post.slug.current}`;
  const coverImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(720).fit("crop").url()
    : null;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_4px_24px_rgb(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        {coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-50 text-sm font-medium text-muted-foreground">
            No cover image
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span>{formatDate(post.publishedAt)}</span>
          {post.tags?.length ? (
            <>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span>{post.tags.length} tag{post.tags.length === 1 ? "" : "s"}</span>
            </>
          ) : null}
        </div>

        <h2 className="mt-4 line-clamp-2 text-2xl font-bold leading-tight text-midnight transition-colors duration-300 group-hover:text-brand-blue">
          {post.title}
        </h2>

        <p className="mt-4 flex-1 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt || "Read the latest insight from the Vallorex engineering team."}
        </p>

        {post.tags?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="rounded-full border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600"
              >
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange">
          Read article
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default BlogCard;
