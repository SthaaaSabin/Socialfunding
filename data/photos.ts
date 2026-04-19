export type PhotoCategory = "education" | "health" | "livelihoods" | "community";

export interface Photo {
  id: number;
  src: string;
  title: string;
  category: PhotoCategory;
  tone: string; // tailwind bg class for placeholder
  aspect: string; // tailwind aspect class
}

export const photos: Photo[] = [
  { id: 1, src: "", title: "Morning assembly at Gyaneswari School", category: "education", tone: "bg-mountain", aspect: "aspect-[4/5]" },
  { id: 2, src: "", title: "Niroj at his new study table", category: "education", tone: "bg-saffron/30", aspect: "aspect-square" },
  { id: 3, src: "", title: "Amrit in the school library", category: "education", tone: "bg-hills/60", aspect: "aspect-[3/4]" },
  { id: 4, src: "", title: "Scholarship distribution day", category: "education", tone: "bg-terai/60", aspect: "aspect-[4/3]" },
  { id: 5, src: "", title: "Students receiving school supplies", category: "education", tone: "bg-cream", aspect: "aspect-square" },

  { id: 6, src: "", title: "Eye screening camp at Mahankali School", category: "health", tone: "bg-mountain", aspect: "aspect-[3/4]" },
  { id: 7, src: "", title: "Students receiving eyeglasses", category: "health", tone: "bg-saffron/20", aspect: "aspect-[4/5]" },
  { id: 8, src: "", title: "Teachers at vision screening training", category: "health", tone: "bg-hills/40", aspect: "aspect-square" },
  { id: 9, src: "", title: "Tilganga Institute partnership visit", category: "health", tone: "bg-charcoal/70", aspect: "aspect-[4/3]" },
  { id: 10, src: "", title: "Children's health checkup day", category: "health", tone: "bg-terai/40", aspect: "aspect-[3/4]" },

  { id: 11, src: "", title: "Kamala with her dairy cows", category: "livelihoods", tone: "bg-terai/70", aspect: "aspect-square" },
  { id: 12, src: "", title: "Cooperative meeting in Panchkhal", category: "livelihoods", tone: "bg-hills/50", aspect: "aspect-[4/5]" },
  { id: 13, src: "", title: "Vegetable farming in Panchkhal", category: "livelihoods", tone: "bg-mountain", aspect: "aspect-[3/4]" },
  { id: 14, src: "", title: "Dairy cooperative milk collection", category: "livelihoods", tone: "bg-saffron/40", aspect: "aspect-[4/3]" },
  { id: 15, src: "", title: "Families returning from brick kilns", category: "livelihoods", tone: "bg-cream", aspect: "aspect-square" },

  { id: 16, src: "", title: "GSF annual community gathering", category: "community", tone: "bg-saffron/50", aspect: "aspect-[4/5]" },
  { id: 17, src: "", title: "Parent-teacher meeting at school", category: "community", tone: "bg-charcoal/60", aspect: "aspect-[3/4]" },
  { id: 18, src: "", title: "Volunteers distributing supplies", category: "community", tone: "bg-hills/30", aspect: "aspect-square" },
  { id: 19, src: "", title: "Community awareness program", category: "community", tone: "bg-mountain", aspect: "aspect-[4/3]" },
  { id: 20, src: "", title: "Youth leadership workshop", category: "community", tone: "bg-terai/50", aspect: "aspect-[3/4]" },
];
