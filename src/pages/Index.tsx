import ParallaxBackground from "@/components/ParallaxBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ServicesSection from "@/components/ServicesSection";
import CalculatorSection from "@/components/CalculatorSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadFormSection from "@/components/LeadFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParallaxBackground />
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ServicesSection />
        <CalculatorSection />
        <FeaturesSection />
        <TestimonialsSection />
        <LeadFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
