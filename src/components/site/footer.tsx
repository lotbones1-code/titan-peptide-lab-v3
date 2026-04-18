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
    <footer className="border-t border-[#e5e5e5] bg-white text-[#666]">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-18">
        <div className="grid gap-14 border-b border-[#e5e5e5] pb-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link
              href="/"
              className="font-serif text-2xl tracking-tight text-[#1a1a1a] transition-opacity hover:opacity-70"
            >
              {BRAND.name}
            </Link>
            <p className="mt-4 max-w-sm text-[14px] leading-7 text-[#5c6762]">
              Nasal-first peptide research catalog. Cleaner proof, lighter design, and a checkout path that feels more premium than underground.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/lab-testing"
                className="inline-flex h-11 items-center rounded-full border border-[#e5e5e5] bg-[#faf9f7] px-5 text-[13px] font-medium text-[#1a1a1a] transition-colors hover:border-[#1e6f58] hover:text-[#1e6f58]"
              >
                View lab proof
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-full bg-[#1e6f58] px-5 text-[13px] font-medium text-white transition-colors hover:bg-[#175946]"
              >
                Contact Titan
              </Link>
            </div>
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

        <div className="border-b border-[#e5e5e5] py-8">
          <p className="mb-4 text-[13px] text-[#999]">Payment — crypto only</p>
          <dl className="grid gap-3 text-[12px] md:grid-cols-2">
            <WalletRow label="BTC" value={WALLETS.btc} />
            <WalletRow label="ETH / USDC ERC-20" value={WALLETS.eth} />
            <WalletRow label="SOL / USDC SPL" value={WALLETS.usdcSol} />
          </dl>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-[13px] lg:flex-row lg:justify-between">
          <p className="text-[#999]">&copy; 2026 {BRAND.name}</p>
          <p className="max-w-2xl text-[#999]">
            Products are sold for laboratory research purposes only. Not for human consumption. Statements have not been evaluated by the FDA.
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
      <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#999]">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[14px] text-[#666] transition-colors hover:text-[#1a1a1a]"
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
      <dt className="w-32 shrink-0 text-[#999]">{label}</dt>
      <dd className="break-all font-mono text-[#666]">{value}</dd>
    </div>
  );
}
