import { FAQ } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { Nav } from "@/components/site/nav";
import { Newsletter } from "@/components/site/newsletter";
import { PaymentMethods } from "@/components/site/payment-methods";
import { Products } from "@/components/site/products";
import { QualitySection } from "@/components/site/quality-section";
import { SocialProof } from "@/components/site/social-proof";
import { ProductListJsonLd } from "@/components/site/json-ld";

export default function HomePage() {
  return (
    <>
      <ProductListJsonLd />
      <Nav />
      <main className="text-[#0f1110]">
        <Hero />
        <Products />
        <QualitySection />
        <HowItWorks />
        <SocialProof />
        <PaymentMethods />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
