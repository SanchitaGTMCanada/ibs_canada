"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Target,
  ShieldCheck,
  Settings2,
  BarChart3,
  TrendingUp,
  MonitorCog,
  UsersRound,
  Mountain,
  Cog,
  Flag,
  Compass,
  Lightbulb,
  Rocket,
} from "lucide-react";

import { motion } from "framer-motion";

/* =========================================================
   CLIENT OUTCOMES
========================================================= */

const clientOutcomes = [
  {
    icon: Target,
    title: "Sharper strategic direction",
  },
  {
    icon: ShieldCheck,
    title: "Stronger governance and accountability",
  },
  {
    icon: Settings2,
    title: "More efficient operations",
  },
  {
    icon: BarChart3,
    title: "Better financial visibility and control",
  },
  {
    icon: TrendingUp,
    title: "Sustainable revenue and business growth",
  },
  {
    icon: MonitorCog,
    title: "Practical technology and digital capabilities",
  },
  {
    icon: UsersRound,
    title: "Stronger organizational and community capacity",
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const revealUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -55,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 55,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   JOURNEY STEPS
========================================================= */

const journeySteps = [
  {
    number: "01",
    title: "Consulting",
    gradient:
      "from-[#111D2B] via-[#123B4A] to-[#087F8C]",
  },

  {
    number: "02",
    title: "Strategy, Analysis & Advice",
    gradient:
      "from-[#0E2637] via-[#087F8C] to-[#2D8C94]",
  },

  {
    number: "03",
    title: "Project Execution",
    gradient:
      "from-[#172536] via-[#174B5A] to-[#087F8C]",
  },

  {
    number: "04",
    title: "Implementation & Delivery",
    gradient:
      "from-[#10303C] via-[#087F8C] to-[#C6A15B]",
  },
];

/* =========================================================
   ABOUT SECTION
========================================================= */

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
        xl:py-28
      "
    >
      {/* =====================================================
          GLOBAL BACKGROUND GLOWS
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[5%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#087F8C]/[0.045]
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[-160px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#C6A15B]/[0.045]
          blur-[120px]
        "
      />

      {/* =====================================================
          DECORATIVE TARGET
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-190px]
          top-[300px]
          hidden
          lg:block
        "
      >
        <div className="relative h-[460px] w-[460px]">
          <div
            className="
              absolute
              inset-0
              rounded-full
              border
              border-[#C6A15B]/25
            "
          />

          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-[28px]
              rounded-full
              border
              border-dashed
              border-[#087F8C]/25
            "
          />

          <div
            className="
              absolute
              inset-[80px]
              rounded-full
              border
              border-[#087F8C]/20
            "
          />

          <Target
            size={160}
            strokeWidth={0.65}
            className="
              absolute
              left-[150px]
              top-[150px]
              text-[#C6A15B]/25
            "
          />

          <motion.span
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              absolute
              left-[85px]
              top-[75px]
              h-[10px]
              w-[10px]
              rounded-full
              bg-[#087F8C]/60
            "
          />

          <span
            className="
              absolute
              bottom-[70px]
              right-[70px]
              h-[8px]
              w-[8px]
              rounded-full
              bg-[#C6A15B]/60
            "
          />
        </div>
      </div>

      {/* =====================================================
          DECORATIVE MOUNTAIN
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-15px]
          top-[190px]
          hidden
          xl:block
        "
      >
        <Mountain
          size={210}
          strokeWidth={0.65}
          className="text-[#087F8C]/15"
        />

        <Flag
          size={60}
          strokeWidth={0.7}
          className="
            absolute
            right-[105px]
            top-[-15px]
            text-[#C6A15B]/40
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-16
          "
        >
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  relative
                  flex
                  h-[9px]
                  w-[9px]
                  items-center
                  justify-center
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#087F8C]/30
                    blur-[4px]
                  "
                />

                <span
                  className="
                    relative
                    h-[7px]
                    w-[7px]
                    rounded-full
                    bg-[#C6A15B]
                  "
                />
              </span>

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#087F8C]
                  sm:text-[11px]
                "
              >
                What We Help Clients Achieve
              </span>
            </div>

            <div
              className="
                mt-7
                hidden
                h-px
                w-[150px]
                bg-gradient-to-r
                from-[#087F8C]
                to-transparent
                lg:block
              "
            />
          </motion.div>

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <h2
              className="
                max-w-[900px]
                text-[39px]
                font-semibold
                leading-[1.02]
                tracking-[-0.055em]
                text-[#202832]
                sm:text-[50px]
                md:text-[58px]
                lg:text-[66px]
                xl:text-[74px]
              "
            >
              What We Help
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[#087F8C]
                  via-[#168A95]
                  to-[#C6A15B]
                  bg-clip-text
                  text-transparent
                "
              >
                Clients Achieve
              </span>
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            IMAGE + OUTCOMES
        ===================================================== */}

        <div
          className="
            mt-14
            grid
            items-start
            gap-12
            lg:mt-16
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-16
            xl:gap-20
          "
        >
          {/* =================================================
              IMAGE
          ================================================= */}

          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              relative
              min-h-[510px]
              sm:min-h-[570px]
              lg:min-h-[600px]
            "
          >
            <div
              className="
                absolute
                left-0
                top-0
                h-[82%]
                w-[78%]
                overflow-hidden
                rounded-[36px]
                bg-[#F6F4EF]
                shadow-[0_30px_80px_rgba(11,31,58,0.14)]
                sm:w-[72%]
              "
            >
              <Image
                src="/images/about/ibs-about.jpg"
                alt="Innovative Business Solutions"
                fill
                className="
                  object-cover
                  transition-transform
                  duration-[1400ms]
                  hover:scale-105
                "
                sizes="
                  (max-width: 1024px) 85vw,
                  50vw
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0B1F3A]/40
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* =================================================
                FLOATING PANEL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="
                absolute
                bottom-0
                right-[2%]
                z-10
                min-h-[245px]
                w-[48%]
                overflow-hidden
                rounded-[30px]
                border-[8px]
                border-white
                shadow-[0_25px_60px_rgba(11,31,58,0.18)]
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#07182D]
                  via-[#0B1F3A]
                  to-[#087F8C]
                "
              />

              <div
                className="
                  absolute
                  -right-12
                  -top-12
                  h-[150px]
                  w-[150px]
                  rounded-full
                  border
                  border-[#087F8C]/30
                "
              />

              <div
                className="
                  absolute
                  bottom-[-45px]
                  left-[-30px]
                  h-[125px]
                  w-[125px]
                  rounded-full
                  border
                  border-[#C6A15B]/30
                "
              />

              <div
                className="
                  relative
                  flex
                  min-h-[230px]
                  flex-col
                  justify-between
                  p-6
                  sm:p-7
                "
              >
                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#C6A15B]
                  "
                >
                  IBS
                </span>

                <p
                  className="
                    max-w-[220px]
                    text-[19px]
                    font-semibold
                    leading-6
                    text-white
                    sm:text-[21px]
                  "
                >
                  Practical strategies,
                  <br />
                  stronger operations,
                  <br />
                  sustainable capacity.
                </p>
              </div>
            </motion.div>

            {/* =================================================
                IBS CIRCLE
            ================================================= */}

            <motion.div
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
                duration: 0.7,
                delay: 0.35,
              }}
              animate={{
                y: [0, -6, 0],
              }}
              className="
                absolute
                right-[18%]
                top-[-32px]
                z-20
                flex
                h-[100px]
                w-[100px]
                items-center
                justify-center
                rounded-full
                border
                border-[#C6A15B]
                bg-white
                shadow-[0_15px_40px_rgba(11,31,58,0.08)]
              "
            >
              <div className="text-center">
                <p
                  className="
                    text-[24px]
                    font-bold
                    leading-none
                    text-[#0B1F3A]
                  "
                >
                  IBS
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#087F8C]
                  "
                >
                  Canada
                </p>
              </div>
            </motion.div>

            <div
              className="
                absolute
                bottom-[5%]
                left-[4%]
                h-[3px]
                w-[100px]
                rounded-full
                bg-gradient-to-r
                from-[#C6A15B]
                to-[#087F8C]
              "
            />
          </motion.div>

          {/* =================================================
              OUTCOMES
          ================================================= */}

          <motion.div
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <p
              className="
                max-w-[650px]
                text-[17px]
                leading-7
                text-[#68737D]
                sm:text-[18px]
              "
            >
              We combine strategic thinking, financial expertise,
              operational discipline, technology and technical
              capabilities to help organizations make better decisions
              and build sustainable capacity.
            </p>

            <div
              className="
                mt-8
                border-t
                border-[#DCE2E7]
              "
            >
              {clientOutcomes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="
                      group
                      relative
                      flex
                      min-h-[70px]
                      items-center
                      gap-4
                      border-b
                      border-[#DCE2E7]
                      py-3
                    "
                  >
                    <span
                      className="
                        w-[28px]
                        shrink-0
                        text-[10px]
                        font-bold
                        tracking-[0.16em]
                        text-[#C6A15B]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        flex
                        h-[38px]
                        w-[38px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#087F8C]/[0.07]
                        text-[#087F8C]
                        transition-all
                        duration-300
                        group-hover:bg-[#087F8C]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.7}
                      />
                    </span>

                    <span
                      className="
                        flex-1
                        text-[14px]
                        font-semibold
                        leading-5
                        text-[#202832]
                        transition-colors
                        duration-300
                        group-hover:text-[#087F8C]
                        sm:text-[15px]
                      "
                    >
                      {item.title}
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="
                        shrink-0
                        text-[#DCE2E7]
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#C6A15B]
                      "
                    />

                    <span
                      className="
                        absolute
                        bottom-[-1px]
                        left-0
                        h-[2px]
                        w-0
                        bg-gradient-to-r
                        from-[#087F8C]
                        to-[#C6A15B]
                        transition-all
                        duration-500
                        group-hover:w-[70px]
                      "
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            INTEGRATED CROSS-CUTTING CAPABILITIES
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-20
            mt-20
            border-t
            border-[#DCE2E7]
            pt-10
            lg:mt-24
            lg:pt-12
          "
        >
          {/* =================================================
              HEADING
          ================================================= */}

          <div
            className="
              relative
              grid
              gap-8
              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-end
              lg:gap-20
            "
          >
            {/* =================================================
                BACKGROUND ICONS
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                right-[18%]
                top-[-35px]
                hidden
                text-[#087F8C]/[0.075]
                lg:block
              "
            >
              <Compass
                size={205}
                strokeWidth={0.7}
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                x: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                bottom-[-55px]
                right-[2%]
                hidden
                text-[#C6A15B]/[0.09]
                lg:block
              "
            >
              <Target
                size={160}
                strokeWidth={0.7}
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                bottom-[-30px]
                left-[42%]
                hidden
                text-[#087F8C]/[0.065]
                lg:block
              "
            >
              <Lightbulb
                size={135}
                strokeWidth={0.7}
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                x: [0, 6, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                right-[42%]
                top-[20px]
                hidden
                rotate-[-8deg]
                text-[#C6A15B]/[0.075]
                lg:block
              "
            >
              <Rocket
                size={120}
                strokeWidth={0.7}
              />
            </motion.div>

            {/* =================================================
                LEFT HEADING
            ================================================= */}

            <div className="relative z-10">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
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
                    relative
                    flex
                    h-[9px]
                    w-[9px]
                    items-center
                    justify-center
                  "
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-[#087F8C]/40
                    "
                  />

                  <span
                    className="
                      relative
                      h-[7px]
                      w-[7px]
                      rounded-full
                      bg-gradient-to-br
                      from-[#C6A15B]
                      to-[#087F8C]
                    "
                  />
                </span>

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#087F8C]
                    sm:text-[10px]
                  "
                >
                  Integrated Cross-Cutting Capabilities
                </span>
              </motion.div>

              <motion.h3
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
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  mt-5
                  max-w-[620px]
                  text-[38px]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-[#202832]
                  sm:text-[48px]
                  lg:text-[56px]
                  xl:text-[62px]
                "
              >
                <span className="block">
                  From Strategy
                </span>

                <span className="relative mt-1 block w-fit">
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-[#087F8C]/20
                      via-[#087F8C]/10
                      to-[#C6A15B]/20
                      blur-[18px]
                    "
                  />

                  <span
                    className="
                      relative
                      bg-gradient-to-r
                      from-[#087F8C]
                      via-[#087F8C]
                      to-[#C6A15B]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    to Delivery
                  </span>

                  <motion.span
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "100%",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.6,
                    }}
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      rounded-full
                      bg-gradient-to-r
                      from-[#087F8C]
                      via-[#C6A15B]
                      to-transparent
                    "
                  />
                </span>
              </motion.h3>
            </div>

            {/* =================================================
                RIGHT DESCRIPTION
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="
                relative
                z-10
                lg:pb-2
              "
            >
              <div
                className="
                  absolute
                  -left-6
                  top-0
                  hidden
                  h-full
                  w-[2px]
                  rounded-full
                  bg-gradient-to-b
                  from-[#087F8C]
                  via-[#C6A15B]
                  to-transparent
                  lg:block
                "
              />

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <span
                  className="
                    mt-[-5px]
                    bg-gradient-to-b
                    from-[#C6A15B]
                    to-[#087F8C]
                    bg-clip-text
                    text-[38px]
                    font-serif
                    leading-none
                    text-transparent
                  "
                >
                  “
                </span>

                <p
                  className="
                    max-w-[700px]
                    text-[15px]
                    font-medium
                    leading-7
                    text-[#68737D]
                    sm:text-[16px]
                    lg:text-[17px]
                    lg:leading-8
                  "
                >
                  IBS supports clients across the full journey—from
                  understanding the challenge and developing a practical
                  strategy to executing priorities and building lasting
                  organizational capability.
                </p>
              </div>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-3
                  pl-[38px]
                "
              >
                <span
                  className="
                    h-[5px]
                    w-[5px]
                    rounded-full
                    bg-[#087F8C]
                  "
                />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#202832]/35
                  "
                >
                  Strategy · Execution · Capability
                </span>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              PREMIUM JOURNEY CARD
          ================================================= */}

          <div
  className="
  relative
  mt-12
  overflow-hidden
  rounded-[40px]
  border
  border-white/[0.12]
  bg-gradient-to-br
  from-[#071A30]
  via-[#0B3150]
  to-[#087F8C]
  px-5
  py-10
  shadow-[0_35px_100px_rgba(11,31,58,0.35)]
  sm:px-8
  sm:py-12
  lg:px-12
  lg:py-14
"
            
          >
            {/* =================================================
                BACKGROUND GLOW
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[130px]
                -top-[150px]
                h-[430px]
                w-[430px]
                rounded-full
                bg-[#087F8C]/20
                blur-[110px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-[170px]
                -left-[140px]
                h-[430px]
                w-[430px]
                rounded-full
                bg-[#C6A15B]/14
                blur-[110px]
              "
            />

            {/* =================================================
                LARGE BACKGROUND CIRCLES
            ================================================= */}

            <motion.div
              animate={{
                x: [0, 18, 0],
                y: [0, -12, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -left-[190px]
                top-[40px]
                h-[460px]
                w-[460px]
                rounded-full
                border
                border-[#087F8C]/[0.11]
                bg-[#087F8C]/[0.025]
              "
            />

            <motion.div
              animate={{
                x: [0, -20, 0],
                y: [0, 15, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -right-[180px]
                top-[-20px]
                h-[430px]
                w-[430px]
                rounded-full
                border
                border-[#C6A15B]/[0.10]
                bg-[#C6A15B]/[0.025]
              "
            />

            {/* =================================================
                CENTER CIRCLES
            ================================================= */}

            <motion.div
              animate={{
                scale: [1, 1.035, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[360px]
                w-[360px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white/[0.055]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[210px]
                w-[210px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#087F8C]/[0.07]
              "
            />

            {/* =================================================
                SMALL FLOATING CIRCLES
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -14, 0],
                opacity: [0.25, 0.55, 0.25],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                right-[27%]
                top-[45px]
                h-[72px]
                w-[72px]
                rounded-full
                border
                border-[#087F8C]/[0.13]
                bg-[#087F8C]/[0.03]
              "
            />

            <motion.div
              animate={{
                y: [0, 12, 0],
                x: [0, -8, 0],
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                bottom-[30px]
                left-[22%]
                h-[58px]
                w-[58px]
                rounded-full
                border
                border-[#C6A15B]/[0.13]
                bg-[#C6A15B]/[0.03]
              "
            />

            {/* =================================================
                SUBTLE DOT
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                right-[12%]
                bottom-[18%]
                h-[6px]
                w-[6px]
                rounded-full
                bg-[#C6A15B]/50
                shadow-[0_0_15px_rgba(198,161,91,0.6)]
              "
            />

            {/* =================================================
                INNER BORDER
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[1px]
                rounded-[39px]
                border
                border-white/[0.06]
              "
            />

            {/* =================================================
                CARD HEADER
            ================================================= */}

            <div
              className="
                relative
                z-20
                flex
                items-center
                justify-between
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-[6px]
                    w-[6px]
                    rounded-full
                    bg-[#C6A15B]
                    shadow-[0_0_14px_rgba(198,161,91,0.8)]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-white/45
                  "
                >
                  Our Approach
                </span>

                <span
                  className="
                    hidden
                    h-px
                    w-10
                    bg-white/10
                    sm:block
                  "
                />
              </div>

              <span
                className="
                  text-[9px]
                  font-bold
                  tracking-[0.18em]
                  text-[#C6A15B]
                "
              >
                01 — 04
              </span>
            </div>

            {/* =================================================
                JOURNEY FLOW
            ================================================= */}

            <div
              className="
                relative
                z-10
                mt-12
              "
            >
              {/* =================================================
                  DESKTOP CONNECTING STRING
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[11%]
                  right-[11%]
                  top-[67px]
                  hidden
                  lg:block
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-1/2
                    h-[12px]
                    -translate-y-1/2
                    rounded-full
                    bg-[#087F8C]/20
                    blur-[10px]
                  "
                />

                {/* Base */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-1/2
                    h-[2px]
                    -translate-y-1/2
                    rounded-full
                    bg-white/10
                  "
                />

                {/* Animated gradient */}

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    left-0
                    right-0
                    top-1/2
                    h-[3px]
                    origin-left
                    -translate-y-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-[#087F8C]
                    via-[#C6A15B]
                    to-[#087F8C]
                  "
                />

                {/* Moving light */}

                <motion.span
                  initial={{
                    left: "0%",
                    opacity: 0,
                  }}
                  whileInView={{
                    left: "100%",
                    opacity: [0, 1, 1, 0],
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 2.2,
                    delay: 0.55,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    top-1/2
                    h-[9px]
                    w-[9px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-white
                    shadow-[0_0_20px_rgba(78,168,176,1)]
                  "
                />
              </div>

              {/* =================================================
                  STEPS
              ================================================= */}

              <div
                className="
                  grid
                  gap-12
                  lg:grid-cols-4
                  lg:gap-0
                "
              >
                {journeySteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.16,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      group
                      relative
                      text-center
                    "
                  >
                    {/* =================================================
                        STEP CIRCLE
                    ================================================= */}

                    <div className="relative mx-auto w-fit">
                      {/* Outer animated glow */}

                      <motion.div
                        animate={{
                          scale: [1, 1.16, 1],
                          opacity: [0.08, 0.22, 0.08],
                        }}
                        transition={{
                          duration: 3.2,
                          repeat: Infinity,
                          delay: index * 0.45,
                          ease: "easeInOut",
                        }}
                        className={`
                          absolute
                          inset-[-17px]
                          rounded-full
                          bg-gradient-to-br
                          ${step.gradient}
                          blur-[18px]
                        `}
                      />

                      {/* Main circle */}

                      <motion.div
                        whileHover={{
                          scale: 1.07,
                        }}
                        className={`
                          relative
                          flex
                          h-[124px]
                          w-[124px]
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/25
                          bg-gradient-to-br
                          ${step.gradient}
                          shadow-[0_25px_60px_rgba(0,0,0,0.35)]
                          transition-all
                          duration-500
                          sm:h-[140px]
                          sm:w-[140px]
                        `}
                      >
                        {/* Glass ring */}

                        <div
                          className="
                            absolute
                            inset-[7px]
                            rounded-full
                            border
                            border-white/20
                            bg-white/[0.06]
                            backdrop-blur-sm
                          "
                        />

                        {/* Inner circle */}

                        <div
                          className="
                            absolute
                            inset-[18px]
                            rounded-full
                            border
                            border-white/[0.07]
                          "
                        />

                        {/* Number */}

                        <span
                          className="
                            relative
                            z-10
                            text-[28px]
                            font-bold
                            tracking-[-0.06em]
                            text-white
                            drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
                            sm:text-[31px]
                          "
                        >
                          {step.number}
                        </span>

                        {/* Gold indicator */}

                        <motion.span
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.65, 1, 0.65],
                          }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            delay: index * 0.35,
                          }}
                          className="
                            absolute
                            bottom-[22px]
                            h-[5px]
                            w-[5px]
                            rounded-full
                            bg-[#C6A15B]
                            shadow-[0_0_14px_rgba(198,161,91,0.9)]
                          "
                        />
                      </motion.div>
                    </div>

                    {/* =================================================
                        STEP CONTENT
                    ================================================= */}

                    <div className="mt-7">
                      <span
                        className="
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.22em]
                          text-[#4EA8B0]
                        "
                      >
                        Step {step.number}
                      </span>

                      <h4
                        className="
                          mx-auto
                          mt-2
                          max-w-[220px]
                          text-[16px]
                          font-semibold
                          leading-[1.35]
                          tracking-[-0.02em]
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-[#C6A15B]
                          sm:text-[17px]
                        "
                      >
                        {step.title}
                      </h4>

                      <motion.div
                        initial={{
                          width: 18,
                        }}
                        whileInView={{
                          width: 40,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.16,
                        }}
                        className="
                          mx-auto
                          mt-4
                          h-[2px]
                          rounded-full
                          bg-gradient-to-r
                          from-[#087F8C]
                          to-[#C6A15B]
                        "
                      />
                    </div>

                    {/* =================================================
                        MOBILE CONNECTOR
                    ================================================= */}

                    {index < journeySteps.length - 1 && (
                      <motion.div
                        initial={{
                          height: 0,
                        }}
                        whileInView={{
                          height: 46,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.16,
                        }}
                        className="
                          absolute
                          bottom-[-50px]
                          left-1/2
                          w-[2px]
                          -translate-x-1/2
                          bg-gradient-to-b
                          from-[#087F8C]
                          to-[#C6A15B]
                          shadow-[0_0_10px_rgba(8,127,140,0.55)]
                          lg:hidden
                        "
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* =================================================
                EXPLANATION
            ================================================= */}

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
                duration: 0.7,
                delay: 0.75,
              }}
              className="
                relative
                z-20
                mt-12
                border-t
                border-white/[0.10]
                pt-6
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-5
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "
              >
                <p
                  className="
                    max-w-[1000px]
                    text-[12px]
                    leading-6
                    text-white/60
                    sm:text-[13px]
                  "
                >
                  Consulting and Project Execution are two cross-cutting
                  IBS capabilities. They should not be treated as isolated
                  service lines; instead, they should connect the full IBS
                  offering from strategic advice and analysis through
                  implementation, delivery and capability transfer.
                </p>

                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      h-[6px]
                      w-[6px]
                      rounded-full
                      bg-[#C6A15B]
                      shadow-[0_0_14px_rgba(198,161,91,0.8)]
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-white/60
                    "
                  >
                    Strategy / Execution / Capability
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* =====================================================
            DECORATIVE GEARS
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[100px]
            right-[-45px]
            hidden
            lg:block
          "
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Cog
              size={170}
              strokeWidth={0.6}
              className="text-[#087F8C]/15"
            />
          </motion.div>
        </div>

        <div
          className="
            pointer-events-none
            absolute
            bottom-[175px]
            right-[70px]
            hidden
            xl:block
          "
        >
          <motion.div
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Cog
              size={90}
              strokeWidth={0.7}
              className="text-[#C6A15B]/15"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}