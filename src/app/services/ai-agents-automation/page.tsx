import type { Metadata } from "next";
import {
  Bot,
  Workflow,
  Plug,
  Network,
  FileText,
  Code2,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "AI Agents & Automation | Vallorex",
  description:
    "Autonomous agents that work 24/7 — workflow mapping, agent design, tool integration, guardrails, monitoring, and human-in-the-loop control.",
  openGraph: {
    title: "AI Agents & Automation | Vallorex",
    description:
      "Autonomous agents that work 24/7 — workflow mapping, agent design, tool integration, guardrails, monitoring, and human-in-the-loop control.",
    url: "https://vallorex.com/services/ai-agents-automation",
    type: "website",
  },
};

function AgentsHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="a1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#22C55E" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        {[
          [120, 110],
          [240, 80],
          [360, 110],
          [165, 230],
          [305, 230],
          [440, 210],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
            <circle cx={x} cy={y} r="6" fill="url(#a1)" />
          </g>
        ))}
        {[
          [120, 110, 240, 80],
          [240, 80, 360, 110],
          [120, 110, 165, 230],
          [240, 80, 165, 230],
          [240, 80, 305, 230],
          [360, 110, 305, 230],
          [305, 230, 440, 210],
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
          d="M95 280 C 155 250, 215 255, 280 230 C 340 206, 395 210, 455 190"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default function AiAgentsAutomationPage() {
  return (
    <ServicePageTemplate
      serviceName="AI Agents & Automation"
      tagline="Autonomous agents that work 24/7 so your team doesn't have to"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "AI Agents & Automation", href: "/services/ai-agents-automation" },
      ]}
      heroVariant="card"
      heroIllustration={<AgentsHeroSvg />}
      overviewParagraphs={[
        "AI Agents & Automation is about turning multi-step work into reliable systems. We design and deploy task-oriented agents using LangChain, AutoGen, or custom frameworks — with the right guardrails to make them safe in production.",
        "From document processing to reasoning workflows, we integrate agents directly into your existing stack: CRMs, ticketing tools, internal APIs, and data warehouses.",
        "The end goal is measurable: fewer manual touches, faster cycle times, and automation that is observable, auditable, and reversible.",
      ]}
      keyOutcomes={[
        "Agents that integrate with your tools and data sources safely",
        "Human-in-the-loop controls for high-risk steps and approvals",
        "Monitoring and evaluation to prevent silent failures",
        "Clear guardrails: permissions, policies, and audit logs",
      ]}
      included={[
        {
          id: "agent-architecture-design",
          Icon: Workflow,
          title: "Agent Architecture Design",
          description: "Define tools, memory, policies, and success criteria for workflows.",
        },
        {
          id: "tool-api-integration",
          Icon: Plug,
          title: "Tool & API Integration",
          description: "Connect agents to internal services, SaaS tools, and data stores.",
        },
        {
          id: "multi-agent-orchestration",
          Icon: Network,
          title: "Multi-Agent Orchestration",
          description: "Coordinator/worker patterns with routing, retries, and handoffs.",
        },
        {
          id: "document-processing-agents",
          Icon: FileText,
          title: "Document Processing Agents",
          description: "Extract, classify, summarize, and validate documents at scale.",
        },
        {
          id: "code-generation-agents",
          Icon: Code2,
          title: "Code Generation Agents",
          description: "Safe code assistance with repo-aware context and guardrails.",
        },
        {
          id: "monitoring-human-in-loop",
          Icon: ShieldCheck,
          title: "Monitoring & Human-in-the-Loop",
          description: "Approval gates, alerting, evaluation, and safe rollback patterns.",
        },
      ]}
      process={[
        { title: "Workflow Mapping", description: "Identify tasks, constraints, and risk points worth automating." },
        { title: "Agent Design", description: "Define tools, policies, prompts, and evaluation criteria." },
        { title: "Integration", description: "Connect to systems with permissions, logging, and observability." },
        { title: "Testing & Guardrails", description: "Validate behavior under edge cases with safety controls." },
      ]}
      whyStats={[
        { value: "200+",
          label: "Workflows Automated" },
        { value: "85%",
          label: "Task Reduction" },
        { value: "Enterprise-grade",
          label: "Safety & Auditability" },
      ]}
      testimonial={{
        quote:
          "They treated our agents like production software — permissions, approvals, observability, and rollback plans were all there. We automated safely without surprises.",
        attribution: "Director of Ops, Enterprise SaaS",
      }}
      related={[
        {
          href: "/services/custom-llm-development",
          Icon: Bot,
          title: "Custom LLM Development",
          description: "Fine-tuning, RAG, embeddings, and inference APIs for your domain.",
        },
        {
          href: "/services/ml-ops-infrastructure",
          Icon: BarChart3,
          title: "MLOps Infrastructure",
          description: "CI/CD, drift detection, and stable serving for production ML systems.",
        },
        {
          href: "/services/product-engineering",
          Icon: Code2,
          title: "Product Engineering",
          description: "Full-stack delivery for AI-powered workflows and products.",
        },
      ]}
      ctaHeading="Ready to build with AI Agents & Automation?"
      ctaSubtext="Automate multi-step workflows with safe, observable agents that integrate into your stack."
    />
  );
}

