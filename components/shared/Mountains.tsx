/**
 * Shared mountain silhouette geometry — used by the Hero bottom AND the top
 * edge of RoadSection, so the peaks line up across the seam and read as one
 * continuous landscape. Four variants: back/mid/front filled silhouettes for
 * the hero, and the same back peaks carved OUT of the cream for the section
 * edge (mountains poke up through the cream).
 */

// Shared peak paths — keep these identical in hero & section edge.
export const BACK_PEAKS =
  "L0 260 L140 160 L260 240 L380 120 L520 220 L640 90 L780 200 L920 70 L1060 210 L1200 140 L1320 240 L1440 160";
export const MID_PEAKS =
  "L0 320 L160 260 L300 300 L460 230 L620 290 L780 240 L940 300 L1100 250 L1280 310 L1440 260";
export const FRONT_PEAKS =
  "L0 360 L200 320 L400 360 L620 330 L860 370 L1100 340 L1320 370 L1440 350";

export function HeroMountains() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 420"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 w-full h-[55%]"
    >
      <path d={`M0 420 ${BACK_PEAKS} L1440 420 Z`} fill="#D9E2EA" opacity="0.9" />
      <path d={`M0 420 ${MID_PEAKS} L1440 420 Z`} fill="#C3D0DB" opacity="0.75" />
      <path d={`M0 420 ${FRONT_PEAKS} L1440 420 Z`} fill="#AEBDC9" opacity="0.6" />
    </svg>
  );
}

/**
 * The cream overlap edge shaped as the same back-peak range, so the hero's
 * back mountains stay visible poking up through the cream as the section
 * slides over. Mid/front silhouettes render BELOW the edge to maintain depth.
 */
export function SectionMountainEdge() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 420"
      preserveAspectRatio="none"
      className="block w-full h-[36vh] md:h-[44vh] -mb-px"
    >
      {/* cream fills everything BELOW the back-peak line — so back peaks remain visible above the cream */}
      <path d={`M0 420 ${BACK_PEAKS} L1440 420 Z`} fill="#F5F0E8" />
      {/* mid + front silhouettes layered on top of the cream, continuing the depth */}
      <path d={`M0 420 ${MID_PEAKS} L1440 420 Z`} fill="#C3D0DB" opacity="0.55" />
      <path d={`M0 420 ${FRONT_PEAKS} L1440 420 Z`} fill="#AEBDC9" opacity="0.4" />
    </svg>
  );
}
