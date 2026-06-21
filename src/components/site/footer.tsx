import Link from "next/link";
import { BRAND, NASAL_SPRAYS, PRODUCTS, VIALS } from "@/lib/products";

const RESEARCH_LINKS = [
  ["Reconstitution calculator", "/peptide-reconstitution-calculator"],
  ["Reconstitution guides", "/reconstitution"],
  ["BPC-157 nasal spray", "/research/bpc-157-nasal-spray"],
  ["Selank anxiolytic profile", "/research/selank-anxiolytic-nootropic"],
  ["Semax cognition", "/research/semax-cognition-neuroplasticity"],
  ["PT-141 research", "/research/pt-141-research"],
];

const BLOG_LINKS = [
  ["BPC-157 nasal spray guide", "/blog/bpc-157-nasal-spray-complete-guide"],
  ["Where to buy peptide sprays", "/blog/where-to-buy-peptide-nasal-sprays"],
  ["Semax vs Selank", "/blog/semax-vs-selank-neuropeptide-comparison"],
  ["How to read a COA", "/blog/how-to-read-peptide-coa"],
  ["Sprays vs injections", "/blog/peptide-nasal-sprays-vs-injections"],
  ["PT-141 research guide", "/blog/pt-141-nasal-spray-research-guide"],
  ["DSIP sleep peptide", "/blog/dsip-nasal-spray-delta-sleep-peptide"],
  ["Oxytocin research", "/blog/oxytocin-nasal-spray-research"],
  ["Peptide stacking guide", "/blog/best-peptide-stacks-research-guide"],
  ["Peptide storage guide", "/blog/peptide-storage-guide"],
];

const COMPARE_LINKS = [
  ["Buy peptides with crypto", "/buy-peptides-with-crypto"],
  ["Buy BPC-157 with Bitcoin", "/buy-bpc-157-with-bitcoin"],
  ["Buy retatrutide with crypto", "/buy-retatrutide-with-crypto"],
  ["Buy TB-500 with crypto", "/buy-tb-500-with-crypto"],
  ["Anonymous purchase with crypto", "/anonymous-peptide-purchase-crypto"],
  ["Pay for peptides with USDC", "/pay-for-peptides-with-usdc-crypto"],
  ["Buy CJC-1295 + Ipamorelin with crypto", "/buy-cjc-1295-ipamorelin-with-crypto"],
  ["BPC-157 for sale", "/bpc-157-for-sale"],
  ["TB-500 for sale", "/tb-500-for-sale"],
  ["Retatrutide for sale", "/retatrutide-for-sale"],
  ["Where to buy BPC-157 spray", "/where-to-buy-bpc-157-nasal-spray"],
  ["Where to buy PT-141 spray", "/where-to-buy-pt-141-nasal-spray"],
  ["BPC-157 spray vs vial", "/bpc-157-nasal-spray-vs-vial"],
  ["TB-500 vs BPC-157", "/tb-500-vs-bpc-157"],
  ["GLP-1 research peptides", "/glp-1-research-peptides"],
  ["Retatrutide vs tirzepatide", "/retatrutide-vs-tirzepatide"],
  ["Retatrutide vs semaglutide", "/retatrutide-vs-semaglutide"],
  ["Reta vs tirz vs sema", "/retatrutide-vs-tirzepatide-vs-semaglutide"],
  ["Where to buy retatrutide", "/where-to-buy-retatrutide"],
  ["Where to buy TB-500", "/where-to-buy-tb-500"],
  ["Where to buy CJC-1295 + Ipamorelin", "/where-to-buy-cjc-1295-ipamorelin"],
  ["Where to buy Semax spray", "/where-to-buy-semax-nasal-spray"],
  ["Where to buy Selank", "/where-to-buy-selank"],
  ["Where to buy Selank spray", "/where-to-buy-selank-nasal-spray"],
  ["Where to buy DSIP spray", "/where-to-buy-dsip-nasal-spray"],
  ["Where to buy oxytocin spray", "/where-to-buy-oxytocin-nasal-spray"],
  ["Where to buy BPC-157", "/where-to-buy-bpc-157"],
  ["Where to buy Semax + Selank stack", "/where-to-buy-semax-selank-stack"],
  ["BPC-157 + TB-500 stack", "/bpc-157-tb-500-stack"],
  ["CJC-1295 vs Ipamorelin", "/cjc-1295-vs-ipamorelin"],
  ["Ipamorelin vs Sermorelin", "/ipamorelin-vs-sermorelin"],
  ["Selank vs Oxytocin spray", "/selank-vs-oxytocin-nasal-spray"],
  ["PT-141 vs Oxytocin spray", "/pt-141-vs-oxytocin-nasal-spray"],
  ["DSIP vs Oxytocin spray", "/dsip-vs-oxytocin-nasal-spray"],
  ["DSIP vs Selank spray", "/dsip-vs-selank-nasal-spray"],
  ["DSIP vs PT-141 spray", "/dsip-vs-pt-141-nasal-spray"],
  ["Where to buy semaglutide (research)", "/where-to-buy-semaglutide-research"],
  ["Where to buy tirzepatide (research)", "/where-to-buy-tirzepatide"],
  ["Buy tirzepatide with crypto", "/buy-tirzepatide-with-crypto"],
  ["Buy PT-141 with crypto", "/buy-pt-141-with-crypto"],
  ["Buy peptides with Bitcoin", "/buy-peptides-with-bitcoin"],
  ["Semaglutide vs tirzepatide", "/semaglutide-vs-tirzepatide"],
  ["MK-677 vs Ipamorelin", "/mk-677-vs-ipamorelin"],
  ["Semax vs Selank", "/semax-vs-selank"],
  ["Nootropic & nasal peptides", "/nootropic-nasal-peptides"],
  ["Nasal spray storage & shelf life", "/peptide-nasal-spray-storage-shelf-life"],
  ["Lyophilized peptide shipping (room temp)", "/lyophilized-peptide-shipping-room-temperature"],
  ["CJC-1295 + Ipamorelin guide", "/cjc-1295-ipamorelin-research-guide"],
  ["CJC + Ipamorelin COA red flags", "/cjc-1295-ipamorelin-coa-red-flags"],
  ["COA-verified supplier", "/coa-verified-peptide-supplier"],
  ["How to verify a COA", "/how-to-verify-peptide-quality-coa"],
];

