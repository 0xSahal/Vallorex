"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  Variants,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useInView,
  useTransform,
  LayoutGroup,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  ShieldCheck,
  Zap,
  Clock,
  Layers,
  Brain,
  Code2,
  GitBranch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const categories = [
  "All Projects",
  "Artificial Intelligence",
  "Blockchain & Web3",
  "Smart Contracts",
  "Fintech Infrastructure",
];

const featuredStudy = {
  label: "CASE STUDY 01 · FINTECH",
  badge: "73% FRAUD REDUCTION",
  title: "Real-Time Fraud\nDetection for a $2B\nPayment Platform",
  description:
    "Engineering a high-throughput ML pipeline that processes 2M+ daily transactions, flagging anomalies in under 8ms with zero downtime.",
  stack: ["Python", "TensorFlow", "AWS", "Kafka"],
  timeline: "11 Weeks to Prod",
  metricValue: 73,
};

const caseStudies = [
  {
    title: "Trustless Escrow Protocol on Ethereum",
    description:
      "Formally-verified Solidity contracts for high-stakes cross-border trade. Optimized for 42% gas efficiency over industry standards.",
    categoryLabel: "WEB3 · SECURITY ARCHITECTURE",
    metric: "$12M SECURED",
    metricColor: "text-brand-blue",
    metricValue: 88,
    metricBarColor: "bg-brand-blue",
    stack: ["Solidity", "Ethereum", "Foundry", "The Graph"],
    timeline: "12 Weeks",
    accentFrom: "#2563EB",
    accentTo: "#3B82F6",
    filterCategories: ["Blockchain & Web3", "Smart Contracts"],
  },
  {
    title: "Clinical Decision Support for Radiology",
    description:
      "Computer vision model detecting imaging anomalies in sub-2 seconds. Integrated directly into NHS-affiliated clinic workflows.",
    categoryLabel: "AI · COMPUTER VISION",
    metric: "91% MODEL ACCURACY",
    metricColor: "text-brand-orange",
    metricValue: 91,
    metricBarColor: "bg-brand-orange",
    stack: ["PyTorch", "DICOM", "FastAPI", "GCP"],
    timeline: "14 Weeks",
    accentFrom: "#F97316",
    accentTo: "#FB923C",
    filterCategories: ["Artificial Intelligence"],
  },
  {
    title: "Gas-Optimized AMM Protocol",
    description:
      "Building a proprietary AMM from scratch with custom liquidity mechanics. 42% gas savings versus the Uniswap V2 baseline.",
    categoryLabel: "DEFI · SMART CONTRACTS",
    metric: "$3M TVL AT LAUNCH",
    metricColor: "text-brand-blue",
    metricValue: 42,
    metricBarColor: "bg-brand-blue",
    stack: ["Solidity", "Hardhat", "Foundry", "The Graph"],
    timeline: "12 Weeks",
    accentFrom: "#8B5CF6",
    accentTo: "#A78BFA",
    filterCategories: ["Blockchain & Web3", "Smart Contracts"],
  },
  {
    title: "AI-Powered Supply Chain Engine",
    description:
      "Demand forecasting and route optimization for a $500M logistics enterprise. Automating 14 complex analyst workflows.",
    categoryLabel: "ENTERPRISE · ML OPS",
    metric: "40% OPS COST REDUCTION",
    metricColor: "text-brand-orange",
    metricValue: 40,
    metricBarColor: "bg-brand-orange",
    stack: ["Python", "Airflow", "Snowflake", "React"],
    timeline: "16 Weeks",
    accentFrom: "#06B6D4",
    accentTo: "#22D3EE",
    filterCategories: ["Artificial Intelligence"],
  },
];

const techLogos = [
  "Python",
  "TensorFlow",
  "PyTorch",
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

const stats = [
  { value: 50, suffix: "+", label: "GLOBAL PROJECTS" },
  { value: 30, suffix: "+", label: "ACTIVE CLIENTS" },
  { value: 5, display: "05", suffix: "", label: "COUNTRIES" },
  { value: 98, suffix: "%", label: "RETENTION RATE" },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function DotGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 dot-grid opacity-[0.04]" />
      <div className="absolute top-[15%] right-[10%] w-72 h-72 bg-brand-orange/[0.03] blur-[100px] rounded-full" />
      <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-brand-blue/[0.03] blur-[120px] rounded-full" />
    </div>
  );
}

