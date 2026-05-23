import type { Metadata } from "next";
import {
  Brain,
  BookOpenCheck,
  Bot,
  Database,
  BarChart3,
  ShieldCheck,
  Workflow,
  MessagesSquare,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "AI Development (LLM, RAG, Agents) | Vallorex",
  description:
    "Custom LLM fine-tuning, RAG pipelines, and generative AI agents built for scale — with evaluation, security, and cost controls.",
  openGraph: {
    title: "AI Development (LLM, RAG, Agents) | Vallorex",
    description:
      "Custom LLM fine-tuning, RAG pipelines, and generative AI agents built for scale — with evaluation, security, and cost controls.",
    url: "https://vallorex.com/services/ai-development",
    type: "website",
  },
};

function GenAiHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#A78BFA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.92">
        <path
          d="M110 110 C 170 70, 250 70, 310 110 C 350 136, 390 136, 430 110"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M110 250 C 170 290, 250 290, 310 250 C 350 224, 390 224, 430 250"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="3"
          fill="none"
        />
        {[
          [135, 120],
          [260, 80],
          [385, 120],
          [135, 240],
          [260, 280],
          [385, 240],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="11" fill="rgba(255,255,255,0.06)" />
            <circle cx={x} cy={y} r="5.5" fill="url(#g1)" />
          </g>
        ))}
        <path
          d="M135 120 L260 80 L385 120 L385 240 L260 280 L135 240 Z"
          stroke="rgba(249,115,22,0.35)"
          strokeWidth="2.5"
          fill="rgba(255,255,255,0.02)"
          strokeDasharray="8 10"
        />
      </g>
    </svg>
  );
}

export default function AiDevelopmentPage() {
  return (
    <ServicePageTemplate
      serviceName="AI Development"
      tagline="Custom LLM fine-tuning, RAG pipelines, and generative AI agents built for scale"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "AI Development", href: "/services/ai-development" },
      ]}
      heroVariant="card"
      heroIllustration={<GenAiHeroSvg />}
      overviewParagraphs={[
        "AI Development is a deep-dive delivery service focused on LLM applications: retrieval-augmented generation (RAG), domain fine-tuning, tool-using agents, and generative workflows that operate safely in production.",
        "We design the full system: embeddings, retrieval, prompt/agent orchestration, evaluation suites, and runtime controls for latency and cost. Every release ships with measurable quality gates — not vibes.",
        "This service is ideal when you need an AI copilot inside your product, a knowledge agent over internal data, or automated workflow execution with strong guardrails.",
      ]}
      keyOutcomes={[
        "RAG pipelines that are accurate, fast, and debuggable",
        "Agents with tool permissions, audit logs, and safe failure modes",
        "Evaluation harnesses that prevent regressions release-to-release",
        "Cost and latency controls that scale with usage",
      ]}
      included={[
        {
          id: "custom-llm-fine-tuning",
          Icon: Brain,
          title: "Custom LLM Fine-tuning",
          description: "Domain adaptation with robust evaluation and dataset governance.",
        },
        {
          id: "rag-pipelines",
          Icon: Database,
          title: "RAG Pipelines",
          description: "Chunking, retrieval, reranking, and grounding strategies for accuracy.",
        },
        {
          id: "ai-agents",
          Icon: Bot,
          title: "AI Agents",
          description: "Tool-using agents for workflows with guardrails and auditability.",
        },
        {
          id: "prompt-systems",
          Icon: MessagesSquare,
          title: "Prompt & Orchestration Systems",
          description: "Versioned prompts, routing, fallback chains, and policy enforcement.",
        },
        {
          id: "eval-harness",
          Icon: BarChart3,
          title: "LLM Evaluation Harness",
          description: "Golden sets, judge strategies, regression tests, and scorecards.",
        },
        {
          id: "secure-runtime",
          Icon: ShieldCheck,
          title: "Secure Runtime Controls",
          description: "PII filtering, access controls, rate limits, and safe output policies.",
        },
      ]}
      process={[
        { title: "Discovery", description: "Define the workflow, data sources, and success metrics." },
        { title: "System Design", description: "Design retrieval, orchestration, and evaluation as one system." },
        { title: "Build & Evaluate", description: "Iterate with scorecards and regression tests until targets are met." },
        { title: "Launch & Scale", description: "Deploy with monitoring, cost controls, and continuous improvement." },
      ]}
      whyStats={[
        { value: "20+",
          label: "RAG + agent systems shipped to production" },
        { value: "1–3 wks",
          label: "Typical time to first internal pilot" },
        { value: "95%+",
          label: "Target answer-grounding coverage with citations (use-case dependent)" },
      ]}
      testimonial={{
        quote:
          "Their evaluation-first approach made the difference. We could ship weekly with confidence because regressions were measurable and caught early.",
        attribution: "Head of AI, Enterprise SaaS",
      }}
      related={[
        {
          href: "/services/ai-engineering",
          Icon: Workflow,
          title: "AI Engineering",
          description: "End-to-end ML systems, MLOps, and production deployment patterns.",
        },
        {
          href: "/services/ml-data-pipelines",
          Icon: BookOpenCheck,
          title: "ML Data Pipelines",
          description: "Orchestration for training data and automated retraining loops.",
        },
        {
          href: "/services/data-analytics",
          Icon: BarChart3,
          title: "Data & Analytics",
          description: "Data platforms, BI, and predictive analytics foundations.",
        },
      ]}
      ctaHeading="Ready to build with AI Development?"
      ctaSubtext="Launch custom LLM applications with evaluation gates, guardrails, and production-ready performance."
    />
  );
}

