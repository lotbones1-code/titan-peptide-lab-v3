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
    body: "Confirms the molecule in the vial is the molecule on the label. Run before purity, because purity of the wrong compound is irrelevant.",
  },
  {
    n: "02",
    name: "Purity",
    method: "HPLC-UV, 220 nm (C18, 0.1% TFA gradient)",
    spec: "≥ 98.0% area (release threshold: 99.0%)",
    body: "The single figure most researchers look at. We reject anything under 99.0% even though the stated spec is 98.0%. The chromatogram in your envelope is the exact run from your lot.",
  },
  {
    n: "03",
    name: "Sterility",
    method: "USP <71> direct inoculation",
    spec: "No growth, 14 days, TSB + FTM",
    body: "Applied to nasal sprays and reconstituted injectables. Growth media held at 22.5 °C and 32.5 °C, read by the analyst and the QA lead independently.",
  },
  {
    n: "04",
    name: "Endotoxin",
    method: "LAL, kinetic chromogenic",
    spec: "< 5 EU/mg",
    body: "The spec that separates laboratories from shadow vendors. A clean chromatogram on a pyrogenic lot is still a failing batch.",
  },
  {
    n: "05",
    name: "Heavy metals",
    method: "ICP-MS (Pb, Cd, As, Hg)",
    spec: "Within ICH Q3D Option 1 limits",
    body: "Contract-tested by our ISO 17025 partner. We don&rsquo;t own an ICP-MS, and we don&rsquo;t pretend to.",
  },
  {
    n: "06",
    name: "Residual solvents",
    method: "Headspace GC-FID",
    spec: "ICH Q3C Class 2 solvents at report threshold",
    body: "DMF, methanol, acetonitrile &mdash; the usual suspects from SPPS cleavage and work-up. Every lot screened; values printed on the COA.",
  },
];

export default function LabTestingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-white/8 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              §L &mdash; Lab Testing
            </div>

            <div className="mt-12 grid gap-x-12 gap-y-16 lg:grid-cols-12">
              {/* Left: narrative */}
              <div className="lg:col-span-7">
                <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-normal leading-[0.98] tracking-[-0.02em] text-zinc-50 text-pretty">
                  Six tests, two laboratories,{" "}
                  <em className="not-italic text-[var(--signature)]">one
                  signature</em>.
                </h1>

                <p className="mt-8 max-w-xl text-base leading-[1.7] text-zinc-400">
                  Every batch is characterized in-house on day one, re-tested
                  by an ISO 17025-accredited contract lab on day three, and
                  released on day four. If the two analyses disagree by more
                  than the method&rsquo;s stated uncertainty, the batch is
                  held. The certificate in your box is the lower of the two
                  purity readings.
                </p>

                <ol className="mt-12 space-y-10">
                  {TESTS.map((t) => (
                    <li
                      key={t.n}
                      className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-zinc-800 pt-6"
                    >
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--signature)] tabular-nums">
                        {t.n}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl font-normal leading-tight text-zinc-50">
                          {t.name}
                        </h3>
                        <dl className="mt-3 grid grid-cols-[90px_1fr] gap-x-4 gap-y-1 text-xs">
                          <dt className="font-mono uppercase tracking-[0.16em] text-zinc-600">
                            Method
                          </dt>
                          <dd className="font-mono text-zinc-400">
                            {t.method}
                          </dd>
                          <dt className="font-mono uppercase tracking-[0.16em] text-zinc-600">
                            Spec
                          </dt>
                          <dd className="font-mono text-zinc-400">{t.spec}</dd>
                        </dl>
                        <p
                          className="mt-3 max-w-md text-sm leading-[1.7] text-zinc-400"
                          dangerouslySetInnerHTML={{ __html: t.body }}
                        />
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-16 border-t border-zinc-800 pt-8">
                  <h2 className="font-serif text-3xl font-normal leading-snug text-zinc-50">
                    Batch tracking.
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-[1.7] text-zinc-400">
                    Every bottle leaves with a lot number of the form{" "}
                    <span className="font-mono text-zinc-200">
                      TPL-YYMM-[A-Z]
                    </span>
                    . That lot number appears on the vial, the outer carton,
                    the certificate, and the dispatch log. Lost your paper
                    copy? Email{" "}
                    <a
                      href="mailto:qa@titanpeptidelab.com"
                      className="text-zinc-200 underline decoration-zinc-700 underline-offset-[6px] hover:text-[var(--signature)] hover:decoration-[var(--signature)]"
                    >
                      qa@titanpeptidelab.com
                    </a>{" "}
                    with the lot number; we re-issue a signed PDF inside a
                    business day.
                  </p>
                </div>
              </div>

              {/* Right: sticky COA artifact */}
              <aside className="lg:col-span-5">
                <div className="lg:sticky lg:top-24">
                  <figure className="bg-[var(--paper)] p-8 text-[var(--paper-foreground)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
                    <div className="flex items-baseline justify-between border-b border-zinc-300 pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                      <span>Certificate of Analysis</span>
                      <span>TPL-2604-C</span>
                    </div>

                    <h3 className="mt-6 font-serif text-3xl leading-[1.05] text-zinc-900">
                      Semax
                      <br />
                      <span className="text-zinc-500">
                        Lyophilized &middot; 30 mg
                      </span>
                    </h3>

                    <dl className="mt-8 space-y-4 text-sm">
                      <Row k="Identity (MS)" v="813.4 m/z [M+H] &checkmark;" />
                      <Row k="Purity (area %)" v="99.61" highlight />
                      <Row k="Sterility" v="No growth, 14 d" />
                      <Row k="Endotoxin (LAL)" v="< 5 EU/mg" />
                      <Row k="Heavy metals" v="Within ICH Q3D" />
                      <Row k="Residual solvents" v="< report threshold" />
                      <Row k="Synthesized" v="2026-04-02" />
                      <Row
                        k="Tested"
                        v="2026-04-06 (in-house) &middot; 2026-04-08 (ISO 17025)"
                      />
                    </dl>

                    <div className="mt-8 border-t border-zinc-300 pt-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                        Released by
                      </div>
                      <div className="mt-2 font-serif text-lg italic text-zinc-700">
                        Dr. M. Voss, QA Lead
                      </div>
                    </div>
                  </figure>

                  <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    Plate L &mdash; Specimen COA, batch TPL-2604-C.
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
