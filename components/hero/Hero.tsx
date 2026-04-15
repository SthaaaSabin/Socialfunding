"use client";

import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { HeroMountains } from "@/components/shared/Mountains";

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(titleRef, {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, duration: 1.4, ease: "power2.out" },
    trigger: { trigger: titleRef.current, start: "top 90%", once: true },
    mode: "fromTo",
  });

  useScrollAnimation(emblemRef, {
    from: { opacity: 0, scale: 0.85, rotate: -8 },
    to: { opacity: 1, scale: 1, rotate: 0, duration: 1.6, ease: "power2.out", delay: 0.2 },
    trigger: { trigger: emblemRef.current, start: "top 90%", once: true },
    mode: "fromTo",
  });

  return (
    <section className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center z-0">
      {/* Atmospheric gradient: snowy whites → soft blues → pale greens */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-mountain to-cream" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-mountain/40 to-hills/10" />

      {/* Distant mountain silhouette — shared geometry with RoadSection edge */}
      <HeroMountains />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div ref={emblemRef} className="mb-10">
          <Emblem />
        </div>
        <div ref={titleRef}>
          <div className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-charcoal/60 mb-5">
            Est. in the Himalayas
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal tracking-tight leading-[0.95]">
            United Hope
            <span className="block italic font-normal text-charcoal/80">Nepal</span>
          </h1>
          <div className="mt-6 text-xs md:text-sm tracking-[0.3em] uppercase text-charcoal/50">
            From the mountains · to the plains
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-charcoal/60 animate-bounce">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="4" x2="12" y2="18" />
          <polyline points="6 13 12 19 18 13" />
        </svg>
      </div>
    </section>
  );
}

function Emblem() {
  // Simple lotus / geometric emblem
  return (
    <svg viewBox="0 0 120 120" className="w-20 h-20 md:w-28 md:h-28 text-saffron-dark">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="60" cy="60" r="55" />
        <circle cx="60" cy="60" r="38" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <path
              key={i}
              d="M60 22 C 70 40, 70 60, 60 75 C 50 60, 50 40, 60 22 Z"
              transform={`rotate(${angle} 60 60)`}
            />
          );
        })}
        <circle cx="60" cy="60" r="4" fill="currentColor" />
      </g>
    </svg>
  );
}
