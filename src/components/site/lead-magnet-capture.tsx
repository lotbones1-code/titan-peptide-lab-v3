import { Check, FileText, ShieldCheck } from "lucide-react";

type Variant = "homepage" | "pdp" | "compact";

type LeadMagnetCaptureProps = {
  variant?: Variant;
  source?: string;
  productName?: string;
  className?: string;
};

const STORAGE_KEY = "titan_lead_magnet_requests";
const FORM_ACTION = process.env.NEXT_PUBLIC_LEAD_MAGNET_FORM_ACTION || "";
const EMAIL_FIELD = process.env.NEXT_PUBLIC_LEAD_MAGNET_EMAIL_FIELD || "email";

const COPY = {
  homepage: {
    eyebrow: "Free buyer verification guide",
    title: "Run the COA check before you trust a vendor.",
    body: "Get Titan’s 12-point peptide buyer checklist: lot matching, lab identity, HPLC reporting, support routing, and vendor red flags — written for research-use-only buyers, not dosing advice.",
    button: "Send me the checklist",
    source: "homepage-checklist",
  },
  pdp: {
    eyebrow: "Not ready to order?",
    title: "Take the 12-point COA checklist with you.",
    body: "Compare this product against any research-grade vendor with the same questions: lot code, certificate source, release path, payment clarity, and support trail.",
    button: "Email me the checklist",
    source: "pdp-checklist",
  },
  compact: {
    eyebrow: "Vendor checklist",
    title: "Get the COA checklist.",
    body: "12 checks for lot-matched proof, lab identity, and research-use-only claim discipline.",
    button: "Get checklist",
    source: "compact-checklist",
  },
} satisfies Record<Variant, { eyebrow: string; title: string; body: string; button: string; source: string }>;

const LOCAL_SAVE_SCRIPT = `
(function () {
  if (window.__titanLeadMagnetBound) return;
  window.__titanLeadMagnetBound = true;
  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form || !form.matches || !form.matches("[data-lead-magnet-form]")) return;
    var emailField = form.getAttribute("data-email-field") || "email";
    var emailInput = form.querySelector("[name='" + emailField + "']") || form.querySelector("[name='email']");
    var email = emailInput && emailInput.value ? String(emailInput.value).trim() : "";
    var record = {
      email: email,
      source: form.querySelector("[name='source']") ? form.querySelector("[name='source']").value : "lead-magnet",
      product: form.querySelector("[name='product']") ? form.querySelector("[name='product']").value : undefined,
      createdAt: new Date().toISOString()
    };
    try {
      var raw = window.localStorage.getItem("${STORAGE_KEY}");
      var existing = raw ? JSON.parse(raw) : [];
      window.localStorage.setItem("${STORAGE_KEY}", JSON.stringify([record].concat(existing).slice(0, 50)));
    } catch (error) {}
    if (form.getAttribute("data-local-only") === "true") {
      event.preventDefault();
      if (emailInput) emailInput.value = "";
      var status = form.querySelector("[data-lead-magnet-status]");
      var buttonLabel = form.querySelector("[data-lead-magnet-button-label]");
      if (status) status.textContent = "Saved locally for QA. Connect the email provider to deliver the checklist.";
      if (buttonLabel) buttonLabel.textContent = "Saved";
    }
  });
})();
`;

export function LeadMagnetCapture({
  variant = "homepage",
  source,
  productName,
  className = "",
}: LeadMagnetCaptureProps) {
  const c = COPY[variant];
  const resolvedSource = source || c.source;
  const compact = variant === "compact";
  const id = `lead-magnet-${resolvedSource}`.replace(/[^a-zA-Z0-9_-]/g, "-");

  return (
    <section
      className={`overflow-hidden rounded-[1.65rem] border border-[#dfe6e2] bg-[#f7faf8] text-[#0f1613] shadow-[0_20px_70px_-54px_rgb(15_22_19/38%)] ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className={`grid gap-0 ${compact ? "lg:grid-cols-[1fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"}`}>
        <div className={`${compact ? "p-5 md:p-6" : "p-6 md:p-8 lg:p-10"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1e6f58]/20 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            {c.eyebrow}
          </div>
          <h2
            id={`${id}-title`}
            className={`${compact ? "mt-3 text-[1.65rem]" : "mt-5 text-[clamp(2rem,4vw,3.2rem)]"} font-serif leading-[1.02] tracking-[-0.04em] text-[#0f1613] text-pretty`}
          >
            {c.title}
          </h2>
          <p className={`${compact ? "mt-3 text-[13px]" : "mt-4 text-[15px]"} max-w-[62ch] leading-7 text-[#44514b]`}>
            {c.body}
          </p>
          <ul className="mt-5 grid gap-2 text-[12px] leading-5 text-[#5c6762] sm:grid-cols-2">
            {[
              "Lot-matched COA questions",
              "Lab identity red flags",
              "Payment/support clarity",
              "No dosing or human-use claims",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1e6f58]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-[#dfe6e2] bg-white p-5 md:p-6 lg:border-l lg:border-t-0">
          <form
            action={FORM_ACTION || undefined}
            method="post"
            data-lead-magnet-form
            data-email-field={EMAIL_FIELD}
            data-local-only={FORM_ACTION ? undefined : "true"}
            className="rounded-[1.3rem] border border-[#e6ebe8] bg-white p-4 shadow-[0_1px_2px_rgb(15_22_19/4%)]"
          >
            <input type="hidden" name="source" value={resolvedSource} />
            {productName ? <input type="hidden" name="product" value={productName} /> : null}
            <label
              htmlFor={`${id}-email`}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]"
            >
              Email address
            </label>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <input
                id={`${id}-email`}
                name={EMAIL_FIELD}
                type="email"
                required
                placeholder="researcher@lab.org"
                className="min-h-12 flex-1 rounded-full border border-[#dfe6e2] bg-white px-4 text-[14px] text-[#0f1613] outline-none transition-colors placeholder:text-[#b8c1bc] focus-visible:border-[#1e6f58] focus-visible:ring-2 focus-visible:ring-[#1e6f58]/15"
              />
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1e6f58] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#175946] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e6f58]/25"
              >
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                <span data-lead-magnet-button-label>{c.button}</span>
              </button>
            </div>
            <p data-lead-magnet-status aria-live="polite" className="mt-3 text-[11px] leading-5 text-[#8a9690]">
              {FORM_ACTION
                ? "Uses Titan’s configured email form endpoint; no private API key is exposed."
                : "Provider setup pending: this form saves test requests to localStorage so the UX can be verified before Kit is connected."}
            </p>
          </form>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: LOCAL_SAVE_SCRIPT }} />
    </section>
  );
}

declare global {
  interface Window {
    __titanLeadMagnetBound?: boolean;
  }
}
