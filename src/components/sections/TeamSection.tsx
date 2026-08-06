"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const teamMembers = [
  { name: "Shaayan Shaikh", title: "Co-Founder & CEO", specialty: "Blockchain & Web3", initials: "SS", linkedin: "https://www.linkedin.com/in/shaayan-io/", image: "/images/team/shaayan-shaikh.png" },
  { name: "Sahal Shaikh", title: "Head of Product Engineering", specialty: "Full-Stack & DevOps", initials: "SS", linkedin: "https://www.linkedin.com/in/sahal-shaikh/", image: "/images/team/sahal-shaikh.jpg" },
  { name: "Shamim Patel", title: "Software Engineer", specialty: "Software Development", initials: "SP", linkedin: "https://www.linkedin.com/in/shamimbanu-patel-722134402/", image: "/images/team/samim-banu.png" },
  { name: "Mukund Sharma", title: "Business Development Executive", specialty: "Growth Strategy", initials: "MS", linkedin: "https://www.linkedin.com/in/mukund-vallorex/", image: "/images/team/mukund.png" },
  { name: "Usama Patel", title: "Head of Business Growth & Strategic Partnerships", specialty: "Business Growth", initials: "UP", linkedin: "https://www.linkedin.com/in/usama-vallorex/", image: "/images/team/usama.png" },
  { name: "Atib Shaikh", title: "Head of Sales", initials: "AS", linkedin: "https://www.linkedin.com/in/atib-shaikh-a4769415a/", image: "/images/team/atib-shaikh.jpg", mobileOnly: true },
];

export function TeamSection() {
  return (
    <section className="py-12 bg-[#FAFAFA]" id="team">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] text-brand-blue uppercase mb-4 block">
            THE TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-midnight tracking-tight leading-tight">
            Built by Engineers. Led by Founders.
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted max-w-[680px] mx-auto leading-relaxed">
            A collective of domain experts and scalable engineering squads we bridge the gap between technical vision and practical delivery, ensuring high-quality execution.
          </p>
          <div className="mt-8 flex sm:hidden justify-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand-blue hover:text-blue-700 transition-colors group/link"
            >
              Meet the full team
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5 lg:gap-4 xl:gap-5 px-4 sm:px-0">
          {teamMembers.map((member, index) => {
            const isLastOdd = index === teamMembers.length - 1 && teamMembers.length % 2 !== 0;
            return (
              <motion.div
                key={member.initials}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className={cn(
                  "group relative bg-white border border-border/60 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col",
                  isLastOdd && "col-span-2 sm:col-span-1",
                  member.mobileOnly && "md:hidden"
                )}
              >
                <div className="relative w-full aspect-square h-[160px] sm:h-auto bg-gradient-to-br from-[#F1F5F9] to-[#E8ECF1] flex items-center justify-center overflow-hidden flex-shrink-0">
                  {member.image ? (
                    <Image src={member.image} alt={`${member.name} – ${member.title}`} fill className="object-cover object-top" />
                  ) : (
                    <span className="text-xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold text-[#94A3B8] group-hover:text-[#64748B] transition-colors duration-300 select-none">
                      {member.initials}
                    </span>
                  )}
                </div>

                <div className="p-3 sm:p-5 lg:p-4 xl:p-5 flex-grow flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-[14px] sm:text-[15px] font-bold text-midnight leading-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[11px] sm:text-[13px] text-muted leading-tight">
                      {member.title}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-1.5 mt-auto pt-2">
                    <span className="hidden sm:inline-flex items-center rounded-full bg-brand-blue/10 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-brand-blue whitespace-nowrap overflow-hidden text-ellipsis max-w-[70%]">
                      {member.specialty}
                    </span>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="flex-shrink-0 w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-midnight hover:border-[#CBD5E1] transition-all duration-200"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="hidden sm:block text-center mt-14"
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand-blue hover:text-blue-700 transition-colors group/link"
          >
            Meet the full team
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
