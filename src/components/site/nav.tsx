import Link from "next/link";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#products", label: "Shop" },
  { href: "/lab-testing", label: "COAs" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B10]/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Titan Peptide Lab home"
          className="text-sm font-semibold uppercase text-[#E8ECF0] outline-none transition-colors hover:text-white focus-visible:text-white"
        >
          TITAN PEPTIDE LAB
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#8B95A3] outline-none transition-colors hover:text-[#E8ECF0] focus-visible:text-[#E8ECF0]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="hidden h-9 rounded-lg border-white/12 bg-white/[0.03] px-3 text-[#E8ECF0] hover:border-[#0F9F7A]/70 hover:bg-[#0F9F7A]/10 sm:inline-flex"
          >
            <Link href="/shipping-faq">Track Order</Link>
          </Button>
          <Button className="h-9 rounded-lg bg-[#E8ECF0] px-3 text-[#070B10] hover:bg-white">
            Cart (0)
          </Button>
        </div>
      </div>
    </header>
  );
}
