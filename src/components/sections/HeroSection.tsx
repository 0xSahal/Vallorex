"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, PieChart, ShieldCheck } from "lucide-react";
import GlobeCdnDemo from "@/components/ui/globe-cdn-demo";

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
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-white">
      {/* Soft gradient blur at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-midnight/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-28 items-center lg:items-start">
          
          {/* Left Column Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start w-full lg:max-w-[680px] xl:max-w-[760px]"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center rounded-sm bg-slate-100 px-3 py-1.5 mb-8">
              <span className="text-[10px] font-bold tracking-wider text-muted uppercase">
                TRUSTED BY 30+ GLOBAL COMPANIES
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-[56px] md:text-[62px] lg:text-[64px] font-extrabold text-midnight leading-[1.1] tracking-tight mb-8"
            >
              The Engineering <br className="hidden md:block" />
              <span className="whitespace-nowrap">Firm That Turns <span className="text-brand-blue">AI &</span></span> <br className="hidden md:block" />
              <span className="text-brand-blue">Blockchain</span> Into <br className="hidden md:block" />
              Business Results.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted/90 mb-10 leading-relaxed max-w-[600px]"
            >
              We bridge the gap between complex emerging tech and scalable enterprise infrastructure. Elite engineering for the world's most ambitious teams.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
              <Button className="rounded-full bg-brand-orange hover:bg-[#E06612] text-white px-8 h-12 text-[15px] font-bold shadow-lg shadow-brand-orange/20 transition-all">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-2 border-midnight text-midnight bg-transparent hover:bg-slate-50 hover:text-midnight px-8 h-12 text-[15px] font-bold transition-all"
              >
                See How We Work
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full pt-8 border-t border-border/80">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
                <div className="flex items-center gap-2.5">
                  <div className="bg-brand-blue rounded-full p-[2px]">
                    <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-muted">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="bg-brand-blue rounded-full p-[2px]">
                    <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-muted">98% Delivery Rate</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="bg-brand-blue rounded-full p-[2px]">
                    <Clock className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-muted">24hr Response Time</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column Abstract Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative lg:pt-2 w-full"
          >
            <div className="relative w-full h-[550px] flex items-center justify-center">
              <GlobeCdnDemo />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
