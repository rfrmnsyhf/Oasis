import type { Bilingual, Lang } from "../utils/i18n";
import { t as pick } from "../utils/i18n";

export interface ExperienceMoment {
  index: string;
  title: Bilingual;
  body: Bilingual;
  image: string;
}

export const experienceMoments: ExperienceMoment[] = [
  {
    index: "01",
    title: { id: "DINE", en: "DINE" },
    body: {
      id: "Makanan enak, disajikan dengan penuh perhatian. Asian soul, kerajinan kontemporer.",
      en: "Good food, thoughtfully served. Asian soul, contemporary craft.",
    },
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    index: "02",
    title: { id: "GATHER", en: "GATHER" },
    body: {
      id: "Ruang untuk percakapan. Meja panjang, cahaya lembut, waktu yang santai.",
      en: "A space made for conversations. Long tables, soft light, easy hours.",
    },
    image:
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    index: "03",
    title: { id: "STAY", en: "STAY" },
    body: {
      id: "Datang untuk makan. Berlama-lama untuk suasananya — pelarian kecilmu.",
      en: "Come for dinner. Stay for the atmosphere — your little escape.",
    },
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80",
  },
];

export const expText = (m: ExperienceMoment, lang: Lang) => ({
  title: pick(m.title, lang),
  body: pick(m.body, lang),
});
