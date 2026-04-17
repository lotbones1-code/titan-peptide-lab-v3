import Link from "next/link";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[oklch(0.09_0.005_240)] pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Colophon-style masthead — big, editorial */}
        <div className="grid gap-x-12 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[0.92] tracking-[-0.02em] text-zinc-50 text-pretty">
              Titan Peptide
              <br />
              <em className="italic text-zinc-500">Laboratory</em>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-[1.7] text-zinc-400">
              Published from the laboratory. All compounds shipped for{" "}
              <span className="text-zinc-200">in-vitro research use only</span>
              , with the batch-matched certificate of analysis enclosed.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-8">
              <FooterCol
                label="Catalog"
                links={[
                  { href: "#nasal-sprays", label: "Nasal sprays" },
                  { href: "#all-products", label: "Injectables" },
                  { href: "#quality", label: "Process" },
                  { href: "#faq", label: "FAQ" },
                ]}
              />
              <FooterCol
                label="The fine print"
                links={[
                  { href: "#", label: "For research use" },
                  { href: "#", label: "Shipping" },
                  { href: "#", label: "Returns" },
                  { href: "#", label: "Terms" },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Colophon rule */}
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-zinc-900 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600 md:flex-row md:items-center">
          <span>
            © {YEAR} Titan Peptide Laboratory · Colophon set in Instrument
            Serif &amp; Geist
          </span>
          <span>
            <span className="text-[var(--signature)]">●</span> Shipping from
            Reno, NV · 48 h turnaround
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  label,
  links,
}: {
  label: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
        {label}
      </div>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-zinc-300 transition-colors hover:text-zinc-50 focus-visible:outline-none focus-visible:text-zinc-50"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
