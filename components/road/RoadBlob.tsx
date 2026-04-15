"use client";

import type { Zone } from "@/data/stories";

interface BlobProps {
  zone: Zone;
  side: "left" | "right";
  /** show the narrow "neck" tendril at the top so stops feel connected */
  neckTop?: boolean;
  /** show the narrow "neck" tendril at the bottom */
  neckBottom?: boolean;
  /** let the blob fill the full viewport width (for Terai finale) */
  fullWidth?: boolean;
}

const ZONE_GRADIENTS: Record<Zone, { from: string; to: string }> = {
  mountain: { from: "#EAF1F5", to: "#B8CBD6" },
  hill: { from: "#7BB089", to: "#4A7C59" },
  terai: { from: "#D9B776", to: "#B3874A" },
};

/**
 * A single MASSIVE organic blob that fills one side of the viewport per story.
 * The blob is the TERRAIN the story lives on — not a road. Zone-tinted
 * gradient, thick bulges, narrow connecting neck top & bottom so successive
 * stops feel like one flowing landscape.
 */
export default function RoadBlob({ zone, side, neckTop, neckBottom, fullWidth }: BlobProps) {
  const gid = `blob-${zone}-${side}-${Math.random().toString(36).slice(2, 7)}`;
  const { from, to } = ZONE_GRADIENTS[zone];

  if (fullWidth) {
    return (
      <svg
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <path
          d="M0 0 Q 180 40 360 20 T 720 30 T 1200 10 L 1200 900 L 0 900 Z"
          fill={`url(#${gid})`}
        />
        <path
          d="M0 40 Q 200 80 400 60 T 800 70 T 1200 50"
          stroke={to}
          strokeWidth="3"
          fill="none"
          opacity="0.2"
        />
      </svg>
    );
  }

  // Right-side blob: occupies right 75% of the viewport with organic bulges.
  // Left-side blob: mirror.
  const rightPath = `
    M 1200 ${neckTop ? "-20" : "0"}
    L ${neckTop ? 560 : 200} 0
    C ${neckTop ? 420 : 120} 80, ${neckTop ? 380 : 80} 140, 300 220
    C 180 320, 60 420, 160 560
    C 240 680, 120 760, 260 880
    C 380 980, 200 1040, 340 1160
    C 460 1260, 280 1320, 420 1420
    L ${neckBottom ? 560 : 220} 1500
    L 1200 ${neckBottom ? 1520 : 1500}
    Z
  `;

  const leftPath = `
    M 0 ${neckTop ? "-20" : "0"}
    L ${neckTop ? 640 : 1000} 0
    C ${neckTop ? 780 : 1080} 80, ${neckTop ? 820 : 1120} 140, 900 220
    C 1020 320, 1140 420, 1040 560
    C 960 680, 1080 760, 940 880
    C 820 980, 1000 1040, 860 1160
    C 740 1260, 920 1320, 780 1420
    L ${neckBottom ? 640 : 980} 1500
    L 0 ${neckBottom ? 1520 : 1500}
    Z
  `;

  return (
    <svg
      viewBox="0 0 1200 1500"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
      aria-hidden
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <path d={side === "right" ? rightPath : leftPath} fill={`url(#${gid})`} />
      {/* subtle inner shade to add dimension along the curving edge */}
      <path
        d={side === "right" ? rightPath : leftPath}
        fill="none"
        stroke={to}
        strokeOpacity="0.18"
        strokeWidth="2"
      />
    </svg>
  );
}
