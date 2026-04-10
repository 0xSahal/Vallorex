"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function DifferentiatorSection() {
  const differentiators = [
    {
      title: "Top 1% Engineers Only",
      description: "We don't outsource. Your project is handled by senior architects who have built billion-dollar systems.",
    },
    {
      title: "Fixed Scope, Fixed Price",
      description: "No billing surprises. We quote based on deliverables, and we stay until the job is done perfectly.",
    },
    {
      title: "You Own Everything",
      description: "100% IP ownership from day one. Clean, documented code that your in-house team can easily inherit.",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-midnight leading-[1.1] tracking-tight mb-8">
              We&apos;re not a vendor. <br />
              We&apos;re your engineering <br />
              co-founders.
            </h2>
            <p className="text-lg text-muted mb-10 leading-relaxed pr-4">
              Most agencies just follow tickets. We architect solutions. We challenge your assumptions, optimize your stack for 10x growth, and treat your code as our own.
            </p>
            <Link 
              href="/team"
              className="inline-flex items-center text-brand-orange font-bold text-base hover:text-[#E06612] transition-colors group"
            >
              Meet the Team 
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right Column Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                className="relative bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/80 overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Blue left bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] sm:w-[5px] bg-brand-blue" />
                
                <div className="px-8 sm:px-10 py-8 sm:py-9 flex flex-col justify-center">
                  <h3 className="text-[22px] font-bold text-midnight mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-muted/90 text-[15px] leading-relaxed max-w-2xl">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
