import type { Metadata } from "next";
import {
  Code2,
  Link2,
  ShieldCheck,
  RefreshCw,
  KeyRound,
  Zap,
  Rocket,
  Blocks,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Smart Contract Development | Vallorex",
  description:
    "Gas-optimized, audited smart contracts for EVM and non-EVM chains — delivered with full test suites and production deployment support.",
  openGraph: {
    title: "Smart Contract Development | Vallorex",
    description:
      "Gas-optimized, audited smart contracts for EVM and non-EVM chains — delivered with full test suites and production deployment support.",
    url: "https://vallorex.com/services/smart-contract-development",
    type: "website",
  },
};

function ContractHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="c1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        <rect x="120" y="70" width="200" height="240" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
        {[
          [145, 105, 150],
          [145, 135, 120],
          [145, 165, 160],
          [145, 195, 110],
          [145, 225, 150],
        ].map(([x, y, w], i) => (
          <rect key={i} x={x} y={y} width={w} height="14" rx="7" fill="rgba(255,255,255,0.06)" />
        ))}
        <rect x="350" y="105" width="60" height="60" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <rect x="350" y="200" width="60" height="60" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <path d="M320 135 L350 135" stroke="rgba(255,255,255,0.18)" strokeWidth="3" strokeDasharray="8 10" />
        <path d="M320 230 L350 230" stroke="rgba(255,255,255,0.18)" strokeWidth="3" strokeDasharray="8 10" />
        <circle cx="320" cy="135" r="7" fill="url(#c1)" />
        <circle cx="320" cy="230" r="7" fill="url(#c1)" />
        <circle cx="350" cy="135" r="7" fill="url(#c1)" />
        <circle cx="350" cy="230" r="7" fill="url(#c1)" />
        <path
          d="M95 320 C 170 285, 240 295, 315 255 C 380 220, 420 215, 470 205"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
        />
      </g>
    </svg>
  );
}

function ChainsRow() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
      <p className="text-xs font-bold tracking-widest uppercase text-midnight/70">Chains We Support</p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {["Ethereum", "Polygon", "Solana", "Avalanche", "BNB Chain", "Arbitrum"].map((c) => (
          <span
            key={c}
            className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-midnight"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SmartContractDevelopmentPage() {
  return (
    <ServicePageTemplate
      serviceName="Smart Contract Development"
      tagline="Gas-optimized, audited smart contracts that do exactly what they promise"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Smart Contract Development", href: "/services/smart-contract-development" },
      ]}
      heroVariant="card"
      heroIllustration={<ContractHeroSvg />}
      overviewParagraphs={[
        "We write production-ready Solidity and Rust contracts for EVM and non‑EVM chains. Every contract is engineered for gas efficiency, correctness, and upgrade safety — and delivered with a full, reproducible test suite.",
        "From tokens to complex protocol logic, we focus on measurable security properties: strict access controls, explicit invariants, and deployment processes that minimize risk.",
        "This service is built for teams shipping contracts where user funds, governance, and protocol integrity are on the line.",
      ]}
      midCallout={<ChainsRow />}
      keyOutcomes={[
        "Gas-optimized contracts with strong test discipline",
        "Upgradeable patterns with safe storage layout and rollout plans",
        "Security-first design: access control, invariants, and threat modeling",
        "Deployment playbooks for testnet and mainnet releases",
      ]}
      included={[
        {
          id: "token-standards",
          Icon: Blocks,
          title: "ERC‑20 / ERC‑721 / ERC‑1155 Tokens",
          description: "Standard and custom token implementations with safety and utility.",
        },
        {
          id: "custom-protocol-logic",
          Icon: Code2,
          title: "Custom Protocol Logic",
          description: "Core mechanics, state machines, and economic flows engineered for correctness.",
        },
        {
          id: "proxy-upgradeable-contracts",
          Icon: RefreshCw,
          title: "Proxy & Upgradeable Contracts",
          description: "Upgrade patterns, storage layout safety, and governance-aware rollouts.",
        },
        {
          id: "multisig-access-control",
          Icon: KeyRound,
          title: "Multi‑Sig & Access Control",
          description: "Role design, privileged flows, timelocks, and emergency controls.",
        },
        {
          id: "gas-optimization",
          Icon: Zap,
          title: "Gas Optimization",
          description: "Profiling and optimizations without compromising readability or safety.",
        },
        {
          id: "deployment-support",
          Icon: Rocket,
          title: "Testnet & Mainnet Deployment",
          description: "Release planning, scripts, verification, and monitoring for launch.",
        },
      ]}
      process={[
        { title: "Spec Review", description: "Clarify assumptions, invariants, and threat model." },
        { title: "Contract Architecture", description: "Design upgrade, access, and economic mechanisms." },
        { title: "Development & Testing", description: "Implement with unit tests, property tests, and coverage." },
        { title: "Audit", description: "Internal review + optional external audit coordination." },
        { title: "Deployment", description: "Staged rollout with verification, monitoring, and runbooks." },
      ]}
      whyStats={[
        { value: "$500M+",
          label: "TVL Secured" },
        { value: "0",
          label: "Critical Bugs in Production" },
        { value: "10+",
          label: "Chains Supported" },
      ]}
      testimonial={{
        quote:
          "Their contracts were clean, test-heavy, and upgrade-safe. The deployment playbook made mainnet launch predictable and low-stress.",
        attribution: "CTO, Web3 Infrastructure",
      }}
      related={[
        {
          href: "/services/smart-contract-audits",
          Icon: ShieldCheck,
          title: "Smart Contract Audits",
          description: "High-stakes security review, verification techniques, and retest support.",
        },
        {
          href: "/services/defi-protocol-design",
          Icon: Link2,
          title: "DeFi Protocol Design",
          description: "Liquidity, tokenomics, and protocol mechanics engineered end-to-end.",
        },
        {
          href: "/services/blockchain-engineering",
          Icon: Blocks,
          title: "Blockchain Engineering",
          description: "Systems-level L1/L2 infrastructure and throughput engineering.",
        },
      ]}
      ctaHeading="Ready to build with Smart Contract Development?"
      ctaSubtext="Ship gas-optimized contracts with strong testing, upgrade safety, and production-ready deployment support."
    />
  );
}

