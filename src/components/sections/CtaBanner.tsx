"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#0F172A] flex items-center justify-center">
      {/* Precisely mapped gradient background to match the warm left-side glow and dark right-side from Stitch */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c1815] via-[#0F172A] to-[#0A101C]" />
        {/* The distinct soft orange glow intersecting the left quadrant */}
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] bg-[#F97316]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[900px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Typography tightening and exact breakpoint drops */}
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-extrabold text-white mb-10 leading-[1.1] tracking-tight">
            Stop fighting your tech stack. <br className="hidden md:block" />
            <span className="text-[#F97316]">Start scaling</span> your business <br className="hidden md:block" />
            with elite engineering support.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center mb-10">
            <Button asChild className="rounded-full bg-[#F97316] hover:bg-[#ea580c] transition-colors text-white px-8 h-14 text-base font-semibold w-full sm:w-auto shadow-[0_4px_24px_rgba(249,115,22,0.3)]">
              <Link href="/contact?tab=booking">
                Get a Free Consultation <ArrowRight className="ml-2 h-[18px] w-[18px]" strokeWidth={2.5} />
              </Link>
            </Button>
          </div>
          
          {/* Footer badge with enhanced text contrast to solve the accessibility issue raised by user */}
          <div className="flex items-center justify-center gap-[10px] w-full mt-10">
            <ShieldCheck className="h-4 w-4 text-[#2563EB]" strokeWidth={2.5} />
            <span className="text-sm font-medium text-[#94A3B8]">
              The premier engineering partner for AI and Blockchain ventures. Institutional quality from day one.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
