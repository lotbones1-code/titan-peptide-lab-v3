"use client";

import Link from "next/link";
import { AnnouncementBar } from "./announcement-bar";
import { MobileNav } from "./mobile-nav";

const LINKS = [
  { href: "/products", label: "Catalog" },
  { href: "/lab-testing", label: "Lab Testing" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-50 border-b border-[#1e3a2e] bg-[#0f1613]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            aria-label="Titan Peptide Lab home"
            className="font-serif text-xl tracking-tight text-white hover:opacity-70 transition-opacity"
          >
            Titan Peptide Lab
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] text-[#6b7f75] transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="inline-flex h-9 items-center rounded-full bg-[#1e6f58] px-5 text-[13px] font-medium text-white transition-colors hover:bg-[#258d6e]"
            >
              Shop
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
