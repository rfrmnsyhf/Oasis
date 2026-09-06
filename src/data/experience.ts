export interface ExperienceMoment {
  index: string;
  title: string;
  body: string;
  image: string;
}

export const experienceMoments: ExperienceMoment[] = [
  {
    index: "01",
    title: "DINE",
    body: "Good food, thoughtfully served. Asian soul, contemporary craft.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    index: "02",
    title: "GATHER",
    body: "A space made for conversations. Long tables, soft light, easy hours.",
    image:
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    index: "03",
    title: "STAY",
    body: "Come for dinner. Stay for the atmosphere — your little escape.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80",
  },
];
