import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata = {
  title: "Lab Testing — Titan Peptide Laboratory",
  description:
    "HPLC purity verification, ISO 17025 third-party retesting, endotoxin, heavy metals, and sterility. What every batch is tested for, and how the certificate is produced.",
};

const TESTS = [
  {
    n: "01",
    name: "Identity",
    method: "ESI-MS (positive mode)",
    spec: "Observed mass within ±0.5 m/z of theoretical [M+H]",
    body: "Confirms the compound in the bottle is the compound on the label. Purity of the wrong molecule is still a failed batch.",
  },
  {
    n: "02",
    name: "Purity",
    method: "HPLC-UV, 220 nm (C18, 0.1% TFA gradient)",
    spec: "≥ 98.0% area, internal release threshold 99.0%",
    body: "The number most buyers look for first. Titan publishes the exact run tied to the lot instead of a generic certificate library file.",
  },
  {
    n: "03",
    name: "Sterility",
    method: "USP <71> direct inoculation",
    spec: "No growth, 14 days, TSB + FTM",
    body: "Applied to nasal sprays and reconstituted liquids. The read is checked independently before release is signed.",
  },
  {
    n: "04",
    name: "Endotoxin",
    method: "LAL, kinetic chromogenic",
    spec: "< 5 EU/mg",
    body: "A clean chromatogram on a pyrogenic lot is still a failed batch. This is one of the filters that separates a real QA operation from a cosmetic one.",
  },
  {
    n: "05",
    name: "Heavy metals",
    method: "ICP-MS (Pb, Cd, As, Hg)",
    spec: "Within ICH Q3D Option 1 limits",
    body: "Handled with an independent ISO 17025 partner. Titan does not fake owning instrumentation it does not operate in-house.",
  },
  {
    n: "06",
    name: "Residual solvents",
    method: "Headspace GC-FID",
    spec: "ICH Q3C class 2 solvents at report threshold",
    body: "DMF, methanol, acetonitrile, and related residue checks are screened and recorded on the retained lot documentation.",
  },
];

export default function LabTestingPage() {
  return (
    <>
      <Header />
      <main className="bg-[linear-gradient(180deg,#fbf8f2_0%,#f5efe6_56%,#efe8dd_100%)] text-[#13211c]">
        <section className="border-b border-[#dde4da] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#718079]">
              §L — Lab Testing
            </div>

            <div className="mt-12 grid gap-x-12 gap-y-16 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h1 className="font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.96] tracking-[-0.04em] text-[#13211c] text-pretty">
                  Six tests, two laboratories, <em className="not-italic text-[#1e6f58]">one release standard</em>.
                </h1>

                <p className="mt-8 max-w-xl text-base leading-8 text-[#586761]">
                  Every batch is characterized in-house first, then checked against
                  an independent ISO 17025 workflow where relevant. If the reads disagree
                  beyond stated method tolerance, the batch is held. The point is not to
                  print an impressive certificate, it is to make the certificate believable.
                </p>

                <ol className="mt-12 space-y-10">
                  {TESTS.map((t) => (
                    <li
                      key={t.n}
                      className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-[#d8dfd7] pt-6"
                    >
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#1e6f58] tabular-nums">
                        {t.n}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl leading-tight text-[#13211c]">
                          {t.name}
                        </h3>
                        <dl className="mt-3 grid grid-cols-[90px_1fr] gap-x-4 gap-y-1 text-xs">
                          <dt className="font-mono uppercase tracking-[0.16em] text-[#738079]">
                            Method
                          </dt>
                          <dd className="font-mono text-[#53615b]">{t.method}</dd>
                          <dt className="font-mono uppercase tracking-[0.16em] text-[#738079]">
                            Spec
                          </dt>
                          <dd className="font-mono text-[#53615b]">{t.spec}</dd>
                        </dl>
                        <p className="mt-3 max-w-md text-sm leading-7 text-[#5a6861]">
                          {t.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-16 border-t border-[#d8dfd7] pt-8">
                  <h2 className="font-serif text-3xl leading-snug text-[#13211c]">
                    Batch tracking.
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-8 text-[#586761]">
                    Every bottle leaves with a lot number of the form {" "}
                    <span className="font-mono text-[#203129]">TPL-YYMM-[A-Z]</span>.
                    That same lot appears on the bottle, the order record, and the certificate.
                    If you lost the printed copy, email qa@titanpeptidelab.com with the lot number
                    and a signed PDF can be reissued.
                  </p>
                </div>
              </div>

              <aside className="lg:col-span-5">
                <div className="lg:sticky lg:top-24">
                  <figure className="rounded-[1.85rem] border border-[#d7dfd6] bg-[linear-gradient(180deg,#fffdfa_0%,#f2ede5_100%)] p-8 text-[#13211c] shadow-[0_28px_70px_-42px_rgba(19,33,28,0.34)]">
                    <div className="flex items-baseline justify-between border-b border-[#d8dfd7] pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f7b75]">
                      <span>Certificate of Analysis</span>
                      <span>TPL-2604-C</span>
                    </div>

                    <h3 className="mt-6 font-serif text-3xl leading-[1.05] text-[#13211c]">
                      Semax
                      <br />
                      <span className="text-[#6a7771]">Lyophilized · 30 mg</span>
                    </h3>

                    <dl className="mt-8 space-y-4 text-sm">
                      <Row k="Identity (MS)" v="813.4 m/z [M+H] ✓" />
                      <Row k="Purity (area %)" v="99.61" highlight />
                      <Row k="Sterility" v="No growth, 14 d" />
                      <Row k="Endotoxin (LAL)" v="< 5 EU/mg" />
                      <Row k="Heavy metals" v="Within ICH Q3D" />
                      <Row k="Residual solvents" v="< report threshold" />
                      <Row k="Synthesized" v="2026-04-02" />
                      <Row k="Tested" v="2026-04-06 · 2026-04-08" />
                    </dl>

                    <div className="mt-8 border-t border-[#d8dfd7] pt-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f7b75]">
                        Released by
                      </div>
                      <div className="mt-2 font-serif text-lg italic text-[#45534d]">
                        Dr. M. Voss, QA Lead
                      </div>
                    </div>
                  </figure>

                  <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7d8983]">
                    Plate L — Specimen COA, batch TPL-2604-C.
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
      <dd className={`font-mono tabular-nums ${highlight ? "text-base font-semibold text-[#13211c]" : "text-xs text-[#53615b]"}`}>
        {v}
      </dd>
    </div>
  );
}
