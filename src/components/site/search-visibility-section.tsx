import Link from "next/link";

const SEARCH_PATHS = [
  {
    title: "Research peptide supplier",
    href: "/research-peptide-supplier/?ref=seo-home",
    body: "The exact-answer supplier screen: lot paperwork, HPLC purity, identity confirmation, RUO language, and checkout clarity.",
  },
  {
    title: "Where to buy research peptides",
    href: "/where-to-buy-research-peptides/?ref=seo-home",
    body: "A buyer path for researchers comparing COAs, HPLC purity, payment networks, and fulfillment before checkout.",
  },
  {
    title: "Peptide supplier checklist",
    href: "/peptide-supplier-checklist/?ref=seo-home",
    body: "A six-point due-diligence page for forum visitors and searchers checking whether a supplier is credible.",
  },
  {
    title: "Research peptide catalog",
    href: "/products/?ref=seo-home",
    body: "Nasal sprays, vials, and stacks with lot-matched release sheets and HPLC purity targets.",
  },
  {
    title: "How to verify peptide purity",
    href: "/blog/how-to-verify-peptide-purity/?ref=seo-home",
    body: "A plain-English COA checklist for HPLC, mass-spec identity, lot codes, and retest paperwork.",
  },
  {
    title: "COA-verified peptide supplier",
    href: "/coa-verified-peptide-supplier/?ref=seo-home",
    body: "A proof-first supplier page for researchers comparing lot-matched documentation before they buy.",
  },
];

export function SearchVisibilitySection() {
  return (
    <section className="border-b border-[#ece9e2] bg-[#fbfcfb] px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">
            Research peptide source
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[0.98] tracking-[-0.035em] text-[#0f1110]">
            Buy research peptides online with lot-matched COAs, not blind trust.
          </h2>
          <p className="mt-5 max-w-[58ch] text-[15px] leading-[1.85] text-[#555b55]">
            Titan Peptide Lab is built for researchers comparing peptide suppliers: transparent lot documentation, HPLC purity targets, mass-spec identity checks, crypto checkout, and research-use labeling before the order leaves the warehouse.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:pt-2">
          {SEARCH_PATHS.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="group rounded-[1.25rem] border border-[#dde6e1] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#1a5c48] hover:shadow-[0_18px_45px_-35px_rgb(15_22_19/45%)]"
            >
              <h3 className="font-serif text-[1.35rem] leading-tight tracking-[-0.02em] text-[#0f1110] group-hover:text-[#1a5c48]">
                {path.title}
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-[#66736d]">
                {path.body}
              </p>
              <span className="mt-5 inline-flex text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1a5c48]">
                Open path →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
