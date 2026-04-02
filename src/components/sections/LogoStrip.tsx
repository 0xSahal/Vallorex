"use client";

export function LogoStrip() {
  const logos = [
    "ACME Corp",
    "GlobalBank",
    "Stark Industries",
    "Cyberdyne Systems",
    "Wayne Enterprises",
    "Umbrella Corp",
    "Massive Dynamic",
    "InGen",
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
