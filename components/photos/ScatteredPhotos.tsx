"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import type { Photo } from "@/data/photos";

interface ScatteredPhotosProps {
  photos: Photo[];
}

const SCATTER_STYLES = [
  { rot: -8, mt: 0, width: "w-40 md:w-56 lg:w-64" },
  { rot: 6, mt: 40, width: "w-36 md:w-48 lg:w-56" },
  { rot: -11, mt: -20, width: "w-44 md:w-60 lg:w-72" },
  { rot: 4, mt: 60, width: "w-40 md:w-56 lg:w-64" },
  { rot: 12, mt: 10, width: "w-36 md:w-52 lg:w-60" },
  { rot: -5, mt: 30, width: "w-48 md:w-64 lg:w-80" },
  { rot: 9, mt: -30, width: "w-40 md:w-56 lg:w-64" },
  { rot: -10, mt: 50, width: "w-44 md:w-60 lg:w-72" },
  { rot: 7, mt: 20, width: "w-36 md:w-48 lg:w-56" },
  { rot: -3, mt: -10, width: "w-40 md:w-56 lg:w-64" },
  { rot: 11, mt: 40, width: "w-44 md:w-60 lg:w-72" },
  { rot: -7, mt: -40, width: "w-36 md:w-52 lg:w-60" },
  { rot: 5, mt: 15, width: "w-48 md:w-64 lg:w-80" },
  { rot: -12, mt: 25, width: "w-40 md:w-56 lg:w-64" },
  { rot: 8, mt: -5, width: "w-36 md:w-48 lg:w-56" },
  { rot: -6, mt: 45, width: "w-44 md:w-60 lg:w-72" },
  { rot: 10, mt: 5, width: "w-40 md:w-56 lg:w-64" },
  { rot: -4, mt: 35, width: "w-48 md:w-64 lg:w-80" },
  { rot: 3, mt: -25, width: "w-36 md:w-52 lg:w-60" },
  { rot: -9, mt: 55, width: "w-44 md:w-60 lg:w-72" },
];

export default function ScatteredPhotos({ photos }: ScatteredPhotosProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".scatter-card");
    
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.6 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.04,
        ease: "back.out(1.5)",
      }
    );
  }, [photos]);

  return (
    <div ref={containerRef} className="relative flex flex-wrap justify-center items-center gap-4 md:gap-8 py-16 max-w-5xl mx-auto">
      {photos.map((p, i) => {
        const style = SCATTER_STYLES[i % SCATTER_STYLES.length];
        
        return (
          <div
            key={p.id}
            className={`scatter-card relative shrink-0 transition-all duration-300 hover:!rotate-0 hover:scale-110 hover:z-[50] group cursor-pointer p-2 md:p-3 bg-card-white shadow-xl shadow-charcoal/10 ${style.width}`}
            style={{ 
              transform: `rotate(${style.rot}deg)`, 
              marginTop: `${style.mt}px`,
              zIndex: i + 10
            }}
          >
            <div className={`${p.tone} ${p.aspect} w-full relative flex items-end p-4 overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 text-card-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="block text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-card-white/80 mb-1 drop-shadow-md">
                  {p.category}
                </span>
                <div className="font-serif text-sm md:text-base drop-shadow-md">
                  {p.title}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
