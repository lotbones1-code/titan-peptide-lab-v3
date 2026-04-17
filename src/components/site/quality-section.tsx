import { FlaskConical, ShieldCheck, FileCheck2, Package } from "lucide-react";

const PILLARS = [
  {
    icon: FlaskConical,
    title: "HPLC-verified ≥99% purity",
    body: "Every batch is tested by third-party HPLC analysis. We publish the chromatogram with every order.",
  },
  {
    icon: FileCheck2,
    title: "Batch-matched Certificate of Analysis",
    body: "Your COA matches the exact batch number on your vial. No stock photos. No substitutions.",
  },
  {
    icon: ShieldCheck,
    title: "Research-use compliance",
    body: "Shipped as research compounds. Clearly labeled, strictly for in-vitro and laboratory use.",
  },
  {
    icon: Package,
    title: "Discreet, insulated shipping",
    body: "Vacuum-sealed, temperature-stable packaging. Plain outer carton. Tracked 2–3 day delivery.",
  },
];

export function QualitySection() {
  return (
    <section id="quality" className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Why researchers switch to Titan
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            Most peptide vendors cut corners on purity, paperwork, or delivery.
            We don&apos;t.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-emerald-500/30 hover:bg-white/[0.04]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-600/10 ring-1 ring-emerald-500/20">
                <Icon className="h-5 w-5 text-emerald-300" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
