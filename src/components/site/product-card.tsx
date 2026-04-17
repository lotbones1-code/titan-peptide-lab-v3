"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { Check, ArrowUpRight, Zap } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductCard({
  product,
  featured,
}: {
  product: Product;
  featured?: boolean;
}) {
  const discount = product.compareAtPrice
    ? Math.round(
        ((product.compareAtPrice - product.price) / product.compareAtPrice) *
          100
      )
    : 0;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] transition-all hover:border-emerald-500/30">
      {featured && (
        <BorderBeam
          size={120}
          duration={10}
          colorFrom="#10b981"
          colorTo="#6366f1"
        />
      )}

      {/* Top badges */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          {product.bestseller && (
            <Badge className="bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] uppercase tracking-wider">
              <Zap className="mr-1 h-3 w-3" />
              Bestseller
            </Badge>
          )}
          {product.newArrival && (
            <Badge className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[10px] uppercase tracking-wider">
              New arrival
            </Badge>
          )}
        </div>
        {discount > 0 && (
          <Badge className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[10px] font-bold">
            −{discount}%
          </Badge>
        )}
      </div>

      {/* Image area */}
      <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Fallback glyph — replace with real images */}
          <div className="flex h-32 w-32 items-center justify-center rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 text-4xl font-bold text-emerald-400 shadow-2xl shadow-emerald-500/20">
            {product.name
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </div>
        </div>
        {/* Spotlight on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.15), transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-white">
              {product.name}
            </h3>
            <p className="mt-0.5 text-xs text-zinc-500">{product.size}</p>
          </div>
        </div>

        <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
          {product.tagline}
        </p>

        <ul className="mt-4 space-y-1.5">
          {product.benefits.slice(0, 3).map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-xs text-zinc-400"
            >
              <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold tracking-tight text-white">
                ${product.price}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-zinc-600 line-through">
                  ${product.compareAtPrice}
                </span>
              )}
            </div>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-white text-black hover:bg-emerald-400 hover:text-black"
          >
            <Link href={`/products/${product.slug}`}>
              Buy
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
