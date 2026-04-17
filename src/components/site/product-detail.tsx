"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Check,
  ChevronLeft,
  Copy,
  Bitcoin,
  Wallet as WalletIcon,
  ShieldCheck,
  Truck,
  FileCheck2,
} from "lucide-react";
import {
  type Product,
  WALLETS,
  DISCOUNT_CODES,
} from "@/lib/products";

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
  const [appliedCode, setAppliedCode] = useState<keyof typeof DISCOUNT_CODES | null>(
    null
  );
  const [copied, setCopied] = useState(false);

  const subtotal = product.price * qty;
  const discountPct = appliedCode ? DISCOUNT_CODES[appliedCode].percent : 0;
  const discountAmt = subtotal * (discountPct / 100);
  const shipping = subtotal - discountAmt >= 150 ? 0 : 12;
  const total = Math.max(0, subtotal - discountAmt + shipping);

  const applyCode = () => {
    const upper = code.toUpperCase().trim();
    if (upper in DISCOUNT_CODES) {
      setAppliedCode(upper as keyof typeof DISCOUNT_CODES);
    } else {
      setAppliedCode(null);
    }
  };

  const copyAddr = () => {
    navigator.clipboard.writeText(WALLETS[chain]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to all products
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black">
              <BorderBeam
                size={300}
                duration={14}
                colorFrom="#10b981"
                colorTo="#6366f1"
              />
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Trust badges below image */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <TrustChip icon={ShieldCheck} label="HPLC ≥99%" />
              <TrustChip icon={FileCheck2} label="Batch COA" />
              <TrustChip icon={Truck} label="Free $150+" />
            </div>
          </div>

          {/* Info + Checkout */}
          <div>
            <div className="flex flex-wrap gap-2">
              {product.bestseller && (
                <Badge className="bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Bestseller
                </Badge>
              )}
              {product.newArrival && (
                <Badge className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  New arrival
                </Badge>
              )}
              <Badge className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 capitalize">
                {product.category.replace("-", " ")}
              </Badge>
            </div>

            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-zinc-500">{product.size}</p>

            <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
              {product.tagline}
            </p>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              {product.description}
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-2.5">
              {product.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-zinc-300"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-4xl font-semibold tracking-tight">
                ${product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <span className="text-lg text-zinc-600 line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Quantity */}
            <div className="mt-6 flex items-center gap-3">
              <Label className="text-sm text-zinc-400">Quantity</Label>
              <div className="flex items-center rounded-lg border border-white/10">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="h-10 w-10 text-zinc-400 hover:bg-white/5 hover:text-white"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-medium">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="h-10 w-10 text-zinc-400 hover:bg-white/5 hover:text-white"
                >
                  +
                </button>
              </div>
            </div>

            {/* Discount code */}
            <div className="mt-6">
              <Label className="text-sm text-zinc-400">Discount code</Label>
              <div className="mt-1.5 flex gap-2">
                <Input
                  placeholder="FIRST10"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="bg-white/5 border-white/10"
                />
                <Button
                  onClick={applyCode}
                  variant="outline"
                  className="border-white/10 hover:bg-white/5"
                >
                  Apply
                </Button>
              </div>
              {appliedCode && (
                <p className="mt-2 text-xs text-emerald-300">
                  ✓ {DISCOUNT_CODES[appliedCode].label} applied
                </p>
              )}
            </div>

            {/* Order summary */}
            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-sm">
              <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
              {appliedCode && (
                <Row
                  label={`Discount (${appliedCode})`}
                  value={`−$${discountAmt.toFixed(2)}`}
                  positive
                />
              )}
              <Row
                label="Shipping"
                value={shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              />
              <div className="my-3 h-px bg-white/5" />
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-white">Total</span>
                <span className="text-2xl font-semibold tracking-tight text-white">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Crypto checkout */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-white">
                Pay with crypto
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                Send the exact total to the address below. Email
                orders@titanpeptidelab.com with your tx hash + shipping address.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {CHAINS.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setChain(c.key)}
                    className={`rounded-lg border px-3 py-2.5 text-xs font-medium transition-all ${
                      chain === c.key
                        ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-300"
                        : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <WalletIcon className="h-3.5 w-3.5" />
                    {CHAINS.find((c) => c.key === chain)?.chain} address
                  </span>
                  <button
                    onClick={copyAddr}
                    className="flex items-center gap-1 text-emerald-300 hover:text-emerald-200"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <p className="mt-2 break-all font-mono text-xs text-white">
                  {WALLETS[chain]}
                </p>
              </div>

              <Button
                asChild
                className="mt-4 h-12 w-full bg-emerald-500 text-black font-semibold hover:bg-emerald-400"
              >
                <a
                  href={`mailto:orders@titanpeptidelab.com?subject=Order:%20${encodeURIComponent(
                    product.name
                  )}%20×%20${qty}&body=${encodeURIComponent(
                    `Product: ${product.name}\nQuantity: ${qty}\nTotal: $${total.toFixed(
                      2
                    )}\nPaid via: ${
                      CHAINS.find((c) => c.key === chain)?.label
                    }\nWallet: ${WALLETS[chain]}\n\nTx hash: \nShipping address:\n`
                  )}`}
                >
                  <Bitcoin className="mr-2 h-4 w-4" />
                  Confirm order via email
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-zinc-600">
                Ships within 24h of payment confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  positive,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="text-zinc-400">{label}</span>
      <span className={positive ? "text-emerald-300" : "text-white"}>
        {value}
      </span>
    </div>
  );
}

function TrustChip({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5">
      <Icon className="h-4 w-4 text-emerald-400" />
      <span className="text-xs font-medium text-zinc-300">{label}</span>
    </div>
  );
}
