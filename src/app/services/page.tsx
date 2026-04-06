"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Link2,
  BarChart2,
  Code2,
  Search,
  Cpu,
  Zap,
  ShieldCheck,
  Rocket,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingIconsHero } from "@/components/ui/floating-icons-hero-section";

/* ═══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════ */

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ═══════════════════════════════════════════════════════════════
   HERO SVG ICONS (22 custom tech/AI/blockchain icons)
   ═══════════════════════════════════════════════════════════════ */

const AIBrainIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <circle cx="24" cy="24" r="20" stroke="#3B82F6" strokeWidth="1.5" fill="#3B82F6" fillOpacity="0.15" />
    <circle cx="24" cy="14" r="2.5" fill="#60A5FA" />
    <circle cx="15" cy="30" r="2.5" fill="#60A5FA" />
    <circle cx="33" cy="30" r="2.5" fill="#60A5FA" />
    <circle cx="24" cy="23" r="1.5" fill="#93C5FD" />
    <path d="M24 14L15 30M24 14L33 30M15 30H33M24 14V23M15 30L24 23M33 30L24 23" stroke="#60A5FA" strokeWidth="1.2" opacity="0.5" />
  </svg>
);

const BlockchainIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <rect x="6" y="16" width="20" height="16" rx="8" stroke="#2563EB" strokeWidth="2" fill="#2563EB" fillOpacity="0.1" />
    <rect x="22" y="16" width="20" height="16" rx="8" stroke="#2563EB" strokeWidth="2" fill="#2563EB" fillOpacity="0.1" />
  </svg>
);

const SmartContractIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <rect x="10" y="6" width="28" height="36" rx="3" stroke="#10B981" strokeWidth="2" fill="#10B981" fillOpacity="0.1" />
    <path d="M18 24L22 28L30 20" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 14H32" stroke="#10B981" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
    <path d="M16 36H26" stroke="#10B981" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
  </svg>
);

const ReactAtomIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#06B6D4" strokeWidth="1.5" />
    <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#06B6D4" strokeWidth="1.5" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#06B6D4" strokeWidth="1.5" transform="rotate(-60 24 24)" />
    <circle cx="24" cy="24" r="3" fill="#06B6D4" />
  </svg>
);

const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <path d="M23 6C16 6 14 10 14 14V19H25V21H11C7 21 4 25 4 30C4 35 7 39 11 39H16V33C16 28 19 25 25 25" stroke="#3B82F6" strokeWidth="1.8" />
    <path d="M25 42C32 42 34 38 34 34V29H23V27H37C41 27 44 23 44 18C44 13 41 9 37 9H32V15C32 20 29 23 23 23" stroke="#EAB308" strokeWidth="1.8" />
    <circle cx="19" cy="13" r="2" fill="#3B82F6" />
    <circle cx="29" cy="35" r="2" fill="#EAB308" />
  </svg>
);

const AWSCloudIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <path
      d="M14 34C10 34 6 30.5 6 26C6 21.5 9.5 18 14 18C14.5 13 18.5 9 24 9C28.5 9 32.2 12 33.5 16C37.5 16.5 41 20 41 24.5C41 29.5 37 34 33 34H14Z"
      stroke="#F97316" strokeWidth="1.8" fill="#F97316" fillOpacity="0.1" strokeLinejoin="round"
    />
  </svg>
);

const KubernetesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <circle cx="24" cy="24" r="18" stroke="#326CE5" strokeWidth="1.5" fill="#326CE5" fillOpacity="0.1" />
    <circle cx="24" cy="24" r="4" fill="#326CE5" fillOpacity="0.3" />
    <line x1="24" y1="6" x2="24" y2="18" stroke="#326CE5" strokeWidth="1.5" />
    <line x1="24" y1="30" x2="24" y2="42" stroke="#326CE5" strokeWidth="1.5" />
    <line x1="6" y1="24" x2="18" y2="24" stroke="#326CE5" strokeWidth="1.5" />
    <line x1="30" y1="24" x2="42" y2="24" stroke="#326CE5" strokeWidth="1.5" />
    <line x1="11" y1="11" x2="19" y2="19" stroke="#326CE5" strokeWidth="1.5" />
    <line x1="29" y1="29" x2="37" y2="37" stroke="#326CE5" strokeWidth="1.5" />
    <line x1="37" y1="11" x2="29" y2="19" stroke="#326CE5" strokeWidth="1.5" />
  </svg>
);

const TensorFlowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" stroke="#F97316" strokeWidth="1.8" fill="#F97316" fillOpacity="0.1" />
    <path d="M24 14V34M16 20L32 28M32 20L16 28" stroke="#F97316" strokeWidth="1.2" opacity="0.5" />
  </svg>
);

const EthereumIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <path d="M24 4L8 24L24 32L40 24L24 4Z" stroke="#8B5CF6" strokeWidth="1.8" fill="#8B5CF6" fillOpacity="0.1" />
    <path d="M24 32L8 24L24 44L40 24L24 32Z" stroke="#8B5CF6" strokeWidth="1.8" fill="#8B5CF6" fillOpacity="0.15" />
  </svg>
);

const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <rect x="4" y="22" width="36" height="18" rx="3" stroke="#3B82F6" strokeWidth="1.8" fill="#3B82F6" fillOpacity="0.1" />
    <rect x="8" y="12" width="8" height="10" rx="1" stroke="#3B82F6" strokeWidth="1.2" fill="#3B82F6" fillOpacity="0.15" />
    <rect x="18" y="12" width="8" height="10" rx="1" stroke="#3B82F6" strokeWidth="1.2" fill="#3B82F6" fillOpacity="0.15" />
    <rect x="28" y="12" width="8" height="10" rx="1" stroke="#3B82F6" strokeWidth="1.2" fill="#3B82F6" fillOpacity="0.15" />
  </svg>
);

const NodeJSIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" stroke="#22C55E" strokeWidth="1.8" fill="#22C55E" fillOpacity="0.1" />
    <path d="M18 30V18L24 28L30 18V30" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GraphQLIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <polygon points="24,6 40,15 40,33 24,42 8,33 8,15" stroke="#EC4899" strokeWidth="1.8" fill="#EC4899" fillOpacity="0.1" />
    <circle cx="24" cy="6" r="2.5" fill="#EC4899" />
    <circle cx="40" cy="15" r="2.5" fill="#EC4899" />
    <circle cx="40" cy="33" r="2.5" fill="#EC4899" />
    <circle cx="24" cy="42" r="2.5" fill="#EC4899" />
    <circle cx="8" cy="33" r="2.5" fill="#EC4899" />
    <circle cx="8" cy="15" r="2.5" fill="#EC4899" />
  </svg>
);

const PostgreSQLIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <circle cx="24" cy="20" r="14" stroke="#336791" strokeWidth="1.8" fill="#336791" fillOpacity="0.1" />
    <path d="M18 30Q18 42 24 44Q30 42 30 30" stroke="#336791" strokeWidth="1.8" fill="none" />
    <circle cx="20" cy="18" r="2" fill="#336791" fillOpacity="0.5" />
    <circle cx="28" cy="18" r="2" fill="#336791" fillOpacity="0.5" />
  </svg>
);

const RedisIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <path d="M24 6V42M6 24H42M10 10L38 38M38 10L10 38" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="6" fill="#EF4444" fillOpacity="0.2" />
  </svg>
);

const RustGearIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <circle cx="24" cy="24" r="12" stroke="#F97316" strokeWidth="1.8" fill="#F97316" fillOpacity="0.1" />
    <circle cx="24" cy="24" r="6" stroke="#F97316" strokeWidth="1.5" fill="none" />
    <rect x="22" y="4" width="4" height="8" rx="1" fill="#F97316" fillOpacity="0.4" />
    <rect x="22" y="36" width="4" height="8" rx="1" fill="#F97316" fillOpacity="0.4" />
    <rect x="4" y="22" width="8" height="4" rx="1" fill="#F97316" fillOpacity="0.4" />
    <rect x="36" y="22" width="8" height="4" rx="1" fill="#F97316" fillOpacity="0.4" />
    <rect x="8" y="8" width="4" height="6" rx="1" fill="#F97316" fillOpacity="0.3" transform="rotate(45 10 11)" />
    <rect x="36" y="34" width="4" height="6" rx="1" fill="#F97316" fillOpacity="0.3" transform="rotate(45 38 37)" />
  </svg>
);

const NextJSIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <circle cx="24" cy="24" r="20" stroke="#FFFFFF" strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.05" />
    <path d="M16 34V14L34 34" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M34 14V34" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const ChatBotIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <rect x="8" y="6" width="32" height="28" rx="6" stroke="#8B5CF6" strokeWidth="1.8" fill="#8B5CF6" fillOpacity="0.12" />
    <path d="M18 34L14 42L22 36" stroke="#8B5CF6" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="18" cy="18" r="2.5" fill="#8B5CF6" fillOpacity="0.6" />
    <circle cx="30" cy="18" r="2.5" fill="#8B5CF6" fillOpacity="0.6" />
    <path d="M20 26C22 28 26 28 28 26" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const NeuralNetworkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <circle cx="10" cy="12" r="3" fill="#3B82F6" fillOpacity="0.5" />
    <circle cx="10" cy="24" r="3" fill="#3B82F6" fillOpacity="0.5" />
    <circle cx="10" cy="36" r="3" fill="#3B82F6" fillOpacity="0.5" />
    <circle cx="24" cy="16" r="3" fill="#60A5FA" fillOpacity="0.5" />
    <circle cx="24" cy="32" r="3" fill="#60A5FA" fillOpacity="0.5" />
    <circle cx="38" cy="24" r="3" fill="#93C5FD" fillOpacity="0.6" />
    <path d="M13 12L21 16M13 12L21 32M13 24L21 16M13 24L21 32M13 36L21 16M13 36L21 32M27 16L35 24M27 32L35 24" stroke="#3B82F6" strokeWidth="0.8" opacity="0.4" />
  </svg>
);

const CryptoTokenIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <circle cx="24" cy="24" r="18" stroke="#EAB308" strokeWidth="1.8" fill="#EAB308" fillOpacity="0.12" />
    <circle cx="24" cy="24" r="12" stroke="#EAB308" strokeWidth="1.2" fill="none" opacity="0.4" />
    <path d="M24 14V34M18 20H30M18 28H30" stroke="#EAB308" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const GPUChipIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <rect x="12" y="12" width="24" height="24" rx="3" stroke="#10B981" strokeWidth="1.8" fill="#10B981" fillOpacity="0.12" />
    <rect x="18" y="18" width="12" height="12" rx="1" stroke="#10B981" strokeWidth="1.2" fill="#10B981" fillOpacity="0.2" />
    <path d="M18 12V6M24 12V6M30 12V6M18 36V42M24 36V42M30 36V42M12 18H6M12 24H6M12 30H6M36 18H42M36 24H42M36 30H42" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const DefiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <circle cx="24" cy="24" r="18" stroke="#8B5CF6" strokeWidth="1.5" fill="#8B5CF6" fillOpacity="0.1" />
    <path d="M14 20H34M34 20L28 14M34 20L28 26" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M34 30H14M14 30L20 24M14 30L20 36" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Web3Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <circle cx="24" cy="10" r="4" stroke="#A78BFA" strokeWidth="1.5" fill="#A78BFA" fillOpacity="0.2" />
    <circle cx="10" cy="34" r="4" stroke="#A78BFA" strokeWidth="1.5" fill="#A78BFA" fillOpacity="0.2" />
    <circle cx="38" cy="34" r="4" stroke="#A78BFA" strokeWidth="1.5" fill="#A78BFA" fillOpacity="0.2" />
    <path d="M24 14L10 30M24 14L38 30M10 34H38" stroke="#A78BFA" strokeWidth="1.2" opacity="0.5" />
    <circle cx="24" cy="24" r="2" fill="#A78BFA" fillOpacity="0.4" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════
   HERO ICONS ARRAY (positions + sizes)
   ═══════════════════════════════════════════════════════════════ */

