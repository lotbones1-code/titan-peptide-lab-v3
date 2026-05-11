import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Nav } from "@/components/site/nav";
import { CheckoutRoutePage } from "@/components/site/checkout-route-page";
import { BRAND } from "@/lib/products";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `Cart — ${BRAND.name}`,
  description:
    "Static cart handoff for Titan Peptide Lab: no persistent cart cookie, no card checkout script, and product-by-product crypto order preparation.",
  alternates: { canonical: "/cart/" },
  robots: { index: false, follow: true },
};

export default function CartPage() {
  return (
    <>
      <Nav />
      <CheckoutRoutePage kind="cart" />
      <Footer />
    </>
  );
}
