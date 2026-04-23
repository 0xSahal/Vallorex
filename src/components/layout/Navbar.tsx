"use client";

import * as React from "react";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ChevronDown, Menu, ArrowRight,
  ShieldCheck, BarChart3,
  Layers, Brain, Code2, Rocket, Building2,
  Landmark, TrendingUp, ShoppingBag, HeartPulse, Zap,
  Globe, Server, Lock, GitBranch, Terminal,
  BookOpen, Newspaper, Video, MessageSquare,
  Users, Briefcase, Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// ─── Shared nav data (desktop mega menus + mobile accordions) ───────────────

type MegaLink = { label: string; desc: string; href: string };

type ServiceColumn = { heading: string; Icon: LucideIcon; items: MegaLink[] };

const servicesColumnsData: ServiceColumn[] = [
  {
    heading: "AI Engineering",
    Icon: Brain,
    items: [
      { label: "AI Strategy & Roadmap", desc: "Tailored AI transformation plans", href: "/services/ai-strategy-roadmap" },
      { label: "Custom LLM Development", desc: "Fine-tuned models for your domain", href: "/services/custom-llm-development" },
      { label: "AI Agents & Automation", desc: "Task-oriented autonomous agents", href: "/services/ai-agents-automation" },
      { label: "ML Ops & Infrastructure", desc: "Scalable model deployment", href: "/services/ml-ops-infrastructure" },
    ],
  },
  {
    heading: "Blockchain",
    Icon: Layers,
    items: [
      { label: "Smart Contract Development", desc: "Audited, gas-optimized contracts", href: "/services/smart-contract-development" },
      { label: "DeFi Protocol Design", desc: "DEX, lending & yield products", href: "/services/defi-protocol-design" },
      { label: "Layer 2 & Rollups", desc: "High-throughput scaling solutions", href: "/services/layer2-rollups" },
      { label: "NFT & Token Engineering", desc: "ERC-20, ERC-721, and beyond", href: "/services/nft-token-engineering" },
    ],
  },
  {
    heading: "Data & Analytics",
    Icon: BarChart3,
    items: [
      { label: "Data Platform Engineering", desc: "ETL pipelines & warehousing", href: "/services/data-platform-engineering" },
      { label: "Business Intelligence", desc: "Dashboards & real-time KPIs", href: "/services/business-intelligence" },
      { label: "Predictive Analytics", desc: "Forecasting models at scale", href: "/services/predictive-analytics" },
      { label: "Cloud Data Migration", desc: "AWS, GCP & Azure experts", href: "/services/cloud-data-migration" },
    ],
  },
  {
    heading: "Product Engineering",
    Icon: Code2,
    items: [
      { label: "Full-Stack Development", desc: "React, Next.js, Node & more", href: "/services/full-stack-development" },
      { label: "Mobile Applications", desc: "iOS, Android & cross-platform", href: "/services/mobile-applications" },
      { label: "API & Integrations", desc: "Headless & microservices", href: "/services/api-integrations" },
      { label: "QA & Testing", desc: "Automated end-to-end coverage", href: "/services/qa-testing" },
    ],
  },
];

type IndustryItem = { icon: LucideIcon; label: string; desc: string; href: string };

const industriesItemsData: IndustryItem[] = [
  { icon: Landmark, label: "Banking & Finance", desc: "Credit automation, KYC pipelines, and trading infrastructure for modern banks.", href: "/industries" },
  { icon: TrendingUp, label: "FinTech & Crypto", desc: "Wallets, DEXs, on/off-ramp solutions, and compliant token economies.", href: "/industries" },
  { icon: ShoppingBag, label: "eCommerce & Retail", desc: "AI-driven recommendations, inventory ops, and headless commerce stacks.", href: "/industries" },
  { icon: HeartPulse, label: "HealthTech", desc: "HIPAA-compliant data platforms, medical AI, and telehealth engineering.", href: "/industries" },
  { icon: Zap, label: "Energy & Sustainability", desc: "IoT data pipelines, carbon credit tokenization, and grid analytics.", href: "/industries" },
  { icon: Building2, label: "Enterprise & SaaS", desc: "Scalable B2B platforms, AI copilots, and multi-tenant architectures.", href: "/industries" },
];

