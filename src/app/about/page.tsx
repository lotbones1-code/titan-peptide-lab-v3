import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { NextRead } from "@/components/site/next-read";
import { FounderJsonLd } from "@/components/site/json-ld";

const MILESTONES = [
  {
    year: "2019",
    title: "Founded.",
    body: "Titan opens in Reno, NV with a single discipline: the certificate must resolve to the lot in the bottle.",
  },
  {
    year: "2021",
    title: "Release discipline locked.",
    body: "Each lot is released against in-house analytical checks (an HPLC-UV purity read and a mass-spec identity check) documented on the lot-release sheet; the paperwork must resolve to the lot in the bottle before release is signed.",
  },
  {
    year: "2023",
    title: "Nasal-first pivot.",
    body: "Catalog rebuilt around measured nasal sprays — the easiest format for researchers to trust and adopt.",
  },
  {
    year: "2026",
    title: "Catalog expansion.",
    body: "Injectables and curated stacks added alongside the spray line without loosening the release rule.",
  },
];

const ABOUT_TITLE = "About — Titan Peptide Lab";
const ABOUT_DESCRIPTION =
  "Titan Peptide Lab is a COA-first, research-use-only peptide vendor built around lot-aware documentation, clearer checkout expectations, and claim-safe buyer education.";

