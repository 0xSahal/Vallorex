import type { Metadata } from "next";
import {
  Plug,
  Network,
  Link2,
  Radio,
  Blocks,
  ShieldCheck,
  Gauge,
  BookOpenCheck,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "API & Integrations | Vallorex",
  description:
    "Connect everything without breaking production — REST/GraphQL APIs, third-party integrations, webhooks, microservices, gateways, and rate limiting.",
  openGraph: {
    title: "API & Integrations | Vallorex",
    description:
      "Connect everything without breaking production — REST/GraphQL APIs, third-party integrations, webhooks, microservices, gateways, and rate limiting.",
    url: "https://vallorex.com/services/api-integrations",
    type: "website",
  },
};

function ApiHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="api1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        {[
          [120, 120],
          [220, 90],
          [320, 120],
          [180, 230],
          [300, 250],
          [420, 210],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
            <circle cx={x} cy={y} r="6" fill="url(#api1)" />
          </g>
        ))}
        {[
          [120, 120, 220, 90],
          [220, 90, 320, 120],
          [120, 120, 180, 230],
          [220, 90, 180, 230],
          [320, 120, 300, 250],
          [180, 230, 300, 250],
          [300, 250, 420, 210],
        ].map(([x1, y1, x2, y2], i) => (
          <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeDasharray="7 10" />
        ))}
        <path
          d="M95 310 C 170 280, 235 290, 315 250 C 365 222, 415 215, 470 205"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default function ApiIntegrationsPage() {
  return (
    <ServicePageTemplate
      serviceName="API & Integrations"
      tagline="Connect everything. Break nothing."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "API & Integrations", href: "/services/api-integrations" },
      ]}
      heroVariant="card"
      heroIllustration={<ApiHeroSvg />}
      overviewParagraphs={[
        "We design and build headless APIs, third-party integrations, webhook systems, and microservice architectures that make your stack composable, scalable, and maintainable.",
        "Our work emphasizes reliability: clear contracts, idempotency, versioning, observability, and safe rollout patterns so integrations don’t become a source of incidents.",
        "This service is ideal for platforms integrating payments, identity, CRMs, logistics, analytics, or building internal API foundations for multiple teams.",
      ]}
      keyOutcomes={[
        "Stable APIs with clean contracts, versioning, and documentation",
        "Reliable event-driven systems with idempotency and replay tooling",
        "Third-party integrations that are observable and upgrade-friendly",
        "Gateway patterns that handle auth, rate limits, and safety at scale",
      ]}
      included={[
        {
          id: "rest-api-design",
          Icon: Network,
          title: "REST API Design & Development",
          description: "Resource design, auth, pagination, rate limits, and versioning.",
        },
        {
          id: "graphql-api-development",
          Icon: Blocks,
          title: "GraphQL API Development",
          description: "Schema design, performance patterns, and resolver discipline.",
        },
        {
          id: "third-party-integrations",
          Icon: Plug,
          title: "Third‑Party API Integration",
          description: "Payments, identity, data providers, and SaaS tools integrated reliably.",
        },
        {
          id: "webhook-event-systems",
          Icon: Radio,
          title: "Webhook & Event System Design",
          description: "Idempotency, retries, DLQs, and reprocessing for real-world events.",
        },
        {
          id: "microservices-architecture",
          Icon: Link2,
          title: "Microservices Architecture",
          description: "Service boundaries, contracts, and operational safety patterns.",
        },
        {
          id: "api-gateway-rate-limiting",
          Icon: ShieldCheck,
          title: "API Gateway & Rate Limiting",
          description: "Policy enforcement, auth, throttling, and traffic management.",
        },
      ]}
      process={[
        { title: "Integration Mapping", description: "Map dependencies, flows, and operational constraints." },
        { title: "API Design", description: "Define contracts, schemas, and versioning strategy." },
        { title: "Development", description: "Implement with observability, tests, and safe rollout patterns." },
        { title: "Documentation & Testing", description: "OpenAPI/GraphQL docs, contract tests, and runbooks." },
      ]}
      whyStats={[
        { value: "500+",
          label: "API Integrations Built" },
        { value: "99.99%",
          label: "Uptime on Critical APIs" },
        { value: "OpenAPI 3.0",
          label: "Standard" },
      ]}
      testimonial={{
        quote:
          "They built our integration layer like critical infrastructure. The idempotency and replay tooling alone prevented a huge class of incidents.",
        attribution: "Head of Platform, Fintech",
      }}
      related={[
        {
          href: "/services/full-stack-development",
          Icon: Gauge,
          title: "Full-Stack Development",
          description: "End-to-end product delivery with clean API foundations.",
        },
        {
          href: "/services/qa-testing",
          Icon: BookOpenCheck,
          title: "QA & Testing",
          description: "API contract testing, regression automation, and CI pipelines.",
        },
        {
          href: "/services/product-engineering",
          Icon: ShieldCheck,
          title: "Product Engineering",
          description: "Senior-led delivery for web, mobile, and platform systems.",
        },
      ]}
      ctaHeading="Ready to build with API & Integrations?"
      ctaSubtext="Connect systems safely with stable contracts, event-driven reliability, and production-grade observability."
    />
  );
}

