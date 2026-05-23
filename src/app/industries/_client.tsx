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
import {
  ArrowRight,
  ShieldCheck,
  Compass,
  Landmark,
  HeartPulse,
  TrendingUp,
  ShoppingBag,
  Zap,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ──────────────────────────── Animations ──────────────────────────────────── */

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

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ──────────────────────────── Counter component ───────────────────────────── */

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 30, stiffness: 100 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  React.useEffect(() => {
    if (inView) mv.set(value);
  }, [mv, inView, value]);

  return (
    <span ref={ref} className="flex items-baseline font-extrabold leading-none">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

/* ──────────────────────────── Industry data ───────────────────────────────── */

interface IndustryFeature {
  icon?: React.ReactNode;
  number?: string;
  label: string;
}

interface Industry {
  id: string;
  icon: React.ReactNode;
  label: string;
  labelColor: string;
  accentColor: string;
  accentBg: string;
  heading: string;
  description: string;
  features: IndustryFeature[];
  featureStyle: "numbered" | "icon" | "tag";
  ctaLabel: string;
  ctaHref: string;
  imagePosition: "left" | "right";
  darkBg: boolean;
  gradient: string;
  glowColor: string;
}

const industries: Industry[] = [
  {
    id: "banking-finance",
    icon: <Landmark className="w-6 h-6" />,
    label: "Banking & Finance",
    labelColor: "text-brand-orange",
    accentColor: "#F97316",
    accentBg: "bg-orange-50",
    heading: "Financial Systems That Can't Afford to Fail",
    description:
      "We engineer payment infrastructure, fraud-detection engines, and real-time settlement systems trusted by institutions processing billions in daily volume.",
    features: [
      { number: "01", label: "Fraud Detection" },
      { number: "02", label: "Payment Rails" },
    ],
    featureStyle: "numbered",
    ctaLabel: "See Fintech Case Studies",
    ctaHref: "/case-studies",
    imagePosition: "left",
    darkBg: false,
    gradient:
      "radial-gradient(ellipse at 30% 80%, rgba(249,115,22,0.35) 0%, transparent 50%), radial-gradient(ellipse at 70% 20%, rgba(245,158,11,0.25) 0%, transparent 50%), linear-gradient(135deg, #1C1917 0%, #0C0A09 100%)",
    glowColor: "rgba(249,115,22,0.15)",
  },
  {
    id: "fintech-crypto",
    icon: <TrendingUp className="w-6 h-6" />,
    label: "FinTech & Crypto",
    labelColor: "text-brand-orange",
    accentColor: "#F97316",
    accentBg: "bg-orange-50",
    heading: "Infrastructure Built for the Adversarial Internet",
    description:
      "Securing billions in TVL requires more than just code. It requires a deep understanding of game theory and protocol economics.",
    features: [],
    featureStyle: "tag",
    ctaLabel: "See Web3 Case Studies",
    ctaHref: "/case-studies",
    imagePosition: "right",
    darkBg: true,
    gradient:
      "radial-gradient(ellipse at 60% 40%, rgba(6,182,212,0.3) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(37,99,235,0.15) 0%, transparent 50%), linear-gradient(135deg, #0F172A 0%, #020617 100%)",
    glowColor: "rgba(6,182,212,0.12)",
  },
  {
    id: "ecommerce-retail",
    icon: <ShoppingBag className="w-6 h-6" />,
    label: "eCommerce & Retail",
    labelColor: "text-brand-blue",
    accentColor: "#2563EB",
    accentBg: "bg-blue-50",
    heading: "Customer Experiences That Convert",
    description:
      "From high-performance storefronts to inventory intelligence and personalization, we build commerce platforms that scale through spikes and deliver measurable lift in conversion.",
    features: [
      { number: "01", label: "Personalization & Search" },
      { number: "02", label: "Inventory & Order Ops" },
    ],
    featureStyle: "numbered",
    ctaLabel: "See Commerce Case Studies",
    ctaHref: "/case-studies",
    imagePosition: "right",
    darkBg: false,
    gradient:
      "radial-gradient(ellipse at 40% 70%, rgba(37,99,235,0.25) 0%, transparent 50%), radial-gradient(ellipse at 70% 20%, rgba(249,115,22,0.18) 0%, transparent 55%), linear-gradient(135deg, #0B1220 0%, #020617 100%)",
    glowColor: "rgba(37,99,235,0.12)",
  },
  {
    id: "healthtech",
    icon: <HeartPulse className="w-6 h-6" />,
    label: "HealthTech",
    labelColor: "text-brand-blue",
    accentColor: "#2563EB",
    accentBg: "bg-blue-50",
    heading: "AI That Meets Clinical Standards",
    description:
      "From HIPAA-compliant data pipelines to FDA-ready diagnostic AI, we build healthcare technology that earns the trust of clinicians and regulators alike.",
    features: [
      {
        icon: <ShieldCheck className="w-5 h-5 text-brand-blue" />,
        label: "HIPAA & FHIR Compliance",
      },
      {
        icon: <Compass className="w-5 h-5 text-brand-blue" />,
        label: "Diagnostic Support Systems",
      },
    ],
    featureStyle: "icon",
    ctaLabel: "See Health Case Studies",
    ctaHref: "/case-studies",
    imagePosition: "left",
    darkBg: false,
    gradient:
      "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.5) 0%, transparent 40%), radial-gradient(ellipse at 30% 70%, rgba(6,182,212,0.3) 0%, transparent 50%), linear-gradient(135deg, #06B6D4 0%, #0E7490 60%, #164E63 100%)",
    glowColor: "rgba(6,182,212,0.12)",
  },
  {
    id: "energy-sustainability",
    icon: <Zap className="w-6 h-6" />,
    label: "Energy & Sustainability",
    labelColor: "text-teal-600",
    accentColor: "#0D9488",
    accentBg: "bg-teal-50",
    heading: "Data Systems for a Decarbonizing World",
    description:
      "We engineer IoT pipelines, analytics layers, and optimization systems that help energy and sustainability teams measure, predict, and act with confidence.",
    features: [
      { label: "IoT Data Pipelines" },
      { label: "Grid & Demand Analytics" },
      { label: "Carbon Accounting" },
    ],
    featureStyle: "tag",
    ctaLabel: "See Energy Case Studies",
    ctaHref: "/case-studies",
    imagePosition: "left",
    darkBg: false,
    gradient:
      "radial-gradient(ellipse at 35% 65%, rgba(20,184,166,0.28) 0%, transparent 55%), radial-gradient(ellipse at 70% 25%, rgba(37,99,235,0.12) 0%, transparent 55%), linear-gradient(135deg, #031B18 0%, #0B1220 100%)",
    glowColor: "rgba(20,184,166,0.12)",
  },
  {
    id: "enterprise-saas",
    icon: <Building2 className="w-6 h-6" />,
    label: "Enterprise & SaaS",
    labelColor: "text-teal-600",
    accentColor: "#0D9488",
    accentBg: "bg-teal-50",
    heading: "Modernizing Legacy Workflows",
    description:
      "We build the connective tissue between your legacy ERP systems and next-generation AI agents, without disrupting the operations that keep you running.",
    features: [
      { label: "Process Mining" },
      { label: "Decision Support" },
    ],
    featureStyle: "tag",
    ctaLabel: "See Enterprise Case Studies",
    ctaHref: "/case-studies",
    imagePosition: "right",
    darkBg: false,
    gradient:
      "radial-gradient(ellipse at 40% 60%, rgba(94,234,212,0.3) 0%, transparent 50%), linear-gradient(135deg, #134E4A 0%, #115E59 40%, #0D9488 100%)",
    glowColor: "rgba(20,184,166,0.12)",
  },
];

/* ──────────────────────────── Interactive image ───────────────────────────── */

function IndustryVisual({ industry }: { industry: Industry }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 120,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full max-w-[540px] aspect-[4/3] rounded-[1.75rem] overflow-hidden cursor-default group"
    >
      {/* Glow border */}
      <div
        className="absolute -inset-[1px] rounded-[1.75rem] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${industry.accentColor}40, transparent 40%, transparent 60%, ${industry.accentColor}30)`,
        }}
      />

      {/* Inner card */}
      <div className="absolute inset-[1px] rounded-[calc(1.75rem-1px)] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: industry.gradient }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Central icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            {/* Animated rings */}
            <div
              className="absolute -inset-12 rounded-full border opacity-20 animate-pulse"
              style={{ borderColor: industry.accentColor }}
            />
            <div
              className="absolute -inset-20 rounded-full border opacity-10"
              style={{ borderColor: industry.accentColor }}
            />
            <div
              className="absolute -inset-28 rounded-full border opacity-5"
              style={{ borderColor: industry.accentColor }}
            />

            {/* Icon container */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
              style={{
                background: `${industry.accentColor}18`,
                border: `1px solid ${industry.accentColor}30`,
                color: "white",
              }}
            >
              {React.cloneElement(industry.icon as React.ReactElement, {
                className: "w-9 h-9",
              })}
            </div>
          </motion.div>
        </div>

        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: industry.accentColor,
              opacity: 0.3 + Math.random() * 0.3,
              top: `${15 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Corner accent */}
        <div
          className="absolute bottom-0 right-0 w-40 h-40 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(circle at bottom right, ${industry.accentColor}, transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  );
}

/* ──────────────────────────── Feature renderers ───────────────────────────── */

function NumberedFeature({
  number,
  label,
  dark,
}: {
  number: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex-1 min-w-[140px] rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 ${
        dark
          ? "bg-white/[0.06] border border-white/10 hover:bg-white/[0.1]"
          : "bg-white border border-slate-200/80 shadow-sm hover:shadow-md"
      }`}
    >
      <span
        className={`block text-[11px] font-bold mb-1.5 ${
          dark ? "text-brand-blue" : "text-brand-blue"
        }`}
      >
        {number}
      </span>
      <span
        className={`text-[15px] font-semibold ${
          dark ? "text-white" : "text-midnight"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function IconFeature({
  icon,
  label,
  dark,
}: {
  icon: React.ReactNode;
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 ${
        dark
          ? "bg-white/[0.06] border border-white/10 hover:bg-white/[0.1]"
          : "bg-white border border-slate-200/80 shadow-sm hover:shadow-md"
      }`}
    >
      {icon}
      <span
        className={`text-[15px] font-semibold ${
          dark ? "text-white" : "text-midnight"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function TagFeature({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <span
      className={`inline-block rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
        dark
          ? "bg-white/[0.06] border border-white/10 text-white hover:bg-white/[0.1]"
          : "bg-white border border-slate-300 text-midnight shadow-sm hover:shadow-md"
      }`}
    >
      {label}
    </span>
  );
}

/* ──────────────────────────── Industry section ────────────────────────────── */

function IndustrySection({
  industry,
  index,
}: {
  industry: Industry;
  index: number;
}) {
  const isDark = industry.darkBg;
  const isImageLeft = industry.imagePosition === "left";

  const imageBlock = (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex items-center justify-center w-full lg:w-1/2"
    >
      <IndustryVisual industry={industry} />
    </motion.div>
  );

  const textBlock = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className="flex flex-col items-start w-full lg:w-1/2 max-w-[540px]"
    >
      {/* Section number + label */}
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
        <span
          className={`text-[42px] font-extrabold leading-none ${
            isDark ? "text-white/20" : "text-slate-300"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`text-[11px] font-bold tracking-[0.2em] uppercase ${industry.labelColor}`}
        >
          {industry.label}
        </span>
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className={`text-3xl sm:text-4xl md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6 ${
          isDark ? "text-white" : "text-midnight"
        }`}
      >
        {industry.heading}
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className={`text-[15px] md:text-base leading-relaxed mb-8 max-w-[480px] ${
          isDark ? "text-white/50" : "text-muted"
        }`}
      >
        {industry.description}
      </motion.p>

      {industry.features.length > 0 && (
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-3 mb-8 w-full"
        >
          {industry.features.map((f, i) => {
            if (industry.featureStyle === "numbered" && f.number) {
              return (
                <NumberedFeature
                  key={i}
                  number={f.number}
                  label={f.label}
                  dark={isDark}
                />
              );
            }
            if (industry.featureStyle === "icon" && f.icon) {
              return (
                <IconFeature
                  key={i}
                  icon={f.icon}
                  label={f.label}
                  dark={isDark}
                />
              );
            }
            return <TagFeature key={i} label={f.label} dark={isDark} />;
          })}
        </motion.div>
      )}

      <motion.div variants={fadeUp}>
        <Button
          asChild
          className="bg-brand-orange hover:bg-[#E06612] text-white rounded-full px-8 h-12 text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-[1.03] active:scale-95 group"
        >
          <Link href={industry.ctaHref}>
            {industry.ctaLabel}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      className={`industry-section relative w-full overflow-hidden ${
        isDark ? "bg-[#0B0F19]" : index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
      }`}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-[180px]"
        style={{ background: industry.glowColor }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10 py-24 md:py-32">
        <div
          className={`flex flex-col lg:flex-row items-center gap-14 lg:gap-20 ${
            isImageLeft ? "" : "lg:flex-row-reverse"
          }`}
        >
          {imageBlock}
          {textBlock}
        </div>
      </div>

      {/* Bottom border for light sections */}
      {!isDark && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      )}
    </section>
  );
}

