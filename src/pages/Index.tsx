import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ServicesSection from "@/components/ServicesSection";
import CalculatorSection from "@/components/CalculatorSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadFormSection from "@/components/LeadFormSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <ServicesSection />
      <CalculatorSection />
      <FeaturesSection />
      <TestimonialsSection />
      <LeadFormSection />
    </Layout>
  );
};

export default Index;
