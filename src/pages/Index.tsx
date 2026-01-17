import CTASection from "../components/home/CTAsection";
import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import MainLayout from "../components/layout/MainLayout";


const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <CTASection />
    </MainLayout>
  );
};

export default Index;


