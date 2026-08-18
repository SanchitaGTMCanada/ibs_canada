import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";


export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <AboutSection />
        <ServicesSection />

      
      </main>
    </>
  );
}