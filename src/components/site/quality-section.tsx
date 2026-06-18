import { Reveal } from "./reveal";

const STANDARDS = [
  {
    n: "01",
    title: "Lot-tested & documented",
    body: "Each lot is released against in-house analytical checks — an HPLC-UV purity read and a mass-spec identity check — documented on the lot-release sheet. Release target is ≥99% purity; lots below target are held. The sheet carries the lot code etched on your bottle — same code, same batch, no rotating a single result across SKUs.",
    span: "lg:col-span-7",
  },
  {
    n: "02",
    title: "Lot-matched documentation",
    body: "The in-house release sheet for your lot ships in the box, referenced to the lot code on your bottle. If a release read fails the threshold the batch is held — not shipped. No independent third-party lot report is currently published for this lot.",
    span: "lg:col-span-5",
  },
  {
    n: "03",
    title: "Cold-chain shipping",
    body: "Temperature-sensitive orders are packed for cold-chain handling and dispatched within 24 hours. Tracking is sent as soon as the package leaves.",
    span: "lg:col-span-5",
  },
  {
    n: "04",
    title: "Tight catalog by design",
    body: "Eleven SKUs by design — six sprays, four vials, one paired stack. We keep the catalog small so every compound has dedicated research, dedicated documentation, and a dedicated handling protocol.",
    span: "lg:col-span-7",
  },
];

export function QualitySection() {
  return (
    <section
      id="quality"
      className="bg-[#0f1110] py-20 text-white lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Asymmetric editorial header — heading sits in left rail, lead text
            sits offset down-and-right in a narrower column. Breaks the
            centered-content pattern (per Elite Design playbook §Identity). */}
        <Reveal>
          <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-12">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8fd0b5]">
                Quality standard / 04 commitments
              </span>
              <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1] tracking-[-0.03em] text-white">
                Every lot documented.<br />Every claim tied to paperwork.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-white/60 lg:col-span-4 lg:col-start-9">
              You should be able to verify everything we claim before you buy.
              Here is exactly what we do — numbered, in the order it happens to
              your bottle.
            </p>
          </div>
        </Reveal>

        {/* Asymmetric staggered grid: 7/5 + 5/7 — each row breaks symmetry
            without losing the editorial rhythm. Side-bound numerals replace
            the centered-card aesthetic. */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-12">
          {STANDARDS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04} className={item.span}>
              <div className="flex h-full gap-6 bg-[#0f1110] p-7 lg:p-9">
                <span
                  aria-hidden
                  className="font-mono text-[11px] tracking-[0.18em] text-[#8fd0b5]/70"
                >
                  {item.n}
                </span>
                <div className="flex-1">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8fd0b5]">
                    {item.title}
                  </p>
                  <p className="mt-3 max-w-[44ch] text-[14px] leading-[1.8] text-white/60">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
