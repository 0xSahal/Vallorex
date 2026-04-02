"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function ServicesGrid() {
  return (
    <section className="py-24 bg-[#FAFAFA]" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] text-brand-blue uppercase mb-4 block">
            CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-midnight tracking-tight">
            Precision Engineering Services
          </h2>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-border/60 rounded-2xl p-8 sm:p-10 shadow-[0_4px_24px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col items-start group"
              >
                <div className="mb-6 mt-1">
                  <Icon className="h-[28px] w-[28px] text-brand-orange" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-xl sm:text-[22px] max-w-[200px] font-bold text-midnight mb-4 leading-snug">
                  {service.title}
                </h3>
                
                <p className="text-[15px] font-medium text-[#64748b] leading-relaxed mb-10 flex-1 pr-4 sm:pr-2">
                  {service.description}
                </p>
                
                <Link
                  href={service.href}
                  className="mt-auto flex items-center text-[14px] font-bold text-brand-blue group/link hover:text-blue-700 transition-colors"
                >
                  Learn more
                  <ChevronRight className="ml-1 h-3.5 w-3.5 transform group-hover/link:translate-x-0.5 transition-transform" strokeWidth={3} />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
