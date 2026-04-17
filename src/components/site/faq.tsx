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
      "Every batch is third-party HPLC tested by an ISO-17025 lab. COA is emailed with your order and matched to your batch number.",
  },
  {
    question: "How fast do you ship?",
    answer:
      "Manual fulfillment is completed within 24h after payment confirmation. Tracking is sent once the order is packed.",
  },
  {
    question: "Can I pay with crypto?",
    answer:
      "Yes. Checkout is crypto-only: BTC, ETH, USDC ERC-20, and SOL / USDC SPL.",
  },
  {
    question: "Are these for human use?",
    answer:
      "No. All products are for laboratory research purposes only. Not for human consumption.",
  },
  {
    question: "Do you accept returns?",
    answer: "Unopened items within 14 days. Contact support for an RMA.",
  },
  {
    question: "How do I store nasal spray peptides?",
    answer:
      "Refrigerate 2-8°C. COA includes recommended storage and stability data.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-b border-white/10 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <Reveal>
          <p className="text-sm font-medium uppercase text-[#0F9F7A]">FAQ</p>
          <h2 className="mt-3 text-4xl font-semibold text-[#E8ECF0] md:text-5xl">
            Questions before checkout
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-[#8B95A3]">
            The batch COA, storage guidance, and tracking link stay tied to the
            order record.
          </p>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="border-t border-white/10">
            {FAQS.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-base text-[#E8ECF0]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl text-[#8B95A3]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
