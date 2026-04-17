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
        "group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-[#d7dfd6] bg-[linear-gradient(180deg,#fffdf9_0%,#f5f1ea_100%)] text-[#13211c] shadow-[0_24px_60px_-40px_rgba(19,33,28,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_32px_70px_-42px_rgba(19,33,28,0.42)]",
        variant === "stack" && "md:grid md:grid-cols-[280px_1fr]"
      )}
    >
      <Link
        href={`/products/${product.slug}`}
        className="relative flex min-h-72 items-center justify-center overflow-hidden border-b border-[#dfe6dc] bg-[linear-gradient(180deg,#f6f1ea_0%,#eef3ed_100%)] p-6 outline-none focus-visible:ring-2 focus-visible:ring-[#2d7b62] md:border-b-0 md:border-r"
      >
        <div
          aria-hidden
          className="absolute inset-x-8 top-6 h-24 rounded-full bg-[#dce9de] blur-3xl"
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
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d7b74]">
              {product.size}
            </p>
            <h3 className="mt-3 font-serif text-[2rem] leading-[1.02] tracking-[-0.03em] text-[#13211c]">
              {product.name}
            </h3>
          </div>
          <span className="rounded-full border border-[#d6dfd6] bg-white/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#5e6d66]">
            COA ready
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-[#5a6861]">{product.tagline}</p>

        <ul className="mt-5 grid gap-2.5 text-sm leading-6 text-[#32413a]">
          {product.benefits.slice(0, 3).map((benefit) => (
            <li key={benefit} className="flex gap-3">
              <span className="mt-2 size-1.5 rounded-full bg-[#2d7b62]" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <div className="flex items-baseline gap-3">
            <p className="text-3xl font-semibold text-[#13211c]">
              {formatPrice(product.price)}
            </p>
            {product.compareAtPrice ? (
              <p className="text-sm text-[#85918b] line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            ) : null}
          </div>

          <Button
            asChild
            className="mt-5 h-11 w-full rounded-full bg-[#1e6f58] text-[#f8fbf8] hover:bg-[#175946]"
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
