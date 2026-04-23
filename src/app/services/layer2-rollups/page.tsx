import type { Metadata } from "next";
import {
  Layers,
  Gauge,
  Blocks,
  Link2,
  Cpu,
  Wrench,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Layer 2 & Rollups | Vallorex",
  description:
    "Scale Ethereum without sacrificing security — optimistic and ZK rollups, custom stacks, bridges, sequencers/provers, and developer tooling.",
  openGraph: {
    title: "Layer 2 & Rollups | Vallorex",
    description:
      "Scale Ethereum without sacrificing security — optimistic and ZK rollups, custom stacks, bridges, sequencers/provers, and developer tooling.",
    url: "https://vallorex.com/services/layer2-rollups",
    type: "website",
  },
};

function RollupHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="l1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect
              x={120 + i * 25}
              y={120 + i * 25}
              width="260"
              height="140"
              rx="22"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.14)"
            />
          </g>
        ))}
        <path
          d="M150 260 C 220 225, 280 235, 355 200 C 395 182, 430 175, 465 165"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
        />
        {[
          [160, 165],
          [260, 150],
          [360, 185],
          [205, 240],
          [315, 240],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="11" fill="rgba(255,255,255,0.06)" />
            <circle cx={x} cy={y} r="5.5" fill="url(#l1)" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export default function Layer2RollupsPage() {
  return (
    <ServicePageTemplate
      serviceName="Layer 2 & Rollups"
      tagline="Scale Ethereum without sacrificing decentralization or security"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Layer 2 & Rollups", href: "/services/layer2-rollups" },
      ]}
      heroVariant="card"
      heroIllustration={<RollupHeroSvg />}
      overviewParagraphs={[
        "We architect and deploy Layer 2 solutions including Optimistic Rollups, ZK Rollups, and custom rollup stacks. The goal is simple: move from L1 congestion to L2 throughput without compromising trust assumptions.",
        "We design bridges, data availability, sequencing/proving infrastructure, and developer tooling with production operations in mind — monitoring, incident response, and staged rollouts.",
        "This service is ideal for teams scaling high-volume products, building custom L2s, or integrating rollups into existing ecosystems.",
      ]}
      keyOutcomes={[
        "Higher throughput with clear security and trust assumptions",
        "Bridge and messaging design that is reorg-aware and resilient",
        "Sequencer/prover infrastructure designed for reliability",
        "Developer tooling that speeds adoption and reduces integration risk",
      ]}
      included={[
        {
          id: "optimistic-rollup-deployment",
          Icon: Layers,
          title: "Optimistic Rollup Deployment",
          description: "Deploy and harden optimistic stacks with monitoring and upgrade plans.",
        },
        {
          id: "zk-rollup-architecture",
          Icon: ShieldCheck,
          title: "ZK Rollup Architecture",
          description: "Design proving systems and constraints for security and performance.",
        },
        {
          id: "custom-rollup-stack",
          Icon: Blocks,
          title: "Custom Rollup Stack",
          description: "Tailor execution, DA, and settlement components to your needs.",
        },
        {
          id: "cross-chain-bridge-design",
          Icon: Link2,
          title: "Cross-Chain Bridge Design",
          description: "Bridge security, message validation, and operational safeguards.",
        },
        {
          id: "sequencer-prover-setup",
          Icon: Cpu,
          title: "Sequencer & Prover Setup",
          description: "Reliability engineering for critical infrastructure components.",
        },
        {
          id: "l2-developer-tooling",
          Icon: Wrench,
          title: "L2 Developer Tooling",
          description: "SDKs, docs, templates, and integration support for ecosystem growth.",
        },
      ]}
      process={[
        { title: "Scalability Assessment", description: "Analyze bottlenecks, constraints, and trust assumptions." },
        { title: "L2 Architecture", description: "Define rollup stack, DA, settlement, and performance targets." },
        { title: "Bridge Design", description: "Design secure messaging and asset transfer with guardrails." },
        { title: "Testnet", description: "Staged deployments, load tests, and incident simulations." },
        { title: "Mainnet", description: "Launch with monitoring, runbooks, and upgrade plans." },
      ]}
      whyStats={[
        { value: "100x",
          label: "Throughput Improvement" },
        { value: "3",
          label: "Custom L2s Deployed" },
        { value: "ZK + Optimistic",
          label: "Delivery Expertise" },
      ]}
      testimonial={{
        quote:
          "They were explicit about trust assumptions and failure modes — and the rollout plan made mainnet launch operationally safe.",
        attribution: "Core Engineer, L2 Team",
      }}
      related={[
        {
          href: "/services/blockchain-engineering",
          Icon: Gauge,
          title: "Blockchain Engineering",
          description: "Systems-level L1/L2 infrastructure and performance engineering.",
        },
        {
          href: "/services/defi-protocol-design",
          Icon: Rocket,
          title: "DeFi Protocol Design",
          description: "Mechanism design and protocol delivery engineered for security.",
        },
        {
          href: "/services/smart-contract-audits",
          Icon: ShieldCheck,
          title: "Smart Contract Audits",
          description: "High-stakes review and remediation for on-chain components.",
        },
      ]}
      ctaHeading="Ready to build with Layer 2 & Rollups?"
      ctaSubtext="Scale with rollup architecture, secure bridges, and production-ready infrastructure."
    />
  );
}

