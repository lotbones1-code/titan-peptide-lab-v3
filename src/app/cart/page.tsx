"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/lib/cart-context";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

// /cart was a 404 before. The cart UI is a drawer that lives behind the nav
// icon, so a dedicated route felt redundant — but real buyers do type /cart in
// the URL bar. Previous version opened the drawer AND rendered a redundant
// "your cart is open" page, so the user got two cart UIs at once.
//
// New behavior:
//   - if the cart has items, redirect straight to /checkout (one less click,
//     one fewer confusing UI)
//   - otherwise show a clean empty-cart message + link to the catalog
//   - never 404s, never double-renders the drawer
export default function CartPage() {
  const { items, hydrated, itemCount } = useCart();

  useEffect(() => {
    if (hydrated && itemCount > 0) {
      let next = "/checkout/";
      try {
        const ref = new URLSearchParams(window.location.search).get("ref") || sessionStorage.getItem("tpl_ref");
        if (ref) next = `/checkout/?ref=${encodeURIComponent(ref)}`;
      } catch {
        next = "/checkout/";
      }
      window.location.replace(next);
    }
  }, [hydrated, itemCount]);

  return (
    <>
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-5 px-6 py-24 text-center">
          {!hydrated ? (
            <p className="text-[14px] text-[#8a9690]">Loading your cart…</p>
          ) : items.length === 0 ? (
            <>
              <h1 className="font-serif text-[2rem] leading-[1.05] tracking-[-0.02em] text-[#0f1613]">
                Your cart is empty.
              </h1>
              <p className="max-w-md text-[14px] leading-[1.7] text-[#5c6762]">
                Browse the catalog — nasal sprays from $65, vials and stacks
                listed alongside. Every bottle ships with its own lot-matched
                release sheet.
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/products/"
                  className="inline-flex items-center rounded-md bg-[#0f1613] px-5 py-2.5 text-[13px] font-medium text-white hover:bg-[#1a2420]"
                >
                  Browse all products
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center text-[13px] text-[#5c6762] underline decoration-[rgb(15_22_19/15%)] underline-offset-[4px] hover:text-[#0f1613]"
                >
                  Back to home
                </Link>
              </div>
            </>
          ) : (
            <p className="text-[14px] text-[#8a9690]">Redirecting to checkout…</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
