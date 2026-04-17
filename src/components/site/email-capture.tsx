// Editorial email capture — no discount bait, no modal, no timer.
// Sits between Process and Catalog on the home page.

// TODO: replace FORM_ACTION with a real Formspree endpoint when provisioned,
// e.g. "https://formspree.io/f/xxxxxxxx". Until then this posts as mailto.
const FORM_ACTION = "mailto:list@titanpeptidelab.com";

export function EmailCapture() {
  return (
    <section
      id="research-list"
      className="border-b border-white/8 bg-[oklch(0.12_0.005_240)] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
          {/* Label */}
          <div className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              §04a &mdash; The Research List
            </div>
            <p className="mt-6 max-w-xs text-sm leading-[1.7] text-zinc-400">
              New certificates, stack guides from the bench, and restock
              notices. One dispatch, about twice a month. Unsubscribe printed
              at the foot of every mailing.
            </p>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal leading-[1.05] tracking-[-0.01em] text-zinc-50 text-pretty">
              Join the research list &mdash;{" "}
              <em className="font-serif italic text-zinc-400">
                new COAs, stack guides, restocks
              </em>
              .
            </h2>

            <form
              action={FORM_ACTION}
              method="POST"
              encType="text/plain"
              className="mt-10"
            >
              <div className="flex flex-col items-start gap-4 border-t border-zinc-800 pt-6 sm:flex-row sm:items-end">
                <div className="w-full flex-1">
                  <label
                    htmlFor="research-list-email"
                    className="block font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500"
                  >
                    Email
                  </label>
                  <input
                    id="research-list-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@laboratory.edu"
                    className="mt-2 w-full border-0 border-b border-zinc-700 bg-transparent py-2 font-serif text-xl leading-snug text-zinc-50 placeholder:text-zinc-600 focus:border-[var(--signature)] focus:outline-none focus:ring-0"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-white/15 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-200 transition-colors hover:border-[var(--signature)] hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signature)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-[var(--signature)] transition-transform group-hover:scale-110"
                  />
                  Subscribe
                </button>
              </div>

              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                No discount bait &middot; no third-party tracking &middot;
                correspondence-grade list
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
