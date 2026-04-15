export type PhotoCategory = "education" | "healthcare" | "community" | "events";

export interface Photo {
  id: number;
  src: string;
  title: string;
  category: PhotoCategory;
  tone: string; // tailwind bg class for placeholder
  aspect: string; // tailwind aspect class
}

export const photos: Photo[] = [
  { id: 1, src: "", title: "Morning Classroom, Mustang", category: "education", tone: "bg-mountain", aspect: "aspect-[4/5]" },
  { id: 2, src: "", title: "Chalk and Sunlight", category: "education", tone: "bg-saffron/30", aspect: "aspect-square" },
  { id: 3, src: "", title: "Library on a Hill", category: "education", tone: "bg-hills/60", aspect: "aspect-[3/4]" },
  { id: 4, src: "", title: "The First Page", category: "education", tone: "bg-terai/60", aspect: "aspect-[4/3]" },
  { id: 5, src: "", title: "Recess in Rolpa", category: "education", tone: "bg-cream", aspect: "aspect-square" },

  { id: 6, src: "", title: "Mobile Clinic, Humla", category: "healthcare", tone: "bg-mountain", aspect: "aspect-[3/4]" },
  { id: 7, src: "", title: "Maternal Care Outreach", category: "healthcare", tone: "bg-saffron/20", aspect: "aspect-[4/5]" },
  { id: 8, src: "", title: "Vaccination Day", category: "healthcare", tone: "bg-hills/40", aspect: "aspect-square" },
  { id: 9, src: "", title: "Night Shift Lanterns", category: "healthcare", tone: "bg-charcoal/70", aspect: "aspect-[4/3]" },
  { id: 10, src: "", title: "Hands That Heal", category: "healthcare", tone: "bg-terai/40", aspect: "aspect-[3/4]" },

  { id: 11, src: "", title: "Weaving Cooperative", category: "community", tone: "bg-terai/70", aspect: "aspect-square" },
  { id: 12, src: "", title: "Village Meeting", category: "community", tone: "bg-hills/50", aspect: "aspect-[4/5]" },
  { id: 13, src: "", title: "Water for Everyone", category: "community", tone: "bg-mountain", aspect: "aspect-[3/4]" },
  { id: 14, src: "", title: "Harvest Together", category: "community", tone: "bg-saffron/40", aspect: "aspect-[4/3]" },
  { id: 15, src: "", title: "Women of Dolakha", category: "community", tone: "bg-cream", aspect: "aspect-square" },

  { id: 16, src: "", title: "Annual Fundraiser", category: "events", tone: "bg-saffron/50", aspect: "aspect-[4/5]" },
  { id: 17, src: "", title: "Lantern Festival", category: "events", tone: "bg-charcoal/60", aspect: "aspect-[3/4]" },
  { id: 18, src: "", title: "Volunteers in Action", category: "events", tone: "bg-hills/30", aspect: "aspect-square" },
  { id: 19, src: "", title: "Monsoon Relief Drive", category: "events", tone: "bg-mountain", aspect: "aspect-[4/3]" },
  { id: 20, src: "", title: "Youth Leaders Summit", category: "events", tone: "bg-terai/50", aspect: "aspect-[3/4]" },
];
