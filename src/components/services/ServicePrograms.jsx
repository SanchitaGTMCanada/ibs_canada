"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Sparkles,
  Award,
  Users,
  Lightbulb,
} from "lucide-react";

import { iconMap } from "./iconMap";

const IMAGE_ONE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=90";

const IMAGE_TWO =
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=90";

export default function ServicePrograms({
  data,
  reduceMotion = false,
}) {
  const programs = data?.programs || [];

  return (
    <section className="relative overflow-hidden bg-[#F6F4EF] px-5 py-24 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1450px]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-14 max-w-[850px] sm:mb-16 lg:mb-20">

          <motion.div
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    x: -25,
                  }
            }
            whileInView={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="flex items-center gap-3"
          >
            <span className="h-[2px] w-10 bg-[#087F8C]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#087F8C]">
              Learning Journey
            </span>
          </motion.div>

          <motion.h2
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            whileInView={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="mt-7 max-w-[780px] text-[50px] font-medium leading-[0.88] tracking-[-0.07em] text-[#0B1F3A] sm:text-[68px] lg:text-[82px] xl:text-[88px]"
          >
            {data?.journeyTitle || "Your journey"}

            <span className="block text-[#087F8C]">
              {data?.journeyAccent || "starts here."}
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 85 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mt-8 h-[3px] bg-[#C6A15B]"
          />
        </div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="grid items-stretch gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:grid-cols-[0.92fr_1.08fr] xl:gap-20">

          {/* ===================================================
              LEFT SIDE
          ==================================================== */}

          <div className="relative flex flex-col">

            {/* Intro */}

            <motion.div
              initial={
                reduceMotion
                  ? {}
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              whileInView={
                reduceMotion
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
              }}
              className="mb-8"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C6A15B]">
                Your learning journey
              </span>

              <p className="mt-3 max-w-[480px] text-[14px] leading-[1.8] text-[#202832]/55 sm:text-[15px]">
                {data?.journeyDescription ||
                  "Discover practical learning experiences that connect knowledge, confidence and meaningful professional opportunity."}
              </p>
            </motion.div>

            {/* =================================================
                IMAGE AREA
            ================================================== */}

            <div className="relative flex-1 pb-10">

              {/* =================================================
                  ROPE
              ================================================== */}

              <div className="pointer-events-none absolute bottom-[34%] left-1/2 top-[35%] z-30 hidden w-[90px] -translate-x-1/2 md:block">
                <svg
                  viewBox="0 0 100 400"
                  preserveAspectRatio="none"
                  className="h-full w-full overflow-visible"
                >
                  <path
                    d="
                      M50 0
                      C20 38 80 62 50 100
                      C20 138 80 162 50 200
                      C20 238 80 262 50 300
                      C20 338 80 362 50 400
                    "
                    fill="none"
                    stroke="#0B1F3A"
                    strokeOpacity="0.12"
                    strokeWidth="8"
                  />

                  <motion.path
                    d="
                      M50 0
                      C20 38 80 62 50 100
                      C20 138 80 162 50 200
                      C20 238 80 262 50 300
                      C20 338 80 362 50 400
                    "
                    fill="none"
                    stroke="#C6A15B"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="9 9"
                    initial={{
                      pathLength: 0,
                    }}
                    whileInView={{
                      pathLength: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.7,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
              </div>

              {/* =================================================
                  FIRST PHOTO COMPOSITION
              ================================================== */}

              <motion.div
                initial={
                  reduceMotion
                    ? {}
                    : {
                        opacity: 0,
                        x: -40,
                        y: 25,
                      }
                }
                whileInView={
                  reduceMotion
                    ? {}
                    : {
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                animate={
                  reduceMotion
                    ? {}
                    : {
                        y: [0, -5, 0],
                      }
                }
                className="relative isolate w-[88%] sm:w-[82%]"
              >

                {/* =================================================
                    TEAL LAYER BEHIND PHOTO
                ================================================== */}

                <motion.div
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          x: [0, 8, 0],
                          y: [0, -6, 0],
                          rotate: [0, 1, 0],
                          scale: [1, 1.025, 1],
                        }
                  }
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -bottom-8
                    -left-8
                    z-[1]
                    h-[78%]
                    w-[78%]
                    bg-[#087F8C]
                  "
                />

                {/* Photo */}

                <div
                  className="
                    group
                    relative
                    z-[2]
                    aspect-[1.15]
                    overflow-hidden
                    bg-[#0B1F3A]
                    shadow-[0_25px_65px_rgba(11,31,58,0.2)]
                  "
                >
                  <motion.img
                    src={IMAGE_ONE}
                    alt="Students learning together"
                    animate={
                      reduceMotion
                        ? {}
                        : {
                            scale: [1.06, 1.12, 1.06],
                            x: [0, -7, 0],
                          }
                    }
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-full w-full object-cover"
                  />

                  {/* Image overlay */}

                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1F3A]/85 via-[#0B1F3A]/10 to-transparent" />

                  {/* Light sweep */}

                  {!reduceMotion && (
                    <motion.div
                      initial={{
                        x: "-130%",
                      }}
                      animate={{
                        x: "130%",
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut",
                      }}
                      className="
                        pointer-events-none
                        absolute
                        inset-y-0
                        left-0
                        z-20
                        w-[30%]
                        skew-x-[-18deg]
                        bg-gradient-to-r
                        from-transparent
                        via-white/20
                        to-transparent
                        blur-md
                      "
                    />
                  )}

                  {/* Content */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.5,
                      duration: 0.7,
                    }}
                    className="absolute bottom-0 left-0 z-30 p-6 sm:p-8"
                  >
                    <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#C6A15B]">
                      Step One
                    </span>

                    <h3 className="mt-2 text-[28px] font-medium tracking-[-0.05em] text-white sm:text-[36px]">
                      Learn.
                    </h3>
                  </motion.div>
                </div>
              </motion.div>

              {/* =================================================
                  CENTER ICON
              ================================================== */}

              <motion.div
                initial={
                  reduceMotion
                    ? {}
                    : {
                        opacity: 0,
                        scale: 0.5,
                      }
                }
                whileInView={
                  reduceMotion
                    ? {}
                    : {
                        opacity: 1,
                        scale: 1,
                      }
                }
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                animate={
                  reduceMotion
                    ? {}
                    : {
                        y: [0, -6, 0],
                      }
                }
                className="
                  absolute
                  left-1/2
                  top-[45%]
                  z-40
                  hidden
                  h-16
                  w-16
                  -translate-x-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0B1F3A]
                  text-[#C6A15B]
                  shadow-[0_12px_35px_rgba(11,31,58,0.2)]
                  md:flex
                "
              >
                <Lightbulb
                  size={27}
                  strokeWidth={0.65}
                />
              </motion.div>

              {/* =================================================
                  SECOND PHOTO COMPOSITION
              ================================================== */}

              <motion.div
                initial={
                  reduceMotion
                    ? {}
                    : {
                        opacity: 0,
                        x: 40,
                        y: 25,
                      }
                }
                whileInView={
                  reduceMotion
                    ? {}
                    : {
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                animate={
                  reduceMotion
                    ? {}
                    : {
                        y: [0, 6, 0],
                      }
                }
                className="relative isolate ml-auto mt-16 w-[88%] sm:w-[82%]"
              >

                {/* =================================================
                    GOLD LAYER BEHIND PHOTO
                ================================================== */}

                <motion.div
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          x: [0, -8, 0],
                          y: [0, 6, 0],
                          rotate: [0, -1, 0],
                          scale: [1, 1.025, 1],
                        }
                  }
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    z-[1]
                    h-[78%]
                    w-[78%]
                    bg-[#C6A15B]
                  "
                />

                {/* Photo */}

                <div
                  className="
                    group
                    relative
                    z-[2]
                    aspect-[1.15]
                    overflow-hidden
                    bg-[#0B1F3A]
                    shadow-[0_25px_65px_rgba(11,31,58,0.2)]
                  "
                >
                  <motion.img
                    src={IMAGE_TWO}
                    alt="Professional training session"
                    animate={
                      reduceMotion
                        ? {}
                        : {
                            scale: [1.06, 1.12, 1.06],
                            x: [0, 7, 0],
                          }
                    }
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-full w-full object-cover"
                  />

                  {/* Image overlay */}

                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1F3A]/85 via-[#0B1F3A]/10 to-transparent" />

                  {/* Light sweep */}

                  {!reduceMotion && (
                    <motion.div
                      initial={{
                        x: "-130%",
                      }}
                      animate={{
                        x: "130%",
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        repeatDelay: 4.5,
                        ease: "easeInOut",
                      }}
                      className="
                        pointer-events-none
                        absolute
                        inset-y-0
                        left-0
                        z-20
                        w-[30%]
                        skew-x-[-18deg]
                        bg-gradient-to-r
                        from-transparent
                        via-white/20
                        to-transparent
                        blur-md
                      "
                    />
                  )}

                  {/* Content */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.6,
                      duration: 0.7,
                    }}
                    className="absolute bottom-0 right-0 z-30 p-6 text-right sm:p-8"
                  >
                    <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#C6A15B]">
                      Step Two
                    </span>

                    <h3 className="mt-2 text-[28px] font-medium tracking-[-0.05em] text-white sm:text-[36px]">
                      Grow.
                    </h3>
                  </motion.div>
                </div>
              </motion.div>

              {/* =================================================
                  BUILD BADGE
              ================================================== */}

              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        y: [0, -5, 0],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[-20px]
                  left-[10%]
                  z-40
                  flex
                  items-center
                  gap-3
                  bg-[#C6A15B]
                  px-5
                  py-4
                  shadow-[0_15px_35px_rgba(11,31,58,0.15)]
                "
              >
                <Award
                  size={21}
                  strokeWidth={0.7}
                  className="text-[#0B1F3A]"
                />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#0B1F3A]">
                    Build
                  </p>

                  <p className="text-[8px] text-[#0B1F3A]/60">
                    Your future
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom text */}

            <div className="mt-12 flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] text-[#C6A15B]">
                <Users
                  size={20}
                  strokeWidth={0.7}
                />
              </div>

              <p className="max-w-[350px] text-[11px] leading-[1.7] text-[#202832]/55">
                Practical education connecting
                people, skills and opportunity.
              </p>
            </div>
          </div>

          {/* ===================================================
              RIGHT PROGRAMS
          ==================================================== */}

          <div className="relative flex flex-col">

            <motion.div
              initial={
                reduceMotion
                  ? {}
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              whileInView={
                reduceMotion
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-8"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C6A15B]">
                Choose your pathway
              </span>

              <p className="mt-3 max-w-[560px] text-[14px] leading-[1.8] text-[#202832]/55 sm:text-[15px]">
                Explore programs designed to build
                practical knowledge, professional
                confidence and long-term opportunity.
              </p>
            </motion.div>

            {/* Timeline */}

            <div className="relative flex-1">

              <motion.div
                initial={
                  reduceMotion
                    ? {}
                    : {
                        scaleY: 0,
                      }
                }
                whileInView={
                  reduceMotion
                    ? {}
                    : {
                        scaleY: 1,
                      }
                }
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  bottom-8
                  left-[25px]
                  top-8
                  hidden
                  w-[2px]
                  origin-top
                  bg-gradient-to-b
                  from-[#087F8C]
                  via-[#C6A15B]
                  to-[#087F8C]
                  md:block
                "
              />

              <div className="space-y-5 sm:space-y-6">

                {programs.map(
                  (program, index) => {
                    const Icon =
                      iconMap[
                        program.icon
                      ] ||
                      GraduationCap;

                    const isGold =
                      program.tone === "gold";

                    const isTeal =
                      program.tone === "teal";

                    const accent =
                      isGold
                        ? "#C6A15B"
                        : isTeal
                        ? "#087F8C"
                        : "#0B1F3A";

                    return (
                      <motion.div
                        key={program.title}
                        initial={
                          reduceMotion
                            ? {}
                            : {
                                opacity: 0,
                                x: 30,
                              }
                        }
                        whileInView={
                          reduceMotion
                            ? {}
                            : {
                                opacity: 1,
                                x: 0,
                              }
                        }
                        viewport={{
                          once: true,
                          amount: 0.15,
                        }}
                        transition={{
                          duration: 0.65,
                          delay:
                            index * 0.1,
                        }}
                        className="relative"
                      >

                        {/* Timeline icon */}

                        <motion.div
                          whileHover={
                            reduceMotion
                              ? {}
                              : {
                                  scale: 1.12,
                                  rotate: 7,
                                }
                          }
                          className="absolute left-0 top-7 z-20 hidden h-[52px] w-[52px] items-center justify-center md:flex"
                        >
                          <motion.div
                            animate={
                              reduceMotion
                                ? {}
                                : {
                                    rotate: 360,
                                  }
                            }
                            transition={{
                              duration:
                                10 +
                                index * 2,
                              repeat:
                                Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-0 rounded-full border border-dashed border-[#0B1F3A]/25"
                          />

                          <div
                            className="relative flex h-[38px] w-[38px] items-center justify-center rounded-full text-white shadow-lg"
                            style={{
                              backgroundColor:
                                accent,
                            }}
                          >
                            <Icon
                              size={19}
                              strokeWidth={0.7}
                            />
                          </div>
                        </motion.div>

                        {/* Program card */}

                        <motion.div
                          whileHover={
                            reduceMotion
                              ? {}
                              : {
                                  x: 7,
                                  y: -2,
                                }
                          }
                          className="
                            group
                            relative
                            ml-0
                            overflow-hidden
                            border
                            border-[#DCE2E7]
                            bg-white
                            p-6
                            shadow-[0_12px_35px_rgba(11,31,58,0.05)]
                            transition-all
                            duration-500
                            hover:border-[#087F8C]/30
                            hover:shadow-[0_20px_55px_rgba(11,31,58,0.1)]
                            md:ml-[72px]
                            md:p-8
                          "
                        >

                          <div
                            className="
                              absolute
                              left-0
                              top-0
                              h-[3px]
                              w-0
                              bg-gradient-to-r
                              from-[#087F8C]
                              via-[#C6A15B]
                              to-transparent
                              transition-all
                              duration-500
                              group-hover:w-full
                            "
                          />

                          <div className="relative z-10 flex gap-5">

                            {/* Mobile icon */}

                            <div
                              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white md:hidden"
                              style={{
                                backgroundColor:
                                  accent,
                              }}
                            >
                              <Icon
                                size={20}
                                strokeWidth={0.7}
                              />
                            </div>

                            <div className="min-w-0 flex-1">

                              <div className="mb-4 flex items-center gap-3">
                                <span
                                  className="h-2 w-2 rounded-full"
                                  style={{
                                    backgroundColor:
                                      accent,
                                  }}
                                />

                                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#202832]/40">
                                  Professional
                                  pathway
                                </span>
                              </div>

                              <h3 className="text-[22px] font-medium leading-[1.1] tracking-[-0.04em] text-[#0B1F3A] transition-colors duration-300 group-hover:text-[#087F8C] sm:text-[28px]">
                                {program.title}
                              </h3>

                              <p className="mt-4 max-w-[680px] text-[12px] leading-[1.8] text-[#202832]/60 sm:text-[14px]">
                                {program.description}
                              </p>

                              <motion.div
                                whileHover={
                                  reduceMotion
                                    ? {}
                                    : {
                                        x: 5,
                                      }
                                }
                                className="mt-5 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em]"
                                style={{
                                  color: accent,
                                }}
                              >
                                Explore program

                                <span
                                  className="flex h-7 w-7 items-center justify-center rounded-full border"
                                  style={{
                                    borderColor:
                                      accent,
                                  }}
                                >
                                  <ArrowUpRight
                                    size={13}
                                    strokeWidth={
                                      0.8
                                    }
                                  />
                                </span>
                              </motion.div>
                            </div>

                            {/* Desktop icon */}

                            <motion.div
                              animate={
                                reduceMotion
                                  ? {}
                                  : {
                                      y: [
                                        0,
                                        -5,
                                        0,
                                      ],
                                    }
                              }
                              transition={{
                                duration:
                                  3.5 +
                                  index * 0.4,
                                repeat:
                                  Infinity,
                                ease: "easeInOut",
                              }}
                              className="relative hidden h-20 w-20 shrink-0 items-center justify-center md:flex"
                            >
                              <motion.div
                                animate={
                                  reduceMotion
                                    ? {}
                                    : {
                                        rotate:
                                          -360,
                                      }
                                }
                                transition={{
                                  duration:
                                    12 +
                                    index * 2,
                                  repeat:
                                    Infinity,
                                  ease: "linear",
                                }}
                                className="absolute inset-0 rounded-full border border-dashed border-[#087F8C]/25"
                              />

                              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F6F4EF] text-[#C6A15B] transition-all duration-500 group-hover:bg-[#0B1F3A]">
                                <Icon
                                  size={27}
                                  strokeWidth={0.55}
                                />
                              </div>
                            </motion.div>

                          </div>

                          <div
                            className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-24"
                            style={{
                              backgroundColor:
                                accent,
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    );
                  }
                )}

              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

       <motion.section
  initial={
    reduceMotion
      ? {}
      : {
          opacity: 0,
          y: 30,
        }
  }
  whileInView={
    reduceMotion
      ? {}
      : {
          opacity: 1,
          y: 0,
        }
  }
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    relative
    mt-24
    overflow-hidden
    bg-gradient-to-br
    from-[#0B1F3A]
    via-[#123A5A]
    to-[#087F8C]
    py-8
    sm:py-10
    lg:mt-28
  "
>
  {/* =====================================================
      BACKGROUND LIGHT
  ====================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-[radial-gradient(circle_at_82%_18%,rgba(198,161,91,0.18),transparent_28%),radial-gradient(circle_at_12%_85%,rgba(8,127,140,0.30),transparent_35%)]
    "
  />

  {/* =====================================================
      SUBTLE DIAGONAL ARCHITECTURAL LINE
  ====================================================== */}

  <motion.div
    animate={
      reduceMotion
        ? {}
        : {
            x: [0, 15, 0],
          }
    }
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      right-[24%]
      top-[-35%]
      h-[180%]
      w-[2px]
      rotate-[18deg]
      bg-gradient-to-b
      from-transparent
      via-[#C6A15B]/70
      to-transparent
    "
  />

  {/* =====================================================
      SMALL TEAL ORB
  ====================================================== */}

  <motion.div
    animate={
      reduceMotion
        ? {}
        : {
            x: [0, 20, 0],
            y: [0, -12, 0],
            scale: [1, 1.08, 1],
          }
    }
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      -left-20
      bottom-[-80px]
      h-[240px]
      w-[240px]
      rounded-full
      bg-[#087F8C]/25
      blur-[70px]
    "
  />

  {/* =====================================================
      GOLD ORB
  ====================================================== */}

  <motion.div
    animate={
      reduceMotion
        ? {}
        : {
            x: [0, -15, 0],
            y: [0, 10, 0],
            scale: [1, 1.06, 1],
          }
    }
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      right-[-100px]
      top-[-100px]
      h-[260px]
      w-[260px]
      rounded-full
      bg-[#C6A15B]/10
      blur-[80px]
    "
  />

  {/* =====================================================
      MAIN CONTENT
  ====================================================== */}

  <div
    className="
      relative
      mx-auto
      max-w-[1450px]
      px-5
      sm:px-8
      lg:px-14
    "
  >
    <div
      className="
        relative
        grid
        min-h-[360px]
        items-center
        lg:grid-cols-[0.85fr_1.15fr]
      "
    >

      {/* =================================================
          LEFT CONTENT
      ================================================== */}

      <div
        className="
          relative
          z-30
          py-10
          lg:py-14
        "
      >

        {/* LABEL */}

        <motion.div
          initial={
            reduceMotion
              ? {}
              : {
                  opacity: 0,
                  x: -20,
                }
          }
          whileInView={
            reduceMotion
              ? {}
              : {
                  opacity: 1,
                  x: 0,
                }
          }
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              h-[2px]
              w-10
              bg-[#C6A15B]
            "
          />

          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#C6A15B]
            "
          >
            The next chapter
          </span>
        </motion.div>

        {/* HEADING */}

        <motion.h3
          initial={
            reduceMotion
              ? {}
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          whileInView={
            reduceMotion
              ? {}
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.85,
            delay: 0.15,
          }}
          className="
            mt-7
            max-w-[650px]
            text-[46px]
            font-medium
            leading-[0.86]
            tracking-[-0.07em]
            text-white
            sm:text-[60px]
            lg:text-[68px]
            xl:text-[80px]
          "
        >
          Learning should

          <span className="block text-[#C6A15B]">
            change
          </span>

          <span className="block text-white">
            what comes next.
          </span>
        </motion.h3>

        {/* DESCRIPTION */}

        <motion.p
          initial={
            reduceMotion
              ? {}
              : {
                  opacity: 0,
                  y: 15,
                }
          }
          whileInView={
            reduceMotion
              ? {}
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="
            mt-7
            max-w-[430px]
            text-[12px]
            leading-[1.85]
            text-white/55
            sm:text-[14px]
          "
        >
          Turn knowledge into capability, confidence
          and meaningful opportunity.
        </motion.p>

        {/* SMALL ACCENT */}

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: 80,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.55,
          }}
          className="
            mt-7
            h-[2px]
            bg-[#087F8C]
          "
        />

      </div>

      {/* =================================================
          RIGHT IMAGE AREA
      ================================================== */}

      <div
        className="
          relative
          z-20
          min-h-[330px]
          lg:min-h-[390px]
        "
      >

        {/* =================================================
            TEAL LAYER BEHIND IMAGE
        ================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? {}
              : {
                  opacity: 0,
                  x: 35,
                }
          }
          whileInView={
            reduceMotion
              ? {}
              : {
                  opacity: 1,
                  x: 0,
                }
          }
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, -5, 0],
                  rotate: [0, 0.8, 0],
                }
          }
          className="
            absolute
            bottom-[-12px]
            left-[7%]
            z-[1]
            h-[72%]
            w-[65%]
            bg-[#087F8C]
          "
        />

        {/* =================================================
            IMAGE
        ================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? {}
              : {
                  opacity: 0,
                  scale: 0.94,
                }
          }
          whileInView={
            reduceMotion
              ? {}
              : {
                  opacity: 1,
                  scale: 1,
                }
          }
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            right-0
            top-0
            z-[2]
            h-full
            w-[92%]
            overflow-hidden
            bg-[#0B1F3A]
            [clip-path:polygon(10%_0%,100%_0%,92%_100%,0%_100%)]
          "
        >

          {/* IMAGE */}

          <motion.img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=90"
            alt="Students learning together"
            animate={
              reduceMotion
                ? {}
                : {
                    scale: [1.03, 1.07, 1.03],
                    x: [0, -4, 0],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-full
              w-full
              object-cover
            "
          />

          {/* =================================================
              IMAGE OVERLAY
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#0B1F3A]/90
              via-[#0B1F3A]/45
              to-[#087F8C]/20
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#0B1F3A]/75
              via-transparent
              to-[#0B1F3A]/10
            "
          />

          {/* =================================================
              IMAGE LIGHT SWEEP
          ================================================== */}

          {!reduceMotion && (
            <motion.div
              initial={{
                x: "-130%",
              }}
              animate={{
                x: "130%",
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                z-20
                w-[18%]
                skew-x-[-18deg]
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                blur-md
              "
            />
          )}

          {/* =================================================
              IMAGE CONTENT
          ================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    y: 15,
                  }
            }
            whileInView={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="
              absolute
              bottom-7
              left-10
              z-30
              sm:bottom-9
              sm:left-14
            "
          >
            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#C6A15B]
              "
            >
              Education & Training
            </span>

            <p
              className="
                mt-2
                text-[20px]
                font-medium
                tracking-[-0.04em]
                text-white
                sm:text-[26px]
              "
            >
              Learn. Grow. Lead.
            </p>
          </motion.div>

        </motion.div>

        {/* =================================================
            GOLD CORNER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
          className="
            absolute
            right-[-3px]
            top-[-8px]
            z-[5]
            h-16
            w-16
            bg-[#C6A15B]
          "
        >
          <div
            className="
              absolute
              bottom-0
              left-0
              h-px
              w-8
              bg-[#0B1F3A]
            "
          />

          <div
            className="
              absolute
              bottom-0
              right-0
              h-8
              w-px
              bg-[#0B1F3A]
            "
          />
        </motion.div>

        {/* =================================================
            CONNECTION ARROW
        ================================================== */}

        <div
          className="
            absolute
            bottom-[22%]
            left-[-8%]
            z-40
            hidden
            items-center
            lg:flex
          "
        >
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 115,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="
              h-[2px]
              bg-gradient-to-r
              from-[#C6A15B]
              to-[#087F8C]
            "
          />

          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    x: [0, 7, 0],
                  }
            }
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#C6A15B]
              text-[#0B1F3A]
              shadow-[0_8px_25px_rgba(198,161,91,0.3)]
            "
          >
            <ArrowUpRight
              size={18}
              strokeWidth={1}
            />
          </motion.div>
        </div>

        {/* =================================================
            IMAGE LABEL
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.9,
          }}
          className="
            absolute
            bottom-[4%]
            right-[5%]
            z-40
            hidden
            items-center
            gap-2
            lg:flex
          "
        >
          <span
            className="
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-white/45
            "
          >
            Beyond the classroom
          </span>

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#087F8C]
            "
          />
        </motion.div>

      </div>
    </div>
  </div>

  {/* =====================================================
      BOTTOM GRADIENT ACCENT
  ====================================================== */}

  <motion.div
    initial={{
      width: 0,
    }}
    whileInView={{
      width: "25%",
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 1,
      delay: 0.5,
    }}
    className="
      absolute
      bottom-0
      left-0
      z-40
      h-[3px]
      bg-gradient-to-r
      from-[#C6A15B]
      via-[#087F8C]
      to-transparent
    "
  />

</motion.section>

      </div>
    </section>
  );
}