"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GlobeCdnDemo from "@/components/ui/globe-cdn-demo";
import Link from "next/link";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="relative overflow-x-hidden bg-white pt-5 pb-10 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16">
      {/* Soft gradient blur at top */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-full max-w-3xl -translate-x-1/2 bg-midnight/5 blur-[100px]" />

      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 grid-cols-1 items-center gap-7 sm:gap-9 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-16">
          {/* Left Column Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex min-w-0 w-full flex-col items-stretch sm:items-start lg:max-w-[680px] xl:max-w-[760px]"
          >
            <motion.div
              variants={itemVariants}
              className="mb-4 inline-flex max-w-full items-center justify-center self-center rounded-sm bg-slate-100 px-2.5 py-1.5 sm:mb-5 sm:self-start sm:px-3"
            >
              <span className="text-center text-[9px] font-bold uppercase leading-snug tracking-wider text-muted sm:text-left sm:text-[10px]">
                Trusted by global companies
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-4 text-balance text-[clamp(1.625rem,4.75vw+0.65rem,2.125rem)] font-extrabold leading-[1.12] tracking-tight text-midnight sm:mb-5 sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-[3.5rem] lg:leading-[1.08] xl:text-[4rem]"
            >
              The Engineering <br className="hidden md:block" />
              <span className="lg:whitespace-nowrap">
                Firm That Turns <span className="text-brand-blue">AI &</span>{" "}
              </span>
              <br className="hidden md:block" />
              <span className="text-brand-blue">Blockchain</span> Into <br className="hidden md:block" />
              Business Results.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-5 max-w-[600px] text-base leading-relaxed text-muted/90 sm:mb-6 sm:text-lg md:text-xl"
            >
              We bridge the gap between complex emerging tech and scalable enterprise infrastructure. Elite engineering for the world&apos;s most ambitious teams.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-7 flex w-full flex-col gap-3 sm:mb-8 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <span className="hero-cta-border-wrap relative inline-flex w-full overflow-hidden rounded-full p-[3px] shadow-[0_0_40px_-12px_rgba(249,115,22,0.55)] sm:w-auto">
                <span className="hero-cta-border-base" aria-hidden />
                <span className="hero-cta-border-sparkle" aria-hidden />
                <Button
                  asChild
                  className="relative z-10 h-12 w-full rounded-full border-0 bg-brand-orange px-6 text-sm font-bold text-white shadow-lg shadow-brand-orange/25 transition-all hover:bg-[#E06612] sm:w-auto sm:px-8 sm:text-[15px]"
                >
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </span>
              <Button
                asChild
                variant="outline"
                className="h-12 w-full rounded-full border-2 border-midnight bg-transparent px-6 text-sm font-bold text-midnight transition-all hover:bg-slate-50 hover:text-midnight sm:w-auto sm:px-8 sm:text-[15px]"
              >
                <Link href="/case-studies">See How We Work</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Column Abstract Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative min-w-0 w-full lg:pt-0"
          >
            <div className="relative mx-auto flex h-[min(78vw,360px)] min-h-0 w-full max-w-full items-center justify-center sm:h-[400px] md:h-[460px] lg:h-[520px] xl:h-[550px]">
              <GlobeCdnDemo />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
