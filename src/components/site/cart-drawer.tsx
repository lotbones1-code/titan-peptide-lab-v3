"use client";

import { useCart, type CartItem } from "@/lib/cart-context";
import { trackCheckoutStart } from "@/lib/analytics";
import { DISCOUNT_CODES, PRODUCTS, type Product } from "@/lib/products";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X, Plus, Minus, ShoppingBag, Trash2, Lock, Tag, CheckCircle, ShieldCheck, Truck, FileText } from "lucide-react";

// US free-shipping threshold doubles as the PDP shipping estimate and the most
// universally recognized AOV anchor. International rates resolve at checkout
// against the destination zone — buyers see that note next to the progress bar.
const US_FREE_SHIPPING_THRESHOLD = 150;

type DiscountEntry = {
  percent: number;
  label: string;
};

type CartUpsell = {
  badge: string;
  product: Product;
  reason: string;
};

const COMPLEMENTARY_PRODUCT_IDS: Record<string, string[]> = {
  "bpc157-spray": ["tb500-vial", "bpc157-vial"],
  "bpc157-vial": ["tb500-vial", "bpc157-spray"],
  "cjc-ipa": ["retatrutide", "tb500-vial"],
  "dsip-spray": ["selank-spray", "semax-spray"],
  "oxytocin-spray": ["pt141-spray", "selank-spray"],
  "pt141-spray": ["oxytocin-spray", "dsip-spray"],
  "retatrutide": ["cjc-ipa", "tb500-vial"],
  "selank-spray": ["semax-spray", "selank-semax-stack"],
  "semax-spray": ["selank-spray", "selank-semax-stack"],
  "tb500-vial": ["bpc157-vial", "bpc157-spray"],
};

function buildCartUpsells(items: CartItem[], subtotal: number): CartUpsell[] {
  const inCart = new Set(items.map((item) => item.product.id));
  const suggestions: CartUpsell[] = [];
  const addSuggestion = (productId: string, badge: string, reason: string) => {
    if (inCart.has(productId) || suggestions.some((entry) => entry.product.id === productId)) {
      return;
    }
    const product = PRODUCTS.find((entry) => entry.id === productId);
    if (!product) return;
    suggestions.push({ badge, product, reason });
  };

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (itemCount === 2) {
    const unlockBulk = PRODUCTS
      .filter((product) => !inCart.has(product.id))
      .sort((a, b) => a.price - b.price)[0];
    if (unlockBulk) {
      addSuggestion(
        unlockBulk.id,
        "Unlock BULK15",
        "Add one more item and use BULK15 for 15% off this order.",
      );
    }
  }

  if (subtotal < US_FREE_SHIPPING_THRESHOLD) {
    const remaining = US_FREE_SHIPPING_THRESHOLD - subtotal;
    const freeShipPick = PRODUCTS
      .filter((product) => !inCart.has(product.id))
      .sort((a, b) => {
        const aDelta = Math.abs(a.price - remaining);
        const bDelta = Math.abs(b.price - remaining);
        if (aDelta !== bDelta) return aDelta - bDelta;
        return a.price - b.price;
      })[0];
    if (freeShipPick) {
      addSuggestion(
        freeShipPick.id,
        "Free shipping",
        freeShipPick.price >= remaining
          ? "This pushes the cart over the free US shipping line."
          : "This is the closest add-on to the free US shipping line.",
      );
    }
  }

  for (const item of items) {
    for (const productId of COMPLEMENTARY_PRODUCT_IDS[item.product.id] ?? []) {
      addSuggestion(
        productId,
        "Popular pair",
        `Common companion to ${item.product.name.replace(/\s+\(.*\)$/u, "")}.`,
      );
      if (suggestions.length >= 2) return suggestions;
    }
  }

  if (suggestions.length < 2) {
    for (const product of PRODUCTS.filter((entry) => !inCart.has(entry.id) && entry.featured)) {
      addSuggestion(product.id, "Featured", "High-intent add-on from the main catalog.");
      if (suggestions.length >= 2) break;
    }
  }

  return suggestions.slice(0, 2);
}

function validateCode(code: string): DiscountEntry | null {
  const upper = code.trim().toUpperCase();
  const entry = (DISCOUNT_CODES as Record<string, DiscountEntry>)[upper];
  return entry ?? null;
}

function readPassthroughValue(params: URLSearchParams, key: string) {
  return (
    params.get(key) ||
    sessionStorage.getItem(`tpl_attr_${key}`) ||
    (key === "ref" ? sessionStorage.getItem("tpl_ref") : null) ||
    null
  );
}

