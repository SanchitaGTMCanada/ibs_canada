"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Scale,
} from "lucide-react";

import { relatedServices } from "./serviceData";
import { iconMap } from "./iconMap";

export default function RelatedServices({
  currentSlug,
  reduceMotion = false,
}) {
  const services =
    relatedServices.filter(
      (service) =>
        service.href !==
        `/services/${currentSlug}`
    );

  return (
    <section className="relative overflow-hidden bg-[#0B1F3A] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
      <div className="absolute right-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full border border-[#087F8C]/10" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-9 bg-[#C6A15B]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C6A15B]">
            Explore More
          </span>
        </div>

        <div className="mt-7 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <h2 className="text-[55px] font-medium leading-[0.84] tracking-[-0.07em] text-white sm:text-[76px] lg:text-[88px]">
            Our Other

            <span className="block text-[#087F8C]">
              Service Areas.
            </span>
          </h2>

          <p className="max-w-[600px] text-[15px] leading-[1.9] text-white/45 sm:text-[17px]">
            Explore the wider IBS ecosystem and discover
            additional capabilities supporting organizations
            and communities across Canada.
          </p>
        </div>

        <div className="mt-16 grid border-y border-white/10 md:grid-cols-2">
          {services.map(
            (service, index) => {
              const Icon =
                iconMap[service.icon] ||
                Scale;

              return (
                <motion.div
                  key={service.href}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    href={service.href}
                    className="group relative flex min-h-[145px] items-center justify-between border-b border-r border-white/10 px-6 py-7 transition-all duration-500 hover:bg-[#123A5A] sm:px-8"
                  >
                    <div className="flex items-center gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#087F8C]/50 text-[#087F8C] transition-all duration-500 group-hover:border-[#C6A15B] group-hover:bg-[#C6A15B] group-hover:text-[#0B1F3A]">
                        <Icon
                          size={21}
                          strokeWidth={0.5}
                        />
                      </div>

                      <div>
                        <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                          IBS Service
                        </span>

                        <h3 className="mt-2 text-[17px] font-medium text-white sm:text-[20px]">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <motion.div
                      whileHover={
                        reduceMotion
                          ? {}
                          : {
                              x: 5,
                              y: -5,
                            }
                      }
                    >
                      <ArrowUpRight
                        size={20}
                        className="text-[#087F8C] transition-colors group-hover:text-[#C6A15B]"
                      />
                    </motion.div>

                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C6A15B] transition-all duration-500 group-hover:w-full" />
                  </Link>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}