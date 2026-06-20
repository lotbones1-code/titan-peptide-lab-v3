import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  Link2,
  PackageCheck,
  Mail,
  Wallet,
  Search,
} from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import {
  BreadcrumbJsonLd,
  FAQJsonLd,
  OrganizationJsonLd,
} from "@/components/site/json-ld";

const TITLE = "Titan Peptide Lab Reviews — Is It Legit? How to Verify the Source";
const DESCRIPTION =
  "An honest look at Titan Peptide Lab for buyers checking if it's legit before paying in crypto. No fabricated reviews or star ratings — the verifiable signals instead: lot-matched release sheets, HPLC purity targets, the crypto order paper trail, returns, and support. Research use only.";
const URL = "/titan-peptide-lab-reviews/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

// Verifiable trust signals — each is something a buyer can CHECK, not a claim
// they have to take on faith. No star ratings, no fabricated testimonials:
// Titan does not invent reviews (see /lab-testing honesty policy).
const SIGNALS = [
  {
    icon: FileText,
    title: "Lot-matched release sheet in every box",
    body: "Each order ships with the in-house release sheet for the exact lot on your bottle — HPLC purity read, identity check, appearance — referenced to the lot code you can read on the label. Paperwork that matches the lot, not a generic marketing image.",
    href: "/lab-testing/?ref=reviews-signal",
    cta: "See the testing workflow",
  },
  {
    icon: Wallet,
    title: "The crypto order leaves a paper trail",
    body: "Crypto has no chargebacks, so the record does the work. Your order ID is created and recorded with support before any crypto leaves your wallet — the order exists on our side first, and payment is confirmed on-chain (usually under 30 minutes).",
    href: "/how-to-pay-with-crypto/?ref=reviews-signal",
    cta: "How crypto checkout works",
  },
  {
    icon: PackageCheck,
    title: "Returns and a real guarantee",
    body: "Replacement or refund on lot-mismatch, a documented lot-quality issue, shipping damage, or eligible unopened returns within 14 days. The refund path is confirmed during order review — not buried after the sale.",
    href: "/shipping-faq/?ref=reviews-signal",
    cta: "Read shipping & returns",
  },
  {
    icon: Mail,
    title: "A support address that answers",
    body: "support@titanpeptidelab.com is monitored and typically replies within 24–48 hours. Message before you order with any question about a lot, format, or shipping destination — the answer arrives before you commit.",
    href: "/contact/?ref=reviews-signal",
    cta: "Contact support",
  },
];

const FAQS = [
  {
    q: "Is Titan Peptide Lab legit?",
    a: "Titan Peptide Lab is a research-peptide supplier that publishes the documentation a buyer can verify before paying: an in-house lot-release sheet (HPLC purity target and identity check) that ships with every order referenced to the lot code on the bottle, clear research-use-only labeling, a crypto checkout that records the order ID before any payment leaves your wallet, a 14-day unopened return path, and a monitored support address. Rather than asking buyers to trust a star rating they cannot check, the page documents how to verify any peptide source — including this one — before ordering.",
  },
  {
    q: "Why doesn't Titan Peptide Lab show customer reviews or star ratings?",
    a: "Titan does not publish fabricated reviews or invented star ratings. Verified buyer feedback is published only with the lot it refers to, as research observations, and never with therapeutic claims. If you have ordered, you can email reviews@titanpeptidelab.com with your order number to have verified feedback published with the lot tested.",
  },
  {
    q: "How do I verify a research-peptide supplier before paying in crypto?",
    a: "Check that the supplier shows lot-matched documentation (a COA or release sheet tied to the specific lot, not a generic file), names its purity method (for example HPLC) and identity confirmation, states storage and research-use boundaries clearly, records your order before payment, and offers a return or replacement path. Start with a single unit on a first order to verify the source on a small purchase before scaling up.",
  },
  {
    q: "Is there an independent third-party COA for the lot I receive?",
    a: "No independent third-party lot report is currently published for these lots. Titan ships the in-house release sheet for the lot on your bottle and will not name a third-party report unless it can be verified against that same lot code. The honest status is stated rather than implied.",
  },
  {
    q: "What is the safest way to place a first order with Titan Peptide Lab?",
    a: "Most new buyers start with a single unit and the FIRST10 code for 10% off, pay with USDC on Solana for the lowest fees, and keep the order ID confirmed with support. Once the lot-matched release sheet arrives in the box and the source is verified on a small order, buyers scale up. All products are sold for in-vitro laboratory research use only.",
  },
];

const VERIFY_STEPS = [
  {
    n: "01",
    title: "Read the lot, not the logo",
    body: "Open any product page and find the lot code and the release-sheet workflow. The document that ships should reference that lot — a supplier that can only show a generic, undated COA is showing marketing, not proof.",
  },
  {
    n: "02",
    title: "Message support before you pay",
    body: "Email a real question about the lot or your shipping country. A source that answers within a day, in plain language, with no pressure, is behaving like a lab — not a drop.",
  },
  {
    n: "03",
    title: "Start with one unit",
    body: "Place a single-unit first order with FIRST10. Confirm the order ID is recorded before sending crypto, watch the on-chain confirmation, and verify the paperwork in the box before you ever scale up.",
  },
];

