"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowRight, ArrowUpRight, Calendar, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  caseStudies,
  caseStudyMatchesFilter,
  type CaseStudy,
} from "@/lib/case-studies";

const FILTER_CATEGORIES = [
  "All Projects",
  "Artificial Intelligence",
  "Blockchain & Web3",
  "Smart Contracts",
  "Fintech",
  "Healthcare",
  "Enterprise",
] as const;

const techLogos = [
  "Python",
  "TensorFlow",
  "Solidity",
  "Ethereum",
  "AWS",
  "GCP",
  "Kafka",
  "React",
  "Next.js",
  "Node.js",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "Redis",
  "GraphQL",
];

const containerMotion = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const itemMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function DotGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 dot-grid opacity-[0.06]" />
      <div className="absolute top-[15%] right-[10%] w-72 h-72 bg-brand-orange/[0.08] blur-[100px] rounded-full" />
      <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-brand-blue/[0.08] blur-[120px] rounded-full" />
    </div>
  );
}

function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-12 border-y border-border bg-surface">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee marquee-track">
        {[...techLogos, ...techLogos].map((logo, i) => (
          <div key={i} className="flex items-center gap-2 px-8 shrink-0">
            <div className="w-2 h-2 rounded-full bg-brand-blue/20" />
            <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap tracking-wide uppercase">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StudyCard({ study }: { study: CaseStudy }) {
  const shown = study.techStack.slice(0, 4);
  const more = Math.max(0, study.techStack.length - 4);
  const isArchVision = study.slug === "archvision-ai-floor-plan-to-3d";
  const hasHeroImage = Boolean(study.images[0]);
  const isLatticePay = study.slug === "latticepay-non-custodial-wallet";
  /** Prefer triptych onboarding art for the grid card when present. */
  const latticeCardImage = isLatticePay
    ? (study.images[1] ?? study.images[0])
    : undefined;

  const EmptyHeroHeader = () => {
    if (isLatticePay && !study.images[0]) {
      return (
        <div
          className="w-full h-40 rounded-t-xl overflow-hidden relative flex-shrink-0"
          style={{
            background:
              "linear-gradient(135deg, #0a1a2e 0%, #0d2545 55%, #071428 100%)",
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            viewBox="0 0 400 160"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden
          >
            <polygon
              points="80,20 110,37 110,71 80,88 50,71 50,37"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
            />
            <polygon
              points="140,20 170,37 170,71 140,88 110,71 110,37"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
            />
            <polygon
              points="200,20 230,37 230,71 200,88 170,71 170,37"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
            />
            <polygon
              points="260,20 290,37 290,71 260,88 230,71 230,37"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
            />
            <polygon
              points="320,20 350,37 350,71 320,88 290,71 290,37"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
            />
            <polygon
              points="110,71 140,88 140,122 110,139 80,122 80,88"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
              opacity="0.5"
            />
            <polygon
              points="170,71 200,88 200,122 170,139 140,122 140,88"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
              opacity="0.5"
            />
            <polygon
              points="230,71 260,88 260,122 230,139 200,122 200,88"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
              opacity="0.5"
            />
            <polygon
              points="290,71 320,88 320,122 290,139 260,122 260,88"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
              opacity="0.5"
            />
            <circle cx="200" cy="54" r="4" fill="white" opacity="0.4" />
            <circle
              cx="200"
              cy="54"
              r="10"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              opacity="0.2"
            />
          </svg>
          <div className="absolute bottom-2 left-3 text-[9px] font-mono uppercase tracking-widest text-white/30">
            Screenshots coming soon
          </div>
          <div className="absolute top-2 right-3 text-[9px] font-mono uppercase tracking-widest text-white/20">
            BSC Mainnet
          </div>
        </div>
      );
    }

    return (
      <div
        className="w-full h-40 rounded-t-xl overflow-hidden relative flex-shrink-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 400 160"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M-20 140 L110 10 L220 130 L420 -10"
            fill="none"
            stroke="white"
            strokeWidth="0.8"
            opacity="0.55"
          />
          <path
            d="M-20 110 L90 20 L210 120 L420 0"
            fill="none"
            stroke="white"
            strokeWidth="0.8"
            opacity="0.35"
            strokeDasharray="4 6"
          />
          <circle cx="115" cy="18" r="3" fill="white" opacity="0.35" />
          <circle cx="222" cy="126" r="3" fill="white" opacity="0.25" />
          <circle cx="310" cy="62" r="2.5" fill="white" opacity="0.22" />
        </svg>
        <div className="absolute bottom-2 left-3 text-[9px] font-mono uppercase tracking-widest text-white/30">
          Screenshots coming soon
        </div>
      </div>
    );
  };

  return (
    <Link href={`/case-studies/${study.slug}`} className="block group h-full">
      <motion.article
        layout
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-white/20"
        style={{
          background: `linear-gradient(135deg, ${study.gradientFrom}, ${study.gradientTo})`,
        }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-300" />

        <div className="relative z-10 flex flex-1 flex-col">
          {isArchVision ? (
            <div className="-mx-6 -mt-6 mb-5 md:-mx-7 md:-mt-7">
              <div
                className="w-full h-40 rounded-t-xl overflow-hidden relative flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #0a1628 0%, #0d2340 60%, #0f2a50 100%)",
                }}
              >
                <Image
                  src="/images/case-studies/3d-demo.jpeg"
                  alt="2D to 3D demo preview"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <svg
                  className="absolute inset-0 w-full h-full opacity-25"
                  viewBox="0 0 400 160"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="80"
                    x2="400"
                    y2="80"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="200"
                    y1="0"
                    x2="200"
                    y2="160"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="50"
                    y="25"
                    width="110"
                    height="110"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <rect
                    x="220"
                    y="20"
                    width="130"
                    height="65"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <rect
                    x="220"
                    y="95"
                    width="130"
                    height="50"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <line
                    x1="50"
                    y1="80"
                    x2="160"
                    y2="80"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="105"
                    y1="25"
                    x2="105"
                    y2="135"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="220"
                    y1="60"
                    x2="350"
                    y2="60"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="105"
                    cy="80"
                    r="3"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.8"
                    opacity="0.6"
                  />
                  <circle
                    cx="285"
                    cy="60"
                    r="2"
                    fill="white"
                    opacity="0.3"
                  />
                </svg>
                <div className="absolute bottom-2 left-3 text-[9px] font-mono uppercase tracking-widest text-white/30">
                  2D to 3D demo
                </div>
              </div>
            </div>
          ) : null}

          {isLatticePay && latticeCardImage ? (
            <div className="-mx-6 -mt-6 mb-5 md:-mx-7 md:-mt-7">
              <div className="relative h-40 w-full flex-shrink-0 overflow-hidden rounded-t-xl bg-black">
                <Image
                  src={latticeCardImage}
                  alt="LatticePay wallet onboarding screens"
                  fill
                  className="object-cover object-[50%_35%] transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
                <div className="absolute bottom-2 left-3 text-[9px] font-mono uppercase tracking-widest text-white/45">
                  Wallet app UI
                </div>
                <div className="absolute top-2 right-3 text-[9px] font-mono uppercase tracking-widest text-white/25">
                  BSC Mainnet
                </div>
              </div>
            </div>
          ) : null}

          {study.heroImage &&
          !isArchVision &&
          !(isLatticePay && latticeCardImage) ? (
            <div className="-mx-6 -mt-6 mb-5 md:-mx-7 md:-mt-7">
              <div className="relative h-40 w-full flex-shrink-0 overflow-hidden rounded-t-xl bg-black">
                <Image
                  src={study.heroImage}
                  alt={`${study.shortTitle}: case study hero preview`}
                  fill
                  className="object-cover object-[50%_42%] transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-2 left-3 text-[9px] font-mono uppercase tracking-widest text-white/50">
                  {study.heroImageCaption ?? "Product preview"}
                </div>
              </div>
            </div>
          ) : null}

          {!isArchVision &&
          !(isLatticePay && latticeCardImage) &&
          !study.heroImage &&
          !hasHeroImage ? (
            <div className="-mx-6 -mt-6 mb-5 md:-mx-7 md:-mt-7">
              <EmptyHeroHeader />
            </div>
          ) : null}

          <div className="mb-4 flex items-start justify-between gap-3">
            <Badge
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80"
            >
              {study.category}
            </Badge>
            <span className="shrink-0 text-right text-[11px] font-bold uppercase tracking-wide text-brand-orange">
              {study.heroMetricLabel}
            </span>
          </div>

          <h3 className="text-xl font-bold leading-tight tracking-tight text-white">
            {study.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/70">
            {study.shortDescription}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {shown.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/85"
              >
                {t}
              </span>
            ))}
            {more > 0 && (
              <span className="rounded-full border border-white/10 bg-transparent px-2.5 py-1 text-xs font-medium text-white/60">
                +{more} more
              </span>
            )}
          </div>

          <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/10 pt-5">
            <span className="flex items-center gap-1.5 text-xs text-white/55">
              <span aria-hidden>⚡</span>
              {study.timelineWeeks}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-orange transition-colors group-hover:text-brand-orange-hover">
              Read Case Study
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

function FeaturedStudyBlock({
  study,
  singleCatalog,
}: {
  study: CaseStudy;
  singleCatalog: boolean;
}) {
  const kpiPreview = singleCatalog ? study.kpis.slice(0, 3) : study.kpis;

  return (
    <Link href={`/case-studies/${study.slug}`} className="block group">
      <motion.article
        layout
        className="relative overflow-hidden rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-white/20 md:p-12 lg:p-14"
        style={{
          background: `linear-gradient(135deg, ${study.gradientFrom}, ${study.gradientTo})`,
        }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-300" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80"
              >
                {study.category}
              </Badge>
              <Badge className="rounded-full bg-brand-orange px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-orange/25">
                {study.heroMetricLabel}
              </Badge>
            </div>

            <h2
              className={
                singleCatalog
                  ? "text-3xl font-bold tracking-tight text-white md:text-[32px]"
                  : "text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[40px]"
              }
            >
              {study.title}
            </h2>

            <p
              className={
                singleCatalog
                  ? "mt-5 max-w-3xl text-base leading-relaxed text-white/75 line-clamp-3 md:text-lg"
                  : "mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
              }
            >
              {study.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {kpiPreview.map((k) => (
                <div
                  key={k.label}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2"
                >
                  <p className="text-lg font-bold tabular-nums text-brand-orange md:text-xl">
                    {k.value}
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-white/55">
                    {k.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <span
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "inline-flex cursor-pointer items-center gap-2 rounded-full border-0 bg-brand-orange px-8 font-bold text-white shadow-lg shadow-brand-orange/30 hover:bg-brand-orange-hover",
                )}
              >
                View Full Case Study
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>

          <div className="relative mx-auto mt-8 h-[220px] w-full max-w-[min(100%,320px)] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/20 shadow-lg ring-1 ring-white/10 lg:mx-0 lg:mt-0 lg:max-w-none lg:h-[320px] lg:w-full">
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.12]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-brand-blue/10" />
            {study.images[0] ? (
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <Image
                  src={study.images[0]}
                  alt={`${study.shortTitle} product interface`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 320px, (max-width: 1400px) 40vw, 520px"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.35), transparent)",
                  }}
                />
              </div>
            ) : (
              <div className="relative flex h-full items-center justify-center p-8">
                <div className="text-center">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
                    {study.shortTitle}
                  </p>
                  <p className="mt-3 text-5xl font-black tabular-nums text-brand-orange">
                    {study.heroMetricValue}
                  </p>
                  <p className="mt-2 text-sm text-white/70">{study.heroMetricLabel}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default function CaseStudiesPageClient() {
  const [activeFilter, setActiveFilter] = useState<string>("All Projects");

  const filtered = useMemo(
    () => caseStudies.filter((cs) => caseStudyMatchesFilter(cs, activeFilter)),
    [activeFilter],
  );

  const singleCatalog = caseStudies.length === 1;
  const featuredInFilter = filtered.find((cs) => cs.featured);
  const gridStudies = useMemo(() => {
    if (!featuredInFilter) return filtered;
    return filtered.filter((cs) => cs.slug !== featuredInFilter.slug);
  }, [filtered, featuredInFilter]);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-midnight pt-32 pb-16 md:pt-44 md:pb-20">
        <DotGrid />

        <div className="container relative z-10 mx-auto max-w-[1400px] px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerMotion}
            className="max-w-4xl"
          >
            <motion.p
              variants={itemMotion}
              className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
            >
              Proven Architecture
            </motion.p>

            <motion.h1
              variants={itemMotion}
              className="text-5xl font-bold tracking-tighter text-white md:text-6xl lg:text-[72px] lg:leading-[1.05]"
            >
              Work That Ships.
            </motion.h1>

            <motion.p
              variants={itemMotion}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
            >
              Every project below is a live or MVP production system - not a
              wireframe, not a concept.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemMotion}
            initial="hidden"
            animate="visible"
            className="mt-12 -mx-4 px-4 md:mx-0 md:px-0"
          >
            <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible md:pb-0">
              {FILTER_CATEGORIES.map((cat) => {
                const active = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveFilter(cat)}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "border-brand-orange bg-brand-orange text-white shadow-md shadow-brand-orange/25"
                        : "border-white/20 bg-transparent text-white/80 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-[1400px] px-4">
          <LayoutGroup>
            <AnimatePresence mode="wait">
              {filtered.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface py-24 text-center"
                >
                  <p className="text-lg font-medium text-muted">
                    No case studies in this category yet.
                  </p>
                </motion.div>
              ) : singleCatalog ? (
                <motion.div
                  key="one"
                  initial="hidden"
                  animate="visible"
                  variants={containerMotion}
                  className="mx-auto max-w-[1100px]"
                >
                  <motion.div variants={itemMotion}>
                    <FeaturedStudyBlock
                      study={filtered[0]}
                      singleCatalog
                    />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key={activeFilter}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  variants={containerMotion}
                  className="flex flex-col gap-8"
                >
                  {featuredInFilter && (
                    <motion.div variants={itemMotion} className="w-full">
                      <FeaturedStudyBlock
                        study={featuredInFilter}
                        singleCatalog={false}
                      />
                    </motion.div>
                  )}

                  <motion.div
                    variants={containerMotion}
                    className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
                  >
                    {gridStudies.map((study) => (
                      <motion.div key={study.slug} variants={itemMotion}>
                        <StudyCard study={study} />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </div>
      </section>

      <TechMarquee />

      <section className="relative overflow-hidden bg-midnight py-32 md:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[15%] top-[25%] h-[500px] w-[500px] rounded-full bg-brand-orange/[0.06] blur-[160px] animate-scale-pulse" />
          <div className="absolute right-[15%] top-[30%] h-[400px] w-[400px] rounded-full bg-brand-blue/[0.05] blur-[140px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto max-w-[1400px] px-4 text-center">
          <p className="mb-8 font-mono text-xs font-bold uppercase tracking-[0.3em] text-white/50">
            Let&apos;s talk
          </p>

          <h2 className="text-4xl font-bold tracking-tighter text-white md:text-5xl lg:text-[64px] lg:leading-[1.08]">
            Your project could be
            <br />
            next.
          </h2>

          <div className="mt-10">
            <Link href="/contact">
              <Button
                size="lg"
                className="h-16 rounded-full bg-brand-orange px-14 text-lg font-bold text-white shadow-[0_8px_40px_rgba(249,115,22,0.35)] transition-all duration-300 hover:scale-105 hover:bg-brand-orange-hover active:scale-95 hover:shadow-[0_12px_56px_rgba(249,115,22,0.5)] group"
              >
                Initiate Technical Scope
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 md:gap-10">
            {[
              { icon: <Calendar className="h-4 w-4" />, text: "No-commitment call" },
              { icon: <ShieldCheck className="h-4 w-4" />, text: "NDA first" },
              { icon: <Zap className="h-4 w-4" />, text: "4hr response" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5">
                <span className="text-brand-orange">{item.icon}</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
