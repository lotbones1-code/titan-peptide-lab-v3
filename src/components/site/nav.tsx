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
    <header className="sticky top-0 z-50 border-b border-[#d9dfd5] bg-[rgba(251,248,242,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Titan Peptide Lab home"
          className="outline-none transition-opacity hover:opacity-80 focus-visible:opacity-80"
        >
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[1.45rem] tracking-[-0.03em] text-[#13211c]">
              Titan Peptide Lab
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#6d7b74]">
              Nasal research catalog
            </span>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#53625c] outline-none transition-colors hover:text-[#13211c] focus-visible:text-[#13211c]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Button
            asChild
            variant="outline"
            className="hidden h-10 rounded-full border-[#cfd8cf] bg-white/75 px-4 text-[#24332c] hover:border-[#2d7b62]/40 hover:bg-white sm:inline-flex"
          >
            <Link href="/shipping-faq">Track Order</Link>
          </Button>
          <Button className="h-10 rounded-full bg-[#1e6f58] px-4 text-[#f8fbf8] hover:bg-[#175946]">
            Cart (0)
          </Button>
        </div>
      </div>
    </header>
  );
}
