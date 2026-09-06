export const restaurant = {
  name: "OASIS Restaurant",
  tagline: "Modern Dining in Tanjungpinang",
  description:
    "A modern restaurant in Tanjungpinang where good food, thoughtful spaces and easy conversations come together.",
  location: "Tanjungpinang, Kepulauan Riau",
  address: {
    line1: "WF5R+7PF, Batu IX",
    line2: "Kec. Tanjungpinang Tim., Kota Tanjung Pinang",
    province: "Kepulauan Riau 29123, Indonesia",
    plusCode: "WF5R+7PF",
  },
  rating: 4.5,
  reviewCount: 142,
  ratingSource: "Google Reviews",
  hours: [
    { day: "Monday", open: "11:00", close: "22:00" },
    { day: "Tuesday", open: "11:00", close: "22:00" },
    { day: "Wednesday", open: "11:00", close: "22:00" },
    { day: "Thursday", open: "11:00", close: "22:00" },
    { day: "Friday", open: "11:00", close: "22:00" },
    { day: "Saturday", open: "11:00", close: "23:00" },
    { day: "Sunday", open: "11:00", close: "22:00" },
  ],
  services: ["Dine-in", "Takeaway", "Online ordering via GoFood"],
  phone: null as string | null,
  whatsapp: null as string | null,
  reservationEnabled: false,
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
