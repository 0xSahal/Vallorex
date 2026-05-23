import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ServiceBreadcrumb = {
  label: string;
  href: string;
};

export type ServiceIncludedItem = {
  id: string;
  href?: string;
  Icon: LucideIcon;
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceStat = {
  label: string;
  value: string;
};

export type ServiceRelated = {
  href: string;
  Icon: LucideIcon;
  title: string;
  description: string;
};

export type ServiceTemplateProps = {
  serviceName: string;
  tagline: string;
  breadcrumb: ServiceBreadcrumb[];
  heroIllustration: React.ReactNode;
  heroVariant?: "default" | "card";
  overviewParagraphs: string[];
  keyOutcomes: string[];
  included: ServiceIncludedItem[];
  process: ServiceProcessStep[];
  whyStats?: ServiceStat[];
  testimonial?: { quote: string; attribution: string };
  related: ServiceRelated[];
  ctaHeading: string;
  ctaSubtext: string;
  auditChecklist?: {
    title: string;
    items: { label: string; status?: "covered" | "risk" }[];
  };
  midCallout?: React.ReactNode;
};

function Breadcrumbs({ items }: { items: ServiceBreadcrumb[] }) {
  return (
    <div className="text-xs font-semibold tracking-wide text-brand-orange">
      {items.map((item, idx) => (
        <span key={item.href + item.label}>
          <Link href={item.href} className="hover:underline">
            {item.label}
          </Link>
          {idx < items.length - 1 ? <span className="mx-2 text-brand-orange/70">{">"}</span> : null}
        </span>
      ))}
    </div>
  );
}

export function ServicePageTemplate(props: ServiceTemplateProps) {
  const {
    serviceName,
    tagline,
    breadcrumb,
    heroIllustration,
    heroVariant = "default",
    overviewParagraphs,
    keyOutcomes,
    included,
    process,
    related,
    ctaHeading,
    ctaSubtext,
    auditChecklist,
    midCallout,
  } = props;

  return (
    <div className="w-full">
      {/* 1) HERO */}
      <section className="bg-midnight text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div
              className={cn(
                "lg:col-span-7",
                heroVariant === "card" &&
                  "rounded-2xl border border-white/10 bg-white/5 glass-card p-6 sm:p-8"
              )}
            >
              <Breadcrumbs items={breadcrumb} />
              <div className="mt-5 animate-in fade-in slide-in-from-bottom-3 duration-700">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                  {serviceName}
                </h1>
                <p className="mt-4 text-lg text-slate-400 max-w-2xl">{tagline}</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="bg-brand-orange hover:bg-[#E06612] text-white font-semibold h-11 px-6 rounded-full"
                  >
                    <Link href="/contact?tab=booking">Get a Free Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 px-6 rounded-full border-white/40 bg-transparent text-white hover:bg-white/10"
                  >
                    <Link href="/case-studies">See Case Studies</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="w-full max-w-[520px] mx-auto lg:mx-0 lg:ml-auto">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                  <div className="text-white/90">{heroIllustration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) OVERVIEW */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="space-y-4 text-body">
                {overviewParagraphs.map((p) => (
                  <p key={p} className="leading-relaxed text-[15px] sm:text-base text-[#475569]">
                    {p}
                  </p>
                ))}
              </div>
              {midCallout ? <div className="mt-8">{midCallout}</div> : null}
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <p className="text-sm font-bold tracking-tight text-midnight mb-4">Key Outcomes</p>
                <ul className="space-y-3">
                  {keyOutcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-sm text-[#475569]">
                      <CheckCircle2 className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) WHAT'S INCLUDED */}
      <section className="bg-surface">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-midnight">What&apos;s Included</h2>
              <p className="mt-3 text-[#475569] max-w-2xl">
                Real, specific deliverables that move you from idea to production with measurable outcomes.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item) => (
              <div key={item.id} id={item.id} className="group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-2xl border border-slate-200 bg-white p-6 transition-all",
                      "hover:shadow-md hover:-translate-y-0.5 hover:border-brand-orange/60"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                        <item.Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-midnight">{item.title}</p>
                        <p className="mt-1.5 text-sm text-[#475569] leading-relaxed">{item.description}</p>
                        <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange">
                          Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div
                    className={cn(
                      "rounded-2xl border border-slate-200 bg-white p-6 transition-all",
                      "hover:shadow-md hover:-translate-y-0.5 hover:border-brand-orange/60"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                        <item.Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-midnight">{item.title}</p>
                        <p className="mt-1.5 text-sm text-[#475569] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {auditChecklist ? (
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-midnight/70">Audit Checklist</p>
                  <p className="mt-2 text-xl font-extrabold text-midnight">{auditChecklist.title}</p>
                </div>
                <p className="text-sm text-[#475569] max-w-xl">
                  We combine automated tooling with manual review to catch edge cases that scanners miss.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {auditChecklist.items.map((i) => {
                  const status = i.status ?? "covered";
                  const ring =
                    status === "risk"
                      ? "border-orange-200 bg-orange-50"
                      : "border-emerald-200 bg-emerald-50";
                  const iconBg = status === "risk" ? "bg-orange-600" : "bg-emerald-600";
                  const label = status === "risk" ? "Risk hotspot" : "Covered";
                  return (
                    <div key={i.label} className={cn("rounded-xl border p-4", ring)}>
                      <div className="flex items-start gap-3">
                        <div className={cn("h-8 w-8 rounded-lg text-white flex items-center justify-center", iconBg)}>
                          <span className="text-sm font-black" aria-hidden>
                            ✓
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-midnight">{i.label}</p>
                          <p className="text-xs text-midnight/70 mt-1">{label}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* 4) OUR PROCESS */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-midnight">How We Work</h2>
          <p className="mt-3 text-[#475569] max-w-2xl">
            Senior-led delivery with clear milestones, predictable execution, and transparent communication.
          </p>

          <div className="mt-10 relative">
            <div className="hidden lg:block absolute top-[28px] left-[2.5rem] right-[2.5rem] border-t-2 border-dashed border-slate-200" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, idx) => (
                <div key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <p className="font-bold text-midnight">{step.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-[#475569] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6) RELATED SERVICES */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-midnight">You might also need</h2>
          <p className="mt-3 text-[#475569] max-w-2xl">
            Adjacent services that pair well with {serviceName} engagements.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md hover:border-brand-orange/60 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-midnight/5 text-midnight">
                    <r.Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-bold text-midnight">{r.title}</p>
                    <p className="mt-1.5 text-sm text-[#475569] leading-relaxed">{r.description}</p>
                    <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7) CTA BANNER */}
      <section className="bg-gradient-to-r from-[#F97316] to-[#EA580C]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {ctaHeading}
              </h2>
              <p className="mt-3 text-white/80 max-w-2xl">{ctaSubtext}</p>
            </div>
            <div className="flex items-center">
              <Button
                asChild
                className="bg-white text-brand-orange hover:bg-white/90 font-semibold h-11 px-6 rounded-full"
              >
                <Link href="/contact?tab=booking">Start Your Project →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

