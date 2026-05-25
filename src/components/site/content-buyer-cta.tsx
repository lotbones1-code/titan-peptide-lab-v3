import Link from "next/link";

type ContentBuyerCtaProps = {
  eyebrow: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  note?: string;
  compact?: boolean;
};

export function ContentBuyerCta({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  note = "FIRST10 stays attached when you enter through this path.",
  compact = false,
}: ContentBuyerCtaProps) {
  return (
    <section
      className={`border border-[#13211c]/12 bg-white/80 ${
        compact ? "p-5" : "p-7 sm:p-8"
      }`}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1e6f58]">
        {eyebrow}
      </div>
      <h2
        className={`mt-3 font-serif font-normal leading-tight text-[#13211c] ${
          compact ? "text-[1.65rem]" : "text-[2rem] md:text-[2.4rem]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-3 max-w-2xl leading-[1.7] text-[#4a5852] ${
          compact ? "text-[14px]" : "text-[15px]"
        }`}
      >
        {body}
      </p>

      <div className="mt-4 inline-flex rounded-full border border-[#dce6df] bg-[#f6fbf8] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1a5c48]">
        FIRST10 attached
      </div>

      <div
        className={`mt-5 flex gap-3 ${
          compact ? "flex-col" : "flex-col sm:flex-row"
        }`}
      >
        <Link
          href={primaryHref}
          className="inline-flex h-11 items-center justify-center rounded-full bg-[#0f1110] px-6 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a5c48]"
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex h-11 items-center justify-center rounded-full border border-[#d7dbd7] px-6 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0f1110] transition-colors hover:border-[#0f1110]"
        >
          {secondaryLabel}
        </Link>
      </div>

      <p className="mt-4 text-[11px] leading-[1.7] text-[#6d7b74]">{note}</p>
    </section>
  );
}
