"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessTimeline() {
  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Header Setup */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0F172A] mb-3">
            How We Build
          </h2>
          <div className="w-[80px] h-[5px] bg-[#2563EB]" />
        </motion.div>

        {/* Timeline Sequence */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10 pl-2">
            {PROCESS_STEPS.map((step, index) => {
              // The design specifically highlights only the 1st step
              const isActive = index === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                  className="relative flex flex-col items-center text-center md:items-start md:text-left"
                >
                  
                  {/* Local connection line ensuring it meets the exact centers of adjoining nodes */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-[44px] left-[88px] w-[calc(100%-88px+2rem)] h-[1px] bg-[#E2E8F0] -z-10" />
                  )}

                  <div 
                    className={`flex items-center justify-center w-[88px] h-[88px] rounded-full mb-6 font-bold text-[26px] 
                    ${isActive 
                      ? "bg-[#2563EB] text-white shadow-[0_12px_30px_rgba(37,99,235,0.25)]" 
                      : "bg-white text-[#0F172A] border-[1.5px] border-[#E2E8F0]"
                    }`}
                  >
                    {index + 1}
                  </div>
                  
                  <h3 className={`text-[19px] font-bold mb-3 ${isActive ? 'text-[#2563EB]' : 'text-[#0F172A]'}`}>
                    {step.title}
                  </h3>
                  
                  <p className="text-[14px] text-[#64748b] leading-[1.6] md:pr-4">
                    {step.description}
                  </p>
                  
                  {/* Vertical line connector for mobile view only */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="md:hidden absolute top-[88px] bottom-[-48px] left-1/2 w-[1px] -translate-x-1/2 bg-[#E2E8F0] -z-10" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
