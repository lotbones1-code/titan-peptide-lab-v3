import Link from "next/link";
import { ArrowRight, FileCheck2, Mail, PackageCheck, ShieldCheck, ShoppingBag, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS, type Product } from "@/lib/products";
import { formatPrice } from "./product-card";

type CheckoutRouteKind = "checkout" | "cart";

const routeCopy: Record<
  CheckoutRouteKind,
  {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    note: string;
  }
> = {
  checkout: {
    eyebrow: "Static checkout path",
    title: "Checkout starts from the product page.",
    body:
      "Titan is running as a static site, so the safest checkout path is product-by-product: choose the item, confirm region and crypto rail, then prepare the order email with your transaction hash.",
    primary: "Choose a product",
    note: "No account, payment form, or third-party checkout script is loaded from this route.",
  },
  cart: {
    eyebrow: "Cart handoff",
    title: "Cart is product-by-product right now.",
    body:
      "There is no persistent cart cookie on the static build. Start with the product you want, use the quantity selector on the product detail page, and the order draft will include the item, rail, total, and shipping region.",
    primary: "Start from products",
    note: "The order details stay in your browser until you open the prepared email draft.",
  },
};

const steps = [
  {
    icon: ShoppingBag,
    title: "Pick one product",
    body: "Use the product page for quantity, discount code, destination region, and total.",
  },
  {
    icon: Wallet,
    title: "Send crypto",
    body: "BTC, ETH, USDC ERC-20, SOL, or USDC SPL can be selected before confirmation.",
  },
  {
    icon: Mail,
    title: "Prepare email proof",
    body: "The final button opens an email draft with order ID, wallet rail, and transaction hash.",
  },
];

export function CheckoutRoutePage({ kind }: { kind: CheckoutRouteKind }) {
  const copy = routeCopy[kind];
  const products = pickFeaturedProducts();
  const primaryProduct = products[0] ?? PRODUCTS[0];

  return (
    <main className="bg-[#faf9f7] text-[#0f1613]">
      <section className="relative overflow-hidden border-b border-[rgb(15_22_19/8%)] bg-[#0f1613] px-6 py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(78,175,137,0.28),transparent_32%),radial-gradient(circle_at_78%_12%,rgba(255,255,255,0.14),transparent_25%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#9ed7bd]">
              {copy.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-balance font-serif text-[clamp(3rem,7vw,6.4rem)] leading-[0.9] tracking-[-0.06em]">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{copy.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-white px-6 text-[#0f1613] hover:bg-[#eef6f2]"
              >
                <Link
                  href={primaryProduct ? `/products/${primaryProduct.slug}` : "/products"}
                  data-titan-conversion="static_checkout_primary_product"
                  data-checkout-route={kind}
                  data-product-slug={primaryProduct?.slug ?? "products"}
                >
                  {copy.primary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-white/18 bg-white/5 px-6 text-white hover:bg-white/10"
              >
                <Link
                  href="/products"
                  data-titan-conversion="static_checkout_browse_products"
                  data-checkout-route={kind}
                >
                  Browse catalog
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/14 bg-white/[0.08] p-5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.8)] backdrop-blur">
            <div className="flex items-center gap-3 rounded-[1.2rem] bg-white px-4 py-4 text-[#0f1613]">
              <span className="grid size-11 place-items-center rounded-full bg-[#f0f5f2] text-[#1e6f58]">
                <ShieldCheck className="size-5" />
              </span>
              <div>
                <p className="font-medium">Privacy-safe static handoff</p>
                <p className="mt-1 text-xs leading-5 text-[#65736c]">{copy.note}</p>
              </div>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              <p className="rounded-[1rem] border border-white/12 bg-white/[0.06] px-4 py-3">
                Product pages remain the source of truth for price, shipping region, and wallet rail.
              </p>
              <p className="rounded-[1rem] border border-white/12 bg-white/[0.06] px-4 py-3">
                Need help before paying? Email support@titanpeptidelab.com with the product name and country.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, body }, index) => (
              <article
                key={title}
                className="rounded-[1.5rem] border border-[rgb(15_22_19/8%)] bg-white p-6 shadow-[0_1px_2px_rgb(15_22_19/4%),_0_20px_50px_-38px_rgb(15_22_19/25%)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-full bg-[#f0f5f2] text-[#1e6f58]">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-[#9aa6a0]">0{index + 1}</span>
                </div>
                <h2 className="mt-8 font-serif text-[2rem] leading-[1.02] tracking-[-0.04em] text-[#0f1613]">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#5c6762]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[rgb(15_22_19/8%)] bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1e6f58]">
                Fastest path
              </p>
              <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2.3rem,5vw,4.2rem)] leading-[0.96] tracking-[-0.05em] text-[#0f1613]">
                Start with a product detail page.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#5c6762]">
              These links are static and measurement-ready without cookies or personal data: future analytics can count clicks by route and product slug only.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {products.map((product) => (
              <ProductCheckoutCard key={product.id} product={product} kind={kind} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1e6f58]">
              Buyer clarity
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[0.98] tracking-[-0.04em]">
              What this page does — and does not do.
            </h2>
          </div>
          <div className="grid gap-3">
            <InfoRow
              title="Does this collect payment details?"
              body="No. The static route points buyers back to the product checkout panel and never loads a card processor or hosted payment form."
            />
            <InfoRow
              title="Why no multi-item cart?"
              body="The current production build is static-exported for GitHub Pages. Product-by-product checkout avoids broken server routes and makes the manual crypto review explicit."
            />
            <InfoRow
              title="Where does order proof go?"
              body="The product page prepares an email to support@titanpeptidelab.com with order ID, product, total, wallet rail, and transaction hash."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ProductCheckoutCard({ product, kind }: { product: Product; kind: CheckoutRouteKind }) {
  return (
    <article className="group flex h-full flex-col rounded-[1.45rem] border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#1e6f58]/25 hover:bg-white hover:shadow-[0_20px_48px_-34px_rgb(15_22_19/25%)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#1e6f58]">
            {product.category.replace("-", " ")}
          </p>
          <h3 className="mt-3 font-serif text-[2rem] leading-[1.02] tracking-[-0.04em] text-[#0f1613]">
            {product.name}
          </h3>
        </div>
        <p className="rounded-full border border-[rgb(15_22_19/8%)] bg-white px-3 py-1 text-sm font-semibold text-[#0f1613]">
          {formatPrice(product.price)}
        </p>
      </div>
      <p className="mt-4 flex-1 text-sm leading-7 text-[#5c6762]">{product.tagline}</p>
      <div className="mt-6 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-xs text-[#6b7a73]">
          <FileCheck2 className="size-4 text-[#1e6f58]" /> COA-linked product page
        </span>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center rounded-full bg-[#1e6f58] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#175946] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e6f58]/45"
          data-titan-conversion="static_checkout_product_select"
          data-checkout-route={kind}
          data-product-slug={product.slug}
        >
          Select <ArrowRight className="ml-1.5 size-4" />
        </Link>
      </div>
    </article>
  );
}

function InfoRow({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.2rem] border border-[rgb(15_22_19/8%)] bg-white p-5 shadow-[0_1px_2px_rgb(15_22_19/4%)]">
      <h3 className="font-medium text-[#0f1613]">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-[#5c6762]">{body}</p>
    </div>
  );
}

function pickFeaturedProducts() {
  const preferred = PRODUCTS.filter((product) => product.featured || product.bestseller);
  const unique = [...preferred, ...PRODUCTS].filter(
    (product, index, all) => all.findIndex((candidate) => candidate.id === product.id) === index,
  );

  return unique.slice(0, 3);
}
