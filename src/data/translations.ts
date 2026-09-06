import type { Lang } from "../utils/i18n";

export const ui = (lang: Lang) => {
  const id = {
    nav: {
      menu: "Menu",
      experience: "Experience",
      gallery: "Gallery",
      reviews: "Reviews",
      location: "Location",
      reserve: "Reserve",
      homeAria: "Buka menu",
    },
    bottomNav: { home: "Home", menu: "Menu", gallery: "Gallery", reserve: "Reserve" },
    skipToContent: "Lewati ke konten",
    hero: {
      tagline: "Modern Dining di Tanjungpinang",
      headline1: "Tempat untuk makan,",
      headline2: "kumpul",
      headlineEm: "dan berlama-lama.",
      body:
        "OASIS adalah restoran modern di Tanjungpinang tempat makanan enak, ruang yang thoughtful, dan obrolan ringan bertemu jadi satu.",
      cta1: "Lihat Menu",
      cta2: "Reservasi Meja",
      rating: "ulasan Google",
      scroll: "Scroll",
    },
    intro: {
      eyebrow: "Janji OASIS",
      headline1: "Lebih dari sekadar makan.",
      headlineEm: "Pelarian kecilmu.",
      body:
        "OASIS adalah restoran modern di Tanjungpinang tempat makanan enak, ruang yang thoughtful, dan obrolan ringan bertemu jadi satu.",
      since: "Sejak",
      located: "Lokasi",
      style: "Gaya",
      sinceVal: "2021",
      locatedVal: "Tanjungpinang",
      styleVal: "Casual Premium",
    },
    experience: {
      eyebrow: "The OASIS Experience",
      headline: "Tiga hal, dilakukan dengan care.",
      body: "Scroll untuk melihat apa yang bikin OASIS tempat untuk kembali — bukan sekadar tempat makan.",
      nav: "Drag, scroll, atau pakai panah",
      prev: "Sebelumnya",
      next: "Berikutnya",
    },
    favourites: {
      eyebrow: "Favorit Kami",
      headline1: "Pilihan kecil,",
      headlineEm: "jujur disukai.",
      viewAll: "Lihat menu lengkap",
      signature: "Signature",
      readMore: "Baca selengkapnya",
    },
    breakfast: {
      eyebrow: "Breakfast",
      headline1: "Mulai pelan.",
      headlineEm: "Makan dengan baik.",
      body: "Hidangan pagi dari gigitan cepat sampai brunch yang lama. Disajikan mulai pukul 11:00.",
    },
    dessert: {
      eyebrow: "Dessert",
      headline1: "Sisakan ruang",
      headlineEm: "untuk yang manis.",
      body: "Daftar pendek yang indulgent — dibuat untuk dibagi, dirancang untuk difoto.",
    },
    drinks: {
      eyebrow: "Cold Drinks",
      headline1: "Tuang yang",
      headlineEm: "menyegarkan.",
      body: "Citrus, herbal, sirup rumah — dan beberapa mocktail yang terasa dewasa.",
      signature: "Signature",
    },
    hotTea: {
      eyebrow: "Hot Tea",
      headline: "Secangkir tenang, di akhir.",
      per: "15K / cangkir",
    },
    gallery: {
      eyebrow: "Gallery",
      headline1: "OASIS lewat",
      headlineEm: "matamu.",
      body: "Beberapa momen favorit kami — interior, makanan, orang. Dikurasi untuk kamera.",
      seeAll: "Lihat gallery lengkap",
      interior: "Interior",
      food: "Makanan",
      people: "Orang",
      detail: "Detail",
      night: "Malam",
    },
    social: {
      instagram: "Instagram",
      tiktok: "TikTok",
      instagramBody: "Momen harian. Makanan. Orang. OASIS.",
      tiktokBody: "Lihat OASIS bergerak.",
      follow: "Follow di Instagram",
      watch: "Tonton di TikTok",
    },
    reviews: {
      eyebrow: "Apa kata mereka",
      basedOn: "Berdasarkan",
      source: "ulasan Google",
      readAll: "Baca semua ulasan",
      author: "Tamu Google",
    },
    events: {
      eyebrow: "Events",
      headline1: "Jadikan ini",
      headlineEm: "sebuah acara.",
      body: "Dari ulang tahun sunyi sampai meja panjang bersama teman — OASIS dirancang untuk momen yang layak ditandai.",
      types: ["Ulang Tahun", "Makan Malam Privat", "Kumpul", "Acara Korporat", "Selebrasi Kecil"],
      planLive: "Rencanakan Acara",
      planSoon: "Rencanakan Acara — coming soon",
    },
    reserve: {
      eyebrow: "Reservasi",
      headline: "Simpan mejamu.",
      body: "Form singkat. Reservasi dikonfirmasi via WhatsApp — tanpa akun, tanpa aplikasi.",
      steps: [
        "1. Isi detailmu",
        "2. Kami buka WhatsApp dengan draft pesan",
        "3. Kami konfirmasi dalam satu jam",
      ],
      date: "Tanggal",
      time: "Waktu",
      guests: "Jumlah Orang",
      selectTime: "Pilih waktu",
      select: "Pilih",
      guestOne: "Orang",
      guestMany: "Orang",
      name: "Nama",
      namePh: "Namamu",
      phone: "Nomor WhatsApp",
      phonePh: "08xx",
      submit: "Lanjut ke WhatsApp",
      submitSoon: "Segera Hadir — kabari saya",
      note: "Kami akan membuka WhatsApp dengan detail reservasimu siap kirim.",
      noteSoon: "Reservasi segera dibuka. Kami kabari ketika sudah tersedia.",
    },
    location: {
      eyebrow: "Lokasi",
      headline: "Temukan OASIS.",
      address: "Alamat",
      hours: "Jam Operasional",
      services: "Layanan",
      getDirections: "Petunjuk arah",
    },
    footer: {
      tagline: "Modern Dining",
      in: "di Tanjungpinang.",
      explore: "Jelajahi",
      visit: "Kunjungi",
      copyright: "©",
      location: "Tanjungpinang, Indonesia",
    },
    menuPage: {
      eyebrow: "Menu",
      title: "Seluruh daftar.",
      body: "Hover atau tap hidangan untuk foto. Harga dalam IDR, tanpa service charge.",
      all: "Semua",
    },
    reviewsPage: { eyebrow: "Ulasan", title: "Apa kata mereka." },
    galleryPage: { eyebrow: "Gallery", title: "OASIS lewat matamu." },
    locationPage: { eyebrow: "Temukan kami", title: "Di mana OASIS." },
    reservePage: { eyebrow: "Reservasi", title: "Simpan mejamu." },
    notFound: {
      eyebrow: "404",
      title: "Salah belok.",
      body: "Ayo balik ke menu, atau ke pintu depan.",
      backHome: "Kembali ke Beranda",
      viewMenu: "Lihat menu",
    },
  } as const;

  const en: typeof id = {
    nav: {
      menu: "Menu",
      experience: "Experience",
      gallery: "Gallery",
      reviews: "Reviews",
      location: "Location",
      reserve: "Reserve",
      homeAria: "Open menu",
    },
    bottomNav: { home: "Home", menu: "Menu", gallery: "Gallery", reserve: "Reserve" },
    skipToContent: "Skip to content",
    hero: {
      tagline: "Modern Dining in Tanjungpinang",
      headline1: "A place to eat,",
      headline2: "gather",
      headlineEm: "and stay awhile.",
      body:
        "A modern restaurant in Tanjungpinang where good food, thoughtful spaces and easy conversations come together.",
      cta1: "Explore Menu",
      cta2: "Reserve a Table",
      rating: "Google Reviews",
      scroll: "Scroll",
    },
    intro: {
      eyebrow: "The OASIS promise",
      headline1: "More than a meal.",
      headlineEm: "It's your little escape.",
      body:
        "A modern restaurant in Tanjungpinang where good food, thoughtful spaces and easy conversations come together.",
      since: "Since",
      located: "Located",
      style: "Style",
      sinceVal: "2021",
      locatedVal: "Tanjungpinang",
      styleVal: "Casual Premium",
    },
    experience: {
      eyebrow: "The OASIS Experience",
      headline: "Three things, done with care.",
      body: "Scroll through what makes OASIS a place to come back to — not just a place to eat.",
      nav: "Drag, scroll, or use arrow keys",
      prev: "Previous",
      next: "Next",
    },
    favourites: {
      eyebrow: "Our Favourites",
      headline1: "A small edit,",
      headlineEm: "honestly loved.",
      viewAll: "View full menu",
      signature: "Signature",
      readMore: "Read more",
    },
    breakfast: {
      eyebrow: "Breakfast",
      headline1: "Start slow.",
      headlineEm: "Eat well.",
      body: "Morning plates that go from a quick bite to a long, lazy brunch. Served from 11:00 onwards.",
    },
    dessert: {
      eyebrow: "Dessert",
      headline1: "Save room for",
      headlineEm: "something sweet.",
      body: "A short, indulgent list — built to share, designed to be photographed.",
    },
    drinks: {
      eyebrow: "Cold Drinks",
      headline1: "Pour something",
      headlineEm: "refreshing.",
      body: "Citrus, herbs, house syrups — and a few non-alcoholic cocktails that feel grown-up.",
      signature: "Signature",
    },
    hotTea: {
      eyebrow: "Hot Tea",
      headline: "A quiet cup, at the end.",
      per: "15K / cup",
    },
    gallery: {
      eyebrow: "Gallery",
      headline1: "OASIS through",
      headlineEm: "your eyes.",
      body: "A few of our favourite moments — interior, food, people. Curated for the camera.",
      seeAll: "See full gallery",
      interior: "Interior",
      food: "Food",
      people: "People",
      detail: "Detail",
      night: "Night",
    },
    social: {
      instagram: "Instagram",
      tiktok: "TikTok",
      instagramBody: "Daily moments. Food. People. OASIS.",
      tiktokBody: "See OASIS in motion.",
      follow: "Follow on Instagram",
      watch: "Watch on TikTok",
    },
    reviews: {
      eyebrow: "What people say",
      basedOn: "Based on",
      source: "Google Reviews",
      readAll: "Read all reviews",
      author: "Google Guest",
    },
    events: {
      eyebrow: "Events",
      headline1: "Make it",
      headlineEm: "an occasion.",
      body: "From quiet birthdays to a long table of friends — OASIS is built for moments worth marking.",
      types: ["Birthday", "Private Dinner", "Gathering", "Corporate Event", "Small Celebration"],
      planLive: "Plan an Event",
      planSoon: "Plan an Event — coming soon",
    },
    reserve: {
      eyebrow: "Reservation",
      headline: "Save your table.",
      body: "A short form. Your reservation is confirmed via WhatsApp — no account, no app.",
      steps: [
        "1. Fill in your details",
        "2. We open WhatsApp with a draft message",
        "3. We confirm within the hour",
      ],
      date: "Date",
      time: "Time",
      guests: "Guests",
      selectTime: "Select time",
      select: "Select",
      guestOne: "Guest",
      guestMany: "Guests",
      name: "Name",
      namePh: "Your name",
      phone: "WhatsApp number",
      phonePh: "08xx",
      submit: "Continue on WhatsApp",
      submitSoon: "Coming soon — notify me",
      note: "We'll open WhatsApp with your reservation details ready to send.",
      noteSoon: "Reservations open soon. We'll notify you when available.",
    },
    location: {
      eyebrow: "Location",
      headline: "Find OASIS.",
      address: "Address",
      hours: "Hours",
      services: "Services",
      getDirections: "Get directions",
    },
    footer: {
      tagline: "Modern Dining",
      in: "in Tanjungpinang.",
      explore: "Explore",
      visit: "Visit",
      copyright: "©",
      location: "Tanjungpinang, Indonesia",
    },
    menuPage: {
      eyebrow: "Menu",
      title: "The whole list.",
      body: "Hover or tap a dish for the photograph. Prices in IDR, no service charge.",
      all: "All",
    },
    reviewsPage: { eyebrow: "Reviews", title: "What people say." },
    galleryPage: { eyebrow: "Gallery", title: "OASIS through your eyes." },
    locationPage: { eyebrow: "Find us", title: "Where to find OASIS." },
    reservePage: { eyebrow: "Reservation", title: "Save your table." },
    notFound: {
      eyebrow: "404",
      title: "A wrong turn.",
      body: "Let's get you back to the menu, or to the front door.",
      backHome: "Back home",
      viewMenu: "View menu",
    },
  };

  return lang === "en" ? en : id;
};

// Hoist references to the inner objects so we can flatten them at module load.
const _id = (ui as unknown as (lang: Lang) => Record<string, unknown>)("id");
const _en = (ui as unknown as (lang: Lang) => Record<string, unknown>)("en");

type EnObj = typeof _en;
type IdObj = typeof _id;

const flatten = (obj: Record<string, unknown>, prefix = ""): Record<string, string> => {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (typeof v === "string") out[key] = v;
    else if (Array.isArray(v)) out[key] = v.join(" · ");
    else if (v && typeof v === "object") Object.assign(out, flatten(v as Record<string, unknown>, key));
  }
  return out;
};

export const enDict: Record<string, string> = flatten(_en as Record<string, unknown>);
export const idDict: Record<string, string> = flatten(_id as Record<string, unknown>);

export const i18nDict = (lang: "id" | "en") => (lang === "en" ? enDict : idDict);

