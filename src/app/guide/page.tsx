"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Check, Download, Loader2, ArrowRight, BookOpen, FlaskConical, ShieldCheck, Layers } from "lucide-react";

const FORMSUBMIT_ACTION = "https://formsubmit.co/4ec82415df18ef2a8a1519b6919ace7c";
const GUIDE_UNLOCK_URL = "https://www.titanpeptidelab.com/guide?download=1&source=guide-download";
const GUIDE_AUTORESPONSE = [
  "Thanks for requesting Titan's peptide nasal spray guide.",
  "",
  "Your guide is unlocked here:",
  GUIDE_UNLOCK_URL,
  "",
  "Your first-order code: FIRST10 — 10% off anything in the catalog.",
  "Shop Titan: https://www.titanpeptidelab.com/products",
  "",
  "Reply to this email if you want help comparing a lot sheet or COA before you order.",
  "",
  "— Titan Peptide Lab",
].join("\n");

const GUIDE_CONTENTS = [
  {
    icon: FlaskConical,
    title: "Delivery science explained",
    body: "Why the nasal route works, the olfactory nerve pathway, and how BBB-bypassing delivery changes CNS peptide research.",
  },
  {
    icon: BookOpen,
    title: "Full compound profiles",
    body: "BPC-157, Selank, Semax, PT-141, Oxytocin, and DSIP — mechanism, key research, and dose ranges in one place.",
  },
  {
    icon: ShieldCheck,
    title: "COA literacy guide",
    body: "What a valid Certificate of Analysis must contain, red flags to reject, and how to verify lot-matching.",
  },
  {
    icon: Layers,
    title: "Stacking protocols",
    body: "Four research-backed stacks with timing, cycling guidance, and combinations to avoid.",
  },
];

