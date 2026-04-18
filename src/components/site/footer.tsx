import Link from "next/link";
import { BRAND, NASAL_SPRAYS, PRODUCTS, WALLETS } from "@/lib/products";

export function Footer() {
  const stack = PRODUCTS.find((p) => p.id === "selank-semax-stack");

  const productLinks = [
    ...NASAL_SPRAYS.map((p) => ({
      label: p.name.replace(" Nasal Spray", ""),
      href: `/products/${p.slug}`,
    })),
    ...(stack
      ? [{ label: "Selank + Semax Stack", href: `/products/${stack.slug}` }]
      : []),
  ];

  return (
    <footer className="bg-[#0f1613] text-[#6b7f75]">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="grid gap-14 pb-14 border-b border-[#1e3a2e] lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link
              href="/"
              className="font-serif text-2xl tracking-tight text-white hover:opacity-70 transition-opacity"
            >
              {BRAND.name}
            </Link>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed">
              Nasal-first peptide research catalog. HPLC-verified purity,
              lot-matched certificates, cold-chain dispatch.
            </p>

            <form className="mt-8 max-w-sm">
              <label htmlFor="footer-email" className="text-[13px] text-[#4a5e55]">
                Get research updates and 10% off your first order
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="email@lab.org"
                  className="h-10 flex-1 rounded-lg border border-[#1e3a2e] bg-transparent px-3 text-[14px] text-white placeholder:text-[#3a4e45] outline-none focus:border-[#4a9b7f] transition-colors"
                />
                <button
                  type="submit"
                  className="h-10 rounded-lg bg-[#1e6f58] px-5 text-[13px] font-medium text-white hover:bg-[#258d6e] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <FooterColumn title="Products" links={productLinks} />
            <FooterColumn
              title="Research"
              links={[
                { label: "BPC-157", href: "/research/bpc-157-nasal-spray" },
                { label: "Selank", href: "/research/selank-anxiolytic-nootropic" },
                { label: "Semax", href: "/research/semax-cognition-neuroplasticity" },
                { label: "PT-141", href: "/research/pt-141-research" },
              ]}
            />
            <FooterColumn
              title="Company"
              links={[
                { label: "Lab Testing", href: "/lab-testing" },
                { label: "Shipping", href: "/shipping-faq" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/#faq" },
              ]}
            />
          </div>
        </div>

        <div className="py-8 border-b border-[#1e3a2e]">
          <p className="text-[13px] text-[#3a4e45] mb-4">Payment — crypto only</p>
          <dl className="grid gap-3 text-[12px] md:grid-cols-2">
            <WalletRow label="BTC" value={WALLETS.btc} />
            <WalletRow label="ETH / USDC ERC-20" value={WALLETS.eth} />
            <WalletRow label="SOL / USDC SPL" value={WALLETS.usdcSol} />
          </dl>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-[13px] lg:flex-row lg:justify-between">
          <p className="text-[#4a5e55]">&copy; 2026 {BRAND.name}</p>
          <p className="max-w-2xl text-[#3a4e45]">
            Products are sold for laboratory research purposes only. Not for
            human consumption. Statements have not been evaluated by the FDA.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4a5e55]">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[14px] text-[#6b7f75] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WalletRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <dt className="shrink-0 text-[#4a5e55] w-32">{label}</dt>
      <dd className="break-all font-mono text-[#6b7f75]">{value}</dd>
    </div>
  );
}
