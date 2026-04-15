/**
 * Real photo slots per story stop. Two photos per stop — a larger primary
 * and a smaller secondary — positioned on the blob with slight offset &
 * rotation for an organic feel.
 */
export interface StopPhoto {
  src: string;
  alt: string;
  /** primary (larger) vs secondary (smaller) */
  size: "lg" | "sm";
  /** position as percentages inside the blob container */
  top: string;
  left?: string;
  right?: string;
  rotate: number;
  z: number;
}

const U = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=900&auto=format&fit=crop`;

export const photosByStop: Record<number, StopPhoto[]> = {
  1: [
    { src: U("photo-1544735716-392fe2489ffa"), alt: "Nepali mountain children walking", size: "lg", top: "18%", left: "18%", rotate: -2, z: 3 },
    { src: U("photo-1506905925346-21bda4d32df4"), alt: "Himalayan mountain trail", size: "sm", top: "52%", left: "48%", rotate: 3, z: 4 },
  ],
  2: [
    { src: U("photo-1542295669297-4d352b042bca"), alt: "Snowy Himalayan village", size: "lg", top: "16%", left: "24%", rotate: 2, z: 3 },
    { src: U("photo-1519681393784-d120267933ba"), alt: "Remote snowy mountain community", size: "sm", top: "54%", left: "14%", rotate: -3, z: 4 },
  ],
  3: [
    { src: U("photo-1576091160399-112ba8d25d1f"), alt: "Rural health clinic", size: "lg", top: "20%", left: "20%", rotate: -2, z: 3 },
    { src: U("photo-1559839734-2b71ea197ec2"), alt: "Healthcare worker in the field", size: "sm", top: "54%", left: "48%", rotate: 3, z: 4 },
  ],
  4: [
    { src: U("photo-1610465299996-30f240ac2b1c"), alt: "Nepali women weaving textiles", size: "lg", top: "16%", left: "28%", rotate: 2, z: 3 },
    { src: U("photo-1541544741938-0af808871cc0"), alt: "Village community gathering", size: "sm", top: "52%", left: "16%", rotate: -3, z: 4 },
  ],
  5: [
    { src: U("photo-1547683905-f686c993aae5"), alt: "Nepal flood damage", size: "lg", top: "20%", left: "18%", rotate: -2, z: 3 },
    { src: U("photo-1587502536575-6dfba0a6e017"), alt: "Flood relief effort", size: "sm", top: "54%", left: "50%", rotate: 3, z: 4 },
  ],
  6: [
    { src: U("photo-1503676260728-1c00da094a0b"), alt: "Nepali children studying", size: "lg", top: "18%", left: "26%", rotate: 2, z: 3 },
    { src: U("photo-1541888946425-d81bb19240f5"), alt: "New community building under construction", size: "sm", top: "56%", left: "14%", rotate: -3, z: 4 },
  ],
};