function AnimatedCounter({
  target,
  display,
}: {
  target: number;
  suffix: string;
  display?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 30, stiffness: 80 });
  const rounded = useTransform(spring, (v) => {
    const n = Math.round(v);
    if (display && n >= target) return display;
    return n < 10 && target < 10 ? `0${n}` : String(n);
  });

  useEffect(() => {
    if (isInView) motionVal.set(target);
  }, [isInView, motionVal, target]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
    </span>
  );
}

function FeaturedVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated glow rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[280px] h-[280px] rounded-full border border-white/[0.04] animate-scale-pulse" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[200px] h-[200px] rounded-full border border-white/[0.06]" />
      </div>

      <svg
        viewBox="0 0 300 300"
        fill="none"
        className="w-[260px] h-[260px] relative z-10"
      >
        <defs>
          <linearGradient
            id="feat-g1"
            x1="150"
            y1="30"
            x2="150"
            y2="270"
          >
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1E293B" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="feat-glow" cx="50%" cy="45%" r="40%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <filter id="feat-blur">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        <circle cx="150" cy="140" r="80" fill="url(#feat-glow)" />

        {/* Layered triangles */}
        {[0, 15, 30].map((offset, i) => (
          <polygon
            key={i}
            points={`150,${40 + offset} ${265 - offset * 1.2},${250 - offset / 2} ${35 + offset * 1.2},${250 - offset / 2}`}
            stroke="url(#feat-g1)"
            strokeWidth={1.2 - i * 0.3}
            fill="none"
            opacity={1 - i * 0.3}
          />
        ))}

        {/* Inner structure lines */}
        <line x1="150" y1="40" x2="150" y2="250" stroke="#334155" strokeOpacity="0.12" strokeWidth="0.5" />
        <line x1="35" y1="250" x2="265" y2="250" stroke="#334155" strokeOpacity="0.1" strokeWidth="0.5" />
        <line x1="150" y1="40" x2="92" y2="145" stroke="#334155" strokeOpacity="0.08" strokeWidth="0.5" />
        <line x1="150" y1="40" x2="208" y2="145" stroke="#334155" strokeOpacity="0.08" strokeWidth="0.5" />
        <line x1="92" y1="145" x2="208" y2="145" stroke="#334155" strokeOpacity="0.08" strokeWidth="0.5" />

        {/* Accent nodes */}
        <circle cx="150" cy="40" r="2.5" fill="#F97316" fillOpacity="0.5" />
        <circle cx="265" cy="250" r="2" fill="#F97316" fillOpacity="0.3" />
        <circle cx="35" cy="250" r="2" fill="#F97316" fillOpacity="0.3" />
        <circle cx="150" cy="145" r="3" fill="#F97316" fillOpacity="0.4" filter="url(#feat-blur)" />
        <circle cx="150" cy="145" r="1.5" fill="#FB923C" fillOpacity="0.8" />
      </svg>
    </div>
  );
}