const heroIcons = [
  { id: 1,  icon: AIBrainIcon,        className: "top-[6%] left-[10%] w-14 h-14 opacity-60" },
  { id: 2,  icon: BlockchainIcon,     className: "top-[10%] left-[30%] w-11 h-11 opacity-40" },
  { id: 3,  icon: SmartContractIcon,  className: "top-[4%] left-[60%] w-12 h-12 opacity-45" },
  { id: 4,  icon: ReactAtomIcon,      className: "top-[8%] left-[82%] w-10 h-10 opacity-50" },
  { id: 5,  icon: PythonIcon,         className: "top-[28%] left-[4%] w-12 h-12 opacity-50" },
  { id: 6,  icon: AWSCloudIcon,       className: "top-[52%] left-[6%] w-11 h-11 opacity-40" },
  { id: 7,  icon: KubernetesIcon,     className: "top-[74%] left-[10%] w-10 h-10 opacity-45" },
  { id: 8,  icon: TensorFlowIcon,     className: "top-[25%] left-[88%] w-12 h-12 opacity-50" },
  { id: 9,  icon: EthereumIcon,       className: "top-[50%] left-[90%] w-11 h-11 opacity-45" },
  { id: 10, icon: DockerIcon,         className: "top-[74%] left-[84%] w-12 h-12 opacity-40" },
  { id: 11, icon: NodeJSIcon,         className: "top-[88%] left-[14%] w-11 h-11 opacity-45" },
  { id: 12, icon: GraphQLIcon,        className: "top-[84%] left-[36%] w-10 h-10 opacity-40" },
  { id: 13, icon: PostgreSQLIcon,     className: "top-[90%] left-[58%] w-12 h-12 opacity-35" },
  { id: 14, icon: RedisIcon,          className: "top-[86%] left-[80%] w-10 h-10 opacity-45" },
  { id: 15, icon: RustGearIcon,       className: "top-[40%] left-[14%] w-10 h-10 opacity-35" },
  { id: 16, icon: NextJSIcon,         className: "top-[38%] left-[84%] w-11 h-11 opacity-40" },
  { id: 17, icon: ChatBotIcon,        className: "top-[18%] left-[46%] w-12 h-12 opacity-45" },
  { id: 18, icon: NeuralNetworkIcon,  className: "top-[22%] left-[18%] w-11 h-11 opacity-40" },
  { id: 19, icon: CryptoTokenIcon,    className: "top-[64%] left-[24%] w-10 h-10 opacity-45" },
  { id: 20, icon: GPUChipIcon,        className: "top-[14%] left-[72%] w-11 h-11 opacity-40" },
  { id: 21, icon: DefiIcon,           className: "top-[64%] left-[76%] w-12 h-12 opacity-40" },
  { id: 22, icon: Web3Icon,           className: "top-[80%] left-[52%] w-10 h-10 opacity-35" },
];

/* ═══════════════════════════════════════════════════════════════
   SERVICES DATA
   ═══════════════════════════════════════════════════════════════ */

const services = [
  {
    icon: Brain,
    category: "AI ENGINEERING",
    title: "Intelligent Systems at Scale",
    description:
      "Build production-grade AI systems — from fine-tuned language models to autonomous agents that execute complex workflows at enterprise scale.",
    subServices: [
      "AI Strategy & Roadmap",
      "Custom LLM Development",
      "AI Agents & Automation",
      "ML Ops & Infrastructure",
      "Fine-tuned Domain Models",
    ],
    href: "/services/ai",
  },
  {
    icon: Link2,
    category: "BLOCKCHAIN",
    title: "Decentralized Infrastructure",
    description:
      "Architect secure, audited decentralized systems — smart contracts, DeFi protocols, and token economics designed for real-world adoption.",
    subServices: [
      "Smart Contract Development",
      "DeFi Protocol Design",
      "Layer 2 & Rollups",
      "NFT & Token Engineering",
      "Web3 Wallet Integration",
    ],
    href: "/services/blockchain",
  },
  {
    icon: BarChart2,
    category: "DATA & ANALYTICS",
    title: "Data That Drives Decisions",
    description:
      "Transform raw data into strategic advantage with modern data platforms, real-time dashboards, and predictive models that inform every decision.",
    subServices: [
      "Data Platform Engineering",
      "Business Intelligence",
      "Predictive Analytics",
      "Cloud Data Migration",
      "Real-time KPI Dashboards",
    ],
    href: "/services/data",
  },
  {
    icon: Code2,
    category: "PRODUCT ENGINEERING",
    title: "Full-Stack Product Delivery",
    description:
      "Ship fast, ship right. End-to-end product development from React frontends to scalable APIs, backed by rigorous QA and DevOps.",
    subServices: [
      "Full-Stack Development (React/Next/Node)",
      "Mobile Applications",
      "API & Integrations",
      "QA & Testing",
      "DevOps & CI/CD",
    ],
    href: "/services/product",
  },
];

