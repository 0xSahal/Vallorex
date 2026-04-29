"use client";

import React, { useMemo, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Newspaper,
  Download,
  Clock,
  Calendar,
  ChevronRight,
  Search,
  FileText,
  Lightbulb,
  TrendingUp,
  Shield,
  Brain,
  Layers,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { urlFor, type BlogPostListItem } from "@/lib/sanity";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type ResourceCategory = "all" | "blog" | "whitepaper" | "guide";

interface Article {
  category: ResourceCategory;
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured?: boolean;
  image: string;
  slug?: string;
}

const categories: { id: ResourceCategory; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "All Blog Posts", icon: <Lightbulb className="w-4 h-4" /> },
  { id: "blog", label: "Blog & Insights", icon: <Newspaper className="w-4 h-4" /> },
  { id: "whitepaper", label: "Whitepapers", icon: <FileText className="w-4 h-4" /> },
  { id: "guide", label: "Guides", icon: <BookOpen className="w-4 h-4" /> },
];

const staticArticles: Article[] = [];

function formatListDate(date?: string) {
  if (!date) {
    return "Coming soon";
  }

  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function estimateReadTime(excerpt?: string) {
  const words = excerpt?.trim().split(/\s+/).filter(Boolean).length ?? 0;
  const minutes = Math.max(2, Math.round(words / 200));
  return `${minutes} min read`;
}

const topicPillars = [
  {
    icon: <Brain className="w-6 h-6" />,
    label: "AI & Machine Learning",
    count: "24 posts",
    color: "#F97316",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    label: "Blockchain & Web3",
    count: "18 posts",
    color: "#2563EB",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    label: "Security & Compliance",
    count: "12 posts",
    color: "#8B5CF6",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    label: "Engineering Leadership",
    count: "15 posts",
    color: "#0D9488",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    label: "DevOps & Infrastructure",
    count: "10 posts",
    color: "#DC2626",
  },
];



function FeaturedArticle({ article }: { article: Article }) {
  const href = article.slug ? `/blog/${article.slug}` : "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-[0_4px_24px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-500"
    >
      <div className="relative h-[280px] lg:h-auto min-h-[380px] overflow-hidden">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-5 left-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            Featured
          </span>
        </div>
      </div>

      <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-5">
          <span
            className="text-[10px] font-bold tracking-[0.15em] uppercase"
            style={{ color: article.tagColor }}
          >
            {article.tag}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-[12px] text-muted font-medium">{article.date}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-midnight leading-[1.15] tracking-tight mb-5 group-hover:text-brand-blue transition-colors duration-300">
          {article.title}
        </h3>

        <p className="text-[15px] text-muted leading-relaxed mb-8 max-w-[480px]">
          {article.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {article.author.avatar ? (
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover shadow-sm bg-slate-100"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-slate-100 shadow-sm flex items-center justify-center text-sm font-bold text-midnight">
                {article.author.name.slice(0, 1).toUpperCase()}
              </div>
            )}
            <div>
              <p className="text-sm font-bold text-midnight">{article.author.name}</p>
              <p className="text-xs text-muted">{article.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </div>
        </div>

        <div className="mt-8">
          <Link
            href={href}
            className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-blue-700 transition-colors group/link"
          >
            Read Article
            <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function ResourceCard({ article, index }: { article: Article; index: number }) {
  const isWhitepaper = article.category === "whitepaper";
  const href = article.slug ? `/blog/${article.slug}` : "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group flex flex-col bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-[0_2px_16px_rgb(0,0,0,0.02)] hover:shadow-[0_16px_48px_rgb(0,0,0,0.08)] transition-all duration-300"
    >
      <div className="relative h-[200px] overflow-hidden">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {isWhitepaper && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
              <Download className="w-3 h-3 text-brand-blue" />
              <span className="text-[10px] font-bold text-midnight uppercase tracking-wider">
                PDF
              </span>
            </div>
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <span
            className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm"
            style={{ backgroundColor: article.tagColor }}
          >
            {article.tag}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <div className="flex items-center gap-2 mb-3 text-xs text-muted">
          <Calendar className="w-3 h-3" />
          <span>{article.date}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <Clock className="w-3 h-3" />
          <span>{article.readTime}</span>
        </div>

        <h3 className="text-lg font-bold text-midnight leading-snug mb-3 group-hover:text-brand-blue transition-colors duration-300 line-clamp-2">
          {article.title}
        </h3>

        <p className="text-[14px] text-muted leading-relaxed mb-6 flex-1 line-clamp-3">
          {article.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-100">
          <div className="flex items-center gap-2.5">
            {article.author.avatar ? (
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-7 h-7 rounded-full object-cover bg-slate-100"
              />
            ) : (
              <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[11px] font-bold text-midnight">
                {article.author.name.slice(0, 1).toUpperCase()}
              </div>
            )}
            <span className="text-xs font-semibold text-midnight">{article.author.name}</span>
          </div>

          <Link
            href={href}
            className="flex items-center text-xs font-bold text-brand-blue hover:text-blue-700 transition-colors group/link"
          >
            {isWhitepaper ? "Download" : "Read"}
            <ChevronRight
              className="ml-0.5 h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform"
              strokeWidth={3}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function getPaginationModel(currentPage: number, totalPages: number) {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, idx) => idx + 1);
  }

  const pages = [1, currentPage - 1, currentPage, currentPage + 1, totalPages]
    .filter((p) => p >= 1 && p <= totalPages)
    .filter((p, idx, arr) => arr.indexOf(p) === idx)
    .sort((a, b) => a - b);

  const model: Array<number | "ellipsis"> = [];
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const prev = pages[i - 1];
    if (i > 0 && prev != null && page - prev > 1) {
      model.push("ellipsis");
    }
    model.push(page);
  }

  return model;
}

function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) {
    return null;
  }

  const model = getPaginationModel(currentPage, totalPages);

  const pageHref = (page: number) => `/blog?page=${page}#resources-grid`;

  return (
    <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
      <Link
        href={pageHref(Math.max(1, currentPage - 1))}
        aria-disabled={currentPage === 1}
        className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
          currentPage === 1
            ? "pointer-events-none bg-slate-50 text-muted border border-slate-200 opacity-60"
            : "bg-slate-50 text-midnight border border-slate-200 hover:border-brand-blue/30 hover:text-brand-blue"
        }`}
      >
        Previous
      </Link>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {model.map((item, idx) =>
          item === "ellipsis" ? (
            <span key={`ellipsis-${idx}`} className="px-2 text-muted">
              …
            </span>
          ) : (
            <Link
              key={item}
              href={pageHref(item)}
              aria-current={item === currentPage ? "page" : undefined}
              className={`inline-flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-xs font-bold transition-all duration-300 ${
                item === currentPage
                  ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                  : "bg-slate-50 text-muted border border-slate-200 hover:border-brand-blue/30 hover:text-brand-blue"
              }`}
            >
              {item}
            </Link>
          ),
        )}
      </div>

      <Link
        href={pageHref(Math.min(totalPages, currentPage + 1))}
        aria-disabled={currentPage === totalPages}
        className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
          currentPage === totalPages
            ? "pointer-events-none bg-slate-50 text-muted border border-slate-200 opacity-60"
            : "bg-slate-50 text-midnight border border-slate-200 hover:border-brand-blue/30 hover:text-brand-blue"
        }`}
      >
        Next
      </Link>
    </div>
  );
}

