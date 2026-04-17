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
      "Every batch is third-party HPLC tested. The COA is tied to the lot linked with your order instead of a generic certificate library page.",
  },
  {
    question: "How fast do you ship?",
    answer:
      "Manual fulfillment is completed within 24 hours after payment confirmation. Tracking is sent once the package is packed.",
  },
  {
    question: "Can I pay with crypto?",
    answer:
      "Yes. Checkout is crypto-only and supports BTC, ETH, USDC ERC-20, SOL, and USDC SPL.",
  },
  {
    question: "Are these for human use?",
    answer:
      "No. All products are sold for laboratory research purposes only and not for human consumption.",
  },
  {
    question: "Do you accept returns?",
    answer: "Unopened items within 14 days. Contact support for an RMA.",
  },
  {
    question: "How should nasal spray peptides be stored?",
    answer:
      "Refrigerate at 2 to 8°C. Storage guidance and stability notes are provided alongside the batch documentation.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-b border-[#dde4da] bg-[#f8f5ef] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#66756d]">
            FAQ
          </p>
          <h2 className="mt-4 max-w-lg font-serif text-[clamp(2.5rem,4.5vw,4.2rem)] leading-[0.96] tracking-[-0.04em] text-[#13211c]">
            Questions buyers ask before they trust the order.
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-[#55645d]">
            The right answers should feel crisp and specific, especially around
            purity, shipping speed, and how the certificate is matched.
          </p>
        </Reveal>

        <Reveal>
          <div className="rounded-[1.75rem] border border-[#d9e0d7] bg-white/82 px-6 shadow-[0_18px_50px_-38px_rgba(19,33,28,0.28)] sm:px-8">
            <Accordion type="single" collapsible className="border-t border-[#d9e0d7]">
              {FAQS.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="text-base text-[#13211c]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl text-[#596761]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
