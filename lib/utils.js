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