import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";
import { CompoundPoster } from "./compound-poster";

export type ProductCardProduct = Pick<
  Product,
  | "id"
  | "slug"
  | "name"
  | "price"
  | "compareAtPrice"
  | "size"
  | "tagline"
  | "benefits"
  | "image"
  | "category"
>;

export function ProductCard({
  product,
  variant = "default",
}: {
  product: ProductCardProduct;
  variant?: "default" | "stack";
}) {
  const topBenefits = product.benefits.slice(0, 2);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[rgba(10,10,10,0.08)] bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(10,10,10,0.06)]",
        variant === "stack" && "md:grid md:grid-cols-[280px_1fr]"
      )}
    >
      <Link
        href={`/products/${product.slug}`}
        className="relative block overflow-hidden border-b border-[rgba(10,10,10,0.06)] outline-none focus-visible:ring-1 focus-visible:ring-[#1a5c48]"
      >
        <CompoundPoster
          product={product}
          variant="card"
          className="min-h-60 w-full rounded-none border-0 shadow-none transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-7">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#eef4f0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
              {product.category === "nasal-spray"
                ? "Nasal spray"
                : product.category === "injectable"
                  ? "Injectable"
                  : "Stack"}
            </span>
            <span className="rounded-full border border-[rgba(10,10,10,0.08)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7a7a7a]">
              COA included
            </span>
          </div>
          <h3 className="mt-4 font-serif text-[1.65rem] leading-[1.02] tracking-[-0.035em] text-[#0a0a0a]">
            {product.name}
          </h3>
          <p className="mt-1 text-[11px] tracking-[0.04em] text-[#a3a3a3]">
            {product.size}
          </p>
        </div>

        <p className="mt-4 text-[13.5px] leading-[1.8] text-[#525252]">
          {product.tagline}
        </p>

        {topBenefits.length ? (
          <ul className="mt-5 space-y-2.5">
            {topBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 text-[12.5px] leading-[1.6] text-[#525252]">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#1a5c48]" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 rounded-2xl border border-[rgba(10,10,10,0.06)] bg-[#f7f7f5] px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1a5c48]">
            Proof before payment
          </p>
          <p className="mt-1.5 text-[12px] leading-[1.7] text-[#525252]">
            Certificate path, assay threshold, and cold-chain handling are visible before checkout.
          </p>
        </div>

        <div className="mt-auto pt-6">
          <div className="flex flex-col gap-4 border-t border-[rgba(10,10,10,0.06)] pt-5">
            <div className="flex items-baseline gap-2">
              <p className="text-xl font-semibold text-[#0a0a0a]">
                {formatPrice(product.price)}
              </p>
              {product.compareAtPrice ? (
                <p className="text-[13px] text-[#c0c0c0] line-through">
                  {formatPrice(product.compareAtPrice)}
                </p>
              ) : null}
            </div>

            <Link
              href={`/products/${product.slug}`}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#0a0a0a] px-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a5c48]"
            >
              Shop compound
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
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