export default function GuidePage() {
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending">("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    setUnlocked(params.get("download") === "1");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    if (!email.trim() || status === "sending") {
      e.preventDefault();
      return;
    }
    setStatus("sending");
  };

  return (
    <>
      <Nav />
      <main className="bg-white text-[#0f1613]">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="border-b border-[rgb(15_22_19/6%)] bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

              {/* Left column */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-[#1e6f58]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                    Free research resource
                  </span>
                </div>

                <h1 className="mt-8 font-serif text-[clamp(2.4rem,4.8vw,3.6rem)] leading-[0.95] tracking-[-0.04em] text-[#0f1613]">
                  The complete guide<br />
                  to peptide nasal sprays.<br />
                  <em className="not-italic text-[#1e6f58]">What every researcher should know.</em>
                </h1>

                <p className="mt-6 max-w-[50ch] text-[15px] leading-[1.8] text-[#5c6762]">
                  A 30-page research resource covering delivery science, bioavailability data, compound profiles,
                  COA verification, storage protocols, and stacking frameworks — written for researchers, not consumers.
                </p>

                {/* What&apos;s inside */}
                <ul className="mt-10 space-y-5">
                  {GUIDE_CONTENTS.map(({ icon: Icon, title, body }) => (
                    <li key={title} className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e8f2ee]">
                        <Icon className="h-4 w-4 text-[#1e6f58]" />
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#0f1613]">{title}</p>
                        <p className="mt-0.5 text-[13px] leading-[1.65] text-[#6a7870]">{body}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap items-center gap-4 text-[12px] text-[#8a9690]">
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-[#1e6f58]" />
                    30+ pages
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-[#1e6f58]" />
                    6 compound profiles
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-[#1e6f58]" />
                    4 stacking protocols
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-[#1e6f58]" />
                    COA verification guide
                  </span>
                </div>
              </div>

              {/* Right column — email gate */}
              <div className="lg:sticky lg:top-24">
                <div className="overflow-hidden rounded-[1.75rem] border border-[rgb(15_22_19/8%)] bg-[#fafbfa] shadow-[0_1px_2px_rgb(15_22_19/4%),_0_30px_70px_-50px_rgb(15_22_19/14%)]">

                  {/* Card header */}
                  <div className="border-b border-[rgb(15_22_19/7%)] bg-[#1e6f58] px-8 py-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                      Free download
                    </p>
                    <h2 className="mt-2 font-serif text-[1.5rem] leading-[1.1] tracking-[-0.02em] text-white">
                      Get instant access to<br />the full guide
                    </h2>
                    <p className="mt-2 text-[13px] leading-[1.7] text-white/70">
                      Enter your email and we&apos;ll unlock the guide instantly, then send the same link plus FIRST10 to your inbox.
                    </p>
                  </div>

                  <div className="px-8 py-7">
                    {unlocked ? (
                      /* ── Success state ───────────────────────── */
                      <div>
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f2ee]">
                          <Check className="h-5 w-5 text-[#1e6f58]" />
                        </div>
                        <h3 className="font-serif text-[1.3rem] leading-tight tracking-[-0.02em] text-[#0f1613]">
                          You&apos;re in — download below.
                        </h3>
                        <p className="mt-2 text-[13.5px] leading-[1.7] text-[#6a7870]">
                          The guide is unlocked now, and a copy is being sent to your inbox with code FIRST10 for 10% off your first order.
                        </p>
                        <div className="mt-5 rounded-2xl border border-[#dce5df] bg-[#f7faf8] px-5 py-4 text-center">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                            First-order code
                          </p>
                          <p className="mt-2 font-serif text-[2rem] leading-none tracking-[0.12em] text-[#1e6f58]">
                            FIRST10
                          </p>
                          <p className="mt-2 text-[12px] text-[#6a7870]">
                            Use at checkout for 10% off your first order.
                          </p>
                        </div>
                        <a
                          href="/peptide-guide.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1e6f58] py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#175946]"
                        >
                          <Download className="h-4 w-4" />
                          Open the guide
                        </a>
                        <p className="mt-4 text-center text-[11px] text-[#aaa]">
                          Opens in your browser — use Ctrl+P or Cmd+P to save as PDF.
                        </p>
                        <div className="mt-6 border-t border-[rgb(15_22_19/6%)] pt-5">
                          <p className="text-[12px] text-[#8a9690]">
                            Ready to source research-grade compounds?
                          </p>
                          <Link
                            href="/products"
                            className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1e6f58] hover:underline"
                          >
                            Browse the catalog
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    ) : (
                      /* ── Form state ──────────────────────────── */
                      <form
                        action={FORMSUBMIT_ACTION}
                        method="POST"
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        <input type="hidden" name="_subject" value="[Titan Guide] New download" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_next" value={GUIDE_UNLOCK_URL} />
                        <input type="hidden" name="_autoresponse" value={GUIDE_AUTORESPONSE} />
                        <input type="hidden" name="Source" value="guide-download" />
                        <div>
                          <label
                            htmlFor="guide-email"
                            className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]"
                          >
                            Email address
                          </label>
                          <input
                            id="guide-email"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="researcher@lab.org"
                            className="mt-2 w-full rounded-xl border border-[#dce5df] bg-white px-4 py-3 text-[14px] text-[#0f1613] placeholder:text-[#c0c9c4] outline-none transition-colors focus:border-[#1e6f58] focus:ring-2 focus:ring-[#1e6f58]/10"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={status === "sending" || !email.trim()}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0f1613] py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#1e6f58] disabled:opacity-50"
                        >
                          {status === "sending" ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Sending&hellip;
                            </>
                          ) : (
                            <>
                              <Download className="h-4 w-4" />
                              Unlock guide + FIRST10
                            </>
                          )}
                        </button>

                        <p className="text-center text-[11px] leading-[1.6] text-[#b0b9b4]">
                          No spam. Unsubscribe anytime. We only send batch releases and research updates.
                        </p>
                      </form>
                    )}
                  </div>

                </div>

                {/* Trust strip */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-[#8a9690]">
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-[#1e6f58]" />
                    Lot-matched COAs
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-[#1e6f58]" />
                    &ge;99% HPLC purity target
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-[#1e6f58]" />
                    Ships worldwide
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Preview section ───────────────────────────────────── */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[#1e6f58]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                What&apos;s inside
              </span>
            </div>

            <div className="grid gap-px rounded-2xl overflow-hidden border border-[rgb(15_22_19/7%)] bg-[rgb(15_22_19/7%)] sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "01",
                  title: "Nasal delivery science",
                  items: ["Olfactory nerve pathway", "Respiratory epithelium absorption", "Why nasal bypasses first-pass", "Formulation requirements"],
                },
                {
                  num: "02",
                  title: "Bioavailability data",
                  items: ["Nasal vs injection vs oral", "Visual BA comparison", "Dose equivalency table", "CNS vs systemic BA distinction"],
                },
                {
                  num: "03",
                  title: "Compound profiles",
                  items: ["BPC-157 — repair & GI", "Selank — anxiolytic", "Semax — cognitive", "PT-141, Oxytocin, DSIP"],
                },
                {
                  num: "04–07",
                  title: "COA, storage & stacks",
                  items: ["COA checklist & red flags", "Opened stability by compound", "4 research stacking protocols", "FAQ with 8 answers"],
                },
              ].map(({ num, title, items }) => (
                <div key={num} className="bg-white px-7 py-8">
                  <p className="text-[11px] font-bold text-[#1e6f58] uppercase tracking-[0.18em] mb-3">
                    {num}
                  </p>
                  <h3 className="font-serif text-[1.15rem] leading-[1.2] tracking-[-0.02em] text-[#0f1613] mb-4">
                    {title}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12.5px] text-[#6a7870]">
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#1e6f58]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA strip ────────────────────────────────────────── */}
        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#0f1613] py-14 lg:py-18">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.1] tracking-[-0.03em] text-white">
              Sourcing for your research?
            </h2>
            <p className="mt-4 text-[14px] leading-[1.75] text-white/55">
              Every compound in this guide is available in our catalog with lot-matched COAs,
              calibrated 100 &mu;L spray pumps, and worldwide fulfillment.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/products"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#1e6f58] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-[#175946]"
              >
                Browse catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/lab-testing"
                className="inline-flex h-11 items-center rounded-full border border-white/20 px-7 text-[13px] font-semibold text-white/80 transition-colors hover:border-white/50 hover:text-white"
              >
                Review lab testing
              </Link>
            </div>
            <p className="mt-6 text-[11px] text-white/25">
              For laboratory research purposes only. Not for human consumption.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
