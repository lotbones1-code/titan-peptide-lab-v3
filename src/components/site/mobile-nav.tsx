"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/products", label: "Catalog" },
  { href: "/lab-testing", label: "Lab Testing" },
  { href: "/coa-archive", label: "COA Archive" },
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
        className="flex h-9 w-9 items-center justify-center text-[#1a1a1a]"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-40 border-b border-[#e5e5e5] bg-[#faf9f7] shadow-lg">
          <nav className="mx-auto max-w-6xl px-6 py-6">
            <ul className="space-y-1">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center rounded-lg px-3 py-3 text-[15px] text-[#333] transition-colors hover:bg-[#f0f0f0]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-[#e5e5e5] pt-4">
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="flex h-11 w-full items-center justify-center rounded-lg bg-[#1e6f58] text-[14px] font-medium text-white hover:bg-[#175946]"
              >
                Shop Nasal Sprays
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
