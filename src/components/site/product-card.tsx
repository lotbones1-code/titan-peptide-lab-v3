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
        "group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0A0F0E] text-[#E8ECF0] transition duration-300 hover:-translate-y-0.5 hover:border-[#0F9F7A]",
        variant === "stack" && "md:grid md:grid-cols-[280px_1fr]"
      )}
    >
      <Link
        href={`/products/${product.slug}`}
        className="relative flex min-h-72 items-center justify-center overflow-hidden bg-[#101615] p-6 outline-none focus-visible:ring-2 focus-visible:ring-[#0F9F7A]"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(15,159,122,0.16),transparent_42%)] opacity-70"
        />
        <Image
          src={product.image}
          alt={product.name}
          width={260}
          height={320}
          className="relative h-60 w-auto object-contain transition duration-500 group-hover:-translate-y-1"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs uppercase text-[#7C8986]">
          {product.size}
        </p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#F3F7F6]">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#9FABAA]">
          {product.tagline}
        </p>

        <ul className="mt-5 grid gap-2 text-sm leading-5 text-[#C4D0CC] opacity-0 transition duration-300 group-hover:opacity-100">
          {product.benefits.slice(0, 3).map((benefit) => (
            <li key={benefit} className="flex gap-2">
              <span className="mt-2 size-1 rounded-[2px] bg-[#0F9F7A]" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex items-baseline gap-3">
            <p className="text-2xl font-semibold text-[#F3F7F6]">
              {formatPrice(product.price)}
            </p>
            {product.compareAtPrice ? (
              <p className="text-sm text-[#66736F] line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            ) : null}
          </div>

          <Button
            asChild
            className="mt-5 h-10 w-full rounded-lg bg-[#0F9F7A] text-[#06110E] hover:bg-[#28B890]"
          >
            <Link href={`/products/${product.slug}`}>Add to cart</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

export function formatPrice(price: number) {
  return Number.isInteger(price) ? `$${price}` : `$${price.toFixed(2)}`;
}
