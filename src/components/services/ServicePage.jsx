"use client";

import { useEffect, useState } from "react";

import ServiceHero from "./ServiceHero";
import ServicePrograms from "./ServicePrograms";
import ServiceCentres from "./ServiceCentres";
import ServiceBenefits from "./ServiceBenefits";
import RelatedServices from "./RelatedServices";
import ServiceFooter from "./ServiceFooter";
import Header from "../layout/Header";

export default function ServicePage({ data }) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotion = () => {
      setReduceMotion(mediaQuery.matches);
    };

    updateMotion();

    mediaQuery.addEventListener(
      "change",
      updateMotion
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateMotion
      );
    };
  }, []);

  return (
    <main className="overflow-hidden bg-[#F6F4EF]">
      <Header/>
      <ServiceHero
        data={data}
        reduceMotion={reduceMotion}
      />

      <ServicePrograms
        data={data}
        reduceMotion={reduceMotion}
      />

      <ServiceCentres
        data={data}
        reduceMotion={reduceMotion}
      />

      <ServiceBenefits
        data={data}
        reduceMotion={reduceMotion}
      />

      <RelatedServices
        currentSlug={data.slug}
        reduceMotion={reduceMotion}
      />

      <ServiceFooter
        reduceMotion={reduceMotion}
      />
    </main>
  );
}