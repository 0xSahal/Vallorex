"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";

export function CaseStudies() {
  const featured = caseStudies.find((cs) => cs.featured);
  const bestLive =
    caseStudies.find((cs) => cs.status === "Live") ??
    caseStudies.find((cs) => cs.status === "MVP Complete") ??
    caseStudies.find((cs) => cs.status === "MVP") ??
    caseStudies[0];

  const homeStudies: CaseStudy[] = [
    ...(featured ? [featured] : []),
    ...(bestLive && bestLive.slug !== featured?.slug ? [bestLive] : []),
  ].slice(0, 2);

  return (
    <section className="py-24 bg-white" id="case-studies">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight">
              Proof of Impact
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-[#475569]">
              Two production systems we engineered end-to-end - measurable outcomes,
              real architecture, shipped.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#CBD5E1] hover:shadow-[0_14px_44px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/30"
          >
            View more case studies
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="flex flex-col gap-10">
          {homeStudies.map((study, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={`group flex flex-col md:flex-row bg-white rounded-2xl border border-[#F1F5F9] shadow-[0_4px_24px_rgb(0,0,0,0.02)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_64px_rgba(15,23,42,0.10)] ${
                  !isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image side - Half width on desktop */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-auto min-h-[440px] flex-shrink-0">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientTo} 100%)`,
                    }}
                  />

                  {study.images?.[0] ? (
                    <Image
                      src={study.images[0]}
                      alt={`${study.shortTitle} product preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 700px"
                      className="object-cover object-top opacity-95 transition-all duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                      priority={false}
                    />
                  ) : null}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  <div className="absolute left-6 top-6 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                      {study.category}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur">
                      {study.status}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-end justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                          {study.heroMetricLabel}
                        </p>
                        <p className="mt-1 text-3xl font-extrabold tracking-tight text-white md:text-[34px]">
                          {study.heroMetricValue}
                        </p>
                      </div>
                      <span className="hidden sm:inline-flex shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white/90 backdrop-blur">
                        {study.timelineWeeks}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text side - Half width on desktop */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-[#2563EB] uppercase mb-5">
                    {study.shortTitle} • {study.year}
                  </div>
                  
                  <h3 className="text-[26px] sm:text-[32px] sm:leading-[1.25] font-extrabold text-[#0F172A] mb-5 tracking-tight">
                    {study.title}
                  </h3>
                  
                  <p className="text-[15px] text-[#475569] leading-[1.65] mb-10 max-w-[420px]">
                    {study.shortDescription}
                  </p>
                  
                  <div>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 text-[14px] font-[900] text-[#0F172A] pb-1 border-b-2 border-[#0F172A] transition-colors group-hover:text-[#2563EB] group-hover:border-[#2563EB]"
                    >
                      Read Case Study
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
