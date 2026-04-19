"use client";

export function LogoStrip() {
  const logos = [
    "AIML & LLM Engineering",
    "Agentic AI Systems",
    "AI Workflow Automation",
    "Blockchain Engineering",
    "Layer 2 & Scaling",
    "Smart Contracts & Web3",
    "MLOps & Model Pipelines",
    "Enterprise AI Integration",
  ];

  return (
    <div className="w-full bg-surface py-12 overflow-hidden border-y border-border">
      <div className="relative flex max-w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center shrink-0">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <span
              key={idx}
              className="mx-8 sm:mx-12 text-xl font-bold text-muted/40 uppercase tracking-widest shrink-0"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