type TechColumn = { heading: string; Icon: LucideIcon; items: MegaLink[] };

const technologiesColumnsData: TechColumn[] = [
  {
    heading: "AI & Machine Learning",
    Icon: Globe,
    items: [
      { label: "OpenAI / GPT-4o", desc: "Agents, copilots & RAG pipelines", href: "/technologies" },
      { label: "LangChain & LlamaIndex", desc: "LLM orchestration frameworks", href: "/technologies" },
      { label: "Hugging Face", desc: "Open-source model fine-tuning", href: "/technologies" },
      { label: "TensorFlow / PyTorch", desc: "Custom model training at scale", href: "/technologies" },
    ],
  },
  {
    heading: "Blockchain Stack",
    Icon: Layers,
    items: [
      { label: "Ethereum & EVM Chains", desc: "Solidity smart contracts & DApps", href: "/technologies" },
      { label: "Solana & Rust", desc: "High-performance on-chain programs", href: "/technologies" },
      { label: "Cosmos & Polkadot", desc: "Cross-chain interoperability", href: "/technologies" },
      { label: "Hardhat / Foundry", desc: "Contract testing & deployment", href: "/technologies" },
    ],
  },
  {
    heading: "Cloud & DevOps",
    Icon: Server,
    items: [
      { label: "AWS / GCP / Azure", desc: "Multi-cloud architecture", href: "/technologies" },
      { label: "Kubernetes & Docker", desc: "Container orchestration", href: "/technologies" },
      { label: "Terraform & Pulumi", desc: "Infrastructure as code", href: "/technologies" },
      { label: "CI/CD Pipelines", desc: "GitHub Actions, ArgoCD", href: "/technologies" },
    ],
  },
];

type ResourceCardItem = { Icon: LucideIcon; label: string; desc: string; href: string; tag: string };

const resourcesCardsData: ResourceCardItem[] = [
  { Icon: Newspaper, label: "Blog & Insights", desc: "Deep technical articles, industry trends, and engineering best practices written by our senior team.", href: "/resources", tag: "New articles weekly" },
  { Icon: BookOpen, label: "Whitepapers", desc: "Download in-depth research on AI adoption, blockchain scalability, and emerging tech for enterprise.", href: "/resources", tag: "Free downloads" },
  { Icon: Video, label: "Webinars & Events", desc: "Join live sessions with our engineers and thought leaders - or watch past talks on demand.", href: "/resources", tag: "Live & on-demand" },
  { Icon: MessageSquare, label: "AI Readiness Audit", desc: "A complimentary 1-hour review with a senior Vallorex engineer to map your AI transformation starting point.", href: "/contact?tab=booking", tag: "Free for enterprises" },
];

const resourcesBlogPostsData: { title: string; date: string; href: string }[] = [
  { title: "How GPT-4o Is Reshaping Enterprise Workflows in 2025", date: "Mar 28, 2025", href: "/resources" },
  { title: "On-Chain Identity: Building Verifiable Credential Systems", date: "Mar 15, 2025", href: "/resources" },
  { title: "Why Your RAG Pipeline Is Leaking Revenue", date: "Mar 2, 2025", href: "/resources" },
];

const resourcesViewAllArticles = { label: "View all articles", href: "/resources" };

type CompanyMegaItem = { Icon: LucideIcon; label: string; desc: string; href: string; tag?: string };

const companyMegaItemsData: CompanyMegaItem[] = [
  { Icon: Users, label: "About Vallorex", desc: "Our story, mission, and the values that drive every engagement we take on.", href: "/company" },
  { Icon: Briefcase, label: "Careers", desc: "Work on challenging AI and Blockchain problems with a focused, technical team.", tag: "We're hiring", href: "/careers" },
  { Icon: Phone, label: "Contact Us", desc: "Reach our team for partnerships, new projects, or press enquiries.", href: "/contact" },
  { Icon: ShieldCheck, label: "Trust & Security", desc: "Your IP and data are always protected. We sign NDAs on every engagement.", href: "/company#trust" },
];

