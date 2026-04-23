import Link from "next/link";
import { BRAND, NASAL_SPRAYS, PRODUCTS } from "@/lib/products";

const RESEARCH_LINKS = [
  ["BPC-157 nasal spray", "/research/bpc-157-nasal-spray"],
  ["Selank anxiolytic profile", "/research/selank-anxiolytic-nootropic"],
  ["Semax cognition", "/research/semax-cognition-neuroplasticity"],
  ["PT-141 research", "/research/pt-141-research"],
];

const COMPANY_LINKS = [
  ["About", "/about"],
  ["Lab testing", "/lab-testing"],
  ["Contact", "/contact"],
];

const SUPPORT_LINKS = [
  ["Shipping FAQ", "/shipping-faq"],
  ["Track order", "/shipping-faq"],
  ["COA library", "/lab-testing"],
];

const LEGAL_LINKS = [
  ["Research disclaimer", "/legal/research-disclaimer"],
  ["Terms of service", "/legal/terms"],
  ["Privacy policy", "/legal/privacy"],
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
    <footer className="border-t border-[rgb(15_22_19/8%)] bg-[#0b100e] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-6 border-b border-white/8 py-16 lg:grid-cols-[1.05fr_1.95fr] lg:items-start">
          <div className="rounded-[1.75rem] border border-white/10 bg-[#101614] p-7 lg:p-8">
            <Link
              href="/"
              className="inline-block outline-none transition-opacity hover:opacity-80 focus-visible:opacity-80"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center bg-white shadow-[0_8px_24px_-12px_rgba(255,255,255,0.35)]">
                  <span className="font-serif text-[1rem] leading-none text-[#0f1613]">
                    T
                  </span>
                </div>
                <div>
                  <span className="block text-[0.98rem] font-semibold tracking-[-0.03em] text-white">
                    Titan Peptide
                  </span>
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-white/35">
                    Research-grade nasal sprays
                  </span>
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-[14px] leading-[1.85] text-white/56">
              Research-grade peptide formulations with batch-verified purity,
              lot-matched certificates of analysis, and cold-chain fulfillment.
            </p>

            <div className="mt-8 grid gap-px overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/10 sm:grid-cols-3">
              {[
                ["COA", "Lot-matched with each order"],
                ["24h", "Manual dispatch target"],
                ["Cold-chain", "Handling built into the flow"],
              ].map(([value, label]) => (
                <div key={value} className="bg-[#101614] px-4 py-4">
                  <p className="font-serif text-[1.6rem] leading-none tracking-[-0.04em] text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-[11px] leading-[1.6] text-white/42">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn title="Products" links={productLinks} />
            <FooterColumn title="Research" links={RESEARCH_LINKS} />
            <FooterColumn title="Company" links={COMPANY_LINKS} />
            <div className="grid gap-6">
              <FooterColumn title="Support" links={SUPPORT_LINKS} />
              <FooterColumn title="Legal" links={LEGAL_LINKS} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-7 text-[12px] leading-relaxed text-white/35 lg:flex-row lg:items-start lg:justify-between">
          <p>&copy; 2026 The Titan Peptide Company. {BRAND.domain}</p>
          <p className="max-w-2xl lg:text-right">
            Products are sold for laboratory research purposes only. Not for
            human consumption. Statements on this site have not been evaluated
            by the FDA.
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
    <div className="rounded-[1.5rem] border border-white/8 bg-[#0f1412] p-6">
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={`${title}-${label}`}>
            <Link
              href={href}
              className="text-[13px] text-white/60 outline-none transition-colors hover:text-white focus-visible:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
