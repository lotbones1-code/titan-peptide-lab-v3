"use client";

import { useEffect } from "react";

const ATTRIBUTION_KEYS = [
  "ref",
  "oc_touch_id",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;
const ATTRIBUTION_STORAGE_PREFIX = "tpl_attr_";
const STATIC_ASSET_PATTERN = /\.(pdf|png|jpe?g|svg|webp|gif|ico|css|js|json|xml|txt)$/i;

function currentAttributionParams() {
  const url = new URL(window.location.href);
  const params: Record<string, string> = {};

  for (const key of ATTRIBUTION_KEYS) {
    const fromUrl = url.searchParams.get(key);
    if (fromUrl) {
      params[key] = fromUrl;
      try {
        sessionStorage.setItem(`${ATTRIBUTION_STORAGE_PREFIX}${key}`, fromUrl);
      } catch {
        // Storage can be unavailable in strict/private modes. The current URL
        // still carries attribution, so checkout and navigation continue.
      }
      continue;
    }

    try {
      const stored = sessionStorage.getItem(`${ATTRIBUTION_STORAGE_PREFIX}${key}`);
      if (stored) params[key] = stored;
    } catch {
      // Missing attribution storage is not a navigation blocker.
    }
  }

  return params;
}

function shouldRewrite(anchor: HTMLAnchorElement, params: Record<string, string>) {
  const rawHref = anchor.getAttribute("href");
  if (!rawHref) return false;
  if (rawHref.startsWith("#")) return false;
  if (rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) return false;
  if (Object.keys(params).length === 0) return false;
  if (STATIC_ASSET_PATTERN.test(rawHref.split("?")[0] ?? rawHref)) return false;

  try {
    const url = new URL(rawHref, window.location.origin);
    if (url.origin !== window.location.origin) return false;
    return Object.entries(params).some(([key]) => !url.searchParams.has(key));
  } catch {
    return false;
  }
}

function rewriteAnchor(anchor: HTMLAnchorElement, params: Record<string, string>) {
  const rawHref = anchor.getAttribute("href");
  if (!rawHref || !shouldRewrite(anchor, params)) return;

  const url = new URL(rawHref, window.location.origin);
  for (const [key, value] of Object.entries(params)) {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  }
  anchor.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
}

export function RefPassthrough() {
  useEffect(() => {
    const params = currentAttributionParams();
    if (Object.keys(params).length === 0) return;

    const rewriteAll = () => {
      document
        .querySelectorAll<HTMLAnchorElement>("a[href]")
        .forEach((anchor) => rewriteAnchor(anchor, params));
    };

    rewriteAll();

    const observer = new MutationObserver(rewriteAll);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
