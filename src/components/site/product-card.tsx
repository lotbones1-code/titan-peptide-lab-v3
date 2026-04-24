"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ShoppingBag, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";
import { CompoundPoster } from "./compound-poster";
import { useCart } from "@/lib/cart-context";

export type ProductCardProduct = Product;

export function ProductCard({
  product,
  className,
}: {
  product: ProductCardProduct;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#e8e6e1] bg-white transition-shadow duration-200 hover:shadow-[0_18px_54px_-34px_rgba(0,0,0,0.18)]",
        className
      )}
    >
      <Link
        href={`/products/${product.slug}`}
        className="block border-b border-[#e8e6e1]"
      >
        <CompoundPoster
          product={product}
          variant="card"
          className="min-h-52 w-full rounded-none border-0 shadow-none transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a5c48]">
          {product.category === "nasal-spray" ? "Nasal spray" : product.category === "injectable" ? "Injectable" : "Stack"}
        </span>

        <h3 className="mt-2 font-serif text-[1.5rem] leading-[1.1] tracking-[-0.03em] text-[#0f1110]">
          {product.name}
        </h3>
        <p className="mt-1 text-[12px] text-[#999]">{product.size}</p>

        <p className="mt-3 text-[13px] leading-[1.7] text-[#555b55]">
          {product.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.benefits.slice(0, 2).map((benefit) => (
            <span
              key={benefit}
              className="rounded-full border border-[#e8ece8] bg-[#fafbfa] px-3 py-1.5 text-[11px] font-medium text-[#5a6761]"
            >
              {benefit}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-[#e8e6e1] pt-5 mt-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                <p className="text-[1.25rem] font-semibold tracking-[-0.02em] text-[#0f1110]">
                  {formatPrice(product.price)}
                </p>
                {product.compareAtPrice ? (
                  <p className="text-[13px] text-[#bbb] line-through">
                    {formatPrice(product.compareAtPrice)}
                  </p>
                ) : null}
              </div>
              <p className="mt-0.5 flex items-center gap-1 text-[10px] text-[#aab6b0]">
                <Globe className="h-3 w-3" />
                Ships worldwide · Pay with crypto
              </p>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={handleAdd}
              className={`inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full text-[11px] font-semibold transition-colors ${
                added ? "bg-[#175946] text-white" : "bg-[#0f1110] text-white hover:bg-[#1a5c48]"
              }`}
            >
              {added ? <Check className="size-3.5" /> : <ShoppingBag className="size-3.5" />}
              {added ? "Added" : "Add to cart"}
            </button>

            <Link
              href={`/products/${product.slug}`}
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-[#d7dbd7] px-4 text-[11px] font-semibold text-[#0f1110] transition-colors hover:border-[#0f1110]"
            >
              Details
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export function formatPrice(price: number) {
  return Number.isInteger(price) ? `$${price}` : `$${price.toFixed(2)}`;
}
