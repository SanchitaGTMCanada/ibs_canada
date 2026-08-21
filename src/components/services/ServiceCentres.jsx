"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  BriefcaseBusiness,
  Lightbulb,
  Leaf,
  Award,
  Users,
  Network,
} from "lucide-react";

import { iconMap } from "./iconMap";

export default function ServiceCentres({
  data,
  reduceMotion = false,
}) {
  const centres = data?.centres || [];

  /*
   * ============================================================
   * NODE POSITIONS
   * ============================================================
   */

  const positions = [
    "left-[12%] top-[10%]",
    "left-[48%] top-[1%]",
    "right-[3%] top-[12%]",
    "right-[-1%] top-[48%]",
    "right-[14%] bottom-[5%]",
    "left-[20%] bottom-[3%]",
    "left-[0%] top-[47%]",
  ];

  /*
   * ============================================================
   * NODE COLOURS
   * ============================================================
   */

  const nodeColors = [
    {
      icon: "#087F8C",
      dot: "#C6A15B",
      glow: "rgba(8,127,140,0.40)",
    },
    {
      icon: "#C6A15B",
      dot: "#087F8C",
      glow: "rgba(198,161,91,0.40)",
    },
    {
      icon: "#6EC6D1",
      dot: "#C6A15B",
      glow: "rgba(110,198,209,0.40)",
    },
    {
      icon: "#C6A15B",
      dot: "#087F8C",
      glow: "rgba(198,161,91,0.40)",
    },
    {
      icon: "#087F8C",
      dot: "#C6A15B",
      glow: "rgba(8,127,140,0.40)",
    },
    {
      icon: "#C6A15B",
      dot: "#087F8C",
      glow: "rgba(198,161,91,0.40)",
    },
    {
      icon: "#6EC6D1",
      dot: "#C6A15B",
      glow: "rgba(110,198,209,0.40)",
    },
  ];

  /*
   * ============================================================
   * LARGE BACKGROUND ICONS
   * ============================================================
   */

  const backgroundIcons = [
    {
      Icon: BookOpen,
      className: "left-[0%] top-[10%]",
      color: "text-[#087F8C]/[0.12]",
      size: 230,
      duration: 9,
      animation: {
        y: [0, -18, 0],
        rotate: [-8, -4, -8],
      },
    },
    {
      Icon: BriefcaseBusiness,
      className: "left-[43%] top-[4%]",
      color: "text-[#C6A15B]/[0.10]",
      size: 180,
      duration: 11,
      animation: {
        y: [0, 15, 0],
        rotate: [7, 11, 7],
      },
    },
    {
      Icon: Lightbulb,
      className: "left-[25%] top-[35%]",
      color: "text-[#6EC6D1]/[0.10]",
      size: 210,
      duration: 10,
      animation: {
        y: [0, -14, 0],
        x: [0, 8, 0],
        rotate: [4, 0, 4],
      },
    },
    {
      Icon: Leaf,
      className: "left-[-2%] bottom-[5%]",
      color: "text-[#087F8C]/[0.09]",
      size: 250,
      duration: 12,
      animation: {
        y: [0, 18, 0],
        rotate: [-12, -5, -12],
      },
    },
    {
      Icon: Award,
      className: "left-[48%] bottom-[7%]",
      color: "text-[#C6A15B]/[0.09]",
      size: 190,
      duration: 8,
      animation: {
        y: [0, -12, 0],
        rotate: [8, 13, 8],
      },
    },
    {
      Icon: Users,
      className: "left-[3%] bottom-[28%]",
      color: "text-[#DCE2E7]/[0.045]",
      size: 190,
      duration: 13,
      animation: {
        y: [0, 12, 0],
        x: [0, -8, 0],
      },
    },
    {
      Icon: Network,
      className: "left-[30%] bottom-[-35px]",
      color: "text-[#087F8C]/[0.06]",
      size: 300,
      duration: 18,
      animation: {
        rotate: [0, 5, 0, -5, 0],
        scale: [1, 1.03, 1],
      },
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#07182D]
        via-[#0B1F3A]
        to-[#087F8C]
        px-5
        py-24
        sm:px-8
        lg:px-14
        lg:py-32
      "
    >
      {/* ========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_72%_50%,rgba(8,127,140,0.25),transparent_31%),radial-gradient(circle_at_18%_32%,rgba(198,161,91,0.08),transparent_27%)]
        "
      />

      {/* Teal glow */}

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, 30, 0],
                y: [0, -18, 0],
                scale: [1, 1.07, 1],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-[10%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#087F8C]/16
          blur-[125px]
        "
      />

      {/* Gold glow */}

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, -20, 0],
                y: [0, 20, 0],
              }
        }
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[45%]
          h-[430px]
          w-[430px]
          rounded-full
          bg-[#C6A15B]/7
          blur-[120px]
        "
      />

      {/* ========================================================
          LARGE BACKGROUND ICON FIELD — LEFT
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-40px]
          top-0
          h-full
          w-[52%]
          overflow-hidden
        "
      >
        {/* Soft teal glow */}

        <div
          className="
            absolute
            left-[10%]
            top-[25%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#087F8C]/[0.07]
            blur-[100px]
          "
        />

        {/* Soft gold glow */}

        <div
          className="
            absolute
            left-[25%]
            top-[55%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#C6A15B]/[0.045]
            blur-[90px]
          "
        />

        {/* Background icons */}

        {backgroundIcons.map(
          (item, index) => {
            const Icon = item.Icon;

            return (
              <motion.div
                key={index}
                animate={
                  reduceMotion
                    ? {}
                    : item.animation
                }
                transition={{
                  duration:
                    item.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.35,
                }}
                className={`
                  absolute
                  ${item.className}
                  ${item.color}
                `}
              >
                <Icon
                  size={item.size}
                  strokeWidth={0.45}
                />
              </motion.div>
            );
          }
        )}

        {/* Decorative lines */}

        <div
          className="
            absolute
            left-[7%]
            top-[20%]
            h-px
            w-[70%]
            bg-gradient-to-r
            from-[#087F8C]/15
            to-transparent
          "
        />

        <div
          className="
            absolute
            left-[5%]
            top-[72%]
            h-px
            w-[65%]
            bg-gradient-to-r
            from-[#C6A15B]/10
            to-transparent
          "
        />

        <div
          className="
            absolute
            bottom-[15%]
            left-[20%]
            h-[1px]
            w-[35%]
            rotate-[-18deg]
            bg-gradient-to-r
            from-transparent
            via-[#087F8C]/20
            to-transparent
          "
        />
      </div>

      {/* ========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1450px]
        "
      >
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[0.72fr_1.28fr]
            lg:items-center
            lg:gap-8
          "
        >
          {/* ====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    x: -30,
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
            }}
            className="
              relative
              z-20
            "
          >
            {/* Label */}

            <div className="flex items-center gap-3">
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
                  tracking-[0.27em]
                  text-[#C6A15B]
                "
              >
                Centres of Excellence
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                mt-7
                max-w-[580px]
                text-[52px]
                font-medium
                leading-[0.84]
                tracking-[-0.07em]
                text-white
                sm:text-[70px]
                lg:text-[84px]
              "
            >
              {data.centresTitle}

              <span
                className="
                  block
                  text-[#C6A15B]
                "
              >
                {data.centresAccent}
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-[460px]
                text-[14px]
                leading-[1.9]
                text-[#DCE2E7]/55
                sm:text-[16px]
              "
            >
              {data.centresDescription}
            </p>

            {/* Accent line */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 100,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="
                mt-10
                h-[2px]
                bg-gradient-to-r
                from-[#C6A15B]
                via-[#C6A15B]/50
                to-transparent
              "
            />

            {/* Connected pathways */}

            <motion.div
              initial={
                reduceMotion
                  ? {}
                  : {
                      opacity: 0,
                      y: 12,
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
                duration: 0.6,
                delay: 0.45,
              }}
              className="
                mt-7
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#087F8C]/45
                  text-[#6EC6D1]
                "
              >
                <Sparkles
                  size={17}
                  strokeWidth={1.2}
                />
              </div>

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/35
                "
              >
                Connected pathways
              </span>
            </motion.div>
          </motion.div>

          {/* ====================================================
              RIGHT VISUAL
          ===================================================== */}

          <div
            className="
              relative
              mx-auto
              aspect-square
              w-full
              max-w-[690px]
            "
          >
            {/* Atmospheric field */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[88%]
                w-[88%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#087F8C]/[0.035]
              "
            />

            {/* ==================================================
                OUTER RING
            =================================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 48,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-[5%]
                rounded-full
                border
                border-white/[0.035]
              "
            />

            {/* ==================================================
                MAIN TEAL RING
            =================================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      rotate: -360,
                    }
              }
              transition={{
                duration: 34,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-[12%]
                rounded-full
                border
                border-[#087F8C]/45
                shadow-[0_0_50px_rgba(8,127,140,0.06)]
              "
            >
              {!reduceMotion && (
                <motion.span
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    left-1/2
                    top-[-4px]
                    h-2
                    w-2
                    -translate-x-1/2
                    rounded-full
                    bg-[#6EC6D1]
                    shadow-[0_0_20px_#6EC6D1]
                  "
                />
              )}
            </motion.div>

            {/* ==================================================
                GOLD DASHED RING
            =================================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 27,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-[26%]
                rounded-full
                border
                border-dashed
                border-[#C6A15B]/25
              "
            />

            {/* Inner ring */}

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      rotate: -360,
                    }
              }
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-[34%]
                rounded-full
                border
                border-[#C6A15B]/10
              "
            />

            {/* ==================================================
                CONNECTING CONSTELLATION
            =================================================== */}

            <svg
              viewBox="0 0 600 600"
              className="
                pointer-events-none
                absolute
                inset-[10%]
                h-[80%]
                w-[80%]
                opacity-35
              "
            >
              <defs>
                <linearGradient
                  id="centreGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#087F8C"
                    stopOpacity="0"
                  />

                  <stop
                    offset="45%"
                    stopColor="#087F8C"
                    stopOpacity="0.7"
                  />

                  <stop
                    offset="70%"
                    stopColor="#C6A15B"
                    stopOpacity="0.5"
                  />

                  <stop
                    offset="100%"
                    stopColor="#C6A15B"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              <circle
                cx="300"
                cy="300"
                r="215"
                fill="none"
                stroke="url(#centreGradient)"
                strokeWidth="1"
                strokeDasharray="2 10"
              />

              <circle
                cx="300"
                cy="300"
                r="155"
                fill="none"
                stroke="#087F8C"
                strokeOpacity="0.18"
                strokeWidth="1"
              />
            </svg>

            {/* ==================================================
                COLOURFUL OUTER DOTS
            =================================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                inset-[3%]
              "
            >
              {[
                "#C6A15B",
                "#087F8C",
                "#6EC6D1",
                "#C6A15B",
                "#DCE2E7",
                "#087F8C",
                "#C6A15B",
                "#6EC6D1",
                "#087F8C",
                "#C6A15B",
                "#DCE2E7",
                "#087F8C",
              ].map(
                (color, index) => {
                  const angle =
                    (360 / 12) *
                    index;

                  return (
                    <motion.span
                      key={index}
                      animate={
                        reduceMotion
                          ? {}
                          : {
                              scale: [
                                1,
                                1.7,
                                1,
                              ],
                              opacity: [
                                0.35,
                                1,
                                0.35,
                              ],
                            }
                      }
                      transition={{
                        duration:
                          1.8 +
                          index * 0.13,
                        repeat:
                          Infinity,
                        ease: "easeInOut",
                        delay:
                          index * 0.15,
                      }}
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-2
                        w-2
                        rounded-full
                      "
                      style={{
                        transform: `
                          translate(-50%, -50%)
                          rotate(${angle}deg)
                          translateY(-47%)
                        `,
                        backgroundColor:
                          color,
                        boxShadow:
                          `0 0 14px ${color}`,
                      }}
                    />
                  );
                }
              )}
            </motion.div>

            {/* ==================================================
                CENTRAL GLOW
            =================================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      scale: [
                        1,
                        1.08,
                        1,
                      ],
                      opacity: [
                        0.15,
                        0.3,
                        0.15,
                      ],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[260px]
                w-[260px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#087F8C]/15
                blur-[55px]
              "
            />

            {/* ==================================================
                CENTRAL IBS HUB
            =================================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? {}
                  : {
                      opacity: 0,
                      scale: 0.75,
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
                duration: 0.9,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                absolute
                left-1/2
                top-1/2
                z-50
                flex
                h-36
                w-36
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                sm:h-44
                sm:w-44
              "
            >
              {/* Gold rotating ring */}

              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 13,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-[#C6A15B]/60
                  border-t-transparent
                  border-r-transparent
                "
              />

              {/* Teal rotating ring */}

              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotate: -360,
                      }
                }
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[9px]
                  rounded-full
                  border
                  border-[#087F8C]/70
                  border-b-transparent
                  border-l-transparent
                "
              />

              {/* Hub */}

              <div
                className="
                  relative
                  flex
                  h-[112px]
                  w-[112px]
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-[#123A5A]
                  via-[#0B1F3A]
                  to-[#061426]
                  shadow-[0_25px_90px_rgba(0,0,0,0.55)]
                  sm:h-[136px]
                  sm:w-[136px]
                "
              >
                <motion.div
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          y: [
                            0,
                            -4,
                            0,
                          ],
                          scale: [
                            1,
                            1.04,
                            1,
                          ],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <GraduationCap
                    size={42}
                    className="
                      text-[#C6A15B]
                      drop-shadow-[0_0_12px_rgba(198,161,91,0.45)]
                    "
                    strokeWidth={1.4}
                  />
                </motion.div>

                <span
                  className="
                    mt-2
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.32em]
                    text-[#DCE2E7]/45
                  "
                >
                  IBS
                </span>

                <span
                  className="
                    mt-1
                    text-[14px]
                    font-medium
                    text-white
                  "
                >
                  Excellence
                </span>
              </div>
            </motion.div>

            {/* ==================================================
                CENTRE NODES
            =================================================== */}

            {centres.map(
              (
                centre,
                index
              ) => {
                const Icon =
                  iconMap[
                    centre.icon
                  ] ||
                  GraduationCap;

                const color =
                  nodeColors[
                    index %
                      nodeColors.length
                  ];

                return (
                  <motion.div
                    key={
                      centre.title
                    }
                    initial={
                      reduceMotion
                        ? {}
                        : {
                            opacity: 0,
                            scale: 0.6,
                            y: 20,
                          }
                    }
                    whileInView={
                      reduceMotion
                        ? {}
                        : {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                          }
                    }
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.7,
                      delay:
                        index * 0.1,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            scale: 1.1,
                            y: -5,
                          }
                    }
                    className={`
                      absolute
                      z-40
                      ${positions[index]}
                    `}
                  >
                    <div
                      className="
                        group
                        flex
                        w-[110px]
                        flex-col
                        items-center
                        text-center
                        sm:w-[135px]
                      "
                    >
                      {/* ==================================================
                          BOLD ICON NODE
                      =================================================== */}

                      <div
                        className="
                          relative
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          bg-[#07182D]
                          transition-all
                          duration-500
                          sm:h-14
                          sm:w-14
                        "
                        style={{
                          color:
                            color.icon,
                          boxShadow: `
                            0 0 0 1px rgba(255,255,255,0.07),
                            0 12px 35px rgba(0,0,0,0.4),
                            0 0 30px ${color.glow}
                          `,
                        }}
                      >
                        {/* Outer halo */}

                        <span
                          className="
                            absolute
                            inset-[-7px]
                            rounded-full
                            border
                            border-white/[0.05]
                            transition-all
                            duration-500
                            group-hover:border-[#C6A15B]/40
                          "
                        />

                        {/* Rotating coloured ring */}

                        <motion.span
                          animate={
                            reduceMotion
                              ? {}
                              : {
                                  rotate: 360,
                                }
                          }
                          transition={{
                            duration:
                              6 +
                              index,
                            repeat:
                              Infinity,
                            ease: "linear",
                          }}
                          className="
                            absolute
                            inset-[-4px]
                            rounded-full
                            border
                            border-transparent
                          "
                          style={{
                            borderTopColor:
                              color.icon,
                            borderRightColor:
                              `${color.icon}66`,
                          }}
                        />

                        {/* BOLD ICON */}

                        <Icon
                          size={27}
                          strokeWidth={1.5}
                          className="
                            drop-shadow-[0_0_8px_currentColor]
                          "
                        />

                        {/* Status dot */}

                        <motion.span
                          animate={
                            reduceMotion
                              ? {}
                              : {
                                  scale: [
                                    1,
                                    1.45,
                                    1,
                                  ],
                                  opacity: [
                                    0.7,
                                    1,
                                    0.7,
                                  ],
                                }
                          }
                          transition={{
                            duration: 2,
                            repeat:
                              Infinity,
                            ease:
                              "easeInOut",
                            delay:
                              index *
                              0.15,
                          }}
                          className="
                            absolute
                            right-0
                            top-0
                            h-2
                            w-2
                            rounded-full
                          "
                          style={{
                            backgroundColor:
                              color.dot,
                            boxShadow:
                              `0 0 12px ${color.dot}`,
                          }}
                        />
                      </div>

                      {/* Title */}

                      <span
                        className="
                          mt-4
                          max-w-[135px]
                          text-[8px]
                          font-medium
                          leading-[1.45]
                          text-white/70
                          transition-colors
                          duration-500
                          group-hover:text-white
                          sm:text-[9px]
                        "
                      >
                        {
                          centre.title
                        }
                      </span>

                      {/* Description */}

                      {centre.description && (
                        <span
                          className="
                            mt-1
                            max-w-[135px]
                            text-[7px]
                            leading-[1.5]
                            text-white/30
                            sm:text-[8px]
                          "
                        >
                          {
                            centre.description
                          }
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              }
            )}

            {/* ==================================================
                FLOATING ACCENT
            =================================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      x: [
                        0,
                        5,
                        0,
                      ],
                      y: [
                        0,
                        -4,
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
                bottom-[8%]
                right-[7%]
                z-50
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#C6A15B]/35
                bg-[#07182D]/80
                text-[#C6A15B]
                backdrop-blur-sm
              "
            >
              <span className="text-[14px]">
                ↗
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ========================================================
          BOTTOM ACCENT
      ========================================================= */}

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
          delay: 0.3,
        }}
        className="
          absolute
          bottom-0
          left-0
          h-[3px]
          bg-gradient-to-r
          from-[#C6A15B]
          via-[#087F8C]
          to-transparent
        "
      />
    </section>
  );
}