import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe3da] bg-[rgba(251,248,242,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-baseline gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signature)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Titan Peptide Lab — home"
        >
          <span className="font-serif text-xl leading-none text-[#13211c]">
            Titan
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#73817a] transition-colors group-hover:text-[var(--signature)]">
            / Peptide Lab
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          <NavLink href="#nasal-sprays">Catalog</NavLink>
          <NavLink href="#quality">Process</NavLink>
          <NavLink href="#all-products">Injectables</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </nav>

        <Link
          href="#nasal-sprays"
          className="group inline-flex items-center gap-2.5 rounded-full border border-[#d1dad1] bg-white/70 px-4 py-1.5 text-xs text-[#24332c] transition-colors hover:border-[var(--signature)] hover:text-[#13211c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signature)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-[var(--signature)] transition-transform group-hover:scale-110"
          />
          Browse catalog
        </Link>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-[#66746d] transition-colors hover:text-[#13211c] focus-visible:outline-none focus-visible:text-[#13211c]"
    >
      {children}
    </Link>
  );
}
