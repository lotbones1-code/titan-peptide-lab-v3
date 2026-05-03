"use client";

import Link from "next/link";
import { useEffect } from "react";

// Static-export friendly redirect: /shipping → /shipping-faq.
export default function ShippingRedirect() {
  useEffect(() => {
    window.location.replace("/shipping-faq/");
  }, []);

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-[1.25rem] font-semibold tracking-tight text-[#0f1613]">
        This page moved to Shipping FAQ.
      </h1>
      <p className="text-[14px] text-[#5c6762]">
        Cold-chain handling, ETA by region, customs notes, and the
        free-over-$150 threshold are on the shipping FAQ page.
      </p>
      <Link
        href="/shipping-faq/"
        className="inline-flex items-center rounded-md bg-[#0f1613] px-4 py-2 text-[13px] font-medium text-white hover:bg-[#1a2420]"
      >
        Continue to Shipping FAQ →
      </Link>
    </main>
  );
}
