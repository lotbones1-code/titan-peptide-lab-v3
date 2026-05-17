import Link from "next/link";
import { AffiliateApplicationForm } from "@/components/site/affiliate-application-form";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { Footer } from "@/components/site/footer";
import { Nav } from "@/components/site/nav";
import { NextRead } from "@/components/site/next-read";
import { PageHero } from "@/components/site/page-hero";

const AFFILIATE_TITLE = "Titan Affiliate Program — Earn 30% Commission";
const AFFILIATE_DESCRIPTION =
  "Apply for Titan Peptide Lab’s affiliate beta. Earn 30% commission, give your audience 20% off their first order, and promote a research-use-only supply brand built around documentation and claim discipline.";

const TERMS = [
  ["Commission", "30% of approved net product revenue"],
  ["Audience discount", "20% first-order discount"],
  ["Cookie", "30 days, last-click attribution"],
  ["Payout", "Monthly Net-30 after review window"],
  ["Minimum payout", "$100 approved balance"],
  ["Disclosure", "FTC-compliant relationship disclosure required"],
];

const GOOD_FIT = [
  "Biohacking, longevity, fitness, podcast, or science-leaning education audiences",
  "Creators who can explain documentation without medical or dosing claims",
  "Publishers comfortable with disclosure, review windows, and claim checks",
  "Partners who prefer a small beta over coupon-site leakage",
];

const NOT_FIT = [
  "Coupon/deal-only sites or extension injection traffic",
  "Spam DM, cold-blast, or hidden-disclosure operators",
  "Before/after transformation, disease, dosing, or treatment content",
  "Creators unwilling to send scripts/captions for review when needed",
];

const FAQS = [
  ["How much do affiliates earn?", "Approved affiliates earn 30% commission on approved net product revenue after discounts, refunds, chargebacks, taxes, shipping, and manual credits."],
  ["What discount does my audience get?", "Your unique code/link gives your audience 20% off their first Titan order."],
  ["Can I run paid ads?", "Not without written approval. Trademark bidding, misleading ads, and hidden affiliate disclosure are prohibited."],
  ["Can I make health claims if they are my personal opinion?", "No. Titan partners may not make medical, dosing, disease, treatment, human-use, transformation, or unsupported safety/effectiveness claims."],
  ["Is acceptance automatic?", "No. The beta is application-only and small by design."],
];

export const metadata = {
  title: AFFILIATE_TITLE,
  description: AFFILIATE_DESCRIPTION,
  alternates: { canonical: "/affiliates/" },
  openGraph: {
    title: AFFILIATE_TITLE,
    description: AFFILIATE_DESCRIPTION,
    url: "/affiliates/",
    type: "website" as const,
  },
  robots: { index: true, follow: true },
};

export default function AffiliatesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Affiliates", item: "/affiliates/" },
        ]}
      />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <PageHero
          eyebrow="Titan affiliate beta"
          title={
            <>
              Earn 30% promoting trust,
              <br />
              <em className="not-italic text-[#1e6f58]">not hype</em>.
            </>
          }
          supporting={
            <>
              Give your audience 20% off their first Titan order while you earn
              30% commission on approved net product revenue. This beta is for
              creators who can talk about documentation, checkout clarity, and
              research-use-only boundaries without drifting into medical claims.
            </>
          }
          aside={
            <div className="rounded-[1.75rem] border border-[#dfe6e2] bg-[#f7faf8] p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
                Program snapshot
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  ["30%", "commission on approved net revenue"],
                  ["20%", "first-order audience discount"],
                  ["30 days", "cookie window + unique code"],
                ].map(([value, label]) => (
                  <div key={value} className="rounded-[1.1rem] border border-[#e4ebe7] bg-white p-4">
                    <div className="font-serif text-[2rem] leading-none tracking-[-0.04em] text-[#0f1613]">
                      {value}
                    </div>
                    <p className="mt-2 text-[12px] leading-5 text-[#5c6762]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row lg:flex-col">
                <Link
                  href="#apply"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#0f1613] px-5 text-[12px] font-semibold text-white transition-colors hover:bg-[#1a5c48]"
                >
                  Apply to the beta
                </Link>
                <Link
                  href="#terms"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-[#d4d4d4] px-5 text-[12px] font-semibold text-[#0f1613] transition-colors hover:border-[#0f1613]"
                >
                  Review terms
                </Link>
              </div>
              <p className="mt-4 text-[11px] leading-5 text-[#8a9690]">
                Research-use-only positioning. No medical, dosing, disease,
                treatment, or human-outcome claims allowed.
              </p>
            </div>
          }
        />

        <section className="bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
                Why Titan partners exist
              </p>
              <h2 className="mt-4 max-w-md font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.02] tracking-[-0.04em] text-[#0f1613]">
                Most affiliate programs reward hype. This one filters for discipline.
              </h2>
            </div>
            <div className="space-y-5 text-[14px] leading-8 text-[#44514b] lg:col-span-7">
              <p>
                Titan wants partners who can educate serious buyers about the
                boring details that matter: clear research-use-only boundaries,
                lot/release-documentation discipline, checkout transparency, and
                no miracle promises.
              </p>
              <p>
                If your audience values careful sourcing and honest language,
                this program may be a fit. If your growth depends on disease,
                dosing, transformation, or hidden-compensation claims, it is not.
              </p>
            </div>
          </div>
        </section>

        <section id="terms" className="border-t border-[#edf0ec] bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
                  Terms snapshot
                </p>
                <h2 className="mt-4 font-serif text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.05] tracking-[-0.03em]">
                  Clear economics, strict claim rules.
                </h2>
              </div>
              <dl className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
                {TERMS.map(([term, value]) => (
                  <div key={term} className="rounded-[1.1rem] border border-[#e6ebe8] bg-[#fafbfa] p-4">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                      {term}
                    </dt>
                    <dd className="mt-2 text-[13px] leading-6 text-[#0f1613]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="bg-[#0b100e] py-16 text-white lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
            <FitList title="Good fit" items={GOOD_FIT} tone="good" />
            <FitList title="Not a fit" items={NOT_FIT} tone="bad" />
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
                Compliance promise
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.02] tracking-[-0.04em]">
                Keep the relationship clear and the claims clean.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#44514b]">
                You can say Titan is a research-use-only supplier focused on
                documentation, order review, and checkout clarity. You cannot
                say Titan products treat disease, produce guaranteed results,
                are for human consumption, are dosing protocols, are FDA-approved,
                or are safe/effective for a medical use.
              </p>
            </div>
            <div className="space-y-3 lg:col-span-7">
              {FAQS.map(([q, a]) => (
                <details key={q} className="group rounded-[1.1rem] border border-[#e6ebe8] bg-[#fafbfa] px-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-[14px] font-semibold text-[#0f1613]">
                    {q}
                    <span className="text-lg text-[#8a9690] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="pb-5 text-[13px] leading-7 text-[#5c6762]">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <AffiliateApplicationForm />
          </div>
        </section>

        <NextRead
          eyebrow="Press kit"
          title="Read the documentation-first story behind Titan."
          href="/press"
          blurb="Company boilerplate, founder/operator bio, media angles, and claim-safe talking points for partners and press."
        />
      </main>
      <Footer />
    </>
  );
}

function FitList({ title, items, tone }: { title: string; items: string[]; tone: "good" | "bad" }) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-6">
      <h3 className="font-serif text-[1.8rem] tracking-[-0.03em] text-white">{title}</h3>
      <ul className="mt-5 space-y-3 text-[13px] leading-6 text-white/68">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className={tone === "good" ? "text-[#8fd0b5]" : "text-[#e7b0a8]"}>—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