export const metadata = {
  title: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  alternates: { canonical: "/about/" },
  openGraph: { title: ABOUT_TITLE, description: ABOUT_DESCRIPTION },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <PageHero
          eyebrow="About the company"
          title={
            <>
              Built for COA-first
              <br />
              <em className="not-italic text-[#1e6f58]">
                buyer trust
              </em>
              .
            </>
          }
          aside={
            <div className="lg:sticky lg:top-24">
              <figure className="rounded-[1.75rem] border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-8 text-[#0f1613]">
                <div className="flex items-baseline justify-between border-b border-[rgb(15_22_19/6%)] pb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                    Company profile
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                    Est. 2019
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-[1.75rem] leading-[1.1] text-[#0f1613]">
                  The Titan Peptide
                  <br />
                  <span className="text-[#1e6f58]">Company</span>
                </h3>

                <dl className="mt-8 space-y-3.5">
                  <Row k="Founded" v="2019 &middot; Reno, NV" />
                  <Row k="Team" v="7" />
                  <Row
                    k="Reject threshold"
                    v="&lt; 99.0% purity"
                    highlight
                  />
                  <Row k="Release rule" v="Batch-matched COA" />
                  <Row k="Audit cycle" v="Twice per year" />
                  <Row k="Documentation" v="Lot-matched release sheet" />
                  <Row k="Funding" v="Customer-backed" />
                </dl>

                <div className="mt-8 border-t border-[rgb(15_22_19/6%)] pt-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                    Discipline
                  </span>
                  <p className="mt-2 font-serif text-lg text-[#0f1613]">
                    The certificate stays attached to the batch.
                  </p>
                </div>
              </figure>
            </div>
          }
          below={
            <article className="mt-12">
              <div className="space-y-6 text-[15px] leading-[1.8] text-[#5c6762]">
                <p className="font-serif text-[1.5rem] leading-[1.4] text-[#0f1613]">
                  Titan exists because the peptide market asks serious buyers
                  to tolerate too much uncertainty.
                </p>

                <p>
                  For years, the category has rewarded the wrong signals:
                  louder product claims, cleaner labels, bigger menus, and
                  checkout flows that feel more like workarounds than commerce.
                  A polished storefront can say &ldquo;lab tested,&rdquo; but the
                  buyer still has to ask the real questions: Does the
                  certificate actually belong to this lot? Was the material
                  re-checked, or is the COA just a recycled PDF? Is the fill
                  amount clear? Is the payment path legitimate? If something
                  looks off, is there a real support route &mdash; or just
                  another anonymous vendor hiding behind generic copy?
                </p>

                <p>
                  Titan Peptide Lab was built as a response to that gap. The
                  company&apos;s starting point is simple: the paperwork is not
                  decoration. In a research-use-only category, documentation is
                  part of the product experience. A COA should not sit in the
                  footer like a trust badge. It should be treated as a primary
                  buying signal, connected to the lot, the product page, the
                  release process, and the support path around the order.
                </p>

                <h2 className="pt-6 font-serif text-[1.75rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  What COA-first means.
                </h2>

                <p>
                  That is what COA-first means at Titan. It means buyers should
                  not have to decode vague purity claims or trust a certificate
                  that could have been copied from another batch. It means the
                  product page should make the verification path easier to
                  understand, not more confusing. It means the brand should be
                  willing to say what can be checked and avoid implying what
                  cannot be proven.
                </p>

                <p>
                  The founder&apos;s view is that most of the peptide market is
                  not broken because buyers are irrational. It is broken
                  because too many vendors have trained buyers to accept opacity
                  as normal.
                </p>

                <h2 className="pt-6 font-serif text-[1.75rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  What the market gets wrong.
                </h2>

                <p>
                  Some sellers make the COA hard to find. Some present
                  &ldquo;representative&rdquo; testing without making the lot
                  relationship obvious. Some list aggressive concentration or
                  dose-style amount claims without enough clarity around fill,
                  format, or batch documentation. Others push payment
                  instructions that look sketchy from the first click:
                  prepaid-card-only workarounds, unclear crypto networks,
                  last-minute support email handoffs, or checkout pages that do
                  not explain what happens after payment. Even when the product
                  itself may be legitimate, the buying experience often forces
                  the customer to act on faith.
                </p>

                <p>
                  Titan is trying to move in the opposite direction. The
                  promise is not hype. Titan does not market peptides as medical
                  treatments, does not provide dosing advice, and does not build
                  the brand around transformation stories. The promise is
                  narrower and more operational: make the research-purchasing
                  path feel documented, serious, and easier to verify.
                </p>

                <h2 className="pt-6 font-serif text-[1.75rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  The promise.
                </h2>

                <p>
                  That starts with restraint. Research-use-only language should
                  not be a tiny disclaimer under a page full of outcome claims.
                  It should shape the entire brand. Product education should
                  explain format, documentation, handling expectations, and
                  release standards without drifting into therapeutic language.
                  If a claim belongs in a medical office, it does not belong in
                  Titan&apos;s sales copy.
                </p>

                <p>
                  It also starts with clarity. A serious buyer should understand
                  the basics before they order: what the product is, what
                  documentation is available, how the lot is treated, what
                  payment method is expected, what the support route is, and
                  what Titan will not claim. That clarity does not make the
                  brand less premium. It makes the brand more credible.
                </p>

                <p>
                  The market has enough vendors trying to look exciting. Titan
                  is built to look accountable.
                </p>

                <p>
                  A COA-first company has to care about the small operational
                  details that most brands hide. The way product pages describe
                  purity. The way checkout explains payment expectations before
                  the buyer is already committed. The way support language
                  handles order questions without overpromising. The way content
                  avoids medical claims even when those claims would probably
                  get more clicks. The way a brand admits when a proof point is
                  not ready yet instead of stretching the copy to sound
                  stronger.
                </p>

                <p>
                  That discipline matters because trust is not created by a
                  single PDF. Trust is created by a chain: product page,
                  paperwork, lot logic, checkout clarity, support response, and
                  the absence of exaggerated claims. If one link feels fake, the
                  whole chain gets weaker.
                </p>

                <p>
                  Titan&apos;s job is to make that chain stronger.
                </p>

                <p>
                  The brand is founder-led because the category still needs an
                  operator&apos;s standard, not just a marketer&apos;s voice. The
                  work is not glamorous: tighten the product language, improve
                  the buying path, remove vague claims, make the proof easier to
                  understand, and build systems that make each order feel less
                  anonymous. That is the real founder story. Not a private
                  personal narrative. Not a dramatic origin myth. A public
                  commitment to make a messy category feel more documented.
                </p>

                <p>
                  Titan will not be the loudest peptide brand. It is not trying
                  to be. The goal is to become the vendor a skeptical buyer can
                  evaluate without feeling pushed: a vendor that treats research
                  use only as an operating boundary, not a legal footnote; a
                  vendor that knows a COA is important, but not sufficient by
                  itself; a vendor that understands buyers are not only
                  purchasing a vial or a spray &mdash; they are purchasing
                  confidence that the company behind it has a real release
                  process, a real support path, and the discipline to avoid
                  claims it cannot support.
                </p>

                <p className="font-serif text-[1.35rem] leading-[1.4] text-[#0f1613]">
                  That is why Titan exists: to make the proof visible, make the
                  checkout path clearer, make the category less dependent on
                  hype, and build a research-supply brand where documentation is
                  not an afterthought &mdash; it is the standard.
                </p>
              </div>

              <div className="mt-14 border-t border-[rgb(15_22_19/8%)] pt-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                  Issued by
                </span>
                <div className="mt-3 font-serif text-[1.75rem] text-[#0f1613]">
                  The Titan Peptide Lab team
                </div>
                <div className="mt-1 text-[13px] text-[#8a9690]">
                  Reno, NV
                </div>
              </div>

              <section className="mt-16 border-t border-[rgb(15_22_19/8%)] pt-10">
                <FounderJsonLd />
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-[#1e6f58]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                    Leadership
                  </span>
                </div>

                <h2 className="mt-6 font-serif text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.05] tracking-[-0.03em] text-[#0f1613]">
                  The standard starts at the top.
                </h2>

                <p className="mt-6 font-serif text-[1.5rem] leading-[1.4] text-[#0f1613]">
                  Titan was built around a single rule &mdash; the certificate
                  has to resolve to the lot in the bottle. That rule didn&apos;t
                  come from a committee. It came from the founder.
                </p>

                <div className="mt-6 space-y-6 text-[15px] leading-[1.8] text-[#5c6762]">
                  <p>
                    Shamil Kuchaliyev founded Titan Peptide Lab to fix the thing
                    he hated most as a research buyer: not being able to trust
                    what was actually in the vial. His answer wasn&apos;t a
                    louder marketing claim &mdash; it was a documentation
                    discipline. Six checks, one release rule, and an
                    in-house crosscheck that decides whether a batch
                    ever leaves the building.
                  </p>
                  <p>
                    He runs the company the same way he built it: lean,
                    transparent, and increasingly automated &mdash; using AI
                    systems he builds himself to handle operations so the team
                    can stay focused on the one thing that can&apos;t be
                    automated, which is judgment about quality.
                  </p>
                  <p>
                    Everything Titan sells is for research use only. That
                    disclaimer isn&apos;t fine print here &mdash; it&apos;s part
                    of the promise. In a market full of overclaims, refusing to
                    overclaim is the brand.
                  </p>
                </div>

                <figure className="mt-10 border-l-2 border-[#1e6f58] pl-6">
                  <blockquote className="font-serif text-[1.5rem] leading-[1.35] text-[#0f1613]">
                    &ldquo;Trust in this category isn&apos;t a logo. It&apos;s
                    whether the paper matches the product. We built the entire
                    company around that test.&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                    Shamil Kuchaliyev &middot; Founder &amp; CEO
                  </figcaption>
                </figure>
              </section>

              <div className="mt-16 border-t border-[rgb(15_22_19/8%)] pt-10">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-[#1e6f58]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                    Timeline
                  </span>
                </div>

                <ol className="mt-8 space-y-8">
                  {MILESTONES.map((m) => (
                    <li
                      key={m.year}
                      className="grid grid-cols-[72px_1fr] gap-x-6 border-t border-[rgb(15_22_19/6%)] pt-6"
                    >
                      <span className="pt-0.5 text-[13px] font-semibold tabular-nums text-[#1e6f58]">
                        {m.year}
                      </span>
                      <div>
                        <h3 className="font-serif text-[1.35rem] leading-[1.15] tracking-[-0.02em] text-[#0f1613]">
                          {m.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-[13.5px] leading-[1.75] text-[#5c6762]">
                          {m.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          }
        />

        <NextRead
          eyebrow="Lab testing"
          title="See the six checks and one release rule."
          href="/lab-testing"
          blurb="Identity, purity, sterility, endotoxin, heavy metals, residual solvents — with specs, methods, and the in-house release rule that decides whether a batch leaves the building."
        />
      </main>
      <Footer />
    </>
  );
}

function Row({
  k,
  v,
  highlight,
}: {
  k: string;
  v: string;
  highlight?: boolean;
}) {
  return (
    <div className="grid grid-cols-[120px_1fr] items-baseline gap-4 border-b border-[rgb(15_22_19/6%)] pb-2.5">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]">
        {k}
      </dt>
      <dd
        className={`tabular-nums ${highlight ? "text-[14px] font-semibold text-[#0f1613]" : "text-[13px] text-[#5c6762]"}`}
        dangerouslySetInnerHTML={{ __html: v }}
      />
    </div>
  );
}
