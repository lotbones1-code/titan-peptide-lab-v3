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
    <footer className="border-t border-[#dde4da] bg-[linear-gradient(180deg,#f3efe8_0%,#ece6dc_100%)] py-16 text-[#13211c]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-[#d9e0d7] pb-12 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <Link
              href="/"
              className="font-serif text-[1.7rem] leading-none tracking-[-0.03em] text-[#13211c] outline-none hover:opacity-80 focus-visible:opacity-80"
            >
              {BRAND.name}
            </Link>
            <p className="mt-5 max-w-sm text-base leading-8 text-[#5c6a63]">
              Premium nasal spray peptides with lot-matched COAs, cleaner
              checkout language, and a calmer trust-building experience.
            </p>

            <form className="mt-8 max-w-md">
              <label
                htmlFor="footer-email"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6c7a73]"
              >
                Research notes
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="email@lab.org"
                  className="h-11 min-w-0 flex-1 rounded-full border border-[#cdd7ce] bg-white px-4 text-sm text-[#13211c] outline-none placeholder:text-[#7a8680] focus:border-[#2d7b62]"
                />
                <button
                  type="submit"
                  className="h-11 rounded-full bg-[#1e6f58] px-5 text-sm font-medium text-[#f8fbf8] hover:bg-[#175946]"
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

        <div className="grid gap-8 border-b border-[#d9e0d7] py-8 lg:grid-cols-[0.35fr_0.65fr]">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6c7a73]">
            Wallet addresses
          </p>
          <dl className="grid gap-3 text-[11px] leading-5 text-[#5d6a64] md:grid-cols-2">
            <WalletRow label="BTC" value={WALLETS.btc} />
            <WalletRow label="ETH" value={WALLETS.eth} />
            <WalletRow label="USDC ERC-20" value={WALLETS.usdcErc} />
            <WalletRow label="SOL / USDC SPL" value={WALLETS.usdcSol} />
          </dl>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm leading-6 text-[#617069] lg:flex-row lg:items-start lg:justify-between">
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
      <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#495850]">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map(([label, href]) => (
          <li key={`${title}-${label}`}>
            <Link
              href={href}
              className="text-sm text-[#5f6e67] outline-none transition-colors hover:text-[#13211c] focus-visible:text-[#13211c]"
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
      <dt className="font-mono uppercase text-[#728079]">{label}</dt>
      <dd className="break-all font-mono text-[#4d5c55]">{value}</dd>
    </div>
  );
}
