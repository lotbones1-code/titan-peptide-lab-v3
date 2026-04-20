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
        className="flex size-9 items-center justify-center rounded-lg text-[#0f1613] transition-colors hover:bg-[#f5f7f6]"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-40 border-b border-[rgb(15_22_19/8%)] bg-white shadow-[0_8px_24px_-8px_rgb(15_22_19/12%)]">
          <nav className="mx-auto max-w-7xl px-5 py-4">
            <ul className="space-y-0.5">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center rounded-lg px-3 py-2.5 text-[14px] font-medium text-[#3a4a43] transition-colors hover:bg-[#f5f7f6] hover:text-[#0f1613]"
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
                className="flex h-10 w-full items-center justify-center rounded-lg bg-[#0f1613] text-[13px] font-medium text-white hover:bg-[#1a2420]"
              >
                Shop Products
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
