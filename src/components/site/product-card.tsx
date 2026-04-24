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
  className,
}: {
  product: ProductCardProduct;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8e6e1] bg-white transition-shadow duration-200 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]",
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

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-[#e8e6e1] pt-5 mt-5">
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

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#0f1110] px-4 text-[11px] font-semibold text-white transition-colors hover:bg-[#1a5c48]"
          >
            View
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function formatPrice(price: number) {
  return Number.isInteger(price) ? `$${price}` : `$${price.toFixed(2)}`;
}
