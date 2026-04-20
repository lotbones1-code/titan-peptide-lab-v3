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
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[rgb(15_22_19/8%)] bg-white text-[#0f1613] transition duration-300 hover:-translate-y-1 hover:border-[rgb(15_22_19/14%)] hover:shadow-[0_24px_70px_-34px_rgb(15_22_19/25%)]",
        variant === "stack" && "md:grid md:grid-cols-[280px_1fr]"
      )}
    >
      <Link
        href={`/products/${product.slug}`}
        className="relative flex min-h-64 overflow-hidden border-b border-[rgb(15_22_19/6%)] bg-[#f5f1ea] outline-none focus-visible:ring-2 focus-visible:ring-[#1e6f58] md:border-b-0 md:border-r"
      >
        <CompoundPoster
          product={product}
          variant="card"
          className="min-h-64 w-full rounded-none border-0 shadow-none"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="rounded-full bg-[#edf4f0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1e6f58]">
              {product.category === "nasal-spray"
                ? "Nasal spray"
                : product.category === "injectable"
                  ? "Injectable"
                  : "Stack"}
            </span>
            <span className="rounded-full bg-[#f3f0ea] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]">
              COA included
            </span>
          </div>
          <h3 className="mt-4 font-serif text-[1.65rem] leading-[1.05] tracking-[-0.03em] text-[#0f1613]">
            {product.name}
          </h3>
          <p className="mt-1 text-[12px] text-[#8a9690]">{product.size}</p>
        </div>

        <p className="mt-4 text-[13px] leading-[1.75] text-[#55625c]">
          {product.tagline}
        </p>

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between border-t border-[rgb(15_22_19/6%)] pt-5">
            <div className="flex items-baseline gap-2">
              <p className="text-xl font-semibold text-[#0f1613]">
                {formatPrice(product.price)}
              </p>
              {product.compareAtPrice ? (
                <p className="text-[13px] text-[#b0b8b4] line-through">
                  {formatPrice(product.compareAtPrice)}
                </p>
              ) : null}
            </div>

            <Link
              href={`/products/${product.slug}`}
              className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#0f1613] transition-colors group-hover:text-[#1e6f58]"
            >
              View
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
