export type Dish = {
  id: string;
  name: string;
  detail: string;
  price: number;
  image: string;
  heat: 0 | 1 | 2 | 3;
};

export type Group = {
  id: string;
  name: string;
  note: string;
  dishes: Dish[];
};

export type Offer = {
  id: string;
  name: string;
  detail: string;
  price: number;
  image: string;
};

export const house = {
  name: "Bella Point",
  word: "Bella Point",
  line: "Where luxury meets comfort.",
  street: "Kiringothi Street",
  place: "Opposite Jam Street, near Alhidaya Mosque",
  city: "Eastleigh, Nairobi",
  hours: "Call or WhatsApp to book",
  phone: "+254 715 558 888",
  tel: "+254715558888",
  email: "Bellapoint2024@gmail.com",
  whatsapp: "https://wa.me/254715558888",
};

export const nav = [
  { to: "/menu", label: "Menu" },
  { to: "/pizza", label: "Stone" },
  { to: "/burger", label: "Smash" },
  { to: "/story", label: "Recipe" },
  { to: "/reserve", label: "Reserve" },
] as const;

export function ksh(n: number) {
  return `KSh ${new Intl.NumberFormat("en-KE", { maximumFractionDigits: 0 }).format(n)}`;
}

export const pieSizes = [
  { id: "26", cm: 26, name: "Neighborhood", price: 1200 },
  { id: "32", cm: 32, name: "Table", price: 1650 },
  { id: "36", cm: 36, name: "Feast", price: 2150 },
] as const;

export const pieToppings = [
  { id: "sujuq", name: "Sujuq", price: 280, note: "Beef sausage, house chili", image: "/kitchen/pizza-sujuq.jpg" },
  { id: "goat", name: "Goat suqaar", price: 420, note: "Dry-fried, xawaash", image: "/kitchen/pizza-goat.jpg" },
  { id: "burrata", name: "Burrata", price: 350, note: "Torn on the pass", image: "/food/margherita.jpg" },
  { id: "oil", name: "Basbaas oil", price: 120, note: "Chili, not sugar", image: "/kitchen/basbaas.jpg" },
  { id: "onion", name: "Pickled onion", price: 90, note: "Lime and salt", image: "/food/tomatoes.jpg" },
  { id: "honey", name: "Chili honey", price: 140, note: "Heat, then sweet", image: "/kitchen/xalwo.jpg" },
] as const;

export type BoardPie = {
  id: string;
  name: string;
  detail: string;
  image: string;
  offer?: string;
};

export const boardPies: BoardPie[] = [
  { id: "margherita", name: "Margherita", detail: "Tomato, mozzarella, basil. Small, medium or large.", image: "/kitchen/pie-margherita.jpg" },
  { id: "hawaiian", name: "Hawaiian", detail: "Ham, pineapple, mushroom.", image: "/kitchen/pie-hawaiian.jpg" },
  { id: "tikka", name: "Chicken tikka", detail: "Spiced chicken, onion, pepper.", image: "/kitchen/pie-tikka.jpg" },
  { id: "bbq", name: "BBQ chicken", detail: "Smoky chicken, onion, sweetcorn.", image: "/kitchen/pie-bbq.jpg" },
  { id: "pepperoni", name: "Pepperoni", detail: "Pepperoni and cheese.", image: "/kitchen/pie-pepperoni.jpg" },
  { id: "meat", name: "Meat feast", detail: "Pepperoni, beef, chicken, ham.", image: "/kitchen/pie-meat.jpg" },
  { id: "veg", name: "Vegetarian", detail: "Mushroom, pepper, onion, tomato, olive.", image: "/kitchen/pie-veg.jpg" },
  { id: "special", name: "Bella special", detail: "The loaded house pie from the board.", image: "/kitchen/pie-special.jpg", offer: "House pie" },
  { id: "peri", name: "Peri peri chicken", detail: "Hot chicken, pepper, onion.", image: "/kitchen/pie-peri.jpg" },
  { id: "beef", name: "Beef", detail: "Seasoned beef and onion.", image: "/kitchen/pie-beef.jpg" },
];

export const liveOffers = [
  {
    id: "anjera",
    active: true,
    kicker: "On now",
    title: "Bella anjera",
    line: "100% teff. Soft, on the board. WhatsApp to order.",
  },
] as const;

export const smashLineup: Offer[] = [
  {
    id: "beef",
    name: "Beef burger",
    detail: "One smash, American cheese, pickles, potato bun. From the house board.",
    price: 980,
    image: "/kitchen/burger-single.jpg",
  },
  {
    id: "double",
    name: "Double burger",
    detail: "Two lacy patties, cheese sheeted at the flip.",
    price: 1350,
    image: "/kitchen/burger-double.jpg",
  },
  {
    id: "chicken",
    name: "Chicken burger",
    detail: "Crisp fillet, cheese, a ribbon of sauce.",
    price: 1650,
    image: "/kitchen/burger-chicken.jpg",
  },
];

