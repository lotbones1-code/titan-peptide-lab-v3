import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

export const metadata = {
  title: "Contact — The Titan Peptide Company",
  description:
    "Write the laboratory. Replies inside 24\u201348 hours from the QA bench.",
};

const FORM_ACTION = "mailto:support@titanpeptidelab.com";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#1e6f58]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Contact
              </span>
            </div>

            <div className="mt-12 grid gap-x-14 gap-y-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h1 className="font-serif text-[clamp(2.4rem,4.8vw,3.8rem)] leading-[0.96] tracking-[-0.03em] text-[#0f1613] text-pretty">
                  Write the{" "}
                  <em className="not-italic text-[#1e6f58]">laboratory</em>.
                </h1>

                <p className="mt-8 max-w-md text-[15px] leading-[1.8] text-[#5c6762]">
                  Replies inside 24\u201348 hours, usually same day from the QA
                  bench. For common questions, the fastest answer is on the{" "}
                  <Link
                    href="/shipping-faq"
                    className="text-[#0f1613] underline decoration-[rgb(15_22_19/20%)] underline-offset-[4px] hover:text-[#1e6f58] hover:decoration-[#1e6f58]"
                  >
                    shipping and payment page
                  </Link>
                  .
                </p>

                <dl className="mt-10 space-y-4 text-[14px]">
                  <ContactRow
                    label="General"
                    value="support@titanpeptidelab.com"
                  />
                  <ContactRow label="QA / COA" value="qa@titanpeptidelab.com" />
                  <ContactRow
                    label="Volume"
                    value="hello@titanpeptidelab.com"
                  />
                  <div className="grid grid-cols-[100px_1fr] items-baseline gap-4 border-t border-[rgb(15_22_19/6%)] pt-3">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]">
                      Post
                    </dt>
                    <dd className="text-[#5c6762]">
                      The Titan Peptide Company
                      <br />
                      Reno, NV, United States
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-xl border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-8">
                  <div className="flex items-baseline justify-between border-b border-[rgb(15_22_19/6%)] pb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                      Contact form
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                      Support desk
                    </span>
                  </div>

                  <h2 className="mt-6 font-serif text-[1.5rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                    Send a message.
                  </h2>

                  <form
                    action={FORM_ACTION}
                    method="POST"
                    encType="text/plain"
                    className="mt-8 space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Your name" name="name" required />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        required
                      />
                    </div>

                    <Field label="Subject" name="subject" />

                    <div>
                      <label
                        htmlFor="topic"
                        className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]"
                      >
                        Topic
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        defaultValue=""
                        className="mt-2 w-full border-0 border-b border-[rgb(15_22_19/12%)] bg-transparent py-2 text-[14px] text-[#0f1613] focus:border-[#0f1613] focus:outline-none focus:ring-0"
                      >
                        <option value="" disabled>
                          Select\u2026
                        </option>
                        <option>General question</option>
                        <option>Order status</option>
                        <option>COA request</option>
                        <option>Volume / laboratory pricing</option>
                        <option>Press / partnerships</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="mt-2 w-full border-0 border-b border-[rgb(15_22_19/12%)] bg-transparent py-2 text-[14px] leading-relaxed text-[#0f1613] placeholder:text-[#b0b8b4] focus:border-[#0f1613] focus:outline-none focus:ring-0"
                        placeholder="Lot number, order ID, or what you need help with\u2026"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <p className="max-w-xs text-[11px] text-[#8a9690]">
                        Reply within 24\u201348h from the QA bench
                      </p>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#0f1613] px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#1a2420]"
                      >
                        Send message
                      </button>
                    </div>
                  </form>

                  <div className="mt-8 border-t border-[rgb(15_22_19/6%)] pt-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                      Quick links
                    </span>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[13px]">
                      <ReadLink href="/shipping-faq#shipping">
                        Shipping
                      </ReadLink>
                      <ReadLink href="/shipping-faq#payment">
                        Payment
                      </ReadLink>
                      <ReadLink href="/shipping-faq#returns">Returns</ReadLink>
                      <ReadLink href="/lab-testing">Lab testing</ReadLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[100px_1fr] items-baseline gap-4 border-t border-[rgb(15_22_19/6%)] pt-3">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]">
        {label}
      </dt>
      <dd>
        <a
          href={`mailto:${value}`}
          className="text-[#0f1613] underline decoration-[rgb(15_22_19/20%)] underline-offset-[4px] hover:text-[#1e6f58] hover:decoration-[#1e6f58]"
        >
          {value}
        </a>
      </dd>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]"
      >
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-0 border-b border-[rgb(15_22_19/12%)] bg-transparent py-2 text-[14px] text-[#0f1613] focus:border-[#0f1613] focus:outline-none focus:ring-0"
      />
    </div>
  );
}

function ReadLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[#5c6762] underline decoration-[rgb(15_22_19/15%)] underline-offset-[4px] hover:text-[#0f1613]"
    >
      {children}
    </Link>
  );
}
