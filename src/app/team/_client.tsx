"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { Button } from "@/components/ui/button";

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ═══════ DATA ═══════ */

const founders = [
  {
    name: "Shaayan Shaikh", title: "Co-Founder & CEO", initials: "SS",
    bio: "Blockchain architect with 5+ years building production Web3 systems from zero to one. Co-founder of Vallorex and the technical force behind our blockchain and Web3 practice covering smart contracts, DeFi infrastructure, RWA architecture, and AI-assisted on-chain pipelines. Has delivered end-to-end across 4+ organizations, including institutional DeFi products and cross-border payment ecosystems.",
    tags: ["Smart Contracts", "DeFi & RWA", "Web3 Systems", "AI + Blockchain"], linkedin: "https://www.linkedin.com/in/shaayan-io/",
    image: "/images/team/shaayan-shaikh.png",
  },
  {
    name: "Sahal Shaikh", title: "Co-Founder & Head of Product Engineering", initials: "SS",
    bio: "Full-stack engineer and co-founder leading Vallorex's product delivery practice. Specializes in building scalable MERN-stack applications, architecting clean backend systems, and shipping production-ready products end-to-end. Brings hands-on experience across the full software development lifecycle from scoping and architecture to deployment.",
    tags: ["MERN Stack", "DevOps & CI/CD", "Product Delivery"], linkedin: "https://www.linkedin.com/in/sahal-shaikh/",
    image: "/images/team/sahal-shaikh.jpg",
  },
];

const teamLeads = [
  {
    name: "Usama Patel", title: "Head of Business Growth & Strategic Partnerships", initials: "UP",
    bio: "Helps turn opportunities into structured paths for sales, execution, and long-term business expansion. Works closely with startups to translate business problems into scalable AI and blockchain solutions, ensuring the right systems are built from day one.",
    tags: ["Business Growth", "Strategic Partnerships", "Technical Solutions"], linkedin: "https://www.linkedin.com/in/usama-vallorex/",
    image: "/images/team/usama.png",
  },
  {
    name: "Shamim Patel", title: "Software Engineer", initials: "SP",
    bio: "Leverages 6+ years of IT experience and a .NET background to bring a technical lens to solution discovery. Specializes in translating workflow challenges into practical AI automation and internal tool opportunities, helping businesses bridge the gap between operational pain and commercially useful solution direction.",
    tags: ["Software Development", "Solution Discovery", "Workflow Automation"], linkedin: "https://www.linkedin.com/in/shamimbanu-patel-722134402/",
    image: "/images/team/samim-banu.png",
  },
  {
    name: "Atib Shaikh", title: "Head of Sales", initials: "AS",
    bio: "Helps founders and business teams turn AI ideas into clear, buildable solutions. Focuses on early-stage AI discovery, scoping, and bridging business goals with practical AI execution, ensuring the right problem is defined before development begins.",
    tags: ["AI Discovery", "Solution Scoping", "B2B Sales"], linkedin: "https://www.linkedin.com/in/atib-vallorex/",
    image: "/images/team/atib-shaikh.jpg",
  },
  {
    name: "Sufiyan Shaikh", title: "Senior AI Business Development & Strategic Partnerships", initials: "SS",
    bio: "Explores, scopes, and advances custom AI solutions aligned with commercial priorities. Turns business conversations into solution opportunities across custom AI agents and workflow automation, focusing on moving businesses beyond generic curiosity toward practical execution.",
    tags: ["Strategic Partnerships", "AI Development", "Solution Scoping"], linkedin: "https://www.linkedin.com/in/sufiyan-vallorex/",
    image: "/images/team/sufiyan.png",
  },
  {
    name: "Arman Shah", title: "Business Development Executive", initials: "AS",
    bio: "Supports early stages of business development through targeted market research, lead generation, and opportunity discovery for custom AI solutions. Focuses on identifying how businesses can practically apply AI agents and workflow automation to improve efficiency.",
    tags: ["Business Development", "Market Research", "Lead Generation"], linkedin: "https://www.linkedin.com/in/arman-l-ai-business-development-vallorex-646311287/",
    image: "/images/team/arman.jpg",
  },
  {
    name: "Mukund Sharma", title: "Business Development Executive", initials: "MS",
    bio: "Focuses on AI growth strategy and opportunity mapping to help companies move beyond generic AI interest toward high-impact use cases. Brings a strategy-first lens to AI conversations, aligning business models and operational bottlenecks with the right AI solution direction.",
    tags: ["AI Growth Strategy", "Opportunity Mapping", "Solution Positioning"], linkedin: "https://www.linkedin.com/in/mukund-vallorex/",
    image: "/images/team/mukund.png",
  }
];

/* ═══════ SUB-COMPONENTS ═══════ */

function TagBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-blue/10 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold text-brand-blue whitespace-nowrap">
      {label}
    </span>
  );
}