function colorForTag(tag: string) {
  const colors = ["#F97316", "#2563EB", "#0D9488", "#8B5CF6", "#DC2626"];
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = (hash * 31 + tag.charCodeAt(i)) % 2147483647;
  }
  return colors[Math.abs(hash) % colors.length] ?? "#2563EB";
}

function toArticle(post: BlogPostListItem, { featured }: { featured: boolean }): Article {
  const tag = post.categories?.[0]?.title || "Insights";
  const tagColor = colorForTag(tag);

  const image = post.mainImage
    ? urlFor(post.mainImage).width(1000).height(700).fit("crop").auto("format").url()
    : "";

  return {
    category: "blog",
    tag,
    tagColor,
    title: post.title,
    description: post.excerpt || "Read the latest insight from the Vallorex engineering team.",
    readTime: estimateReadTime(post.excerpt),
    date: formatListDate(post.publishedAt),
    author: {
      name: "Vallorex",
      role: "Engineering",
      avatar: "",
    },
    featured,
    image,
    slug: post.slug.current,
  };
}

export default function ResourcesPageClient({
  posts,
  pagination,
}: {
  posts: BlogPostListItem[];
  pagination: { currentPage: number; totalPages: number; totalPosts: number; perPage: number };
}) {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const blogArticles = useMemo(() => {
    return posts.map((post, idx) => toArticle(post, { featured: idx === 0 }));
  }, [posts]);

  const articles = useMemo(() => {
    return [...blogArticles, ...staticArticles];
  }, [blogArticles]);

  const isSearching = searchQuery.trim().length > 0;

  const featuredArticle = isSearching ? undefined : articles.find((a) => a.featured);

  const filteredArticles = articles
    .filter((a) => (isSearching ? true : !a.featured))
    .filter((a) => activeCategory === "all" || a.category === activeCategory)
    .filter(
      (a) =>
        !isSearching ||
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.tag.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  return (
    <div className="bg-white relative overflow-hidden">
      <section className="relative w-full pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-36 lg:pb-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-40 bg-brand-blue/[0.03] blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-[820px] mx-auto text-center"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 rounded-full bg-slate-50 border border-slate-200/80 px-4 py-1.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase">
                Knowledge Hub
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[76px] font-extrabold tracking-tight leading-[1.06] mb-8"
            >
              <span className="block text-midnight">Insights That</span>
              <span className="block text-brand-blue">Move the Needle.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-muted max-w-[600px] mx-auto leading-relaxed"
            >
              Technical deep-dives, strategic frameworks, and battle-tested playbooks from the
              engineers building the future of AI and blockchain.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white border-y border-slate-200/60 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {topicPillars.map((topic, i) => (
              <motion.div
                key={topic.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-slate-200/60 bg-white hover:border-brand-blue/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${topic.color}10`,
                    color: topic.color,
                  }}
                >
                  {topic.icon}
                </div>
                <p className="text-sm font-bold text-midnight mb-1">{topic.label}</p>
                <p className="text-xs text-muted">{topic.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {featuredArticle && (
        <section className="py-20 md:py-24 bg-[#FAFAFA]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-blue uppercase block mb-3">
                Editor&apos;s Pick
              </span>
              <h2 className="text-3xl md:text-[40px] font-extrabold text-midnight tracking-tight">
                Featured Post
              </h2>
            </motion.div>
            <FeaturedArticle article={featuredArticle} />
          </div>
        </section>
      )}

      <section className="py-20 md:py-24 bg-white" id="resources-grid">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-blue uppercase block mb-3">
                  Library
                </span>
                <h2 className="text-3xl md:text-[40px] font-extrabold text-midnight tracking-tight">
                  Explore the Blog
                </h2>
              </div>

              <div className="relative w-full md:w-[340px] lg:w-[400px]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 bg-white text-sm text-midnight placeholder:text-muted/60 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 shadow-sm transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-muted hover:bg-slate-200 hover:text-midnight transition-colors"
                  >
                    <span className="text-xs leading-none">&times;</span>
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-wide uppercase transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                      : "bg-slate-50 text-muted border border-slate-200 hover:border-brand-blue/30 hover:text-brand-blue"
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {isSearching && (
            <div className="flex items-center gap-2 mb-6 text-sm text-muted">
              <Search className="w-3.5 h-3.5" />
              <span>
                <span className="font-semibold text-midnight">{filteredArticles.length}</span>{" "}
                result{filteredArticles.length !== 1 ? "s" : ""} for &ldquo;
                <span className="font-medium text-midnight">{searchQuery}</span>&rdquo;
              </span>
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {filteredArticles.map((article, index) => (
                    <ResourceCard
                      key={
                        article.slug
                          ? `${article.category}-${article.slug}`
                          : `${article.category}-${article.title}`
                      }
                      article={article}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-5">
                    <Search className="w-7 h-7 text-muted" />
                  </div>
                  <p className="text-lg font-bold text-midnight mb-2">No posts found</p>
                  <p className="text-sm text-muted max-w-sm">
                    Try adjusting your search or filter criteria to find what you&apos;re looking for.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {activeCategory === "all" || activeCategory === "blog" ? (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          ) : null}
        </div>
      </section>





      <section className="relative py-32 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1815] via-[#0F172A] to-[#0A101C]" />
          <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[900px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-extrabold text-white tracking-tight leading-[1.1] mb-8"
            >
              Ready to Build <br className="hidden md:block" />
              <span className="text-brand-orange">Something Exceptional?</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-[#94A3B8] max-w-xl mx-auto mb-10 leading-relaxed"
            >
              From the first architecture review to production deployment, our senior engineers are
              ready to turn your most ambitious ideas into reality.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Button
                asChild
                className="bg-brand-orange hover:bg-[#E06612] text-white rounded-full px-10 h-14 md:h-16 text-base md:text-lg font-bold shadow-[0_4px_24px_rgba(249,115,22,0.3)] transition-all hover:scale-105 active:scale-95 group"
              >
                <Link href="/contact?tab=booking">
                  Get a Free Consultation
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2.5 mt-10">
              <ShieldCheck className="h-4 w-4 text-brand-blue" strokeWidth={2.5} />
              <span className="text-sm font-medium text-[#94A3B8]">
                The premier engineering partner for AI and Blockchain ventures.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

