import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { CartButton } from "./cart-drawer";

const LINKS = [
  { href: "/products", label: "Products" },
  { href: "/research-assistant", label: "Find a Peptide" },
  { href: "/lab-testing", label: "Lab Testing" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(10,10,10,0.07)] bg-[rgba(255,255,255,0.94)] backdrop-blur-xl">
      <div className="mx-auto flex h-[3.85rem] max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link
          href="/"
          aria-label="Titan Peptide home"
          className="group outline-none"
        >
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-md bg-[#0f1110] shadow-[0_8px_24px_rgba(15,17,16,0.12)]">
              <span className="font-serif text-[0.8rem] leading-none text-white">T</span>
            </div>
            <div className="leading-none">
              <span className="block text-[0.94rem] font-semibold tracking-[-0.02em] text-[#0a0a0a] transition-opacity group-hover:opacity-70">
                Titan Peptide
              </span>
              <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.22em] text-[#9ea29e] sm:text-[9px]">
                Research-grade nasal sprays
              </span>
            </div>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#6d716d] outline-none transition-colors hover:text-[#0a0a0a]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <CartButton />
          <Button
            asChild
            className="hidden h-9 rounded-full bg-[#0a0a0a] px-4 text-[10px] font-semibold tracking-[0.1em] uppercase text-white hover:bg-[#1a5c48] sm:inline-flex"
          >
            <Link href="/products">Shop catalog</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
