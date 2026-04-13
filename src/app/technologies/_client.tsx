"use client";

import React, { useRef } from "react";
import {
  motion,
  Variants,
  useMotionValue,
  useSpring,
  useTransform,
  LayoutGroup
} from "framer-motion";
import {
  Brain,
  Layers,
  Cloud,
  Database,
  Code2,
  Palette,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextRotate } from "@/components/ui/text-rotate";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const techPillars = [
  {
    icon: <Brain className="w-5 h-5" />,
    title: "AI & Machine Learning",
    tags: ["PyTorch", "TensorFlow", "LangChain", "OpenAI", "Pinecone", "Hugging Face"],
    description: "From custom fine-tuning of LLMs to high-throughput production inference pipelines.",
    color: "rgba(37, 99, 235, 0.1)", // text-[#2563EB]
    accent: "#2563EB",
    bg: "bg-[#EFF6FF]",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Blockchain Engineering",
    tags: ["Ethereum", "Solidity", "Rust", "Foundry", "L2 Solutions", "The Graph"],
    description: "Protocol-level engineering and decentralized infrastructure that prioritizes security and trust.",
    color: "rgba(139, 92, 246, 0.1)", // text-[#8B5CF6]
    accent: "#8B5CF6",
    bg: "bg-[#F5F3FF]",
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "Cloud & Infrastructure",
    tags: ["AWS/GCP", "Kubernetes", "Terraform", "Docker", "Datadog", "Kafka"],
    description: "Resilient, automated infrastructure built for 99.99% uptime and global elasticity.",
    color: "rgba(16, 185, 129, 0.1)", // text-[#10B981]
    accent: "#10B981",
    bg: "bg-[#ECFDF5]",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Data Engineering",
    tags: ["PostgreSQL", "Snowflake", "Spark", "Airflow", "dbt", "BigQuery"],
    description: "Complex ETL pipelines and high-performance analytical databases for real-time insights.",
    color: "rgba(245, 158, 11, 0.1)", // text-[#F59E0B]
    accent: "#F59E0B",
    bg: "bg-[#FFFBEB]",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Frontend & Applications",
    tags: ["React/Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind", "Vercel"],
    description: "Performance-first user interfaces that bridge the gap between complex logic and human intuition.",
    color: "rgba(14, 165, 233, 0.1)", // text-[#0EA5E9]
    accent: "#0EA5E9",
    bg: "bg-[#F0F9FF]",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Strategic Design",
    tags: ["ADRs", "Domain Design", "System Audit", "Agile Ops", "Security first"],
    description: "Foundational planning that ensures your technology evolves with your business goals.",
    color: "rgba(244, 63, 94, 0.1)", // text-[#F43F5E]
    accent: "#F43F5E",
    bg: "bg-[#FFF1F2]",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InteractiveCard = ({ pillar, index }: { pillar: (typeof techPillars)[number], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 100, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={itemVariants}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-300 flex flex-col items-start min-h-[460px] cursor-pointer overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${((x as number) + 0.5) * 100}% ${((y as number) + 0.5) * 100}%, ${pillar.color}, transparent 40%)`
          ),
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-start">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-12 h-12 rounded-xl ${pillar.bg} flex items-center justify-center mb-10 transition-colors duration-300 group-hover:bg-white group-hover:shadow-lg`}
          style={{ color: pillar.accent }}
        >
          {pillar.icon}
        </motion.div>

        <h3 className="text-[22px] font-bold text-[#0F172A] mb-8 leading-tight tracking-tight group-hover:text-brand-blue transition-colors duration-300">
          {pillar.title}
        </h3>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-x-2 gap-y-2.5 mb-10 max-w-[300px]">
          {pillar.tags.map((tag: string, tIdx: number) => (
            <motion.span
              key={tIdx}
              whileHover={{ scale: 1.05, backgroundColor: pillar.accent + "10", color: pillar.accent }}
              className="inline-block px-3.5 py-2 rounded-xl text-[11px] font-bold bg-slate-50 text-slate-500 transition-all duration-200 border border-transparent hover:border-slate-100"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <p className="text-[14px] text-slate-500 leading-relaxed mt-auto font-medium transition-colors group-hover:text-slate-600">
          {pillar.description}
        </p>
      </div>

      {/* Decorative Corner Element */}
      <div
        className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at bottom right, ${pillar.accent}, transparent 70%)`
        }}
      />
    </motion.div>
  );
};

const DotGrid = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
);

export default function TechnologiesPageClient() {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Global Background Dots */}
      <DotGrid />

      {/* Hero Section - Full viewport, flows from navbar */}
      <section className="relative w-full min-h-[calc(100vh-88px)] flex items-center bg-[#0B0F19] overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#2563EB"
        />

        {/* Ambient glow accents */}
        <div className="absolute top-[10%] right-[5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-blue/[0.06] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[5%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-orange/[0.03] blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />

        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1400px] relative z-10 py-20 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
            {/* Left - Text content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.06] backdrop-blur-md px-5 py-1.5 border border-white/[0.08] mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-white/50 uppercase">
                  Enterprise Engineering Framework
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-[34px] sm:text-[46px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-extrabold tracking-tight leading-[1.08] mb-6"
              >
                <span className="block mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  Scale Your
                </span>
                <div className="relative min-h-[1.4em] overflow-hidden flex items-center justify-center lg:justify-start text-brand-blue whitespace-nowrap">
                  <LayoutGroup>
                    <TextRotate
                      texts={[
                        "AI Pipelines",
                        "Web3 Protocols",
                        "ML Models",
                        "Cloud Infra",
                        "Enterprise Data",
                      ]}
                      mainClassName="font-black"
                      staggerDuration={0.03}
                      staggerFrom="last"
                      rotationInterval={3000}
                      transition={{ type: "spring", damping: 30, stiffness: 450 }}
                    />
                  </LayoutGroup>
                </div>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-[15px] md:text-[17px] lg:text-[18px] text-white/40 max-w-[540px] leading-relaxed font-medium mb-12 md:mb-14"
              >
                Production-proven architecture calibrated for enterprise stability, global scalability, and long-term security. We build what others can&apos;t.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 sm:gap-5 w-full sm:w-auto"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-[#E06612] text-white rounded-full px-8 md:px-10 py-4 md:py-5 h-auto text-sm md:text-base font-bold shadow-xl shadow-brand-orange/20 transition-all hover:scale-[1.03] active:scale-95 group justify-center"
                >
                  <Link href="/contact">
                    Consult Our Architects
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-white/20 text-white hover:text-white px-8 md:px-10 py-4 md:py-5 h-auto text-sm md:text-base font-bold hover:bg-white/[0.06] transition-all hover:scale-[1.03] active:scale-95 justify-center"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right - 3D Scene (desktop only for performance) */}
            <div className="hidden lg:block relative h-[550px] xl:h-[600px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Pillars Section */}
      <section className="py-20 md:py-28 relative z-10 bg-slate-50/50 border-y border-slate-100/50">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="block text-brand-blue font-bold text-[10px] tracking-[0.3em] uppercase mb-4"
            >
              Core Capabilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-[46px] font-extrabold text-[#0F172A] leading-tight tracking-tight"
            >
              Our Technological Foundations
            </motion.h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20"
          >
            {techPillars.map((pillar, idx) => (
              <InteractiveCard key={idx} pillar={pillar} index={idx} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy Section (Exact Stitch Rebuild) */}
      <section className="py-24 md:py-32 relative z-10 bg-white">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block text-brand-blue font-bold text-[10px] tracking-[0.3em] uppercase mb-10"
              >
                Our Philosophy
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-[54px] lg:text-[68px] font-extrabold text-[#0F172A] leading-[1.1] md:leading-[1.05] tracking-tight"
              >
                &ldquo;The best stack is the one your team can maintain at <span className="text-brand-blue">2am</span> when something breaks.&rdquo;
              </motion.h2>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center space-y-12 mt-12 lg:mt-0">
              {[
                {
                  title: "We evaluate your existing ecosystem first",
                  description: "Legacy isn't a bad word. We build on what works and strategically optimize bottlenecks without disrupting operations."
                },
                {
                  title: "Architectural Decision Records (ADR)",
                  description: "Every choice is documented. You will always know the 'why' behind the 'what', ensuring zero knowledge silos."
                },
                {
                  title: "Ownership Transfer is Mandatory",
                  description: "We don't build to create dependency. Our sprint cycles include rigorous training so your team can lead the future."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex gap-6 group"
                >
                  {/* Vertical Blue Line */}
                  <div className="w-[3px] bg-brand-blue/20 group-hover:bg-brand-blue transition-colors duration-300 h-auto self-stretch rounded-full" />

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-[#0F172A] leading-tight tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section (Immersive Mesh Gradient) */}
      <section className="py-32 px-4 relative z-10 bg-[#0B0F19] overflow-hidden">
        {/* Immersive Mesh Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/20 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/10 blur-[150px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto max-w-[1400px] relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 md:mb-8 tracking-tighter leading-tight"
            >
              Have a Specific Stack Requirement?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-white/50 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium"
            >
              We&apos;ll provide an honest architectural review in 30 minutes. No commitment, just engineering truth.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button asChild className="bg-brand-orange hover:bg-[#E06612] text-white rounded-full px-8 md:px-10 h-14 md:h-16 text-base md:text-lg font-bold shadow-2xl shadow-orange-500/20 transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto">
                <Link href="/contact">
                  Get a Free Architecture Review
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