/* ═══════════════════════════════════════════════════════════════
   PROCESS STEPS DATA
   ═══════════════════════════════════════════════════════════════ */

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We audit your existing stack and define technical scope.",
  },
  {
    icon: Cpu,
    title: "Architecture",
    description: "Senior architects design a solution blueprint.",
  },
  {
    icon: Zap,
    title: "Sprint Build",
    description: "Agile 2-week sprints with daily async updates.",
  },
  {
    icon: ShieldCheck,
    title: "QA & Audit",
    description: "Automated testing + manual security reviews.",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "Deployment, monitoring, and ongoing optimization.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   TECH STACK DATA
   ═══════════════════════════════════════════════════════════════ */

const row1Tech = [
  "Python", "TensorFlow", "PyTorch", "LangChain", "OpenAI API",
  "Hugging Face", "Solidity", "Hardhat", "Ethers.js", "The Graph",
];

const row2Tech = [
  "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL",
  "Redis", "AWS", "Docker", "Kubernetes", "GraphQL",
];

/* ═══════════════════════════════════════════════════════════════
   VENN DIAGRAM COMPONENT (Section 5 visual)
   ═══════════════════════════════════════════════════════════════ */

function VennDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex items-center justify-center py-8">
      <svg viewBox="0 0 500 360" className="w-full max-w-lg">
        {/* Glow rings */}
        <motion.circle
          cx="185" cy="180" r="138"
          fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="4"
          animate={{ strokeOpacity: [0.15, 0.45, 0.15], strokeWidth: [2, 6, 2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="315" cy="180" r="138"
          fill="none" stroke="rgba(139,92,246,0.25)" strokeWidth="4"
          animate={{ strokeOpacity: [0.15, 0.45, 0.15], strokeWidth: [2, 6, 2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* AI Circle */}
        <motion.circle
          cx="185" cy="180" r="130"
          fill="rgba(59,130,246,0.15)"
          stroke="rgba(59,130,246,0.5)" strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{ transformOrigin: "185px 180px" }}
        />
        {/* Blockchain Circle */}
        <motion.circle
          cx="315" cy="180" r="130"
          fill="rgba(139,92,246,0.15)"
          stroke="rgba(139,92,246,0.5)" strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ transformOrigin: "315px 180px" }}
        />

        {/* Circle labels */}
        <motion.text
          x="115" y="185" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.9 } : {}}
          transition={{ delay: 0.6 }}
        >
          AI
        </motion.text>
        <motion.text
          x="385" y="185" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.9 } : {}}
          transition={{ delay: 0.6 }}
        >
          Blockchain
        </motion.text>

        {/* Intersection labels */}
        <motion.text
          x="250" y="155" fill="white" fontSize="11" textAnchor="middle" fontWeight="500"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          Autonomous Agents
        </motion.text>
        <motion.text
          x="250" y="180" fill="white" fontSize="11" textAnchor="middle" fontWeight="500"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          On-Chain Audit Trails
        </motion.text>
        <motion.text
          x="250" y="205" fill="white" fontSize="11" textAnchor="middle" fontWeight="500"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          Trustless Data
        </motion.text>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function ServicesPage() {
  return (
    <>
      {/* ── SECTION 1: FLOATING ICONS HERO ─────────────────────── */}
      <FloatingIconsHero
        className="bg-[#0A0F1E]"
        title="Engineering the Future, Today."
        subtitle="From autonomous AI agents to audited smart contracts — Vallorex delivers elite engineering across the full emerging tech stack."
        ctaText="Get a Free Consultation"
        ctaHref="/contact"
        icons={heroIcons}
      />

      {/* ── SECTION 2: SERVICES GRID ───────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-extrabold text-midnight"
            >
              What We Build
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-muted"
            >
              Four specialized practices. One converged engineering team.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.category}
                variants={fadeUp}
                className="group border border-gray-200 rounded-xl p-8 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="w-8 h-8 text-brand-blue" />
                  <span className="text-sm font-semibold tracking-wider uppercase text-brand-blue">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-midnight mb-3">
                  {service.title}
                </h3>
                <p className="text-muted mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {service.subServices.map((sub) => (
                    <li
                      key={sub}
                      className="flex items-center gap-2.5 text-sm text-body"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-brand-blue font-medium hover:text-brand-blue-hover transition-all duration-300 group-hover:gap-2"
                >
                  Explore{" "}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: PROCESS / HOW WE WORK ───────────────────── */}
      <section className="py-24 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white text-center mb-20"
          >
            Our Engagement Model
          </motion.h2>

          <div className="relative">
            {/* Horizontal connecting dashed line (md+) */}
            <div className="hidden md:block absolute top-[4.25rem] left-[10%] right-[10%] border-t-2 border-dashed border-brand-blue/30" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center"
                >
                  <step.icon className="w-7 h-7 text-brand-blue mb-3" />
                  <div className="w-12 h-12 rounded-full border-2 border-brand-blue bg-[#0A0F1E] flex items-center justify-center text-white font-bold text-lg mb-4 relative z-10">
                    {index + 1}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TECH STACK MARQUEE ──────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <p className="text-center text-sm font-semibold tracking-widest uppercase text-brand-blue">
            Technologies We Master
          </p>
        </div>

        <div className="space-y-6">
          {/* Row 1 — scrolls left→right */}
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-marquee [animation-direction:reverse] will-change-transform">
              {[...row1Tech, ...row1Tech].map((tech, i) => (
                <span
                  key={`r1-${i}`}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 flex-shrink-0 inline-flex items-center gap-2 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right→left */}
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-marquee will-change-transform">
              {[...row2Tech, ...row2Tech].map((tech, i) => (
                <span
                  key={`r2-${i}`}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 flex-shrink-0 inline-flex items-center gap-2 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FLAGSHIP HIGHLIGHT ──────────────────────── */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #1D4ED8 0%, #1E3A5F 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span
                variants={fadeUp}
                className="text-sm font-semibold tracking-widest uppercase text-brand-orange"
              >
                Flagship Service
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-4xl font-black text-white leading-tight"
              >
                AI + Blockchain: The New Stack of Business
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-6 text-lg text-blue-100 leading-relaxed"
              >
                Most agencies pick one. We&apos;ve mastered both. Our converged
                AI-Blockchain stack lets enterprises automate decisions on-chain,
                build trustless data pipelines, and deploy autonomous agents with
                cryptographic auditability.
              </motion.p>
              <motion.ul variants={fadeUp} className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-white">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  Reduce time-to-market by up to 40%
                </li>
                <li className="flex items-center gap-3 text-white">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  Auditable AI decisions via on-chain logging
                </li>
              </motion.ul>
              <motion.div variants={fadeUp} className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold h-auto px-8 py-3"
                >
                  <Link href="/services/ai">See Our Approach →</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right — Venn diagram */}
            <VennDiagram />
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA BANNER ──────────────────────────────── */}
      <section className="py-24 bg-[#0A0F1E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Availability indicator */}
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
              className="text-4xl font-black text-white mb-6"
            >
              Ready to Build Something Extraordinary?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-400 mb-10 leading-relaxed"
            >
              Get a free technical audit from a senior Vallorex engineer. No
              pitch deck. No strings.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold h-auto px-8 py-3"
              >
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent border h-auto px-8 py-3"
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
