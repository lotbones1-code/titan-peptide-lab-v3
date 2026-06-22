import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Beaker, Clock, Snowflake, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Retatrutide Shelf Life After Reconstitution With BAC Water | Titan Peptide Lab";
const DESCRIPTION =
  "How long a reconstituted retatrutide research sample stays usable once mixed with bacteriostatic water, why BAC water buys a longer refrigerated window than sterile water, and the handling checks that protect sample integrity. Research use only — not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/retatrutide-reconstituted-shelf-life-bac-water/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/retatrutide-reconstituted-shelf-life-bac-water/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// [state of the sample, what it means, what to check / do]
const STATE_TABLE: [string, string, string][] = [
  [
    "Lyophilized, unopened, before mixing",
    "The freeze-dried powder is the most stable form. Sealed and dry, it tolerates long storage and ambient transit far better than any liquid. The shelf-life clock you read about online starts at reconstitution, not at purchase.",
    "Keep it sealed and cold until you are ready to run the sample. Match the lot on the certificate to the vial. Reconstitute only the amount you will actually use within the storage window.",
  ],
  [
    "Reconstituted with bacteriostatic (BAC) water, refrigerated",
    "BAC water contains 0.9% benzyl alcohol, a preservative that suppresses microbial growth across repeated vial entries. Refrigerated, a research peptide in BAC water commonly holds a multi-week window — frequently cited as roughly 3–4 weeks for handling purposes.",
    "Store at 2–8 °C, keep it out of light, and date the vial at mixing. Wipe the stopper with alcohol before each draw. Track the days since reconstitution rather than days since you received the order.",
  ],
  [
    "Reconstituted with sterile or plain water",
    "Sterile water has no preservative, so once the vial is opened there is no barrier to contamination across multiple entries. The usable window is meaningfully shorter than the same peptide in BAC water.",
    "Treat a sterile-water mix as short-window: refrigerate, minimize vial entries, and discard sooner. For repeated sampling over weeks, BAC water is the format that buys time.",
  ],
  [
    "Liquid left at room temperature or in light",
    "A peptide already in solution degrades through water-dependent pathways — hydrolysis, aggregation, oxidation — that accelerate with heat and light. Time at room temperature spends the shelf-life budget quickly.",
    "Return it to the fridge promptly after each use. Brief room-temperature handling during a draw is expected; prolonged warm or lit storage is the avoidable mistake.",
  ],
  [
    "Cloudy, discolored, or with visible particulates",
    "Clarity is the simplest integrity signal. A solution that has gone cloudy, changed color, or thrown particulates after mixing is a documented exception worth flagging, independent of the calendar window.",
    "Photograph it, note days since reconstitution and storage conditions, and contact the supplier with the lot number. Appearance is more informative than the elapsed time alone.",
  ],
];

const CARDS = [
  {
    icon: Snowflake,
    title: "The clock starts at reconstitution, not at purchase",
    body: "Sealed lyophilized retatrutide is the durable form — it survives ambient transit and long cold storage. Shelf-life worry only becomes real once the powder meets water. That is why the right mental model is days-since-mixing on a dated vial, not days-since-delivery.",
    href: "/reconstitution/retatrutide/?ref=reta-shelf",
    cta: "Retatrutide reconstitution calculator",
  },
  {
    icon: Beaker,
    title: "BAC water buys weeks; sterile water buys days",
    body: "Bacteriostatic water's 0.9% benzyl alcohol suppresses microbial growth across repeated stopper entries, which is why a BAC-water mix commonly holds a multi-week refrigerated window. Sterile or plain water has no preservative, so a multi-entry vial is at higher contamination risk and a shorter handling window.",
    href: "/reconstitution/?ref=reta-shelf",
    cta: "How to reconstitute a peptide",
  },
  {
    icon: Clock,
    title: "Refrigerate, keep dark, and date the vial",
    body: "Cold (2–8 °C), out of light, and labeled with the reconstitution date covers the great majority of handling integrity. Heat and light are what spend the budget fastest, and an undated vial makes any shelf-life question unanswerable. Mix what you will use; store the rest dry.",
    href: "/peptide-nasal-spray-storage-shelf-life/?ref=reta-shelf",
    cta: "Storage & shelf life",
  },
  {
    icon: ShieldCheck,
    title: "Lot-matched documentation settles questions",
    body: "With crypto checkout there is no chargeback window, so the certificate is the buyer protection. A lot number on the paperwork that matches the vial lets a supplier investigate your exact unit if a mixed sample looks wrong. No matching documentation, no way to verify a handling claim either way.",
    href: "/how-to-verify-peptide-quality-coa/?ref=reta-shelf",
    cta: "Verify a peptide COA",
  },
];

