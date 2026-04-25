"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  Variants,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Target,
  Eye,
  Gem,
  Handshake,
  Lightbulb,
  Scale,
  Globe2,
  Rocket,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ═══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════ */

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ═══════════════════════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════════════════════ */

function AnimatedCounter({
  value,
  suffix,
  prefix = "",
}: {
  value: number;
  suffix: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 30, stiffness: 100 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  React.useEffect(() => {
    if (inView) mv.set(value);
  }, [mv, inView, value]);

  return (
    <span
      ref={ref}
      className="flex items-baseline font-extrabold leading-none"
    >
      {prefix && <span>{prefix}</span>}
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Every line of code is written with intention. We don't ship prototypes. We ship production-grade systems built to last.",
    color: "#2563EB",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Threat modeling isn't an afterthought. We bake security into every layer, from architecture to deployment.",
    color: "#8B5CF6",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    description:
      "We embed with your team, understand your domain, and operate as an extension of your engineering organization.",
    color: "#F97316",
  },
  {
    icon: Lightbulb,
    title: "Relentless Innovation",
    description:
      "We stay at the frontier. Our engineers contribute to open-source, publish research, and prototype with emerging tech weekly.",
    color: "#10B981",
  },
  {
    icon: Scale,
    title: "Radical Transparency",
    description:
      "Daily async updates, open Slack channels, and shared dashboards. You'll never wonder what we're working on.",
    color: "#06B6D4",
  },
  {
    icon: Gem,
    title: "Excellence as Standard",
    description:
      "We hire the top 3% of engineering talent globally. Every team member has shipped systems at scale.",
    color: "#EC4899",
  },
];

const milestones = [
  { year: "2021", title: "Foundation", event: "Founded with a focus on blockchain infrastructure and smart contract development for early Web3 teams.", icon: Rocket, color: "#2563EB" },
  { year: "2022", title: "AI Expansion", event: "Expanded into AI engineering. Delivered first end-to-end ML pipeline for a logistics client, reducing manual processing by 60%.", icon: TrendingUp, color: "#F97316" },
  { year: "2023", title: "Momentum", event: "Grew to a team of 10 engineers. Started serving US-based clients in fintech and healthtech verticals.", icon: Globe2, color: "#8B5CF6" },
  { year: "2024", title: "Converged Practice", event: "Launched our converged AI + Blockchain practice. Built and shipped 3 production-grade AI agent systems for international clients.", icon: Zap, color: "#10B981" },
  { year: "2025", title: "Global Partnerships", event: "Expanded team and service offerings. Currently partnering with growth-stage companies across 3 continents.", icon: Target, color: "#06B6D4" },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function CompanyPageClient() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    const id = decodeURIComponent(hash.slice(1));
    const el = document.getElementById(id);
    if (!el) return;

    const NAVBAR_PLUS_BANNER_PX = 132;
    const EXTRA_GAP_PX = 12;

    const scroll = () => {
      const top = el.getBoundingClientRect().top + window.scrollY - (NAVBAR_PLUS_BANNER_PX + EXTRA_GAP_PX);
      window.scrollTo({ top, behavior: "smooth" });
    };

    requestAnimationFrame(() => {
      window.setTimeout(scroll, 50);
    });
  }, []);

  return (
    <div className="bg-white relative overflow-hidden">
      {/* - SECTION 1: HERO - */}
      <section className="relative w-full pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40 bg-[#0A0F1E] overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-[10%] left-[-5%] w-[60vw] h-[60vw] max-w-[800px] bg-brand-blue/8 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[700px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-[860px] mx-auto text-center"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.06] border border-white/10 px-4 py-1.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">
                About Vallorex
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[38px] sm:text-[50px] md:text-[62px] lg:text-[74px] font-extrabold tracking-tight leading-[1.06] mb-8"
            >
              <span className="block text-white">Engineering the Future</span>
              <span className="block bg-gradient-to-r from-brand-blue via-blue-400 to-brand-orange bg-clip-text text-transparent">
                With Conviction.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-[#94A3B8] max-w-[620px] mx-auto leading-relaxed mb-10"
            >
              Vallorex is the premier engineering partner for AI and blockchain
              ventures. We build production-grade systems that institutions
              trust, from autonomous agents to audited smart contracts, with
              institutional quality from day one.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                className="bg-brand-orange hover:bg-[#E06612] text-white rounded-full px-8 h-12 text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-[1.03] active:scale-95 group"
              >
                <Link href="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                className="border-white/20 text-white hover:bg-white/10 bg-transparent border rounded-full px-8 h-12 text-sm font-bold transition-all"
              >
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* - SECTION 2: STATS BAR - */}
      <section className="bg-white border-b border-slate-200/60 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-slate-200/60">
            {[
              { value: 15, suffix: "+", label: "Engineers & Specialists", prefix: "" },
              { value: 20, suffix: "+", label: "Projects Delivered", prefix: "" },
              { value: 3, suffix: "", label: "Countries Served", prefix: "" },
              { value: 98, suffix: "%", label: "On-Time Delivery", prefix: "" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="text-[42px] sm:text-[52px] md:text-[56px] tracking-tight text-midnight">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p className="text-[10px] md:text-[11px] font-bold text-brand-blue uppercase tracking-[0.15em] mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* - SECTION 3: OUR STORY - */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.span
                variants={fadeUp}
                className="text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase"
              >
                Our Story
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl sm:text-4xl md:text-[44px] font-extrabold text-midnight leading-[1.1] tracking-tight"
              >
                Born from the Belief That Emerging Tech Deserves Elite Engineering
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="mt-8 space-y-5 text-[15px] md:text-base text-muted leading-relaxed"
              >
                <p>
                  Vallorex was founded by engineers who saw a clear gap: most agencies treat AI and Blockchain as buzzwords. We treat them as infrastructure. We started as a small specialized team, took on hard problems other firms avoided, and built a reputation for delivery over promises. Today we work with startups and growth-stage companies across the US, Europe, and Asia who need production-grade systems, not slide decks.
                </p>
              </motion.div>
            </motion.div>

            {/* Visual: Timeline card */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="relative bg-gradient-to-br from-[#0A1628] to-[#0d2145] rounded-2xl p-8 md:p-10 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-8">
                    <Eye className="w-4 h-4 text-brand-orange" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-brand-orange uppercase">
                      Our Mission
                    </span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-white leading-snug mb-8">
                    &ldquo;To be the engineering partner that makes AI and
                    blockchain ventures indistinguishable from the best-built
                    systems on earth.&rdquo;
                  </p>
                  <div className="h-px bg-white/10 mb-8" />
                  <div className="flex items-center gap-2 mb-6">
                    <Target className="w-4 h-4 text-brand-blue" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-brand-blue uppercase">
                      Our Vision
                    </span>
                  </div>
                  <p className="text-[15px] text-[#94A3B8] leading-relaxed">
                    A world where every organization, from a two-person startup to a multinational institution, has access to engineering talent that can turn frontier technology into production reality, securely and at scale.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* - SECTION 4: VALUES - */}
      <section id="trust" className="scroll-mt-36 py-24 md:py-32 bg-[#FAFAFA] border-y border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="block text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase mb-4"
            >
              What Drives Us
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-midnight tracking-tight leading-tight"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base md:text-lg text-muted max-w-[560px] mx-auto"
            >
              Six principles that guide every decision, every engagement, and
              every line of code we write.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="group bg-white rounded-2xl border border-slate-200/80 px-8 py-9 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${value.color}10` }}
                >
                  <value.icon
                    className="w-[22px] h-[22px]"
                    style={{ color: value.color }}
                  />
                </div>
                <h3 className="text-lg font-bold text-midnight mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted leading-[1.7]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* - SECTION 6: JOURNEY TIMELINE - */}
      <section className="py-24 md:py-32 bg-[#0A0F1E] relative overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] max-w-[700px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[5%] right-[-5%] w-[40vw] h-[40vw] max-w-[500px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.span
              variants={fadeUp}
              className="block text-[10px] font-bold tracking-[0.25em] text-brand-orange uppercase mb-4"
            >
              Our Journey
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-white tracking-tight leading-tight"
            >
              From Startup to Global Force
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base text-[#94A3B8] max-w-[480px] mx-auto"
            >
              A focused journey of building production systems, growing our team, and partnering with clients across regions and industries.
            </motion.p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Central vertical line - desktop only */}
            <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px">
              <div className="h-full w-full bg-gradient-to-b from-brand-blue/60 via-brand-orange/40 to-brand-blue/20" />
            </div>
            {/* Left vertical line - mobile only */}
            <div className="md:hidden absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/60 via-brand-orange/40 to-brand-blue/20" />

            <div className="space-y-6 md:space-y-0">
              {milestones.map((milestone, i) => {
                const isLeft = i % 2 === 0;
                const MilestoneIcon = milestone.icon;

                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                    className={`relative flex items-start md:items-center ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } md:mb-8`}
                  >
                    {/* ── Center node (desktop) ── */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 flex-col items-center">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center border-2 bg-[#0A0F1E] shadow-lg transition-transform duration-300 hover:scale-110"
                        style={{
                          borderColor: milestone.color,
                          boxShadow: `0 0 20px ${milestone.color}25`,
                        }}
                      >
                        <MilestoneIcon
                          className="w-[18px] h-[18px]"
                          style={{ color: milestone.color }}
                        />
                      </div>
                    </div>

                    {/* ── Left node (mobile) ── */}
                    <div className="md:hidden absolute left-[15px] z-20">
                      <div
                        className="w-[25px] h-[25px] rounded-lg flex items-center justify-center border-2 bg-[#0A0F1E]"
                        style={{ borderColor: milestone.color }}
                      >
                        <MilestoneIcon
                          className="w-3 h-3"
                          style={{ color: milestone.color }}
                        />
                      </div>
                    </div>

                    {/* ── Card ── */}
                    <div
                      className={`ml-14 md:ml-0 md:w-[calc(50%-40px)] ${
                        isLeft ? "md:pr-0" : "md:pl-0"
                      }`}
                    >
                      <div
                        className="group relative rounded-xl p-5 md:p-6 border transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          background: `linear-gradient(135deg, ${milestone.color}08, transparent)`,
                          borderColor: `${milestone.color}20`,
                        }}
                      >
                        {/* Connector arm - desktop only */}
                        <div
                          className={`hidden md:block absolute top-1/2 -translate-y-px h-px w-5 ${
                            isLeft ? "-right-5" : "-left-5"
                          }`}
                          style={{ background: `${milestone.color}40` }}
                        />

                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="text-[22px] md:text-2xl font-extrabold leading-none"
                            style={{ color: milestone.color }}
                          >
                            {milestone.year}
                          </span>
                          <div
                            className="h-px flex-1"
                            style={{ background: `${milestone.color}20` }}
                          />
                          <span
                            className="text-[9px] font-bold uppercase tracking-widest"
                            style={{ color: `${milestone.color}90` }}
                          >
                            {milestone.title}
                          </span>
                        </div>
                        <p className="text-sm text-[#94A3B8] leading-relaxed">
                          {milestone.event}
                        </p>
                      </div>
                    </div>

                    {/* ── Spacer for opposite side ── */}
                    <div className="hidden md:block md:w-[calc(50%-40px)]" />
                  </motion.div>
                );
              })}
            </div>

            {/* Terminal node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-start md:justify-center mt-8"
            >
              <div className="ml-[15px] md:ml-0 w-[25px] h-[25px] md:w-11 md:h-11 rounded-full bg-brand-orange/20 border-2 border-brand-orange flex items-center justify-center">
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-brand-orange" />
              </div>
            </motion.div>
            <p className="text-center text-xs text-brand-orange font-semibold mt-3 tracking-wider uppercase">
              The journey continues
            </p>
          </div>
        </div>
      </section>

      {/* - SECTION 7: CTA - */}
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
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-2 mb-6"
            />

            <motion.h2
              variants={fadeUp}
              className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-extrabold text-white tracking-tight leading-[1.1] mb-8"
            >
              Ready to Build With Vallorex?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-[#94A3B8] max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Get a free technical audit from a senior Vallorex engineer. No
              pitch deck. No strings. Just honest insight into your
              architecture.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                className="bg-brand-orange hover:bg-[#E06612] text-white rounded-full px-10 h-14 md:h-16 text-base md:text-lg font-bold shadow-[0_4px_24px_rgba(249,115,22,0.3)] transition-all hover:scale-105 active:scale-95 group"
              >
                <Link href="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                className="border-white/30 text-white hover:bg-white/10 bg-transparent border rounded-full px-8 h-14 text-base font-bold transition-all"
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-2.5 mt-10"
            >
              <ShieldCheck
                className="h-4 w-4 text-brand-blue"
                strokeWidth={2.5}
              />
              <span className="text-sm font-medium text-[#94A3B8]">
                The premier engineering partner for AI and Blockchain
                ventures.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
