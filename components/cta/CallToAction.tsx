"use client";

import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CallToAction() {
  const ref = useRef<HTMLDivElement>(null);

  useScrollAnimation(ref, {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
    trigger: { trigger: ref.current, start: "top 80%", toggleActions: "play none none reverse" },
    mode: "fromTo",
  });

  return (
    <section id="involved" className="relative w-full py-32 md:py-40 overflow-hidden">
      {/* Ambient illustrations */}
      <div aria-hidden className="absolute left-[8%] top-1/3 w-20 opacity-40 hidden md:block">
        <svg viewBox="0 0 80 100">
          <rect x="36" y="60" width="8" height="30" fill="#6b4423" />
          <path d="M40 10 L20 55 L60 55 Z" fill="#4A7C59" />
          <path d="M40 25 L24 65 L56 65 Z" fill="#4A7C59" />
        </svg>
      </div>
      <div aria-hidden className="absolute right-[10%] top-1/4 w-28 opacity-40 hidden md:block">
        <svg viewBox="0 0 120 40" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round">
          <path d="M10 20 Q 18 10, 26 20 Q 34 10, 42 20" />
          <path d="M60 12 Q 68 2, 76 12 Q 84 2, 92 12" />
        </svg>
      </div>

      <div ref={ref} className="relative max-w-3xl mx-auto text-center px-6 pt-24">
        <div className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-charcoal/50 mb-6">
          Be part of the story
        </div>
        <h2 className="font-serif text-4xl md:text-6xl text-charcoal leading-[1.05]">
          Every Child Deserves a Chance
        </h2>
        <p className="mt-6 font-sans text-base md:text-lg text-charcoal/60 max-w-xl mx-auto leading-relaxed">
          From study tables to eyeglasses, from microloans to school shoes — small
          support creates lasting change. Be part of the Grande Social Foundation story.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-saffron hover:bg-saffron-dark text-charcoal px-8 py-4 text-[11px] tracking-[0.3em] uppercase transition-colors">
            Partner With Us
          </button>
          <button className="border border-saffron text-saffron-dark hover:bg-saffron hover:text-charcoal px-8 py-4 text-[11px] tracking-[0.3em] uppercase transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
