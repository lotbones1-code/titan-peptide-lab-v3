import Link from "next/link";
import { BRAND, NASAL_SPRAYS, PRODUCTS, WALLETS } from "@/lib/products";

const RESEARCH_LINKS = [
  ["BPC-157 nasal spray", "/research/bpc-157-nasal-spray"],
  ["Selank anxiolytic profile", "/research/selank-anxiolytic-nootropic"],
  ["Semax cognition", "/research/semax-cognition-neuroplasticity"],
  ["PT-141 research", "/research/pt-141-research"],
];

const TRUST_LINKS = [
  ["COA library", "/lab-testing"],
  ["Shipping FAQ", "/shipping-faq"],
  ["Contact", "/contact"],
];

const LEGAL_LINKS = [
  ["Research disclaimer", "/#faq"],
  ["Terms", "/#faq"],
  ["Privacy", "/#faq"],
];

export function Footer() {
  const stack = PRODUCTS.find((product) => product.id === "selank-semax-stack");
  const productLinks = [
    ...NASAL_SPRAYS.map((product) => [
      product.name.replace(" Nasal Spray", ""),
      `/products/${product.slug}`,
    ]),
    ...(stack ? [["Selank + Semax Stack", `/products/${stack.slug}`]] : []),
  ];

  return (
    <footer className="bg-[#060908] py-16 text-[#E8ECF0]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <Link
              href="/"
              className="font-mono text-xs uppercase text-[#F3F7F6] outline-none hover:text-white focus-visible:text-white"
            >
              {BRAND.name}
            </Link>
            <p className="mt-5 max-w-sm text-base leading-7 text-[#9FABAA]">
              Research-grade nasal spray peptides with HPLC-verified purity,
              batch-matched COAs, and crypto-only fulfillment.
            </p>

            <form className="mt-8 max-w-md">
              <label
                htmlFor="footer-email"
                className="font-mono text-xs uppercase text-[#7C8986]"
              >
                Research notes
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="email@lab.org"
                  className="h-11 min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm text-white outline-none placeholder:text-[#66736F] focus:border-[#0F9F7A]"
                />
                <button
                  type="submit"
                  className="h-11 rounded-lg bg-[#E8ECF0] px-4 text-sm font-medium text-[#06110E] hover:bg-white"
                >
                  Join
                </button>
              </div>
            </form>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn title="Products" links={productLinks} />
            <FooterColumn title="Research" links={RESEARCH_LINKS} />
            <FooterColumn title="Trust" links={TRUST_LINKS} />
            <FooterColumn title="Legal" links={LEGAL_LINKS} />
          </div>
        </div>

        <div className="grid gap-8 border-b border-white/10 py-8 lg:grid-cols-[0.35fr_0.65fr]">
          <p className="font-mono text-xs uppercase text-[#7C8986]">
            Wallet addresses
          </p>
          <dl className="grid gap-3 text-[11px] leading-5 text-[#8E9C98] md:grid-cols-2">
            <WalletRow label="BTC" value={WALLETS.btc} />
            <WalletRow label="ETH" value={WALLETS.eth} />
            <WalletRow label="USDC ERC-20" value={WALLETS.usdcErc} />
            <WalletRow label="SOL / USDC SPL" value={WALLETS.usdcSol} />
          </dl>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm leading-6 text-[#7C8986] lg:flex-row lg:items-start lg:justify-between">
          <p>© 2026 {BRAND.name}. {BRAND.domain}</p>
          <p className="max-w-3xl">
            Products are sold for laboratory research purposes only. Not for
            human consumption. Statements on this site are not medical advice
            and have not been evaluated by the FDA.
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
  links: string[][];
}) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase text-[#F3F7F6]">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map(([label, href]) => (
          <li key={`${title}-${label}`}>
            <Link
              href={href}
              className="text-sm text-[#9FABAA] outline-none transition-colors hover:text-[#E8ECF0] focus-visible:text-[#E8ECF0]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WalletRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1">
      <dt className="font-mono uppercase text-[#66736F]">{label}</dt>
      <dd className="break-all font-mono text-[#AAB7B3]">{value}</dd>
    </div>
  );
}
