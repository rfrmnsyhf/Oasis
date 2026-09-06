export interface GalleryItem {
  src: string;
  alt: string;
  tag: "interior" | "food" | "people" | "detail" | "night";
  span: "tall" | "wide" | "square";
}

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const gallery: GalleryItem[] = [
  { src: u("photo-1517248135467-4c7edcad34c4", 1200), alt: "Warm interior lighting", tag: "interior", span: "tall" },
  { src: u("photo-1414235077428-338989a2e8c0", 1200), alt: "Plated dish", tag: "food", span: "wide" },
  { src: u("photo-1466978913421-dad2ebd01d17", 1200), alt: "Friends at dinner", tag: "people", span: "square" },
  { src: u("photo-1559339352-11d035aa65de", 1200), alt: "Tableware detail", tag: "detail", span: "square" },
  { src: u("photo-1552566626-52f8b828add9", 1200), alt: "Evening ambience", tag: "night", span: "tall" },
  { src: u("photo-1473093295043-cdd812d0e601", 1200), alt: "Main course", tag: "food", span: "square" },
  { src: u("photo-1525610553991-2bede1a236e2", 1200), alt: "Cozy seating", tag: "interior", span: "wide" },
  { src: u("photo-1481833761820-0509d3217039", 1200), alt: "After-dinner moment", tag: "people", span: "tall" },
  { src: u("photo-1546069901-ba9599a7e63c", 1200), alt: "Bowl of food", tag: "food", span: "square" },
  { src: u("photo-1551782450-a2132b4ba21d", 1200), alt: "Burger detail", tag: "food", span: "square" },
  { src: u("photo-1424847651672-bf20a4b0982b", 1200), alt: "Bar counter", tag: "detail", span: "wide" },
  { src: u("photo-1529543544282-ea669407fca3", 1200), alt: "Night atmosphere", tag: "night", span: "tall" },
];
