import type { Metadata } from "next";
import {
  Layers,
  FileText,
  DraftingCompass,
  ShieldCheck,
  Rocket,
  Coins,
  Blocks,
  BarChart3,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Blockchain Development Services | Vallorex",
  description:
    "Decentralized infrastructure built for the real world — smart contracts, DeFi protocol design, rollups, and token engineering.",
  openGraph: {
    title: "Blockchain Development Services | Vallorex",
    description:
      "Decentralized infrastructure built for the real world — smart contracts, DeFi protocol design, rollups, and token engineering.",
    url: "https://vallorex.com/services/blockchain",
    type: "website",
  },
};

function ChainGridSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="b1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#2563EB" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.9">
        {Array.from({ length: 18 }).map((_, i) => {
          const x = 85 + (i % 6) * 70;
          const y = 70 + Math.floor(i / 6) * 75;
          return (
            <g key={i}>
              <path
                d={`M${x} ${y + 22} L${x + 22} ${y} L${x + 44} ${y + 22} L${x + 22} ${y + 44} Z`}
                fill="rgba(255,255,255,0.05)"
                stroke="rgba(255,255,255,0.12)"
              />
              <circle cx={x + 22} cy={y + 22} r="3.5" fill="url(#b1)" />
            </g>
          );
        })}
      </g>
      <path
        d="M120 115 C 170 85, 215 90, 255 120 C 295 150, 345 150, 400 120"
        stroke="rgba(249,115,22,0.6)"
        strokeWidth="2.5"
        fill="none"
        strokeDasharray="7 10"
      />
      <path
        d="M130 250 C 190 220, 235 230, 270 255 C 305 280, 360 285, 410 255"
        stroke="rgba(37,99,235,0.35)"
        strokeWidth="2.5"
        fill="none"
        strokeDasharray="7 10"
      />
    </svg>
  );
}

export default function BlockchainPage() {
  return (
    <ServicePageTemplate
      serviceName="Blockchain"
      tagline="Decentralized infrastructure built for the real world"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Blockchain", href: "/services/blockchain" },
      ]}
      heroIllustration={<ChainGridSvg />}
      overviewParagraphs={[
        "Blockchain products succeed when engineering, incentives, and security are designed together. We build on-chain systems that can survive adversarial environments while still shipping fast enough to win the market.",
        "From protocol design to production deployments, we focus on auditable code, clear threat models, and realistic performance constraints (latency, throughput, and cost).",
        "This service fits teams building DeFi, tokenized systems, enterprise Web3 extensions, or L2 scaling strategies that need senior engineering depth.",
      ]}
      keyOutcomes={[
        "Audited smart contracts with clear security assumptions",
        "Protocol designs aligned to incentives and real-world constraints",
        "Reliable deployments with monitoring, runbooks, and upgrade paths",
        "Scalable architecture for growth in users, volume, and chain load",
      ]}
      included={[
        {
          id: "smart-contract-development",
          href: "/services/smart-contract-development",
          Icon: Layers,
          title: "Smart Contract Development",
          description: "Gas-optimized, upgrade-aware contracts with strong testing discipline.",
        },
        {
          id: "defi-protocol-design",
          href: "/services/defi-protocol-design",
          Icon: BarChart3,
          title: "DeFi Protocol Design",
          description: "AMMs, lending, staking, and incentives engineered for resilience.",
        },
        {
          id: "layer-2-rollups",
          href: "/services/layer2-rollups",
          Icon: Blocks,
          title: "Layer 2 & Rollups",
          description: "Scaling strategy, integration, and performance validation for high TPS.",
        },
        {
          id: "nft-token-engineering",
          href: "/services/nft-token-engineering",
          Icon: Coins,
          title: "NFT & Token Engineering",
          description: "ERC-20/721/1155 design, distribution mechanics, and integrations.",
        },
        {
          id: "whitepaper-review",
          Icon: FileText,
          title: "Whitepaper Review",
          description: "Translate ideas into implementable specs with risk and feasibility notes.",
        },
        {
          id: "mainnet-ops",
          Icon: ShieldCheck,
          title: "Mainnet Operations",
          description: "Deployment playbooks, monitoring, incident response, and governance tooling.",
        },
      ]}
      process={[
        { title: "Whitepaper Review", description: "Align the spec, threat model, and success criteria." },
        { title: "Protocol Design", description: "Engineer the architecture, incentives, and upgrade plan." },
        { title: "Audit & Testing", description: "Property tests, fuzzing, and review cycles before launch." },
        { title: "Mainnet Launch", description: "Staged rollout with monitoring, guardrails, and runbooks." },
      ]}
      whyStats={[
        { value: "40+",
          label: "On-chain deployments (DeFi, tokens, infra, integrations)" },
        { value: "0 criticals",
          label: "Critical issues shipped in audited releases (client-reported)" },
        { value: "99.9%",
          label: "Uptime targets supported via runbooks + monitoring" },
      ]}
      testimonial={{
        quote:
          "The team treated our protocol like a real financial system — rigorous testing, realistic assumptions, and a clean path to mainnet upgrades.",
        attribution: "Founder, DeFi Protocol",
      }}
      related={[
        {
          href: "/services/smart-contract-audits",
          Icon: ShieldCheck,
          title: "Smart Contract Audits",
          description: "High-stakes review with verification, fuzzing, and remediation support.",
        },
        {
          href: "/services/web3-integration",
          Icon: DraftingCompass,
          title: "Web3 Integration",
          description: "Bridge enterprise systems with wallets, indexing, and chain events.",
        },
        {
          href: "/services/blockchain-engineering",
          Icon: Rocket,
          title: "Blockchain Engineering",
          description: "Deep L1/L2 infrastructure, consensus, and high-throughput systems.",
        },
      ]}
      ctaHeading="Ready to build with Blockchain?"
      ctaSubtext="Ship secure, real-world decentralized systems with senior-led architecture and production-grade delivery."
    />
  );
}

