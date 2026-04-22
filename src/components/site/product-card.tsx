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
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col bg-white transition-colors duration-200 hover:bg-[#fafafa]",
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
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
              {product.category === "nasal-spray"
                ? "Nasal spray"
                : product.category === "injectable"
                  ? "Injectable"
                  : "Stack"}
            </span>
            <span className="h-3 w-px bg-[rgba(10,10,10,0.1)]" aria-hidden />
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a3a3a3]">
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

        <div className="mt-5 border border-[rgba(10,10,10,0.06)] bg-[#f7f7f5] px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1a5c48]">
            Pre-checkout proof
          </p>
          <p className="mt-1.5 text-[12px] leading-[1.7] text-[#525252]">
            Assay standard, certificate path, and cold-chain dispatch language are visible before payment.
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
              className="inline-flex h-10 items-center justify-center gap-1.5 bg-[#0a0a0a] px-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a5c48]"
            >
              Review compound
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
