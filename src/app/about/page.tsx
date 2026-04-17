import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata = {
  title: "About — Titan Peptide Laboratory",
  description:
    "Founded in research, built for integrity. The origin, philosophy, and sourcing commitments behind Titan Peptide Laboratory.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-white/8 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              §A — About the Laboratory
            </div>

            <div className="mt-12 grid gap-x-12 gap-y-16 lg:grid-cols-12">
              {/* Left: editorial body */}
              <article className="lg:col-span-7">
                <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[0.92] tracking-[-0.02em] text-zinc-50 text-pretty">
                  Founded in research,
                  <br />
                  <em className="italic text-zinc-400">built for integrity</em>.
                </h1>

                <div className="mt-12 space-y-7 text-base leading-[1.8] text-zinc-300">
                  <p className="font-serif text-2xl italic leading-snug text-zinc-200">
                    We started in 2019, in a converted analytical suite in Reno,
                    Nevada &mdash; two chemists, one QA lead, a second-hand Agilent
                    1260, and a conviction that the research peptide market had
                    stopped taking purity seriously.
                  </p>

                  <p>
                    At the time, the category had drifted. Vendors were
                    shipping boutique labels around anonymous bulk powder, and
                    the &ldquo;certificate of analysis&rdquo; enclosed was usually
                    a stock PDF dated a year earlier. Researchers had no way to
                    verify that the chromatogram in the envelope corresponded
                    to the vial in the box. That gap &mdash; between the document and
                    the compound &mdash; is the thing we were built to close.
                  </p>

                  <p>
                    Titan Peptide Laboratory operates on one discipline:{" "}
                    <span className="text-[var(--signature)]">
                      every bottle ships with the chromatogram from its own
                      batch
                    </span>
                    . Same lot number on the vial, the certificate, and the
                    outbox log. No representative samples. No inherited tests.
                    No rounded purity figures. When the analyzer reads 99.42%,
                    the certificate reads 99.42% &mdash; not &ldquo;&gt;99%&rdquo;.
                  </p>

                  <h2 className="pt-8 font-serif text-3xl font-normal leading-snug text-zinc-50">
                    The philosophy.
                  </h2>

                  <p>
                    We take a narrow view of what a peptide vendor should do.
                    We synthesize, we verify, we dispatch. We don&rsquo;t
                    produce clinical claims, we don&rsquo;t market to patient
                    populations, and we don&rsquo;t publish dosing protocols.
                    Everything leaves this laboratory labeled &ldquo;for in-vitro
                    research use only&rdquo; because that is the only accurate
                    description of what it is.
                  </p>

                  <p>
                    The research community is under-served by theatre and
                    over-served by hedge. The editorial voice you read on this
                    site &mdash; plain, verifiable, unhurried &mdash; is the voice of the
                    bench. If you&rsquo;ve ever stared at a certificate wondering
                    whether the numbers on it had anything to do with the
                    powder in front of you, this laboratory is for you.
                  </p>

                  <h2 className="pt-8 font-serif text-3xl font-normal leading-snug text-zinc-50">
                    Sourcing &amp; the supply chain.
                  </h2>

                  <p>
                    We synthesize in-house for our nasal spray line and partner
                    with a single GMP-audited manufacturing facility for bulk
                    lyophilized API. That partner has held an unbroken ISO
                    9001 registration since 2011 and is audited twice a year by
                    our QA lead in person. We don&rsquo;t rotate suppliers for
                    cost reasons. Consistency of input is a precondition of
                    consistency of output.
                  </p>

                  <p>
                    Every incoming lot is quarantined, re-identified by
                    HPLC-UV and ESI-MS, and cross-checked against the
                    supplier&rsquo;s certificate before it&rsquo;s released to
                    fill. If the two disagree by more than the method&rsquo;s
                    stated uncertainty, the lot is held and the supplier is
                    notified. That has happened three times in four years.
                    None of that material reached a customer.
                  </p>

                  <h2 className="pt-8 font-serif text-3xl font-normal leading-snug text-zinc-50">
                    Who we are.
                  </h2>

                  <p>
                    The team is small by design: four chemists, one QA lead
                    who signs every release, one operations manager, and a
                    part-time analytical consultant who runs the ISO 17025
                    retests. We keep it that way because every person on the
                    floor should be able to look at a chromatogram and tell
                    you, without checking notes, which column it came off and
                    what the peak at 3.8 minutes is.
                  </p>

                  <p>
                    We are not venture-backed. We&rsquo;re not trying to scale
                    into a consumer brand. The laboratory is customer-funded,
                    which means the only constituency we answer to is the
                    researcher who just opened the box.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-16 border-t border-zinc-800 pt-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    Signed
                  </div>
                  <div className="mt-3 font-serif text-3xl italic text-zinc-200">
                    Dr. M. Voss
                  </div>
                  <div className="mt-1 text-sm text-zinc-500">
                    QA Lead, Titan Peptide Laboratory &middot; Reno, NV
                  </div>
                </div>
              </article>

              {/* Right: paper COA artifact — sticky */}
              <aside className="lg:col-span-5">
                <div className="lg:sticky lg:top-24">
                  <figure className="bg-[var(--paper)] p-8 text-[var(--paper-foreground)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
                    <div className="flex items-baseline justify-between border-b border-zinc-300 pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                      <span>Laboratory Masthead</span>
                      <span>EST. 2019</span>
                    </div>

                    <h3 className="mt-6 font-serif text-3xl leading-[1.05] text-zinc-900">
                      Titan Peptide
                      <br />
                      <span className="italic text-zinc-500">Laboratory</span>
                    </h3>

                    <dl className="mt-8 space-y-4 text-sm">
                      <Row k="Founded" v="2019 &middot; Reno, NV" />
                      <Row k="Floor team" v="7" />
                      <Row k="Reject threshold" v="< 99.0% purity" highlight />
                      <Row k="Release rule" v="Batch-matched COA" />
                      <Row k="Audit cycle" v="Twice / year, in person" />
                      <Row k="ISO 17025 partner" v="Independent retest" />
                      <Row k="Investor type" v="Customer-funded" />
                    </dl>

                    <div className="mt-8 border-t border-zinc-300 pt-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                        Discipline
                      </div>
                      <div className="mt-2 font-serif text-lg italic text-zinc-700">
                        The certificate is the product.
                      </div>
                    </div>
                  </figure>

                  <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    Plate A &mdash; Laboratory masthead, for reference only.
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
    <div className="grid grid-cols-[140px_1fr] items-baseline gap-4 border-b border-zinc-200 pb-2">
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
        {k}
      </dt>
      <dd
        className={`font-mono tabular-nums ${highlight ? "text-base font-semibold text-zinc-900" : "text-xs text-zinc-700"}`}
        dangerouslySetInnerHTML={{ __html: v }}
      />
    </div>
  );
}