export function CartDrawer() {
  const { items, removeItem, updateQuantity, clearCart, itemCount, subtotal, isOpen, setIsOpen, addItem } = useCart();
  const [promoInput, setPromoInput] = useState("");
  const [appliedCode, setAppliedCode] = useState<{ code: string; discount: DiscountEntry } | null>(null);
  const [promoError, setPromoError] = useState("");
  const [upsellAddedId, setUpsellAddedId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const raw =
        params.get("discount") ||
        params.get("code") ||
        sessionStorage.getItem("tpl_attr_discount") ||
        sessionStorage.getItem("tpl_attr_code");
      if (!raw) return;
      const entry = validateCode(raw);
      if (!entry) return;
      setAppliedCode({ code: raw.trim().toUpperCase(), discount: entry });
      setPromoError("");
    } catch {
      // Promo persistence is a convenience only.
    }
  }, []);

  const handleApplyPromo = () => {
    const entry = validateCode(promoInput);
    if (entry) {
      const code = promoInput.trim().toUpperCase();
      setAppliedCode({ code, discount: entry });
      setPromoError("");
      setPromoInput("");
      try {
        sessionStorage.setItem("tpl_attr_discount", code);
      } catch {
        // Promo persistence is a convenience only.
      }
    } else {
      setPromoError("Invalid code. Please check your code and try again.");
    }
  };

  const handleApplyCode = (rawCode: string) => {
    const entry = validateCode(rawCode);
    if (entry) {
      const code = rawCode.trim().toUpperCase();
      setAppliedCode({ code, discount: entry });
      setPromoError("");
      setPromoInput("");
      try {
        sessionStorage.setItem("tpl_attr_discount", code);
      } catch {
        // Promo persistence is a convenience only.
      }
    }
  };

  const discountAmount = appliedCode
    ? (subtotal * appliedCode.discount.percent) / 100
    : 0;
  const discountedTotal = subtotal - discountAmount;
  const upsells = buildCartUpsells(items, discountedTotal);

  const handleCheckout = () => {
    const params = new URLSearchParams();
    try {
      const current = new URLSearchParams(window.location.search);
      const ref = readPassthroughValue(current, "ref");
      const discount =
        appliedCode?.code ||
        readPassthroughValue(current, "discount") ||
        readPassthroughValue(current, "code");
      if (ref) params.set("ref", ref);
      if (discount) params.set("discount", discount.trim().toUpperCase());
    } catch {
      // If browser storage is unavailable, still route the buyer to checkout.
    }
    const query = params.toString();
    const next = query ? `/checkout/?${query}` : "/checkout/";
    trackCheckoutStart({
      cartValueUsd: discountedTotal,
      cartLineCount: items.length,
      itemCount,
      unitSkus: items.map((item) => item.product.id),
      source: "cart_drawer",
    });
    setIsOpen(false);
    window.location.assign(next);
  };

  const handleUpsellAdd = (product: Product) => {
    addItem(product, 1);
    setUpsellAddedId(product.id);
    window.setTimeout(() => setUpsellAddedId((current) => (current === product.id ? null : current)), 1800);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed right-0 top-0 z-[71] flex h-[100dvh] max-h-[100dvh] w-full max-w-md flex-col overflow-hidden bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e5e5e5] px-6 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#1e6f58]" />
            <h2 className="text-lg font-semibold text-[#0f1613]">
              Cart ({itemCount})
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 text-[#999] transition-colors hover:bg-[#f5f5f5] hover:text-[#333]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <ShoppingBag className="h-12 w-12 text-[#ddd]" />
              <p className="mt-4 text-sm text-[#999]">Your cart is empty</p>
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex h-10 items-center rounded-full bg-[#1e6f58] px-5 text-sm font-medium text-white transition-colors hover:bg-[#175946]"
              >
                Browse products
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 rounded-xl border border-[#f0f0f0] bg-[#fafafa] p-4"
                >
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${item.product.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-medium text-[#0f1613] hover:text-[#1e6f58] transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="mt-0.5 text-xs text-[#999]">{item.product.size}</p>
                    <p className="mt-1 text-sm font-semibold text-[#1e6f58]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="rounded-full p-1 text-[#ccc] transition-colors hover:text-red-400"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                    <div className="flex items-center rounded-full border border-[#e5e5e5] bg-white">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="h-7 w-7 flex items-center justify-center text-[#999] hover:text-[#333] transition-colors rounded-l-full"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-medium text-[#0f1613]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="h-7 w-7 flex items-center justify-center text-[#999] hover:text-[#333] transition-colors rounded-r-full"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="max-h-[calc(100dvh-7rem)] shrink-0 space-y-3 overflow-y-auto border-t border-[#e5e5e5] px-6 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
            {/* Promo code */}
            {appliedCode ? (
              <div className="flex items-center justify-between rounded-xl bg-[#f0f5f2] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#1e6f58]" />
                  <span className="text-sm font-medium text-[#1e6f58]">
                    {appliedCode.code} — {appliedCode.discount.label}
                  </span>
                </div>
                <button
                  onClick={() => setAppliedCode(null)}
                  className="text-xs text-[#999] hover:text-[#666] transition-colors"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#bbb]" />
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => { setPromoInput(e.target.value); setPromoError(""); }}
                      onKeyDown={(e) => e.key === "Enter" && handleApplyPromo()}
                      placeholder="Promo code"
                      className="h-9 w-full rounded-full border border-[#e5e5e5] bg-white pl-8 pr-3 text-sm text-[#0f1613] placeholder:text-[#bbb] focus:border-[#1e6f58] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    onClick={handleApplyPromo}
                    className="h-9 rounded-full border border-[#1e6f58] px-4 text-sm font-medium text-[#1e6f58] transition-colors hover:bg-[#1e6f58] hover:text-white"
                  >
                    Apply
                  </button>
                </div>
                {promoError && (
                  <p className="text-xs text-red-500 pl-1">{promoError}</p>
                )}
                {itemCount >= 3 ? (
                  <p className="pl-1 text-[11px] leading-4 text-[#8a9690]">
                    3+ items in cart —{" "}
                    <button
                      type="button"
                      onClick={() => handleApplyCode("BULK15")}
                      className="font-semibold text-[#1e6f58] underline-offset-2 hover:underline focus:underline focus:outline-none"
                      aria-label="Apply BULK15 discount code"
                    >
                      Apply BULK15
                    </button>{" "}
                    for 15% off this order.
                  </p>
                ) : (
                  <p className="pl-1 text-[11px] leading-4 text-[#8a9690]">
                    First order?{" "}
                    <button
                      type="button"
                      onClick={() => handleApplyCode("FIRST10")}
                      className="font-semibold text-[#1e6f58] underline-offset-2 hover:underline focus:underline focus:outline-none"
                      aria-label="Apply FIRST10 discount code"
                    >
                      Apply FIRST10
                    </button>{" "}
                    for 10% off before checkout.
                  </p>
                )}
              </div>
            )}

            <FreeShippingProgress subtotal={discountedTotal} />

            {upsells.length > 0 && (
              <div className="rounded-xl border border-[#e7ece9] bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                      Complete your cart
                    </p>
                    <p className="mt-1 text-[12px] leading-5 text-[#44514b]">
                      Easy adds that raise order value or unlock the next savings step.
                    </p>
                  </div>
                </div>
                <div className="mt-3 space-y-3">
                  {upsells.map(({ badge, product, reason }) => (
                    <div
                      key={product.id}
                      className="rounded-xl border border-[#edf1ee] bg-[#fafbfa] p-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="inline-flex rounded-full border border-[#dce6df] bg-[#f3f9f6] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#1e6f58]">
                            {badge}
                          </p>
                          <p className="mt-2 text-[13px] font-semibold text-[#0f1613]">
                            {product.name}
                          </p>
                          <p className="mt-0.5 text-[11px] text-[#8a9690]">
                            {product.size} · ${product.price.toFixed(2)}
                          </p>
                          <p className="mt-1.5 text-[12px] leading-5 text-[#44514b]">
                            {reason}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleUpsellAdd(product)}
                          className={`shrink-0 rounded-full px-3 py-2 text-[11px] font-semibold transition-colors ${
                            upsellAddedId === product.id
                              ? "bg-[#175946] text-white"
                              : "bg-[#1e6f58] text-white hover:bg-[#175946]"
                          }`}
                        >
                          {upsellAddedId === product.id ? "Added" : "Add"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-xl border border-[#e7ece9] bg-[#fafbfa] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                Order notes
              </p>
              <div className="mt-3 space-y-2.5 text-[12px] text-[#44514b]">
                <div className="flex items-start gap-2.5">
                  <FileText className="mt-0.5 h-3.5 w-3.5 text-[#1e6f58]" />
                  <span>Every order is paired with the lot&apos;s in-house release sheet; the independent retest follows by email.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Truck className="mt-0.5 h-3.5 w-3.5 text-[#1e6f58]" />
                  <span>Shipping is calculated by destination at the next step, with worldwide support and free-shipping thresholds where available.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 text-[#1e6f58]" />
                  <span>Titan confirms payment route, destination details, and dispatch timing before the order moves to fulfillment.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Lock className="mt-0.5 h-3.5 w-3.5 text-[#1e6f58]" />
                  <span>
                    Crypto-only at checkout (USDC on Solana recommended). New to crypto?{" "}
                    <Link
                      href="/how-to-pay-with-crypto"
                      onClick={() => setIsOpen(false)}
                      className="font-medium text-[#1e6f58] underline decoration-[#1e6f58]/30 underline-offset-4 hover:decoration-[#1e6f58]"
                    >
                      Read the 3-minute payment guide
                    </Link>
                    .
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 text-[#1e6f58]" />
                  <span>Laboratory research use only. Not for human or animal consumption.</span>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href="/lab-testing"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center rounded-full border border-[#dfe6e2] bg-white px-3 py-1.5 text-[11px] font-medium text-[#0f1613] transition-colors hover:border-[#1e6f58]/30 hover:text-[#1e6f58]"
                >
                  Lab testing
                </Link>
                <a
                  href="/specimen-coa.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[#dfe6e2] bg-white px-3 py-1.5 text-[11px] font-medium text-[#0f1613] transition-colors hover:border-[#1e6f58]/30 hover:text-[#1e6f58]"
                >
                  Specimen COA
                </a>
              </div>
            </div>

            {/* Totals */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#999]">Subtotal</span>
                <span className={appliedCode ? "text-[#999] line-through" : "font-semibold text-[#0f1613]"}>
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              {appliedCode && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#1e6f58]">Discount ({appliedCode.discount.percent}%)</span>
                  <span className="font-medium text-[#1e6f58]">−${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-[#0f1613]">Estimated total</span>
                <span className="text-lg font-bold text-[#0f1613]">${discountedTotal.toFixed(2)}</span>
              </div>
            </div>

            <p className="text-xs text-[#bbb]">
              Shipping and the final destination rate are confirmed on the next step.
            </p>

            <button
              onClick={handleCheckout}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1e6f58] text-sm font-semibold text-white transition-colors hover:bg-[#175946]"
            >
              <Lock className="h-4 w-4" />
              Continue to shipping & payment
            </button>
            <button
              onClick={clearCart}
              className="w-full text-center text-xs text-[#bbb] hover:text-[#999] transition-colors"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function FreeShippingProgress({ subtotal }: { subtotal: number }) {
  const unlocked = subtotal >= US_FREE_SHIPPING_THRESHOLD;
  const remaining = Math.max(0, US_FREE_SHIPPING_THRESHOLD - subtotal);
  const pct = Math.min(100, Math.round((subtotal / US_FREE_SHIPPING_THRESHOLD) * 100));

  if (unlocked) {
    return (
      <div className="rounded-xl border border-[#1e6f58]/25 bg-[#f0f7f4] px-4 py-3">
        <div className="flex items-center gap-2">
          <Truck className="h-3.5 w-3.5 text-[#1e6f58]" />
          <p className="text-[12px] font-semibold text-[#1a5c48]">
            Free US shipping unlocked
          </p>
        </div>
        <p className="mt-1 text-[11px] leading-4 text-[#5c6762]">
          International orders see the exact destination rate at checkout.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#e7ece9] bg-[#fafbfa] px-4 py-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Truck className="h-3.5 w-3.5 text-[#1e6f58]" />
          <p className="text-[12px] font-medium text-[#0f1613]">
            Add{" "}
            <span className="font-semibold text-[#1e6f58]">
              ${remaining.toFixed(2)}
            </span>{" "}
            for free US shipping
          </p>
        </div>
        <span className="text-[11px] text-[#8a9690]">${US_FREE_SHIPPING_THRESHOLD}</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#e7ece9]">
        <div
          className="h-full rounded-full bg-[#1e6f58] transition-[width] duration-300"
          style={{ width: `${pct}%` }}
          aria-hidden="true"
        />
      </div>
      <p className="mt-1.5 text-[11px] leading-4 text-[#8a9690]">
        US estimate · International rates calculated at checkout.
      </p>
    </div>
  );
}

export function CartButton() {
  const { itemCount, setIsOpen } = useCart();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(15_22_19/10%)] bg-white text-[#666] transition-colors hover:border-[#1e6f58] hover:text-[#1e6f58]"
      aria-label={`Cart (${itemCount} items)`}
    >
      <ShoppingBag className="h-4 w-4" />
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#1e6f58] text-[10px] font-bold text-white">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </button>
  );
}
