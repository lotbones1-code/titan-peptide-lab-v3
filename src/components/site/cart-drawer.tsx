"use client";

import { useCart } from "@/lib/cart-context";
import { DISCOUNT_CODES } from "@/lib/products";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { X, Plus, Minus, ShoppingBag, Trash2, Lock, Tag, CheckCircle, ShieldCheck, Truck, FileText } from "lucide-react";

type DiscountEntry = {
  percent: number;
  label: string;
};

function validateCode(code: string): DiscountEntry | null {
  const upper = code.trim().toUpperCase();
  const entry = (DISCOUNT_CODES as Record<string, DiscountEntry>)[upper];
  return entry ?? null;
}

export function CartDrawer() {
  const { items, removeItem, updateQuantity, clearCart, itemCount, subtotal, isOpen, setIsOpen } = useCart();
  const [promoInput, setPromoInput] = useState("");
  const [appliedCode, setAppliedCode] = useState<{ code: string; discount: DiscountEntry } | null>(null);
  const [promoError, setPromoError] = useState("");

  const handleApplyPromo = () => {
    const entry = validateCode(promoInput);
    if (entry) {
      setAppliedCode({ code: promoInput.trim().toUpperCase(), discount: entry });
      setPromoError("");
      setPromoInput("");
    } else {
      setPromoError("Invalid code. Try FIRST10, BULK15, TITAN20, or VIP25.");
    }
  };

  const discountAmount = appliedCode
    ? (subtotal * appliedCode.discount.percent) / 100
    : 0;
  const discountedTotal = subtotal - discountAmount;

  const router = useRouter();

  const handleCheckout = () => {
    setIsOpen(false);
    router.push("/checkout");
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed right-0 top-0 z-[71] flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
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
          <div className="border-t border-[#e5e5e5] px-6 py-4 space-y-3">
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
              </div>
            )}

            <div className="rounded-xl border border-[#e7ece9] bg-[#fafbfa] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                Order notes
              </p>
              <div className="mt-3 space-y-2.5 text-[12px] text-[#44514b]">
                <div className="flex items-start gap-2.5">
                  <FileText className="mt-0.5 h-3.5 w-3.5 text-[#1e6f58]" />
                  <span>Every order is paired with a lot-matched COA, not a generic certificate.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Truck className="mt-0.5 h-3.5 w-3.5 text-[#1e6f58]" />
                  <span>Shipping is calculated by destination at the next step, with worldwide support and free-shipping thresholds where available.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 text-[#1e6f58]" />
                  <span>Titan confirms payment route, destination details, and dispatch timing before the order moves to fulfillment.</span>
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
