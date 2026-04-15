"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import type { Photo } from "@/data/photos";

interface PhotoGridProps {
  photos: Photo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll("figure");
    if (cards.length === 0) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  }, [photos]);

  return (
    <div ref={gridRef} className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6">
      {photos.map((p) => (
        <figure
          key={p.id}
          className="mb-4 md:mb-6 break-inside-avoid rounded-xl overflow-hidden shadow-sm shadow-charcoal/5 group"
        >
          <div className={`${p.tone} ${p.aspect} w-full relative flex items-end p-4 bg-gray-100`}>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <figcaption className="relative z-10 text-card-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              <span className="block text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-card-white/80 mb-1 drop-shadow-md">
                {p.category}
              </span>
              <div className="font-serif text-sm md:text-base drop-shadow-md">
                {p.title}
              </div>
            </figcaption>
          </div>
        </figure>
      ))}
      {photos.length === 0 && (
        <div className="text-center text-charcoal/50 col-span-full py-20 inline-block w-full">
          No photos match that search.
        </div>
      )}
    </div>
  );
}