const companyPartnerCta = {
  href: "/contact" as const,
  eyebrow: "Partner With Us",
  title: "Join our growing network of AI and Blockchain ventures.",
  linkLabel: "Start a conversation",
};

// ─── Mega Menu Data ──────────────────────────────────────────────────────────

const megaMenus: Record<string, React.ReactNode> = {

  /** SERVICES ──────────────────────────────────────────── */
  services: (
    <div className="grid grid-cols-12 py-8 gap-0 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="col-span-9 grid grid-cols-4 gap-6 pr-10 border-r border-slate-100">
        {servicesColumnsData.map((col) => (
          <div key={col.heading}>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-brand-blue"><col.Icon className="h-4 w-4" /></span>
              <p className="text-[10px] font-bold tracking-widest text-muted uppercase">{col.heading}</p>
            </div>
            <div className="space-y-1">
              {col.items.map((item) => (
                <Link key={item.label} href={item.href} className="group flex items-start gap-2.5 rounded-lg px-2.5 py-2 hover:bg-slate-50 transition-colors">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-[7px]" />
                  <div>
                    <p className="text-sm font-semibold text-midnight group-hover:text-brand-blue transition-colors leading-tight">{item.label}</p>
                    <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-3 pl-8 flex flex-col gap-4">
        <p className="text-[10px] font-bold tracking-widest text-muted uppercase">Why Vallorex</p>
        <div className="bg-gradient-to-br from-[#0A1628] to-[#0d2145] rounded-xl p-5 text-white flex flex-col gap-3">
          <span className="text-[10px] font-bold tracking-widest text-brand-blue uppercase">Flagship Service</span>
          <p className="text-base font-bold leading-snug">AI + Blockchain: The New Stack of Business</p>
          <p className="text-xs text-[#94A3B8] leading-relaxed">Most agencies pick one. We master both. See how our converged stack compresses time-to-market.</p>
          <Link href="/services" className="inline-flex items-center text-xs font-semibold text-brand-blue hover:underline mt-1">
            See Our Approach <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
        <div className="rounded-xl border border-slate-100 p-4 flex items-start gap-3">
          <Rocket className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-midnight">Free Technical Audit</p>
            <p className="text-xs text-muted mt-0.5 leading-relaxed">Get a senior engineer to review your current architecture - no strings attached.</p>
            <Link href="/contact?tab=booking" className="text-xs font-semibold text-brand-orange hover:underline flex items-center mt-2">
              Book yours <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 px-1">
          <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
          <p className="text-xs text-muted font-medium">3 project slots open this quarter</p>
        </div>
      </div>
    </div>
  ),

  /** INDUSTRIES ────────────────────────────────────────── */
  industries: (
    <div className="grid grid-cols-12 py-8 gap-0 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="col-span-8 grid grid-cols-3 gap-3 pr-10 border-r border-slate-100">
        {industriesItemsData.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.label} href={item.href} className="group flex flex-col gap-3 rounded-xl p-4 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/8 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-midnight group-hover:text-brand-blue transition-colors">{item.label}</p>
                <p className="text-xs text-muted mt-1 leading-relaxed">{item.desc}</p>
              </div>
              <span className="text-xs font-semibold text-brand-blue flex items-center opacity-0 group-hover:opacity-100 transition-opacity -mt-1">
                Explore <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </Link>
          );
        })}
      </div>
      <div className="col-span-4 pl-8">
        <p className="text-[10px] font-bold tracking-widest text-muted uppercase mb-5">Deep Domain Expertise</p>
        <p className="text-sm text-midnight font-semibold mb-2 leading-snug">We don&apos;t just code - we understand your market.</p>
        <p className="text-xs text-muted leading-relaxed mb-6">Our engineering teams are paired with industry specialists who know the regulatory landscape, compliance requirements, and competitive pressures you face daily.</p>
        <div className="space-y-3">
          {[
            { stat: "5+", label: "Industries Served" },
            { stat: "98%", label: "On-Time Delivery" },
            { stat: "20+", label: "Projects Delivered" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <span className="text-2xl font-extrabold text-brand-blue w-16">{s.stat}</span>
              <span className="text-sm text-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  /** TECHNOLOGIES ──────────────────────────────────────── */
  technologies: (
    <div className="grid grid-cols-12 py-8 gap-0 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="col-span-9 grid grid-cols-3 gap-8 pr-10 border-r border-slate-100">
        {technologiesColumnsData.map((col) => (
          <div key={col.heading}>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-brand-blue"><col.Icon className="h-4 w-4" /></span>
              <p className="text-[10px] font-bold tracking-widest text-muted uppercase">{col.heading}</p>
            </div>
            <div className="space-y-1">
              {col.items.map((item) => (
                <Link key={item.label} href={item.href} className="group flex items-start gap-2.5 rounded-lg px-2.5 py-2 hover:bg-slate-50 transition-colors">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-[7px]" />
                  <div>
                    <p className="text-sm font-semibold text-midnight group-hover:text-brand-blue transition-colors leading-tight">{item.label}</p>
                    <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-3 pl-8">
        <p className="text-[10px] font-bold tracking-widest text-muted uppercase mb-5">Our Philosophy</p>
        <div className="space-y-4">
          {[
            { icon: <Lock className="h-4 w-4 text-brand-blue" />, title: "Security-First", desc: "Every line of code is written with threat modeling in mind." },
            { icon: <GitBranch className="h-4 w-4 text-brand-blue" />, title: "Open Standards", desc: "We favour interoperable and auditable open protocols." },
            { icon: <Terminal className="h-4 w-4 text-brand-blue" />, title: "Performance Obsessed", desc: "We benchmark relentlessly. Slow is not an option." },
          ].map((t) => (
            <div key={t.title} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:border-brand-blue/30 transition-colors">
              <div className="mt-0.5">{t.icon}</div>
              <div>
                <p className="text-sm font-bold text-midnight">{t.title}</p>
                <p className="text-xs text-muted mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  /** RESOURCES ─────────────────────────────────────────── */
  resources: (
    <div className="grid grid-cols-12 py-8 gap-0 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="col-span-8 grid grid-cols-2 gap-4 pr-10 border-r border-slate-100">
        {resourcesCardsData.map((item) => {
          const CardIcon = item.Icon;
          return (
            <Link key={item.label} href={item.href} className="group flex items-start gap-4 rounded-xl p-4 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/8 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all flex-shrink-0">
                <CardIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-bold text-midnight group-hover:text-brand-blue transition-colors">{item.label}</p>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 rounded-full px-2 py-0.5">{item.tag}</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="col-span-4 pl-8">
        <p className="text-[10px] font-bold tracking-widest text-muted uppercase mb-4">Latest From The Blog</p>
        <div className="space-y-4">
          {resourcesBlogPostsData.map((post) => (
            <Link key={post.title} href={post.href} className="group flex flex-col gap-1 hover:bg-slate-50 rounded-lg p-3 -mx-3 transition-colors">
              <p className="text-sm font-semibold text-midnight group-hover:text-brand-blue transition-colors leading-snug">{post.title}</p>
              <p className="text-xs text-muted">{post.date}</p>
            </Link>
          ))}
          <Link href={resourcesViewAllArticles.href} className="inline-flex items-center text-xs font-semibold text-brand-blue hover:underline mt-1">
            {resourcesViewAllArticles.label} <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  ),

  /** COMPANY ───────────────────────────────────────────── */
  company: (
    <div className="grid grid-cols-12 py-8 gap-0 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="col-span-8 grid grid-cols-2 gap-4 pr-10 border-r border-slate-100">
        {companyMegaItemsData.map((item) => {
          const ItemIcon = item.Icon;
          return (
            <Link key={item.label} href={item.href} className="group flex items-start gap-4 rounded-xl p-4 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/8 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all flex-shrink-0">
                <ItemIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-bold text-midnight group-hover:text-brand-blue transition-colors">{item.label}</p>
                  {item.tag && <span className="text-[9px] font-bold uppercase tracking-wider text-green-600 bg-green-50 rounded-full px-2 py-0.5">{item.tag}</span>}
                </div>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="col-span-4 pl-8 flex flex-col gap-5">
        <div>
          <p className="text-[10px] font-bold tracking-widest text-muted uppercase mb-4">Trusted By</p>
          <div className="grid grid-cols-3 gap-3">
            {["Series A", "DeFi Protocols", "Scale-ups", "Web3 Founders", "Startups", "Growth-Stage"].map((badge) => (
              <div key={badge} className="flex items-center justify-center rounded-lg border border-slate-200 px-2 py-2 text-[10px] font-bold text-muted text-center leading-tight">
                {badge}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#0A1628] to-[#0d2145] rounded-xl p-5 text-white">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">{companyPartnerCta.eyebrow}</p>
          <p className="text-sm font-bold mb-2 leading-snug">{companyPartnerCta.title}</p>
          <Link href={companyPartnerCta.href} className="inline-flex items-center text-xs font-semibold text-white/80 hover:text-brand-blue transition-colors">
            {companyPartnerCta.linkLabel} <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  ),
};

const menuKey = (name: string) => name.toLowerCase().replace(/ /g, "-");

const LOGO_LIGHT = "/vallorex-logo.png";
const LOGO_DARK = "/vallorex-logo-dark.png";
/** Reference aspect (dark logo); Next/Image intrinsic ratio - display locked via CSS */
const LOGO_REF_WIDTH = 560;
const LOGO_REF_HEIGHT = 156;

// ─── Navbar Component ────────────────────────────────────────────────────────

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordionKey, setMobileAccordionKey] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileDrawerRef = useRef<HTMLElement | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const mobileServicesItems = useMemo(
    () => servicesColumnsData.flatMap((col) => col.items),
    []
  );

  const mobileTechnologiesItems = useMemo(
    () => technologiesColumnsData.flatMap((col) => col.items),
    []
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileAccordionKey(null);
  }, [pathname]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileAccordionKey(null);
  }, []);

  const toggleMobileAccordion = useCallback((key: string) => {
    setMobileAccordionKey((k) => (k === key ? null : key));
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    // Close on browser back.
    const handlePopState = () => closeMobileMenu();
    window.addEventListener("popstate", handlePopState);

    // Focus trap inside the drawer.
    lastActiveElementRef.current = document.activeElement as HTMLElement | null;

    const getFocusable = () => {
      const root = mobileDrawerRef.current;
      if (!root) return [];
      const nodes = root.querySelectorAll<HTMLElement>(
        [
          "a[href]",
          "button:not([disabled])",
          "input:not([disabled])",
          "select:not([disabled])",
          "textarea:not([disabled])",
          "[tabindex]:not([tabindex='-1'])",
        ].join(",")
      );
      return Array.from(nodes).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
    };

    // Move focus into drawer on open.
    requestAnimationFrame(() => {
      const focusables = getFocusable();
      (focusables[0] ?? mobileDrawerRef.current)?.focus?.();
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
        return;
      }

      if (e.key !== "Tab") return;

      const focusables = getFocusable();
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (!active || active === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
      lastActiveElementRef.current?.focus?.();
      lastActiveElementRef.current = null;
    };
  }, [mobileMenuOpen, closeMobileMenu]);

  const navLinks = [
    { name: "Services", hasDropdown: true, mobileAccordion: true as const },
    { name: "Industries", hasDropdown: true, mobileAccordion: true as const },
    { name: "Technologies", hasDropdown: true, mobileAccordion: true as const },
    { name: "Case Studies", hasDropdown: false, mobileAccordion: false as const },
    { name: "Resources", hasDropdown: true, mobileAccordion: true as const },
    { name: "Company", hasDropdown: true, mobileAccordion: true as const },
  ];

  const linkClosesMenu = {
    onClick: closeMobileMenu,
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 w-full h-[88px] flex items-center transition-all duration-500",
          mobileMenuOpen ? "z-[100]" : "z-40",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
            : "bg-midnight shadow-none"
        )}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] flex items-center justify-between w-full">
          <Link
            href="/"
            className="relative z-50 inline-flex h-[32px] shrink-0 items-center md:h-[42px] lg:h-[52px]"
            aria-label="Vallorex Technology home"
          >
          <span className="relative block h-[32px] w-auto shrink-0 aspect-[560/156] md:h-[42px] lg:h-[52px]">
            <Image
              src={LOGO_DARK}
              alt=""
              width={LOGO_REF_WIDTH}
              height={LOGO_REF_HEIGHT}
              sizes="(max-width: 767px) 115px, (max-width: 1023px) 151px, 187px"
              className={cn(
                "absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-500 ease-in-out",
                isScrolled ? "pointer-events-none opacity-0" : "opacity-100"
              )}
              priority
              aria-hidden
            />
            <Image
              src={LOGO_LIGHT}
              alt=""
              width={LOGO_REF_WIDTH}
              height={LOGO_REF_HEIGHT}
              sizes="(max-width: 767px) 115px, (max-width: 1023px) 151px, 187px"
              className={cn(
                "absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-500 ease-in-out",
                isScrolled ? "opacity-100" : "pointer-events-none opacity-0"
              )}
              priority
              aria-hidden
            />
          </span>
          </Link>

        <nav className="hidden lg:flex items-center h-full gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative h-full flex items-center"
              onMouseEnter={() => link.hasDropdown ? setActiveMenu(menuKey(link.name)) : setActiveMenu(null)}
            >
              <Link
                href={`/${menuKey(link.name)}`}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-all duration-300 h-[88px]",
                  isScrolled
                    ? activeMenu === menuKey(link.name) || pathname === `/${menuKey(link.name)}`
                      ? "text-midnight"
                      : "text-slate-500 hover:text-midnight"
                    : activeMenu === menuKey(link.name) || pathname === `/${menuKey(link.name)}`
                      ? "text-white"
                      : "text-[#94A3B8] hover:text-white"
                )}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 ml-0.5 transition-transform duration-200",
                      activeMenu === menuKey(link.name) && "rotate-180"
                    )}
                  />
                )}
              </Link>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button asChild className={cn(
            "rounded-full px-6 h-10 text-sm font-semibold transition-all duration-300",
            isScrolled
              ? "bg-brand-orange hover:bg-[#E06612] text-white shadow-md shadow-brand-orange/20"
              : "bg-brand-orange hover:bg-[#E06612] text-white shadow-lg shadow-brand-orange/20"
          )}>
            <Link href="/contact?tab=booking">Get a Free Consultation</Link>
          </Button>
        </div>

        {!mobileMenuOpen ? (
          <div className="lg:hidden flex items-center z-[70]">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-expanded={false}
              aria-controls="mobile-nav-drawer"
              onClick={() => setMobileMenuOpen(true)}
              className={isScrolled ? "text-midnight" : "text-white"}
            >
              <Menu className="h-6 w-6" aria-hidden />
            </Button>
          </div>
        ) : null}
      </div>

        <AnimatePresence>
          {activeMenu && megaMenus[activeMenu] && (
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="absolute top-[88px] left-0 right-0 w-full bg-white border-t-[3px] border-t-brand-blue shadow-[0_20px_60px_rgba(0,0,0,0.13)] z-50 pointer-events-auto"
              onMouseEnter={() => setActiveMenu(activeMenu)}
            >
              {megaMenus[activeMenu]}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile drawer (kept outside header to preserve sticky behavior) */}
      <div className="lg:hidden">
        {/* Overlay (remaining 20%) */}
        <div
          className={cn(
            "fixed inset-0 bg-black/50 backdrop-blur-sm z-[150] transition-opacity duration-300 ease-in-out",
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={closeMobileMenu}
          aria-hidden
        />

        {/* Drawer (80%, max 320px) */}
        <aside
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          ref={(node) => {
            mobileDrawerRef.current = node;
          }}
          tabIndex={-1}
          className={cn(
            "fixed top-0 right-0 z-[160] flex h-[100vh] w-4/5 max-w-xs flex-col bg-white",
            "transform transition-transform duration-300 ease-in-out",
            mobileMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
          )}
        >
              <div className="flex h-[88px] flex-shrink-0 items-center justify-between border-b border-[#e5e7eb] bg-white px-4 sm:px-5">
                <Link
                  href="/"
                  className="flex h-9 max-h-10 items-center sm:h-10"
                  onClick={closeMobileMenu}
                  aria-label="Vallorex Technology home"
                >
                  <Image
                    src={LOGO_LIGHT}
                    alt=""
                    width={LOGO_REF_WIDTH}
                    height={LOGO_REF_HEIGHT}
                    sizes="(max-width: 640px) 200px, 220px"
                    className="h-full w-auto max-w-[min(100%,12rem)] object-contain object-left sm:max-w-[13rem]"
                    aria-hidden
                  />
                </Link>
                <button
                  type="button"
                  aria-label="Close navigation"
                  onClick={closeMobileMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-[#0a0f1e] transition-colors hover:bg-slate-100"
                >
                  <span className="text-xl font-light leading-none" aria-hidden>✕</span>
                </button>
              </div>

              <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-white py-4">
                <ul className="flex flex-col gap-0">
                  {navLinks.map((link) => {
                    const key = menuKey(link.name);

                    if (!link.mobileAccordion) {
                      return (
                        <li key={link.name} className="border-b border-[#e5e7eb]">
                          <Link
                            href={`/${key}`}
                            {...linkClosesMenu}
                            className="block py-3 pl-4 pr-4 text-base font-medium text-gray-900 dark:text-white"
                          >
                            {link.name}
                          </Link>
                        </li>
                      );
                    }

                    const open = mobileAccordionKey === key;

                    let subItems: { label: string; href: string }[] = [];
                    if (key === "services") {
                      subItems = mobileServicesItems.map((i) => ({ label: i.label, href: i.href }));
                    } else if (key === "industries") {
                      subItems = industriesItemsData.map((i) => ({ label: i.label, href: i.href }));
                    } else if (key === "technologies") {
                      subItems = mobileTechnologiesItems.map((i) => ({ label: i.label, href: i.href }));
                    } else if (key === "resources") {
                      subItems = [
                        ...resourcesCardsData.map((i) => ({ label: i.label, href: i.href })),
                        ...resourcesBlogPostsData.map((p) => ({ label: p.title, href: p.href })),
                        { label: resourcesViewAllArticles.label, href: resourcesViewAllArticles.href },
                      ];
                    } else if (key === "company") {
                      subItems = [
                        ...companyMegaItemsData.map((i) => ({ label: i.label, href: i.href })),
                        { label: companyPartnerCta.linkLabel, href: companyPartnerCta.href },
                      ];
                    }

                    return (
                      <li key={link.name} className="border-b border-[#e5e7eb]">
                        {/* Split tap targets: link navigates, chevron toggles */}
                        <div className="flex items-center justify-between">
                          <Link
                            href={`/${key}`}
                            onClick={closeMobileMenu}
                            className="flex-1 py-3 pl-4 text-base font-medium text-gray-900 dark:text-white"
                          >
                            {link.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => toggleMobileAccordion(key)}
                            aria-expanded={open}
                            aria-label={`Toggle ${link.name} menu`}
                            className="p-3 pr-4"
                          >
                            <ChevronDown
                              className={cn(
                                "w-5 h-5 transition-transform duration-200 text-gray-900",
                                open ? "rotate-180" : ""
                              )}
                              aria-hidden
                            />
                          </button>
                        </div>

                        <div
                          className={cn(
                            "overflow-hidden transition-[max-height] duration-300 ease-out motion-reduce:transition-none",
                            open ? "max-h-[4000px]" : "max-h-0"
                          )}
                        >
                          {open && (
                            <div className="pl-6 border-l-2 border-orange-500 ml-4 mb-2">
                              {subItems.map((item) => (
                                <Link
                                  key={`${key}:${item.label}`}
                                  href={item.href}
                                  {...linkClosesMenu}
                                  className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="flex-shrink-0 border-t border-[#e5e7eb] bg-white px-4 pb-8 pt-5 sm:px-5">
                <Button
                  asChild
                  className="h-12 w-full rounded-full bg-brand-orange text-base font-semibold text-white hover:bg-[#E06612]"
                >
                  <Link href="/contact?tab=booking" {...linkClosesMenu}>
                    Get a Free Consultation
                  </Link>
                </Button>
              </div>
            </aside>
      </div>
    </>
  );
}
