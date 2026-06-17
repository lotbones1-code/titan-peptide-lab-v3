"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, BookOpen, FlaskConical } from "lucide-react";
import { PRODUCTS, type Product } from "@/lib/products";
import {
  RESEARCH_AREAS,
  pubmedUrl,
  type ResearchArea,
  type AssistantCard,
} from "@/lib/research-assistant.data";

const CATEGORY_LABEL: Record<Product["category"], string> = {
  "nasal-spray": "Nasal spray",
  injectable: "Injectable",
  oral: "Oral",
  stack: "Stack",
};

function formatPrice(price: number) {
  return Number.isInteger(price) ? `$${price}` : `$${price.toFixed(2)}`;
}

/**
 * Peptide Research Assistant — a client-side guided matcher.
 *
 * Visitor picks a research AREA → gets curated, compliance-framed peptide
 * "research cards" (neutral literature summary + real PubMed citation +
 * RUO notice + product link). No live LLM, no server, no diagnosis.
 */
export function ResearchAssistant() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const productsBySlug = useMemo(() => {
    const m = new Map<string, Product>();
    for (const p of PRODUCTS) m.set(p.slug, p);
    return m;
  }, []);

  const active: ResearchArea | null =
    RESEARCH_AREAS.find((a) => a.id === activeId) ?? null;

  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
      {/* Step indicator */}
      <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]">
        <span className={active ? "text-[#8a9690]" : "text-[#1e6f58]"}>
          1 · Choose a research area
        </span>
        <span className="text-[#cdd4d0]">/</span>
        <span className={active ? "text-[#1e6f58]" : "text-[#cdd4d0]"}>
          2 · Review the literature
        </span>
      </div>

      {!active ? (
        <AreaPicker onPick={setActiveId} />
      ) : (
        <AreaResult
          area={active}
          productsBySlug={productsBySlug}
          onBack={() => setActiveId(null)}
        />
      )}

      <ComplianceFootnote />
    </section>
  );
}

