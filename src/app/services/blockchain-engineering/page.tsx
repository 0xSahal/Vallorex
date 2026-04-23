import type { Metadata } from "next";
import {
  Blocks,
  Cpu,
  Network,
  ShieldCheck,
  Rocket,
  Settings,
  Gauge,
  GitBranch,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Blockchain Engineering (L1/L2 Infrastructure) | Vallorex",
  description:
    "L1/L2 development, custom consensus mechanisms, and high-throughput infrastructure — engineered for performance and security.",
  openGraph: {
    title: "Blockchain Engineering (L1/L2 Infrastructure) | Vallorex",
    description:
      "L1/L2 development, custom consensus mechanisms, and high-throughput infrastructure — engineered for performance and security.",
    url: "https://vallorex.com/services/blockchain-engineering",
    type: "website",
  },
};

function InfraHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="i1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        {[
          [120, 110],
          [260, 80],
          [400, 110],
          [140, 250],
          [260, 280],
          [380, 250],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
            <circle cx={x} cy={y} r="6" fill="url(#i1)" />
          </g>
        ))}
        {[
          [120, 110, 260, 80],
          [260, 80, 400, 110],
          [120, 110, 140, 250],
          [260, 80, 260, 280],
          [400, 110, 380, 250],
          [140, 250, 260, 280],
          [260, 280, 380, 250],
          [140, 250, 380, 250],
        ].map(([x1, y1, x2, y2], i) => (
          <path
            key={i}
            d={`M${x1} ${y1} L${x2} ${y2}`}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="2"
            strokeDasharray="7 10"
          />
        ))}
        <path
          d="M115 170 C 190 120, 260 120, 335 170"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default function BlockchainEngineeringPage() {
  return (
    <ServicePageTemplate
      serviceName="Blockchain Engineering"
      tagline="L1/L2 development, custom consensus mechanisms, and high-throughput infrastructure"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Blockchain Engineering", href: "/services/blockchain-engineering" },
      ]}
      heroVariant="card"
      heroIllustration={<InfraHeroSvg />}
      overviewParagraphs={[
        "Blockchain Engineering is infrastructure work: node software, consensus, networking, execution, and scaling systems that must be correct under adversarial conditions and unpredictable load.",
        "We build and harden L1/L2 components with performance benchmarks, fault modeling, and operational tooling. The goal is to ship high-throughput systems that remain stable when the market gets volatile.",
        "This service is built for protocol teams, L2 builders, and infrastructure-heavy Web3 products that need deep systems engineering beyond typical dApp development.",
      ]}
      keyOutcomes={[
        "Higher throughput and lower latency via profiling and architecture changes",
        "Safer upgrades with compatibility planning and rollout playbooks",
        "Reliable nodes and indexers with observability and incident runbooks",
        "Security-focused design for adversarial, distributed environments",
      ]}
      included={[
        {
          id: "l1-l2-development",
          Icon: Blocks,
          title: "L1/L2 Development",
          description: "Core protocol work across execution, mempool, state, and upgrades.",
        },
        {
          id: "consensus-mechanisms",
          Icon: Network,
          title: "Custom Consensus Mechanisms",
          description: "Modeling, implementation support, and correctness-oriented design reviews.",
        },
        {
          id: "performance-benchmarking",
          Icon: Gauge,
          title: "Performance Benchmarking",
          description: "Load tests, profiling, and optimization for high-throughput operation.",
        },
        {
          id: "node-infrastructure",
          Icon: Cpu,
          title: "Node & Indexer Infrastructure",
          description: "Reliable nodes, indexers, and data services with clear SLOs.",
        },
        {
          id: "upgrade-governance",
          Icon: GitBranch,
          title: "Upgrade & Governance Tooling",
          description: "Safe upgrade patterns, rollout plans, and governance-aware implementation.",
        },
        {
          id: "security-hardening",
          Icon: ShieldCheck,
          title: "Security Hardening",
          description: "Threat modeling, key management, and adversarial scenario reviews.",
        },
      ]}
      process={[
        { title: "Discovery", description: "Assess architecture, bottlenecks, and reliability gaps." },
        { title: "Systems Design", description: "Define changes with benchmarks and failure modes." },
        { title: "Implementation", description: "Ship improvements with test coverage and profiling loops." },
        { title: "Launch & Operations", description: "Runbooks, monitoring, and staged rollouts to production." },
      ]}
      whyStats={[
        { value: "10x",
          label: "Throughput improvements targeted via profiling + batching (project dependent)" },
        { value: "24/7",
          label: "Operational readiness supported with runbooks and alerting" },
        { value: "0-downtime",
          label: "Upgrade patterns designed for staged rollouts" },
      ]}
      testimonial={{
        quote:
          "They approached our L2 like a production distributed system. Benchmarks were real, failure modes were explicit, and the rollout plan was solid.",
        attribution: "Core Engineer, L2 Team",
      }}
      related={[
        {
          href: "/services/blockchain",
          Icon: Rocket,
          title: "Blockchain Development",
          description: "Smart contracts, DeFi protocols, and token engineering for products.",
        },
        {
          href: "/services/smart-contract-audits",
          Icon: ShieldCheck,
          title: "Smart Contract Audits",
          description: "High-stakes review and remediation for on-chain systems.",
        },
        {
          href: "/services/web3-integration",
          Icon: Settings,
          title: "Web3 Integration",
          description: "Enterprise integrations for wallets, events, and on-chain data.",
        },
      ]}
      ctaHeading="Ready to build with Blockchain Engineering?"
      ctaSubtext="Get systems-level expertise for L1/L2 infrastructure, performance, and production operations."
    />
  );
}

