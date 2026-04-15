"use client";

import { useEffect, RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export interface ScrollAnimationConfig {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  trigger?: ScrollTrigger.Vars;
  /** Use fromTo if both from and to are provided. Defaults to true. */
  mode?: "from" | "to" | "fromTo";
}

/**
 * Reusable GSAP ScrollTrigger hook. Attaches a scroll-driven tween to the
 * referenced element. Cleans up triggers automatically on unmount.
 */
export function useScrollAnimation<T extends HTMLElement>(
  ref: RefObject<T>,
  config: ScrollAnimationConfig,
  deps: unknown[] = [],
): void {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const trigger: ScrollTrigger.Vars = {
      start: "top 85%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      ...config.trigger,
      trigger: config.trigger?.trigger ?? el,
    };

    const mode = config.mode ?? (config.from && config.to ? "fromTo" : "to");

    let tween: gsap.core.Tween;
    if (mode === "fromTo" && config.from && config.to) {
      tween = gsap.fromTo(el, config.from, { ...config.to, scrollTrigger: trigger });
    } else if (mode === "from" && config.from) {
      tween = gsap.from(el, { ...config.from, scrollTrigger: trigger });
    } else {
      tween = gsap.to(el, { ...(config.to ?? {}), scrollTrigger: trigger });
    }

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
