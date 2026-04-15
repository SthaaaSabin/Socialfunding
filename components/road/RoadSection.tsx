"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { stories } from "@/data/stories";
import StoryStop from "./StoryCard";

/**
 * The journey. Section slides UP and OVER the sticky Hero via a curved SVG
 * top edge, with mountain silhouettes visible behind the intro text. Six
 * full-viewport story stops each carry a massive terrain blob. A thin winding
 * connector path runs between the stops as a visual journey thread.
 */
export default function RoadSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="relative w-full"
    >
      {/* Intro */}
      <div className="relative overflow-hidden">
        <div ref={introRef} className="relative max-w-5xl mx-auto text-center px-6 pt-12 md:pt-16 pb-24 md:pb-32">
          <div className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-charcoal/50 mb-6">
            A Journey Through Nepal
          </div>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal leading-[1.02] tracking-tight">
            One country,<br />
            countless <span className="italic text-charcoal/70">roads</span> —
          </h2>
          <p className="mt-8 font-sans text-lg md:text-xl text-charcoal/65 max-w-2xl mx-auto">
            and the people who walk them. Scroll through six stops, from the snowline of the Himalayas down to the plains of the Terai.
          </p>
        </div>
      </div>

      {/* Six story stops (road is drawn by <JourneyRoad> in the parent) */}
      <div className="relative">
        {stories.map((story, i) => (
          <StoryStop
            key={story.id}
            story={story}
            index={i}
            isFirst={i === 0}
            isLast={i === stories.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
