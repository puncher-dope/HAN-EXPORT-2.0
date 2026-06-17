import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import CatalogSection from "@/components/catalog-section";
import AdvantagesSection from "@/components/advantages-section";
import ProcessSection from "@/components/process-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <CatalogSection />
        <ProcessSection />
        <AdvantagesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
