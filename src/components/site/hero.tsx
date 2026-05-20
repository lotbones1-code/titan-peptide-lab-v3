"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ShoppingBag } from "lucide-react";
import { NASAL_SPRAYS } from "@/lib/products";
import { CompoundPoster } from "./compound-poster";
import { useCart } from "@/lib/cart-context";

function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}

export function Hero() {
  const featured = NASAL_SPRAYS[0];
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddFeatured = () => {
    if (!featured) return;
    addItem(featured, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <section className="border-b border-[#ece9e2] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-start lg:gap-14">
            <div className="min-w-0">
              <span className="inline-flex rounded-full border border-[#dde5df] bg-[#f7faf8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">
                Nasal peptide catalog
              </span>

              <h1 className="mt-5 break-words font-serif text-[clamp(2.9rem,6vw,5.3rem)] font-normal leading-[0.9] tracking-[-0.05em] text-[#0f1110]">
                Research peptides
                <br />
                without the guesswork.
                <br />
                <span className="text-[#1a5c48]">Lot-matched. Crypto. Discreet.</span>
              </h1>

              <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.85] text-[#555b55] lg:text-[16px]">
                Every order ships with the release sheet for your batch — not a stock document. Pay in BTC, ETH, USDC, or SOL. No bank, no KYC, no shipping label tied to your card. Dispatched within 24 hours, worldwide.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/products"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#0f1110] px-8 text-[13px] font-semibold text-white transition-colors hover:bg-[#1a5c48]"
                >
                  Shop sprays — from ${NASAL_SPRAYS.length ? Math.min(...NASAL_SPRAYS.map((p) => p.price)).toFixed(0) : "65"}
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/lab-testing"
                  className="inline-flex h-12 items-center text-[13px] font-semibold text-[#1a5c48] underline decoration-[#cfdad3] decoration-1 underline-offset-[6px] transition-colors hover:decoration-[#1a5c48]"
                >
                  See the COA format
                </Link>
              </div>

              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#66736d]">
                <span>
                  <span className="font-semibold text-[#1a5c48]">FIRST10</span> — 10% off your first order at checkout.
                </span>
                <span aria-hidden className="hidden text-[#cfdad3] sm:inline">·</span>
                <span>
                  Order today —{" "}
                  <span className="font-semibold text-[#0f1110]">dispatch within 24h</span>{" "}
                  after on-chain confirmation.
                </span>
              </p>

              <div className="mt-5 rounded-[1.15rem] border border-[#dfe6e2] bg-[#f7faf8] p-4 sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:gap-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                    Recommended rail · USDC on Solana
                  </p>
                  <p className="mt-2 max-w-[48ch] text-[12px] leading-6 text-[#44514b]">
                    Sub-cent network fees, $1 = $1, settles in seconds. BTC, ETH, ERC-20 USDC, and SOL remain available — the exact wallet and network are shown before payment.
                  </p>
                </div>
                <Link
                  href="/how-to-pay-with-crypto"
                  className="mt-3 inline-flex h-9 items-center justify-center rounded-full border border-[#cfdad3] bg-white px-4 text-[11px] font-semibold text-[#0f1110] transition-colors hover:border-[#1a5c48] hover:text-[#1a5c48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5c48]/20 sm:mt-0"
                >
                  Preview payment rails
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  ["≥99%", "HPLC purity, verified per lot"],
                  ["24h", "dispatch from payment confirmation"],
                  ["No KYC", "crypto-only — no bank, no card data"],
                  ["Worldwide", "tracked shipping, lot release sheet"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[1.2rem] border border-[#e7ece9] bg-[#fafbfa] px-5 py-4"
                  >
                    <p className="text-[1.6rem] font-semibold tracking-[-0.04em] text-[#0f1110]">{value}</p>
                    <p className="mt-1 text-[12px] leading-6 text-[#66736d]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              {featured ? (
                <div className="overflow-hidden rounded-[1.7rem] border border-[#e8e6e1] bg-[#fafaf8] shadow-[0_1px_2px_rgb(15_22_19/4%),_0_30px_70px_-50px_rgb(15_22_19/16%)]">
                  <div className="border-b border-[#e8e6e1] px-6 py-5 sm:px-7">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                          Featured release
                        </p>
                        <h2 className="mt-2 font-serif text-[1.95rem] leading-[0.95] tracking-[-0.04em] text-[#0f1110]">
                          {featured.name.replace(" Nasal Spray", "").replace(/-/g, "\u2011")}
                        </h2>
                      </div>
                      <p className="text-[1.55rem] font-semibold tabular-nums text-[#0f1110]">
                        {formatPrice(featured.price)}
                      </p>
                    </div>
                    <p className="mt-3 max-w-[44ch] text-[13px] leading-[1.75] text-[#66736d]">
                      {featured.tagline} Lot ships with its own release sheet — independent retest follows by email.
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#f0f7f4] px-3 py-1 text-[11px] font-medium text-[#1a5c48]">
                      <span className="size-1.5 rounded-full bg-[#1a5c48]"></span>
                      Current lot in stock — dispatch target within 24h of payment
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <CompoundPoster
                      product={featured}
                      variant="feature"
                      className="min-h-[320px] border-0 shadow-none sm:min-h-[380px] lg:min-h-[420px]"
                    />
                  </div>

                  <div className="grid gap-4 border-t border-[#e8e6e1] bg-white p-6 sm:grid-cols-[1fr_auto] sm:items-end sm:px-7">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                        Order desk
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          "Lot release sheet",
                          "24h dispatch target",
                          "Ships worldwide",
                        ].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#e3e8e4] bg-[#fafbfa] px-3 py-1.5 text-[11px] font-medium text-[#52605a]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:min-w-[15rem]">
                      <button
                        onClick={handleAddFeatured}
                        className={`inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-[12px] font-semibold text-white transition-colors ${
                          added ? "bg-[#175946]" : "bg-[#0f1110] hover:bg-[#1a5c48]"
                        }`}
                      >
                        {added ? <Check className="size-4" /> : <ShoppingBag className="size-4" />}
                        {added ? "Added to cart" : "Add featured to cart"}
                      </button>
                      <Link
                        href={`/products/${featured.slug}`}
                        className="inline-flex h-11 items-center justify-center rounded-full border border-[#d4d4d4] px-6 text-[12px] font-semibold text-[#0f1110] transition-colors hover:border-[#0f1110]"
                      >
                        View product detail
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
      </div>
    </section>
  );
}
