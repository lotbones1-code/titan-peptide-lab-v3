import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "./reveal";

export function Newsletter() {
  return (
    <section className="bg-[#f7f3ec] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2rem] border border-[#d8e0d7] bg-[linear-gradient(180deg,#f1f6f1_0%,#edf3ed_100%)] p-6 shadow-[0_24px_60px_-42px_rgba(19,33,28,0.32)] md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-end">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#60726a]">
                  First order
                </p>
                <h3 className="mt-3 max-w-lg font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[0.97] tracking-[-0.04em] text-[#13211c]">
                  FIRST10 takes 10% off the first order.
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#56645d]">
                  Better welcome messaging, less friction. That is the point.
                </p>
                <p className="mt-2 text-sm text-[#6e7b75]">
                  Laboratory research purposes only. Not for human consumption.
                </p>
              </div>

              <form className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  required
                  placeholder="research@lab.com"
                  aria-label="Email address"
                  className="h-12 rounded-full border-[#cad5cc] bg-white px-5 text-[#13211c] placeholder:text-[#7b8781]"
                />
                <Button
                  type="submit"
                  className="h-12 rounded-full bg-[#1e6f58] px-6 text-[#f8fbf8] hover:bg-[#175946]"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
