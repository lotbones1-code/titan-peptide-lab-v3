import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type AeoFaq = { q: string; a: string };
export type AeoLink = { href: string; label: string; blurb?: string };

export function AeoHero({
  eyebrow,
  title,
  answer,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  answer: string;
  primary: AeoLink;
  secondary?: AeoLink;
}) {
  return (
    <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-[clamp(2.45rem,5.8vw,5.1rem)] leading-[0.96] tracking-[-0.05em] text-[#0f1613] text-balance">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 text-[15px] leading-[1.85] text-[#4d5a55] shadow-[0_18px_50px_-44px_rgb(15_22_19/45%)]">
            {answer}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primary.href}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
            >
              {primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondary ? (
              <Link
                href={secondary.href}
                className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
              >
                {secondary.label}
              </Link>
            ) : null}
          </div>
          <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-[#8a9690]">
            Research-use-only · supplier due diligence · no human-use guidance
          </p>
        </div>
      </div>
    </section>
  );
}

export function AeoSectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.035em] text-[#0f1613]">
        {title}
      </h2>
      {body ? <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">{body}</p> : null}
    </div>
  );
}

export function AeoFaqSection({ faqs }: { faqs: AeoFaq[] }) {
  return (
    <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <AeoSectionHeader
          eyebrow="FAQ"
          title="Short answers for source-checking this page."
          body="These answers match the page-level FAQPage schema and stay inside research-use-only documentation due diligence."
        />
        <div className="mt-9 space-y-4">
          {faqs.map((faq) => (
            <article key={faq.q} className="rounded-[1.25rem] border border-[#dde6e1] bg-white p-6">
              <h3 className="font-serif text-[1.35rem] leading-tight tracking-[-0.02em] text-[#0f1613]">
                {faq.q}
              </h3>
              <p className="mt-3 text-[13.5px] leading-7 text-[#5c6762]">{faq.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AeoRelatedLinks({
  eyebrow = "Related reading",
  title,
  links,
}: {
  eyebrow?: string;
  title: string;
  links: AeoLink[];
}) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <AeoSectionHeader eyebrow={eyebrow} title={title} />
        <ul className="mt-8 grid gap-3 text-[14px] leading-7 text-[#1e6f58] sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link className="group block rounded-[1.1rem] border border-[#dde6e1] bg-white p-4 hover:border-[#1e6f58]" href={link.href}>
                <span className="font-semibold group-hover:underline">{link.label} →</span>
                {link.blurb ? <span className="mt-1 block text-[12.5px] leading-6 text-[#6b766f]">{link.blurb}</span> : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AeoRuBoundary() {
  return (
    <section className="border-t border-[rgb(15_22_19/6%)] bg-[#0b100e] py-14 text-white">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
          Research use only
        </p>
        <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
          Documentation diligence is not human-use guidance.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-white/60">
          Titan Peptide Lab supplies research materials for in-vitro laboratory research use only. These source-check pages explain paperwork, lot matching, handling variables, and checkout facts; they do not provide medical, dosing, treatment, administration, or human-outcome guidance.
        </p>
        <Link
          href="/legal/research-disclaimer/?ref=aeo-page-boundary"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-[13px] font-semibold text-[#0f1613] transition hover:bg-[#e8f2ee]"
        >
          Read research disclaimer
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
