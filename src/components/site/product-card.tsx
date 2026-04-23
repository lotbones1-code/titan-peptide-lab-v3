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
        "group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[rgba(10,10,10,0.08)] bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(10,10,10,0.06)]",
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
          className="min-h-64 w-full rounded-none border-0 shadow-none transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#eef4f0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
            {product.category === "nasal-spray"
              ? "Nasal spray"
              : product.category === "injectable"
                ? "Injectable"
                : "Stack"}
          </span>
          <span className="rounded-full border border-[rgba(10,10,10,0.08)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7a7a7a]">
            COA path shown
          </span>
        </div>

        <div className="mt-5">
          <h3 className="font-serif text-[1.85rem] leading-[1.02] tracking-[-0.04em] text-[#0a0a0a]">
            {product.name}
          </h3>
          <p className="mt-2 text-[12px] uppercase tracking-[0.08em] text-[#9a9f9a]">
            {product.size}
          </p>
        </div>

        <p className="mt-4 max-w-[34ch] text-[13.5px] leading-[1.8] text-[#525252]">
          {product.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            product.benefits[0],
            "Cold-chain dispatch",
          ]
            .filter(Boolean)
            .map((item) => (
              <span
                key={item}
                className="rounded-full border border-[rgba(10,10,10,0.07)] bg-[#f7f6f1] px-3 py-1.5 text-[11px] leading-none text-[#5f655f]"
              >
                {item}
              </span>
            ))}
        </div>

        <div className="mt-auto pt-7">
          <div className="flex items-end justify-between gap-4 border-t border-[rgba(10,10,10,0.06)] pt-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9a9f9a]">
                Starting at
              </p>
              <div className="mt-1 flex items-baseline gap-2">
                <p className="text-[1.4rem] font-semibold tracking-[-0.03em] text-[#0a0a0a]">
                  {formatPrice(product.price)}
                </p>
                {product.compareAtPrice ? (
                  <p className="text-[13px] text-[#c0c0c0] line-through">
                    {formatPrice(product.compareAtPrice)}
                  </p>
                ) : null}
              </div>
            </div>

            <Link
              href={`/products/${product.slug}`}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#0a0a0a] px-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a5c48]"
            >
              View product
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