function CardVisual({
  index,
  accentFrom,
  accentTo,
}: {
  index: number;
  accentFrom: string;
  accentTo: string;
}) {
  const patterns = [
    // Orbital rings
    <svg key="p0" viewBox="0 0 400 280" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id={`cg-${index}`} cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={accentFrom} stopOpacity="0.2" />
          <stop offset="100%" stopColor={accentFrom} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="140" r="90" fill={`url(#cg-${index})`} />
      {[0, 30, 60, 90, 120, 150].map((a) => (
        <ellipse
          key={a}
          cx="200" cy="140" rx="90" ry="35"
          stroke={accentFrom}
          strokeOpacity="0.12"
          strokeWidth="0.6"
          fill="none"
          transform={`rotate(${a} 200 140)`}
        />
      ))}
      <circle cx="200" cy="140" r="3" fill={accentTo} fillOpacity="0.6" />
      {[35, 55, 75].map((r) => (
        <circle key={r} cx="200" cy="140" r={r} stroke={accentFrom} strokeOpacity="0.06" strokeWidth="0.5" fill="none" />
      ))}
    </svg>,
    // Radial burst
    <svg key="p1" viewBox="0 0 400 280" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id={`cg2-${index}`} cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={accentFrom} stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="140" r="100" fill={`url(#cg2-${index})`} />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={200 + Math.cos(a) * 20}
            y1={140 + Math.sin(a) * 20}
            x2={200 + Math.cos(a) * 100}
            y2={140 + Math.sin(a) * 100}
            stroke={accentFrom}
            strokeOpacity="0.08"
            strokeWidth="0.5"
          />
        );
      })}
      {[30, 55, 80].map((r) => (
        <circle key={r} cx="200" cy="140" r={r} stroke={accentFrom} strokeOpacity="0.08" strokeWidth="0.5" fill="none" />
      ))}
      <circle cx="200" cy="140" r="4" fill={accentTo} fillOpacity="0.5" />
    </svg>,
    // Hexagonal network
    <svg key="p2" viewBox="0 0 400 280" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id={`cg3-${index}`} cx="50%" cy="50%" r="40%">
          <stop offset="0%" stopColor={accentFrom} stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="140" r="90" fill={`url(#cg3-${index})`} />
      {/* Hex vertices */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a1 = ((i * 60 - 30) * Math.PI) / 180;
        const a2 = (((i + 1) * 60 - 30) * Math.PI) / 180;
        return (
          <React.Fragment key={i}>
            <line
              x1={200 + Math.cos(a1) * 70}
              y1={140 + Math.sin(a1) * 70}
              x2={200 + Math.cos(a2) * 70}
              y2={140 + Math.sin(a2) * 70}
              stroke={accentFrom}
              strokeOpacity="0.15"
              strokeWidth="0.6"
            />
            <line
              x1="200"
              y1="140"
              x2={200 + Math.cos(a1) * 70}
              y2={140 + Math.sin(a1) * 70}
              stroke={accentFrom}
              strokeOpacity="0.06"
              strokeWidth="0.5"
            />
            <circle
              cx={200 + Math.cos(a1) * 70}
              cy={140 + Math.sin(a1) * 70}
              r="2"
              fill={accentTo}
              fillOpacity="0.4"
            />
          </React.Fragment>
        );
      })}
      <circle cx="200" cy="140" r="3" fill={accentTo} fillOpacity="0.6" />
    </svg>,
    // Circuit board
    <svg key="p3" viewBox="0 0 400 280" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id={`cg4-${index}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accentFrom} stopOpacity="0.12" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="60" y="30" width="280" height="220" fill={`url(#cg4-${index})`} rx="4" />
      {Array.from({ length: 7 }).map((_, i) => (
        <React.Fragment key={i}>
          <line x1={100 + i * 35} y1="30" x2={100 + i * 35} y2="250" stroke={accentFrom} strokeOpacity="0.06" strokeWidth="0.4" />
          <line x1="60" y1={55 + i * 30} x2="340" y2={55 + i * 30} stroke={accentFrom} strokeOpacity="0.06" strokeWidth="0.4" />
        </React.Fragment>
      ))}
      {/* Traces */}
      <polyline points="135,85 200,85 200,140 270,140" stroke={accentFrom} strokeOpacity="0.2" strokeWidth="1" fill="none" />
      <polyline points="135,200 170,200 170,170 240,170 240,140" stroke={accentFrom} strokeOpacity="0.15" strokeWidth="0.8" fill="none" />
      {[[135, 85], [200, 140], [270, 140], [135, 200], [240, 140]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 1 ? 3 : 2} fill={accentTo} fillOpacity={0.3 + i * 0.1} />
      ))}
    </svg>,
  ];
  return patterns[index % patterns.length];
}

