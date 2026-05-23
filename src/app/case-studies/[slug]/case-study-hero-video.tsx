"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  label: string;
  muted?: boolean;
  showControls?: boolean;
  objectFit?: "cover" | "contain";
};

export function CaseStudyHeroVideo({
  src,
  label,
  muted = true,
  showControls = false,
  objectFit = "cover",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || muted) return;

    const playWithSound = async () => {
      video.muted = false;
      try {
        await video.play();
      } catch {
        // Autoplay with sound may be blocked; user can unmute via controls
      }
    };

    void playWithSound();
  }, [muted, src]);

  return (
    <div className="relative aspect-video w-full justify-self-center overflow-hidden rounded-2xl border border-white/10 shadow-xl">
      <video
        ref={videoRef}
        className={`h-full w-full bg-black ${
          objectFit === "contain" ? "object-contain object-center" : "object-cover"
        }`}
        autoPlay
        muted={muted}
        loop
        playsInline
        controls={showControls}
        controlsList="nodownload"
        preload="auto"
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
