import type { Metadata } from "next";
import {
  CloudUpload,
  Database,
  Shuffle,
  ShieldCheck,
  ClipboardList,
  CheckCircle2,
  Wrench,
  Rocket,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Cloud Data Migration | Vallorex",
  description:
    "Zero-downtime migrations from legacy systems to cloud infrastructure — planning, dry runs, cutovers, validation, and post-migration optimization.",
  openGraph: {
    title: "Cloud Data Migration | Vallorex",
    description:
      "Zero-downtime migrations from legacy systems to cloud infrastructure — planning, dry runs, cutovers, validation, and post-migration optimization.",
    url: "https://vallorex.com/services/cloud-data-migration",
    type: "website",
  },
};

function MigrationHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="cm1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        <rect x="110" y="210" width="140" height="70" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
        <path
          d="M320 120 C 290 120, 270 140, 270 165 C 250 165, 235 180, 235 200 C 235 225, 255 245, 280 245 H400 C 430 245, 455 220, 455 190 C 455 165, 435 145, 410 145 C 400 125, 380 112, 355 112 C 340 112, 330 115, 320 120 Z"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="2"
        />
        <path d="M250 245 L310 245" stroke="rgba(255,255,255,0.18)" strokeWidth="3" strokeDasharray="8 10" />
        <circle cx="250" cy="245" r="7" fill="url(#cm1)" />
        <circle cx="310" cy="245" r="7" fill="url(#cm1)" />
        <path
          d="M190 210 C 230 180, 270 175, 310 190"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M150 160 C 205 125, 255 125, 310 160"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="7 10"
        />
      </g>
    </svg>
  );
}

export default function CloudDataMigrationPage() {
  return (
    <ServicePageTemplate
      serviceName="Cloud Data Migration"
      tagline="Zero-downtime migrations from legacy systems to modern cloud infrastructure"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Cloud Data Migration", href: "/services/cloud-data-migration" },
      ]}
      heroVariant="card"
      heroIllustration={<MigrationHeroSvg />}
      overviewParagraphs={[
        "We migrate from on‑prem databases, legacy warehouses, and siloed systems to AWS, GCP, or Azure with zero data loss and minimal disruption to operations.",
        "Our migrations are engineered like production releases: discovery, dry runs, validation, cutover playbooks, and post-migration tuning. No surprises and no “big bang” without guardrails.",
        "This service is ideal when uptime matters, reporting must stay accurate during transition, and teams need a migration plan they can defend.",
      ]}
      keyOutcomes={[
        "A migration plan designed for minimal downtime and clear rollback paths",
        "Validated data reconciliation so leadership can trust reporting",
        "Predictable cutovers with runbooks and stakeholder communication",
        "Post-migration performance and cost optimization",
      ]}
      included={[
        {
          id: "legacy-database-migration",
          Icon: Database,
          title: "Legacy Database Migration",
          description: "Move from legacy relational systems with validated replication and cutover.",
        },
        {
          id: "lift-shift",
          Icon: CloudUpload,
          title: "On‑Prem to Cloud Lift & Shift",
          description: "Migrate infrastructure with minimal change, then modernize safely.",
        },
        {
          id: "cross-cloud-migration",
          Icon: Shuffle,
          title: "Cross‑Cloud Migration",
          description: "Move between AWS/GCP/Azure with careful data and pipeline alignment.",
        },
        {
          id: "data-validation",
          Icon: CheckCircle2,
          title: "Data Validation & Reconciliation",
          description: "Row counts, checksums, sampling, and KPI validation against source systems.",
        },
        {
          id: "cutover-planning",
          Icon: ClipboardList,
          title: "Cutover Planning",
          description: "Runbooks, rollback plans, comms, and stakeholder alignment for launch.",
        },
        {
          id: "post-migration-optimization",
          Icon: Wrench,
          title: "Post‑Migration Optimization",
          description: "Tune performance, cost, and reliability after the migration completes.",
        },
      ]}
      process={[
        { title: "Discovery & Assessment", description: "Inventory systems, dependencies, and risk constraints." },
        { title: "Migration Plan", description: "Design approach, rollback strategy, and timelines." },
        { title: "Dry Run", description: "Test migration in staging and validate data integrity." },
        { title: "Live Cutover", description: "Execute cutover with monitoring and stakeholder communication." },
        { title: "Validation", description: "Reconcile data and confirm KPI correctness post-cutover." },
      ]}
      whyStats={[
        { value: "50+",
          label: "Migrations Completed" },
        { value: "0",
          label: "Data Loss Incidents" },
        { value: "AWS/GCP/Azure",
          label: "Migration Partners" },
      ]}
      testimonial={{
        quote:
          "They migrated our warehouse without breaking reporting. The dry runs, reconciliation, and cutover plan made it feel controlled and predictable.",
        attribution: "VP Data, Enterprise",
      }}
      related={[
        {
          href: "/services/data-platform-engineering",
          Icon: Rocket,
          title: "Data Platform Engineering",
          description: "Modern architecture and pipelines that scale without rewrites.",
        },
        {
          href: "/services/business-intelligence",
          Icon: ShieldCheck,
          title: "Business Intelligence",
          description: "Dashboards and semantic layers that leadership trusts.",
        },
        {
          href: "/services/technology-consulting",
          Icon: ShieldCheck,
          title: "Technology Consulting",
          description: "Senior guidance for architecture and risk decisions.",
        },
      ]}
      ctaHeading="Ready to build with Cloud Data Migration?"
      ctaSubtext="Move to the cloud with zero downtime goals, validated reconciliation, and a predictable cutover plan."
    />
  );
}

