import AboutSection from "@/components/sections/AboutSection";
import CateringSection from "@/components/sections/CateringSection";
import DeliveryCTA from "@/components/sections/DeliveryCTA";
import HomeHero from "@/components/sections/HomeHero";
import MenuSection from "@/components/sections/MenuSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <CateringSection />
      <MenuSection />
      <DeliveryCTA />
    </>
  );
}