const FAQS = [
  {
    q: "How long does reconstituted retatrutide last in bacteriostatic water?",
    a: "Stored refrigerated at roughly 2–8 °C and protected from light, a research peptide reconstituted with bacteriostatic (BAC) water commonly holds a multi-week handling window — figures around 3 to 4 weeks are frequently cited for laboratory handling purposes. BAC water contains 0.9% benzyl alcohol, a preservative that suppresses microbial growth across repeated vial entries, which is what extends the window versus plain or sterile water. This describes storage and handling of a research reagent, not human-use guidance; Titan supplies retatrutide strictly for in-vitro laboratory research.",
  },
  {
    q: "Does the shelf-life clock start when I buy it or when I mix it?",
    a: "When you mix it. Sealed lyophilized (freeze-dried) powder is the stable form and tolerates long cold storage and ambient transit, so the meaningful shelf-life window begins at reconstitution, not at purchase or delivery. The practical habit is to date the vial at the moment you add water and track days since reconstitution. Reconstituting only the amount you intend to use within the window keeps the rest of the lot in its most durable dry state.",
  },
  {
    q: "Is BAC water or sterile water better for a sample I will use over several weeks?",
    a: "For a vial you will enter multiple times over weeks, bacteriostatic water is the format that buys time because its benzyl alcohol preservative limits microbial growth between draws. Sterile or plain water has no preservative, so once opened, a multi-entry vial carries higher contamination risk and a shorter usable window. For a single same-session use, the difference matters less; for repeated sampling, BAC water is the standard choice in research handling.",
  },
  {
    q: "How should I store a reconstituted retatrutide vial?",
    a: "Refrigerate it at about 2–8 °C, keep it out of direct light, and wipe the stopper with alcohol before each draw. Avoid leaving the vial at room temperature for long stretches, since heat and light accelerate the water-dependent degradation pathways that affect any peptide in solution. Label the vial with the reconstitution date so the elapsed window is always clear. Do not freeze a reconstituted solution unless the specific lot documentation indicates it is appropriate.",
  },
  {
    q: "When should I stop using a reconstituted sample?",
    a: "Two triggers: the calendar window for your water type has passed, or the solution shows a visible integrity change. A mix that has turned cloudy, changed color, or developed particulates is worth setting aside and documenting with the lot number and days since reconstitution, regardless of the date. Appearance plus elapsed time together are more informative than either alone. When in doubt, photograph it and raise it with the supplier rather than guessing.",
  },
  {
    q: "Is any of this dosing or human-use advice?",
    a: "No. Titan Peptide Lab's retatrutide and all other compounds are supplied strictly for in-vitro laboratory research and are not for human or animal consumption. Everything on this page covers reconstitution, storage conditions, and shelf-life handling of a research reagent. None of it is therapeutic, dosing, administration, or efficacy guidance.",
  },
];

