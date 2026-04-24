"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ChevronLeft,
  Copy,
  Bitcoin,
  Wallet as WalletIcon,
  Check,
  ShoppingCart,
  ShieldCheck,
  Zap,
  FileText,
  Truck,
} from "lucide-react";
import { type Product, WALLETS, DISCOUNT_CODES } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { CompoundPoster } from "./compound-poster";

type ChainKey = "btc" | "eth" | "usdcErc" | "sol" | "usdcSol";

const CHAINS: { key: ChainKey; label: string; chain: string }[] = [
  { key: "btc", label: "Bitcoin (BTC)", chain: "Bitcoin" },
  { key: "eth", label: "Ethereum (ETH)", chain: "Ethereum" },
  { key: "usdcErc", label: "USDC (ERC-20)", chain: "Ethereum" },
  { key: "sol", label: "Solana (SOL)", chain: "Solana" },
  { key: "usdcSol", label: "USDC (Solana)", chain: "Solana" },
];

export function ProductDetail({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [chain, setChain] = useState<ChainKey>("usdcSol");
  const [code, setCode] = useState("");
  const [appliedCode, setAppliedCode] = useState<keyof typeof DISCOUNT_CODES | null>(null);
  const [copied, setCopied] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();

  const subtotal = product.price * qty;
  const discountPct = appliedCode ? DISCOUNT_CODES[appliedCode].percent : 0;
  const discountAmt = subtotal * (discountPct / 100);
  const shipping = subtotal - discountAmt >= 150 ? 0 : 12;
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

  const copyAddr = () => {
    navigator.clipboard.writeText(WALLETS[chain]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
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
          <div className="relative">
            <CompoundPoster product={product} variant="detail" className="w-full" />
            <dl className="mt-5 grid grid-cols-3 divide-x divide-[rgb(15_22_19/8%)] border-t border-[rgb(15_22_19/8%)] pt-5">
              {[
                { dt: "Purity", dd: "HPLC ≥99%" },
                { dt: "Certificate", dd: "Lot-matched COA" },
                { dt: "Dispatch", dd: "Within 24h" },
              ].map(({ dt, dd }) => (
                <div key={dt} className="px-4 first:pl-0 last:pr-0">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">{dt}</dt>
                  <dd className="mt-0.5 text-[12px] font-medium text-[#0f1613]">{dd}</dd>
                </div>
              ))}
            </dl>
          </div>

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

            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-4xl font-semibold tracking-tight text-[#0f1613]">
                ${product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <span className="text-lg text-[#9aa6a0] line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Label className="text-sm text-[#6b7a73]">Quantity</Label>
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

            {/* Primary CTA — Add to Cart */}
            <div className="mt-8 space-y-3">
              <button
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
              <div className="flex items-center justify-center gap-6 text-[11px] text-[#8a9690]">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" />HPLC ≥99%</span>
                <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5" />24h dispatch</span>
                <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5" />Lot-matched COA</span>
              </div>
            </div>

            <div className="mt-4 rounded-[1.35rem] border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-5 shadow-[0_1px_2px_rgb(15_22_19/3%),_0_18px_40px_-34px_rgb(15_22_19/16%)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                Order protection
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1rem] border border-[rgb(15_22_19/7%)] bg-white px-4 py-3">
                  <FileText className="h-4 w-4 text-[#1e6f58]" />
                  <p className="mt-2 text-[12px] font-medium text-[#0f1613]">Lot-matched COA</p>
                  <p className="mt-1 text-[11px] leading-5 text-[#6b7a73]">Every order references a certificate tied to the batch you receive.</p>
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
                  Open specimen COA
                </a>
              </div>
            </div>

            <div className="mt-6">
              <Label className="text-sm text-[#6b7a73]">Discount code</Label>
              <div className="mt-1.5 flex gap-2">
                <Input
                  placeholder="Enter code (e.g. FIRST10)"
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

            <div className="mt-8 border-t border-[rgb(15_22_19/8%)] pt-6 text-sm">
              <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
              {appliedCode && (
                <Row label={`Discount (${appliedCode})`} value={`−$${discountAmt.toFixed(2)}`} positive />
              )}
              <Row label="Shipping" value={shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`} />
              <div className="mt-4 flex items-baseline justify-between border-t border-[rgb(15_22_19/8%)] pt-4">
                <span className="text-[13px] font-medium text-[#0f1613]">Total</span>
                <span className="text-[2rem] font-semibold tracking-tight text-[#0f1613]">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 rounded-[1.6rem] border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-6 shadow-[0_1px_2px_rgb(15_22_19/4%),_0_24px_60px_-40px_rgb(15_22_19/15%)]">
              <h3 className="font-serif text-[1.8rem] leading-[1.02] text-[#0f1613]">Worldwide crypto payment</h3>
              <p className="mt-2 text-sm leading-7 text-[#5c6762]">
                Send the exact total to the address below, then email orders@titanpeptidelab.com with your tx hash and shipping address. International buyers use the same flow — Titan confirms the route before dispatch.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {CHAINS.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setChain(c.key)}
                    className={`rounded-full border px-3 py-2.5 text-xs font-medium transition-all ${
                      chain === c.key
                        ? "border-[#1e6f58]/30 bg-[#f0f5f2] text-[#1e6f58]"
                        : "border-[rgb(15_22_19/12%)] bg-white text-[#5c6762] hover:border-[#1e6f58]/30 hover:text-[#0f1613]"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-[1rem] border border-[rgb(15_22_19/10%)] bg-white p-4">
                <div className="flex items-center justify-between text-xs text-[#6b7a73]">
                  <span className="flex items-center gap-1.5">
                    <WalletIcon className="h-3.5 w-3.5" />
                    {CHAINS.find((c) => c.key === chain)?.chain} address
                  </span>
                  <button onClick={copyAddr} className="flex items-center gap-1 text-[#1e6f58] hover:text-[#175946]">
                    {copied ? <><Check className="h-3 w-3" /> Copied</> : <><Copy className="h-3 w-3" /> Copy</>}
                  </button>
                </div>
                <p className="mt-2 break-all font-mono text-xs text-[#0f1613]">{WALLETS[chain]}</p>
              </div>

              <Button asChild className="mt-4 h-12 w-full rounded-full bg-[#1e6f58] text-white font-semibold hover:bg-[#175946]">
                <a
                  href={`mailto:orders@titanpeptidelab.com?subject=Order:%20${encodeURIComponent(product.name)}%20×%20${qty}&body=${encodeURIComponent(
                    `Product: ${product.name}\nQuantity: ${qty}\nTotal: $${total.toFixed(2)}\nPaid via: ${CHAINS.find((c) => c.key === chain)?.label}\nWallet: ${WALLETS[chain]}\n\nTx hash: \nShipping address:\n`
                  )}`}
                >
                  <Bitcoin className="mr-2 h-4 w-4" />
                  Confirm order via email
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-[#9aa6a0]">Ships within 24h of payment confirmation</p>
            </div>
          </div>
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
