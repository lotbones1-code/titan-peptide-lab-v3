import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    title: "Lot intake",
    body: "Each fill receives a Titan lot code before it ever becomes a sellable unit. That lot travels through the bottle label, internal record, certificate, and order handoff.",
  },
  {
    n: "02",
    title: "Purity gate",
    body: "Release threshold is HPLC purity of at least 99%. Method date, chromatogram reference, and reviewer initials stay tied to the lot instead of getting abstracted into a generic PDF.",
  },
  {
    n: "03",
    title: "COA match",
    body: "The certificate references the same lot that leaves the bench. Titan does not rotate one representative COA across multiple batches just to make the page feel complete.",
  },
  {
    n: "04",
    title: "Dispatch window",
    body: "Temperature-sensitive orders are packed for cold-chain handling and pushed out inside a 24-hour dispatch window, with tracking and matching paperwork tied back to the order.",
  },
];

const METRICS = [
  ["≥99%", "HPLC release threshold"],
  ["1:1", "Bottle-to-COA match"],
  ["24h", "Cold-chain dispatch target"],
  ["QR", "Certificate lookup path"],
];

const DOCUMENTS = [
  {
    title: "Certificate packet",
    body: "Lot code, purity result, test date, and method reference packaged with the order record instead of hidden behind support emails.",
  },
  {
    title: "Dispatch note",
    body: "Cold-chain handling language, tracking timing, and payment confirmation all sit in the same operational handoff.",
  },
  {
    title: "Catalog integrity",
    body: "Titan keeps the nasal spray range tight so each SKU can carry real merchandising, QA language, and a clear place in the lineup.",
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
                Titan is built like a
                <br />
                narrow catalog with
                <br />
                <em className="not-italic text-[#8fd0b5]">real release discipline.</em>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 lg:self-end">
              {METRICS.map(([value, label]) => (
                <div key={label} className="bg-[#0f1110] p-6">
                  <p className="font-serif text-[2.2rem] leading-none tracking-[-0.04em] text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-[11px] leading-[1.6] text-white/45">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-6 bg-[#0f1110] p-8">
                <span className="font-serif text-[1rem] leading-none tracking-[-0.02em] text-white/25">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-serif text-[1.5rem] leading-[1.05] tracking-[-0.035em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.8] text-white/58">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 lg:p-10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8fd0b5]">
                What the buyer actually sees
              </span>
              <h3 className="mt-4 font-serif text-[2.25rem] leading-[0.98] tracking-[-0.04em] text-white">
                The page, the paperwork, and the dispatch story should agree.
              </h3>
              <p className="mt-4 max-w-[48ch] text-[14px] leading-[1.85] text-white/62">
                That is the standard Titan is trying to signal. Not fake lab glamour, not generic “premium” props, just a tighter operating story from merchandising to release paperwork.
              </p>
            </div>

            <div className="grid gap-4">
              {DOCUMENTS.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-[#131816] p-6">
                  <h4 className="font-serif text-[1.45rem] leading-[1.02] tracking-[-0.03em] text-white">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-[13px] leading-[1.8] text-white/58">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
