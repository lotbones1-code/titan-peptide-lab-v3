import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

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
        "group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-[rgb(15_22_19/8%)] bg-white text-[#0f1613] shadow-[0_1px_2px_rgb(15_22_19/4%),_0_12px_32px_-20px_rgb(15_22_19/15%)] transition duration-300 hover:-translate-y-0.5 hover:border-[#1e6f58]/30 hover:shadow-[0_4px_12px_-2px_rgb(15_22_19/8%),_0_24px_48px_-20px_rgb(15_22_19/20%)]",
        variant === "stack" && "md:grid md:grid-cols-[280px_1fr]"
      )}
    >
      <Link
        href={`/products/${product.slug}`}
        className="relative flex min-h-72 items-center justify-center overflow-hidden border-b border-[rgb(15_22_19/6%)] bg-[#fafbfa] p-6 outline-none focus-visible:ring-2 focus-visible:ring-[#1e6f58] md:border-b-0 md:border-r"
      >
        <div
          aria-hidden
          className="absolute inset-x-8 top-6 h-24 rounded-full bg-[#e8f1ec] blur-3xl opacity-60"
        />
        <Image
          src={product.image}
          alt={product.name}
          width={260}
          height={320}
          className="relative h-60 w-auto object-contain transition duration-500 group-hover:-translate-y-1"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6b7a73]">
              {product.size}
            </p>
            <h3 className="mt-3 font-serif text-[2rem] leading-[1.02] tracking-[-0.03em] text-[#0f1613]">
              {product.name}
            </h3>
          </div>
          <span className="rounded-full border border-[rgb(15_22_19/10%)] bg-[#f0f5f2] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#1e6f58]">
            COA ready
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-[#5c6762]">{product.tagline}</p>

        <ul className="mt-5 grid gap-2.5 text-sm leading-6 text-[#2a3530]">
          {product.benefits.slice(0, 3).map((benefit) => (
            <li key={benefit} className="flex gap-3">
              <span className="mt-2 size-1.5 rounded-full bg-[#1e6f58]" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <div className="flex items-baseline gap-3">
            <p className="text-3xl font-semibold text-[#0f1613]">
              {formatPrice(product.price)}
            </p>
            {product.compareAtPrice ? (
              <p className="text-sm text-[#9aa6a0] line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            ) : null}
          </div>

          <Button
            asChild
            className="mt-5 h-11 w-full rounded-full bg-[#1e6f58] text-white hover:bg-[#175946]"
          >
            <Link href={`/products/${product.slug}`}>View Product</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

export function formatPrice(price: number) {
  return Number.isInteger(price) ? `$${price}` : `$${price.toFixed(2)}`;
}
