import type { Bilingual, Lang } from "../utils/i18n";
import { t as pick } from "../utils/i18n";

export interface Review {
  quote: Bilingual;
  author: Bilingual;
  source: Bilingual;
}

export const featuredReviews: Review[] = [
  {
    quote: {
      id: "Makanannya enak, tempatnya bagus, dan pelayanannya bagus. Pasti balik lagi.",
      en: "The food is good, the place is nice, and the service is great. Will definitely come back.",
    },
    author: { id: "Tamu Google", en: "Google Guest" },
    source: { id: "Ulasan Google", en: "Google Reviews" },
  },
  {
    quote: {
      id: "Suasana nyaman, makanan dan minumannya oke banget. Cocok buat nongkrong sore.",
      en: "Cozy atmosphere, food and drinks are very good. Great for hanging out in the afternoon.",
    },
    author: { id: "Tamu Google", en: "Google Guest" },
    source: { id: "Ulasan Google", en: "Google Reviews" },
  },
  {
    quote: {
      id: "Tempatnya nyaman, luas, dan banyak spot untuk foto. Interior aesthetic.",
      en: "The place is comfortable, spacious, and has many spots for photos. Aesthetic interior.",
    },
    author: { id: "Tamu Google", en: "Google Guest" },
    source: { id: "Ulasan Google", en: "Google Reviews" },
  },
  {
    quote: {
      id: "Cocok untuk makan bersama keluarga atau kumpul sama teman. Menu variatif.",
      en: "Great for family meals or hanging out with friends. Varied menu.",
    },
    author: { id: "Tamu Google", en: "Google Guest" },
    source: { id: "Ulasan Google", en: "Google Reviews" },
  },
];

export const reviewText = (r: Review, lang: Lang) => ({
  quote: pick(r.quote, lang),
  author: pick(r.author, lang),
  source: pick(r.source, lang),
});
