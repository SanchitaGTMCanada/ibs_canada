"use client";

import ServiceHero from "./ServiceHero";
import ServicePrograms from "./ServicePrograms";
import ServiceCentres from "./ServiceCentres";
import ServiceBenefits from "./ServiceBenefits";
import RelatedServices from "./RelatedServices";
import ServiceFooter from "./ServiceFooter";
import Header from "../layout/Header";

export default function ServicePage({ data }) {
  return (
    <main className="overflow-hidden bg-[#F6F4EF]">
      <Header />

      <ServiceHero
        data={data}
        reduceMotion={false}
      />

      <ServicePrograms
        data={data}
        reduceMotion={false}
      />

      <ServiceCentres
        data={data}
        reduceMotion={false}
      />

      <ServiceBenefits
        data={data}
        reduceMotion={false}
      />

      <RelatedServices
        currentSlug={data?.slug}
        reduceMotion={false}
      />

      <ServiceFooter
        reduceMotion={false}
      />
    </main>
  );
}