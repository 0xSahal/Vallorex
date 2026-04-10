"use client";

import React, { useRef } from "react";
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
  MapPin,
  Rocket,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  Briefcase,
  Heart,
  Zap,
  BookOpen,
  Coffee,
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
      "Every line of code is written with intention. We don't ship prototypes — we ship production-grade systems built to last.",
    color: "#2563EB",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Threat modeling isn't an afterthought. We bake security into every layer — from architecture to deployment.",
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

const leadership = [
  {
    name: "Alexander Chen",
    role: "Chief Executive Officer",
    bio: "Ex-Google DeepMind. 15 years building AI systems at scale. Led teams that shipped ML infrastructure serving 2B+ users.",
    color: "#2563EB",
    previousCompany: "Google DeepMind",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Technology Officer",
    bio: "Former Principal Engineer at Coinbase. Architect of DeFi protocols securing $4B+ TVL. Solidity & Rust expert.",
    color: "#8B5CF6",
    previousCompany: "Coinbase",
  },
  {
    name: "David Park",
    role: "VP of Engineering",
    bio: "Ex-Meta infrastructure lead. Built real-time data systems processing 50M+ events/second. Distributed systems specialist.",
    color: "#F97316",
    previousCompany: "Meta",
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Client Success",
    bio: "Former McKinsey engagement manager. Bridges the gap between business strategy and engineering execution for Fortune 500 clients.",
    color: "#0D9488",
    previousCompany: "McKinsey",
  },
];

const offices = [
  {
    city: "New York",
    country: "United States",
    type: "Global HQ",
    address: "Financial District, Manhattan",
    timezone: "EST (UTC-5)",
    color: "#2563EB",
  },
  {
    city: "London",
    country: "United Kingdom",
    type: "EMEA Office",
    address: "Canary Wharf, E14",
    timezone: "GMT (UTC+0)",
    color: "#8B5CF6",
  },
  {
    city: "Singapore",
    country: "Singapore",
    type: "APAC Office",
    address: "Marina Bay Financial Centre",
    timezone: "SGT (UTC+8)",
    color: "#F97316",
  },
  {
    city: "Dubai",
    country: "UAE",
    type: "MENA Office",
    address: "DIFC, Gate Village",
    timezone: "GST (UTC+4)",
    color: "#10B981",
  },
];

const milestones = [
  { year: "2018", title: "The Beginning", event: "Founded in New York by AI & blockchain engineers from Google, Meta, and Coinbase", icon: Rocket, color: "#2563EB" },
  { year: "2019", title: "First Major Win", event: "First $1M contract — AI-driven fraud detection for a top-10 US bank", icon: TrendingUp, color: "#F97316" },
  { year: "2020", title: "Going Global", event: "Opened London office; grew to 50 engineers across 12 countries", icon: Globe2, color: "#8B5CF6" },
  { year: "2021", title: "Scaling Impact", event: "Secured $2B+ in client value through DeFi protocol launches and AI deployments", icon: Zap, color: "#10B981" },
  { year: "2022", title: "Trust Certified", event: "ISO 27001 & SOC 2 Type II certified; expanded into Singapore and Dubai", icon: ShieldCheck, color: "#06B6D4" },
  { year: "2023", title: "AI Agents Era", event: "150+ projects delivered; launched dedicated AI Agents & LLM practice", icon: Lightbulb, color: "#EC4899" },
  { year: "2024", title: "Industry Leader", event: "Named 'Top AI Engineering Firm' by TechCrunch; crossed 200 engineers globally", icon: CheckCircle2, color: "#F97316" },
  { year: "2025", title: "The Converged Stack", event: "Pioneered converged AI + Blockchain stack; partnership with Fortune 100 enterprises", icon: Target, color: "#2563EB" },
];

