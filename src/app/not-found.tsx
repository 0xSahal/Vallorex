import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Sparkles, Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[min(78vh,720px)] flex-1 flex-col items-center justify-center overflow-hidden bg-white px-4 py-16 sm:py-20">
      {/* Ambient depth - mirrors hero + CTA sections */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-40 w-[min(100%,56rem)] -translate-x-1/2 bg-midnight/[0.06] blur-[100px]" />
        <div className="absolute -left-[20%] top-1/3 h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full bg-brand-orange/[0.08] blur-[100px]" />
        <div className="absolute -right-[15%] bottom-0 h-[min(60vw,380px)] w-[min(60vw,380px)] rounded-full bg-brand-blue/[0.07] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.35] animate-grid-fade motion-reduce:animate-none"
          aria-hidden
        >
          <div className="dot-grid absolute inset-0" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted shadow-sm backdrop-blur-sm sm:text-[11px]">
          <Wrench className="h-3.5 w-3.5 text-brand-orange" strokeWidth={2.5} aria-hidden />
          Under development
          <Sparkles className="h-3.5 w-3.5 text-brand-blue" strokeWidth={2.5} aria-hidden />
        </div>

        {/* Blueprint-style ring - suggests “in progress” without saying 404 */}
        <div className="relative mb-8 flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44" aria-hidden>
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200" />
          <div
            className="absolute inset-2 rounded-full border-2 border-transparent opacity-90"
            style={{
              background:
                "conic-gradient(from 210deg, #F97316 0deg, #F97316 100deg, transparent 100deg 280deg, #2563EB 280deg, #2563EB 340deg, transparent 340deg) border-box",
              WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "2px",
            }}
          />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-slate-50 to-white shadow-[0_20px_60px_-24px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/80 sm:h-28 sm:w-28">
            <span className="text-4xl font-black tabular-nums tracking-tighter text-midnight/90 sm:text-5xl">
              ···
            </span>
          </div>
        </div>

        <h1 className="mb-4 text-balance text-3xl font-extrabold leading-tight tracking-tight text-midnight sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
          This corner of Vallorex is{" "}
          <span className="bg-gradient-to-r from-brand-orange via-[#ea580c] to-brand-blue bg-clip-text text-transparent">
            still in the workshop
          </span>
          .
        </h1>

        <p className="mb-10 max-w-lg text-base leading-relaxed text-body sm:text-lg">
          We&apos;re polishing layouts, tightening copy, and running the same engineering rigor we bring to
          client work. Nothing&apos;s wrong on your end. This page simply isn&apos;t ready for the spotlight yet.
        </p>

        <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
          <Button
            asChild
            className="h-12 rounded-full border-0 bg-brand-orange px-8 text-sm font-bold text-white shadow-[0_4px_24px_rgba(249,115,22,0.28)] transition-all hover:bg-[#E06612] sm:h-14 sm:px-10 sm:text-[15px]"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2.5} aria-hidden />
              Back to homepage
              <ArrowRight className="ml-2 h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2.5} aria-hidden />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-2 border-midnight bg-transparent px-8 text-sm font-bold text-midnight hover:bg-slate-50 hover:!text-midnight focus-visible:!text-midnight sm:h-14 sm:px-10 sm:text-[15px]"
          >
            <Link href="/contact">Talk to us</Link>
          </Button>
        </div>

        <p className="mt-10 text-sm text-muted">
          Prefer email? You can still reach everything that&apos;s live from the homepage navigation.
        </p>
      </div>
    </section>
  );
}
