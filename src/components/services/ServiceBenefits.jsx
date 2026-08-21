"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { iconMap } from "./iconMap";

export default function ServiceBenefits({
  data,
  reduceMotion = false,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#087F8C] via-[#087F8C] to-[#0B1F3A] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
      {/* Decorative shapes */}

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                rotate: [0, 8, 0, -8, 0],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/10"
      />

      <div className="pointer-events-none absolute bottom-[-150px] left-[-150px] h-[450px] w-[450px] rounded-full bg-[#C6A15B]/10 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        {/* Header */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#C6A15B]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C6A15B]">
                The IBS Difference
              </span>
            </div>

            <h2 className="mt-7 text-[54px] font-medium leading-[0.84] tracking-[-0.07em] text-white sm:text-[76px] lg:text-[88px]">
              {data.impactTitle}

              <span className="block text-[#C6A15B]">
                {data.impactAccent}
              </span>

              {data.impactSecond && (
                <>
                  <span className="block">
                    {data.impactSecond}
                  </span>

                  <span className="block text-[#C6A15B]">
                    {data.impactSecondAccent}
                  </span>
                </>
              )}
            </h2>
          </div>

          <p className="max-w-[620px] text-[15px] leading-[1.9] text-white/55 sm:text-[17px]">
            {data.impactDescription}
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {data.benefits.map(
            (item, index) => {
              const Icon =
                iconMap[item.icon] ||
                ShieldCheck;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  whileHover={
                    reduceMotion
                      ? {}
                      : {
                          y: -8,
                        }
                  }
                  className="group border-b border-white/10 p-6 last:border-b-0 sm:border-r lg:border-b-0"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C6A15B]/50 bg-[#0B1F3A]/20 text-[#C6A15B] transition-all duration-500 group-hover:bg-[#C6A15B] group-hover:text-[#0B1F3A]">
                    <Icon
                      size={25}
                      strokeWidth={0.5}
                    />
                  </div>

                  <h3 className="mt-7 text-[15px] font-medium text-white sm:text-[17px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-[1.75] text-white/45">
                    {item.text}
                  </p>

                  <div className="mt-7 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />

                    <span className="h-px w-8 bg-[#C6A15B]/50" />
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}