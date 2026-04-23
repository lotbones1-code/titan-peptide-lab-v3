import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "./reveal";

export function Newsletter() {
  return (
    <section className="bg-[#f8f6f2] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-[rgb(15_22_19/8%)] bg-[#f7f5ef] shadow-[0_35px_90px_-55px_rgba(15,22,19,0.28)]">
            <div className="grid gap-px bg-[rgba(15,22,19,0.08)] lg:grid-cols-[1.08fr_0.92fr]">
              <div className="bg-[#f7f5ef] p-8 md:p-12">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-[#1a5c48]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">
                    Release desk
                  </span>
                </div>
                <h3 className="mt-5 max-w-[12ch] font-serif text-[clamp(2.3rem,4vw,3.5rem)] leading-[0.94] tracking-[-0.045em] text-[#0f1613]">
                  Get restocks, lot releases, and quiet catalog updates.
                </h3>
                <p className="mt-5 max-w-[50ch] text-[14px] leading-[1.9] text-[#5c6762]">
                  Titan email should read like a release bulletin, not a discount funnel. Join for restock timing, batch-release notices, and catalog changes tied directly to the live lineup.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {[
                    "Restock timing",
                    "Lot release notices",
                    "Catalog changes only",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[rgba(15,22,19,0.08)] bg-white px-3 py-1.5 text-[11px] leading-none text-[#5c6762]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-[12px] text-[#8a938e]">
                  Laboratory research purposes only. Not for human consumption.
                </p>
              </div>

              <div className="bg-[#111614] p-8 text-white md:p-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8eb8aa]">
                  Join the bulletin
                </p>
                <form className="mt-5 flex flex-col gap-3">
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

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                    {[
                      ["Restocks", "Timing on returns of core sprays"],
                      ["Drops", "First notice on new additions"],
                      ["Batch notes", "Availability changes by lot"],
                    ].map(([title, body]) => (
                      <div key={title}>
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
