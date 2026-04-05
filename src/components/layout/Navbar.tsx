"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown, Menu, X, ArrowRight,
  Cpu, ShieldCheck, Network, BarChart3, Cloud,
  Layers, Brain, Code2, Rocket, Building2,
  Landmark, TrendingUp, ShoppingBag, HeartPulse, Zap,
  Globe, Server, Lock, GitBranch, Terminal,
  BookOpen, Newspaper, Video, MessageSquare,
  Users, Award, Briefcase, MapPin, Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// ─── Mega Menu Data ──────────────────────────────────────────────────────────

const megaMenus: Record<string, React.ReactNode> = {

  /** SERVICES ──────────────────────────────────────────── */
  services: (
    <div className="grid grid-cols-12 py-8 gap-0 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Left: 4 service pillars */}
      <div className="col-span-9 grid grid-cols-4 gap-6 pr-10 border-r border-slate-100">
        {[
          {
            icon: <Brain className="h-4 w-4" />,
            heading: "AI Engineering",
            items: [
              { label: "AI Strategy & Roadmap", desc: "Tailored AI transformation plans" },
              { label: "Custom LLM Development", desc: "Fine-tuned models for your domain" },
              { label: "AI Agents & Automation", desc: "Task-oriented autonomous agents" },
              { label: "ML Ops & Infrastructure", desc: "Scalable model deployment" },
            ],
          },
          {
            icon: <Layers className="h-4 w-4" />,
            heading: "Blockchain",
            items: [
              { label: "Smart Contract Development", desc: "Audited, gas-optimized contracts" },
              { label: "DeFi Protocol Design", desc: "DEX, lending & yield products" },
              { label: "Layer 2 & Rollups", desc: "High-throughput scaling solutions" },
              { label: "NFT & Token Engineering", desc: "ERC-20, ERC-721, and beyond" },
            ],
          },
          {
            icon: <BarChart3 className="h-4 w-4" />,
            heading: "Data & Analytics",
            items: [
              { label: "Data Platform Engineering", desc: "ETL pipelines & warehousing" },
              { label: "Business Intelligence", desc: "Dashboards & real-time KPIs" },
              { label: "Predictive Analytics", desc: "Forecasting models at scale" },
              { label: "Cloud Data Migration", desc: "AWS, GCP & Azure experts" },
            ],
          },
          {
            icon: <Code2 className="h-4 w-4" />,
            heading: "Product Engineering",
            items: [
              { label: "Full-Stack Development", desc: "React, Next.js, Node & more" },
              { label: "Mobile Applications", desc: "iOS, Android & cross-platform" },
              { label: "API & Integrations", desc: "Headless & microservices" },
              { label: "QA & Testing", desc: "Automated end-to-end coverage" },
            ],
          },
        ].map((col) => (
          <div key={col.heading}>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-brand-blue">{col.icon}</span>
              <p className="text-[10px] font-bold tracking-widest text-muted uppercase">{col.heading}</p>
            </div>
            <div className="space-y-1">
              {col.items.map((item) => (
                <Link key={item.label} href="#" className="group flex items-start gap-2.5 rounded-lg px-2.5 py-2 hover:bg-slate-50 transition-colors">
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
      {/* Right: CTA panel */}
      <div className="col-span-3 pl-8 flex flex-col gap-4">
        <p className="text-[10px] font-bold tracking-widest text-muted uppercase">Why Vallorex</p>
        <div className="bg-gradient-to-br from-[#0A1628] to-[#0d2145] rounded-xl p-5 text-white flex flex-col gap-3">
          <span className="text-[10px] font-bold tracking-widest text-brand-blue uppercase">Flagship Service</span>
          <p className="text-base font-bold leading-snug">AI + Blockchain: The New Stack of Business</p>
          <p className="text-xs text-[#94A3B8] leading-relaxed">Most agencies pick one. We master both. See how our converged stack compresses time-to-market.</p>
          <Link href="#" className="inline-flex items-center text-xs font-semibold text-brand-blue hover:underline mt-1">
            See Our Approach <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
        <div className="rounded-xl border border-slate-100 p-4 flex items-start gap-3">
          <Rocket className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-midnight">Free Technical Audit</p>
            <p className="text-xs text-muted mt-0.5 leading-relaxed">Get a senior engineer to review your current architecture — no strings attached.</p>
            <Link href="#" className="text-xs font-semibold text-brand-orange hover:underline flex items-center mt-2">
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
        {[
          { icon: <Landmark className="h-5 w-5" />, label: "Banking & Finance", desc: "Credit automation, KYC pipelines, and trading infrastructure for modern banks." },
          { icon: <TrendingUp className="h-5 w-5" />, label: "FinTech & Crypto", desc: "Wallets, DEXs, on/off-ramp solutions, and compliant token economies." },
          { icon: <ShoppingBag className="h-5 w-5" />, label: "eCommerce & Retail", desc: "AI-driven recommendations, inventory ops, and headless commerce stacks." },
          { icon: <HeartPulse className="h-5 w-5" />, label: "HealthTech", desc: "HIPAA-compliant data platforms, medical AI, and telehealth engineering." },
          { icon: <Zap className="h-5 w-5" />, label: "Energy & Sustainability", desc: "IoT data pipelines, carbon credit tokenization, and grid analytics." },
          { icon: <Building2 className="h-5 w-5" />, label: "Enterprise & SaaS", desc: "Scalable B2B platforms, AI copilots, and multi-tenant architectures." },
        ].map((item) => (
          <Link key={item.label} href="#" className="group flex flex-col gap-3 rounded-xl p-4 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/8 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-bold text-midnight group-hover:text-brand-blue transition-colors">{item.label}</p>
              <p className="text-xs text-muted mt-1 leading-relaxed">{item.desc}</p>
            </div>
            <span className="text-xs font-semibold text-brand-blue flex items-center opacity-0 group-hover:opacity-100 transition-opacity -mt-1">
              Explore <ArrowRight className="ml-1 h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
      <div className="col-span-4 pl-8">
        <p className="text-[10px] font-bold tracking-widest text-muted uppercase mb-5">Deep Domain Expertise</p>
        <p className="text-sm text-midnight font-semibold mb-2 leading-snug">We don't just code — we understand your market.</p>
        <p className="text-xs text-muted leading-relaxed mb-6">Our engineering teams are paired with industry specialists who know the regulatory landscape, compliance requirements, and competitive pressures you face daily.</p>
        <div className="space-y-3">
          {[
            { stat: "30+", label: "Industries Served" },
            { stat: "98%", label: "On-Time Delivery" },
            { stat: "$2B+", label: "Client Value Unlocked" },
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
        {[
          {
            icon: <Globe className="h-4 w-4" />,
            heading: "AI & Machine Learning",
            items: [
              { label: "OpenAI / GPT-4o", desc: "Agents, copilots & RAG pipelines" },
              { label: "LangChain & LlamaIndex", desc: "LLM orchestration frameworks" },
              { label: "Hugging Face", desc: "Open-source model fine-tuning" },
              { label: "TensorFlow / PyTorch", desc: "Custom model training at scale" },
            ],
          },
          {
            icon: <Layers className="h-4 w-4" />,
            heading: "Blockchain Stack",
            items: [
              { label: "Ethereum & EVM Chains", desc: "Solidity smart contracts & DApps" },
              { label: "Solana & Rust", desc: "High-performance on-chain programs" },
              { label: "Cosmos & Polkadot", desc: "Cross-chain interoperability" },
              { label: "Hardhat / Foundry", desc: "Contract testing & deployment" },
            ],
          },
          {
            icon: <Server className="h-4 w-4" />,
            heading: "Cloud & DevOps",
            items: [
              { label: "AWS / GCP / Azure", desc: "Multi-cloud architecture" },
              { label: "Kubernetes & Docker", desc: "Container orchestration" },
              { label: "Terraform & Pulumi", desc: "Infrastructure as code" },
              { label: "CI/CD Pipelines", desc: "GitHub Actions, ArgoCD" },
            ],
          },
        ].map((col) => (
          <div key={col.heading}>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-brand-blue">{col.icon}</span>
              <p className="text-[10px] font-bold tracking-widest text-muted uppercase">{col.heading}</p>
            </div>
            <div className="space-y-1">
              {col.items.map((item) => (
                <Link key={item.label} href="#" className="group flex items-start gap-2.5 rounded-lg px-2.5 py-2 hover:bg-slate-50 transition-colors">
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
        {[
          { icon: <Newspaper className="h-5 w-5" />, label: "Blog & Insights", desc: "Deep technical articles, industry trends, and engineering best practices written by our senior team.", tag: "New articles weekly" },
          { icon: <BookOpen className="h-5 w-5" />, label: "Whitepapers", desc: "Download in-depth research on AI adoption, blockchain scalability, and emerging tech for enterprise.", tag: "Free downloads" },
          { icon: <Video className="h-5 w-5" />, label: "Webinars & Events", desc: "Join live sessions with our engineers and thought leaders — or watch past talks on demand.", tag: "Live & on-demand" },
          { icon: <MessageSquare className="h-5 w-5" />, label: "AI Readiness Audit", desc: "A complimentary 1-hour review with a senior Vallorex engineer to map your AI transformation starting point.", tag: "Free for enterprises" },
        ].map((item) => (
          <Link key={item.label} href="#" className="group flex items-start gap-4 rounded-xl p-4 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/8 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-bold text-midnight group-hover:text-brand-blue transition-colors">{item.label}</p>
                <span className="text-[9px] font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 rounded-full px-2 py-0.5">{item.tag}</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="col-span-4 pl-8">
        <p className="text-[10px] font-bold tracking-widest text-muted uppercase mb-4">Latest From The Blog</p>
        <div className="space-y-4">
          {[
            { title: "How GPT-4o Is Reshaping Enterprise Workflows in 2025", date: "Mar 28, 2025" },
            { title: "On-Chain Identity: Building Verifiable Credential Systems", date: "Mar 15, 2025" },
            { title: "Why Your RAG Pipeline Is Leaking Revenue", date: "Mar 2, 2025" },
          ].map((post) => (
            <Link key={post.title} href="#" className="group flex flex-col gap-1 hover:bg-slate-50 rounded-lg p-3 -mx-3 transition-colors">
              <p className="text-sm font-semibold text-midnight group-hover:text-brand-blue transition-colors leading-snug">{post.title}</p>
              <p className="text-xs text-muted">{post.date}</p>
            </Link>
          ))}
          <Link href="#" className="inline-flex items-center text-xs font-semibold text-brand-blue hover:underline mt-1">
            View all articles <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  ),

  /** COMPANY ───────────────────────────────────────────── */
  company: (
    <div className="grid grid-cols-12 py-8 gap-0 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="col-span-8 grid grid-cols-2 gap-4 pr-10 border-r border-slate-100">
        {[
          { icon: <Users className="h-5 w-5" />, label: "About Vallorex", desc: "Our story, mission, and the values that drive every engagement we take on." },
          { icon: <Award className="h-5 w-5" />, label: "Leadership Team", desc: "Meet the engineers, strategists, and operators building the future with our clients." },
          { icon: <Briefcase className="h-5 w-5" />, label: "Careers", desc: "Join a world-class team working on the most ambitious deep-tech projects in the world.", tag: "We're hiring" },
          { icon: <MapPin className="h-5 w-5" />, label: "Offices & Locations", desc: "Distributed-first with offices in New York, London, Singapore, and remote teams worldwide." },
          { icon: <Phone className="h-5 w-5" />, label: "Contact Us", desc: "Reach our team for partnerships, new projects, or press enquiries." },
          { icon: <ShieldCheck className="h-5 w-5" />, label: "Trust & Security", desc: "ISO 27001 certified. SOC 2 Type II compliant. Your IP and data are always protected." },
        ].map((item) => (
          <Link key={item.label} href="#" className="group flex items-start gap-4 rounded-xl p-4 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/8 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-bold text-midnight group-hover:text-brand-blue transition-colors">{item.label}</p>
                {item.tag && <span className="text-[9px] font-bold uppercase tracking-wider text-green-600 bg-green-50 rounded-full px-2 py-0.5">{item.tag}</span>}
              </div>
              <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="col-span-4 pl-8 flex flex-col gap-5">
        <div>
          <p className="text-[10px] font-bold tracking-widest text-muted uppercase mb-4">Trusted By</p>
          <div className="grid grid-cols-3 gap-3">
            {["Series A", "Fortune 500", "Gov't Contracts", "DeFi Protocols", "Scale-ups", "Web3 Founders"].map((badge) => (
              <div key={badge} className="flex items-center justify-center rounded-lg border border-slate-200 px-2 py-2 text-[10px] font-bold text-muted text-center leading-tight">
                {badge}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#0A1628] to-[#0d2145] rounded-xl p-5 text-white">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">Partner With Us</p>
          <p className="text-sm font-bold mb-2 leading-snug">Join 30+ companies building the next generation of tech.</p>
          <Link href="#" className="inline-flex items-center text-xs font-semibold text-white/80 hover:text-brand-blue transition-colors">
            Start a conversation <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  ),
};

// ─── Navbar Component ────────────────────────────────────────────────────────

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", hasDropdown: true },
    { name: "Industries", hasDropdown: true },
    { name: "Technologies", hasDropdown: true },
    { name: "Case Studies", hasDropdown: false },
    { name: "Resources", hasDropdown: true },
    { name: "Company", hasDropdown: true },
  ];

  const menuKey = (name: string) => name.toLowerCase().replace(" ", "-");

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full h-[88px] flex items-center transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          : "bg-midnight shadow-none"
      )}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50">
          <Image
            src="/Logo.png"
            alt="Vallorex Technology"
            width={200}
            height={80}
            className="h-[68px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
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

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button className={cn(
            "rounded-full px-6 h-10 text-sm font-semibold transition-all duration-300",
            isScrolled
              ? "bg-brand-orange hover:bg-[#E06612] text-white shadow-md shadow-brand-orange/20"
              : "bg-brand-orange hover:bg-[#E06612] text-white shadow-lg shadow-brand-orange/20"
          )}>
            Get a Free Consultation
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center z-50">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={isScrolled ? "text-midnight" : "text-white"}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* ─── Mega Menu Panel ─── */}
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

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="lg:hidden fixed top-[88px] right-0 bottom-0 w-[80%] max-w-sm bg-midnight border-l border-border/10 shadow-2xl z-40 flex flex-col pt-4 overflow-y-auto"
          >
            <div className="px-6 flex flex-col gap-6 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={`/${menuKey(link.name)}`}
                  className="text-lg font-medium text-white flex justify-between items-center py-2 border-b border-white/5"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="h-5 w-5 text-[#94A3B8]" />}
                </Link>
              ))}
              <div className="mt-4 pt-6 border-t border-border/20">
                <Button className="w-full rounded-full bg-brand-orange hover:bg-[#E06612] text-white h-12 text-base font-semibold">
                  Get a Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
