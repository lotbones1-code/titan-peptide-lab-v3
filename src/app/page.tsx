import { FAQ } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { Nav } from "@/components/site/nav";
import { Newsletter } from "@/components/site/newsletter";
import { PaymentMethods } from "@/components/site/payment-methods";
import { Products } from "@/components/site/products";
import { QualitySection } from "@/components/site/quality-section";
import { TrustStrip } from "@/components/site/trust-strip";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="bg-[linear-gradient(180deg,#fbf8f2_0%,#f7f3ec_38%,#f4f1eb_100%)] text-[#13211c]">
        <Hero />
        <TrustStrip />
        <Products />
        <QualitySection />
        <HowItWorks />
        <PaymentMethods />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
