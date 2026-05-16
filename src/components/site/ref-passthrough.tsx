"use client";

import { useEffect } from "react";

const REF_STORAGE_KEY = "tpl_ref";
const STATIC_ASSET_PATTERN = /\.(pdf|png|jpe?g|svg|webp|gif|ico|css|js|json|xml|txt)$/i;

function currentRef() {
  const url = new URL(window.location.href);
  const urlRef = url.searchParams.get("ref");

  if (urlRef) {
    try {
      sessionStorage.setItem(REF_STORAGE_KEY, urlRef);
    } catch {
      // Storage can be unavailable in strict/private modes. The current URL
      // still carries the ref for analytics, so failing closed is acceptable.
    }
    return urlRef;
  }

  try {
    return sessionStorage.getItem(REF_STORAGE_KEY);
  } catch {
    return null;
  }
}

function shouldRewrite(anchor: HTMLAnchorElement) {
  const rawHref = anchor.getAttribute("href");
  if (!rawHref) return false;
  if (rawHref.startsWith("#")) return false;
  if (rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) return false;
  if (rawHref.includes("ref=")) return false;
  if (STATIC_ASSET_PATTERN.test(rawHref.split("?")[0] ?? rawHref)) return false;

  try {
    const url = new URL(rawHref, window.location.origin);
    return url.origin === window.location.origin;
  } catch {
    return false;
  }
}

function rewriteAnchor(anchor: HTMLAnchorElement, ref: string) {
  const rawHref = anchor.getAttribute("href");
  if (!rawHref || !shouldRewrite(anchor)) return;

  const url = new URL(rawHref, window.location.origin);
  url.searchParams.set("ref", ref);
  anchor.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
}

export function RefPassthrough() {
  useEffect(() => {
    const ref = currentRef();
    if (!ref) return;

    const rewriteAll = () => {
      document
        .querySelectorAll<HTMLAnchorElement>("a[href]")
        .forEach((anchor) => rewriteAnchor(anchor, ref));
    };

    rewriteAll();

    const observer = new MutationObserver(rewriteAll);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
