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
    <header className="sticky top-0 z-50 border-b border-[rgb(15_22_19/7%)] bg-[rgba(248,246,242,0.78)] backdrop-blur-2xl">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Titan Peptide home"
          className="outline-none transition-opacity hover:opacity-80 focus-visible:opacity-80"
        >
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#0f1613] shadow-[0_10px_30px_-16px_rgba(15,22,19,0.65)]">
              <span className="font-serif text-[1.2rem] font-normal leading-none text-white">
                T
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[0.98rem] font-semibold tracking-[-0.03em] text-[#0f1613]">
                Titan Peptide
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#7b8781]">
                The Titan Peptide Company
              </span>
            </div>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-[rgb(15_22_19/8%)] bg-white/80 px-2 py-1.5 md:flex"
        >
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-[13px] font-medium text-[#4a5650] outline-none transition-colors hover:bg-[#f3efe8] hover:text-[#0f1613] focus-visible:bg-[#f3efe8] focus-visible:text-[#0f1613]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="hidden h-10 rounded-full border-[rgb(15_22_19/10%)] bg-white/80 px-4 text-[13px] font-medium text-[#0f1613] hover:border-[rgb(15_22_19/18%)] hover:bg-white sm:inline-flex"
          >
            <Link href="/shipping-faq">Track Order</Link>
          </Button>
          <Button
            asChild
            className="hidden h-10 rounded-full bg-[#0f1613] px-5 text-[13px] font-medium text-white shadow-[0_12px_30px_-16px_rgba(15,22,19,0.7)] hover:bg-[#18201d] sm:inline-flex"
          >
            <Link href="/products">Shop catalog</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
