export type Zone = "mountain" | "hill" | "terai";

export interface Story {
  id: number;
  title: string;
  description: string;
  side: "left" | "right";
  zone: Zone;
  cta: string;
  label: string; // e.g. "EDUCATION", "LIVELIHOODS", "HEALTH"
}

export const stories: Story[] = [
  {
    id: 1,
    title: "A Table Changed Everything",
    description:
      "Niroj Tamang, 14, studied on his bed every night — no desk, no chair. His father could barely cover daily expenses. Through GSF's scholarship, Niroj received a study table, chair, and school shoes. 'Earlier, I used to study on my bed. Now I have my own table, and I can study longer and focus better.' He hasn't missed a single class since.",
    side: "right",
    zone: "mountain",
    cta: "Support a student →",
    label: "Education",
  },
  {
    id: 2,
    title: "I Don't Want to Miss My Class",
    description:
      "Amrit Pariyar, 11, comes from a marginalized family in Panchkhal. His father couldn't afford uniforms, shoes, or a school bag. Amrit often arrived at school without basic supplies. With GSF's support, he now attends every day, participates actively, and manages the school library. His father says: 'There were times my son had to miss school because we couldn't afford shoes. Now he goes happily.'",
    side: "left",
    zone: "mountain",
    cta: "Fund a scholarship →",
    label: "Education",
  },
  {
    id: 3,
    title: "Breaking the Brick Kiln Cycle",
    description:
      "Every year, 27 families in Panchkhal migrated to brick kilns in Bhaktapur for seasonal work — pulling their children out of school for 4 to 5 months. Parents didn't want to leave. They had no choice. GSF partnered with a local cooperative to provide microloans for dairy farming, grocery shops, and vegetable trading. Today, over 15 of those families have stopped migrating. Their children are back in class.",
    side: "right",
    zone: "hill",
    cta: "Support livelihoods →",
    label: "Livelihoods",
  },
  {
    id: 4,
    title: "From Brick Kilns to 35 Litres a Day",
    description:
      "Kamala Tamang, 46, survived on irregular daily wages and seasonal brick kiln labor for years. With a small loan from the GSF-supported cooperative, she bought her first cow. Then another. Then she started vegetable farming. Today, Kamala owns three milking cows, sells 35 litres of milk daily, and earns NPR 2,200 a day. She says this level of income was unimaginable just a few years ago.",
    side: "left",
    zone: "hill",
    cta: "Empower a family →",
    label: "Livelihoods",
  },
  {
    id: 5,
    title: "Seeing Clearly for the First Time",
    description:
      "Many children in Panchkhal didn't know they couldn't see properly. They struggled to read, fell behind, some dropped out. GSF partnered with Tilganga Institute of Ophthalmology to screen 480 students across 16 schools. 33 children were diagnosed with refractive errors and received free corrective glasses. 30 teachers were trained to continue annual screenings.",
    side: "right",
    zone: "terai",
    cta: "Support eye care →",
    label: "Health",
  },
  {
    id: 6,
    title: "Five Schools, One Vision",
    description:
      "What started with 5 community schools in Panchkhal is growing. GSF is expanding into dental care, hearing screening, and learning disability assessment. Early childhood education will be strengthened across all schools in 2026. Every child profiled. Every family supported. Every classroom improved — the foundation for lasting change, one child at a time.",
    side: "left",
    zone: "terai",
    cta: "Join the mission →",
    label: "Looking Ahead",
  },
];
