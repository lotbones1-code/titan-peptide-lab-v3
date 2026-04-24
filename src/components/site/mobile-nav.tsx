"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/products", label: "Products" },
  { href: "/lab-testing", label: "Lab Testing" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
  { href: "/shipping-faq", label: "Shipping & FAQ" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex size-9 items-center justify-center rounded-full border border-[rgba(10,10,10,0.08)] text-[#0f1613] transition-colors hover:bg-[#f5f7f6]"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
      </button>

      {open && (
        <div className="absolute left-3 right-3 top-[calc(100%+0.45rem)] z-40 overflow-hidden rounded-[1.35rem] border border-[rgb(15_22_19/8%)] bg-white shadow-[0_18px_45px_-16px_rgb(15_22_19/18%)]">
          <nav className="mx-auto max-w-7xl px-4 py-4">
            <ul className="space-y-0.5">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center rounded-xl px-3 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#3a4a43] transition-colors hover:bg-[#f5f7f6] hover:text-[#0f1613]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 border-t border-[rgb(15_22_19/6%)] pt-3">
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="flex h-10 w-full items-center justify-center rounded-full bg-[#0f1613] text-[11px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#1a2420]"
              >
                Shop nasal sprays
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
