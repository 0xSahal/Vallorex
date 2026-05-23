import type { Metadata } from "next";
import {
  Coins,
  Image as ImageIcon,
  Layers,
  Sparkles,
  Store,
  Rocket,
  ShieldCheck,
  Blocks,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "NFT & Token Engineering | Vallorex",
  description:
    "Tokens and NFTs engineered with utility — ERC-20 governance tokens, NFT collections, ERC-1155 assets, metadata pipelines, and marketplace integration.",
  openGraph: {
    title: "NFT & Token Engineering | Vallorex",
    description:
      "Tokens and NFTs engineered with utility — ERC-20 governance tokens, NFT collections, ERC-1155 assets, metadata pipelines, and marketplace integration.",
    url: "https://vallorex.com/services/nft-token-engineering",
    type: "website",
  },
};

function TokenHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="n1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#EAB308" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        <circle cx="210" cy="170" r="86" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" />
        <circle cx="325" cy="210" r="92" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
        <circle cx="210" cy="170" r="10" fill="url(#n1)" />
        <circle cx="325" cy="210" r="10" fill="url(#n1)" />
        <path
          d="M150 245 C 210 225, 260 235, 320 210 C 370 190, 420 185, 470 175"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
        />
        {[
          [165, 120],
          [255, 110],
          [370, 140],
          [175, 275],
          [430, 240],
        ].map(([x, y], i) => (
          <g key={i}>
            <rect x={x - 18} y={y - 18} width="36" height="36" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
            <circle cx={x} cy={y} r="5.5" fill="url(#n1)" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export default function NftTokenEngineeringPage() {
  return (
    <ServicePageTemplate
      serviceName="NFT & Token Engineering"
      tagline="Tokens and NFTs engineered with utility, not just hype"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "NFT & Token Engineering", href: "/services/nft-token-engineering" },
      ]}
      heroVariant="card"
      heroIllustration={<TokenHeroSvg />}
      overviewParagraphs={[
        "We design and deploy token systems with real utility — from ERC‑20 governance tokens to complex ERC‑1155 multi‑asset NFTs. We handle contract development, metadata pipelines, and marketplace integration.",
        "Our work emphasizes safety and sustainability: clear permissions, upgrade strategies, and “rug‑pull resistant” architecture with explicit governance and operational controls.",
        "This service is ideal for teams launching tokens, NFT ecosystems, or on-chain asset systems that must scale reliably and protect users.",
      ]}
      keyOutcomes={[
        "Token and NFT contracts designed for utility and upgrade safety",
        "Metadata pipelines that scale and remain consistent over time",
        "Marketplace and royalty integration that works across ecosystems",
        "Launch plans that reduce security and liquidity risks",
      ]}
      included={[
        {
          id: "erc20-governance-tokens",
          Icon: Coins,
          title: "ERC‑20 Governance Tokens",
          description: "Governance mechanics, vesting, emissions, and distribution design.",
        },
        {
          id: "erc721-nft-collections",
          Icon: ImageIcon,
          title: "ERC‑721 NFT Collections",
          description: "Minting, allowlists, supply controls, and robust metadata patterns.",
        },
        {
          id: "erc1155-multi-asset",
          Icon: Layers,
          title: "ERC‑1155 Multi‑Asset Tokens",
          description: "Multi-asset systems for games, memberships, and complex inventories.",
        },
        {
          id: "dynamic-nft-metadata",
          Icon: Sparkles,
          title: "Dynamic NFT Metadata",
          description: "Upgradeable metadata and on-chain/off-chain hybrid strategies.",
        },
        {
          id: "royalty-marketplace-integration",
          Icon: Store,
          title: "Royalty & Marketplace Integration",
          description: "Royalties, listing flows, and marketplace indexing integration.",
        },
        {
          id: "token-launch-liquidity",
          Icon: Rocket,
          title: "Token Launch & Liquidity Setup",
          description: "Launch mechanics, liquidity planning, and operational guardrails.",
        },
      ]}
      process={[
        { title: "Token Design", description: "Define utility, governance, and lifecycle mechanics." },
        { title: "Smart Contract Development", description: "Implement contracts with tests and security discipline." },
        { title: "Metadata Pipeline", description: "Build scalable metadata infrastructure and validation." },
        { title: "Marketplace Listing", description: "Integrate indexing, listings, royalties, and launch readiness." },
      ]}
      whyStats={[
        { value: "50+",
          label: "Token Projects" },
        { value: "10M+",
          label: "NFTs Minted" },
        { value: "No rug-pull",
          label: "Architecture Patterns" },
      ]}
      testimonial={{
        quote:
          "They pushed us toward utility and safety — not hype. The metadata and marketplace integration scaled smoothly from day one.",
        attribution: "Founder, NFT Platform",
      }}
      related={[
        {
          href: "/services/smart-contract-development",
          Icon: Blocks,
          title: "Smart Contract Development",
          description: "Gas-optimized contracts with testing, upgrades, and deployment playbooks.",
        },
        {
          href: "/services/smart-contract-audits",
          Icon: ShieldCheck,
          title: "Smart Contract Audits",
          description: "High-stakes security reviews and retest support before launch.",
        },
        {
          href: "/services/web3-integration",
          Icon: ShieldCheck,
          title: "Web3 Integration",
          description: "Wallets, events, and on-chain data integrated into real products.",
        },
      ]}
      ctaHeading="Ready to build with NFT & Token Engineering?"
      ctaSubtext="Launch token systems with real utility, scalable metadata, and production-grade integrations."
    />
  );
}

