// Product catalog — API-driven. Source of truth: /content/*.json
// Run `pnpm run gen:catalog` after editing content, or use `pnpm run add:product`.
// The `prebuild` hook regenerates automatically before each build.

import {
  BRAND_DATA,
  WALLETS_DATA,
  DISCOUNT_CODES_DATA,
  PRODUCTS_DATA,
  PROMOS_DATA,
} from "./products.data";

export type ProductCategory = "nasal-spray" | "injectable" | "oral" | "stack";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  compareAtPrice?: number;
  size: string;
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
  featured?: boolean;
  bestseller?: boolean;
  newArrival?: boolean;
  rank?: number;
}

export const BRAND = BRAND_DATA;
export const WALLETS = WALLETS_DATA;
export const DISCOUNT_CODES = DISCOUNT_CODES_DATA;
export const PRODUCTS: Product[] = PRODUCTS_DATA;
export const PROMOS = PROMOS_DATA;

// Google recommends `priceValidUntil` on Offer structured data. Without it the
// Rich Results Test warns and Google is likelier to drop the price from the
// SERP rich snippet — a real CTR/visibility loss for product searches. A
// rolling one-year date keeps every Offer valid across deploys (the site
// rebuilds on each ship) with zero hand-maintenance.
export const PRICE_VALID_UNTIL = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

export const NASAL_SPRAYS = PRODUCTS.filter((p) => p.category === "nasal-spray");
export const VIALS = PRODUCTS.filter((p) => p.category === "injectable");
export const STACKS = PRODUCTS.filter((p) => p.category === "stack");
export const FEATURED = PRODUCTS.filter((p) => p.featured);
export const BESTSELLERS = PRODUCTS.filter((p) => p.bestseller);
