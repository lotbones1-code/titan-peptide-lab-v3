import Link from "next/link";
import { Beaker } from "lucide-react";
import { BRAND } from "@/lib/products";

export function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/20">
                <Beaker className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-semibold tracking-tight">
                {BRAND.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              Research-grade peptides, HPLC-verified purity, batch-matched COA,
              discreet shipping. Nasal sprays and injectables.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Shop
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="#nasal-sprays"
                  className="text-zinc-400 hover:text-white"
                >
                  Nasal Sprays
                </Link>
              </li>
              <li>
                <Link
                  href="#all-products"
                  className="text-zinc-400 hover:text-white"
                >
                  All Peptides
                </Link>
              </li>
              <li>
                <Link
                  href="#quality"
                  className="text-zinc-400 hover:text-white"
                >
                  Quality Standards
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Legal
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-zinc-400">For research use only</li>
              <li className="text-zinc-400">Not for human consumption</li>
              <li className="text-zinc-400">Ship worldwide</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {BRAND.name}. All peptides sold for
            in-vitro research purposes only.
          </p>
          <p className="text-xs text-zinc-600">
            HPLC purity verified · COA in every order
          </p>
        </div>
      </div>
    </footer>
  );
}