const COMPANY_LINKS = [
  ["About", "/about"],
  ["Reviews & legitimacy", "/titan-peptide-lab-reviews"],
  ["Lab testing", "/lab-testing"],
  ["How to pay with crypto", "/how-to-pay-with-crypto"],
  ["Shipping FAQ", "/shipping-faq"],
  ["Affiliates", "/affiliates"],
  ["Press", "/press"],
  ["Contact", "/contact"],
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
    ...VIALS.map((product) => [
      `${product.name.replace(" Vial", "")} (vial)`,
      `/products/${product.slug}`,
    ]),
    ...(stack ? [["Selank + Semax Stack", `/products/${stack.slug}`]] : []),
  ];

  return (
    <footer className="border-t border-white/8 bg-[#0b100e] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 lg:grid-cols-[1fr_2fr] lg:items-start">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex size-8 items-center justify-center bg-white">
                <span className="font-serif text-[0.9rem] leading-none text-[#0f1613]">T</span>
              </div>
              <span className="text-[0.95rem] font-semibold tracking-[-0.02em] text-white">
                Titan Peptide
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[13px] leading-[1.7] text-white/45">
              Research-grade peptide nasal sprays with batch-documented release paperwork and cold-chain fulfillment.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            <FooterColumn title="Products" links={productLinks} />
            <FooterColumn title="Compare" links={COMPARE_LINKS} />
            <FooterColumn title="Research" links={RESEARCH_LINKS} />
            <FooterColumn title="Blog" links={BLOG_LINKS} />
            <FooterColumn title="Company" links={COMPANY_LINKS} />
            <FooterColumn title="Legal" links={LEGAL_LINKS} />
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/8 py-6 text-[12px] text-white/30 lg:flex-row lg:justify-between">
          <p>&copy; 2026 The Titan Peptide Company &middot; {BRAND.domain}</p>
          <p className="max-w-xl lg:text-right">
            Products are sold for laboratory research purposes only. Not for human consumption. Statements have not been evaluated by the FDA.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
        {title}
      </h3>
      <ul className="mt-3 space-y-2">
        {links.map(([label, href]) => (
          <li key={`${title}-${label}`}>
            <Link
              href={href}
              className="text-[13px] text-white/55 transition-colors hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
