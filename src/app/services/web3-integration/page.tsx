import type { Metadata } from "next";
import {
  PlugZap,
  Wallet,
  Radio,
  Database,
  ShieldCheck,
  Wrench,
  Blocks,
  Code2,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Web3 Integration Services | Vallorex",
  description:
    "Seamlessly bridge traditional enterprise software with decentralized networks — wallets, chain events, indexing, and secure integrations.",
  openGraph: {
    title: "Web3 Integration Services | Vallorex",
    description:
      "Seamlessly bridge traditional enterprise software with decentralized networks — wallets, chain events, indexing, and secure integrations.",
    url: "https://vallorex.com/services/web3-integration",
    type: "website",
  },
};

function IntegrationHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="w1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#A78BFA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        <rect x="95" y="120" width="150" height="120" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
        <rect x="275" y="90" width="150" height="180" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <path d="M245 180 L275 180" stroke="rgba(255,255,255,0.18)" strokeWidth="3" strokeDasharray="8 10" />
        <circle cx="245" cy="180" r="7" fill="url(#w1)" />
        <circle cx="275" cy="180" r="7" fill="url(#w1)" />
        <path
          d="M120 235 C 160 205, 200 205, 240 235"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M300 125 C 340 95, 380 95, 420 125"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M120 135 C 160 165, 200 165, 240 135"
          stroke="rgba(249,115,22,0.45)"
          strokeWidth="2.5"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default function Web3IntegrationPage() {
  return (
    <ServicePageTemplate
      serviceName="Web3 Integration"
      tagline="Seamlessly bridge traditional enterprise software with decentralized networks"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Web3 Integration", href: "/services/web3-integration" },
      ]}
      heroVariant="card"
      heroIllustration={<IntegrationHeroSvg />}
      overviewParagraphs={[
        "Web3 integration is not just adding a wallet button. It’s engineering reliable connections between on-chain state and off-chain systems — identity, compliance, payments, reporting, and product workflows.",
        "We implement secure, observable integrations that handle chain reorgs, indexing delays, signature flows, and operational realities like rate limits and incident response.",
        "This service is ideal for enterprises adding decentralized capabilities, fintech platforms integrating on-chain rails, or Web3 products that need dependable off-chain infrastructure.",
      ]}
      keyOutcomes={[
        "Secure wallet and signing flows designed for real users",
        "Reliable event ingestion with reorg-aware processing",
        "Indexing and data models optimized for product queries",
        "Operational runbooks for on-chain dependencies",
      ]}
      included={[
        {
          id: "wallet-integration",
          Icon: Wallet,
          title: "Wallet Integration",
          description: "Signing flows, session management, and user-safe transaction UX.",
        },
        {
          id: "chain-event-ingestion",
          Icon: Radio,
          title: "Chain Event Ingestion",
          description: "Reorg-aware listeners, idempotency, and reliable processing.",
        },
        {
          id: "indexing-query-layer",
          Icon: Database,
          title: "Indexing + Query Layer",
          description: "Fast on-chain data access for apps and internal systems.",
        },
        {
          id: "enterprise-integrations",
          Icon: PlugZap,
          title: "Enterprise Integrations",
          description: "Bridge ERP/CRM/payments with on-chain workflows and records.",
        },
        {
          id: "security-controls",
          Icon: ShieldCheck,
          title: "Security Controls",
          description: "Key management, signing policies, and secure operational patterns.",
        },
        {
          id: "operational-tooling",
          Icon: Wrench,
          title: "Operational Tooling",
          description: "Monitoring, alerting, reprocessing tools, and incident playbooks.",
        },
      ]}
      process={[
        { title: "Discovery", description: "Map workflows, chains, and operational constraints." },
        { title: "Integration Design", description: "Design event models, indexing, and security boundaries." },
        { title: "Build & Validate", description: "Implement and test with reorg simulation and load scenarios." },
        { title: "Launch & Operate", description: "Deploy with monitoring, runbooks, and reprocessing tooling." },
      ]}
      whyStats={[
        { value: "99.9%",
          label: "Reliability targets supported via idempotency + replay tooling" },
        { value: "15+",
          label: "Chains and L2s supported across integrations (project dependent)" },
        { value: "<5 min",
          label: "Operational MTTR targets with observability + runbooks" },
      ]}
      testimonial={{
        quote:
          "They built the integration like a payments system: reorg-safe, observable, and easy to operate. It held up under real traffic immediately.",
        attribution: "VP Engineering, Crypto Payments",
      }}
      related={[
        {
          href: "/services/blockchain",
          Icon: Blocks,
          title: "Blockchain Development",
          description: "Smart contracts, DeFi protocols, and token engineering.",
        },
        {
          href: "/services/product-engineering",
          Icon: Code2,
          title: "Product Engineering",
          description: "Full-stack apps that integrate Web3 UX seamlessly.",
        },
        {
          href: "/services/smart-contract-audits",
          Icon: ShieldCheck,
          title: "Smart Contract Audits",
          description: "Security reviews for high-stakes on-chain components.",
        },
      ]}
      ctaHeading="Ready to build with Web3 Integration?"
      ctaSubtext="Bridge on-chain and off-chain systems safely with reorg-aware ingestion, secure signing, and operational tooling."
    />
  );
}

