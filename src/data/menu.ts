export type Category =
  | "main-course"
  | "breakfast"
  | "appetizers"
  | "salad-soup"
  | "dessert"
  | "cold-drinks"
  | "hot-tea";

export interface MenuItem {
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  featured?: boolean;
}

export const categories: { id: Category; label: string }[] = [
  { id: "main-course", label: "Main Course" },
  { id: "breakfast", label: "Breakfast" },
  { id: "appetizers", label: "Appetizers" },
  { id: "salad-soup", label: "Salad & Soup" },
  { id: "dessert", label: "Dessert" },
  { id: "cold-drinks", label: "Cold Drinks" },
  { id: "hot-tea", label: "Hot Tea" },
];

const img = (q: string, w = 800) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=${w}&q=80`;

export const menu: MenuItem[] = [
  // Featured / Favourites
  {
    name: "The Power of Nasi Lemak",
    category: "main-course",
    price: 36000,
    description:
      "Aromatic coconut rice served with sambal, crispy anchovies, peanuts and a soft-boiled egg.",
    image: img("photo-1626777552726-4a6b54c97e46", 1200),
    featured: true,
  },
  {
    name: "Nasi Bali",
    category: "main-course",
    price: 62000,
    description:
      "Balinese-inspired rice with shredded chicken, lawar, sate lilit and house sambal matah.",
    image: img("photo-1604908176997-125f25cc6f3d", 1200),
    featured: true,
  },
  {
    name: "Nasgor Spesial",
    category: "main-course",
    price: 48000,
    description:
      "Wok-fired Indonesian fried rice with prawn, chicken, egg and OASIS signature seasoning.",
    image: img("photo-1603133872878-684f208fb84b", 1200),
    featured: true,
  },
  {
    name: "Big Morning",
    category: "breakfast",
    price: 60000,
    description:
      "A generous breakfast plate — eggs, toast, sausage, baked beans, hash and greens.",
    image: img("photo-1525351484163-7529414344d8", 1200),
    featured: true,
  },
  {
    name: "Chicken Wings",
    category: "appetizers",
    price: 45000,
    description:
      "Crispy fried wings tossed in OASIS glaze with a side of pickled chili.",
    image: img("photo-1567620832903-9fc6debc209f", 1200),
    featured: true,
  },
  {
    name: "Burnt Cheese Cake",
    category: "dessert",
    price: 45000,
    description:
      "Our signature Basque-style burnt cheesecake, caramelized on the outside, molten within.",
    image: img("photo-1565958011703-44f9829ba187", 1200),
    featured: true,
  },
  {
    name: "Lychee Virgin Mojito",
    category: "cold-drinks",
    price: 32000,
    description:
      "Lychee, mint and lime muddled with crushed ice — a tropical refresher.",
    image: img("photo-1551024709-8f23befc6f87", 1200),
    featured: true,
  },
  {
    name: "Forest",
    category: "cold-drinks",
    price: 37000,
    description:
      "House signature — calamansi, basil seed and pandan over sparkling water.",
    image: img("photo-1437418747212-8d9709afab22", 1200),
    featured: true,
  },

  // Main course (extra)
  {
    name: "Nasi Goreng Kampung",
    category: "main-course",
    price: 42000,
    description:
      "Village-style fried rice with dried anchovies, peanuts and a fried egg.",
    image: img("photo-1512058564366-18510be2db19", 800),
  },
  {
    name: "Mie Goreng",
    category: "main-course",
    price: 40000,
    description:
      "Wok-fried yellow noodles with chicken, prawn and Asian greens.",
    image: img("photo-1612929633738-8fe44f7ec841", 800),
  },
  {
    name: "Ayam Bakar Taliwang",
    category: "main-course",
    price: 58000,
    description:
      "Grilled Lombok-style spiced chicken with plecing kangkung and steamed rice.",
    image: img("photo-1599487488170-d11ec9c172f0", 800),
  },
  {
    name: "Iga Bakar",
    category: "main-course",
    price: 95000,
    description:
      "Slow-grilled beef ribs glazed with sweet soy and toasted sesame.",
    image: img("photo-1544025162-d76694265947", 800),
  },
  {
    name: "Sate Lilit Bali",
    category: "main-course",
    price: 52000,
    description:
      "Minced chicken satay on lemongrass sticks, served with sambal matah.",
    image: img("photo-1555939594-58d7cb561ad1", 800),
  },

  // Breakfast
  {
    name: "Beef Burrito",
    category: "breakfast",
    price: 52000,
    description:
      "Seasoned beef, beans, cheese and salsa wrapped in a warm tortilla.",
    image: img("photo-1626700051175-6818013e1d4f", 800),
  },
  {
    name: "Egg Benedict",
    category: "breakfast",
    price: 55000,
    description:
      "Poached eggs, smoked beef, English muffin and house hollandaise.",
    image: img("photo-1525351484163-7529414344d8", 800),
  },
  {
    name: "Avocado Toast",
    category: "breakfast",
    price: 45000,
    description:
      "Sourdough, smashed avocado, feta, chili crisp and a poached egg.",
    image: img("photo-1525351484163-7529414344d8", 800),
  },
  {
    name: "Vegan Burrito",
    category: "breakfast",
    price: 46000,
    description:
      "Black beans, roasted vegetables, guacamole and brown rice in a soft wrap.",
    image: img("photo-1626700051175-6818013e1d4f", 800),
  },
  {
    name: "Omelet Breakfast",
    category: "breakfast",
    price: 42000,
    description:
      "Three-egg omelet with herbs, cheese and a side of greens.",
    image: img("photo-1525351484163-7529414344d8", 800),
  },
  {
    name: "Kaya Toast",
    category: "breakfast",
    price: 32000,
    description:
      "Coconut kaya, butter and toasted bread with soft-boiled eggs.",
    image: img("photo-1525351484163-7529414344d8", 800),
  },

  // Appetizers
  {
    name: "Calamari",
    category: "appetizers",
    price: 48000,
    description:
      "Crispy battered squid with lemon aioli and pickled chili.",
    image: img("photo-1599487488170-d11ec9c172f0", 800),
  },
  {
    name: "Edamame",
    category: "appetizers",
    price: 28000,
    description:
      "Steamed soybeans with sea salt and a hint of chili.",
    image: img("photo-1564834744159-ff0ea41ba4b9", 800),
  },
  {
    name: "Spring Rolls",
    category: "appetizers",
    price: 36000,
    description:
      "Crispy vegetable spring rolls with sweet chili dipping sauce.",
    image: img("photo-1606755962773-d324e0a13086", 800),
  },
  {
    name: "Bruschetta",
    category: "appetizers",
    price: 38000,
    description:
      "Heirloom tomato, basil and garlic on toasted sourdough.",
    image: img("photo-1572695157366-5e585ab2b69f", 800),
  },

  // Salad & Soup
  {
    name: "Caesar Salad",
    category: "salad-soup",
    price: 48000,
    description:
      "Cos lettuce, parmesan, croutons and anchovy dressing.",
    image: img("photo-1551248429-40975aa4de74", 800),
  },
  {
    name: "Asian Slaw",
    category: "salad-soup",
    price: 38000,
    description:
      "Crunchy cabbage, carrot and sesame with a citrus soy dressing.",
    image: img("photo-1540420773420-3366772f4999", 800),
  },
  {
    name: "Pumpkin Soup",
    category: "salad-soup",
    price: 38000,
    description:
      "Roasted pumpkin velouté with toasted seeds and crème fraîche.",
    image: img("photo-1547592180-85f173990554", 800),
  },
  {
    name: "Tom Yum",
    category: "salad-soup",
    price: 52000,
    description:
      "Hot and sour Thai prawn soup with lemongrass, galangal and lime.",
    image: img("photo-1548946526-f69e2424cf45", 800),
  },

  // Dessert
  {
    name: "Bear",
    category: "dessert",
    price: 42000,
    description:
      "Chocolate hazelnut mousse shaped like our house bear — playful, rich, made for sharing.",
    image: img("photo-1541783245831-57d6fb0926d3", 800),
  },
  {
    name: "Panna Cotta",
    category: "dessert",
    price: 38000,
    description:
      "Vanilla bean panna cotta with mango and passion fruit.",
    image: img("photo-1488477181946-6428a0291777", 800),
  },
  {
    name: "Matcha Roll Cake",
    category: "dessert",
    price: 30000,
    description:
      "Soft sponge rolled with whipped matcha cream and red bean.",
    image: img("photo-1551024601-bec78aea704b", 800),
  },
  {
    name: "Chocolate Lava",
    category: "dessert",
    price: 46000,
    description:
      "Warm chocolate cake with a molten center and vanilla ice cream.",
    image: img("photo-1606313564200-e75d5e30476c", 800),
  },

  // Cold drinks
  {
    name: "Thai Tea Strawberry",
    category: "cold-drinks",
    price: 32000,
    description:
      "House Thai tea blended with fresh strawberry and condensed milk.",
    image: img("photo-1572490122747-3968b75cc699", 800),
  },
  {
    name: "Yuzu in Tokyo",
    category: "cold-drinks",
    price: 36000,
    description:
      "Yuzu citrus, soda and a salted cherry blossom finish.",
    image: img("photo-1556679343-c7306c1976bc", 800),
  },
  {
    name: "Strawberry Mojito",
    category: "cold-drinks",
    price: 34000,
    description:
      "Strawberry, mint and lime over crushed ice — non-alcoholic.",
    image: img("photo-1497534446932-c925b458314e", 800),
  },
  {
    name: "Yuzu Soda Pop",
    category: "cold-drinks",
    price: 30000,
    description:
      "Sparkling yuzu, lemongrass and a kiss of honey.",
    image: img("photo-1437418747212-8d9709afab22", 800),
  },
  {
    name: "Sakura in Tokyo",
    category: "cold-drinks",
    price: 38000,
    description:
      "Cherry blossom, cream and tonic — floral and easy to share.",
    image: img("photo-1556679343-c7306c1976bc", 800),
  },
  {
    name: "Iced Latte",
    category: "cold-drinks",
    price: 28000,
    description:
      "Double-shot espresso, cold milk and a touch of vanilla.",
    image: img("photo-1461023058943-07fcbe16d735", 800),
  },
];

export const hotTeas: { name: string }[] = [
  { name: "Jasmine" },
  { name: "Green" },
  { name: "Oolong" },
  { name: "Chamomile" },
  { name: "Black Tea" },
  { name: "Earl Grey" },
];

export const featured = (items: MenuItem[]) => items.filter((i) => i.featured);
