import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

export const metadata = {
  title: "About — The Titan Peptide Company",
  description:
    "Founded in research, built for integrity. The origin, philosophy, and sourcing commitments behind The Titan Peptide Company.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#1e6f58]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                About the company
              </span>
            </div>

            <div className="mt-12 grid gap-x-14 gap-y-16 lg:grid-cols-12">
              <article className="lg:col-span-7">
                <h1 className="font-serif text-[clamp(2.6rem,5.5vw,4.8rem)] leading-[0.92] tracking-[-0.04em] text-[#0f1613] text-pretty">
                  Founded in research,
                  <br />
                  <em className="not-italic text-[#1e6f58]">
                    built for integrity
                  </em>
                  .
                </h1>

                <div className="mt-12 space-y-6 text-[15px] leading-[1.8] text-[#5c6762]">
                  <p className="font-serif text-[1.5rem] leading-[1.4] text-[#0f1613]">
                    Titan started as a response to a basic failure in the
                    peptide market &mdash; too many sellers acting like the label
                    was the product instead of the batch data behind it.
                  </p>

                  <p>
                    The category was full of anonymous powder, generic
                    certificates, and vague purity claims. The PDF in the
                    envelope usually had no real relationship to the vial in the
                    box. That gap &mdash; between the document and the
                    compound &mdash; is exactly what this company was built to
                    close.
                  </p>

                  <p>
                    Titan operates on one discipline: the bottle, certificate,
                    and order log should all resolve to the same lot. No
                    representative COAs. No inherited test results. No softened
                    purity language. When a run reads 99.42%, that is what gets
                    recorded &mdash; not a rounded claim designed for easier
                    marketing.
                  </p>

                  <h2 className="pt-6 font-serif text-[1.75rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                    The philosophy.
                  </h2>

                  <p>
                    We take a narrow view of what a peptide company should do. We
                    formulate, verify, and dispatch. We do not market to patient
                    outcomes, blur into medical claims, or pad the copy with
                    clinical theatre. Everything on the site is structured around
                    research credibility first.
                  </p>

                  <p>
                    That is why the tone is deliberate, a little quieter, and a
                    lot more specific. The people who buy from a serious
                    operation are not looking for hype. They are looking for
                    evidence that the operation behind the bottle is actually
                    disciplined.
                  </p>

                  <h2 className="pt-6 font-serif text-[1.75rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                    Supply chain discipline.
                  </h2>

                  <p>
                    The nasal spray line is filled against tightly controlled
                    source material and matched to retained lot records. Bulk API
                    is handled through a single audited manufacturing
                    relationship instead of being shuffled between cheaper
                    suppliers. Consistency of input is treated as a quality
                    requirement, not a pricing lever.
                  </p>

                  <p>
                    Incoming lots are quarantined, re-identified, screened, and
                    only then released to fill. If the incoming data and the
                    internal read disagree beyond method tolerance, the batch is
                    held. That policy matters more than any slogan on the
                    homepage because it is what protects the customer from a bad
                    lot actually leaving the building.
                  </p>

                  <h2 className="pt-6 font-serif text-[1.75rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                    Who this is for.
                  </h2>

                  <p>
                    Titan is for buyers who care about whether the proof is
                    attached to the product. Researchers, repeat buyers, labs,
                    and serious hobbyists all end up asking the same
                    question &mdash; does the certificate in front of me actually
                    belong to this bottle? The entire brand exists to make that
                    answer clearer.
                  </p>
                </div>

                <div className="mt-14 border-t border-[rgb(15_22_19/8%)] pt-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                    Signed
                  </span>
                  <div className="mt-3 font-serif text-[1.75rem] italic text-[#0f1613]">
                    Dr. M. Voss
                  </div>
                  <div className="mt-1 text-[13px] text-[#8a9690]">
                    QA Lead, The Titan Peptide Company &middot; Reno, NV
                  </div>
                </div>
              </article>

              <aside className="lg:col-span-5">
                <div className="lg:sticky lg:top-24">
                  <figure className="rounded-xl border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-8 text-[#0f1613]">
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
                      <Row k="Independent retest" v="ISO 17025 partner" />
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
              </aside>
            </div>
          </div>
        </section>
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
