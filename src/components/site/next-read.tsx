import Link from "next/link";

/**
 * Editorial "Next read" band rendered before the footer on inner pages.
 * Keeps the reader in the brand instead of dead-ending at the footer.
 * Rotation: Lab Testing → About → Products → Lab Testing …
 */
export function NextRead({
  eyebrow,
  title,
  href,
  blurb,
}: {
  eyebrow: string;
  title: string;
  href: string;
  blurb: string;
}) {
  return (
    <section className="border-t border-[rgb(15_22_19/6%)] bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#1e6f58]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
            Next read
          </span>
        </div>

        <Link
          href={href}
          className="group mt-8 block border-t border-[rgb(15_22_19/6%)] pt-8"
        >
          <div className="grid gap-x-10 gap-y-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                {eyebrow}
              </span>
              <h3 className="mt-3 font-serif text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.05] tracking-[-0.02em] text-[#0f1613] text-pretty transition-colors group-hover:text-[#1e6f58]">
                {title}
              </h3>
              <p className="mt-4 max-w-xl text-[14px] leading-[1.75] text-[#5c6762]">
                {blurb}
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#0f1613] transition-colors group-hover:text-[#1e6f58]">
                Read
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
