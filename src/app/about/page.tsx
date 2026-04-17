import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

export const metadata = {
  title: "About — Titan Peptide Laboratory",
  description:
    "Founded in research, built for integrity. The origin, philosophy, and sourcing commitments behind Titan Peptide Laboratory.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-[linear-gradient(180deg,#fbf8f2_0%,#f6f1e9_54%,#efe9df_100%)] text-[#13211c]">
        <section className="border-b border-[#dde4da] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#718079]">
              §A — About the Laboratory
            </div>

            <div className="mt-12 grid gap-x-12 gap-y-16 lg:grid-cols-12">
              <article className="lg:col-span-7">
                <h1 className="font-serif text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.92] tracking-[-0.04em] text-[#13211c] text-pretty">
                  Founded in research,
                  <br />
                  <em className="italic text-[#5d7368]">built for integrity</em>.
                </h1>

                <div className="mt-12 space-y-7 text-[15px] leading-8 text-[#42524b] sm:text-base">
                  <p className="font-serif text-[1.8rem] italic leading-[1.35] text-[#23322c]">
                    Titan started as a response to a basic failure in the
                    peptide market, too many sellers acting like the label was
                    the product instead of the batch data behind it.
                  </p>

                  <p>
                    Back then, the category was full of anonymous powder,
                    generic certificates, and vague purity claims. The PDF in
                    the envelope usually had no real relationship to the vial in
                    the box. That gap, between the document and the compound,
                    is the exact thing this laboratory was built to close.
                  </p>

                  <p>
                    Titan operates on one discipline, the bottle, certificate,
                    and order log should all resolve to the same lot. No
                    representative COAs. No inherited test results. No softened
                    purity language. When a run reads 99.42%, that is what gets
                    recorded, not a rounded claim designed for easier marketing.
                  </p>

                  <h2 className="pt-8 font-serif text-3xl leading-snug text-[#13211c]">
                    The philosophy.
                  </h2>

                  <p>
                    We take a narrow view of what a peptide lab should do. We
                    formulate, verify, and dispatch. We do not market to
                    patient outcomes, blur into medical claims, or pad the copy
                    with clinical theatre. Everything on the site is structured
                    around research credibility first.
                  </p>

                  <p>
                    That is why the tone is deliberate, a little quieter, and a
                    lot more specific. The people who buy from a serious lab are
                    not looking for hype. They are looking for evidence that the
                    operation behind the bottle is actually disciplined.
                  </p>

                  <h2 className="pt-8 font-serif text-3xl leading-snug text-[#13211c]">
                    Supply chain discipline.
                  </h2>

                  <p>
                    The nasal spray line is filled against tightly controlled
                    source material and matched to retained lot records. Bulk
                    API is handled through a single audited manufacturing
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

                  <h2 className="pt-8 font-serif text-3xl leading-snug text-[#13211c]">
                    Who this is for.
                  </h2>

                  <p>
                    Titan is for buyers who care about whether the proof is
                    attached to the product. Researchers, repeat buyers, labs,
                    and serious hobbyists all end up asking the same question,
                    does the certificate in front of me actually belong to this
                    bottle? The entire brand exists to make that answer clearer.
                  </p>
                </div>

                <div className="mt-16 border-t border-[#d8dfd7] pt-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#708079]">
                    Signed
                  </div>
                  <div className="mt-3 font-serif text-3xl italic text-[#23322c]">
                    Dr. M. Voss
                  </div>
                  <div className="mt-1 text-sm text-[#6d7a74]">
                    QA Lead, Titan Peptide Laboratory · Reno, NV
                  </div>
                </div>
              </article>

              <aside className="lg:col-span-5">
                <div className="lg:sticky lg:top-24">
                  <figure className="rounded-[1.8rem] border border-[#d7dfd6] bg-[linear-gradient(180deg,#fffdfa_0%,#f2ede5_100%)] p-8 text-[#13211c] shadow-[0_26px_70px_-40px_rgba(19,33,28,0.35)]">
                    <div className="flex items-baseline justify-between border-b border-[#d8dfd7] pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f7b75]">
                      <span>Laboratory masthead</span>
                      <span>EST. 2019</span>
                    </div>

                    <h3 className="mt-6 font-serif text-3xl leading-[1.05] text-[#13211c]">
                      Titan Peptide
                      <br />
                      <span className="italic text-[#6a7771]">Laboratory</span>
                    </h3>

                    <dl className="mt-8 space-y-4 text-sm">
                      <Row k="Founded" v="2019 · Reno, NV" />
                      <Row k="Floor team" v="7" />
                      <Row k="Reject threshold" v="< 99.0% purity" highlight />
                      <Row k="Release rule" v="Batch-matched COA" />
                      <Row k="Audit cycle" v="Twice / year" />
                      <Row k="Independent retest" v="ISO 17025 partner" />
                      <Row k="Funding" v="Customer-backed" />
                    </dl>

                    <div className="mt-8 border-t border-[#d8dfd7] pt-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f7b75]">
                        Discipline
                      </div>
                      <div className="mt-2 font-serif text-lg italic text-[#41504a]">
                        The certificate stays attached to the batch.
                      </div>
                    </div>
                  </figure>

                  <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7d8983]">
                    Plate A — Laboratory masthead, for reference only.
                  </figcaption>
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
    <div className="grid grid-cols-[140px_1fr] items-baseline gap-4 border-b border-[#d9e0d7] pb-2">
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#738079]">
        {k}
      </dt>
      <dd
        className={`font-mono tabular-nums ${highlight ? "text-base font-semibold text-[#13211c]" : "text-xs text-[#53615b]"}`}
        dangerouslySetInnerHTML={{ __html: v }}
      />
    </div>
  );
}
