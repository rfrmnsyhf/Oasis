import type { Bilingual, Lang } from "../utils/i18n";
import { t as pick } from "../utils/i18n";

export const restaurant = {
  name: "OASIS Restaurant",
  tagline: {
    id: "Modern Dining di Tanjungpinang",
    en: "Modern Dining in Tanjungpinang",
  } as Bilingual,
  description: {
    id: "Tempat untuk makan, kumpul, dan berlama-lama.",
    en: "A place to eat, gather and stay awhile.",
  } as Bilingual,
  longDescription: {
    id: "OASIS adalah restoran modern di Tanjungpinang tempat makanan enak, ruang yang thoughtful, dan obrolan ringan bertemu jadi satu.",
    en: "A modern restaurant in Tanjungpinang where good food, thoughtful spaces and easy conversations come together.",
  } as Bilingual,
  location: "Tanjungpinang, Kepulauan Riau",
  address: {
    line1: "WF5R+7PF, Batu IX",
    line2: { id: "Kec. Tanjungpinang Tim., Kota Tanjung Pinang", en: "Tanjungpinang Tim. Sub-district, Tanjung Pinang City" } as Bilingual,
    province: "Kepulauan Riau 29123, Indonesia",
    plusCode: "WF5R+7PF",
  },
  rating: 4.5,
  reviewCount: 142,
  ratingSource: "Google Reviews",
  hours: [
    { day: { id: "Senin", en: "Monday" }, open: "11:00", close: "22:00" },
    { day: { id: "Selasa", en: "Tuesday" }, open: "11:00", close: "22:00" },
    { day: { id: "Rabu", en: "Wednesday" }, open: "11:00", close: "22:00" },
    { day: { id: "Kamis", en: "Thursday" }, open: "11:00", close: "22:00" },
    { day: { id: "Jumat", en: "Friday" }, open: "11:00", close: "22:00" },
    { day: { id: "Sabtu", en: "Saturday" }, open: "11:00", close: "23:00" },
    { day: { id: "Minggu", en: "Sunday" }, open: "11:00", close: "22:00" },
  ],
  services: {
    id: ["Dine-in", "Takeaway", "Online ordering via GoFood"],
    en: ["Dine-in", "Takeaway", "Online ordering via GoFood"],
  } as Bilingual<string[]>,
  phone: "+62 811-7009-998",
  whatsapp: "628117009998",
  reservationEnabled: true,
  social: {
    instagramHandle: "@oasisbintan",
    instagramUrl: "https://www.instagram.com/oasisbintan",
    tiktokHandle: "@oasisrestauranttnj",
    tiktokUrl: "https://www.tiktok.com/@oasisrestauranttnj",
    gofoodUrl: null as string | null,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=OASIS+Restaurant+Tanjungpinang",
  },
} as const;

export type Restaurant = typeof restaurant;
export const tr = pick;
