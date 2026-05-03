"use client";

import Link from "next/link";
import { useEffect } from "react";

// Static-export friendly redirect: /quality has been folded into /lab-testing.
// Next.js' metadata API doesn't expose `http-equiv`, so we trigger the redirect
// client-side and render a fallback link for any browser that doesn't run JS
// (or for crawlers — the canonical link tag handles SEO).
export default function QualityRedirect() {
  useEffect(() => {
    window.location.replace("/lab-testing/");
  }, []);

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-[1.25rem] font-semibold tracking-tight text-[#0f1613]">
        This page moved to Lab Testing.
      </h1>
      <p className="text-[14px] text-[#5c6762]">
        Quality methodology, COA process, and batch tracking are documented on
        the lab-testing page.
      </p>
      <Link
        href="/lab-testing/"
        className="inline-flex items-center rounded-md bg-[#0f1613] px-4 py-2 text-[13px] font-medium text-white hover:bg-[#1a2420]"
      >
        Continue to Lab Testing →
      </Link>
    </main>
  );
}
