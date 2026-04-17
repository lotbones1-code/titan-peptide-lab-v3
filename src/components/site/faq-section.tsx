const FAQS = [
  {
    q: "How do nasal sprays compare to injections?",
    a: "Nasal mucosa absorbs Selank, Semax, PT-141, and BPC-157 with bioavailability in the 40–60% range — close enough to subcutaneous for most research protocols, without the sharps. Injectable vials remain available when a study design requires SC delivery.",
  },
  {
    q: "What does the certificate actually contain?",
    a: "The exact chromatogram from your batch (HPLC-UV at 220 nm), measured purity to two decimals, ESI-MS molecular weight, endotoxin (LAL) result, residual solvent panel, moisture content, and the synthesis & test dates. Signed by the QA lead. Printed, in the box.",
  },
  {
    q: "How do I pay?",
    a: "Crypto: BTC, ETH, USDC (ERC-20), SOL, USDC (Solana). Wire/ACH for orders over $500. Crypto orders ship the same day funds confirm.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes — worldwide. Discreet outer carton, insulated inner with phase-change pack. You handle the import paperwork on your end; we handle stability in transit.",
  },
  {
    q: "How long do nasal sprays stay stable?",
    a: "Unopened, refrigerated (2–8 °C): 6 months from fill date. Opened, refrigerated: 30–45 days. Each unit ships with stability guidance and a desiccant.",
  },
  {
    q: "What discount codes are active?",
    a: "FIRST10 — 10% off your first order. BULK15 — 15% off three or more items. TITAN20 — 20% off when you cross $250. VIP25 — 25%, applied automatically at the third repeat order.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="border-b border-white/8 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <header className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              §04 — Questions
            </div>
            <p className="mt-6 max-w-xs text-sm leading-[1.7] text-zinc-400">
              Email{" "}
              <a
                href="mailto:hello@titanpeptidelab.com"
                className="text-zinc-200 underline decoration-zinc-700 underline-offset-[6px] hover:text-[var(--signature)] hover:decoration-[var(--signature)]"
              >
                hello@titanpeptidelab.com
              </a>{" "}
              for anything not covered here. Replies inside 24 hours, usually
              from the QA bench.
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[0.98] tracking-[-0.02em] text-zinc-50 text-pretty">
              Things people{" "}
              <em className="font-serif italic text-zinc-300">ask</em>.
            </h2>

            <dl className="mt-12">
              {FAQS.map((f, i) => (
                <details
                  key={f.q}
                  className="group border-t border-zinc-800 [&_summary::-webkit-details-marker]:hidden last-of-type:border-b"
                >
                  <summary className="flex cursor-pointer items-baseline justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signature)] focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-xl leading-snug text-zinc-50">
                        {f.q}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="font-serif text-2xl text-zinc-500 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <dd className="pb-8 pl-[3.25rem] pr-12 text-sm leading-[1.75] text-zinc-400">
                    {f.a}
                  </dd>
                </details>
              ))}
            </dl>
          </div>
        </header>
      </div>
    </section>
  );
}
