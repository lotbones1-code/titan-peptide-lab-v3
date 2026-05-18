import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { Footer } from "@/components/site/footer";
import { Nav } from "@/components/site/nav";
import { NextRead } from "@/components/site/next-read";
import { PageHero } from "@/components/site/page-hero";

const PRESS_TITLE = "Press Kit — Titan Peptide Lab";
const PRESS_DESCRIPTION =
  "Company boilerplate, founder/operator bio, media angles, and claim-safe talking points for Titan Peptide Lab’s COA-first research-supply brand.";

const KEY_MESSAGES = [
  ["COA-first, not COA-only", "A COA matters, but the surrounding process — product-page clarity, lot logic, support routing, and payment transparency — matters too."],
  ["Research-use-only boundaries", "Titan does not provide medical guidance, dosing advice, human-use content, or outcome claims."],
  ["Skeptical-buyer positioning", "The brand is built for buyers who want proof they can evaluate before ordering."],
  ["Checkout transparency", "Payment expectations and order handoff should be visible before the buyer commits."],
];

const MEDIA_ANGLES = [
  "The COA is not the whole product: why documentation chains matter in peptide ecommerce.",
  "Research-use-only can still be premium: building a claim-safe brand in a hype category.",
  "What skeptical buyers should ask before ordering from any peptide vendor.",
  "How payment transparency became a trust signal in research-product ecommerce.",
];

const DO_NOT_SAY = [
  "personal health story, personal-use story, or medical recommendation",
  "disease, treatment, dosing, recovery, fat-loss, libido, anti-aging, or transformation claims",
  "safe/effective for human use or FDA-approved product claims",
  "fake customer testimonials, fake affiliate results, or unsupported current-lot proof",
];

export const metadata = {
  title: PRESS_TITLE,
  description: PRESS_DESCRIPTION,
  alternates: { canonical: "/press/" },
  openGraph: {
    title: PRESS_TITLE,
    description: PRESS_DESCRIPTION,
    url: "/press/",
    type: "website" as const,
  },
  robots: { index: true, follow: true },
};

export default function PressPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Press", item: "/press/" },
        ]}
      />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <PageHero
          eyebrow="Press kit"
          title={
            <>
              The COA is not
              <br />
              <em className="not-italic text-[#1e6f58]">the whole product</em>.
            </>
          }
          supporting={
            <>
              Titan Peptide Lab is a founder-led, research-use-only peptide vendor
              focused on COA-first trust, lot-aware documentation, transparent
              checkout education, and claim-safe buyer language.
            </>
          }
          aside={
            <div className="rounded-[1.75rem] border border-[#dfe6e2] bg-[#f7faf8] p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
                Media contact
              </p>
              <h2 className="mt-3 font-serif text-[1.7rem] leading-[1.05] tracking-[-0.03em]">
                For press, podcasts, and partner inquiries.
              </h2>
              <p className="mt-4 text-[13px] leading-7 text-[#5c6762]">
                Use the support inbox until a dedicated press mailbox is provisioned.
                Include outlet, deadline, topic, and whether you need a founder/operator quote.
              </p>
              <a
                href="mailto:support@titanpeptidelab.com?subject=Titan%20press%20inquiry"
                className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-[#0f1613] px-5 text-[12px] font-semibold text-white transition-colors hover:bg-[#1a5c48]"
              >
                Email support@titanpeptidelab.com
              </a>
              <p className="mt-4 text-[11px] leading-5 text-[#8a9690]">
                Please keep requests research-use-only. Titan will not provide medical, dosing, or human-use commentary.
              </p>
            </div>
          }
        />

        <section className="bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
                Company boilerplate
              </p>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.04] tracking-[-0.03em]">
                Documentation should be part of the product experience.
              </h2>
            </div>
            <div className="space-y-5 text-[14px] leading-8 text-[#44514b] lg:col-span-8">
              <p>
                Titan Peptide Lab is a research-use-only peptide vendor built around a simple standard:
                documentation should be part of the product experience, not an afterthought. Titan focuses on
                COA-first merchandising, lot-aware release language, clear checkout education, and strict claim boundaries.
              </p>
              <p>
                The company’s public positioning is intentionally anti-hype: no medical claims, no dosing advice,
                no transformation stories, and no fake scarcity. Titan is built for skeptical buyers, clinic operators,
                researchers, and advanced purchasers who want to evaluate a vendor through proof, process, support clarity,
                and operational restraint.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#edf0ec] bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
                Founder/operator bio
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.02] tracking-[-0.04em]">
                Built by an operator, not a hype script.
              </h2>
            </div>
            <div className="rounded-[1.5rem] border border-[#e6ebe8] bg-[#fafbfa] p-6 lg:col-span-7">
              <p className="text-[14px] leading-8 text-[#44514b]">
                Titan is founder/operator-led, with a research-use-only peptide vendor posture focused on
                COA-first trust, lot-aware release documentation, and claim-safe buyer education. The public story is about
                making research-product ecommerce more transparent: clearer paperwork, clearer checkout expectations, and no medical,
                dosing, or outcome claims.
              </p>
              <p className="mt-4 text-[12px] leading-6 text-[#8a9690]">
                Privacy boundary: no personal health story, personal-use story, family details, or private hardship narrative.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#0b100e] py-16 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8fd0b5]">
                  Key messages
                </p>
                <h2 className="mt-4 font-serif text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.04] tracking-[-0.03em]">
                  The public story is proof infrastructure.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
                {KEY_MESSAGES.map(([title, body]) => (
                  <article key={title} className="rounded-[1.15rem] border border-white/10 bg-white/[0.045] p-5">
                    <h3 className="text-[13px] font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-[12px] leading-6 text-white/58">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
                Media angles
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.02] tracking-[-0.04em]">
                Claim-safe story routes.
              </h2>
            </div>
            <div className="space-y-3 lg:col-span-7">
              {MEDIA_ANGLES.map((angle) => (
                <div key={angle} className="rounded-[1.15rem] border border-[#e6ebe8] bg-[#fafbfa] p-5 text-[14px] leading-7 text-[#44514b]">
                  {angle}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#edf0ec] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
                Guardrails
              </p>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.04] tracking-[-0.03em]">
                What Titan should not say publicly.
              </h2>
            </div>
            <ul className="space-y-3 lg:col-span-7">
              {DO_NOT_SAY.map((item) => (
                <li key={item} className="rounded-[1.05rem] border border-[#e6ebe8] bg-white p-4 text-[13px] leading-6 text-[#5c6762]">
                  No {item}.
                </li>
              ))}
            </ul>
          </div>
        </section>

        <NextRead
          eyebrow="Affiliate beta"
          title="Partner with Titan only if the claims stay clean."
          href="/affiliates"
          blurb="The affiliate beta gives creators 30% commission and a 20% audience code, with FTC disclosure and research-use-only claim rules built into the page."
        />
      </main>
      <Footer />
    </>
  );
}