export default function RetatrutideReconstitutedShelfLifeBacWaterPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Retatrutide Shelf Life After Reconstitution (BAC Water)", item: "/retatrutide-reconstituted-shelf-life-bac-water/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Storage & handling · Retatrutide · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.5rem,5.6vw,5rem)] leading-[0.96] tracking-[-0.05em] text-[#0f1613] text-balance">
                How long reconstituted retatrutide lasts, and why BAC water matters.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                The shelf-life question every research buyer asks once the vial is mixed: how many days do I have? This page explains why the clock starts at reconstitution rather than purchase, why bacteriostatic water buys a multi-week refrigerated window while sterile water buys days, and the short handling checklist that protects sample integrity. Handling literacy only, strictly for research reagents.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/reconstitution/retatrutide/?ref=reta-shelf-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  Retatrutide reconstitution calculator
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/where-to-buy-retatrutide/?ref=reta-shelf-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Where to buy retatrutide
                </Link>
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-[#8a9690]">
                For research use only · Not for human consumption
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
              By the state of the sample
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              What determines the window, from powder to mixed vial.
            </h2>
            <div className="mt-9 overflow-hidden rounded-[1.5rem] border border-[#dde6e1]">
              <table className="w-full border-collapse text-left text-[13.5px]">
                <thead>
                  <tr className="bg-[#f4f7f5] text-[11px] uppercase tracking-[0.12em] text-[#1e6f58]">
                    <th className="px-5 py-4 font-semibold">Sample state</th>
                    <th className="px-5 py-4 font-semibold">What it means</th>
                    <th className="px-5 py-4 font-semibold">What to do</th>
                  </tr>
                </thead>
                <tbody>
                  {STATE_TABLE.map(([state, means, check]) => (
                    <tr key={state} className="border-t border-[#e7ede9] align-top">
                      <td className="px-5 py-5 font-serif text-[1.1rem] tracking-[-0.01em]">{state}</td>
                      <td className="px-5 py-5 text-[#5c6762]">{means}</td>
                      <td className="px-5 py-5 text-[#5c6762]">{check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[12px] leading-6 text-[#8a9690]">
              These notes describe reconstitution, storage conditions, and shelf-life handling for a synthesized research reagent. They are not a use, effect, or administration claim. Always follow the documentation supplied with a specific lot. All compounds are research-use-only.
            </p>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {CARDS.map(({ icon: Icon, title, body, href, cta }) => (
                <Link key={title} href={href} className="group flex h-full flex-col rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#1e6f58] hover:shadow-[0_18px_60px_-42px_rgb(15_22_19/45%)]">
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.4rem] leading-tight tracking-[-0.02em] group-hover:text-[#1e6f58]">
                    {title}
                  </h2>
                  <p className="mt-3 flex-1 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1e6f58]">
                    {cta} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Related handling & verification reading</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Reconstitute correctly, store cold, verify the lot.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/reconstitution/retatrutide/?ref=reta-shelf">Retatrutide reconstitution calculator (how much BAC water) →</Link></li>
              <li><Link className="hover:underline" href="/reconstitution/?ref=reta-shelf">How to reconstitute a lyophilized peptide →</Link></li>
              <li><Link className="hover:underline" href="/blog/peptide-storage-guide/?ref=reta-shelf">Peptide storage guide (full) →</Link></li>
              <li><Link className="hover:underline" href="/peptide-nasal-spray-storage-shelf-life/?ref=reta-shelf">Nasal spray storage & shelf life →</Link></li>
              <li><Link className="hover:underline" href="/lyophilized-peptide-shipping-room-temperature/?ref=reta-shelf">Lyophilized shipping & room temperature →</Link></li>
              <li><Link className="hover:underline" href="/how-to-verify-peptide-quality-coa/?ref=reta-shelf">How to verify a peptide quality COA →</Link></li>
              <li><Link className="hover:underline" href="/glp-1-research-peptides/?ref=reta-shelf">GLP-1 research peptides (category) →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-retatrutide/?ref=reta-shelf">Where to buy retatrutide →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ordering retatrutide for research?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              See current pricing and lot documentation on the catalog, or read how cold-chain handling and crypto checkout work before you order.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/retatrutide-for-sale/?ref=reta-shelf-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Retatrutide for sale
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/how-to-pay-with-crypto/?ref=reta-shelf-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                How to pay with crypto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