function LinkedInButton({ href, name, size = "default" }: { href: string; name: string; size?: "default" | "small" }) {
  const sizeClasses = size === "small" ? "w-7 h-7" : "w-8 h-8 sm:w-9 sm:h-9";
  const iconClasses = size === "small" ? "w-3 h-3" : "w-3.5 h-3.5 sm:w-4 sm:h-4";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} LinkedIn`}
      className={`${sizeClasses} rounded-full border border-border flex items-center justify-center text-muted hover:text-midnight hover:border-[#CBD5E1] hover:bg-slate-50 transition-all duration-200 flex-shrink-0`}
    >
      <LinkedinIcon className={iconClasses} />
    </a>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-4 mb-10"
    >
      <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-brand-blue uppercase whitespace-nowrap">
        {label}
      </span>
      <div className="h-px flex-1 bg-border/60" />
    </motion.div>
  );
}

/* ═══════ MAIN PAGE ═══════ */

export default function TeamPageClient() {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* ─── HERO (dark, matching /company) ─── */}
      <section className="relative w-full pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40 bg-[#0A0F1E] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[10%] left-[-5%] w-[60vw] h-[60vw] max-w-[800px] bg-brand-blue/8 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[700px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-[860px] mx-auto text-center">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.06] border border-white/10 px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">Our Team</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-[38px] sm:text-[50px] md:text-[62px] lg:text-[74px] font-extrabold tracking-tight leading-[1.06] mb-8">
              <span className="block text-white">The People You&apos;re</span>
              <span className="block bg-gradient-to-r from-brand-blue via-blue-400 to-brand-blue bg-clip-text text-transparent">Actually Working With.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-[#94A3B8] max-w-[660px] mx-auto leading-relaxed mb-10">
              Every person on this page has shipped production systems. We don&apos;t add headcount for appearances you&apos;ll work directly with the engineers and leads you see here.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-brand-blue hover:bg-brand-blue-hover text-white rounded-full px-8 h-12 text-sm font-bold shadow-lg shadow-brand-blue/20 transition-all hover:scale-[1.03] active:scale-95 group">
                <Link href="/contact">Partner With Us<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button asChild className="border-white/20 text-white hover:bg-white/10 bg-transparent border rounded-full px-8 h-12 text-sm font-bold transition-all">
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOUNDERS (light) ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <SectionDivider label="Founders" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {founders.map((founder, index) => (
              <motion.div key={founder.initials}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                className="group bg-white border border-border/80 rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgb(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)]"
              >
                <div className="flex items-start gap-5 sm:gap-6">
                  {founder.image ? (
                    <div className="flex-shrink-0 w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-full overflow-hidden border border-border/60 relative">
                      <Image src={founder.image} alt={`${founder.name} – ${founder.title}`} fill className="object-cover object-top" />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] border border-border/60 flex items-center justify-center">
                      <span className="text-xl sm:text-2xl font-bold text-[#94A3B8] select-none">{founder.initials}</span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-midnight leading-snug">{founder.name}</h3>
                        <p className="text-[13px] sm:text-sm text-muted mt-0.5">{founder.title}</p>
                      </div>
                      <LinkedInButton href={founder.linkedin} name={founder.name} />
                    </div>
                    <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed mt-3 mb-4">{founder.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {founder.tags.map((tag) => (<TagBadge key={tag} label={tag} />))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM LEADS (light alt bg) ─── */}
      <section className="pb-24 md:pb-32 pt-4 bg-[#FAFAFA] border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] pt-16">
          <SectionDivider label="Team Leads" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {teamLeads.map((lead, index) => (
              <motion.div key={lead.initials}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="group bg-white border border-border/80 rounded-2xl p-6 shadow-[0_4px_24px_rgb(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  {lead.image ? (
                    <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border border-border/60 relative">
                      <Image src={lead.image} alt={`${lead.name} – ${lead.title}`} fill className="object-cover object-top" />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] border border-border/60 flex items-center justify-center">
                      <span className="text-base font-bold text-[#94A3B8] select-none">{lead.initials}</span>
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] sm:text-base font-semibold text-midnight leading-snug">{lead.name}</h3>
                    <p className="text-[12px] sm:text-[13px] text-muted mt-0.5">{lead.title}</p>
                  </div>
                </div>
                <p className="text-[13px] sm:text-[14px] text-[#475569] leading-relaxed mb-4">{lead.bio}</p>
                <div className="flex items-end justify-between gap-3">
                  <div className="flex flex-wrap gap-2 flex-1">
                    {lead.tags.map((tag) => (<TagBadge key={tag} label={tag} />))}
                  </div>
                  <LinkedInButton href={lead.linkedin} name={lead.name} size="small" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER CTA (dark, matching /company) ─── */}
      <section className="relative py-32 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1815] via-[#0F172A] to-[#0A101C]" />
          <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[900px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-extrabold text-white tracking-tight leading-[1.1] mb-8">
              Ready to Build With Vallorex?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-[#94A3B8] max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free 15-min strategy call with a senior engineer. No pitch deck. Just honest conversation about your stack.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-brand-orange hover:bg-[#E06612] text-white rounded-full px-10 h-14 md:h-16 text-base md:text-lg font-bold shadow-[0_4px_24px_rgba(249,115,22,0.3)] transition-all hover:scale-105 active:scale-95 group">
                <Link href="/contact?tab=booking">Book a Strategy Call<ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1.5 transition-transform" /></Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2.5 mt-10">
              <ShieldCheck className="h-4 w-4 text-brand-blue" strokeWidth={2.5} />
              <span className="text-sm font-medium text-[#94A3B8]">The premier engineering partner for AI and Blockchain ventures.</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
