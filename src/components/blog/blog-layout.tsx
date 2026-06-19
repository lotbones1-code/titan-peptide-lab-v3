import Link from "next/link";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";

export interface BlogTocItem {
  id: string;
  label: string;
}

export interface BlogLayoutProps {
  category: string;
  title: ReactNode;
  lede: string;
  readingTime: string;
  published: string;
  toc: BlogTocItem[];
  children: ReactNode;
  /**
   * Optional breadcrumb for BreadcrumbList structured data. `name` is the
   * article's plain-text title, `path` its canonical URL path. Emits
   * Home › Blog › {name} so the visible trail is mirrored in schema and the
   * page becomes eligible for breadcrumb rich results.
   */
  breadcrumb?: { name: string; path: string };
}

export function BlogLayout({
  category,
  title,
  lede,
  readingTime,
  published,
  toc,
  children,
  breadcrumb,
}: BlogLayoutProps) {
  return (
    <article className="bg-[#fbf8f2] text-[#13211c]">
      {breadcrumb ? (
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "/" },
            { name: "Blog", item: "/blog" },
            { name: breadcrumb.name, item: breadcrumb.path },
          ]}
        />
      ) : null}
      {/* Masthead */}
      <header className="border-b border-[#13211c]/12">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase text-[#53625c]">
            <Link
              href="/blog"
              className="transition-colors hover:text-[oklch(0.68_0.17_78)]"
            >
              Blog
            </Link>
            <span aria-hidden>/</span>
            <span>{category}</span>
          </div>

          <h1 className="mt-8 font-serif text-4xl font-normal leading-none text-[#13211c] text-pretty md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-8 max-w-2xl font-serif text-2xl italic leading-9 text-[#53625c]">
            {lede}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase text-[#53625c]">
            <span>{readingTime}</span>
            <span aria-hidden>·</span>
            <span>Published {published}</span>
            <span aria-hidden>·</span>
            <span className="text-[oklch(0.68_0.17_78)]">
              Titan Peptide Lab
            </span>
          </div>
        </div>
      </header>

      {/* Body with sticky TOC */}
      <div className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* TOC */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="font-mono text-[10px] uppercase text-[#53625c]">
              Contents
            </div>
            <nav className="mt-5">
              <ol className="space-y-3 text-sm">
                {toc.map((item, i) => (
                  <li key={item.id} className="flex gap-3">
                    <span className="pt-1 font-mono text-[10px] tabular-nums text-[#7A8783]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${item.id}`}
                      className="leading-snug text-[#24332c] transition-colors hover:text-[oklch(0.68_0.17_78)]"
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

            <div className="mt-20 border-t border-[#13211c]/16 pt-6 font-mono text-[10px] uppercase text-[#53625c]">
              More articles on the{" "}
              <Link
                href="/blog"
                className="text-[oklch(0.68_0.17_78)] hover:underline"
              >
                Titan blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function BlogSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-16 scroll-mt-24 first:mt-0">
      <h2 className="mt-3 font-serif text-3xl font-normal leading-tight text-[#13211c] md:text-4xl">
        {title}
      </h2>
      <div className="mt-6 space-y-5 text-[17px] leading-[1.75] text-[#24332c]">
        {children}
      </div>
    </section>
  );
}

export function BlogH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 font-serif text-2xl font-normal leading-tight text-[#13211c]">
      {children}
    </h3>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="text-[oklch(0.68_0.17_78)]">{children}</span>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="my-10 border-l-2 border-[oklch(0.68_0.17_78)] bg-white/70 px-6 py-5 font-serif text-lg italic leading-[1.6] text-[#24332c]">
      {children}
    </aside>
  );
}

export function BlogCTA({
  heading,
  text,
  href,
  label,
}: {
  heading: string;
  text: string;
  href: string;
  label: string;
}) {
  return (
    <section className="mt-16 border border-[#13211c]/12 bg-white/70 p-8 text-center">
      <h2 className="font-serif text-2xl font-normal text-[#13211c] md:text-3xl">
        {heading}
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.7] text-[#4a5852]">
        {text}
      </p>
      <Link
        href={href}
        className="mt-6 inline-flex h-11 items-center rounded-full bg-[#0a0a0a] px-8 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a5c48]"
      >
        {label}
      </Link>
    </section>
  );
}

export function BlogDisclaimer() {
  return (
    <div className="mt-16 border border-[#13211c]/16 bg-white/70 p-6 text-sm leading-[1.7] text-[#24332c]">
      <div className="font-mono text-[10px] uppercase text-[#53625c]">
        Disclaimer
      </div>
      <p className="mt-3">
        <strong className="text-[#13211c]">
          For research purposes only. Not for human consumption.
        </strong>{" "}
        This article is educational content written for qualified researchers and
        is not medical advice. Compounds referenced are sold for{" "}
        <em>in-vitro</em> research use only and are not approved by the FDA for
        the prevention, treatment, or cure of any disease.
      </p>
    </div>
  );
}
