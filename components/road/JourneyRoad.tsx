"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * The full journey road. A single continuous path that starts at the top of
 * the stories section, winds between every blob, flows into the CTA, then
 * loops around the footer and curves back up to "point" at the CTA title.
 *
 * Rendered as an absolute-positioned SVG inside a wrapper that contains
 * RoadSection + CTA + Footer. Progressive draw-in is scrubbed to scroll so
 * the road appears as the user scrolls — not all at once.
 */
// Single continuous path. viewBox 100 wide × 1000 tall, stretched to the
// wrapper with preserveAspectRatio="none".
//   0 – 600   : zigzag through the 6 story stops
// 600 – 680   : flow into the CTA
// 680 – 930   : big U around the footer columns
// 930 – 1000  : return back up to end at the CTA title area
// Zigzag through the 6 story stops (y 0–600) and taper off gently just after
// the last story ("A Future Worth Building"). No loop, no CTA/footer detour.
const ROAD_D = `
  M 50 0
  C 72 70, 22 140, 58 200
  S 18 320, 52 400
  S 82 520, 48 600
  S 20 720, 55 800
  S 82 880, 48 920
`;

export default function JourneyRoad({
  wrapperRef,
}: {
  wrapperRef: React.RefObject<HTMLElement | HTMLDivElement>;
}) {
  const baseRef = useRef<SVGPathElement>(null);
  const dashRef = useRef<SVGPathElement>(null);
  const shadowRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !baseRef.current) return;
    const base = baseRef.current;
    const dash = dashRef.current;
    const shadow = shadowRef.current;

    const ctx = gsap.context(() => {
      const len = base.getTotalLength();
      gsap.set([base, shadow], { strokeDasharray: len, strokeDashoffset: len });
      // dashed centerline animates via its own offset so it reveals with the base
      const dashLen = dash?.getTotalLength() ?? len;
      if (dash) {
        const visDashPattern = "2.5 2.8";
        // animate dash reveal using a parallel stroke-dashoffset on the base
        // copy — easiest trick: overlay one solid dash reveal path above,
        // then swap dasharray once revealed. Simpler: just animate opacity
        // alongside draw-in.
        gsap.set(dash, { strokeDasharray: visDashPattern, opacity: 0 });
        void dashLen;
      }

      const st = {
        trigger: wrapperRef.current!,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      };

      gsap.to([base, shadow], { strokeDashoffset: 0, ease: "none", scrollTrigger: st });
      if (dash) {
        gsap.to(dash, { opacity: 0.9, ease: "none", scrollTrigger: st });
      }
    });

    return () => ctx.revert();
  }, [wrapperRef]);

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    >
      {/* soft shadow under the road */}
      <path
        ref={shadowRef}
        d={ROAD_D}
        stroke="#000"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
        opacity="0.12"
        transform="translate(0 1.8)"
      />
      {/* main earth-tone road */}
      <path
        ref={baseRef}
        d={ROAD_D}
        stroke="#AEBDC9"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      {/* cream centerline dashes */}
      <path
        ref={dashRef}
        d={ROAD_D}
        stroke="#F5F0E8"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