export const smashSizes = [
  { id: "S", letter: "S", name: "Single", grams: 102, price: 980 },
  { id: "M", letter: "M", name: "Double", grams: 204, price: 1350 },
  { id: "L", letter: "C", name: "Chicken", grams: 0, price: 1650 },
] as const;

export const smashToppings = [
  { id: "beef", name: "Smoked beef", price: 220, note: "Extra slice, not a second press", image: "/kitchen/burger-smash.jpg" },
  { id: "sujuq", name: "Sujuq", price: 180, note: "On the crown, after the steel", image: "/kitchen/pizza-sujuq.jpg" },
  { id: "cheese", name: "Extra American", price: 150, note: "At the flip", image: "/kitchen/burger-cheese.jpg" },
  { id: "pickles", name: "House pickles", price: 80, note: "Dill, not sweet", image: "/kitchen/burger-fly.jpg" },
  { id: "jam", name: "Onion jam", price: 120, note: "Slow, dark", image: "/kitchen/suqaar.jpg" },
  { id: "basbaas", name: "Basbaas", price: 60, note: "On the side", image: "/kitchen/basbaas.jpg" },
  { id: "egg", name: "Fried egg", price: 140, note: "Crisp edge", image: "/kitchen/burger-qorax.jpg" },
] as const;

export const smashScenes = [
  {
    id: "ball",
    step: "01",
    title: "The ball",
    temp: 93,
    image: "/kitchen/burger-ball.jpg",
    copy: "102 grams. Twenty percent fat. Loosely packed, still cold when it leaves the hand.",
  },
  {
    id: "cut",
    step: "02",
    title: "The cut",
    temp: 139,
    image: "/kitchen/burger-smash.jpg",
    copy: "One hard press, ten seconds. A second press squeezes the juice onto the steel.",
  },
  {
    id: "cheese",
    step: "03",
    title: "The smash",
    temp: 199,
    image: "/kitchen/burger-cheese.jpg",
    copy: "American goes on at the flip. It should sheet, not pool.",
  },
  {
    id: "build",
    step: "04",
    title: "The build",
    temp: 230,
    image: "/kitchen/burger-fly.jpg",
    copy: "Bun, pickles, onion. Basbaas stays beside the plate.",
  },
  {
    id: "plate",
    step: "05",
    title: "The plate",
    temp: 68,
    image: "/kitchen/burger-done.jpg",
    copy: "Sixty seconds of rest. Serve while the lace still snaps.",
  },
] as const;

