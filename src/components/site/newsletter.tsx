import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "./reveal";

export function Newsletter() {
  return (
    <section className="bg-[#f8f6f2] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2rem] border border-[rgb(15_22_19/8%)] bg-[#0f1613] p-8 text-white shadow-[0_35px_90px_-50px_rgba(15,22,19,0.8)] md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-[#8eb8aa]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8eb8aa]">
                    Research notes
                  </span>
                </div>
                <h3 className="mt-5 max-w-md font-serif text-[clamp(2.2rem,3.8vw,3.2rem)] leading-[0.95] tracking-[-0.04em] text-white">
                  Get release notices and restock emails.
                </h3>
                <p className="mt-4 max-w-md text-[14px] leading-[1.8] text-white/68">
                  Join the Titan list for first-order pricing, new compound
                  drops, batch updates, and restock alerts.
                </p>
                <p className="mt-2 text-[12px] text-white/42">
                  Laboratory research purposes only. Not for human consumption.
                </p>
              </div>

              <form className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  required
                  placeholder="research@lab.com"
                  aria-label="Email address"
                  className="h-11 rounded-full border-white/12 bg-white px-5 text-[14px] text-[#0f1613] placeholder:text-[#a0a9a4]"
                />
                <Button
                  type="submit"
                  className="h-11 rounded-full bg-[#1e6f58] px-6 text-[13px] font-medium text-white hover:bg-[#255f4f]"
                >
                  Join Titan
                </Button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