function AreaPicker({ onPick }: { onPick: (id: string) => void }) {
  return (
    <div className="mt-8">
      <p className="max-w-2xl text-[15px] leading-[1.8] text-[#5c6762]">
        Tell us what you&rsquo;re researching. We&rsquo;ll show the peptides the
        published literature discusses for that area — each with a neutral
        summary, a real citation you can open on PubMed, and a link to the
        matching research compound. This is educational reference material, not
        medical advice.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RESEARCH_AREAS.map((area) => (
          <button
            key={area.id}
            type="button"
            onClick={() => onPick(area.id)}
            className="group flex h-full flex-col rounded-[1.25rem] border border-[#e8e6e1] bg-white p-6 text-left transition-all duration-200 hover:border-[#1e6f58] hover:shadow-[0_18px_54px_-34px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e6f58]"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a5c48]">
              Research area
            </span>
            <h3 className="mt-2 font-serif text-[1.45rem] leading-[1.08] tracking-[-0.02em] text-[#0f1110]">
              {area.label}
            </h3>
            <p className="mt-3 flex-1 text-[13px] leading-[1.7] text-[#5c6762]">
              {area.hint}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#0f1110] transition-colors group-hover:text-[#1e6f58]">
              {area.cards.length} compound
              {area.cards.length === 1 ? "" : "s"}
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function AreaResult({
  area,
  productsBySlug,
  onBack,
}: {
  area: ResearchArea;
  productsBySlug: Map<string, Product>;
  onBack: () => void;
}) {
  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5c6762] transition-colors hover:text-[#0f1110] focus-visible:outline-none"
      >
        <ArrowLeft className="size-3.5" />
        All research areas
      </button>

      <div className="mt-6 flex items-center gap-3">
        <div className="h-px w-8 bg-[#1e6f58]" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
          {area.label}
        </span>
      </div>
      <h2 className="mt-4 max-w-3xl font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.04] tracking-[-0.03em] text-[#0f1613]">
        What the literature discusses for {area.label.toLowerCase()}
      </h2>
      <p className="mt-5 max-w-2xl text-[14px] leading-[1.8] text-[#5c6762]">
        {area.studies}
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {area.cards.map((card) => (
          <ResearchCard
            key={card.productSlug}
            card={card}
            product={productsBySlug.get(card.productSlug)}
          />
        ))}
      </div>
    </div>
  );
}

function ResearchCard({
  card,
  product,
}: {
  card: AssistantCard;
  product: Product | undefined;
}) {
  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-[#e8e6e1] bg-white p-7">
      <div className="flex items-start gap-3">
        <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#0f1110]">
          <FlaskConical className="size-4 text-white" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-serif text-[1.5rem] leading-[1.05] tracking-[-0.02em] text-[#0f1110]">
            {card.compound}
          </h3>
          <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.08em] text-[#1a5c48]">
            {card.focus}
          </p>
        </div>
      </div>

      <p className="mt-5 text-[14px] leading-[1.78] text-[#454d48]">
        {card.summary}
      </p>

      {/* Citations */}
      {card.citations.length > 0 ? (
        <div className="mt-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
            Published research
          </p>
          <ul className="mt-3 space-y-2.5">
            {card.citations.map((c) => (
              <li key={c.pmid}>
                <a
                  href={pubmedUrl(c.pmid)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg border border-[#eef0ed] bg-[#fafbfa] px-3.5 py-3 transition-colors hover:border-[#1e6f58]"
                >
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="text-[12px] font-semibold text-[#0f1110]">
                      {c.authors}{" "}
                      <span className="font-normal text-[#6d756f]">
                        — {c.source}
                      </span>
                    </span>
                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#1e6f58] group-hover:underline">
                      PMID {c.pmid}
                    </span>
                  </span>
                  <span className="mt-1 block text-[12px] leading-[1.55] text-[#5c6762]">
                    {c.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* RUO notice per card */}
      <p className="mt-5 text-[10.5px] leading-[1.6] text-[#9aa39d]">
        For research use only. Not a recommendation, dosage, or medical advice.
        Not intended for human consumption, diagnosis, or treatment.
      </p>

      {/* Product + article links */}
      <div className="mt-auto border-t border-[#e8e6e1] pt-5">
        {product ? (
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8a9690]">
                {CATEGORY_LABEL[product.category]} · {product.size}
              </p>
              <p className="mt-1 text-[1.05rem] font-semibold tracking-[-0.02em] text-[#0f1110]">
                {formatPrice(product.price)}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {card.articleSlug ? (
                <Link
                  href={`/research/${card.articleSlug}/`}
                  className="inline-flex h-10 items-center gap-1.5 rounded-full border border-[#d7dbd7] px-4 text-[11px] font-semibold text-[#0f1110] transition-colors hover:border-[#0f1110]"
                >
                  <BookOpen className="size-3.5" />
                  Literature
                </Link>
              ) : null}
              <Link
                href={`/products/${product.slug}/`}
                className="inline-flex h-10 items-center gap-1.5 rounded-full bg-[#0f1110] px-5 text-[11px] font-semibold text-white transition-colors hover:bg-[#1a5c48]"
              >
                View compound
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          // Defensive: catalog slug missing — never render a broken link.
          <p className="text-[12px] text-[#8a9690]">
            Compound reference: {card.compound}.
          </p>
        )}
      </div>
    </article>
  );
}

function ComplianceFootnote() {
  return (
    <div className="mt-14 rounded-[1.25rem] border border-[#e8e6e1] bg-[#fafbfa] p-6 sm:p-7">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a5c48]">
        How to read this tool
      </p>
      <p className="mt-3 max-w-3xl text-[13px] leading-[1.8] text-[#5c6762]">
        This assistant is an educational index of what published research
        <em> discusses</em> for each area — it does not diagnose, prescribe, or
        recommend a compound for any person. Summaries describe findings from
        the cited literature, the majority of which is preclinical (cell and
        animal models). Citations link to the original abstracts on PubMed so
        you can read the source yourself. Every product Titan sells is a research
        compound sold strictly for research use only — not for human
        consumption, diagnosis, or treatment, and nothing here is medical advice.
      </p>
    </div>
  );
}
