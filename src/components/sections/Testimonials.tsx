"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-[#FAFAFA]" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        {/* We keep this heading format because the User explicitly requested to preserve it! */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Trusted by the Top 1%
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the visionaries and technical leaders we've partnered with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white rounded-[12px] p-8 md:p-10 border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-[18px] h-[18px] fill-[#F97316] text-[#F97316]"
                    />
                  ))}
                </div>
                {/* Notice the specific italic string and exact text-muted hex mapping to match Stitch */}
                <p className="text-[17px] text-[#475569] italic leading-[1.7] mb-10">
                  {testimonial.quote}
                </p>
              </div>

              {/* Advanced Author Block with Avatar */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover shadow-sm bg-slate-100"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-[#0F172A] text-[15px]">
                    {testimonial.name}
                  </span>
                  <span className="text-[#64748b] text-[13px] font-medium mt-[2px]">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
