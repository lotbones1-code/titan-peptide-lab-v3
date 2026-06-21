import Link from "next/link";

// In-content homepage hub linking the highest-commercial-intent buyer pages.
// The homepage is the most-crawled URL on the domain, so descriptive in-content
// links here carry more crawl-priority weight to these pages than the sitewide
// footer boilerplate. Anchors are descriptive and match each page's primary query.
const BUYER_PATHS = [
  {
    title: "Where to buy retatrutide",
    href: "/where-to-buy-retatrutide/?ref=seo-home-hub",
    body: "Lot-matched COA, HPLC purity target, and crypto checkout for retatrutide research material.",
  },
  {
    title: "Where to buy tirzepatide",
    href: "/where-to-buy-tirzepatide/?ref=seo-home-hub",
    body: "Tirzepatide for research, with release-sheet documentation and identity verification per lot.",
  },
  {
    title: "Where to buy semaglutide (research)",
    href: "/where-to-buy-semaglutide-research/?ref=seo-home-hub",
    body: "Research-grade semaglutide with mass-spec identity checks and transparent lot paperwork.",
  },
  {
    title: "Where to buy BPC-157 nasal spray",
    href: "/where-to-buy-bpc-157-nasal-spray/?ref=seo-home-hub",
    body: "BPC-157 in a nasal-spray format with COA verification and research-use labeling.",
  },
  {
    title: "Where to buy PT-141 nasal spray",
    href: "/where-to-buy-pt-141-nasal-spray/?ref=seo-home-hub",
    body: "PT-141 nasal spray with lot-matched release sheets and HPLC purity documentation.",
  },
  {
    title: "Retatrutide vs tirzepatide vs semaglutide",
    href: "/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=seo-home-hub",
    body: "A side-by-side comparison of the three GLP-1 research compounds before you choose a path.",
  },
  {
    title: "Retatrutide for sale",
    href: "/retatrutide-for-sale/?ref=seo-home-hub",
    body: "Pricing, lyophilized vial size, bulk tiers, and crypto checkout for the triple-agonist research compound.",
  },
  {
    title: "BPC-157 for sale",
    href: "/bpc-157-for-sale/?ref=seo-home-hub",
    body: "BPC-157 in vial and nasal-spray formats with lot-matched COA and research-use labeling.",
  },
  {
    title: "TB-500 for sale",
    href: "/tb-500-for-sale/?ref=seo-home-hub",
    body: "TB-500 (Thymosin β-4) 5mg vials with HPLC purity documentation and the BPC-157 pairing context.",
  },
  {
    title: "Buy peptides with crypto",
    href: "/buy-peptides-with-crypto/?ref=seo-home-hub",
    body: "Which coins we accept, how checkout works, confirmation times, and why crypto-only keeps prices lower.",
  },
  {
    title: "How to verify peptide quality (COA)",
    href: "/how-to-verify-peptide-quality-coa/?ref=seo-home-hub",
    body: "How to read a Certificate of Analysis — identity before purity, the chromatogram, and lot-matching the vial.",
  },
];

export function WhereToBuyHub() {
  return (
    <section className="border-b border-[#ece9e2] bg-white px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">
          Find your compound
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.0] tracking-[-0.035em] text-[#0f1110]">
          Where to buy research peptides, by compound
        </h2>
        <p className="mt-5 max-w-[60ch] text-[15px] leading-[1.85] text-[#555b55]">
          Jump straight to the most-searched research compounds — where to buy
          them, current pricing, how crypto checkout works, and how to verify a
          Certificate of Analysis before you order.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BUYER_PATHS.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="group rounded-[1.25rem] border border-[#dde6e1] bg-[#fbfcfb] p-5 transition hover:-translate-y-0.5 hover:border-[#1a5c48] hover:shadow-[0_18px_45px_-35px_rgb(15_22_19/45%)]"
            >
              <h3 className="font-serif text-[1.3rem] leading-tight tracking-[-0.02em] text-[#0f1110] group-hover:text-[#1a5c48]">
                {path.title}
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-[#66736d]">
                {path.body}
              </p>
              <span className="mt-5 inline-flex text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1a5c48]">
                View page →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
