"use client";

import type { Product } from "./products";

type AnalyticsValue = string | number | boolean | string[] | undefined | null;
type AnalyticsParams = Record<string, AnalyticsValue>;
export type AttributionContext = Partial<Record<AttributionKey, string>> & {
  session_id?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ATTRIBUTION_KEYS = [
  "ref",
  "oc_touch_id",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;
type AttributionKey = (typeof ATTRIBUTION_KEYS)[number];

const ATTRIBUTION_STORAGE_PREFIX = "tpl_attr_";
const SESSION_STORAGE_KEY = "tpl_session_id";

function safeNumber(value: number) {
  return Number.isFinite(value) ? Number(value.toFixed(2)) : 0;
}

function readStoredValue(key: string) {
  try {
    return sessionStorage.getItem(key) || undefined;
  } catch {
    return undefined;
  }
}

function writeStoredValue(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable in strict/private modes. Tracking must never
    // break checkout or navigation, so attribution capture fails open.
  }
}

function ensureSessionId() {
  const existing = readStoredValue(SESSION_STORAGE_KEY);
  if (existing) return existing;
  const next =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `tpl_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
  writeStoredValue(SESSION_STORAGE_KEY, next);
  return next;
}

export function getAttributionContext(): AttributionContext {
  if (typeof window === "undefined") return {};

  try {
    const url = new URL(window.location.href);
    const context: AttributionContext = {};
    for (const key of ATTRIBUTION_KEYS) {
      const fromUrl = url.searchParams.get(key) || undefined;
      if (fromUrl) {
        writeStoredValue(`${ATTRIBUTION_STORAGE_PREFIX}${key}`, fromUrl);
        context[key] = fromUrl;
      } else {
        const stored = readStoredValue(`${ATTRIBUTION_STORAGE_PREFIX}${key}`);
        if (stored) context[key] = stored;
      }
    }
    context.session_id = ensureSessionId();
    return context;
  } catch {
    return { session_id: readStoredValue(SESSION_STORAGE_KEY) };
  }
}

function currentPath() {
  if (typeof window === "undefined") return undefined;
  return window.location.pathname;
}

function compactParams(params: AnalyticsParams) {
  const attribution = getAttributionContext() ?? {};
  return Object.fromEntries(
    Object.entries({
      page_path: currentPath(),
      ref_code: attribution.ref,
      oc_touch_id: attribution.oc_touch_id,
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      utm_content: attribution.utm_content,
      utm_term: attribution.utm_term,
      session_id: attribution.session_id,
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

export function trackProductView(product: Product) {
  trackEvent("product_view", {
    sku: product.id,
    sku_family: product.category,
    product_slug: product.slug,
    product_name: product.name,
    unit_price_usd: safeNumber(product.price),
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

export function trackOrderIntent({
  orderId,
  cartValueUsd,
  itemCount,
  unitSkus,
  source,
}: {
  orderId: string;
  cartValueUsd: number;
  itemCount: number;
  unitSkus: string[];
  source: "checkout_form" | "checkout_page";
}) {
  trackEvent("order_intent", {
    order_id: orderId,
    cart_value_usd: safeNumber(cartValueUsd),
    item_count: itemCount,
    unit_skus: unitSkus.slice(0, 12),
    payment_status: "awaiting_payment",
    revenue_status: "not_revenue",
    source,
  });
}

export function trackCheckoutOrderCreatedUnpaid({
  orderId,
  cartValueUsd,
  shippingUsd,
  coupon,
  itemCount,
  unitSkus,
  paymentCoin,
}: {
  orderId: string;
  cartValueUsd: number;
  shippingUsd: number;
  coupon?: string | null;
  itemCount: number;
  unitSkus: string[];
  paymentCoin: string;
}) {
  trackEvent("checkout_order_created_unpaid", {
    order_id: orderId,
    cart_value_usd: safeNumber(cartValueUsd),
    shipping_usd: safeNumber(shippingUsd),
    coupon: coupon || undefined,
    item_count: itemCount,
    unit_skus: unitSkus.slice(0, 12),
    payment_coin: paymentCoin,
    payment_status: "awaiting_payment",
    revenue_status: "not_revenue",
  });
}

// GA4-standard `purchase` event. This must only be called after payment is
// actually verified by a payment webhook, on-chain detector, or manual admin
// reconciliation. Unpaid/test/order-created checkout paths must use
// `order_intent` / `checkout_order_created_unpaid` instead.
export function trackPurchase({
  orderId,
  valueUsd,
  shippingUsd,
  coupon,
  items,
  paymentStatus,
  verifiedAt,
  verificationSource,
  txHash,
}: {
  orderId: string;
  valueUsd: number;
  shippingUsd: number;
  coupon?: string | null;
  items: { product: Product; quantity: number }[];
  paymentStatus: "paid_verified";
  verifiedAt: string;
  verificationSource: "onchain_detector" | "payment_webhook" | "manual_admin";
  txHash?: string;
}) {
  if (typeof window === "undefined") return;
  if (paymentStatus !== "paid_verified") return;

  const base = compactParams({
    transaction_id: orderId,
    value: safeNumber(valueUsd),
    currency: "USD",
    shipping: safeNumber(shippingUsd),
    coupon: coupon || undefined,
    payment_status: paymentStatus,
    verified_at: verifiedAt,
    verification_source: verificationSource,
    tx_hash: txHash,
  });

  const ga4Items = items.map((i) => ({
    item_id: i.product.id,
    item_name: i.product.name,
    item_category: i.product.category,
    price: safeNumber(i.product.price),
    quantity: i.quantity,
  }));

  window.gtag?.("event", "purchase", { ...base, items: ga4Items });
}