/* ──────────────────────────── Mini nav pills ──────────────────────────────── */

function IndustryNav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="flex flex-wrap items-center justify-center gap-2 mt-14"
    >
      {industries.map((ind) => (
        <a
          key={ind.id}
          href={`#${ind.id}`}
          className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-muted transition-all duration-300 hover:border-brand-blue hover:text-brand-blue hover:shadow-sm"
        >
          <span
            className="transition-colors duration-300 group-hover:text-brand-blue"
            style={{ color: ind.accentColor }}
          >
            {React.cloneElement(ind.icon as React.ReactElement, {
              className: "w-3.5 h-3.5",
            })}
          </span>
          {ind.label}
        </a>
      ))}
    </motion.div>
  );
}

/* ──────────────────────────── Main Page ────────────────────────────────────── */

export default function IndustriesPageClient() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    const id = decodeURIComponent(hash.slice(1));
    const el = document.getElementById(id);
    if (!el) return;

    const NAVBAR_HEIGHT_PX = 88;
    const EXTRA_GAP_PX = 12;

    const scroll = () => {
      const top = el.getBoundingClientRect().top + window.scrollY - (NAVBAR_HEIGHT_PX + EXTRA_GAP_PX);
      window.scrollTo({ top, behavior: "smooth" });
    };

    // Wait for layout/fonts to settle a bit before measuring.
    requestAnimationFrame(() => {
      window.setTimeout(scroll, 50);
    });
  }, []);

  return (
    <div className="bg-white relative overflow-hidden">
      {/* ─── Hero ─── */}
      <section className="relative w-full pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40 bg-white overflow-hidden">
        {/* Background accent */}
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
                Verticals We Serve
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[76px] font-extrabold tracking-tight leading-[1.06] mb-8"
            >
              <span className="block text-midnight">Deep Expertise.</span>
              <span className="block text-brand-blue">Not Generic IT.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-muted max-w-[580px] mx-auto leading-relaxed mb-2"
            >
              We&apos;re not a general-purpose dev shop. We&apos;ve built
              production AI and blockchain systems in 5 high-stakes industries, and we know the regulations,
              edge cases, and failure modes that only come from being there.
            </motion.p>

            <IndustryNav />
          </motion.div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-white border-y border-slate-200/60 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-slate-200/60">
            {[
              { value: 5, suffix: "+", label: "Industry Verticals" },
              { value: 150, suffix: "+", label: "Projects Delivered" },
              { value: 98, suffix: "%", label: "On-Time Delivery" },
              { value: 2, suffix: "B+", label: "Client Value Unlocked" },
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
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[10px] md:text-[11px] font-bold text-brand-blue uppercase tracking-[0.15em] mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Industry Sections ─── */}
      {industries.map((industry, idx) => (
        <div key={industry.id} id={industry.id}>
          <IndustrySection industry={industry} index={idx} />
        </div>
      ))}

      {/* ─── Bottom CTA ─── */}
      <section className="relative py-32 bg-[#0F172A] overflow-hidden">
        {/* Background glows */}
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
              Don&apos;t See Your Industry?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-[#94A3B8] max-w-xl mx-auto mb-10 leading-relaxed"
            >
              We&apos;ve architected systems for defense, energy, and aerospace.
              Our core engineering principles, security, scalability, and precision, apply wherever failure is
              not an option.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Button
                asChild
                className="bg-brand-orange hover:bg-[#E06612] text-white rounded-full px-10 h-14 md:h-16 text-base md:text-lg font-bold shadow-[0_4px_24px_rgba(249,115,22,0.3)] transition-all hover:scale-105 active:scale-95 group"
              >
                <Link href="/contact">
                  Tell Us About Your Project
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-2.5 mt-10"
            >
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
