"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { STATS } from "@/lib/constants";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  
  const rounded = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [motionValue, inView, value]);

  return (
    <span ref={ref} className="flex flex-row items-center font-extrabold text-[#0F172A] leading-none mb-1">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export function StatsRow() {
  return (
    <section className="bg-white border-y border-border/40 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 divide-x-0 md:divide-x divide-border/60">
          {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center px-4"
              >
                <div className="text-[44px] sm:text-[54px] md:text-[60px] tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[10px] md:text-[11px] font-bold text-brand-blue uppercase tracking-[0.15em] mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  );
}
