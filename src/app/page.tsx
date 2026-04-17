import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { NasalSpraySection } from "@/components/site/nasal-spray-section";
import { AllProductsSection } from "@/components/site/all-products-section";
import { QualitySection } from "@/components/site/quality-section";
import { FAQSection } from "@/components/site/faq-section";
import { Footer } from "@/components/site/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NasalSpraySection />
        <QualitySection />
        <AllProductsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
