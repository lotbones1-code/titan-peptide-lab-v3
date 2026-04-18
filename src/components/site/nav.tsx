import Link from "next/link";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "/products", label: "Catalog" },
  { href: "/lab-testing", label: "COAs" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(15_22_19/8%)] bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Titan Peptide Lab home"
          className="outline-none transition-opacity hover:opacity-80 focus-visible:opacity-80"
        >
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[1.45rem] tracking-[-0.03em] text-[#0f1613]">
              Titan Peptide Lab
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#6b7a73]">
              Nasal research catalog
            </span>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#5c6762] outline-none transition-colors hover:text-[#0f1613] focus-visible:text-[#0f1613]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Button
            asChild
            variant="outline"
            className="hidden h-10 rounded-full border-[rgb(15_22_19/12%)] bg-white px-4 text-[#0f1613] hover:border-[#1e6f58]/50 hover:bg-[#f7faf8] sm:inline-flex"
          >
            <Link href="/shipping-faq">Track Order</Link>
          </Button>
          <Button className="h-10 rounded-full bg-[#1e6f58] px-4 text-white hover:bg-[#175946]">
            Cart (0)
          </Button>
        </div>
      </div>
    </header>
  );
}
