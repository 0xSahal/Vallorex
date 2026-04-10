"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("announcementDismissed");
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("announcementDismissed", "true");
  };

  const claimLinkClass =
    "group inline-flex items-center gap-1 text-xs font-bold underline decoration-white/70 underline-offset-2 transition hover:opacity-90 hover:decoration-white sm:text-sm";

  if (!isVisible) return null;

  return (
    <div className="bg-brand-blue text-white font-medium w-full relative z-50 min-h-11 sm:min-h-10 flex items-center py-2 sm:py-2.5 lg:py-0">
      <div className="container relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Mobile & tablet: message row, then CTA below */}
        <div className="flex flex-col gap-2 sm:gap-2.5 lg:hidden">
          <div className="flex items-start justify-between gap-2">
            <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <span className="hidden shrink-0 items-center rounded-sm bg-brand-orange px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white sm:inline-flex">
                NEW
              </span>
              <p className="text-left text-xs leading-snug text-white/90 sm:text-sm sm:leading-normal">
                Vallorex now offers a complimentary AI Readiness Audit for enterprise teams.
              </p>
            </div>
            <button
              type="button"
              onClick={handleDismiss}
              className="shrink-0 p-1.5 opacity-70 transition hover:opacity-100 touch-manipulation"
              aria-label="Dismiss announcement"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <Link href="/contact" className={`${claimLinkClass} w-fit`}>
            <span className="whitespace-nowrap">Claim your free audit</span>
            <ArrowRight
              className="hidden h-3.5 w-3.5 shrink-0 sm:block transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>

        {/* Laptop+: centered row (unchanged) */}
        <div className="relative hidden w-full items-center justify-center lg:flex lg:min-h-10">
          <div className="flex w-full max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-1.5 pr-10 text-center">
            <span className="inline-flex shrink-0 items-center rounded-sm bg-brand-orange px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              NEW
            </span>
            <p className="text-center text-sm leading-normal text-white/90">
              Vallorex now offers a complimentary AI Readiness Audit for enterprise teams.
            </p>
            <Link href="/contact" className={`${claimLinkClass}`}>
              <span className="whitespace-nowrap">Claim your free audit</span>
              <ArrowRight
                className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>
          <button
            type="button"
            onClick={handleDismiss}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-1.5 opacity-70 transition hover:opacity-100 touch-manipulation"
            aria-label="Dismiss announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
