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
    <section className="relative bg-[linear-gradient(180deg,#fbf8f2_0%,#f4efe7_58%,#eee7dc_100%)] py-16 text-[#13211c]">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#68766f] hover:text-[#13211c]"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to all products
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[1.8rem] border border-[#d9e0d7] bg-[linear-gradient(180deg,#fffdfa_0%,#eef3ed_100%)] shadow-[0_24px_60px_-38px_rgba(19,33,28,0.32)]">
              <div aria-hidden className="absolute inset-x-12 top-8 h-28 rounded-full bg-[#dce9de] blur-3xl" />
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
                <Badge className="border border-[#d6c489] bg-[#f2ead1] text-[#6d5822]">Bestseller</Badge>
              )}
              {product.newArrival && (
                <Badge className="border border-[#c9d8d0] bg-[#ecf3ee] text-[#415950]">New arrival</Badge>
              )}
              <Badge className="border border-[#d3ddd4] bg-white/80 text-[#4e5e57] capitalize">
                {product.category.replace("-", " ")}
              </Badge>
            </div>

            <h1 className="mt-4 text-balance font-serif text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.05em] text-[#13211c]">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-[#6d7b74]">{product.size}</p>

            <p className="mt-6 text-lg leading-8 text-[#33423b]">{product.tagline}</p>
            <p className="mt-3 text-sm leading-7 text-[#5d6a64]">{product.description}</p>

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-[#304039]">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1e6f58]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-4xl font-semibold tracking-tight text-[#13211c]">
                ${product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <span className="text-lg text-[#8b9690] line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Label className="text-sm text-[#6d7b74]">Quantity</Label>
              <div className="flex items-center rounded-full border border-[#d1dad1] bg-white/70">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="h-10 w-10 text-[#66746d] hover:bg-[#f3f6f3] hover:text-[#13211c]"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-medium text-[#13211c]">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="h-10 w-10 text-[#66746d] hover:bg-[#f3f6f3] hover:text-[#13211c]"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-6">
              <Label className="text-sm text-[#6d7b74]">Discount code</Label>
              <div className="mt-1.5 flex gap-2">
                <Input
                  placeholder="FIRST10"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="border-[#d1dad1] bg-white/70"
                />
                <Button onClick={applyCode} variant="outline" className="border-[#d1dad1] bg-white/75 hover:bg-white">
                  Apply
                </Button>
              </div>
              {appliedCode && (
                <p className="mt-2 text-xs text-[#1e6f58]">
                  ✓ {DISCOUNT_CODES[appliedCode].label} applied
                </p>
              )}
            </div>

            <div className="mt-8 rounded-[1.4rem] border border-[#d8dfd7] bg-white/78 p-5 text-sm shadow-[0_18px_40px_-34px_rgba(19,33,28,0.22)]">
              <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
              {appliedCode && (
                <Row label={`Discount (${appliedCode})`} value={`−$${discountAmt.toFixed(2)}`} positive />
              )}
              <Row label="Shipping" value={shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`} />
              <div className="my-3 h-px bg-[#d8dfd7]" />
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-[#13211c]">Total</span>
                <span className="text-2xl font-semibold tracking-tight text-[#13211c]">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 rounded-[1.6rem] border border-[#d7dfd6] bg-[linear-gradient(180deg,#fffdfa_0%,#f2ede5_100%)] p-6 shadow-[0_24px_60px_-40px_rgba(19,33,28,0.28)]">
              <h3 className="font-serif text-[1.8rem] leading-[1.02] text-[#13211c]">Pay with crypto</h3>
              <p className="mt-2 text-sm leading-7 text-[#5d6a64]">
                Send the exact total to the address below, then email orders@titanpeptidelab.com with your tx hash and shipping address.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {CHAINS.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setChain(c.key)}
                    className={`rounded-full border px-3 py-2.5 text-xs font-medium transition-all ${
                      chain === c.key
                        ? "border-[#1e6f58]/30 bg-[#e7f1eb] text-[#1e6f58]"
                        : "border-[#d1dad1] bg-white/70 text-[#66746d] hover:border-[#bcc8c0] hover:text-[#13211c]"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-[1rem] border border-[#d7dfd6] bg-white/75 p-4">
                <div className="flex items-center justify-between text-xs text-[#6e7b75]">
                  <span className="flex items-center gap-1.5">
                    <WalletIcon className="h-3.5 w-3.5" />
                    {CHAINS.find((c) => c.key === chain)?.chain} address
                  </span>
                  <button onClick={copyAddr} className="flex items-center gap-1 text-[#1e6f58] hover:text-[#175946]">
                    {copied ? <><Check className="h-3 w-3" /> Copied</> : <><Copy className="h-3 w-3" /> Copy</>}
                  </button>
                </div>
                <p className="mt-2 break-all font-mono text-xs text-[#13211c]">{WALLETS[chain]}</p>
              </div>

              <Button asChild className="mt-4 h-12 w-full rounded-full bg-[#1e6f58] text-[#f8fbf8] font-semibold hover:bg-[#175946]">
                <a
                  href={`mailto:orders@titanpeptidelab.com?subject=Order:%20${encodeURIComponent(product.name)}%20×%20${qty}&body=${encodeURIComponent(
                    `Product: ${product.name}\nQuantity: ${qty}\nTotal: $${total.toFixed(2)}\nPaid via: ${CHAINS.find((c) => c.key === chain)?.label}\nWallet: ${WALLETS[chain]}\n\nTx hash: \nShipping address:\n`
                  )}`}
                >
                  <Bitcoin className="mr-2 h-4 w-4" />
                  Confirm order via email
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-[#7a8781]">Ships within 24h of payment confirmation</p>
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
