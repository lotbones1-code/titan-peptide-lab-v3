import { FileCheck2, PackageCheck, Send, SprayCan } from "lucide-react";
import { Reveal } from "./reveal";

const STEPS = [
  {
    icon: SprayCan,
    title: "Pick your spray",
    text: "Choose the compound or stack that fits the protocol you are running.",
  },
  {
    icon: Send,
    title: "Confirm payment",
    text: "Payment handoff supports BTC, ETH, USDC ERC-20, SOL, and USDC SPL.",
  },
  {
    icon: PackageCheck,
    title: "Packed within 24h",
    text: "Liquid orders are prepared for cold-chain handling before dispatch.",
  },
  {
    icon: FileCheck2,
    title: "Receive proof",
    text: "Tracking and batch-matched COA stay tied to the order record.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-[#dde4da] bg-[#f4efe8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6b7972]">
                Order flow
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.5rem,4.5vw,4.3rem)] leading-[0.96] tracking-[-0.04em] text-[#13211c]">
                The buying experience should feel clean, not underground.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-[#55645d]">
              That means clearer steps, batch language that makes sense, and a
              stronger sense of confidence from first click to delivered order.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.04}>
              <div className="h-full rounded-[1.5rem] border border-[#d9e0d7] bg-white/84 p-6 shadow-[0_18px_50px_-38px_rgba(19,33,28,0.3)]">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-full bg-[#edf4ef] text-[#2d7b62]">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-[#7b8781]">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-serif text-[1.9rem] leading-[1.02] tracking-[-0.03em] text-[#13211c]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#596761]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
