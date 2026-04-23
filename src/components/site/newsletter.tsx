import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "./reveal";

export function Newsletter() {
  return (
    <section className="bg-[#f8f6f2] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-[rgb(15_22_19/8%)] bg-[#0f1613] text-white shadow-[0_35px_90px_-50px_rgba(15,22,19,0.8)]">
            <div className="grid gap-px bg-white/10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="bg-[#0f1613] p-8 md:p-12">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-[#8eb8aa]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8eb8aa]">
                    Release notices
                  </span>
                </div>
                <h3 className="mt-5 max-w-[12ch] font-serif text-[clamp(2.35rem,4vw,3.7rem)] leading-[0.93] tracking-[-0.045em] text-white">
                  Get restocks, batch releases, and first-look drops.
                </h3>
                <p className="mt-5 max-w-[50ch] text-[14px] leading-[1.9] text-white/68">
                  Titan email should feel like catalog intelligence, not generic discount spam. Join for release notices, restock timing, and new compound updates tied directly to the lineup.
                </p>
                <p className="mt-3 text-[12px] text-white/42">
                  Laboratory research purposes only. Not for human consumption.
                </p>
              </div>

              <div className="bg-[#131816] p-8 md:p-12">
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
                    className="h-11 rounded-full bg-[#1e6f58] px-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#255f4f]"
                  >
                    Join Titan
                  </Button>
                </form>

                <div className="mt-6 grid gap-px overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/10 sm:grid-cols-3">
                  {[
                    ["Restocks", "Timing on returns of core sprays"],
                    ["Drops", "First notice on new additions"],
                    ["Batch notes", "Availability changes by lot"],
                  ].map(([title, body]) => (
                    <div key={title} className="bg-[#131816] px-4 py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8eb8aa]">
                        {title}
                      </p>
                      <p className="mt-2 text-[12px] leading-[1.75] text-white/60">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
