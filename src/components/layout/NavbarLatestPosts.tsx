import Link from "next/link";
import { ArrowRight } from "lucide-react";
import client from "@/lib/sanity";

export async function NavbarLatestPosts() {
  const posts = await client.fetch<Array<{ title: string; slug: { current: string }; publishedAt: string }>>(
    `*[_type == "post"] | order(publishedAt desc)[0...3] { title, slug, publishedAt }`,
    {},
    { next: { revalidate: 60 } }
  );

  return (
    <div className="space-y-4">
      {posts.length === 0 ? (
        <p className="text-sm text-muted">No posts yet. Check back soon.</p>
      ) : (
        posts.map((post) => {
          const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });
          return (
            <Link key={post.title} href={`/blog/${post.slug.current}`} className="group flex flex-col gap-1 hover:bg-slate-50 rounded-lg p-3 -mx-3 transition-colors">
              <p className="text-sm font-semibold text-midnight group-hover:text-brand-blue transition-colors leading-snug">{post.title}</p>
              <p className="text-xs text-muted">{date}</p>
            </Link>
          );
        })
      )}
      <Link href="/blog" className="inline-flex items-center text-xs font-semibold text-brand-blue hover:underline mt-1">
        View all articles <ArrowRight className="ml-1 h-3 w-3" />
      </Link>
    </div>
  );
}
