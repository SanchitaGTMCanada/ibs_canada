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
  Building2
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
        py-10
        sm:py-10
        lg:py-10
        xl:py-10
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
    amount: 0.25,
  }}
>
  <h2
    className="
      max-w-[900px]
      text-[38px]
      font-extrabold
      leading-[1.08]
      tracking-[-0.04em]
      text-[#0B2438]
      sm:text-[46px]
      lg:text-[54px]
      xl:text-[60px]
    "
  >
    <span className="block whitespace-nowrap">
      What We Help Clients
    </span>
    <span className="block whitespace-nowrap">
      Achieve
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
                src="/home/home-2.jpg"
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
                min-h-[45px]
                w-[28%]
                overflow-hidden
                rounded-[30px]
                border-[8px]
                border-white
                shadow-[0_45px_80px_rgba(11,31,58,0.18)]
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
    min-h-[110px]
    flex-col
    justify-between
    overflow-hidden
    p-3
    sm:p-4
  "
>
  <span
    className="
      text-[10px]
      font-semibold
      uppercase
      tracking-[0.2em]
      text-[#087F8C]
    "
  >
    IBS
  </span>

  <motion.div
    className="flex items-center justify-center"
    animate={{
      y: [0, -5, 0],
      rotate: [0, 2, -2, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Building2
      size={52}
      strokeWidth={1.5}
      className="
        text-[#087F8C]
        drop-shadow-[0_5px_12px_rgba(8,127,140,0.20)]
      "
    />
  </motion.div>
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
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#087F8C]
                    sm:text-[12px]
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
    max-w-[900px]
    text-[38px]
    font-extrabold
    leading-[1.08]
    tracking-[-0.04em]
    text-[#0B2438]
    sm:text-[46px]
    lg:text-[54px]
    xl:text-[60px]
  "
>
  <span className="block whitespace-nowrap">
    From Strategy
  </span>

  <span className="block whitespace-nowrap">
    to Delivery
  </span>
</motion.h3>

            </div>

            {/* =================================================
                RIGHT DESCRIPTION
            ================================================= */}

           <motion.div
  initial={{ opacity: 0, x: 25 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative z-10 lg:pb-0"
>
  <div className="absolute -left-4 top-0 hidden h-full w-[2px] rounded-full bg-gradient-to-b from-[#087F8C] via-[#C6A15B] to-transparent lg:block" />

  <div className="flex items-start gap-2">
    <span className="mt-[-2px] bg-gradient-to-b from-[#C6A15B] to-[#087F8C] bg-clip-text font-serif text-[24px] leading-none text-transparent">
      “
    </span>

    <p className="max-w-[460px] text-[12px] font-medium leading-5 text-[#68737D] sm:text-[13px]">
      IBS supports clients from understanding challenges to developing
      strategies, executing priorities, and building lasting organizational
      capability.
    </p>
  </div>

  <div className="mt-3 flex items-center gap-2 pl-6">
    <span className="h-1 w-1 rounded-full bg-[#087F8C]" />

    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#202832]/40">
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
    relative mt-8 overflow-hidden rounded-[28px]
    border border-white/[0.12]
    bg-gradient-to-br from-[#071A30] via-[#0B3150] to-[#087F8C]
    px-5 py-7 sm:px-7 sm:py-8 lg:px-10 lg:py-9
    shadow-[0_25px_70px_rgba(11,31,58,0.30)]
  "
>
  {/* BACKGROUND GLOW */}
  <div
    className="pointer-events-none absolute -right-20 -top-24 h-[280px] w-[280px] rounded-full bg-[#087F8C]/20 blur-[80px]"
  />

  <div
    className="pointer-events-none absolute -bottom-24 -left-20 h-[280px] w-[280px] rounded-full bg-[#C6A15B]/10 blur-[80px]"
  />

  {/* LARGE BACKGROUND CIRCLES */}
  <motion.div
    animate={{
      x: [0, 12, 0],
      y: [0, -8, 0],
      scale: [1, 1.03, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -left-[130px] top-[30px] h-[300px] w-[300px] rounded-full border border-[#087F8C]/[0.11] bg-[#087F8C]/[0.025]"
  />

  <motion.div
    animate={{
      x: [0, -12, 0],
      y: [0, 10, 0],
      scale: [1, 1.04, 1],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -right-[120px] -top-5 h-[280px] w-[280px] rounded-full border border-[#C6A15B]/[0.10] bg-[#C6A15B]/[0.025]"
  />

  {/* CENTER CIRCLES */}
  <motion.div
    animate={{
      scale: [1, 1.03, 1],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.055]"
  />

  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#087F8C]/[0.07]" />

  {/* FLOATING CIRCLES */}
  <motion.div
    animate={{
      y: [0, -10, 0],
      opacity: [0.25, 0.5, 0.25],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute right-[27%] top-[30px] h-[50px] w-[50px] rounded-full border border-[#087F8C]/[0.13] bg-[#087F8C]/[0.03]"
  />

  <motion.div
    animate={{
      y: [0, 8, 0],
      x: [0, -6, 0],
      opacity: [0.25, 0.45, 0.25],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute bottom-[25px] left-[22%] h-[42px] w-[42px] rounded-full border border-[#C6A15B]/[0.13] bg-[#C6A15B]/[0.03]"
  />

  <div className="pointer-events-none absolute bottom-[15%] right-[12%] h-[5px] w-[5px] rounded-full bg-[#C6A15B]/50 shadow-[0_0_12px_rgba(198,161,91,0.6)]" />

  {/* INNER BORDER */}
  <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/[0.06]" />

  {/* CARD HEADER */}
  <div className="relative z-20 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <span className="h-[5px] w-[5px] rounded-full bg-[#C6A15B] shadow-[0_0_12px_rgba(198,161,91,0.8)]" />

      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 sm:text-[12px]">
        Our Approach
      </span>

      <span className="hidden h-px w-8 bg-white/10 sm:block" />
    </div>
  </div>

  {/* JOURNEY FLOW */}
  <div className="relative z-10 mt-8">
    {/* DESKTOP CONNECTING LINE */}
    <div className="pointer-events-none absolute left-[11%] right-[11%] top-[51px] hidden lg:block">
      <div className="absolute left-0 right-0 top-1/2 h-[8px] -translate-y-1/2 rounded-full bg-[#087F8C]/20 blur-[8px]" />

      <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-white/10" />

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 2,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-0 right-0 top-1/2 h-[3px] origin-left -translate-y-1/2 rounded-full bg-gradient-to-r from-[#087F8C] via-[#C6A15B] to-[#087F8C]"
      />

      <motion.span
        initial={{
          left: "0%",
          opacity: 0,
        }}
        whileInView={{
          left: "100%",
          opacity: [0, 1, 1, 0],
        }}
        viewport={{ once: true }}
        transition={{
          duration: 2.2,
          delay: 0.55,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_rgba(78,168,176,1)]"
      />
    </div>

    {/* STEPS */}
    <div className="grid gap-8 lg:grid-cols-4 lg:gap-0">
      {journeySteps.map((step, index) => (
        <motion.div
          key={step.number}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative text-center"
        >
          {/* STEP CIRCLE */}
          <div className="relative mx-auto w-fit">
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.08, 0.2, 0.08],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                delay: index * 0.4,
                ease: "easeInOut",
              }}
              className={`absolute inset-[-12px] rounded-full bg-gradient-to-br ${step.gradient} blur-[14px]`}
            />

            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`relative flex h-[100px] w-[100px] items-center justify-center rounded-full border border-white/25 bg-gradient-to-br ${step.gradient} shadow-[0_18px_40px_rgba(0,0,0,0.30)] transition-all duration-500 sm:h-[112px] sm:w-[112px]`}
            >
              {/* GLASS RING */}
              <div className="absolute inset-[6px] rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-sm" />

              {/* INNER CIRCLE */}
              <div className="absolute inset-[14px] rounded-full border border-white/[0.07]" />

              {/* NUMBER */}
              <span className="relative z-10 text-[25px] font-bold tracking-[-0.06em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:text-[28px]">
                {step.number}
              </span>

              {/* GLOWING INDICATOR */}
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.65, 1, 0.65],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="absolute bottom-[17px] h-[4px] w-[4px] rounded-full bg-[#C6A15B] shadow-[0_0_12px_rgba(198,161,91,0.9)]"
              />
            </motion.div>
          </div>

          {/* STEP CONTENT */}
          <div className="mt-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4EA8B0]">
              Step {step.number}
            </span>

            <h4 className="mx-auto mt-1 max-w-[200px] text-[14px] font-semibold leading-[1.35] tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#C6A15B] sm:text-[15px]">
              {step.title}
            </h4>

            <motion.div
              initial={{ width: 16 }}
              whileInView={{ width: 30 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.12,
              }}
              className="mx-auto mt-3 h-[2px] rounded-full bg-gradient-to-r from-[#087F8C] to-[#C6A15B]"
            />
          </div>

          {/* MOBILE CONNECTOR */}
          {index < journeySteps.length - 1 && (
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 30 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.4 + index * 0.12,
              }}
              className="absolute bottom-[-34px] left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#087F8C] to-[#C6A15B] shadow-[0_0_8px_rgba(8,127,140,0.55)] lg:hidden"
            />
          )}
        </motion.div>
      ))}
    </div>
  </div>

  {/* EXPLANATION */}
  <motion.div
    initial={{
      opacity: 0,
      y: 10,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: 0.6,
    }}
    className="relative z-20 mt-8 border-t border-white/[0.10] pt-4"
  >
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <p className="max-w-[750px] text-[13px] leading-5 text-white/60 sm:text-[14px]">
        Consulting and Project Execution are two cross-cutting IBS
        capabilities. They connect the full IBS offering, from strategic
        advice and analysis through implementation, delivery, and capability
        transfer.
      </p>

      <div className="flex shrink-0 items-center gap-2.5">
        <span className="h-[5px] w-[5px] rounded-full bg-[#C6A15B] shadow-[0_0_12px_rgba(198,161,91,0.8)]" />

        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60 sm:text-[11px]">
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