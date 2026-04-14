import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Brain,
  Check,
  ChevronRight,
  Code2,
  Layers,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { cn } from "@/lib/utils";
import { ProductScreenshotsSlider } from "./product-screenshots-slider";

const LATTICEPAY_HERO_IMAGE = "/images/case-studies/Wallet%20Pay.jpeg";

const APPROACH_ICONS: Record<string, LucideIcon> = {
  Brain,
  Zap,
  Layers,
  Code2,
};

export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | Vallorex Case Study`,
    description: cs.summary,
    openGraph: {
      title: cs.title,
      description: cs.summary,
      images: cs.images[0] ? [cs.images[0]] : [],
    },
  };
}

function sectionLabel(text: string) {
  return (
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
      {text}
    </p>
  );
}

function statusBadge(status: string) {
  const dot =
    status === "Live" || status === "MVP"
      ? "🟢"
      : status === "In Progress"
        ? "🟡"
        : "⚪";
  return `${dot} ${status}`;
}

function CircuitPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.12]"
      aria-hidden
    >
      <defs>
        <pattern
          id="case-study-grid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M32 0H0V32"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-white"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#case-study-grid)" />
    </svg>
  );
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  const architectureStages = cs.architectureDescription
    .split(/\s*→\s*/)
    .map((s) => s.trim())
    .filter(Boolean);

  const related = caseStudies
    .filter((c) => c.slug !== cs.slug)
    .slice(0, 3);

  const challengeParagraphs = cs.challenge.split(/\n\n+/);

  const isLatticePayCaseStudy =
    cs.slug === "latticepay-non-custodial-wallet";

  return (
    <div className="bg-background text-foreground">
      <div className="border-b border-border bg-background">
        <div className="container mx-auto max-w-[1400px] px-4 py-6">
          <nav className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Link
              href="/case-studies"
              className="text-muted-foreground transition-colors hover:text-brand-orange"
            >
              Case Studies
            </Link>
            <span className="mx-2 text-border">/</span>
            <span className="text-midnight">{cs.shortTitle}</span>
          </nav>
        </div>
      </div>

      <section className="bg-midnight py-20 text-white md:py-28">
        <div className="container mx-auto max-w-[1400px] px-4">
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <Badge
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80"
                >
                  {cs.category}
                </Badge>
                <Badge className="rounded-full bg-white/10 font-mono text-[10px] font-semibold uppercase tracking-wide text-white">
                  {statusBadge(cs.status)}
                </Badge>
              </div>

              <h1 className="max-w-[22ch] text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[52px]">
                {cs.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                {cs.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {cs.kpis.map((k) => (
                  <div
                    key={k.label}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5"
                  >
                    <p className="text-xl font-bold tabular-nums text-brand-orange md:text-2xl">
                      {k.value}
                    </p>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-white/55">
                      {k.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={cn(
                "w-full lg:justify-self-end",
                isLatticePayCaseStudy ? "" : "relative",
              )}
            >
              {isLatticePayCaseStudy ? (
                <div className="relative min-h-[280px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-xl ring-1 ring-white/5 lg:min-h-[340px]">
                  <Image
                    src={LATTICEPAY_HERO_IMAGE}
                    alt={`${cs.shortTitle} onboarding screens`}
                    fill
                    className="object-contain object-center p-2 sm:p-3"
                    sizes="(max-width: 1024px) 100vw, 560px"
                    priority
                  />
                </div>
              ) : (
                <div
                  className={cn(
                    "relative overflow-hidden rounded-2xl border border-white/10 shadow-xl",
                    cs.heroVideo
                      ? "aspect-video w-full justify-self-center"
                      : "min-h-[280px] lg:min-h-[340px]",
                  )}
                >
                  {cs.heroVideo ? (
                    <video
                      className="h-full w-full bg-black object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      aria-label={`${cs.shortTitle} product walkthrough`}
                    >
                      <source src={cs.heroVideo} type="video/mp4" />
                    </video>
                  ) : (
                    <>
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${cs.gradientFrom}, ${cs.gradientTo})`,
                        }}
                      />
                      <CircuitPattern />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {cs.demoLink ? (
                        <div className="absolute inset-x-0 bottom-0 flex justify-center p-6">
                          <a
                            href={cs.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              buttonVariants({ variant: "outline", size: "lg" }),
                              "border-brand-orange bg-midnight/40 text-brand-orange backdrop-blur-sm hover:bg-brand-orange/10",
                            )}
                          >
                            View Live Demo
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-midnight py-8 text-white">
        <div className="container mx-auto max-w-[1400px] px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "Client", value: cs.client },
              { label: "Industry", value: cs.industry },
              { label: "Timeline", value: cs.timelineWeeks },
              { label: "Team Size", value: String(cs.teamSize) },
              { label: "Year", value: String(cs.year) },
              { label: "Status", value: cs.status },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-[900px] px-4">
          {sectionLabel("01 / THE CHALLENGE")}
          <h2 className="text-2xl font-bold tracking-tight text-midnight md:text-3xl">
            The Challenge
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-body">
            {challengeParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container mx-auto max-w-[1200px] px-4">
          {sectionLabel("02 / OUR APPROACH")}
          <h2 className="text-2xl font-bold tracking-tight text-midnight md:text-3xl">
            Our Approach
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {cs.approach.map((item) => {
              const Icon = APPROACH_ICONS[item.icon] ?? Brain;
              return (
                <Card
                  key={item.title}
                  className="border-border bg-card shadow-sm"
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-brand-orange">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-bold text-midnight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-[1200px] px-4">
          {sectionLabel("03 / ARCHITECTURE")}
          <h2 className="text-2xl font-bold tracking-tight text-midnight md:text-3xl">
            Technical Architecture
          </h2>

          <div className="mt-8 flex flex-wrap gap-2">
            {cs.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-full border border-border bg-secondary/15 px-3 py-1 text-sm font-semibold text-midnight"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card p-6">
            <div className="flex min-w-max items-center gap-2 md:gap-3">
              {architectureStages.map((stage, i) => (
                <div key={`${i}-${stage.slice(0, 12)}`} className="flex items-center gap-2 md:gap-3">
                  {i > 0 ? (
                    <ChevronRight
                      className="h-5 w-5 shrink-0 text-brand-orange"
                      aria-hidden
                    />
                  ) : null}
                  <div className="rounded-xl border border-border bg-background px-4 py-3 text-center text-xs font-semibold text-midnight shadow-sm md:min-w-[140px] md:text-sm">
                    {stage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-midnight py-20 text-white md:py-28">
        <div className="container mx-auto max-w-[1200px] px-4">
          {sectionLabel("04 / RESULTS")}
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Results &amp; Impact
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {cs.kpis.map((k) => (
              <div
                key={k.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <p className="text-5xl font-bold tabular-nums text-brand-orange md:text-[60px] md:leading-none">
                  {k.value}
                </p>
                <p className="mt-3 text-sm text-white/65">{k.label}</p>
              </div>
            ))}
          </div>

          {cs.status === "In Progress" ? (
            <p className="mt-6 text-sm italic text-white/55">
              Performance benchmarks including reconstruction accuracy, conversion
              speed, and wall-detection precision will be published following MVP
              completion and architectural pilot validation.
            </p>
          ) : null}

          <ul className="mt-12 space-y-4">
            {cs.outcomes.map((line) => (
              <li key={line} className="flex gap-3 text-base leading-relaxed">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange"
                  aria-hidden
                />
                <span className="text-white/90">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-[1200px] px-4">
          {sectionLabel("05 / PRODUCT")}
          <h2 className="text-2xl font-bold tracking-tight text-midnight md:text-3xl">
            Screenshots &amp; Product
          </h2>

          {cs.images.length === 0 ? (
            <div className="mt-10">
              {cs.slug === "latticepay-non-custodial-wallet" ? (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                      <div
                        key={idx}
                        className="h-48 md:h-56 rounded-xl border border-white/10 overflow-hidden relative"
                        style={{
                          background:
                            "linear-gradient(135deg, #0a1a2e, #0d2545)",
                        }}
                      >
                        <svg
                          className="absolute inset-0 w-full h-full opacity-15"
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
                          <circle
                            cx="200"
                            cy="54"
                            r="4"
                            fill="white"
                            opacity="0.4"
                          />
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
                        <div className="absolute bottom-3 left-3 text-xs font-mono text-white/25">
                          Screenshot Placeholder
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm italic text-muted-foreground mt-4">
                    Product screenshots and demo walkthrough will be added after
                    client approval.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, idx) => (
                      <div
                        key={idx}
                        className="relative h-48 overflow-hidden rounded-xl border border-white/10 md:h-56"
                        style={{
                          background:
                            "linear-gradient(135deg, #0a1628, #0d2340)",
                        }}
                      >
                        <svg
                          className="absolute inset-0 h-full w-full opacity-20"
                          viewBox="0 0 400 160"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="none"
                          aria-hidden
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
                        <div className="absolute bottom-3 left-3 text-xs font-mono text-white/25">
                          Screenshot Placeholder
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-sm italic text-muted-foreground">
                    Product screenshots and demo walkthrough will be added after
                    MVP completion.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="mt-10">
              <ProductScreenshotsSlider
                images={cs.images}
                shortTitle={cs.shortTitle}
                addressBarUrl={cs.demoLink}
                {...(cs.slug === "latticepay-non-custodial-wallet"
                  ? {
                      viewportClassName:
                        "aspect-video min-h-[300px] sm:min-h-[340px] md:min-h-[380px]",
                      imageClassName:
                        "object-contain object-left object-top bg-black",
                      thumbnailImageClassName:
                        "object-contain object-left object-top bg-black",
                    }
                  : {})}
              />
            </div>
          )}

          {cs.demoLink ? (
            <div className="mt-10">
              <a
                href={cs.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-brand-orange font-bold text-white hover:bg-brand-orange-hover",
                )}
              >
                Explore the Live Product
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container mx-auto max-w-[1200px] px-4">
          {sectionLabel("06 / USE CASES")}
          <h2 className="text-2xl font-bold tracking-tight text-midnight md:text-3xl">
            Use Cases
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {cs.useCases.map((line) => {
              const idx = line.indexOf(": ");
              const titlePart = idx === -1 ? line : line.slice(0, idx);
              const bodyPart = idx === -1 ? "" : line.slice(idx + 2);
              return (
                <Card key={line} className="border-border bg-card shadow-sm">
                  <CardContent className="p-6 md:p-8">
                    <p className="font-bold text-midnight">{titlePart}</p>
                    {bodyPart ? (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {bodyPart}
                      </p>
                    ) : null}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="container mx-auto max-w-[1200px] px-4">
          {sectionLabel("Next")}
          <h2 className="text-2xl font-bold tracking-tight text-midnight md:text-3xl">
            {related.length > 0 ? "Related Case Studies" : "More Coming Soon"}
          </h2>

          {related.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/case-studies/${r.slug}`}>
                  <Card className="h-full border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardContent className="p-6">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {r.category}
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-midnight">
                        {r.shortTitle}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {r.shortDescription}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange">
                        Read case study
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <div className="mx-auto max-w-lg rounded-xl border border-border bg-gradient-to-r from-muted/20 via-muted/40 to-muted/20 bg-[length:200%_100%] px-6 py-8 animate-shimmer">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  More Case Studies Coming Soon
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-midnight py-20 text-white md:py-28">
        <div className="container mx-auto max-w-[800px] px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Build Something Like This?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Tell us your stack and your goal. We&apos;ll scope it in 48 hours.
          </p>
          <div className="mt-10">
            <Link href="/contact/">
              <Button
                size="lg"
                className="rounded-full bg-brand-orange px-10 font-bold text-white hover:bg-brand-orange-hover"
              >
                Initiate Technical Scope
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
