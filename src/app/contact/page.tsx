import Link from "next/link";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata = {
  title: "Contact — Titan Peptide Laboratory",
  description:
    "Write the laboratory. Replies inside 24–48 hours from the QA bench.",
};

// TODO: replace this mailto with a Formspree endpoint when the form ID is provisioned,
// e.g. action="https://formspree.io/f/xxxxxxxx" method="POST".
const FORM_ACTION = "mailto:support@titanpeptidelab.com";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-white/8 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              §C &mdash; Correspondence
            </div>

            <div className="mt-12 grid gap-x-12 gap-y-16 lg:grid-cols-12">
              {/* Left: preamble */}
              <div className="lg:col-span-5">
                <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-normal leading-[0.98] tracking-[-0.02em] text-zinc-50 text-pretty">
                  Write the{" "}
                  <em className="font-serif italic text-zinc-300">
                    laboratory
                  </em>
                  .
                </h1>

                <p className="mt-8 max-w-md text-base leading-[1.7] text-zinc-400">
                  Replies inside 24&ndash;48 hours, usually same-day from the
                  QA bench. For faster resolution on common questions, most of
                  the answers you need are already printed on the{" "}
                  <Link
                    href="/shipping-faq"
                    className="text-zinc-200 underline decoration-zinc-700 underline-offset-[6px] hover:text-[var(--signature)] hover:decoration-[var(--signature)]"
                  >
                    shipping &amp; payment page
                  </Link>
                  .
                </p>

                <dl className="mt-12 space-y-6 text-sm">
                  <div className="grid grid-cols-[120px_1fr] items-baseline gap-4 border-t border-zinc-800 pt-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                      General
                    </dt>
                    <dd>
                      <a
                        href="mailto:support@titanpeptidelab.com"
                        className="text-zinc-200 underline decoration-zinc-700 underline-offset-[6px] hover:text-[var(--signature)] hover:decoration-[var(--signature)]"
                      >
                        support@titanpeptidelab.com
                      </a>
                    </dd>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] items-baseline gap-4 border-t border-zinc-800 pt-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                      QA / COA
                    </dt>
                    <dd>
                      <a
                        href="mailto:qa@titanpeptidelab.com"
                        className="text-zinc-200 underline decoration-zinc-700 underline-offset-[6px] hover:text-[var(--signature)] hover:decoration-[var(--signature)]"
                      >
                        qa@titanpeptidelab.com
                      </a>
                    </dd>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] items-baseline gap-4 border-t border-zinc-800 pt-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                      Volume
                    </dt>
                    <dd>
                      <a
                        href="mailto:hello@titanpeptidelab.com"
                        className="text-zinc-200 underline decoration-zinc-700 underline-offset-[6px] hover:text-[var(--signature)] hover:decoration-[var(--signature)]"
                      >
                        hello@titanpeptidelab.com
                      </a>
                    </dd>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] items-baseline gap-4 border-t border-zinc-800 border-b pb-4 pt-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                      Post
                    </dt>
                    <dd className="text-zinc-300">
                      Titan Peptide Laboratory
                      <br />
                      Reno, NV, United States
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Right: the form, presented as correspondence */}
              <div className="lg:col-span-7">
                <figure className="bg-[var(--paper)] p-8 text-[var(--paper-foreground)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
                  <div className="flex items-baseline justify-between border-b border-zinc-300 pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                    <span>Correspondence &mdash; for the attention of</span>
                    <span>TPL / Support Desk</span>
                  </div>

                  <h2 className="mt-6 font-serif text-3xl leading-[1.05] text-zinc-900">
                    A note to the{" "}
                    <em className="italic text-zinc-500">laboratory</em>.
                  </h2>

                  <form
                    action={FORM_ACTION}
                    method="POST"
                    encType="text/plain"
                    className="mt-8 space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
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
                        className="block font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600"
                      >
                        Topic
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        defaultValue=""
                        className="mt-2 w-full border-0 border-b border-zinc-400 bg-transparent py-2 font-serif text-lg text-zinc-900 focus:border-zinc-900 focus:outline-none focus:ring-0"
                      >
                        <option value="" disabled>
                          Select&hellip;
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
                        className="block font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={7}
                        required
                        className="mt-2 w-full border-0 border-b border-zinc-400 bg-transparent py-2 font-serif text-lg leading-snug text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-0"
                        placeholder="Lot number, order ID, or what you&rsquo;re trying to do&hellip;"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-6">
                      <p className="max-w-xs font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                        Reply inside 24&ndash;48 h &middot; from the QA bench
                      </p>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2.5 rounded-full border border-zinc-900/30 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-900 transition-colors hover:border-zinc-900 hover:bg-zinc-900 hover:text-[var(--paper)]"
                      >
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 rounded-full bg-[var(--signature)] transition-transform group-hover:scale-110"
                        />
                        Send to laboratory
                      </button>
                    </div>
                  </form>

                  <div className="mt-10 border-t border-zinc-300 pt-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                      Read first
                    </div>
                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      <Link
                        href="/shipping-faq#shipping"
                        className="text-zinc-700 underline decoration-zinc-400 underline-offset-[4px] hover:text-zinc-900"
                      >
                        Shipping
                      </Link>
                      <Link
                        href="/shipping-faq#payment"
                        className="text-zinc-700 underline decoration-zinc-400 underline-offset-[4px] hover:text-zinc-900"
                      >
                        Payment &amp; crypto
                      </Link>
                      <Link
                        href="/shipping-faq#returns"
                        className="text-zinc-700 underline decoration-zinc-400 underline-offset-[4px] hover:text-zinc-900"
                      >
                        Returns
                      </Link>
                      <Link
                        href="/lab-testing"
                        className="text-zinc-700 underline decoration-zinc-400 underline-offset-[4px] hover:text-zinc-900"
                      >
                        Lab testing
                      </Link>
                    </div>
                  </div>
                </figure>

                <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  Plate C &mdash; Correspondence slip. Form posts to{" "}
                  <span className="text-zinc-400">support@titanpeptidelab.com</span>
                  .
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
        className="block font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600"
      >
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-0 border-b border-zinc-400 bg-transparent py-2 font-serif text-lg text-zinc-900 focus:border-zinc-900 focus:outline-none focus:ring-0"
      />
    </div>
  );
}
