import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

export const metadata = {
  title: "Contact — Titan Peptide Laboratory",
  description:
    "Contact Titan for order, COA, shipping, and manual crypto payment questions.",
};

const FORM_ACTION = "mailto:support@titanpeptidelab.com";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="bg-[linear-gradient(180deg,#faf7f1_0%,#f4efe7_58%,#eee7dc_100%)] text-[#13211c]">
        <section className="border-b border-[#dde4da] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#718079]">
              §C — Correspondence
            </div>

            <div className="mt-12 grid gap-x-12 gap-y-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h1 className="font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.96] tracking-[-0.04em] text-[#13211c] text-pretty">
                  Write the <em className="italic text-[#60736a]">laboratory</em>.
                </h1>

                <p className="mt-8 max-w-md text-base leading-8 text-[#586761]">
                  Use this page for order, COA, shipping, and manual crypto
                  payment questions. For the most common questions, the fastest
                  answer is usually on the{" "}
                  <Link
                    href="/shipping-faq"
                    className="text-[#203129] underline decoration-[#b9c7bf] underline-offset-[6px] hover:text-[#1e6f58] hover:decoration-[#1e6f58]"
                  >
                    shipping and payment page
                  </Link>
                  .
                </p>

                <dl className="mt-12 space-y-6 text-sm text-[#35443d]">
                  <ContactRow label="General" value="support@titanpeptidelab.com" />
                  <ContactRow label="QA / COA" value="qa@titanpeptidelab.com" />
                  <ContactRow label="Volume" value="hello@titanpeptidelab.com" />
                  <div className="grid grid-cols-[120px_1fr] items-baseline gap-4 border-y border-[#d8dfd7] py-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#738079]">
                      Post
                    </dt>
                    <dd className="text-[#55645d]">
                      Titan Peptide Laboratory
                      <br />
                      Reno, NV, United States
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="lg:col-span-7">
                <figure className="rounded-[1.85rem] border border-[#d7dfd6] bg-[linear-gradient(180deg,#fffdfa_0%,#f3eee6_100%)] p-8 text-[#13211c] shadow-[0_28px_70px_-42px_rgba(19,33,28,0.34)]">
                  <div className="flex items-baseline justify-between border-b border-[#d8dfd7] pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f7b75]">
                    <span>Correspondence slip</span>
                    <span>TPL / Support Desk</span>
                  </div>

                  <h2 className="mt-6 font-serif text-3xl leading-[1.05] text-[#13211c]">
                    A note to the <em className="italic text-[#66756e]">laboratory</em>.
                  </h2>

                  <div className="mt-6 rounded-[1.15rem] border border-[#d8dfd7] bg-[#fffdfa]/75 px-4 py-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1e6f58]">
                      Manual order help
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#53615b]">
                      If you already used the crypto order flow, include your order ID,
                      product, country, payment rail, and transaction hash so support
                      can match the request faster. If this form does not open your
                      mail app, email{" "}
                      <a
                        href="mailto:support@titanpeptidelab.com"
                        className="text-[#203129] underline decoration-[#b9c7bf] underline-offset-[6px] hover:text-[#1e6f58] hover:decoration-[#1e6f58] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e6f58] focus-visible:ring-offset-2"
                      >
                        support@titanpeptidelab.com
                      </a>{" "}
                      directly with the same details.
                    </p>
                  </div>

                  <form
                    action={FORM_ACTION}
                    method="POST"
                    encType="text/plain"
                    className="mt-8 space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Your name" name="name" required />
                      <Field label="Email" name="email" type="email" required />
                    </div>

                    <Field label="Subject" name="subject" />

                    <div>
                      <label
                        htmlFor="topic"
                        className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#738079]"
                      >
                        Topic
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        defaultValue=""
                        className="mt-2 w-full border-0 border-b border-[#bfcac2] bg-transparent py-2 font-serif text-lg text-[#13211c] focus:border-[#13211c] focus:outline-none focus:ring-0"
                      >
                        <option value="" disabled>
                          Select…
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
                        className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#738079]"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={7}
                        required
                        className="mt-2 w-full border-0 border-b border-[#bfcac2] bg-transparent py-2 font-serif text-lg leading-snug text-[#13211c] placeholder:text-[#94a09a] focus:border-[#13211c] focus:outline-none focus:ring-0"
                        placeholder="Lot number, order ID, or what you are trying to do…"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-6">
                      <p className="max-w-xs font-mono text-[10px] uppercase tracking-[0.18em] text-[#738079]">
                        Manual order support · include payment hash when available
                      </p>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2.5 rounded-full border border-[#13211c]/20 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#13211c] transition-colors hover:border-[#13211c] hover:bg-[#13211c] hover:text-[#fffdfa]"
                      >
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 rounded-full bg-[#1e6f58] transition-transform group-hover:scale-110"
                        />
                        Send to laboratory
                      </button>
                    </div>
                  </form>

                  <div className="mt-10 border-t border-[#d8dfd7] pt-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f7b75]">
                      Read first
                    </div>
                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      <ReadLink href="/shipping-faq#shipping">Shipping</ReadLink>
                      <ReadLink href="/shipping-faq#payment">Payment and crypto</ReadLink>
                      <ReadLink href="/shipping-faq#returns">Returns</ReadLink>
                      <ReadLink href="/lab-testing">Lab testing</ReadLink>
                    </div>
                  </div>
                </figure>

                <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7b8781]">
                  Plate C — Correspondence slip. Form posts to support@titanpeptidelab.com.
                </figcaption>
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
    <div className="grid grid-cols-[120px_1fr] items-baseline gap-4 border-t border-[#d8dfd7] pt-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#738079]">
        {label}
      </dt>
      <dd>
        <a
          href={`mailto:${value}`}
          className="text-[#203129] underline decoration-[#b9c7bf] underline-offset-[6px] hover:text-[#1e6f58] hover:decoration-[#1e6f58]"
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
        className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#738079]"
      >
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-0 border-b border-[#bfcac2] bg-transparent py-2 font-serif text-lg text-[#13211c] focus:border-[#13211c] focus:outline-none focus:ring-0"
      />
    </div>
  );
}

function ReadLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[#53615b] underline decoration-[#c6d0c8] underline-offset-[4px] hover:text-[#13211c]"
    >
      {children}
    </Link>
  );
}
