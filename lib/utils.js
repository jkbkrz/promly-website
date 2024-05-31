import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const categories = [
  {
    id: "default",
    label: "Pokaż wszystko"
  },
  {
    id: "hoodies",
    label: "Bluzy"
  },
  {
    id: "shoes",
    label: "Buty"
  },
  {
    id: "tshirts",
    label: "Koszulki"
  },
  {
    id: "pants",
    label: "Spodnie"
  },
  {
    id: "jeans",
    label: "Jeansy"
  }
]

export const sortOptions = [
  {
    id: "default",
    label: "Polecane"
  },
  {
    id: "price_asc",
    label: "Cena: od najniższej"
  },
  {
    id: "price_desc",
    label: "Cena: od najwyższej"
  }
]

export const removeGenerationParameter = (urlString) => {
  try {
    // Create a new URL object
    const url = new URL(urlString);

    // Remove the 'generation' parameter
    url.searchParams.delete('generation');

    // Return the updated URL string
    return url.toString();
  } catch (error) {
    return ''
  }
}

export const categoryData = {
  colors: [
    { value: "czarny", label: "Czarny" },
    { value: "biały", label: "Biały" },
    { value: "szary", label: "Szary" },
    { value: "beżowy", label: "Beżowy" },
    { value: "brązowy", label: "Brązowy" },
    { value: "niebieski", label: "Niebieski" },
    { value: "czerwony", label: "Czerwony" },
    { value: "pomarańczowy", label: "Pomarańczowy" },
    { value: "żółty", label: "Żółty" },
    { value: "zielony", label: "Zielony" },
    { value: "różowy", label: "Różowy" }
  ],
  fits: [
    { value: "regularny", label: "Regularny" },
    { value: "dopasowany", label: "Dopasowany" },
    { value: "luźny", label: "Luźny" }
  ],
  styles: [
    { value: "casual", label: "Casual" },
    { value: "minimalistyczny", label: "Minimalistyczny" },
    { value: "sportowy", label: "Sportowy" },
    { value: "vintage", label: "Vintage" },
    { value: "elegancki", label: "Elegancki" }
  ],
  seasons: [
    { value: "wiosna", label: "Wiosna" },
    { value: "lato", label: "Lato" },
    { value: "jesień", label: "Jesień" },
    { value: "zima", label: "Zima" }
  ],
  sizes: [
    { value: "xs", label: "XS" },
    { value: "s", label: "S" },
    { value: "m", label: "M" },
    { value: "l", label: "L" },
    { value: "xl", label: "XL" },
    { value: "36", label: "36" },
    { value: "37", label: "37" },
    { value: "38", label: "38" },
    { value: "39", label: "39" },
    { value: "40", label: "40" },
    { value: "41", label: "41" },
    { value: "42", label: "42" },
    { value: "43", label: "43" },
    { value: "44", label: "44" },
    { value: "45", label: "45" },
    { value: "46", label: "46" }
  ]
}

export const tshirtsSubcategories = [
  { value: "t-shirt", label: "T-shirt" },
  { value: "crop-top", label: "Top" },
  { value: "tank-top", label: "Tank Top" },
  { value: "longsleeve", label: "Longsleeve" },
  { value: "koszulka-polo", label: "Koszulka Polo" }
]

export const hoodiesSubcategories = [
  { value: "bluza-z-kapturem", label: "Bluza z Kapturem" },
  { value: "bluza", label: "Bluza" },
  { value: "bluza-rozpinana", label: "Bluza Rozpinana" },
  { value: "sweter", label: "Sweter" },
  { value: "polar", label: "Polar" }
]

export const pantsSubcategories = [
  { value: "cargo", label: "Cargo" },
  { value: "jeansy", label: "Jeansy" },
  { value: "chinosy", label: "Chinosy" },
  { value: "szorty", label: "Spodenki" },
  { value: "legginsy", label: "Legginsy" },
  { value: "spodnie-dresowe", label: "Spodnie Dresowe" },
  { value: "eleganckie-spodnie", label: "Eleganckie Spodnie" }
]

export const shoesSubcategories = [
  { value: "sneakersy", label: "Sneakersy" },
  { value: "półbuty", label: "Półbuty" },
  { value: "sportowe", label: "Sportowe" },
  { value: "sandały", label: "Sandały" },
  { value: "trampki", label: "Trampki" },
  { value: "mokasyny", label: "Mokasyny" },
  { value: "klapki", label: "Klapki" },
  { value: "botki", label: "Botki" },
]

export const stores = [
  { value: "adidas", label: "Adidas" },
  { value: "answear", label: "Answear" },
  { value: "bershka", label: "Bershka" },
  { value: "converse", label: "Converse" },
  { value: "footshop", label: "Footshop" },
  { value: "forpro", label: "ForPro" },
  { value: "modivo", label: "Modivo" },
  { value: "nike", label: "Nike" },
  { value: "pullandbear", label: "Pull&Bear" },
  { value: "reserved", label: "Reserved" },
  { value: "sinsay", label: "Sinsay" },
  { value: "streetstyle24", label: "StreetStyle24" },
  { value: "ws2", label: "WS2" },
  { value: "zalando", label: "Zalando" },
]