export type Zone = "mountain" | "hill" | "terai";

export interface Story {
  id: number;
  title: string;
  description: string;
  side: "left" | "right"; // which side the BLOB sits on
  zone: Zone;
  cta: string;
}

export const stories: Story[] = [
  {
    id: 1,
    title: "3 Hours to School",
    description:
      "In the high villages of the Himalayas, children walk for hours across rivers and ridges just to reach a classroom. We build schools closer to home, so learning can begin at sunrise — not after a mountain.",
    side: "right",
    zone: "mountain",
    cta: "Support a school →",
  },
  {
    id: 2,
    title: "Voices Lost in the Snow",
    description:
      "When winter hits, remote mountain communities are completely cut off. No roads, no phone signal, no medical help. A simple illness can become a death sentence.",
    side: "left",
    zone: "mountain",
    cta: "Fund mountain aid →",
  },
  {
    id: 3,
    title: "One Doctor, 10,000 People",
    description:
      "Across the rural hills, a single clinic often serves tens of thousands. We partner with local health workers to bring maternal care, vaccinations, and emergency response to the places hospitals forget.",
    side: "right",
    zone: "hill",
    cta: "Back our clinics →",
  },
  {
    id: 4,
    title: "Building Stronger Communities",
    description:
      "Empowering women with microgrants, vocational training, and leadership programs transforms entire villages. When one woman rises, a community rises with her.",
    side: "left",
    zone: "hill",
    cta: "Empower women →",
  },
  {
    id: 5,
    title: "When the Rivers Rise",
    description:
      "Each monsoon, the Terai floods — washing away homes, crops, and schools. We rebuild stronger: flood-resilient housing, safe water, and livelihoods that survive the seasons.",
    side: "right",
    zone: "terai",
    cta: "Rebuild with us →",
  },
  {
    id: 6,
    title: "A Future Worth Building",
    description:
      "In the fastest-growing region of Nepal, rapid urbanization meets deep poverty. Children work instead of study. Families live without clean water. But change is possible.",
    side: "left",
    zone: "terai",
    cta: "Invest in the future →",
  },
];
