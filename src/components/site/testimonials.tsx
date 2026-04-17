import { BadgeCheck } from "lucide-react";
import { Reveal } from "./reveal";

const TESTIMONIALS = [
  {
    quote: "COA matched the batch. That's all I needed to see.",
    name: "Dr. M.R.",
    role: "Researcher",
  },
  {
    quote: "Selank cleared my morning fog in three days.",
    name: "J.K.",
    role: "Verified buyer",
  },
  {
    quote: "Cold-chain packaging was intact. Quality you can feel.",
    name: "A.T.",
    role: "Verified buyer",
  },
  {
    quote:
      "I compared three labs. Titan was the only one with real HPLC data.",
    name: "M.S.",
    role: "PhD",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-white/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase text-[#0F9F7A]">
              Trust & Testimonials
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#E8ECF0] md:text-5xl">
              Proof first. Protocol second.
            </h2>
          </div>
        </Reveal>

        <Reveal className="mt-12 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x gap-4">
            {TESTIMONIALS.map((item) => (
              <figure
                key={`${item.name}-${item.role}`}
                className="min-w-[82%] snap-start rounded-lg border border-white/10 bg-white/[0.05] p-6 sm:min-w-[420px]"
              >
                <blockquote className="text-xl leading-8 text-[#E8ECF0]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <div>
                    <p className="font-medium text-[#E8ECF0]">{item.name}</p>
                    <p className="mt-1 text-sm text-[#8B95A3]">{item.role}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-lg border border-[#0F9F7A]/25 bg-[#0F9F7A]/10 px-2.5 py-1 text-xs text-[#BDECDD]">
                    <BadgeCheck className="size-3.5" />
                    Verified buyer
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
