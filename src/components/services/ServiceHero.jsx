"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";

import { useRef } from "react";
import { iconMap } from "./iconMap";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=90";

export default function ServiceHero({
  data,
  reduceMotion = false,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "12%"]
  );

  const HeroIcon =
    iconMap[data?.heroIcon] || GraduationCap;

  const features = data?.features || [];

  return (
    <section
      ref={ref}
      className="
        relative
        isolate
        min-h-[760px]
        overflow-hidden
        bg-[#0B1F3A]
        sm:min-h-[820px]
        lg:min-h-[850px]
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Main gradient */}

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-br
          from-[#071A32]
          via-[#0B1F3A]
          to-[#087F8C]
        "
      />

      {/* Large teal glow */}

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                scale: [1, 1.12, 1],
                x: [0, 35, 0],
                y: [0, -25, 0],
              }
        }
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-[200px]
          -top-[200px]
          -z-10
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#087F8C]/25
          blur-[110px]
        "
      />

      {/* Gold glow */}

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                scale: [1, 1.08, 1],
                opacity: [0.15, 0.28, 0.15],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[-160px]
          -z-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#C6A15B]/15
          blur-[100px]
        "
      />

      {/* Decorative floating circle */}

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
        className="
          pointer-events-none
          absolute
          right-[-160px]
          top-[22%]
          -z-10
          hidden
          h-[380px]
          w-[380px]
          rounded-full
          border
          border-white/[0.04]
          lg:block
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[760px]
          max-w-[1500px]
          items-center
          gap-14
          px-5
          pb-24
          pt-32
          sm:min-h-[820px]
          sm:px-8
          lg:grid-cols-[0.92fr_1.08fr]
          lg:gap-10
          lg:px-14
          lg:pt-36
        "
      >
        {/* =================================================
            LEFT SIDE
        ================================================== */}

        <div className="relative z-20">
          {/* Label */}

          <motion.div
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    x: -25,
                  }
            }
            animate={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            transition={{
              duration: 0.8,
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
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#C6A15B]
                sm:text-[10px]
              "
            >
              {data.label}
            </span>
          </motion.div>

          {/* Main heading */}

          <motion.h1
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    y: 35,
                  }
            }
            animate={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-7
              mb-5
              max-w-[780px]
              text-[58px]
              font-medium
              leading-[0.86]
              tracking-[-0.075em]
              text-white
              sm:text-[82px]
              md:text-[96px]
              lg:text-[108px]
              xl:text-[122px]
            "
          >
            {data.title}

            <span
              className="
                block
                text-[#087F8C]
              "
            >
              {data.titleAccent}
            </span>
          </motion.h1>

          {/* Animated accent */}

          <motion.div
            initial={
              reduceMotion
                ? {}
                : {
                    width: 0,
                  }
            }
            animate={
              reduceMotion
                ? {}
                : {
                    width: 115,
                  }
            }
            transition={{
              duration: 0.9,
              delay: 0.45,
            }}
            className="
              mt-8
              h-[3px]
              bg-gradient-to-r
              from-[#C6A15B]
              via-[#C6A15B]
              to-[#087F8C]
            "
          />

          {/* Description */}

          <motion.p
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="
              mt-7
              max-w-[620px]
              text-[14px]
              leading-[1.9]
              text-white/65
              sm:text-[17px]
            "
          >
            {data.description}
          </motion.p>

          {/* =================================================
              FEATURE ICONS

              IMPORTANT:
              NO BOX
              NO GRID
              NO VERTICAL BORDER
              NO HORIZONTAL BORDER
          ================================================== */}

          <div
            className="
              mt-12
              grid
              max-w-[700px]
              grid-cols-1
              gap-10
              sm:grid-cols-3
              sm:gap-6
            "
          >
            {features.map(
              (feature, index) => {
                const Icon =
                  iconMap[
                    feature.icon
                  ] || GraduationCap;

                return (
                  <motion.div
                    key={feature.title}
                    initial={
                      reduceMotion
                        ? {}
                        : {
                            opacity: 0,
                            y: 35,
                          }
                    }
                    animate={
                      reduceMotion
                        ? {}
                        : {
                            opacity: 1,
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 0.75,
                      delay:
                        0.7 +
                        index * 0.16,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    className="
                      group
                      relative
                      flex
                      items-center
                      gap-5
                      sm:block
                    "
                  >
                    {/* ======================================
                        ICON AREA
                    ======================================= */}

                    <div
                      className="
                        relative
                        flex
                        h-[88px]
                        w-[88px]
                        shrink-0
                        items-center
                        justify-center
                        sm:h-[100px]
                        sm:w-[100px]
                      "
                    >
                      {/* Soft glow */}

                      <motion.div
                        animate={
                          reduceMotion
                            ? {}
                            : {
                                scale: [
                                  0.8,
                                  1.2,
                                  0.8,
                                ],
                                opacity: [
                                  0.08,
                                  0.25,
                                  0.08,
                                ],
                              }
                        }
                        transition={{
                          duration:
                            4 +
                            index,
                          repeat:
                            Infinity,
                          ease: "easeInOut",
                          delay:
                            index * 0.5,
                        }}
                        className="
                          absolute
                          h-[60px]
                          w-[60px]
                          rounded-full
                          bg-[#087F8C]
                          blur-[25px]
                        "
                      />

                      {/* Outer orbit */}

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
                            12 +
                            index * 2,
                          repeat:
                            Infinity,
                          ease: "linear",
                        }}
                        className="
                          absolute
                          inset-[4px]
                          rounded-full
                          border
                          border-dashed
                          border-[#C6A15B]/35
                        "
                      >
                        {/* Gold orbit dot */}

                        <span
                          className="
                            absolute
                            left-1/2
                            top-[-3px]
                            h-[6px]
                            w-[6px]
                            -translate-x-1/2
                            rounded-full
                            bg-[#C6A15B]
                            shadow-[0_0_12px_#C6A15B]
                          "
                        />
                      </motion.div>

                      {/* Inner orbit */}

                      <motion.div
                        animate={
                          reduceMotion
                            ? {}
                            : {
                                rotate: -360,
                              }
                        }
                        transition={{
                          duration:
                            15 +
                            index * 2,
                          repeat:
                            Infinity,
                          ease: "linear",
                        }}
                        className="
                          absolute
                          inset-[18px]
                          rounded-full
                          border
                          border-[#087F8C]/45
                        "
                      />

                      {/* ====================================
                          MAIN ICON
                      ===================================== */}

                      <motion.div
                        animate={
                          reduceMotion
                            ? {}
                            : {
                                y: [
                                  0,
                                  -7,
                                  0,
                                ],
                                rotate: [
                                  0,
                                  3,
                                  0,
                                  -3,
                                  0,
                                ],
                              }
                        }
                        transition={{
                          duration:
                            4 +
                            index * 0.6,
                          repeat:
                            Infinity,
                          ease: "easeInOut",
                          delay:
                            index * 0.35,
                        }}
                        whileHover={
                          reduceMotion
                            ? {}
                            : {
                                scale: 1.2,
                                rotate: 8,
                              }
                        }
                        className="
                          relative
                          z-10
                          text-[#C6A15B]
                          drop-shadow-[0_0_18px_rgba(198,161,91,0.5)]
                          transition-all
                          duration-500
                          group-hover:text-white
                        "
                      >
                        <Icon
                          size={48}
                          strokeWidth={0.75}
                          className="
                            h-[45px]
                            w-[45px]
                            sm:h-[52px]
                            sm:w-[52px]
                          "
                        />
                      </motion.div>

                      {/* Teal particle */}

                      <motion.span
                        animate={
                          reduceMotion
                            ? {}
                            : {
                                x: [
                                  0,
                                  9,
                                  0,
                                ],
                                y: [
                                  0,
                                  -8,
                                  0,
                                ],
                                opacity: [
                                  0.2,
                                  1,
                                  0.2,
                                ],
                              }
                        }
                        transition={{
                          duration: 3,
                          repeat:
                            Infinity,
                          delay:
                            index * 0.5,
                        }}
                        className="
                          absolute
                          right-[2px]
                          top-[17px]
                          h-[5px]
                          w-[5px]
                          rounded-full
                          bg-[#087F8C]
                          shadow-[0_0_12px_#087F8C]
                        "
                      />

                      {/* Gold particle */}

                      <motion.span
                        animate={
                          reduceMotion
                            ? {}
                            : {
                                x: [
                                  0,
                                  -8,
                                  0,
                                ],
                                y: [
                                  0,
                                  8,
                                  0,
                                ],
                                opacity: [
                                  0.2,
                                  1,
                                  0.2,
                                ],
                              }
                        }
                        transition={{
                          duration: 3.5,
                          repeat:
                            Infinity,
                          delay:
                            index * 0.35,
                        }}
                        className="
                          absolute
                          bottom-[12px]
                          left-[4px]
                          h-[4px]
                          w-[4px]
                          rounded-full
                          bg-[#C6A15B]
                          shadow-[0_0_10px_#C6A15B]
                        "
                      />
                    </div>

                    {/* ======================================
                        TITLE
                    ======================================= */}

                    <div
                      className="
                        sm:mt-5
                      "
                    >
                      <p
                        className="
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-white/65
                          transition-colors
                          duration-300
                          group-hover:text-white
                          sm:text-[10px]
                        "
                      >
                        {feature.title}
                      </p>

                      {/* Gold accent */}

                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: "32px",
                        }}
                        transition={{
                          delay:
                            1 +
                            index *
                              0.15,
                          duration: 0.5,
                        }}
                        className="
                          mt-3
                          h-[2px]
                          bg-[#C6A15B]
                        "
                      />
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>

        {/* =================================================
            RIGHT HERO VISUAL
        ================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? {}
              : {
                  opacity: 0,
                  x: 60,
                }
          }
          animate={
            reduceMotion
              ? {}
              : {
                  opacity: 1,
                  x: 0,
                }
          }
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            relative
            mx-auto
            w-full
            max-w-[650px]
          "
        >
          {/* =================================================
              TEAL BLOCK
              BEHIND IMAGE
          ================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    scale: 0.8,
                  }
            }
            animate={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    scale: 1,
                  }
            }
            transition={{
              duration: 1,
              delay: 0.45,
            }}
            className="
              absolute
              -bottom-7
              -left-7
              z-0
              h-[58%]
              w-[68%]
              bg-[#087F8C]
              shadow-[0_20px_60px_rgba(8,127,140,0.25)]
            "
          />

          {/* Gold accent behind image */}

          <div
            className="
              absolute
              -bottom-3
              left-[18%]
              z-0
              h-[3px]
              w-[52%]
              bg-[#C6A15B]
            "
          />

          {/* =================================================
              IMAGE
          ================================================== */}

          <div
            className="
              relative
              z-10
              aspect-[0.88]
              overflow-hidden
              border
              border-white/20
              bg-[#123A5A]
              shadow-[0_35px_100px_rgba(0,0,0,0.35)]
            "
          >
            {/* Image */}

            <motion.img
              style={{
                y: imageY,
              }}
              src={HERO_IMAGE}
              alt={
                data?.label ||
                "Innovative Business Solutions"
              }
              className="
                absolute
                inset-0
                h-[118%]
                w-full
                object-cover
              "
              loading="eager"
            />

            {/* Dark overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#071A32]
                via-[#071A32]/20
                to-transparent
              "
            />

            {/* Teal image tint */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#0B1F3A]/30
                via-transparent
                to-[#087F8C]/25
                mix-blend-multiply
              "
            />

            {/* Inner image frame */}

            <div
              className="
                absolute
                inset-4
                border
                border-white/15
              "
            />

            {/* =================================================
                HERO ICON
            ================================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [
                        0,
                        -10,
                        0,
                      ],
                      rotate: [
                        0,
                        4,
                        0,
                      ],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-6
                top-6
                z-20
                flex
                h-[72px]
                w-[72px]
                items-center
                justify-center
                rounded-full
                border
                border-[#C6A15B]
                bg-[#0B1F3A]/85
                text-[#C6A15B]
                shadow-[0_0_35px_rgba(198,161,91,0.2)]
                backdrop-blur-md
                sm:right-8
                sm:top-8
                sm:h-[82px]
                sm:w-[82px]
              "
            >
              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotate: -360,
                      }
                }
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-1
                  rounded-full
                  border
                  border-dashed
                  border-[#087F8C]/60
                "
              />

              <HeroIcon
                size={34}
                strokeWidth={0.55}
              />
            </motion.div>

            {/* Floating teal particle */}

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [
                        0,
                        -12,
                        0,
                      ],
                      opacity: [
                        0.4,
                        1,
                        0.4,
                      ],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                left-8
                top-8
                z-20
                h-2
                w-2
                rounded-full
                bg-[#087F8C]
                shadow-[0_0_15px_#087F8C]
              "
            />

            {/* Floating gold particle */}

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [
                        0,
                        10,
                        0,
                      ],
                      opacity: [
                        0.3,
                        0.9,
                        0.3,
                      ],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 1,
              }}
              className="
                absolute
                bottom-[35%]
                right-8
                z-20
                h-1.5
                w-1.5
                rounded-full
                bg-[#C6A15B]
                shadow-[0_0_15px_#C6A15B]
              "
            />

            {/* =================================================
                IMAGE TEXT
            ================================================== */}

            <div
              className="
                absolute
                bottom-0
                left-0
                z-20
                p-7
                sm:p-10
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#C6A15B]
                "
              >
                IBS Canada
              </p>

              <p
                className="
                  mt-3
                  text-[34px]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.055em]
                  text-white
                  sm:text-[48px]
                "
              >
                Building.

                <span className="text-[#087F8C]">
                  {" "}Growing.
                </span>
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C6A15B]" />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-white/45
                  "
                >
                  Northern Impact
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              GOLD ORBIT
          ================================================== */}

          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    rotate: 360,
                  }
            }
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              z-0
              hidden
              h-[190px]
              w-[190px]
              rounded-full
              border
              border-[#C6A15B]/50
              lg:block
            "
          >
            <span
              className="
                absolute
                left-1/2
                top-[-4px]
                h-2
                w-2
                -translate-x-1/2
                rounded-full
                bg-[#C6A15B]
                shadow-[0_0_12px_#C6A15B]
              "
            />
          </motion.div>

          {/* Floating arrow */}

          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    x: [
                      0,
                      6,
                      0,
                    ],
                    y: [
                      0,
                      -6,
                      0,
                    ],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -bottom-3
              -right-3
              z-20
              hidden
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-[#0B1F3A]
              text-[#C6A15B]
              shadow-xl
              lg:flex
            "
          >
            <ArrowUpRight
              size={22}
              strokeWidth={0.6}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                y: [0, 7, 0],
              }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-7
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          items-center
          gap-3
          text-white/40
          lg:flex
        "
      >
        <ArrowDown size={14} />

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.3em]
          "
        >
          Explore
        </span>
      </motion.div>
    </section>
  );
}