import React from "react";

/**
 * Shared premium page hero used on inner pages (about, products, contact,
 * lab-testing, etc.) to keep brand rhythm literally identical:
 *   - eyebrow rail (green line + uppercase label)
 *   - serif display h1 (same clamp/leading/tracking)
 *   - optional supporting lede
 *   - optional aside slot (col-5 on lg) for sidecar cards / forms
 */
export function PageHero({
  eyebrow,
  title,
  supporting,
  aside,
  below,
}: {
  eyebrow: string;
  title: React.ReactNode;
  supporting?: React.ReactNode;
  aside?: React.ReactNode;
  below?: React.ReactNode;
}) {
  const main = (
    <>
      <h1 className="font-serif text-[clamp(2.4rem,4.8vw,3.8rem)] leading-[0.96] tracking-[-0.03em] text-[#0f1613] text-pretty">
        {title}
      </h1>
      {supporting ? (
        <div className="mt-8 max-w-xl text-[15px] leading-[1.8] text-[#5c6762]">
          {supporting}
        </div>
      ) : null}
      {below}
    </>
  );

  return (
    <section className="border-b border-[rgb(15_22_19/6%)] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#1e6f58]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
            {eyebrow}
          </span>
        </div>

        {aside ? (
          <div className="mt-12 grid gap-x-14 gap-y-16 lg:grid-cols-12">
            <div className="lg:col-span-7">{main}</div>
            <aside className="lg:col-span-5">{aside}</aside>
          </div>
        ) : (
          <div className="mt-12">{main}</div>
        )}
      </div>
    </section>
  );
}
