import type { Metadata } from "next";
import {
  BarChart3,
  Droplets,
  Landmark,
  Layers,
  Coins,
  Users,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "DeFi Protocol Design | Vallorex",
  description:
    "DeFi protocols engineered for liquidity, security, and longevity — AMMs, lending, yield systems, tokenomics, governance, and implementation.",
  openGraph: {
    title: "DeFi Protocol Design | Vallorex",
    description:
      "DeFi protocols engineered for liquidity, security, and longevity — AMMs, lending, yield systems, tokenomics, governance, and implementation.",
    url: "https://vallorex.com/services/defi-protocol-design",
    type: "website",
  },
};

function DefiHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="d1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        <path
          d="M120 130 C 165 95, 220 95, 260 130 C 295 160, 330 160, 365 130 C 395 105, 430 105, 460 130"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M120 235 C 165 270, 220 270, 260 235 C 295 205, 330 205, 365 235 C 395 260, 430 260, 460 235"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="3"
          fill="none"
        />
        {[
          [130, 150],
          [260, 110],
          [390, 150],
          [130, 215],
          [260, 255],
          [390, 215],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="12" fill="rgba(255,255,255,0.06)" />
            <circle cx={x} cy={y} r="6" fill="url(#d1)" />
          </g>
        ))}
        <path
          d="M95 310 C 170 280, 230 290, 310 250 C 365 222, 415 215, 470 205"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="7 10"
        />
      </g>
    </svg>
  );
}

export default function DefiProtocolDesignPage() {
  return (
    <ServicePageTemplate
      serviceName="DeFi Protocol Design"
      tagline="DeFi protocols engineered for liquidity, security, and longevity"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "DeFi Protocol Design", href: "/services/defi-protocol-design" },
      ]}
      heroVariant="card"
      heroIllustration={<DefiHeroSvg />}
      overviewParagraphs={[
        "We design and build DEXs, lending/borrowing protocols, yield optimizers, and liquidity management systems with security and mechanism design baked in from the start.",
        "Our approach connects economic modeling, tokenomics, and implementation so you don’t ship incentives that break under pressure. We engineer for adversarial environments, volatile markets, and long-term protocol sustainability.",
        "This service is ideal for teams launching new DeFi products or upgrading existing protocols with better resilience and scalability.",
      ]}
      keyOutcomes={[
        "Protocol mechanics aligned to incentives and real-world market behavior",
        "Secure implementations with strong testing and audit readiness",
        "Economic modeling that reduces insolvency and exploit risks",
        "Launch and upgrade plans that are governance-aware",
      ]}
      included={[
        {
          id: "dex-amm-design",
          Icon: Droplets,
          title: "DEX & AMM Design",
          description: "Pool mechanics, routing, fees, and liquidity incentives engineered for depth.",
        },
        {
          id: "lending-borrowing",
          Icon: Landmark,
          title: "Lending & Borrowing Protocols",
          description: "Collateral, liquidation, rates, and risk controls designed for safety.",
        },
        {
          id: "yield-aggregators",
          Icon: BarChart3,
          title: "Yield Aggregators",
          description: "Vault strategies, compounding logic, and risk-managed allocation.",
        },
        {
          id: "liquidity-pool-architecture",
          Icon: Layers,
          title: "Liquidity Pool Architecture",
          description: "Liquidity management with rebalancing and MEV-aware design choices.",
        },
        {
          id: "tokenomics-design",
          Icon: Coins,
          title: "Tokenomics Design",
          description: "Emissions, utility, and distribution aligned with long-term sustainability.",
        },
        {
          id: "governance-mechanism",
          Icon: Users,
          title: "Governance Mechanism",
          description: "Voting, timelocks, and upgrade controls designed for operational safety.",
        },
      ]}
      process={[
        { title: "Protocol Whitepaper", description: "Align spec, assumptions, and threat model." },
        { title: "Economic Modeling", description: "Simulate incentives, risk, and edge cases under stress." },
        { title: "Smart Contract Build", description: "Implement with tests, invariants, and upgrade patterns." },
        { title: "Security Audit", description: "Internal review + audit readiness and remediation cycles." },
        { title: "Launch", description: "Staged rollout with monitoring, guardrails, and runbooks." },
      ]}
      whyStats={[
        { value: "15+",
          label: "DeFi Protocols Launched" },
        { value: "$2B+",
          label: "Protocol Volume" },
        { value: "Battle-tested",
          label: "Security Discipline" },
      ]}
      testimonial={{
        quote:
          "They didn’t just implement our ideas — they stress-tested the economics, found failure modes, and helped us ship a protocol that held up in volatile markets.",
        attribution: "Founder, DeFi Protocol",
      }}
      related={[
        {
          href: "/services/smart-contract-development",
          Icon: FileText,
          title: "Smart Contract Development",
          description: "Gas-optimized contract delivery with upgrade safety and testing.",
        },
        {
          href: "/services/smart-contract-audits",
          Icon: ShieldCheck,
          title: "Smart Contract Audits",
          description: "High-stakes security review with retest and verification support.",
        },
        {
          href: "/services/layer2-rollups",
          Icon: Layers,
          title: "Layer 2 & Rollups",
          description: "Scale Ethereum with rollup architecture, bridges, and tooling.",
        },
      ]}
      ctaHeading="Ready to build with DeFi Protocol Design?"
      ctaSubtext="Launch DeFi systems engineered for liquidity, security, and long-term sustainability."
    />
  );
}

