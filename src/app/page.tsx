import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PartnersMarquee />
        <FeaturesSection />
        <IntegrationsSection />
        <PricingSection />
        <NewsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
