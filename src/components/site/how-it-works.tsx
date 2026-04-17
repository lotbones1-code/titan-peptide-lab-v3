import { FileCheck2, PackageCheck, Send, SprayCan } from "lucide-react";
import { Reveal } from "./reveal";

const STEPS = [
  {
    icon: SprayCan,
    title: "Select your peptide",
    text: "Choose a nasal spray or stack.",
  },
  {
    icon: Send,
    title: "Send crypto",
    text: "BTC, ETH, USDC ERC-20, or SOL / USDC SPL.",
  },
  {
    icon: PackageCheck,
    title: "Ships in 24h",
    text: "Cold-chain handling with tracking.",
  },
  {
    icon: FileCheck2,
    title: "COA follows",
    text: "Certificate matched to the bottle lot.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-white/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
            <p className="font-mono text-xs uppercase text-[#77E1C3]">
              Order flow
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#E8ECF0] md:text-5xl">
              From selection to batch-matched delivery.
            </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#8B95A3]">
              Batch proof stays attached to the order from checkout through
              delivery.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.04}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <div className="flex items-center justify-between">
                  <Icon className="size-6 text-[#0F9F7A]" />
                  <span className="text-sm text-[#8B95A3]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-[#E8ECF0]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#8B95A3]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
