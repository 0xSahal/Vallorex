import type { Metadata } from "next";
import {
  ShieldAlert,
  FileSearch,
  Bug,
  ScanEye,
  FlaskConical,
  CheckCircle2,
  Blocks,
  Lock,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Smart Contract Audits | Vallorex",
  description:
    "Rigorous security audits with formal verification to protect millions in TVL — threat modeling, fuzzing, verification, and remediation support.",
  openGraph: {
    title: "Smart Contract Audits | Vallorex",
    description:
      "Rigorous security audits with formal verification to protect millions in TVL — threat modeling, fuzzing, verification, and remediation support.",
    url: "https://vallorex.com/services/smart-contract-audits",
    type: "website",
  },
};

function AuditHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="s1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#EF4444" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        <path
          d="M260 70 L375 120 V210 C375 260 330 300 260 320 C190 300 145 260 145 210 V120 Z"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="2"
        />
        <path
          d="M205 190 L240 225 L320 145"
          stroke="url(#s1)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M150 255 C 195 230, 230 235, 260 250 C 295 268, 330 268, 370 245"
          stroke="rgba(239,68,68,0.28)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="7 10"
        />
      </g>
    </svg>
  );
}

export default function SmartContractAuditsPage() {
  return (
    <ServicePageTemplate
      serviceName="Smart Contract Audits"
      tagline="Rigorous security audits with formal verification to protect millions in TVL"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Smart Contract Audits", href: "/services/smart-contract-audits" },
      ]}
      heroVariant="card"
      heroIllustration={<AuditHeroSvg />}
      overviewParagraphs={[
        "Smart contract failures are irreversible. When value is on the line, audits must be rigorous, reproducible, and focused on real exploit paths — not just lint output.",
        "We combine threat modeling, manual review, fuzzing, and verification techniques to identify vulnerabilities, validate assumptions, and reduce protocol risk before mainnet exposure.",
        "This service is for teams shipping DeFi, asset custody, bridges, token contracts, and infrastructure where a single bug can result in catastrophic loss.",
      ]}
      keyOutcomes={[
        "Exploit paths identified and prioritized by real-world impact",
        "Actionable remediation guidance with retest support",
        "Clear assumptions and invariants documented for future upgrades",
        "A defensible security posture for investors and users",
      ]}
      included={[
        {
          id: "threat-modeling",
          Icon: ShieldAlert,
          title: "Threat Modeling",
          description: "Define attacker models, trust assumptions, and critical invariants.",
        },
        {
          id: "manual-review",
          Icon: FileSearch,
          title: "Manual Code Review",
          description: "Line-by-line review for logic errors, edge cases, and unsafe patterns.",
        },
        {
          id: "fuzzing-property-tests",
          Icon: FlaskConical,
          title: "Fuzzing & Property Tests",
          description: "Find unexpected states, broken invariants, and economic exploits.",
        },
        {
          id: "formal-verification",
          Icon: ScanEye,
          title: "Formal Verification (as needed)",
          description: "Prove key properties for critical flows with verification methods.",
        },
        {
          id: "issue-triage",
          Icon: Bug,
          title: "Issue Triage & Severity",
          description: "High-stakes severity scoring with exploit narratives and fixes.",
        },
        {
          id: "retest-support",
          Icon: CheckCircle2,
          title: "Reme﻿diation + Retest",
          description: "Fix guidance, patch verification, and targeted retesting of changes.",
        },
      ]}
      auditChecklist={{
        title: "Coverage you can point to in a board meeting",
        items: [
          { label: "Reentrancy + callback surfaces", status: "risk" },
          { label: "Access control + privilege escalation", status: "covered" },
          { label: "Oracle manipulation + stale data risks", status: "risk" },
          { label: "Upgradeable proxy safety + storage layout", status: "covered" },
          { label: "MEV / sandwich / frontrun vectors", status: "risk" },
          { label: "Integer math + precision loss", status: "covered" },
          { label: "Liquidation + insolvency edge cases", status: "risk" },
          { label: "Event correctness + off-chain index assumptions", status: "covered" },
          { label: "Signature validation + replay protection", status: "covered" },
        ],
      }}
      process={[
        { title: "Scope & Threat Model", description: "Define assumptions, assets at risk, and invariants." },
        { title: "Deep Review", description: "Manual review + targeted tests to validate exploit paths." },
        { title: "Report & Fixes", description: "Severity-ranked issues with concrete remediation steps." },
        { title: "Retest & Sign-off", description: "Verify patches and validate security posture for launch." },
      ]}
      whyStats={[
        { value: "$250M+",
          label: "TVL protected across audited deployments (aggregate, project dependent)" },
        { value: "72 hrs",
          label: "Typical turnaround for initial findings in focused audits" },
        { value: "High-signal",
          label: "Exploit narratives + reproduction steps (not just static analysis)" },
      ]}
      testimonial={{
        quote:
          "They found the exact edge case our internal tests missed — and provided a remediation plan that held up under retest and mainnet conditions.",
        attribution: "CTO, DeFi Protocol",
      }}
      related={[
        {
          href: "/services/blockchain",
          Icon: Blocks,
          title: "Blockchain Development",
          description: "Protocol and smart contract delivery with production discipline.",
        },
        {
          href: "/services/blockchain-engineering",
          Icon: Lock,
          title: "Blockchain Engineering",
          description: "Infrastructure and systems work for L1/L2 scaling and reliability.",
        },
        {
          href: "/services/web3-integration",
          Icon: Blocks,
          title: "Web3 Integration",
          description: "Wallets, indexing, and enterprise integration to on-chain systems.",
        },
      ]}
      ctaHeading="Ready to build with Smart Contract Audits?"
      ctaSubtext="De-risk mainnet launches with rigorous review, verification techniques, and retest support."
    />
  );
}

