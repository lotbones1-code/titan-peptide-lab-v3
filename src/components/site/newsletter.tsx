import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "./reveal";

export function Newsletter() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-2xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl bg-[#0f1110] p-8 text-center text-white md:p-12">
            <h3 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.03em]">
              Get restock and batch updates
            </h3>
            <p className="mx-auto mt-3 max-w-[40ch] text-[14px] leading-[1.7] text-white/60">
              We email when core sprays come back in stock or new batches release. No spam, no upsells.
            </p>
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                required
                placeholder="you@lab.com"
                aria-label="Email address"
                className="h-11 flex-1 rounded-full border-white/12 bg-white px-5 text-[14px] text-[#0f1110] placeholder:text-[#aaa]"
              />
              <Button
                type="submit"
                className="h-11 rounded-full bg-[#1a5c48] px-6 text-[13px] font-semibold text-white hover:bg-[#23705a]"
              >
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-[11px] text-white/35">
              For laboratory research purposes only.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
