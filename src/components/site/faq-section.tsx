const FAQS = [
  {
    q: "How do the nasal sprays compare to injections?",
    a: "Nasal sprays deliver peptides across the nasal mucosa with good bioavailability and no needles. For many research compounds (Selank, Semax, PT-141, BPC-157) intranasal is a well-established route. Injectable vials remain available for protocols that require subcutaneous delivery.",
  },
  {
    q: "Are your products third-party tested?",
    a: "Yes. Every batch is HPLC-tested by an independent lab. You receive a batch-matched Certificate of Analysis (COA) with every order.",
  },
  {
    q: "How do I pay?",
    a: "Crypto (BTC, ETH, USDC on ERC-20, SOL, USDC on Solana). Wire/ACH for wholesale orders over $500. Crypto payments ship the same day funds confirm.",
  },
  {
    q: "Do you ship internationally?",
    a: "We ship worldwide. Packaging is discreet, insulated, and temperature-stable. Customer is responsible for local import regulations.",
  },
  {
    q: "What does the discount code do?",
    a: "FIRST10 = 10% off your first order. BULK15 = 15% off 3+ items. TITAN20 = 20% off $250+. VIP25 = 25% off for returning VIP customers.",
  },
  {
    q: "How long do nasal sprays stay stable?",
    a: "Unopened, refrigerated: 6 months. Opened, refrigerated: 30–45 days. Each unit ships with stability guidance and a desiccant pack.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Frequently asked
        </h2>
        <div className="mt-12 divide-y divide-white/5 border-y border-white/5">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group py-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-medium text-white">
                <span>{f.q}</span>
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