export const menu: Group[] = [
  {
    id: "small",
    name: "Small fire",
    note: "To start. Fried until the skin talks.",
    dishes: [
      {
        id: "sambusa-hilib",
        name: "Sambusa hilib",
        detail: "Spiced beef, onion, green chili. Sealed and fried to a blister.",
        price: 280,
        image: "/kitchen/sambusa.jpg",
        heat: 2,
      },
      {
        id: "sambusa-kale",
        name: "Sambusa kale",
        detail: "Lentil, cilantro, a little basbaas. The quieter triangle.",
        price: 240,
        image: "/kitchen/sambusa.jpg",
        heat: 1,
      },
      {
        id: "kaluun-bites",
        name: "Kalluun bites",
        detail: "Coast fish, lemon, chili salt. Hot from the pan, not the fryer basket.",
        price: 640,
        image: "/kitchen/fish.jpg",
        heat: 2,
      },
    ],
  },
  {
    id: "canjeero",
    name: "Canjeero",
    note: "Fermented overnight. Never flipped.",
    dishes: [
      {
        id: "canjeero-subag",
        name: "Canjeero & subag",
        detail: "Sorghum batter, open eyes, ghee poured at the table.",
        price: 380,
        image: "/kitchen/canjeero.jpg",
        heat: 0,
      },
      {
        id: "laxoox-suqaar",
        name: "Laxoox & suqaar",
        detail: "The same bread, goat suqaar on the side, lime.",
        price: 780,
        image: "/kitchen/suqaar.jpg",
        heat: 2,
      },
      {
        id: "malawax",
        name: "Malawax",
        detail: "Cardamom flatbread, a little sugar, ghee. After noon, not before.",
        price: 340,
        image: "/kitchen/malawax.jpg",
        heat: 0,
      },
    ],
  },
  {
    id: "pot",
    name: "The pot",
    note: "Xawaash in the oil before the meat.",
    dishes: [
      {
        id: "suqaar-ari",
        name: "Suqaar ari",
        detail: "Goat, pepper, onion, the tin. Dry, not a stew.",
        price: 980,
        image: "/kitchen/suqaar.jpg",
        heat: 2,
      },
      {
        id: "suqaar-digaag",
        name: "Suqaar digaag",
        detail: "Chicken, same pan, more lemon. Finished with cilantro.",
        price: 890,
        image: "/kitchen/grill.jpg",
        heat: 2,
      },
      {
        id: "maraq",
        name: "Maraq",
        detail: "Goat broth, potato, a heavy hand of xawaash. Bread for the bowl.",
        price: 1150,
        image: "/kitchen/pour.jpg",
        heat: 1,
      },
      {
        id: "oodkac",
        name: "Oodkac",
        detail: "Liver, kidney, chili, ghee. Fast. Order it if you know it.",
        price: 1250,
        image: "/kitchen/goat.jpg",
        heat: 3,
      },
    ],
  },
  {
    id: "rice",
    name: "Rice",
    note: "The pot is the point. The rice is the plate.",
    dishes: [
      {
        id: "iskukaris",
        name: "Bariis iskukaris",
        detail: "Goat, raisin, potato, fried onion. Spiced in one pot, not assembled.",
        price: 1350,
        image: "/kitchen/bariis.jpg",
        heat: 2,
      },
      {
        id: "bariis-basbaas",
        name: "Bariis basbaas",
        detail: "The same rice, extra chili oil, a lime you actually need.",
        price: 1480,
        image: "/kitchen/bariis.jpg",
        heat: 3,
      },
    ],
  },
  {
    id: "grill",
    name: "The grill",
    note: "Charcoal. Salt first. Spice at the end.",
    dishes: [
      {
        id: "hilib-ari",
        name: "Hilib ari",
        detail: "Goat chop, bone in, charred fat, lime and chili salt.",
        price: 1850,
        image: "/kitchen/goat.jpg",
        heat: 2,
      },
      {
        id: "digaag",
        name: "Digaag duban",
        detail: "Half chicken, yogurt and xawaash, over the coals until the skin lacquers.",
        price: 1480,
        image: "/kitchen/grill.jpg",
        heat: 2,
      },
      {
        id: "kalluun",
        name: "Kalluun",
        detail: "Whole fish, garlic, tamarind, a slit of green chili.",
        price: 1650,
        image: "/kitchen/fish.jpg",
        heat: 2,
      },
      {
        id: "geel",
        name: "Hilib geel",
        detail: "Camel steak, medium, pepper crust, herb oil. Lean, so it rests.",
        price: 2200,
        image: "/kitchen/camel.jpg",
        heat: 1,
      },
      {
        id: "skewers",
        name: "Goat skewers",
        detail: "Three sticks, suqaar spice, flatbread underneath for the drip.",
        price: 1280,
        image: "/kitchen/goat.jpg",
        heat: 2,
      },
    ],
  },
  {
    id: "after",
    name: "After",
    note: "Heat, tea, or something sweet and dense.",
    dishes: [
      {
        id: "basbaas",
        name: "Basbaas",
        detail: "Green chili, garlic, lime, a spoon of the tin. The table sauce.",
        price: 90,
        image: "/kitchen/basbaas.jpg",
        heat: 3,
      },
      {
        id: "shaah",
        name: "Shaah cadeeys",
        detail: "Black tea, cardamom, a little milk if you want it quiet.",
        price: 180,
        image: "/kitchen/shaah.jpg",
        heat: 0,
      },
      {
        id: "xalwo",
        name: "Xalwo",
        detail: "Cardamom sweet, cut in squares. One piece is the serving.",
        price: 320,
        image: "/kitchen/xalwo.jpg",
        heat: 0,
      },
    ],
  },
];

export const method = [
  {
    id: "tin",
    step: "01",
    title: "Toast the tin",
    image: "/kitchen/xawaash.jpg",
    body: "40g cumin, 30g coriander, 12 cardamom, 8 cloves, one cinnamon stick, 8g pepper. Dry pan until the cumin smells sweet. Cool. Grind. 6g turmeric last so it does not scorch. Dark jar, three weeks.",
  },
  {
    id: "ferment",
    step: "02",
    title: "Ferment the canjeero",
    image: "/kitchen/canjeero.jpg",
    body: "Sorghum or teff, warm water, a spoon of yesterday’s batter. Overnight. Ladle onto a hot dry tin. Cover until the eyes open. Do not flip. Subag at the table, not in the pan.",
  },
  {
    id: "dough",
    step: "03",
    title: "Stretch the dough",
    image: "/kitchen/dough-hands.jpg",
    body: "Sixty-five percent water. Cold ferment, seventy-two hours. Bring it up, stretch by hand. A rolling pin presses the gas out. The rim should blister, not blond.",
  },
  {
    id: "stone",
    step: "04",
    title: "Fire the stone",
    image: "/food/oven.jpg",
    body: "Deck at 485°C. Ninety seconds. Turn once. Cheese melts, it does not break. Basbaas oil after the peel, never in the oven, or the chili goes bitter.",
  },
  {
    id: "smash",
    step: "05",
    title: "Smash once",
    image: "/kitchen/burger-smash.jpg",
    body: "102g, twenty percent fat, cold ball. Steel at 196°C. One press, ten seconds. Cheese at the flip. Basbaas on the side. A second press is how you lose the juice.",
  },
  {
    id: "ghee",
    step: "06",
    title: "Pour the ghee",
    image: "/kitchen/pour.jpg",
    body: "Subag goes on the bread in front of the guest, not in the kitchen. Shaah cadeeys after. Cardamom in the pot, sugar on the side.",
  },
] as const;

