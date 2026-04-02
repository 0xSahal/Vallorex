"use client";

import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/constants";
import Link from "next/link";

export function CaseStudies() {
  return (
    <section className="py-24 bg-white" id="case-studies">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
        
        <div className="mb-14">
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0F172A] mb-8 tracking-tight">
            Proof of Impact
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {CASE_STUDIES.map((study, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={`flex flex-col md:flex-row bg-white rounded-2xl border border-[#F1F5F9] shadow-[0_4px_24px_rgb(0,0,0,0.02)] overflow-hidden ${
                  !isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image side - Half width on desktop */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-auto min-h-[440px] flex-shrink-0">
                  <div className="absolute inset-0 bg-slate-900">
                     <img 
                       src={study.image} 
                       alt={study.metric} 
                       className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity hover:opacity-100" 
                     />
                  </div>
                </div>

                {/* Text side - Half width on desktop */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-[#2563EB] uppercase mb-5">
                    {study.subtitle}
                  </div>
                  
                  <h3 className="text-[26px] sm:text-[32px] sm:leading-[1.25] font-extrabold text-[#0F172A] mb-5 tracking-tight">
                    {study.metric}
                  </h3>
                  
                  <p className="text-[15px] text-[#475569] leading-[1.65] mb-10 max-w-[420px]">
                    {study.description}
                  </p>
                  
                  <div>
                    <Link
                      href="#"
                      className="inline-block text-[14px] font-[900] text-[#0F172A] pb-1 border-b-2 border-[#0F172A] hover:text-[#2563EB] hover:border-[#2563EB] transition-colors"
                    >
                      Read Case Study
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
