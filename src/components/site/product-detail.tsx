"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Check,
  ChevronLeft,
  Copy,
  Bitcoin,
  Wallet as WalletIcon,
  ShieldCheck,
  Truck,
  FileCheck2,
  type LucideIcon,
} from "lucide-react";
import { type Product, WALLETS, DISCOUNT_CODES } from "@/lib/products";

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

  const copyAddr = () => {
    navigator.clipboard.writeText(WALLETS[chain]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="relative bg-white py-16 text-[#0f1613]">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#5c6762] hover:text-[#0f1613]"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to all products
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[1.8rem] border border-[rgb(15_22_19/8%)] bg-[#fafbfa] shadow-[0_1px_2px_rgb(15_22_19/4%),_0_24px_60px_-40px_rgb(15_22_19/18%)]">
              <div aria-hidden className="absolute inset-x-12 top-8 h-28 rounded-full bg-[#e8f1ec] blur-3xl opacity-60" />
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-8"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <TrustChip icon={ShieldCheck} label="HPLC ≥99%" />
              <TrustChip icon={FileCheck2} label="Batch COA" />
              <TrustChip icon={Truck} label="Fast dispatch" />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {product.bestseller && (
                <Badge className="border border-[#1e6f58]/20 bg-[#f0f5f2] text-[#1e6f58]">Bestseller</Badge>
              )}
              {product.newArrival && (
                <Badge className="border border-[rgb(15_22_19/10%)] bg-[#fafafa] text-[#0f1613]">New arrival</Badge>
              )}
              <Badge className="border border-[rgb(15_22_19/10%)] bg-white text-[#5c6762] capitalize">
                {product.category.replace("-", " ")}
              </Badge>
            </div>

            <h1 className="mt-4 text-balance font-serif text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.05em] text-[#0f1613]">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-[#6b7a73]">{product.size}</p>

            <p className="mt-6 text-lg leading-8 text-[#2a3530]">{product.tagline}</p>
            <p className="mt-3 text-sm leading-7 text-[#5c6762]">{product.description}</p>

            {product.category === "nasal-spray" ? (
              <div className="mt-6 rounded-[1.2rem] border border-[#dce7e0] bg-[#f7faf8] px-4 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1e6f58]">
                  Why sprays lead
                </p>
                <p className="mt-2 text-sm leading-7 text-[#2a3530]">
                  Titan pushes sprays first because they are the lowest-friction
                  entry point in the catalog, easier to understand, easier to
                  trust, and easier to merchandise cleanly than needle-based
                  formats.
                </p>
              </div>
            ) : null}

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-[#2a3530]">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1e6f58]" />
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

            <div className="mt-6">
              <Label className="text-sm text-[#6b7a73]">Discount code</Label>
              <div className="mt-1.5 flex gap-2">
                <Input
                  placeholder="FIRST10"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
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

            <div className="mt-8 rounded-[1.4rem] border border-[rgb(15_22_19/8%)] bg-white p-5 text-sm shadow-[0_1px_2px_rgb(15_22_19/4%)]">
              <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
              {appliedCode && (
                <Row label={`Discount (${appliedCode})`} value={`−$${discountAmt.toFixed(2)}`} positive />
              )}
              <Row label="Shipping" value={shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`} />
              <div className="my-3 h-px bg-[rgb(15_22_19/8%)]" />
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-[#0f1613]">Total</span>
                <span className="text-2xl font-semibold tracking-tight text-[#0f1613]">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 rounded-[1.6rem] border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-6 shadow-[0_1px_2px_rgb(15_22_19/4%),_0_24px_60px_-40px_rgb(15_22_19/15%)]">
              <h3 className="font-serif text-[1.8rem] leading-[1.02] text-[#0f1613]">Pay with crypto</h3>
              <p className="mt-2 text-sm leading-7 text-[#5c6762]">
                Send the exact total to the address below, then email orders@titanpeptidelab.com with your tx hash and shipping address.
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

function TrustChip({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-[1rem] border border-[#d7dfd6] bg-white/75 px-3 py-2.5">
      <Icon className="h-4 w-4 text-[#1e6f58]" />
      <span className="text-xs font-medium text-[#43524b]">{label}</span>
    </div>
  );
}
