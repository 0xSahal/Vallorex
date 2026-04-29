import Image from "next/image";
import Link from "next/link";
import type { PortableTextReactComponents } from "@portabletext/react";

import { cn } from "@/lib/utils";
import { urlFor } from "@/lib/sanity";

export const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <h1 className="mt-12 text-4xl font-bold tracking-tight text-midnight first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 text-3xl font-bold tracking-tight text-midnight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 text-2xl font-bold tracking-tight text-midnight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 text-xl font-bold tracking-tight text-midnight">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mt-6 text-base leading-8 text-slate-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-8 rounded-r-2xl border-l-4 border-brand-orange bg-brand-orange/5 px-6 py-4 text-lg font-medium italic leading-8 text-midnight">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-8 text-slate-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-6 list-decimal space-y-3 pl-6 text-base leading-8 text-slate-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");

      const className =
        "font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 transition-colors hover:text-brand-orange";

      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className={className}
          >
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    },
    code: ({ children }) => (
      <code className="rounded bg-slate-100 px-1.5 py-1 font-mono text-[0.95em] text-midnight">
        {children}
      </code>
    ),
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value).width(1600).fit("max").auto("format").url();
      const alt = value?.alt || "Blog image";

      return (
        <figure className="mt-10 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm">
          <div className="relative aspect-[16/9]">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
          {value?.caption ? (
            <figcaption className="border-t border-slate-200/70 px-4 py-3 text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    code: ({ value }) => (
      <pre className="mt-8 overflow-x-auto rounded-2xl bg-midnight p-5 text-sm text-slate-100">
        <code className={cn("font-mono", value?.language && "language-" + value.language)}>
          {value?.code || ""}
        </code>
      </pre>
    ),
  },
};

export default portableTextComponents;