const perks = [
  { icon: Globe2, label: "Remote-First Culture", desc: "Work from anywhere with async-first communication" },
  { icon: BookOpen, label: "$5K Learning Budget", desc: "Annual stipend for courses, conferences & certifications" },
  { icon: Heart, label: "Premium Healthcare", desc: "Full medical, dental & vision for you and your family" },
  { icon: Coffee, label: "Unlimited PTO", desc: "We trust you to manage your time and recharge" },
  { icon: Zap, label: "Latest Hardware", desc: "Top-spec MacBook Pro, 4K monitor & ergonomic setup" },
  { icon: TrendingUp, label: "Equity & Bonuses", desc: "Competitive equity packages and performance bonuses" },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function CompanyPageClient() {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
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
              trust — from autonomous agents to audited smart contracts —
              with institutional quality from day one.
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

      {/* ── SECTION 2: STATS BAR ────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200/60 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-slate-200/60">
            {[
              { value: 200, suffix: "+", label: "Engineers Worldwide" },
              { value: 150, suffix: "+", label: "Projects Delivered" },
              { prefix: "$", value: 2, suffix: "B+", label: "Client Value Created" },
              { value: 98, suffix: "%", label: "Client Retention Rate" },
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

      {/* ── SECTION 3: OUR STORY ────────────────────────────────── */}
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
                Born from the Belief That Emerging Tech Deserves Elite
                Engineering
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="mt-8 space-y-5 text-[15px] md:text-base text-muted leading-relaxed"
              >
                <p>
                  Vallorex was founded in 2018 by a team of engineers from
                  Google DeepMind, Meta, and Coinbase who saw a gap in the
                  market: the most transformative technologies of our
                  generation — artificial intelligence and blockchain — were
                  being built by teams that didn&apos;t understand the
                  institutional-grade standards required for real-world
                  deployment.
                </p>
                <p>
                  We started with a single conviction: that AI and blockchain
                  ventures deserve the same caliber of engineering that powers
                  Wall Street trading systems, defense infrastructure, and
                  critical healthcare platforms.
                </p>
                <p>
                  Today, Vallorex is a 200+ person engineering organization
                  serving Fortune 500 enterprises, Series A startups, DeFi
                  protocols, and government contracts across 30+ countries —
                  with offices in New York, London, Singapore, and Dubai.
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
                    A world where every organization — from a two-person
                    startup to a multinational institution — has access to
                    engineering talent that can turn frontier technology into
                    production reality, securely and at scale.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: VALUES ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#FAFAFA] border-y border-slate-200/60">
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

      {/* ── SECTION 5: LEADERSHIP ───────────────────────────────── */}
      <section id="leadership" className="py-24 md:py-32 bg-white scroll-mt-24">
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
              Leadership
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-midnight tracking-tight leading-tight"
            >
              Built by Operators, Not Observers
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base md:text-lg text-muted max-w-[600px] mx-auto"
            >
              Our leadership team has collectively shipped systems at Google,
              Meta, Coinbase, McKinsey, and Goldman Sachs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8"
          >
            {leadership.map((person) => (
              <motion.div
                key={person.name}
                variants={fadeUp}
                className="group relative bg-white rounded-2xl border border-slate-200/80 px-8 py-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Subtle accent line on left */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl transition-all duration-300 group-hover:w-[4px]"
                  style={{ background: person.color }}
                />

                <div className="flex items-start gap-5">
                  {/* Monogram */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ background: `${person.color}10` }}
                  >
                    <span
                      className="text-lg font-bold"
                      style={{ color: person.color }}
                    >
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg font-bold text-midnight">
                        {person.name}
                      </h3>
                      <span
                        className="text-[9px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5"
                        style={{
                          color: person.color,
                          background: `${person.color}10`,
                        }}
                      >
                        Ex-{person.previousCompany}
                      </span>
                    </div>
                    <p
                      className="text-sm font-semibold mt-1"
                      style={{ color: person.color }}
                    >
                      {person.role}
                    </p>
                    <p className="text-sm text-muted mt-3 leading-[1.7]">
                      {person.bio}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold mt-4 transition-colors hover:underline"
                      style={{ color: person.color }}
                    >
                      Connect <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6: JOURNEY TIMELINE ─────────────────────────── */}
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
              Seven years of relentless execution, from a small New York team
              to 200+ engineers across four continents.
            </motion.p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Central vertical line — desktop only */}
            <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px">
              <div className="h-full w-full bg-gradient-to-b from-brand-blue/60 via-brand-orange/40 to-brand-blue/20" />
            </div>
            {/* Left vertical line — mobile only */}
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
                        {/* Connector arm — desktop only */}
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

      {/* ── SECTION 7: GLOBAL PRESENCE ──────────────────────────── */}
      <section id="offices" className="py-24 md:py-32 bg-white scroll-mt-24">
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
              Global Presence
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-midnight tracking-tight leading-tight"
            >
              Distributed-First. Globally Available.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base md:text-lg text-muted max-w-[580px] mx-auto"
            >
              Strategic offices across four continents, with remote engineering
              teams operating across 20+ time zones.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {offices.map((office) => (
              <motion.div
                key={office.city}
                variants={fadeUp}
                className="group bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                  style={{ background: office.color }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${office.color}10` }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: office.color }}
                  />
                </div>
                <h3 className="text-lg font-bold text-midnight">
                  {office.city}
                </h3>
                <p className="text-xs font-semibold text-brand-blue mt-0.5">
                  {office.type}
                </p>
                <p className="text-sm text-muted mt-3">{office.address}</p>
                <p className="text-xs text-muted mt-1">{office.country}</p>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-xs text-muted flex items-center gap-1.5">
                    <Globe2 className="w-3 h-3" />
                    {office.timezone}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 8: CULTURE & CAREERS ────────────────────────── */}
      <section id="careers" className="py-24 md:py-32 bg-[#FAFAFA] border-y border-slate-200/60 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200/60 px-3 py-1 mb-6"
              >
                <Briefcase className="w-3 h-3 text-green-600" />
                <span className="text-[10px] font-bold tracking-[0.15em] text-green-700 uppercase">
                  We&apos;re Hiring
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-midnight leading-[1.1] tracking-tight"
              >
                Build the Future With the Best
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-6 text-[15px] md:text-base text-muted leading-relaxed max-w-[480px]"
              >
                We&apos;re building a team of extraordinary engineers who
                want to work on the hardest problems in AI and blockchain.
                If you thrive on complexity and care about craft, you&apos;ll
                feel right at home.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8">
                <Button
                  asChild
                  className="bg-brand-orange hover:bg-[#E06612] text-white rounded-full px-8 h-12 text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-[1.03] active:scale-95 group"
                >
                  <Link href="/careers">
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Perks grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {perks.map((perk) => (
                <motion.div
                  key={perk.label}
                  variants={fadeUp}
                  className="group flex items-start gap-3.5 bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/8 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <perk.icon className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-midnight">
                      {perk.label}
                    </p>
                    <p className="text-xs text-muted mt-0.5 leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: TRUST & COMPLIANCE ───────────────────────── */}
      <section id="trust" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span
              variants={fadeUp}
              className="block text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase mb-4"
            >
              Trust & Security
            </motion.span>
            <motion.h3
              variants={fadeUp}
              className="text-2xl md:text-3xl font-extrabold text-midnight tracking-tight"
            >
              Enterprise-Grade Security & Compliance
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm text-muted max-w-[500px] mx-auto"
            >
              Your intellectual property, data, and infrastructure are
              protected by industry-leading certifications and practices.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              {
                label: "ISO 27001",
                desc: "Information security management",
                color: "#2563EB",
              },
              {
                label: "SOC 2 Type II",
                desc: "Continuous compliance verified",
                color: "#8B5CF6",
              },
              {
                label: "HIPAA",
                desc: "Healthcare data protection",
                color: "#0D9488",
              },
              {
                label: "PCI DSS",
                desc: "Payment card industry security",
                color: "#F97316",
              },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl border border-slate-200/80 p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${badge.color}10` }}
                >
                  <CheckCircle2
                    className="w-5 h-5"
                    style={{ color: badge.color }}
                  />
                </div>
                <p className="text-sm font-bold text-midnight mb-1">
                  {badge.label}
                </p>
                <p className="text-xs text-muted">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: CTA ─────────────────────────────────────── */}
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
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
              </span>
              <span className="text-sm text-green-400">
                3 project slots open this quarter
              </span>
            </motion.div>

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
                <Link href="/contact?tab=booking">
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
