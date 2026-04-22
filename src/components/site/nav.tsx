import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

const LINKS = [
  { href: "/products", label: "Products" },
  { href: "/lab-testing", label: "Lab Testing" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(10,10,10,0.07)] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          aria-label="Titan Peptide home"
          className="outline-none group"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex size-7 items-center justify-center bg-[#0a0a0a]">
              <span className="font-serif text-[0.8rem] leading-none text-white">T</span>
            </div>
            <div className="leading-none">
              <span className="block text-[0.9rem] font-semibold tracking-[-0.02em] text-[#0a0a0a] transition-opacity group-hover:opacity-60">
                Titan Peptide
              </span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#b0b0b0]">
                The Titan Peptide Company
              </span>
            </div>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-[#737373] outline-none transition-colors hover:text-[#0a0a0a]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/shipping-faq"
            className="hidden text-[12px] font-medium text-[#737373] transition-colors hover:text-[#0a0a0a] sm:block"
          >
            Track order
          </Link>
          <Button
            asChild
            className="hidden h-9 rounded-none bg-[#0a0a0a] px-5 text-[12px] font-semibold tracking-[0.08em] uppercase text-white hover:bg-[#1a5c48] sm:inline-flex"
          >
            <Link href="/products">Shop catalog</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
