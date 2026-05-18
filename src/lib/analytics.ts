"use client";

import type { Product } from "./products";

type AnalyticsValue = string | number | boolean | string[] | undefined | null;
type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const REF_STORAGE_KEY = "tpl_ref";

function safeNumber(value: number) {
  return Number.isFinite(value) ? Number(value.toFixed(2)) : 0;
}

function currentRef() {
  if (typeof window === "undefined") return undefined;

  try {
    const url = new URL(window.location.href);
    return url.searchParams.get("ref") || sessionStorage.getItem(REF_STORAGE_KEY) || undefined;
  } catch {
    return undefined;
  }
}

function currentPath() {
  if (typeof window === "undefined") return undefined;
  return window.location.pathname;
}

function compactParams(params: AnalyticsParams) {
  return Object.fromEntries(
    Object.entries({
      page_path: currentPath(),
      ref_code: currentRef(),
      ...params,
    }).filter(([, value]) => {
      if (value === undefined || value === null) return false;
      if (Array.isArray(value)) return value.length > 0;
      return value !== "";
    }),
  );
}

function normalizeHref(href: string) {
  if (typeof window === "undefined") return { link_url: href, outbound: false };

  try {
    const url = new URL(href, window.location.origin);
    const outbound = url.origin !== window.location.origin;
    return {
      link_url: outbound ? url.origin : url.pathname,
      outbound,
    };
  } catch {
    return { link_url: href.slice(0, 120), outbound: false };
  }
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const payload = compactParams(params);
  window.gtag?.("event", name, payload);
}

export function trackLinkClick(anchor: HTMLAnchorElement) {
  const rawHref = anchor.getAttribute("href");
  if (!rawHref || rawHref.startsWith("#")) return;

  const { link_url, outbound } = normalizeHref(rawHref);
  trackEvent("link_click", {
    link_url,
    outbound,
    link_text: anchor.textContent?.trim().slice(0, 80),
  });
}

export function trackCartAdd(product: Product, quantity: number) {
  trackEvent("cart_add", {
    sku: product.id,
    sku_family: product.category,
    product_slug: product.slug,
    unit_qty: quantity,
    unit_price_usd: safeNumber(product.price),
    cart_value_usd: safeNumber(product.price * quantity),
  });
}

export function trackCheckoutStart({
  cartValueUsd,
  cartLineCount,
  itemCount,
  unitSkus,
  source,
}: {
  cartValueUsd: number;
  cartLineCount: number;
  itemCount: number;
  unitSkus: string[];
  source: "cart_drawer" | "checkout_page" | "cart_route";
}) {
  trackEvent("checkout_start", {
    cart_value_usd: safeNumber(cartValueUsd),
    cart_line_count: cartLineCount,
    item_count: itemCount,
    unit_skus: unitSkus.slice(0, 12),
    source,
  });
}