export const kiln = [
  { n: 485, suffix: "°", label: "Stone", note: "Deck heat. The rim blisters. The center stays soft." },
  { n: 90, suffix: "s", label: "Bake", note: "Turn once. Out before the cheese breaks." },
  { n: 72, suffix: "h", label: "Dough", note: "Cold ferment. No rolling pin on the pass." },
  { n: 12, suffix: "", label: "Spices", note: "The xawaash tin. Turmeric goes in last." },
] as const;

export const searStats = [
  { n: 102, suffix: "g", label: "Patty", note: "Twenty percent fat. One ball, loosely packed." },
  { n: 75, suffix: "s", label: "On steel", note: "From the drop to the plate." },
  { n: 196, suffix: "°", label: "Steel", note: "Hot enough to lace. Not hot enough to grey." },
  { n: 1, suffix: "", label: "Press", note: "Once. Ten seconds. Then leave it." },
] as const;

export const quotes = [
  {
    name: "Stone",
    place: "Kiringothi Street",
    text: "The sujuq pie leaves the stone with a blistered rim. Chili oil goes on after the peel.",
  },
  {
    name: "Canjeero",
    place: "Eastleigh",
    text: "Canjeero with the eyes still open. Ghee poured at the table, not in the pan.",
  },
  {
    name: "Smash",
    place: "Bella Point",
    text: "The smash is one press. Basbaas stays beside the plate.",
  },
] as const;

export const galleryA = [
  { src: "/kitchen/suqaar.jpg", alt: "Goat suqaar with chili and herbs" },
  { src: "/kitchen/bariis.jpg", alt: "Spiced bariis with goat" },
  { src: "/kitchen/sambusa.jpg", alt: "Fried sambusa" },
  { src: "/kitchen/goat.jpg", alt: "Charred goat" },
  { src: "/kitchen/canjeero.jpg", alt: "Canjeero with ghee" },
  { src: "/kitchen/pizza-sujuq.jpg", alt: "Sujuq pizza" },
  { src: "/kitchen/burger-done.jpg", alt: "Plated smash burger" },
];

export const galleryB = [
  { src: "/kitchen/fish.jpg", alt: "Grilled fish" },
  { src: "/kitchen/camel.jpg", alt: "Camel steak, sliced" },
  { src: "/kitchen/xalwo.jpg", alt: "Xalwo squares" },
  { src: "/kitchen/malawax.jpg", alt: "Malawax with ghee" },
  { src: "/kitchen/dining.jpg", alt: "The dining room" },
  { src: "/kitchen/pizza-goat.jpg", alt: "Goat suqaar pizza" },
  { src: "/kitchen/burger-qorax.jpg", alt: "Qorax smash with sujuq" },
];

export const heroFrames = [
  { src: "/kitchen/hands.jpg", alt: "Hands finishing a plate" },
  { src: "/food/oven.jpg", alt: "Stone oven at full heat" },
  { src: "/kitchen/pour.jpg", alt: "Ghee poured at the table" },
  { src: "/kitchen/burger-done.jpg", alt: "Smash burger, just plated" },
  { src: "/kitchen/dining.jpg", alt: "Dinner service in the room" },
];

export function dishFocus(id: string) {
  if (id === "sambusa-kale") return "14% 86%";
  if (id === "bariis-basbaas") return "76% 32%";
  if (id === "skewers") return "32% 70%";
  if (id === "laxoox-suqaar") return "62% 40%";
  return "50% 48%";
}

export function piePreview(toppings: string[]) {
  if (toppings.includes("goat")) return "/kitchen/pizza-goat.jpg";
  if (toppings.includes("sujuq")) return "/kitchen/pizza-sujuq.jpg";
  return "/food/margherita.jpg";
}

export function smashPreview(sizeId: string, toppings: string[]) {
  if (toppings.includes("sujuq") || toppings.includes("basbaas")) return "/kitchen/burger-qorax.jpg";
  if (sizeId !== "S" || toppings.includes("beef")) return "/kitchen/burger-double.jpg";
  return "/kitchen/burger-single.jpg";
}
