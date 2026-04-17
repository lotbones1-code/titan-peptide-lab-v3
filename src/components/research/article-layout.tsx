import Link from "next/link";
import type { ReactNode } from "react";

export interface TocItem {
  id: string;
  label: string;
}

export interface ArticleLayoutProps {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  readingTime: string;
  updated: string;
  toc: TocItem[];
  children: ReactNode;
}

export function ArticleLayout({
  eyebrow,
  title,
  lede,
  readingTime,
  updated,
  toc,
  children,
}: ArticleLayoutProps) {
  return (
    <article className="bg-stone-50 text-stone-900">
      {/* Masthead */}
      <header className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
            <Link
              href="/research"
              className="transition-colors hover:text-[oklch(0.68_0.17_78)]"
            >
              Research
            </Link>
            <span aria-hidden>/</span>
            <span>{eyebrow}</span>
          </div>

          <h1 className="mt-8 font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] font-normal leading-[0.98] tracking-[-0.02em] text-stone-900 text-pretty">
            {title}
          </h1>

          <p className="mt-8 max-w-2xl font-serif text-xl leading-[1.55] text-stone-600 italic">
            {lede}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
            <span>{readingTime}</span>
            <span aria-hidden>·</span>
            <span>Updated {updated}</span>
            <span aria-hidden>·</span>
            <span className="text-[oklch(0.68_0.17_78)]">
              For research use only
            </span>
          </div>
        </div>
      </header>

      {/* Body with sticky TOC */}
      <div className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* TOC */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
              Contents
            </div>
            <nav className="mt-5">
              <ol className="space-y-3 text-sm">
                {toc.map((item, i) => (
                  <li key={item.id} className="flex gap-3">
                    <span className="font-mono text-[10px] tabular-nums text-stone-400 pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${item.id}`}
                      className="text-stone-700 leading-snug transition-colors hover:text-[oklch(0.68_0.17_78)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Prose */}
          <div className="max-w-prose">
            <div className="prose-research">{children}</div>

            <div className="mt-20 border-t border-stone-300 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
              End of entry — return to{" "}
              <Link
                href="/research"
                className="text-[oklch(0.68_0.17_78)] hover:underline"
              >
                research index
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-16 scroll-mt-24 first:mt-0">
      {kicker ? (
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl font-normal leading-tight text-stone-900 md:text-4xl">
        {title}
      </h2>
      <div className="mt-6 space-y-5 text-[17px] leading-[1.75] text-stone-800">
        {children}
      </div>
    </section>
  );
}

export function Gold({ children }: { children: ReactNode }) {
  return (
    <span className="text-[oklch(0.68_0.17_78)]">{children}</span>
  );
}

export function PullNote({ children }: { children: ReactNode }) {
  return (
    <aside className="my-10 border-l-2 border-[oklch(0.68_0.17_78)] bg-stone-100/60 px-6 py-5 font-serif text-lg italic leading-[1.6] text-stone-700">
      {children}
    </aside>
  );
}

export function References({
  items,
}: {
  items: { n: number; text: string; href?: string }[];
}) {
  return (
    <section id="references" className="mt-16 scroll-mt-24">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
        Bibliography
      </div>
      <h2 className="mt-3 font-serif text-3xl font-normal leading-tight text-stone-900">
        References
      </h2>
      <ol className="mt-6 space-y-4 text-sm leading-[1.65] text-stone-700">
        {items.map((r) => (
          <li key={r.n} className="grid grid-cols-[2rem_1fr] gap-3">
            <span className="font-mono text-[11px] tabular-nums text-stone-500 pt-0.5">
              [{String(r.n).padStart(2, "0")}]
            </span>
            {r.href ? (
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[oklch(0.68_0.17_78)]"
              >
                {r.text}
              </a>
            ) : (
              <span>{r.text}</span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function FAQ({
  items,
}: {
  items: { q: string; a: ReactNode }[];
}) {
  return (
    <section id="faq" className="mt-16 scroll-mt-24">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
        Frequently asked
      </div>
      <h2 className="mt-3 font-serif text-3xl font-normal leading-tight text-stone-900">
        Research questions
      </h2>
      <dl className="mt-8 divide-y divide-stone-300 border-y border-stone-300">
        {items.map((it, i) => (
          <div key={i} className="py-6">
            <dt className="font-serif text-xl leading-snug text-stone-900">
              {it.q}
            </dt>
            <dd className="mt-3 text-[15px] leading-[1.7] text-stone-700">
              {it.a}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Disclaimer() {
  return (
    <div className="mt-16 border border-stone-300 bg-stone-100 p-6 text-sm leading-[1.7] text-stone-700">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
        Disclaimer
      </div>
      <p className="mt-3">
        <strong className="text-stone-900">
          For research purposes only. Not for human consumption.
        </strong>{" "}
        This article is a literature summary written for qualified researchers
        and is not medical advice. Compounds referenced are sold for{" "}
        <em>in-vitro</em> research use only and are not approved by the FDA for
        the prevention, treatment, or cure of any disease.
      </p>
    </div>
  );
}
