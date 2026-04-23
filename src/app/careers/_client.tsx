"use client";

import React, { useState, useRef, useMemo } from "react";
import { motion, Variants, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  MapPin,
  Clock,
  Briefcase,
  ChevronDown,
  ChevronUp,
  X,
  Upload,
  CheckCircle2,
  Users,
  Brain,
  Layers,
  BarChart3,
  Code2,
  Palette,
  Settings,
  DollarSign,
  GraduationCap,
  Sparkles,
  Rocket,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import * as Dialog from "@radix-ui/react-dialog";

/* ═══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════ */

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salaryRange: string;
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

/* ═══════════════════════════════════════════════════════════════
   JOB DATA
   ═══════════════════════════════════════════════════════════════ */

const departments = [
  { id: "all", label: "All Departments", icon: Briefcase },
  { id: "ai", label: "AI Engineering", icon: Brain },
  { id: "blockchain", label: "Blockchain", icon: Layers },
  { id: "data", label: "Data & Analytics", icon: BarChart3 },
  { id: "product", label: "Product Engineering", icon: Code2 },
  { id: "design", label: "Design", icon: Palette },
  { id: "operations", label: "Operations", icon: Settings },
];

const jobs: Job[] = [
  {
    id: "sr-ml-engineer",
    title: "Senior ML Engineer",
    department: "ai",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    salaryRange: "180K – 240K",
    postedDate: "2 days ago",
    description:
      "Lead the design and deployment of production ML systems for Fortune 500 clients. You'll architect training pipelines, optimize model performance, and collaborate directly with client engineering teams to deliver AI solutions that operate at massive scale.",
    responsibilities: [
      "Design, train, and deploy production ML models serving millions of users",
      "Build and optimize end-to-end ML pipelines using PyTorch, TensorFlow, and custom frameworks",
      "Collaborate with client teams to translate business requirements into ML solutions",
      "Implement MLOps best practices - CI/CD for models, A/B testing, monitoring, and drift detection",
      "Mentor junior engineers and contribute to Vallorex's AI engineering standards",
      "Publish internal research and contribute to open-source ML tools",
    ],
    requirements: [
      "5+ years of experience in ML engineering or applied research",
      "Strong proficiency in Python, PyTorch or TensorFlow, and distributed training",
      "Experience deploying models at scale using Kubernetes, Docker, and cloud platforms (AWS/GCP)",
      "Deep understanding of transformer architectures, fine-tuning, and inference optimization",
      "Track record of shipping ML systems in production environments",
      "MS or PhD in Computer Science, Machine Learning, or related field",
    ],
    niceToHave: [
      "Experience with LLM fine-tuning and RAG pipelines",
      "Contributions to open-source ML projects",
      "Experience in regulated industries (finance, healthcare)",
    ],
  },
  {
    id: "ai-agent-engineer",
    title: "AI Agent Engineer",
    department: "ai",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    salaryRange: "160K – 220K",
    postedDate: "1 week ago",
    description:
      "Build autonomous AI agents that execute complex workflows for enterprise clients. You'll work at the cutting edge of LLM-powered agents, tool use, and multi-agent orchestration systems.",
    responsibilities: [
      "Design and build autonomous AI agent systems using LangChain, LlamaIndex, and custom frameworks",
      "Implement tool use, function calling, and multi-agent orchestration patterns",
      "Build RAG pipelines with vector databases for enterprise knowledge retrieval",
      "Develop evaluation frameworks to measure agent reliability and accuracy",
      "Collaborate with clients to design agent architectures for specific business use cases",
      "Stay current with the rapidly evolving AI agent ecosystem",
    ],
    requirements: [
      "3+ years of software engineering experience with at least 1 year in AI/LLM applications",
      "Strong proficiency in Python and experience with LLM APIs (OpenAI, Anthropic, etc.)",
      "Experience building applications with LangChain, LlamaIndex, or similar frameworks",
      "Understanding of prompt engineering, fine-tuning, and evaluation techniques",
      "Experience with vector databases (Pinecone, Weaviate, Chroma)",
      "BS in Computer Science or equivalent practical experience",
    ],
    niceToHave: [
      "Experience with multi-agent systems or agent simulation",
      "Background in NLP research or conversational AI",
      "Familiarity with blockchain/Web3 concepts",
    ],
  },
  {
    id: "sr-solidity-dev",
    title: "Senior Solidity Developer",
    department: "blockchain",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    salaryRange: "170K – 230K",
    postedDate: "3 days ago",
    description:
      "Architect and develop audited smart contracts for DeFi protocols, token systems, and decentralized applications. You'll work on systems securing billions in TVL with a team of world-class blockchain engineers.",
    responsibilities: [
      "Design and implement production smart contracts in Solidity for DeFi, NFT, and governance protocols",
      "Perform internal security audits and code reviews for all on-chain code",
      "Optimize gas costs and contract efficiency across EVM-compatible chains",
      "Build and maintain comprehensive test suites using Hardhat and Foundry",
      "Collaborate with security auditors on formal verification and audit preparation",
      "Mentor junior developers on smart contract best practices and security patterns",
    ],
    requirements: [
      "4+ years of professional Solidity development experience",
      "Deep understanding of EVM internals, gas optimization, and security patterns",
      "Experience building DeFi protocols (AMMs, lending, yield farming, or similar)",
      "Proficiency with Hardhat, Foundry, and testing frameworks",
      "Track record of deployed contracts on mainnet with significant TVL",
      "Strong understanding of common attack vectors (reentrancy, flash loans, oracle manipulation)",
    ],
    niceToHave: [
      "Experience with formal verification tools (Certora, Echidna)",
      "Knowledge of L2 solutions and cross-chain bridges",
      "Published security audits or bug bounty track record",
    ],
  },
  {
    id: "rust-blockchain-eng",
    title: "Rust Blockchain Engineer",
    department: "blockchain",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    salaryRange: "160K – 220K",
    postedDate: "5 days ago",
    description:
      "Build high-performance blockchain infrastructure and on-chain programs for Solana and Cosmos ecosystems. You'll push the boundaries of what's possible with Rust-based blockchain development.",
    responsibilities: [
      "Develop on-chain programs for Solana using Anchor and native Rust",
      "Build custom Cosmos SDK modules and appchain infrastructure",
      "Design and implement cross-chain interoperability solutions",
      "Optimize program performance for high-throughput transaction processing",
      "Write comprehensive tests and contribute to security audit processes",
      "Contribute to internal tooling and developer experience improvements",
    ],
    requirements: [
      "3+ years of professional Rust development experience",
      "Experience building on-chain programs for Solana or Cosmos SDK modules",
      "Strong understanding of consensus mechanisms and blockchain architecture",
      "Proficiency with blockchain testing frameworks and deployment pipelines",
      "Understanding of cryptographic primitives used in blockchain systems",
      "BS in Computer Science or equivalent experience",
    ],
    niceToHave: [
      "Experience with zero-knowledge proofs or rollup technology",
      "Contributions to open-source blockchain infrastructure",
      "Background in distributed systems or database engineering",
    ],
  },
  {
    id: "sr-data-engineer",
    title: "Senior Data Engineer",
    department: "data",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    salaryRange: "150K – 200K",
    postedDate: "1 week ago",
    description:
      "Design and build modern data platforms for enterprise clients. You'll architect ETL pipelines, data warehouses, and real-time streaming systems that power business-critical analytics.",
    responsibilities: [
      "Design and implement scalable data pipelines processing millions of events daily",
      "Build and maintain data warehouses and data lakes on AWS, GCP, or Azure",
      "Implement real-time streaming solutions using Kafka, Flink, or Spark Streaming",
      "Develop data quality frameworks and monitoring systems",
      "Collaborate with analytics teams to design optimal data models",
      "Drive data platform architecture decisions and technology selection",
    ],
    requirements: [
      "5+ years of data engineering experience in production environments",
      "Strong proficiency in SQL, Python, and Spark/PySpark",
      "Experience with cloud data platforms (Snowflake, BigQuery, Redshift, or Databricks)",
      "Hands-on experience with orchestration tools (Airflow, Dagster, or Prefect)",
      "Understanding of data modeling, schema design, and performance optimization",
      "Experience with streaming platforms (Kafka, Kinesis, or Pub/Sub)",
    ],
    niceToHave: [
      "Experience with dbt or similar transformation frameworks",
      "Knowledge of data governance and compliance (GDPR, HIPAA)",
      "Background in building ML feature stores or analytics platforms",
    ],
  },
  {
    id: "fullstack-engineer",
    title: "Full-Stack Engineer",
    department: "product",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    salaryRange: "140K – 190K",
    postedDate: "4 days ago",
    description:
      "Ship end-to-end product features for high-growth startups and enterprise clients. You'll work across the stack - from pixel-perfect React frontends to scalable Node.js APIs - in fast-paced, agile environments.",
    responsibilities: [
      "Build responsive, accessible web applications using React, Next.js, and TypeScript",
      "Design and implement RESTful and GraphQL APIs using Node.js",
      "Collaborate with designers and product managers to deliver polished user experiences",
      "Write comprehensive tests (unit, integration, and e2e) for all features",
      "Participate in code reviews, architecture discussions, and sprint planning",
      "Optimize application performance, accessibility, and SEO",
    ],
    requirements: [
      "3+ years of professional full-stack development experience",
      "Strong proficiency in React, Next.js, TypeScript, and Node.js",
      "Experience with PostgreSQL or other relational databases",
      "Understanding of CI/CD pipelines and cloud deployment (AWS, Vercel)",
      "Familiarity with testing frameworks (Jest, Playwright, Cypress)",
      "Strong understanding of web accessibility and responsive design",
    ],
    niceToHave: [
      "Experience with real-time features (WebSockets, SSE)",
      "Knowledge of headless CMS platforms or e-commerce frameworks",
      "Background in mobile development (React Native or Flutter)",
    ],
  },
  {
    id: "sr-product-designer",
    title: "Senior Product Designer",
    department: "design",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    salaryRange: "150K – 200K",
    postedDate: "1 week ago",
    description:
      "Shape the user experience for AI and blockchain products used by millions. You'll lead design from research to high-fidelity prototypes, working closely with engineering to ship pixel-perfect interfaces.",
    responsibilities: [
      "Lead end-to-end product design from user research to high-fidelity prototypes",
      "Create design systems and component libraries that scale across products",
      "Conduct user research, usability testing, and data-driven design iterations",
      "Collaborate with engineers to ensure design intent is preserved in implementation",
      "Present design rationale to clients and stakeholders",
      "Mentor junior designers and contribute to design culture at Vallorex",
    ],
    requirements: [
      "5+ years of product design experience for web and mobile applications",
      "Expert-level proficiency in Figma and prototyping tools",
      "Strong portfolio demonstrating complex B2B or fintech product design",
      "Experience building and maintaining design systems at scale",
      "Understanding of accessibility standards (WCAG 2.1) and inclusive design",
      "Excellent communication and presentation skills",
    ],
    niceToHave: [
      "Experience designing for AI/ML-powered interfaces",
      "Familiarity with blockchain/DeFi product patterns",
      "Basic understanding of HTML, CSS, and front-end development",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps / Platform Engineer",
    department: "product",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    salaryRange: "145K – 195K",
    postedDate: "6 days ago",
    description:
      "Build and maintain the cloud infrastructure that powers Vallorex's client projects. You'll design highly available, secure, and cost-optimized platforms across AWS, GCP, and Azure.",
    responsibilities: [
      "Design and implement cloud infrastructure using Terraform, Pulumi, or CloudFormation",
      "Build and maintain CI/CD pipelines for rapid, reliable deployments",
      "Manage Kubernetes clusters and containerized workloads at scale",
      "Implement monitoring, alerting, and incident response frameworks",
      "Ensure security best practices across all infrastructure",
      "Optimize cloud costs and resource utilization",
    ],
    requirements: [
      "4+ years of DevOps or platform engineering experience",
      "Strong proficiency with AWS (EKS, RDS, Lambda, VPC) or equivalent GCP/Azure services",
      "Experience with Infrastructure as Code (Terraform preferred)",
      "Hands-on Kubernetes administration and troubleshooting",
      "Understanding of networking, security groups, and IAM",
      "Experience with monitoring tools (Datadog, Prometheus, Grafana)",
    ],
    niceToHave: [
      "CKA or AWS Solutions Architect certification",
      "Experience with GitOps workflows (ArgoCD, Flux)",
      "Background in blockchain node infrastructure",
    ],
  },
  {
    id: "technical-recruiter",
    title: "Technical Recruiter",
    department: "operations",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    salaryRange: "90K – 130K",
    postedDate: "2 weeks ago",
    description:
      "Help us find and hire the top 3% of engineering talent globally. You'll build pipelines for senior engineers across AI, blockchain, and product engineering - and shape the candidate experience at Vallorex.",
    responsibilities: [
      "Source and engage top-tier engineering candidates across AI, blockchain, and full-stack roles",
      "Manage full-cycle recruiting from sourcing to offer negotiation",
      "Build and maintain talent pipelines for current and future hiring needs",
      "Partner with hiring managers to define role requirements and interview processes",
      "Optimize recruiting metrics (time-to-hire, quality of hire, diversity)",
      "Champion employer branding and candidate experience initiatives",
    ],
    requirements: [
      "3+ years of technical recruiting experience at a tech company or agency",
      "Proven track record of hiring senior engineers in competitive markets",
      "Strong sourcing skills using LinkedIn Recruiter, GitHub, and niche communities",
      "Excellent communication and relationship-building skills",
      "Data-driven approach to recruiting metrics and pipeline management",
      "Understanding of technical roles and engineering organization structures",
    ],
    niceToHave: [
      "Experience recruiting for AI/ML or blockchain roles",
      "Background in international or remote-first hiring",
      "ATS expertise (Greenhouse, Lever, or Ashby)",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   APPLICATION FORM COMPONENT
   ═══════════════════════════════════════════════════════════════ */

function ApplicationModal({
  job,
  open,
  onOpenChange,
}: {
  job: Job | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  type ApplyField =
    | "fullName"
    | "email"
    | "phone"
    | "linkedin"
    | "portfolio"
    | "resume";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
    howHeard: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<ApplyField, string>>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const linkedinRef = useRef<HTMLInputElement>(null);
  const portfolioRef = useRef<HTMLInputElement>(null);
  const resumeBlockRef = useRef<HTMLDivElement>(null);

  const clearFieldError = (key: ApplyField) => {
    setFieldErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const validateApply = (): Partial<Record<ApplyField, string>> => {
    const errors: Partial<Record<ApplyField, string>> = {};

    const fullName = formData.fullName.trim();
    if (!fullName) errors.fullName = "Please enter your full name";

    const email = formData.email.trim();
    if (!email) errors.email = "Please enter your email address";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address";

    const phoneRaw = formData.phone.trim();
    if (!phoneRaw) {
      errors.phone = "Please enter your phone number";
    } else {
      if (!/^\d{10}$/.test(phoneRaw)) {
        errors.phone = "Please enter a valid 10-digit phone number";
      }
    }

    const linkedIn = formData.linkedin.trim();
    if (linkedIn) {
      if (!/^https?:\/\//i.test(linkedIn) || !linkedIn.includes("linkedin.com/in/")) {
        errors.linkedin = "Please enter a valid LinkedIn URL (e.g. https://linkedin.com/in/yourname)";
      }
    }

    const portfolio = formData.portfolio.trim();
    if (portfolio) {
      if (!/^https?:\/\//i.test(portfolio)) {
        errors.portfolio = "Please enter a valid URL starting with https://";
      }
    }

    if (!resumeFile) {
      errors.resume = "Please upload your CV or resume";
    } else {
      const name = resumeFile.name || "";
      const ext = name.split(".").pop()?.toLowerCase() || "";
      if (!["pdf", "doc", "docx"].includes(ext)) {
        errors.resume = "Only PDF, DOC, or DOCX files are accepted";
      } else if (resumeFile.size > 10 * 1024 * 1024) {
        errors.resume = "File size must be under 10MB";
      }
    }

    return errors;
  };

  const scrollToFirstError = (errors: Partial<Record<ApplyField, string>>) => {
    const order: ApplyField[] = ["fullName", "email", "phone", "linkedin", "portfolio", "resume"];
    const first = order.find((k) => Boolean(errors[k]));
    if (!first) return;

    const map: Record<ApplyField, React.RefObject<HTMLElement>> = {
      fullName: fullNameRef,
      email: emailRef,
      phone: phoneRef,
      linkedin: linkedinRef,
      portfolio: portfolioRef,
      resume: resumeBlockRef,
    } as const;

    const el = map[first].current;
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement) {
      el.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!job) {
      return;
    }

    const errors = validateApply();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      scrollToFirstError(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("fullName", formData.fullName);
      fd.append("email", formData.email);
      fd.append("phone", formData.phone);
      fd.append("linkedIn", formData.linkedin);
      fd.append("portfolio", formData.portfolio);
      fd.append("coverLetter", formData.coverLetter);
      fd.append("source", formData.howHeard);
      fd.append("jobTitle", job.title);
      if (resumeFile) {
        fd.append("resume", resumeFile, resumeFile.name);
      }

      const res = await fetch("/api/apply", { method: "POST", body: fd });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean; error?: string };

      if (!res.ok || !data?.success) {
        window.alert(data?.error || "Unable to submit application. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      window.alert("Unable to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: "", email: "", phone: "", linkedin: "", portfolio: "", coverLetter: "", howHeard: "" });
      setResumeFile(null);
    }, 300);
  };

  if (!job) return null;

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-[95vw] max-w-[680px] max-h-[90vh] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded-2xl bg-white shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          {submitted ? (
            <div className="p-10 md:p-14 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
                className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-extrabold text-midnight mb-3">
                Application Submitted!
              </h3>
              <p className="text-muted text-base leading-relaxed mb-2">
                Thank you for applying for <span className="font-semibold text-midnight">{job.title}</span>.
              </p>
              <p className="text-muted text-sm leading-relaxed mb-8">
                We&apos;ll review your application and get back to you within 5 business days. Keep an eye on your inbox for a confirmation email.
              </p>
              <Button
                onClick={handleClose}
                className="bg-brand-blue hover:bg-brand-blue-hover text-white rounded-full px-8 h-12 text-sm font-bold"
              >
                Close
              </Button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white border-b border-slate-100 px-8 py-5 flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-brand-blue uppercase">
                    Apply Now
                  </p>
                  <h3 className="text-xl font-extrabold text-midnight mt-1">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{job.type}</span>
                  </div>
                </div>
                <Dialog.Close asChild>
                  <button className="rounded-lg p-2 hover:bg-slate-100 transition-colors text-muted hover:text-midnight">
                    <X className="w-5 h-5" />
                  </button>
                </Dialog.Close>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="p-8 space-y-5">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-midnight mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={fullNameRef}
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        clearFieldError("fullName");
                        setFormData({ ...formData, fullName: e.target.value });
                      }}
                      placeholder="John Doe"
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        fieldErrors.fullName
                          ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                          : "border-slate-200 focus:ring-brand-blue/30 focus:border-brand-blue"
                      }`}
                    />
                    {fieldErrors.fullName ? (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.fullName}</p>
                    ) : null}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-midnight mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={emailRef}
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        clearFieldError("email");
                        setFormData({ ...formData, email: e.target.value });
                      }}
                      placeholder="john@example.com"
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        fieldErrors.email
                          ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                          : "border-slate-200 focus:ring-brand-blue/30 focus:border-brand-blue"
                      }`}
                    />
                    {fieldErrors.email ? (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
                    ) : null}
                  </div>
                </div>

                {/* Phone & LinkedIn */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-midnight mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={phoneRef}
                      type="tel"
                      inputMode="numeric"
                      pattern="\d{10}"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => {
                        clearFieldError("phone");
                        const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setFormData({ ...formData, phone: digitsOnly });
                      }}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        fieldErrors.phone
                          ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                          : "border-slate-200 focus:ring-brand-blue/30 focus:border-brand-blue"
                      }`}
                    />
                    {fieldErrors.phone ? (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>
                    ) : null}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-midnight mb-1.5">
                      LinkedIn Profile
                    </label>
                    <input
                      ref={linkedinRef}
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => {
                        clearFieldError("linkedin");
                        setFormData({ ...formData, linkedin: e.target.value });
                      }}
                      placeholder="linkedin.com/in/johndoe"
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        fieldErrors.linkedin
                          ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                          : "border-slate-200 focus:ring-brand-blue/30 focus:border-brand-blue"
                      }`}
                    />
                    {fieldErrors.linkedin ? (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.linkedin}</p>
                    ) : null}
                  </div>
                </div>

                {/* Portfolio */}
                <div>
                  <label className="block text-sm font-semibold text-midnight mb-1.5">
                    Portfolio / GitHub URL
                  </label>
                  <input
                    ref={portfolioRef}
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => {
                      clearFieldError("portfolio");
                      setFormData({ ...formData, portfolio: e.target.value });
                    }}
                    placeholder="github.com/johndoe"
                    className={`w-full rounded-xl border px-4 py-3 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      fieldErrors.portfolio
                        ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                        : "border-slate-200 focus:ring-brand-blue/30 focus:border-brand-blue"
                    }`}
                  />
                  {fieldErrors.portfolio ? (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.portfolio}</p>
                  ) : null}
                </div>

                {/* Resume Upload */}
                <div ref={resumeBlockRef}>
                  <label className="block text-sm font-semibold text-midnight mb-1.5">
                    Resume / CV <span className="text-red-500">*</span>
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      clearFieldError("resume");
                      setResumeFile(e.target.files?.[0] || null);
                    }}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className={`w-full rounded-xl border-2 border-dashed px-4 py-6 text-center transition-all group ${
                      fieldErrors.resume ? "border-red-300" : "border-slate-200 hover:border-brand-blue/40"
                    }`}
                  >
                    {resumeFile ? (
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium text-midnight">{resumeFile.name}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            clearFieldError("resume");
                            setResumeFile(null);
                            if (fileInputRef.current) fileInputRef.current.value = "";
                          }}
                          className="text-muted hover:text-red-500 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Upload className="w-8 h-8 text-slate-300 group-hover:text-brand-blue transition-colors" />
                        <span className="text-sm text-muted">
                          <span className="font-semibold text-brand-blue">Click to upload</span> or drag and drop
                        </span>
                        <span className="text-xs text-slate-400">PDF, DOC, or DOCX (max 10MB)</span>
                      </div>
                    )}
                  </button>
                  {fieldErrors.resume ? (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.resume}</p>
                  ) : null}
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-semibold text-midnight mb-1.5">
                    Cover Letter <span className="text-xs text-muted font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    placeholder="Tell us why you're excited about this role and what makes you a great fit..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all resize-none"
                  />
                </div>

                {/* How did you hear */}
                <div>
                  <label className="block text-sm font-semibold text-midnight mb-1.5">
                    How did you hear about us?
                  </label>
                  <select
                    value={formData.howHeard}
                    onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-midnight focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMS41TDYgNi41TDExIDEuNSIgc3Ryb2tlPSIjOTRBM0I4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                  >
                    <option value="">Select an option</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="referral">Employee Referral</option>
                    <option value="job-board">Job Board (Indeed, etc.)</option>
                    <option value="social">Social Media</option>
                    <option value="website">Vallorex Website</option>
                    <option value="event">Conference / Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-orange hover:bg-[#E06612] text-white rounded-full h-12 text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-[1.01] active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted mt-3">
                    By submitting, you agree to our privacy policy and consent to Vallorex processing your data for recruitment purposes.
                  </p>
                </div>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

/* ═══════════════════════════════════════════════════════════════
   JOB CARD COMPONENT
   ═══════════════════════════════════════════════════════════════ */

function JobCard({
  job,
  isExpanded,
  onToggle,
  onApply,
}: {
  job: Job;
  isExpanded: boolean;
  onToggle: () => void;
  onApply: () => void;
}) {
  const dept = departments.find((d) => d.id === job.department);
  const DeptIcon = dept?.icon || Briefcase;

  const deptColors: Record<string, string> = {
    ai: "#2563EB",
    blockchain: "#8B5CF6",
    data: "#10B981",
    product: "#F97316",
    design: "#EC4899",
    operations: "#06B6D4",
  };
  const color = deptColors[job.department] || "#64748B";

  return (
    <motion.div
      layout
      className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {/* Card Header */}
      <div
        className="px-6 sm:px-8 py-6 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2.5 mb-3 flex-wrap">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}10` }}
              >
                <DeptIcon className="w-[18px] h-[18px]" style={{ color }} />
              </div>
              <span
                className="text-[10px] font-bold tracking-[0.15em] uppercase rounded-full px-2.5 py-0.5"
                style={{ color, background: `${color}10` }}
              >
                {dept?.label}
              </span>
              <span className="text-[10px] font-bold tracking-wider text-muted uppercase flex items-center gap-1">
                <Clock className="w-3 h-3" /> {job.postedDate}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-midnight group-hover:text-brand-blue transition-colors mb-2">
              {job.title}
            </h3>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" /> {job.type}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Remote
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" /> {job.experience}
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-midnight">
                <DollarSign className="w-3.5 h-3.5" /> {job.salaryRange}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              onClick={(e) => { e.stopPropagation(); onApply(); }}
              className="hidden sm:inline-flex bg-brand-orange hover:bg-[#E06612] text-white rounded-full px-6 h-10 text-sm font-bold shadow-md shadow-brand-orange/15 transition-all hover:scale-[1.03] active:scale-95"
            >
              Apply Now
            </Button>
            <button className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-muted" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile apply button */}
        <Button
          onClick={(e) => { e.stopPropagation(); onApply(); }}
          className="sm:hidden w-full mt-4 bg-brand-orange hover:bg-[#E06612] text-white rounded-full h-10 text-sm font-bold shadow-md shadow-brand-orange/15"
        >
          Apply Now
        </Button>
      </div>

      {/* Expanded Detail */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-slate-100">
              {/* Description */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-midnight mb-2 uppercase tracking-wider">About This Role</h4>
                <p className="text-sm text-muted leading-relaxed">{job.description}</p>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-midnight mb-3 uppercase tracking-wider">What You&apos;ll Do</h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-body">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]" style={{ background: color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-midnight mb-3 uppercase tracking-wider">What We&apos;re Looking For</h4>
                <ul className="space-y-2">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-body">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice to Have */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-midnight mb-3 uppercase tracking-wider">Nice to Have</h4>
                <ul className="space-y-2">
                  {job.niceToHave.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                      <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-3 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-sm font-bold text-midnight">Interested in this role?</p>
                  <p className="text-xs text-muted mt-0.5">Apply now and we&apos;ll get back to you within 5 business days.</p>
                </div>
                <Button
                  onClick={onApply}
                  className="bg-brand-orange hover:bg-[#E06612] text-white rounded-full px-8 h-11 text-sm font-bold shadow-md shadow-brand-orange/15 transition-all hover:scale-[1.03] active:scale-95 group"
                >
                  Apply for This Role
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function CareersPageClient() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const jobsRef = useRef<HTMLElement>(null);
  const jobsInView = useInView(jobsRef, { once: true, margin: "-60px" });

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesDept = selectedDepartment === "all" || job.department === selectedDepartment;
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [selectedDepartment, searchQuery]);

  const handleApply = (job: Job) => {
    setApplyingJob(job);
    setModalOpen(true);
  };

  return (
    <div className="bg-white relative overflow-hidden">
      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section className="relative w-full pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40 bg-[#0A0F1E] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[5%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] bg-brand-blue/8 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-15%] right-[-5%] w-[50vw] h-[50vw] max-w-[700px] bg-brand-orange/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[80vw] h-[30vw] max-w-[1000px] bg-purple-500/4 blur-[100px] rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-[860px] mx-auto text-center"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 rounded-full bg-green-500/10 border border-green-500/20 px-4 py-1.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-green-400 uppercase">
                {jobs.length} Open Positions
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[38px] sm:text-[50px] md:text-[62px] lg:text-[74px] font-extrabold tracking-tight leading-[1.06] mb-8"
            >
              <span className="block text-white">Build the Future</span>
              <span className="block bg-gradient-to-r from-brand-blue via-blue-400 to-brand-orange bg-clip-text text-transparent">
                With the Best.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-[#94A3B8] max-w-[620px] mx-auto leading-relaxed mb-10"
            >
              Join 200+ world-class engineers building production-grade AI and
              blockchain systems for the most ambitious ventures on the planet.
              If you thrive on complexity and care about craft, you&apos;ll feel
              right at home.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                className="bg-brand-orange hover:bg-[#E06612] text-white rounded-full px-8 h-12 text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-[1.03] active:scale-95 group"
              >
                <a href="#positions">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                className="border-white/20 text-white hover:bg-white/10 bg-transparent border rounded-full px-8 h-12 text-sm font-bold transition-all"
              >
                <Link href="/company">Learn About Vallorex</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ───────────────────────────────────── */}
      <section
        id="positions"
        ref={jobsRef}
        className="py-24 md:py-32 bg-white scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeUp}
              className="block text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase mb-4"
            >
              Open Positions
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-midnight tracking-tight leading-tight"
            >
              Find Your Next Role
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base md:text-lg text-muted max-w-[520px] mx-auto"
            >
              We&apos;re hiring across engineering, design, and operations. Find a role
              that matches your ambition.
            </motion.p>
          </motion.div>

          {/* Filters */}
          <div className="mb-10 space-y-5">
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by job title or keyword..."
                className="w-full rounded-full border border-slate-200 pl-12 pr-5 py-3.5 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-midnight transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Department Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold tracking-wide transition-all duration-200 ${
                    selectedDepartment === dept.id
                      ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                      : "bg-slate-100 text-muted hover:bg-slate-200"
                  }`}
                >
                  <dept.icon className="w-3.5 h-3.5" />
                  {dept.label}
                </button>
              ))}
            </div>

          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted">
              Showing <span className="font-bold text-midnight">{filteredJobs.length}</span>{" "}
              {filteredJobs.length === 1 ? "position" : "positions"}
            </p>
            {(selectedDepartment !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedDepartment("all");
                  setSearchQuery("");
                }}
                className="text-xs font-semibold text-brand-blue hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={jobsInView ? { opacity: 1, y: 0 } : {}}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    layout
                  >
                    <JobCard
                      job={job}
                      isExpanded={expandedJob === job.id}
                      onToggle={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                      onApply={() => handleApply(job)}
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <Search className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-midnight mb-2">No positions found</h3>
                  <p className="text-sm text-muted mb-6 max-w-md mx-auto">
                    We don&apos;t have any openings matching your criteria right now, but we&apos;re always looking for talented people.
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedDepartment("all");
                      setSearchQuery("");
                    }}
                    className="bg-brand-blue hover:bg-brand-blue-hover text-white rounded-full px-6 h-10 text-sm font-bold"
                  >
                    View All Positions
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HIRING PROCESS ──────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#FAFAFA] border-y border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="block text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase mb-4"
            >
              Our Process
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-midnight tracking-tight leading-tight"
            >
              How We Hire
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base md:text-lg text-muted max-w-[520px] mx-auto"
            >
              A transparent, respectful process designed to find the best match
              for both sides. Typically completed within 2–3 weeks.
            </motion.p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue via-brand-orange to-brand-blue opacity-20" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="space-y-8 md:space-y-0"
            >
              {[
                { step: "01", title: "Application Review", desc: "We review every application within 48 hours. No AI screeners - real humans read your resume.", color: "#2563EB", icon: Briefcase },
                { step: "02", title: "Recruiter Call", desc: "A 30-minute call to discuss the role, your background, and mutual expectations. Casual and conversational.", color: "#F97316", icon: Users },
                { step: "03", title: "Technical Assessment", desc: "A take-home challenge or live coding session tailored to the role. No LeetCode tricks - real-world problems.", color: "#8B5CF6", icon: Code2 },
                { step: "04", title: "Team Interview", desc: "Meet your potential teammates. Discuss system design, past projects, and how you approach complex problems.", color: "#10B981", icon: Brain },
                { step: "05", title: "Offer & Onboarding", desc: "Competitive offer within 48 hours of final interview. Structured 30-60-90 day onboarding plan.", color: "#EC4899", icon: Rocket },
              ].map((item, i) => {
                const isLeft = i % 2 === 0;
                const StepIcon = item.icon;

                return (
                  <motion.div
                    key={item.step}
                    variants={fadeUp}
                    className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} md:mb-6`}
                  >
                    {/* Center node */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border-2 bg-white shadow-lg"
                        style={{ borderColor: item.color }}
                      >
                        <StepIcon className="w-5 h-5" style={{ color: item.color }} />
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`md:w-[calc(50%-50px)] ${isLeft ? "md:pr-0" : "md:pl-0"}`}>
                      <div className="group bg-white rounded-xl border border-slate-200/80 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${item.color}10` }}>
                            <StepIcon className="w-5 h-5" style={{ color: item.color }} />
                          </div>
                          <span className="text-2xl font-extrabold leading-none" style={{ color: item.color }}>
                            {item.step}
                          </span>
                          <div className="h-px flex-1 bg-slate-100" />
                        </div>
                        <h3 className="text-lg font-bold text-midnight mb-1.5">{item.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    <div className="hidden md:block md:w-[calc(50%-50px)]" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA ─────────────────────────────────────── */}
      <section className="relative py-32 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1815] via-[#0F172A] to-[#0A101C]" />
          <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[900px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
              </span>
              <span className="text-sm text-green-400">Actively hiring across all departments</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-extrabold text-white tracking-tight leading-[1.1] mb-8"
            >
              Don&apos;t See Your Perfect Role?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-[#94A3B8] max-w-xl mx-auto mb-10 leading-relaxed"
            >
              We&apos;re always looking for exceptional talent. Send us your resume and
              we&apos;ll reach out when a role that matches your skills opens up.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                onClick={() => {
                  setApplyingJob({
                    id: "general",
                    title: "General Application",
                    department: "all",
                    location: "Remote",
                    type: "Full-time",
                    experience: "Varies",
                    salaryRange: "Competitive",
                    postedDate: "Always open",
                    description: "General application for future opportunities at Vallorex.",
                    responsibilities: [],
                    requirements: [],
                    niceToHave: [],
                  });
                  setModalOpen(true);
                }}
                className="bg-brand-orange hover:bg-[#E06612] text-white rounded-full px-10 h-14 md:h-16 text-base md:text-lg font-bold shadow-[0_4px_24px_rgba(249,115,22,0.3)] transition-all hover:scale-105 active:scale-95 group"
              >
                Send General Application
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
              <Button
                asChild
                className="border-white/30 text-white hover:bg-white/10 bg-transparent border rounded-full px-8 h-14 text-base font-bold transition-all"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal
        job={applyingJob}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
