import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    title: "Lot intake",
    body: "Each fill receives a Titan lot code before it becomes sellable. That code follows the bottle label, internal record, certificate, and order handoff.",
  },
  {
    n: "02",
    title: "Purity gate",
    body: "Release threshold is HPLC purity of at least 99%, with method date and reviewer reference tied to the lot instead of abstracted into a generic library PDF.",
  },
  {
    n: "03",
    title: "COA match",
    body: "The certificate references the same lot that leaves the bench. Titan does not rotate one representative COA across multiple batches to fill the page.",
  },
  {
    n: "04",
    title: "Dispatch window",
    body: "Temperature-sensitive orders are packed for cold-chain handling and pushed out inside a 24-hour target window, with tracking tied back to the same order record.",
  },
];

const METRICS = [
  ["≥99%", "HPLC release threshold"],
  ["1:1", "Bottle-to-COA match"],
  ["24h", "Cold-chain dispatch target"],
];

const DOCUMENTS = [
  {
    title: "Certificate packet",
    body: "Lot code, purity result, test date, and method reference stay packaged with the order record instead of hiding behind support replies.",
  },
  {
    title: "Dispatch note",
    body: "Cold-chain handling language, tracking timing, and payment confirmation sit in the same operational handoff.",
  },
  {
    title: "Catalog discipline",
    body: "Titan keeps the spray range tight so each SKU can carry real merchandising, QA language, and a visible place in the lineup.",
  },
];

export function QualitySection() {
  return (
    <section
      id="quality"
      className="border-b border-[rgba(10,10,10,0.07)] bg-[#0f1110] py-28 text-white lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Operating standard
              </span>
              <h2 className="mt-5 font-serif text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.9] tracking-[-0.045em] text-white">
                Titan should read like a
                <br />
                narrow catalog with
                <br />
                <em className="not-italic text-[#8fd0b5]">real release discipline.</em>
              </h2>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8fd0b5]">
                Buyer-facing standard
              </p>
              <p className="mt-3 text-[13px] leading-[1.85] text-white/62">
                The page, the paperwork, and the dispatch story should agree. Not fake lab glamour, not generic premium theater, just a tighter operating signal from merchandising to release paperwork.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-[#121715] p-8 lg:p-10">
              <div className="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8fd0b5]">
                    Release path
                  </span>
                  <h3 className="mt-4 font-serif text-[2.4rem] leading-[0.95] tracking-[-0.045em] text-white">
                    What gets checked before a bottle moves.
                  </h3>
                </div>
                <div className="grid gap-px overflow-hidden rounded-[1.1rem] border border-white/10 bg-white/10 sm:grid-cols-3">
                  {METRICS.map(([value, label]) => (
                    <div key={label} className="bg-[#0f1110] px-5 py-4">
                      <p className="font-serif text-[1.9rem] leading-none tracking-[-0.04em] text-white">
                        {value}
                      </p>
                      <p className="mt-2 text-[11px] leading-[1.6] text-white/45">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-6">
                {STEPS.map((step) => (
                  <div
                    key={step.n}
                    className="grid gap-4 border-t border-white/10 pt-6 first:border-0 first:pt-0 sm:grid-cols-[72px_1fr]"
                  >
                    <span className="font-serif text-[1rem] leading-none tracking-[-0.02em] text-white/25">
                      {step.n}
                    </span>
                    <div>
                      <h4 className="font-serif text-[1.55rem] leading-[1.02] tracking-[-0.035em] text-white">
                        {step.title}
                      </h4>
                      <p className="mt-3 max-w-[54ch] text-[13.5px] leading-[1.85] text-white/58">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {DOCUMENTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="rounded-[1.6rem] border border-white/10 bg-[#131816] p-6 lg:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8fd0b5]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-[13.5px] leading-[1.85] text-white/58">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
