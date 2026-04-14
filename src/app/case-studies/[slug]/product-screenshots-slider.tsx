"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type Props = {
  images: string[];
  shortTitle: string;
  /** Shown in the mock browser address bar (e.g. live demo URL) */
  addressBarUrl?: string;
  /** Slide viewport (default mimics 16:9 product frame) */
  viewportClassName?: string;
  /** Main slide image fit / focal point */
  imageClassName?: string;
  /** Thumbnail image fit */
  thumbnailImageClassName?: string;
};

const transition = { duration: 0.3, ease: "easeOut" as const };

/** Host + path for fake address bar (no scheme — chrome adds https://) */
function displayUrl(url?: string) {
  if (!url) return "app.studio/preview";
  try {
    const u = new URL(url);
    const path = u.pathname.replace(/\/$/, "");
    return (path && path !== "/" ? `${u.hostname}${path}` : u.hostname) || "preview";
  } catch {
    return url.replace(/^https?:\/\//i, "").slice(0, 56);
  }
}

export function ProductScreenshotsSlider({
  images,
  shortTitle,
  addressBarUrl,
  viewportClassName = "aspect-video",
  imageClassName = "object-cover object-top",
  thumbnailImageClassName = "object-cover object-top",
}: Props) {
  const count = images.length;
  const [index, setIndex] = useState(0);
  const barText = displayUrl(addressBarUrl);

  const go = useCallback(
    (delta: number) => {
      if (count === 0) return;
      setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (count === 0) {
    return (
      <div className="relative py-8">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto h-40 max-w-[1000px] bg-gradient-to-t from-midnight/[0.14] via-midnight/[0.05] to-transparent"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-[900px]">
          <div
            className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1a2e] shadow-[0_28px_70px_-18px_rgba(0,0,0,0.35),0_14px_28px_-10px_rgba(0,0,0,0.18)]"
            style={{ transition: "box-shadow 300ms ease" }}
          >
            <BrowserChrome barText={barText} />
            <div className="relative aspect-video bg-black/40">
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                  Screenshot Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-8">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto h-44 max-w-[1100px] bg-gradient-to-t from-midnight/[0.12] via-midnight/[0.04] to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[calc(900px+7rem)] px-2 sm:px-4">
        <div
          className={cn(
            "flex items-center justify-center",
            count > 1 ? "gap-2 sm:gap-4 md:gap-5" : "",
          )}
        >
          {count > 1 ? (
            <button
              type="button"
              onClick={() => go(-1)}
              className="z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black/50 text-white shadow-md transition-all duration-300 ease-out hover:bg-brand-blue hover:text-white"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden />
            </button>
          ) : null}

          <div
            className={cn(
              "min-w-0 overflow-hidden rounded-xl border border-white/10 bg-[#1a1a2e] shadow-[0_28px_70px_-18px_rgba(0,0,0,0.35),0_14px_28px_-10px_rgba(0,0,0,0.18)]",
              count > 1 ? "max-w-[900px] flex-1" : "mx-auto w-full max-w-[900px]",
            )}
            style={{ transition: "box-shadow 300ms ease" }}
          >
            <BrowserChrome barText={barText} />

            <div
              className={cn(
                "relative w-full overflow-hidden bg-black",
                viewportClassName,
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[index]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[index]!}
                    alt={`${shortTitle} product screenshot ${index + 1} of ${count}`}
                    fill
                    className={imageClassName}
                    sizes="900px"
                    priority={index === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {count > 1 ? (
            <button
              type="button"
              onClick={() => go(1)}
              className="z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black/50 text-white shadow-md transition-all duration-300 ease-out hover:bg-brand-blue hover:text-white"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-6 w-6" aria-hidden />
            </button>
          ) : null}
        </div>

        {count > 1 ? (
          <div
            className="mx-auto mt-6 flex max-w-[900px] flex-wrap justify-center gap-3 sm:gap-4 md:justify-center"
            role="tablist"
            aria-label="Screenshot thumbnails"
          >
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show screenshot ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "relative h-14 w-24 shrink-0 overflow-hidden rounded-md border border-white/10 sm:h-16 sm:w-28",
                  "transition-all duration-300 ease-out",
                  i === index
                    ? "border border-white/10 border-b-2 border-b-brand-blue opacity-100 shadow-sm"
                    : "border border-white/10 border-b-2 border-b-transparent opacity-20 hover:opacity-100",
                )}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className={thumbnailImageClassName}
                  sizes="112px"
                  aria-hidden
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function BrowserChrome({ barText }: { barText: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#1a1a2e] px-3 py-2.5 sm:px-4">
      <div className="flex shrink-0 gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/85" />
      </div>
      <div className="min-w-0 flex-1 rounded-md bg-black/35 px-3 py-1.5 text-left font-mono text-[10px] text-white/45 sm:text-[11px]">
        <span className="block truncate">https://{barText}</span>
      </div>
    </div>
  );
}
