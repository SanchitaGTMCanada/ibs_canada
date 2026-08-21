"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";

import { iconMap } from "./iconMap";

export default function ServicePrograms({
  data,
  reduceMotion = false,
}) {
  return (
    <section className="relative overflow-hidden bg-[#F6F4EF] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          {/* Intro */}

          <div className="lg:sticky lg:top-32 lg:h-fit">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#087F8C]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#087F8C]">
                Learning Journey
              </span>
            </div>

            <h2 className="mt-7 text-[52px] font-medium leading-[0.86] tracking-[-0.07em] text-[#0B1F3A] sm:text-[72px] lg:text-[82px]">
              {data.journeyTitle}

              <span className="block text-[#087F8C]">
                {data.journeyAccent}
              </span>
            </h2>

            <p className="mt-7 max-w-[460px] text-[15px] leading-[1.9] text-[#202832]/65 sm:text-[17px]">
              {data.journeyDescription}
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B1F3A] text-[#C6A15B]">
                <GraduationCap size={20} />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0B1F3A]/50">
                Explore your pathway
              </span>
            </div>
          </div>

          {/* Programs */}

          <div className="relative">
            <div className="absolute bottom-8 left-[24px] top-8 hidden w-px bg-[#0B1F3A]/15 md:block" />

            <div className="space-y-4">
              {data.programs.map(
                (program, index) => {
                  const Icon =
                    iconMap[program.icon] ||
                    GraduationCap;

                  const isGold =
                    program.tone === "gold";

                  const isTeal =
                    program.tone === "teal";

                  return (
                    <motion.div
                      key={program.title}
                      initial={{
                        opacity: 0,
                        x: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.15,
                      }}
                      transition={{
                        duration: 0.65,
                        delay: index * 0.08,
                      }}
                      className="relative"
                    >
                      {/* Timeline Dot */}

                      <motion.div
                        whileHover={
                          reduceMotion
                            ? {}
                            : {
                                scale: 1.18,
                              }
                        }
                        className={`
                          absolute
                          left-0
                          top-7
                          z-10
                          hidden
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          border-4
                          border-[#F6F4EF]
                          md:flex
                          ${
                            isGold
                              ? "bg-[#C6A15B]"
                              : isTeal
                              ? "bg-[#087F8C]"
                              : "bg-[#0B1F3A]"
                          }
                        `}
                      >
                        <Icon
                          size={20}
                          className="text-white"
                          strokeWidth={0.7}
                        />
                      </motion.div>

                      <motion.div
                        whileHover={
                          reduceMotion
                            ? {}
                            : {
                                x: 8,
                              }
                        }
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                          group
                          ml-0
                          flex
                          min-h-[175px]
                          items-center
                          justify-between
                          gap-6
                          border
                          border-[#DCE2E7]
                          bg-white
                          p-6
                          shadow-[0_15px_45px_rgba(11,31,58,0.06)]
                          transition-all
                          duration-500
                          hover:border-[#087F8C]/40
                          hover:shadow-[0_20px_60px_rgba(11,31,58,0.12)]
                          md:ml-[70px]
                          md:p-8
                        "
                      >
                        <div className="flex-1">
                          <div className="mb-5 flex items-center gap-3">
                            <span
                              className={`
                                h-2
                                w-2
                                rounded-full
                                ${
                                  isGold
                                    ? "bg-[#C6A15B]"
                                    : isTeal
                                    ? "bg-[#087F8C]"
                                    : "bg-[#0B1F3A]"
                                }
                              `}
                            />

                            <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#202832]/40">
                              Professional pathway
                            </span>
                          </div>

                          <h3 className="max-w-[550px] text-[24px] font-medium leading-tight tracking-[-0.04em] text-[#0B1F3A] sm:text-[30px]">
                            {program.title}
                          </h3>

                          <p className="mt-4 max-w-[600px] text-[13px] leading-[1.8] text-[#202832]/60 sm:text-[14px]">
                            {program.description}
                          </p>

                          <span className="mt-6 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#087F8C]">
                            Explore program
                            <ArrowUpRight
                              size={14}
                            />
                          </span>
                        </div>

                        {/* Desktop icon */}
                        <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#F6F4EF] text-[#C6A15B] transition-all duration-500 group-hover:bg-[#0B1F3A] group-hover:text-[#C6A15B] sm:flex">
                          <Icon
                            size={28}
                            strokeWidth={0.5}
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}