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
import { SocialProof } from "@/components/site/social-proof";
import { WhyTitan } from "@/components/site/why-titan";
import { ProductListJsonLd } from "@/components/site/json-ld";

export default function HomePage() {
  return (
    <>
      <ProductListJsonLd />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <Hero />
        <TrustStrip />
        <Products />
        <WhyTitan />
        <SocialProof />
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
