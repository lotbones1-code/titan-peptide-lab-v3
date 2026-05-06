"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  Check,
  ShoppingCart,
  ShieldCheck,
  Zap,
  FileText,
  Truck,
  Globe,
  FlaskConical,
} from "lucide-react";
import { type Product, DISCOUNT_CODES } from "@/lib/products";
import { zoneForCountry } from "@/lib/countries";
import { useCart } from "@/lib/cart-context";
import { CompoundPoster } from "./compound-poster";
import { getLot } from "@/lib/lots";
import { VialReconstitution } from "./vial-reconstitution";
import { CoaThumb } from "./coa-thumb";

function parseMgPerVial(size: string, fallback = 5): number {
  const m = size.match(/(\d+(?:\.\d+)?)\s*mg/i);
  return m ? parseFloat(m[1]) : fallback;
}

export function ProductDetail({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [code, setCode] = useState("");
  const [appliedCode, setAppliedCode] = useState<keyof typeof DISCOUNT_CODES | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const primaryCtaRef = useRef<HTMLButtonElement | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    const node = primaryCtaRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px -120px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const lot = getLot(product.id);

  const subtotal = product.price * qty;
  const discountPct = appliedCode ? DISCOUNT_CODES[appliedCode].percent : 0;
  const discountAmt = subtotal * (discountPct / 100);
  // Use US shipping as the product-page estimate (actual rate calculated at checkout by country)
  const usZone = zoneForCountry("US");
  const shipping = subtotal - discountAmt >= usZone.freeAbove ? 0 : usZone.rate;
  const total = Math.max(0, subtotal - discountAmt + shipping);

  const applyCode = () => {
    const upper = code.toUpperCase().trim();
    if (upper in DISCOUNT_CODES) setAppliedCode(upper as keyof typeof DISCOUNT_CODES);
    else setAppliedCode(null);
  };

  const handleAddToCart = () => {
    addItem(product, qty);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <section className="relative bg-white py-16 text-[#0f1613]">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm text-[#5c6762] hover:text-[#0f1613]"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to all products
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          {/* Left — image + specs */}
          <div className="relative">
            <CompoundPoster product={product} variant="detail" className="w-full" />
            <dl className="mt-5 grid grid-cols-3 divide-x divide-[rgb(15_22_19/8%)] border-t border-[rgb(15_22_19/8%)] pt-5">
              {[
                { dt: "Purity", dd: "HPLC ≥99%" },
                { dt: "Release", dd: "Lot sheet" },
                { dt: "Dispatch", dd: "Within 24h" },
              ].map(({ dt, dd }) => (
                <div key={dt} className="px-4 first:pl-0 last:pr-0">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">{dt}</dt>
                  <dd className="mt-0.5 text-[12px] font-medium text-[#0f1613]">{dd}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — product info + buy */}
          <div>
            <div className="flex items-center gap-3">
              {product.bestseller && (
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">Bestseller</span>
              )}
              {product.newArrival && (
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0f1613]">New arrival</span>
              )}
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690] capitalize">
                {product.category.replace("-", " ")}
              </span>
            </div>

            <h1 className="mt-4 text-balance font-serif text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.05em] text-[#0f1613]">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-[#6b7a73]">{product.size}</p>

            <p className="mt-6 text-lg leading-8 text-[#2a3530]">{product.tagline}</p>
            <p className="mt-3 text-sm leading-7 text-[#5c6762]">{product.description}</p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#e8e6e1] bg-[#faf8f4] px-3 py-1.5">
              <FlaskConical className="h-3.5 w-3.5 text-[#1e6f58]" />
              <span className="text-[12px] font-medium text-[#2a3530]">
                Shipping from lot {lot} · Release sheet matched per bottle
              </span>
            </div>

            {product.category === "nasal-spray" ? (
              <p className="mt-5 border-l-2 border-[#1e6f58]/30 pl-4 text-[13px] leading-[1.8] text-[#5c6762]">
                Sprays are the lowest-friction entry point — no reconstitution,
                no needles, measured dose per actuation.
              </p>
            ) : null}

            <ul className="mt-6 space-y-2.5">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-baseline gap-3 text-[13.5px] leading-[1.7] text-[#2a3530]">
                  <span className="shrink-0 text-[#1e6f58]">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Price + lot release-sheet thumbnail (trust element at moment of doubt — Elite Design playbook §Conversion) */}
            <div className="mt-8 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-semibold tracking-tight text-[#0f1613]">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-lg text-[#9aa6a0] line-through">
                      ${product.compareAtPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-[12px] text-[#8a9690]">
                  <Globe className="h-3.5 w-3.5 text-[#1e6f58]" />
                  Ships worldwide · US from $12 · Free over $150 · Exact rate at checkout
                </p>
                {!appliedCode && (
                  <p className="mt-1.5 text-[12px] font-medium text-[#1e6f58]">
                    First order? Use <span className="font-semibold">FIRST10</span> for 10% off — saves ${(product.price * 0.1).toFixed(2)} on this bottle.
                  </p>
                )}
              </div>
              <CoaThumb lot={lot} productName={product.name.replace(/\s*\(Injectable Vial\)/i, "")} />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 rounded-[1rem] border border-[#1e6f58]/20 bg-[#f0f7f4] px-4 py-3 text-[12px] text-[#0f1613]">
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#1a5c48]">
                <span className="size-1.5 rounded-full bg-[#1a5c48]"></span>
                In stock — lot {lot}
              </span>
              <span className="text-[#5c6762]">Dispatch target within 24h after payment confirmation. Tracking emails when packed.</span>
            </div>

            {/* Quantity */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm text-[#6b7a73]">Quantity</span>
              <div className="flex items-center rounded-full border border-[rgb(15_22_19/12%)] bg-white">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="h-10 w-10 text-[#5c6762] hover:bg-[#f7faf8] hover:text-[#0f1613]"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-medium text-[#0f1613]">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="h-10 w-10 text-[#5c6762] hover:bg-[#f7faf8] hover:text-[#0f1613]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Discount code */}
            <div className="mt-5">
              <div className="flex gap-2">
                <Input
                  placeholder="Promo code (e.g. FIRST10)"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && applyCode()}
                  className="border-[rgb(15_22_19/12%)] bg-white"
                />
                <Button onClick={applyCode} variant="outline" className="border-[rgb(15_22_19/12%)] bg-white hover:bg-[#f7faf8]">
                  Apply
                </Button>
              </div>
              {appliedCode && (
                <p className="mt-2 text-xs text-[#1e6f58]">
                  ✓ {DISCOUNT_CODES[appliedCode].label} applied
                </p>
              )}
            </div>

            {/* Price breakdown */}
            <div className="mt-6 border-t border-[rgb(15_22_19/8%)] pt-5 text-sm">
              <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
              {appliedCode && (
                <Row label={`Discount (${appliedCode})`} value={`−$${discountAmt.toFixed(2)}`} positive />
              )}
              <Row label="Shipping (US estimate)" value={shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`} />
              <div className="mt-4 flex items-baseline justify-between border-t border-[rgb(15_22_19/8%)] pt-4">
                <span className="text-[13px] font-medium text-[#0f1613]">Total</span>
                <span className="text-[2rem] font-semibold tracking-tight text-[#0f1613]">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="mt-6 space-y-3">
              <button
                ref={primaryCtaRef}
                onClick={handleAddToCart}
                className={`flex h-14 w-full items-center justify-center gap-2.5 rounded-full text-[15px] font-semibold transition-all ${
                  addedToCart
                    ? "bg-[#175946] text-white"
                    : "bg-[#1e6f58] text-white hover:bg-[#175946] hover:scale-[1.01] active:scale-[0.99]"
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="h-5 w-5" />
                    Added to cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    Add to cart — ${total.toFixed(2)}
                  </>
                )}
              </button>

              {/* Calm guarantee line directly under the CTA — buyer sees risk
                  reversal at the moment of click, not buried in the protection
                  block below (Elite Design playbook §Risk Reversal). */}
              <p className="flex items-center justify-center gap-1.5 text-[12px] text-[#5c6762]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#1e6f58]" />
                Quality guarantee + 14-day unopened returns — replacement or refund on lot-mismatch, sterility failure, shipping damage, or unopened returns.
              </p>

              <div className="flex items-center justify-center gap-6 text-[11px] text-[#8a9690]">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" />HPLC ≥99%</span>
                <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5" />24h dispatch</span>
                <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5" />Lot release sheet</span>
              </div>
            </div>

            {/* Order protection */}
            <div className="mt-6 rounded-[1.35rem] border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-5 shadow-[0_1px_2px_rgb(15_22_19/3%),_0_18px_40px_-34px_rgb(15_22_19/16%)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                Order protection
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-[1rem] border border-[rgb(15_22_19/7%)] bg-white px-4 py-3">
                  <FileText className="h-4 w-4 text-[#1e6f58]" />
                  <p className="mt-2 text-[12px] font-medium text-[#0f1613]">Lot release sheet</p>
                  <p className="mt-1 text-[11px] leading-5 text-[#6b7a73]">Every order references the in-house release sheet for the batch you receive.</p>
                </div>
                <div className="rounded-[1rem] border border-[rgb(15_22_19/7%)] bg-white px-4 py-3">
                  <Truck className="h-4 w-4 text-[#1e6f58]" />
                  <p className="mt-2 text-[12px] font-medium text-[#0f1613]">Cold-chain dispatch</p>
                  <p className="mt-1 text-[11px] leading-5 text-[#6b7a73]">Orders are packed for temperature control and leave within 24h of payment confirmation.</p>
                </div>
                <div className="rounded-[1rem] border border-[rgb(15_22_19/7%)] bg-white px-4 py-3">
                  <ShieldCheck className="h-4 w-4 text-[#1e6f58]" />
                  <p className="mt-2 text-[12px] font-medium text-[#0f1613]">Order reviewed before release</p>
                  <p className="mt-1 text-[11px] leading-5 text-[#6b7a73]">Titan confirms payment route, shipping details, and dispatch timing before the order moves to fulfillment.</p>
                </div>
                <div className="rounded-[1rem] border border-[#1e6f58]/20 bg-[#f0f7f4] px-4 py-3">
                  <ShieldCheck className="h-4 w-4 text-[#1e6f58]" />
                  <p className="mt-2 text-[12px] font-medium text-[#0f1613]">Quality guarantee</p>
                  <p className="mt-1 text-[11px] leading-5 text-[#6b7a73]">Replacement or refund on lot-mismatch, sterility failure, or shipping damage. Email QA within 48h with photos. See returns policy.</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href="/lab-testing"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(15_22_19/10%)] bg-white px-3 py-2 text-[11px] font-medium text-[#0f1613] transition-colors hover:border-[#1e6f58]/30 hover:text-[#1e6f58]"
                >
                  Review lab-testing workflow
                </Link>
                <a
                  href="/specimen-coa.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(15_22_19/10%)] bg-white px-3 py-2 text-[11px] font-medium text-[#0f1613] transition-colors hover:border-[#1e6f58]/30 hover:text-[#1e6f58]"
                >
                  View sample lot-COA format
                </a>
              </div>
              <p className="mt-2 text-[10px] leading-4 text-[#8a9690]">
                The in-house release sheet for lot {lot} ships with the order; the independent ISO 17025 retest PDF follows by email within 5 business days.
              </p>
            </div>
          </div>
        </div>

        {product.category === "injectable" ? (
          <VialReconstitution
            productName={product.name.replace(/\s*\(Injectable Vial\)/i, "")}
            mgPerVial={parseMgPerVial(product.size)}
          />
        ) : null}

        <div className="mt-20 border-t border-[#e8e6e1] pt-12">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1e6f58]">
                Researcher feedback
              </span>
              <h2 className="mt-3 font-serif text-[clamp(1.6rem,2.4vw,2rem)] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                No reviews yet for this lot.
              </h2>
              <p className="mt-3 text-[13px] leading-[1.7] text-[#5c6762]">
                We don&apos;t fabricate reviews. When verified researchers
                leave feedback on this product, it will appear here with the
                lot they tested.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e8e6e1] bg-[#faf8f4] p-6 lg:p-8">
              <p className="text-[13px] font-semibold text-[#0f1613]">
                Already ordered {product.name}?
              </p>
              <p className="mt-2 text-[13px] leading-[1.75] text-[#5c6762]">
                Email <a className="underline decoration-dotted underline-offset-4 hover:text-[#1e6f58]" href={`mailto:reviews@titanpeptidelab.com?subject=${encodeURIComponent(`Review: ${product.name}`)}`}>reviews@titanpeptidelab.com</a> with your order number and what you observed.
                We post verified researcher feedback once we&apos;ve matched it
                to a real order and lot.
              </p>
              <p className="mt-3 text-[11px] leading-[1.6] text-[#8a9690]">
                Reviews must reflect research observations only. We do not
                publish therapeutic, dosing, or human-use claims.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-[rgb(15_22_19/8%)] bg-white/95 backdrop-blur-sm shadow-[0_-8px_24px_-12px_rgb(15_22_19/12%)] transition-transform duration-200 sm:hidden ${
          stickyVisible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex items-center gap-3 px-4 pt-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-medium leading-tight text-[#0f1613]">{product.name}</p>
            <p className="text-[11px] text-[#6b7a73]">${product.price.toFixed(2)} · {product.size}</p>
          </div>
          <button
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
            className={`flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-5 text-[14px] font-semibold transition-all ${
              addedToCart
                ? "bg-[#175946] text-white"
                : "bg-[#1e6f58] text-white active:scale-[0.98]"
            }`}
          >
            {addedToCart ? (
              <>
                <Check className="h-4 w-4" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" />
                Add — ${total.toFixed(2)}
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, positive }: { label: string; value: string; positive?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="text-[#69766f]">{label}</span>
      <span className={positive ? "text-[#1e6f58]" : "text-[#13211c]"}>{value}</span>
    </div>
  );
}
