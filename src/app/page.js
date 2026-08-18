import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <AboutSection />
        <ServicesSection />
        <CTASection/>
        <Footer/>

      
      </main>
    </>
  );
}