export default function TitanPeptideLabReviewsPage() {
  return (
    <>
      <OrganizationJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Titan Peptide Lab reviews", item: URL },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-[#fbf8f2] text-[#13211c]">
        {/* Hero */}
        <section className="border-b border-[#13211c]/10 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Titan Peptide Lab reviews &amp; legitimacy
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-balance">
                Checking if Titan Peptide Lab is legit before you pay?
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#53625c]">
                Fair question — crypto payments have no chargebacks, so verifying
                the source first is the right instinct. We won&apos;t show you a
                fabricated star rating you can&apos;t check. Instead, here are the
                signals you <em>can</em> verify on Titan and on any research-peptide
                supplier, before a single dollar of crypto leaves your wallet.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/?ref=reviews-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  Browse the catalog
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/peptide-supplier-checklist/?ref=reviews-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#13211c]/15 px-7 text-[13px] font-semibold text-[#13211c] transition hover:border-[#13211c]"
                >
                  Run the supplier checklist
                </Link>
              </div>
              <p className="mt-6 max-w-2xl text-[12px] leading-6 text-[#8a9690]">
                Research use only. Products are not for human or animal consumption
                and are not intended to diagnose, treat, cure, or prevent any
                disease.
              </p>
            </div>
          </div>
        </section>

        {/* Honest "new lab" framing */}
        <section className="border-b border-[#13211c]/8 bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
              Straight answer
            </p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.04] tracking-[-0.035em]">
              We&apos;d rather be verifiable than viral.
            </h2>
            <div className="mt-6 space-y-4 text-[14.5px] leading-[1.9] text-[#44514b]">
              <p>
                Plenty of vendors paper over a thin track record with hundreds of
                five-star reviews that nobody can trace to a real order. We took
                the opposite route: every claim on this site points to something
                you can open, read, or check yourself.
              </p>
              <p>
                That means no invented testimonials and no aggregate rating widget.
                It also means we state the uncomfortable parts plainly — for
                example, that there is currently no independent third-party lot
                report published for these lots, only the in-house release sheet
                that ships in your box, matched to the lot on your bottle. If that
                changes, we&apos;ll name the lab and the lot, not a vague badge.
              </p>
            </div>
          </div>
        </section>

        {/* Verifiable signals grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                What you can actually verify
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Four signals that beat a star rating.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {SIGNALS.map(({ icon: Icon, title, body, href, cta }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#1e6f58] hover:shadow-[0_18px_60px_-42px_rgb(15_22_19/45%)]"
                >
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h3 className="mt-5 font-serif text-[1.4rem] leading-tight tracking-[-0.02em] group-hover:text-[#1e6f58]">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-7 text-[#5c6762]">
                    {body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1e6f58]">
                    {cta} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Verify-it-yourself steps */}
        <section className="border-y border-[#13211c]/8 bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Verify it yourself
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Three minutes before you order.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                You don&apos;t have to trust this page. Run the same quick check on
                Titan that you&apos;d run on any source — it works as a filter for
                the whole market, not just one lab.
              </p>
              <Link
                href="/peptide-supplier-checklist/?ref=reviews-steps"
                className="mt-7 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1e6f58]"
              >
                <Search className="h-4 w-4" />
                Full supplier checklist →
              </Link>
            </div>
            <ol className="grid gap-4">
              {VERIFY_STEPS.map(({ n, title, body }) => (
                <li
                  key={n}
                  className="flex gap-5 rounded-[1.35rem] border border-[#dde6e1] bg-[#fbf8f2] p-6"
                >
                  <span className="font-serif text-[2rem] leading-none text-[#1e6f58]/40">
                    {n}
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.4rem] leading-tight tracking-[-0.02em]">
                      {title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-7 text-[#5c6762]">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
              Common questions
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.035em]">
              The questions buyers actually ask first.
            </h2>
            <dl className="mt-10 divide-y divide-[#13211c]/10 border-y border-[#13211c]/10">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="py-6">
                  <dt className="font-serif text-[1.3rem] leading-snug tracking-[-0.02em] text-[#13211c]">
                    {q}
                  </dt>
                  <dd className="mt-3 text-[14px] leading-[1.85] text-[#5c6762]">
                    {a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-[#13211c]/8 bg-white py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Verify the source. Then start small.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the catalog, read the lot path, message support with anything
              you want confirmed, and place a single-unit first order with
              FIRST10. Scale up only after the paperwork checks out.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/products/?ref=reviews-bottom"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
              >
                Open catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/lab-testing/?ref=reviews-bottom"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#13211c]/15 px-7 text-[13px] font-semibold text-[#13211c] transition hover:border-[#13211c]"
              >
                <Link2 className="h-4 w-4" />
                Verify testing workflow
              </Link>
            </div>
            <p className="mx-auto mt-8 max-w-xl text-[11px] leading-5 text-[#8a9690]">
              <ShieldCheck className="mr-1 inline h-3.5 w-3.5 text-[#1e6f58]" />
              All Titan Peptide Lab products are sold strictly for in-vitro
              laboratory research. Not for human or animal consumption.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
