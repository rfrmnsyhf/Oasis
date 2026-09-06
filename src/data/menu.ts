import type { Bilingual, Lang } from "../utils/i18n";
import { t as pick } from "../utils/i18n";

export type Category =
  | "main-course"
  | "breakfast"
  | "appetizers"
  | "salad-soup"
  | "dessert"
  | "cold-drinks"
  | "hot-tea";

export interface CategoryMeta {
  id: Category;
  label: Bilingual;
}

export interface MenuItem {
  name: Bilingual;
  category: Category;
  price: number;
  description: Bilingual;
  image: string;
  featured?: boolean;
}

export const categories: CategoryMeta[] = [
  { id: "main-course", label: { id: "Main Course", en: "Main Course" } },
  { id: "breakfast", label: { id: "Breakfast", en: "Breakfast" } },
  { id: "appetizers", label: { id: "Appetizers", en: "Appetizers" } },
  { id: "salad-soup", label: { id: "Salad & Soup", en: "Salad & Soup" } },
  { id: "dessert", label: { id: "Dessert", en: "Dessert" } },
  { id: "cold-drinks", label: { id: "Cold Drinks", en: "Cold Drinks" } },
  { id: "hot-tea", label: { id: "Hot Tea", en: "Hot Tea" } },
];

const img = (q: string, w = 800) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=${w}&q=80`;

const B = (id: string, en: string): Bilingual => ({ id, en });

export const menu: MenuItem[] = [
  // Featured / Favourites
  {
    name: B("The Power of Nasi Lemak", "The Power of Nasi Lemak"),
    category: "main-course",
    price: 36000,
    description: B(
      "Nasi kelapa aromatik disajikan dengan sambal, ikan bilis goreng, kacang, dan telur setengah matang.",
      "Aromatic coconut rice served with sambal, crispy anchovies, peanuts and a soft-boiled egg.",
    ),
    image: img("photo-1626777552726-4a6b54c97e46", 1200),
    featured: true,
  },
  {
    name: B("Nasi Bali", "Nasi Bali"),
    category: "main-course",
    price: 62000,
    description: B(
      "Nasi khas Bali dengan ayam suwir, lawar, sate lilit, dan sambal matah rumah.",
      "Balinese-inspired rice with shredded chicken, lawar, sate lilit and house sambal matah.",
    ),
    image: img("photo-1604908176997-125f25cc6f3d", 1200),
    featured: true,
  },
  {
    name: B("Nasgor Spesial", "Nasgor Spesial"),
    category: "main-course",
    price: 48000,
    description: B(
      "Nasi goreng Indonesia yang dimasak di wajan dengan udang, ayam, telur, dan bumbu signature OASIS.",
      "Wok-fired Indonesian fried rice with prawn, chicken, egg and OASIS signature seasoning.",
    ),
    image: img("photo-1603133872878-684f208fb84b", 1200),
    featured: true,
  },
  {
    name: B("Big Morning", "Big Morning"),
    category: "breakfast",
    price: 60000,
    description: B(
      "Piring breakfast yang royal — telur, roti, sosis, baked beans, hash, dan sayuran.",
      "A generous breakfast plate — eggs, toast, sausage, baked beans, hash and greens.",
    ),
    image: img("photo-1525351484163-7529414344d8", 1200),
    featured: true,
  },
  {
    name: B("Chicken Wings", "Chicken Wings"),
    category: "appetizers",
    price: 45000,
    description: B(
      "Sayap ayam renyah dengan saus glaze OASIS dan acar cabai.",
      "Crispy fried wings tossed in OASIS glaze with a side of pickled chili.",
    ),
    image: img("photo-1567620832903-9fc6debc209f", 1200),
    featured: true,
  },
  {
    name: B("Burnt Cheese Cake", "Burnt Cheese Cake"),
    category: "dessert",
    price: 45000,
    description: B(
      "Cheesecake Basque signature kami — karamel di luar, leleh di dalam.",
      "Our signature Basque-style burnt cheesecake, caramelized on the outside, molten within.",
    ),
    image: img("photo-1565958011703-44f9829ba187", 1200),
    featured: true,
  },
  {
    name: B("Lychee Virgin Mojito", "Lychee Virgin Mojito"),
    category: "cold-drinks",
    price: 32000,
    description: B(
      "Leci, mint, dan lime di-es — penyegar tropis.",
      "Lychee, mint and lime muddled with crushed ice — a tropical refresher.",
    ),
    image: img("photo-1551024709-8f23befc6f87", 1200),
    featured: true,
  },
  {
    name: B("Forest", "Forest"),
    category: "cold-drinks",
    price: 37000,
    description: B(
      "Signature rumah — calamansi, basil seed, dan pandan di atas sparkling water.",
      "House signature — calamansi, basil seed and pandan over sparkling water.",
    ),
    image: img("photo-1437418747212-8d9709afab22", 1200),
    featured: true,
  },

  // Main course (extra)
  {
    name: B("Nasi Goreng Kampung", "Nasi Goreng Kampung"),
    category: "main-course",
    price: 42000,
    description: B(
      "Nasi goreng ala desa dengan ikan bilis kering, kacang, dan telur goreng.",
      "Village-style fried rice with dried anchovies, peanuts and a fried egg.",
    ),
    image: img("photo-1512058564366-18510be2db19", 800),
  },
  {
    name: B("Mie Goreng", "Mie Goreng"),
    category: "main-course",
    price: 40000,
    description: B(
      "Mie kuning yang dimasak di wajan dengan ayam, udang, dan sayuran Asia.",
      "Wok-fried yellow noodles with chicken, prawn and Asian greens.",
    ),
    image: img("photo-1612929633738-8fe44f7ec841", 800),
  },
  {
    name: B("Ayam Bakar Taliwang", "Ayam Bakar Taliwang"),
    category: "main-course",
    price: 58000,
    description: B(
      "Ayam bakar khas Lombok dengan plecing kangkung dan nasi putih.",
      "Grilled Lombok-style spiced chicken with plecing kangkung and steamed rice.",
    ),
    image: img("photo-1599487488170-d11ec9c172f0", 800),
  },
  {
    name: B("Iga Bakar", "Iga Bakar"),
    category: "main-course",
    price: 95000,
    description: B(
      "Iga sapi yang dipanggang perlahan dengan saus kecap manis dan wijen panggang.",
      "Slow-grilled beef ribs glazed with sweet soy and toasted sesame.",
    ),
    image: img("photo-1544025162-d76694265947", 800),
  },
  {
    name: B("Sate Lilit Bali", "Sate Lilit Bali"),
    category: "main-course",
    price: 52000,
    description: B(
      "Sate ayam cincang di tusuk serai, disajikan dengan sambal matah.",
      "Minced chicken satay on lemongrass sticks, served with sambal matah.",
    ),
    image: img("photo-1555939594-58d7cb561ad1", 800),
  },

  // Breakfast
  {
    name: B("Beef Burrito", "Beef Burrito"),
    category: "breakfast",
    price: 52000,
    description: B(
      "Daging sapi berbumbu, kacang, keju, dan salsa dalam tortilla hangat.",
      "Seasoned beef, beans, cheese and salsa wrapped in a warm tortilla.",
    ),
    image: img("photo-1626700051175-6818013e1d4f", 800),
  },
  {
    name: B("Egg Benedict", "Egg Benedict"),
    category: "breakfast",
    price: 55000,
    description: B(
      "Telur poached, smoked beef, muffin English, dan hollandaise rumah.",
      "Poached eggs, smoked beef, English muffin and house hollandaise.",
    ),
    image: img("photo-1525351484163-7529414344d8", 800),
  },
  {
    name: B("Avocado Toast", "Avocado Toast"),
    category: "breakfast",
    price: 45000,
    description: B(
      "Roti sourdough, alpukat dihancurkan, feta, chili crisp, dan telur poached.",
      "Sourdough, smashed avocado, feta, chili crisp and a poached egg.",
    ),
    image: img("photo-1525351484163-7529414344d8", 800),
  },
  {
    name: B("Vegan Burrito", "Vegan Burrito"),
    category: "breakfast",
    price: 46000,
    description: B(
      "Kacang hitam, sayuran panggang, guacamole, dan nasi merah dalam wrap lembut.",
      "Black beans, roasted vegetables, guacamole and brown rice in a soft wrap.",
    ),
    image: img("photo-1626700051175-6818013e1d4f", 800),
  },
  {
    name: B("Omelet Breakfast", "Omelet Breakfast"),
    category: "breakfast",
    price: 42000,
    description: B(
      "Omelet tiga telur dengan herbal, keju, dan sayuran segar.",
      "Three-egg omelet with herbs, cheese and a side of greens.",
    ),
    image: img("photo-1525351484163-7529414344d8", 800),
  },
  {
    name: B("Kaya Toast", "Kaya Toast"),
    category: "breakfast",
    price: 32000,
    description: B(
      "Kaya kelapa, mentega, dan roti panggang dengan telur setengah matang.",
      "Coconut kaya, butter and toasted bread with soft-boiled eggs.",
    ),
    image: img("photo-1525351484163-7529414344d8", 800),
  },

  // Appetizers
  {
    name: B("Calamari", "Calamari"),
    category: "appetizers",
    price: 48000,
    description: B(
      "Cumi-cumi tepung renyah dengan aioli lemon dan acar cabai.",
      "Crispy battered squid with lemon aioli and pickled chili.",
    ),
    image: img("photo-1599487488170-d11ec9c172f0", 800),
  },
  {
    name: B("Edamame", "Edamame"),
    category: "appetizers",
    price: 28000,
    description: B(
      "Kedelai kukus dengan garam laut dan sedikit cabai.",
      "Steamed soybeans with sea salt and a hint of chili.",
    ),
    image: img("photo-1564834744159-ff0ea41ba4b9", 800),
  },
  {
    name: B("Spring Rolls", "Spring Rolls"),
    category: "appetizers",
    price: 36000,
    description: B(
      "Lumpia sayur renyah dengan saus chili manis.",
      "Crispy vegetable spring rolls with sweet chili dipping sauce.",
    ),
    image: img("photo-1606755962773-d324e0a13086", 800),
  },
  {
    name: B("Bruschetta", "Bruschetta"),
    category: "appetizers",
    price: 38000,
    description: B(
      "Tomat heirloom, basil, dan bawang putih di atas roti sourdough panggang.",
      "Heirloom tomato, basil and garlic on toasted sourdough.",
    ),
    image: img("photo-1572695157366-5e585ab2b69f", 800),
  },

  // Salad & Soup
  {
    name: B("Caesar Salad", "Caesar Salad"),
    category: "salad-soup",
    price: 48000,
    description: B(
      "Selada cos, parmesan, crouton, dan saus anchovy.",
      "Cos lettuce, parmesan, croutons and anchovy dressing.",
    ),
    image: img("photo-1551248429-40975aa4de74", 800),
  },
  {
    name: B("Asian Slaw", "Asian Slaw"),
    category: "salad-soup",
    price: 38000,
    description: B(
      "Kol, wortel, dan wijen yang renyah dengan saus citrus soy.",
      "Crunchy cabbage, carrot and sesame with a citrus soy dressing.",
    ),
    image: img("photo-1540420773420-3366772f4999", 800),
  },
  {
    name: B("Pumpkin Soup", "Pumpkin Soup"),
    category: "salad-soup",
    price: 38000,
    description: B(
      "Velouté labu panggang dengan biji panggang dan crème fraîche.",
      "Roasted pumpkin velouté with toasted seeds and crème fraîche.",
    ),
    image: img("photo-1547592180-85f173990554", 800),
  },
  {
    name: B("Tom Yum", "Tom Yum"),
    category: "salad-soup",
    price: 52000,
    description: B(
      "Sup udang Thailand pedas-asam dengan serai, lengkuas, dan lime.",
      "Hot and sour Thai prawn soup with lemongrass, galangal and lime.",
    ),
    image: img("photo-1548946526-f69e2424cf45", 800),
  },

  // Dessert
  {
    name: B("Bear", "Bear"),
    category: "dessert",
    price: 42000,
    description: B(
      "Mousse cokelat hazelnut berbentuk beruang rumah kami — playful, rich, dibuat untuk berbagi.",
      "Chocolate hazelnut mousse shaped like our house bear — playful, rich, made for sharing.",
    ),
    image: img("photo-1541783245831-57d6fb0926d3", 800),
  },
  {
    name: B("Panna Cotta", "Panna Cotta"),
    category: "dessert",
    price: 38000,
    description: B(
      "Panna cotta vanilla bean dengan mangga dan markisa.",
      "Vanilla bean panna cotta with mango and passion fruit.",
    ),
    image: img("photo-1488477181946-6428a0291777", 800),
  },
  {
    name: B("Matcha Roll Cake", "Matcha Roll Cake"),
    category: "dessert",
    price: 30000,
    description: B(
      "Sponge lembut digulung dengan krim matcha dan kacang merah.",
      "Soft sponge rolled with whipped matcha cream and red bean.",
    ),
    image: img("photo-1551024601-bec78aea704b", 800),
  },
  {
    name: B("Chocolate Lava", "Chocolate Lava"),
    category: "dessert",
    price: 46000,
    description: B(
      "Kue cokelat hangat dengan lelehan di tengah dan es krim vanilla.",
      "Warm chocolate cake with a molten center and vanilla ice cream.",
    ),
    image: img("photo-1606313564200-e75d5e30476c", 800),
  },

  // Cold drinks
  {
    name: B("Thai Tea Strawberry", "Thai Tea Strawberry"),
    category: "cold-drinks",
    price: 32000,
    description: B(
      "Thai tea rumah diblend dengan stroberi segar dan susu kental manis.",
      "House Thai tea blended with fresh strawberry and condensed milk.",
    ),
    image: img("photo-1572490122747-3968b75cc699", 800),
  },
  {
    name: B("Yuzu in Tokyo", "Yuzu in Tokyo"),
    category: "cold-drinks",
    price: 36000,
    description: B(
      "Sitrus yuzu, soda, dan finishing salted cherry blossom.",
      "Yuzu citrus, soda and a salted cherry blossom finish.",
    ),
    image: img("photo-1556679343-c7306c1976bc", 800),
  },
  {
    name: B("Strawberry Mojito", "Strawberry Mojito"),
    category: "cold-drinks",
    price: 34000,
    description: B(
      "Stroberi, mint, dan lime di atas es serut — non-alkohol.",
      "Strawberry, mint and lime over crushed ice — non-alcoholic.",
    ),
    image: img("photo-1497534446932-c925b458314e", 800),
  },
  {
    name: B("Yuzu Soda Pop", "Yuzu Soda Pop"),
    category: "cold-drinks",
    price: 30000,
    description: B(
      "Sparkling yuzu, serai, dan sedikit madu.",
      "Sparkling yuzu, lemongrass and a kiss of honey.",
    ),
    image: img("photo-1437418747212-8d9709afab22", 800),
  },
  {
    name: B("Sakura in Tokyo", "Sakura in Tokyo"),
    category: "cold-drinks",
    price: 38000,
    description: B(
      "Cherry blossom, krim, dan tonic — floral dan mudah dibagi.",
      "Cherry blossom, cream and tonic — floral and easy to share.",
    ),
    image: img("photo-1556679343-c7306c1976bc", 800),
  },
  {
    name: B("Iced Latte", "Iced Latte"),
    category: "cold-drinks",
    price: 28000,
    description: B(
      "Double-shot espresso, susu dingin, dan sedikit vanilla.",
      "Double-shot espresso, cold milk and a touch of vanilla.",
    ),
    image: img("photo-1461023058943-07fcbe16d735", 800),
  },
];

export const hotTeas: Bilingual[] = [
  B("Jasmine", "Jasmine"),
  B("Green", "Green"),
  B("Oolong", "Oolong"),
  B("Chamomile", "Chamomile"),
  B("Black Tea", "Black Tea"),
  B("Earl Grey", "Earl Grey"),
];

export const featured = (items: MenuItem[]) => items.filter((i) => i.featured);

export const itemName = (it: MenuItem, lang: Lang) => pick(it.name, lang);
export const itemDescription = (it: MenuItem, lang: Lang) => pick(it.description, lang);
export const categoryLabel = (c: CategoryMeta, lang: Lang) => pick(c.label, lang);
