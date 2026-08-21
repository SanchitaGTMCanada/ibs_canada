"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

import { iconMap } from "./iconMap";

export default function ServiceCentres({
  data,
  reduceMotion = false,
}) {
  return (
    <section className="relative overflow-hidden bg-[#0B1F3A] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
      {/* Background glow */}

      <div className="absolute -right-[180px] top-[10%] h-[550px] w-[550px] rounded-full bg-[#087F8C]/20 blur-[110px]" />

      <div className="absolute left-0 top-0 h-full w-[35%] bg-gradient-to-r from-[#123A5A]/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          {/* Heading */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#C6A15B]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C6A15B]">
                Centres of Excellence
              </span>
            </div>

            <h2 className="mt-7 text-[54px] font-medium leading-[0.84] tracking-[-0.07em] text-white sm:text-[74px] lg:text-[88px]">
              {data.centresTitle}

              <span className="block text-[#C6A15B]">
                {data.centresAccent}
              </span>
            </h2>

            <p className="mt-7 max-w-[450px] text-[15px] leading-[1.9] text-white/50 sm:text-[17px]">
              {data.centresDescription}
            </p>
          </div>

          {/* Visual */}

          <div className="relative">
            {/* Orbit */}

            <div className="relative mx-auto aspect-square max-w-[620px]">
              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[10%] rounded-full border border-[#087F8C]/40"
              />

              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotate: -360,
                      }
                }
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[24%] rounded-full border border-[#C6A15B]/40"
              />

              {/* Center */}

              <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#C6A15B]/50 bg-[#123A5A] shadow-[0_0_80px_rgba(8,127,140,0.25)] sm:h-40 sm:w-40">
                <GraduationCap
                  size={38}
                  className="text-[#C6A15B]"
                  strokeWidth={0.5}
                />

                <span className="mt-3 text-[8px] uppercase tracking-[0.25em] text-white/50">
                  IBS
                </span>

                <span className="mt-1 text-[13px] font-medium text-white">
                  Excellence
                </span>
              </div>

              {/* Centre Nodes */}

              {data.centres.map(
                (centre, index) => {
                  const Icon =
                    iconMap[centre.icon] ||
                    GraduationCap;

                  const positions = [
                    "left-[7%] top-[16%]",
                    "right-[7%] top-[16%]",
                    "left-[-2%] top-[47%]",
                    "right-[-2%] top-[47%]",
                    "left-[14%] bottom-[7%]",
                    "right-[14%] bottom-[7%]",
                    "left-1/2 bottom-[-2%] -translate-x-1/2",
                  ];

                  return (
                    <motion.div
                      key={centre.title}
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.08,
                      }}
                      whileHover={
                        reduceMotion
                          ? {}
                          : {
                              scale: 1.08,
                            }
                      }
                      className={`absolute ${positions[index]}`}
                    >
                      <div className="group flex w-[95px] flex-col items-center text-center sm:w-[120px]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#087F8C] bg-[#0B1F3A] text-[#087F8C] transition-all duration-300 group-hover:border-[#C6A15B] group-hover:text-[#C6A15B]">
                          <Icon
                            size={21}
                            strokeWidth={0.5}
                          />
                        </div>

                        <span className="mt-3 text-[7px] font-semibold leading-[1.35] text-white/45 sm:text-[8px]">
                          {centre.title}
                        </span>
                      </div>
                    </motion.div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}