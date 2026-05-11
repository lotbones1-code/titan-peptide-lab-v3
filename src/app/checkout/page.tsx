import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Nav } from "@/components/site/nav";
import { CheckoutRoutePage } from "@/components/site/checkout-route-page";
import { BRAND } from "@/lib/products";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `Checkout — ${BRAND.name}`,
  description:
    "Static checkout handoff for Titan Peptide Lab: choose a product, confirm crypto rail, and prepare the order email from the product page.",
  alternates: { canonical: "/checkout/" },
  robots: { index: false, follow: true },
};

export default function CheckoutPage() {
  return (
    <>
      <Nav />
      <CheckoutRoutePage kind="checkout" />
      <Footer />
    </>
  );
}
