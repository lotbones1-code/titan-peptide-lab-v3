import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    title: "Cart is locked",
    text: "The buyer chooses compounds and quantity, then lands in a checkout flow where the same SKU mix and pricing stay visible instead of turning into an opaque invoice request.",
  },
  {
    n: "02",
    title: "Rail is confirmed",
    text: "Titan confirms the payment route, shipping details, and discount logic before a batch is released against the order, so there is no blind handoff between product page and payment stage.",
  },
  {
    n: "03",
    title: "Payment clears",
    text: "BTC, ETH, USDC, and SOL rails are shown openly. Once funds clear, the order is manually reviewed and matched to the correct lot workflow before dispatch starts.",
  },
  {
    n: "04",
    title: "Paperwork follows the lot",
    text: "Shipment confirmation, COA, and dispatch notes come back against the same order record, not from a generic document dump that the buyer has to decipher later.",
  },
];

const NOTES = [
  {
    title: "No blind wallet page",
    body: "Payment route, order total, and next steps are meant to be explicit before the buyer sends funds.",
  },
  {
    title: "Manual release logic",
    body: "A human review step still matters here because the product, the payment rail, and the paperwork need to stay tied together.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-[rgba(10,10,10,0.07)] bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="grid gap-10 border-b border-[rgba(10,10,10,0.07)] pb-16 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a3a3a3]">
                Order flow
              </span>
              <h2 className="mt-5 font-serif text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.9] tracking-[-0.045em] text-[#0a0a0a]">
                Checkout should feel
                <br />
                like an operating flow,
                <br />
                not a handoff gamble.
              </h2>
            </div>
            <div className="grid gap-4">
              {NOTES.map((note) => (
                <div key={note.title} className="rounded-[1.5rem] border border-[rgba(10,10,10,0.08)] bg-[#f7f6f1] p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                    {note.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.8] text-[#525252]">{note.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px bg-[rgba(10,10,10,0.07)] lg:grid-cols-4">
          {STEPS.map(({ n, title, text }, index) => (
            <Reveal key={title} delay={index * 0.04}>
              <div className="flex h-full flex-col gap-6 bg-white p-8">
                <span className="font-serif text-[1rem] leading-none tracking-[-0.02em] text-[#d0d0d0]">
                  {n}
                </span>
                <div>
                  <h3 className="font-serif text-[1.55rem] leading-[1.02] tracking-[-0.035em] text-[#0a0a0a]">
                    {title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.85] text-[#525252]">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
