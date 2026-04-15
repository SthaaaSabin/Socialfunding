"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import type { Story } from "@/data/stories";
import RoadBlob from "./RoadBlob";
import { photosByStop } from "./illustrations";

interface StoryStopProps {
  story: Story;
  index: number;
  isFirst: boolean;
  isLast: boolean;
}

const ZONE_LABEL: Record<Story["zone"], string> = {
  mountain: "Himalaya",
  hill: "Mid-Hills",
  terai: "Terai",
};

/**
 * Full-viewport story section. On one side: a massive organic terrain blob
 * with 3-4 illustrated SVG scenes sitting on it. On the other: a large
 * typographic text block — headline, body, CTA. No photos.
 */
export default function StoryStop({ story, index, isFirst, isLast }: StoryStopProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  const photos = photosByStop[story.id] ?? [];
  const blobOnRight = story.side === "right";

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      const photoEls = blobRef.current?.querySelectorAll<HTMLElement>("[data-photo]") ?? [];
      gsap.fromTo(
        photoEls,
        { opacity: 0, scale: 0.82, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center py-24 md:py-32"
    >
      {/* BLOB — massive terrain on one side */}
      <div
        ref={blobRef}
        className={`absolute inset-y-0 ${blobOnRight ? "right-0" : "left-0"} w-[78%] md:w-[72%] lg:w-[68%] pointer-events-none`}
      >
        <RoadBlob zone={story.zone} side={story.side} neckTop={!isFirst} neckBottom={!isLast} />

        {/* Real photos sitting on the blob */}
        {photos.map((p, i) => {
          const dims =
            p.size === "lg"
              ? "w-[260px] h-[190px] md:w-[340px] md:h-[250px]"
              : "w-[200px] h-[140px] md:w-[250px] md:h-[180px]";
          return (
            <figure
              key={i}
              data-photo
              className={`absolute ${dims} rounded-xl overflow-hidden shadow-xl shadow-charcoal/30 ring-1 ring-white/40`}
              style={{
                top: p.top,
                left: p.left,
                right: p.right,
                transform: `rotate(${p.rotate}deg)`,
                zIndex: p.z,
              }}
            >
              <img src={p.src} alt={p.alt} className="w-full h-full object-cover" loading="lazy" />
            </figure>
          );
        })}
      </div>

      {/* TEXT — opposite side, large, airy */}
      <div
        className={`relative z-10 w-full px-6 md:px-12 lg:px-20 flex ${
          blobOnRight ? "justify-start" : "justify-end"
        }`}
      >
        <div
          ref={textRef}
          className="max-w-xl bg-cream/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-14 shadow-xl shadow-charcoal/5"
        >
          <div className="text-[11px] tracking-[0.4em] uppercase text-saffron-dark/80 mb-5">
            Stop · 0{index + 1} · {ZONE_LABEL[story.zone]}
          </div>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05] mb-6">
            {story.title}
          </h3>
          <p className="font-sans text-lg md:text-xl text-charcoal/75 leading-relaxed mb-8">
            {story.description}
          </p>
          <button className="inline-flex items-center gap-2 text-sm md:text-base text-saffron-dark font-medium hover:text-saffron transition-colors">
            {story.cta}
          </button>
        </div>
      </div>
    </div>
  );
}