function MetricBar({
  value,
  color,
}: {
  value: number;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: "0%" }}
        animate={isInView ? { width: `${value}%` } : { width: "0%" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
    </div>
  );
}

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[number];
  index: number;
}) {
  return (
    <motion.div
      layout
      variants={scaleIn}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden card-glow transition-all duration-500 border border-slate-200/60"
    >
      {/* Hover gradient border overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"
        style={{
          background: `linear-gradient(135deg, ${study.accentFrom}10, transparent 40%, ${study.accentTo}08)`,
        }}
      />

      {/* Visual area */}
      <div className="relative h-52 md:h-56 bg-[#0C1220] overflow-hidden">
        <div
          className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${study.accentFrom}15, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center p-6 opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]">
          <CardVisual index={index} accentFrom={study.accentFrom} accentTo={study.accentTo} />
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#0C1220] to-transparent" />

        {/* Floating metric badge on the image */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${study.metricColor} bg-white/90 backdrop-blur-sm shadow-sm`}
          >
            {study.metric}
          </span>
        </div>
      </div>

      {/* Content area */}
      <div className="relative z-10 p-6 md:p-7">
        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
          {study.categoryLabel}
        </span>

        <h3 className="text-xl md:text-[22px] font-extrabold text-[#0F172A] mt-2.5 mb-3 leading-tight tracking-tight group-hover:text-brand-blue transition-colors duration-300">
          {study.title}
        </h3>

        <p className="text-slate-500 text-[14px] leading-relaxed mb-5">
          {study.description}
        </p>

        {/* Metric progress bar */}
        <MetricBar value={study.metricValue} color={study.metricBarColor} />

        {/* Footer */}
        <div className="flex items-center justify-between mt-5 pt-5 border-t border-slate-100/80">
          <div className="flex-1 min-w-0">
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
              CORE STACK
            </span>
            <p className="text-[13px] font-semibold text-midnight mt-0.5 truncate">
              {study.stack.join(" · ")}
            </p>
          </div>
          <div className="flex items-center gap-1.5 ml-4 shrink-0">
            <Clock className="w-3 h-3 text-brand-orange" />
            <span className="text-[13px] font-bold text-brand-orange">
              {study.timeline}
            </span>
          </div>
        </div>

        {/* Read more link */}
        <div className="mt-5">
          <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-blue group-hover:gap-2.5 transition-all duration-300 cursor-pointer">
            Read Case Study
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-12 border-y border-slate-100/60">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee marquee-track">
        {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-8 shrink-0"
          >
            <div className="w-2 h-2 rounded-full bg-brand-blue/20" />
            <span className="text-sm font-semibold text-slate-400 whitespace-nowrap tracking-wide uppercase">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApproachPillars() {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Discovery & Strategy",
      desc: "We dissect your business domain before writing a single line of code. Deep technical audits and architecture reviews.",
      accent: "group-hover:text-brand-blue group-hover:bg-brand-blue/10",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Engineering & Build",
      desc: "Agile sprints with daily standups. CI/CD from day one. Every commit tested, reviewed, and benchmarked.",
      accent: "group-hover:text-brand-orange group-hover:bg-brand-orange/10",
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "Deploy & Scale",
      desc: "Zero-downtime deployments. Infrastructure as code. 24/7 monitoring and incident response baked in.",
      accent: "group-hover:text-brand-blue group-hover:bg-brand-blue/10",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="text-brand-blue font-bold text-[11px] tracking-[0.3em] uppercase"
          >
            OUR APPROACH
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mt-4 tracking-tight leading-tight"
          >
            From concept to production
            <br />
            <span className="text-brand-blue">in weeks, not months.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="group relative p-8 md:p-10 rounded-2xl border border-slate-200/60 hover:border-slate-300/80 bg-white hover:shadow-lg transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-6xl font-extrabold text-slate-100/80 select-none pointer-events-none">
                0{i + 1}
              </div>
              <div
                className={`w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 mb-6 transition-all duration-500 ${p.accent}`}
              >
                {p.icon}
              </div>
              <h3 className="text-lg font-extrabold text-[#0F172A] mb-3 tracking-tight">
                {p.title}
              </h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Main Page
// ---------------------------------------------------------------------------

export default function CaseStudiesPageClient() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredStudies = caseStudies.filter((s) => {
    if (activeFilter === "All Projects") return true;
    return s.filterCategories.includes(activeFilter);
  });

  const showFeatured =
    activeFilter === "All Projects" ||
    activeFilter === "Fintech Infrastructure" ||
    activeFilter === "Artificial Intelligence";

  return (
    <div className="bg-white min-h-screen">
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="relative pt-32 pb-14 md:pt-44 md:pb-20 bg-white overflow-hidden">
        <DotGrid />

        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-brand-orange font-bold text-[11px] tracking-[0.3em] uppercase mb-6"
            >
              <span className="w-8 h-[2px] bg-brand-orange rounded-full" />
              PROVEN ARCHITECTURE
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-[82px] font-extrabold text-[#0F172A] mb-6 tracking-tighter leading-[1.05]"
            >
              50+ Projects.
              <br />
              <span className="relative">
                Production-Grade
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-brand-orange/20"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 9C60 9 60 3 150 3C240 3 240 9 300 9"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed"
            >
              We don&apos;t show concepts or MVPs. Every case study here is a
              live, high-concurrency production system handling critical data.
            </motion.p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2.5 mt-14"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeFilter === cat
                    ? "bg-[#0F172A] text-white border-[#0F172A] shadow-lg shadow-midnight/10"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900 hover:shadow-sm"
                }`}
              >
                {activeFilter === cat && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#0F172A] rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Featured Case Study ──────────────────────────── */}
      <AnimatePresence mode="wait">
        {showFeatured && (
          <motion.section
            key="featured"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="pb-16 md:pb-24"
          >
            <div className="container mx-auto px-4 max-w-[1400px]">
              <div className="relative rounded-3xl overflow-hidden gradient-border bg-[#0B0F1A]">
                {/* Background effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-orange/[0.03] via-transparent to-brand-blue/[0.03]" />
                  <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-brand-orange/[0.04] blur-[100px] rounded-full" />
                  <div className="absolute bottom-[10%] right-[20%] w-[250px] h-[250px] bg-brand-blue/[0.04] blur-[80px] rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                  {/* Content */}
                  <div className="p-8 md:p-12 lg:p-16">
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                      <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                        {featuredStudy.label}
                      </span>
                      <span className="inline-flex px-3.5 py-1 rounded-full bg-brand-orange text-white text-[10px] font-bold tracking-wider uppercase shadow-lg shadow-brand-orange/25">
                        {featuredStudy.badge}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight mb-6 whitespace-pre-line">
                      {featuredStudy.title}
                    </h2>

                    <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                      {featuredStudy.description}
                    </p>

                    {/* Metric bar */}
                    <div className="mb-10 max-w-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          FRAUD REDUCTION ACHIEVED
                        </span>
                        <span className="text-sm font-bold text-brand-orange">
                          {featuredStudy.metricValue}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-brand-orange to-brand-orange/70"
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${featuredStudy.metricValue}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-8 mb-8">
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
                          CORE STACK
                        </span>
                        <div className="flex items-center gap-2 mt-1.5">
                          {featuredStudy.stack.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-md bg-white/[0.06] text-[12px] font-semibold text-slate-300 border border-white/[0.06]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
                          TIMELINE
                        </span>
                        <p className="text-sm font-bold text-brand-orange mt-1.5">
                          {featuredStudy.timeline}
                        </p>
                      </div>
                    </div>

                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-orange transition-colors group/link"
                    >
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Illustration */}
                  <div className="hidden lg:block h-[420px] relative">
                    <div className="absolute inset-0 animate-float-slow">
                      <FeaturedVisual />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── Case Studies Grid ────────────────────────────── */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <LayoutGroup>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-7"
              >
                {filteredStudies.map((study, idx) => (
                  <CaseStudyCard key={study.title} study={study} index={idx} />
                ))}
              </motion.div>
            </AnimatePresence>
          </LayoutGroup>

          {filteredStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-24"
            >
              <Layers className="w-12 h-12 text-slate-200 mb-4" />
              <p className="text-slate-400 text-lg font-medium">
                No case studies in this category yet.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Tech Marquee ─────────────────────────────────── */}
      <TechMarquee />

      {/* ── Our Approach ─────────────────────────────────── */}
      <ApproachPillars />

      {/* ── Stats Section ────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.03] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-none">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    display={stat.display}
                  />
                  <span className="text-brand-orange">{stat.suffix}</span>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-3">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────── */}
      <section className="relative py-32 md:py-40 bg-[#0B0F19] overflow-hidden">
        {/* Ambient effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[25%] left-[15%] w-[500px] h-[500px] bg-brand-orange/[0.06] blur-[160px] rounded-full animate-scale-pulse" />
          <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-brand-blue/[0.04] blur-[140px] rounded-full" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* Floating geometric accent */}
        <div className="absolute top-12 right-[12%] w-16 h-16 border border-white/[0.04] rounded-lg rotate-12 animate-float hidden lg:block" />
        <div className="absolute bottom-16 left-[8%] w-10 h-10 border border-white/[0.03] rounded-full animate-float-slow hidden lg:block" />

        <div className="container mx-auto px-4 max-w-[1400px] relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-8">
              <span className="w-6 h-[1px] bg-brand-orange/40 rounded-full" />
              LET&apos;S TALK
              <span className="w-6 h-[1px] bg-brand-orange/40 rounded-full" />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[64px] font-extrabold text-white mb-10 tracking-tighter leading-[1.08]"
          >
            Your project could be
            <br />
            next.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-[#E06612] text-white rounded-full px-14 h-16 text-lg font-bold shadow-[0_8px_40px_rgba(249,115,22,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_12px_56px_rgba(249,115,22,0.5)] group"
              >
                Initiate Technical Scope
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-10 mt-14"
          >
            {[
              { icon: <Calendar className="w-4 h-4" />, text: "NO-COMMITMENT CALL" },
              { icon: <ShieldCheck className="w-4 h-4" />, text: "NDA FIRST" },
              { icon: <Zap className="w-4 h-4" />, text: "4HR RESPONSE" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="text-brand-orange">{item.icon}</span>
                <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
