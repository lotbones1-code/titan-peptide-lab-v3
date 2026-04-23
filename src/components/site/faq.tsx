import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

const FAQS = [
  {
    question: "How do you verify purity?",
    answer:
      "Every batch is third-party HPLC tested to ≥99%. The COA is tied to the lot linked with your order, not a generic certificate library page.",
  },
  {
    question: "How fast do you ship?",
    answer:
      "Manual fulfillment is completed within 24 hours after payment confirmation. Tracking is sent once the package is packed with cold-chain handling.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Checkout is crypto-only. We support BTC, ETH, USDC (ERC-20), SOL, and USDC (SPL).",
  },
  {
    question: "Are these for human use?",
    answer:
      "No. All products are sold for laboratory research purposes only and are not intended for human consumption.",
  },
  {
    question: "Do you accept returns?",
    answer:
      "Unopened items within 14 days. Contact support@titanpeptidelab.com for an RMA.",
  },
  {
    question: "How should peptides be stored?",
    answer:
      "Refrigerate at 2–8°C. Storage guidance and stability notes are provided alongside the batch documentation.",
  },
];

const NOTES = [
  {
    title: "Before payment",
    body: "The buyer should already know which rail to use, what the paperwork path looks like, and how dispatch is supposed to work.",
  },
  {
    title: "After payment",
    body: "Manual review, lot matching, and tracking should follow the same order record instead of fragmenting into support back-and-forth.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-b border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-[rgb(15_22_19/8%)] bg-white p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#1e6f58]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                  FAQ
                </span>
              </div>
              <h2 className="mt-6 max-w-[11ch] font-serif text-[clamp(2.3rem,4.4vw,3.8rem)] leading-[0.95] tracking-[-0.04em] text-[#0f1613]">
                The final questions should feel operational, not fluffy.
              </h2>
              <p className="mt-5 max-w-[48ch] text-[14px] leading-[1.85] text-[#5c6762]">
                Crisp answers on purity, shipping, payment, storage, and how batch paperwork actually tracks with the order.
              </p>

              <div className="mt-8 grid gap-4">
                {NOTES.map((item) => (
                  <div key={item.title} className="rounded-[1.4rem] border border-[rgb(15_22_19/8%)] bg-[#f7f6f1] p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-[13px] leading-[1.8] text-[#5c6762]">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/lab-testing" className="inline-flex items-center rounded-full border border-[rgb(15_22_19/10%)] bg-white px-3 py-2 text-[11px] font-medium text-[#0f1613] transition-colors hover:border-[#1e6f58]/30 hover:text-[#1e6f58]">
                  Review lab system
                </Link>
                <a href="/specimen-coa.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-[rgb(15_22_19/10%)] bg-white px-3 py-2 text-[11px] font-medium text-[#0f1613] transition-colors hover:border-[#1e6f58]/30 hover:text-[#1e6f58]">
                  Open specimen COA
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-[rgb(15_22_19/8%)] bg-white">
              <Accordion
                type="single"
                collapsible
                className="divide-y divide-[rgb(15_22_19/6%)]"
              >
                {FAQS.map((item) => (
                  <AccordionItem
                    key={item.question}
                    value={item.question}
                    className="border-0 px-6 sm:px-8"
                  >
                    <AccordionTrigger className="text-left text-[14px] font-medium text-[#0f1613]">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="max-w-2xl pb-6 text-[13.5px] leading-[1.8] text-[#5c6762]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
