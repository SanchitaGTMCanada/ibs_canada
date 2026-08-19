"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Plus,
  Settings2,
  TrendingUp,
  BriefcaseBusiness,
  Target,
  Mountain,
  Cog,
  Flag,
} from "lucide-react";

import { motion } from "framer-motion";

const capabilities = [
  {
    icon: Settings2,
    title: "Operations",
    text: "Smarter processes and stronger day-to-day performance.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    text: "Strategies designed to create sustainable revenue opportunities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Management",
    text: "Strategic planning, financial and organizational support.",
  },
];

const revealUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutSection() {
  return (
   <section
  id="about"
  className="
    relative
    overflow-hidden
    bg-white
    py-14
    sm:py-16
    lg:py-20
    xl:py-24
  "
>
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[8%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#087F8C]/[0.035]
          blur-3xl
        "
        animate={{
          x: [0, -20, 0],
          y: [0, 18, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          bottom-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#C6A15B]/[0.035]
          blur-3xl
        "
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          MAIN CONTENT WRAPPER
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
            LEFT DECORATION
            Positioned behind label + image
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.1,
          }}
          className="
            pointer-events-none
            absolute
            left-[-145px]
            top-[200px]
            hidden
            lg:block
          "
        >
          <div
            className="
              relative
              h-[430px]
              w-[430px]
            "
          >
            {/* Outer ring */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                border
                border-[#C6A15B]/20
              "
            />

            {/* Dashed ring */}

            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-[22px]
                rounded-full
                border
                border-dashed
                border-[#087F8C]/20
              "
            />

            {/* Inner ring */}

            <div
              className="
                absolute
                inset-[72px]
                rounded-full
                border
                border-[#087F8C]/15
              "
            />

            {/* Target */}

            <Target
              size={145}
              strokeWidth={0.65}
              className="
                absolute
                left-[142px]
                top-[142px]
                text-[#C6A15B]/20
              "
            />

            {/* Orbit dots */}

            <motion.span
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-[80px]
                top-[72px]
                h-[10px]
                w-[10px]
                rounded-full
                bg-[#087F8C]/55
              "
            />

            <span
              className="
                absolute
                bottom-[72px]
                right-[72px]
                h-[9px]
                w-[9px]
                rounded-full
                bg-[#C6A15B]/60
              "
            />
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT TOP DECORATION
            Kept away from heading
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
          }}
          className="
            pointer-events-none
            absolute
            right-[-10px]
            top-[155px]
            hidden
            xl:block
          "
        >
          <div
            className="
              relative
              h-[260px]
              w-[300px]
            "
          >
            {/* Mountain */}

            <Mountain
              size={190}
              strokeWidth={0.7}
              className="
                absolute
                bottom-[5px]
                right-[10px]
                text-[#087F8C]/15
              "
            />

            {/* Flag */}

            <Flag
              size={58}
              strokeWidth={0.8}
              className="
                absolute
                right-[112px]
                top-[5px]
                text-[#C6A15B]/40
              "
            />

            {/* Flag pole */}

            <div
              className="
                absolute
                right-[116px]
                top-[24px]
                h-[100px]
                w-px
                bg-[#C6A15B]/30
              "
            />

            {/* Decorative orbit */}

            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                right-[-20px]
                top-[75px]
                h-[100px]
                w-[100px]
                rounded-full
                border
                border-dashed
                border-[#087F8C]/15
              "
            />

            <span
              className="
                absolute
                right-[12px]
                top-[70px]
                h-[8px]
                w-[8px]
                rounded-full
                bg-[#C6A15B]/55
              "
            />
          </div>
        </motion.div>

        {/* =====================================================
            TOP RIGHT DOT GRID
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-[18%]
            top-[145px]
            hidden
            grid
            grid-cols-6
            gap-[11px]
            opacity-40
            lg:grid
          "
        >
          {Array.from({ length: 30 }).map((_, index) => (
            <span
              key={index}
              className="
                h-[4px]
                w-[4px]
                rounded-full
                bg-[#087F8C]/45
              "
            />
          ))}
        </div>

        {/* =====================================================
            GOLD CORNER SQUARE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-[15px]
            top-[170px]
            hidden
            lg:block
          "
        >
          <div
            className="
              relative
              h-[48px]
              w-[48px]
              border
              border-[#C6A15B]/25
            "
          >
            <span
              className="
                absolute
                left-1/2
                top-[-12px]
                h-[12px]
                w-px
                bg-[#C6A15B]/35
              "
            />

            <span
              className="
                absolute
                left-1/2
                top-[-18px]
                h-[8px]
                w-[8px]
                -translate-x-1/2
                rounded-full
                bg-[#C6A15B]/55
              "
            />

            <span
              className="
                absolute
                left-1/2
                top-0
                h-full
                w-px
                bg-[#C6A15B]/20
              "
            />
          </div>
        </div>

        {/* =====================================================
            TOP INTRO
        ===================================================== */}

        <div
          className="
            relative
            z-20
            grid
            items-end
            gap-8
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-16
          "
        >
          {/* Label */}

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-[9px]
                  w-[9px]
                  rounded-full
                  bg-[#C6A15B]
                "
              />

              <span
                className="
                  text-[16px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#087F8C]
                "
              >
                About our company
              </span>
            </div>

            <div
              className="
                mt-7
                hidden
                h-px
                w-[150px]
                bg-[#DCE2E7]
                lg:block
              "
            />
          </motion.div>

          {/* Heading */}

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
                text-[42px]
                font-bold
                leading-[1.02]
                tracking-[-0.045em]
                text-[#202832]
                sm:text-[54px]
                md:text-[64px]
                lg:text-[72px]
                xl:text-[82px]
              "
            >
              Business solutions
              <br />

              <span className="text-[#087F8C]">
                with a purpose.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-20
            mt-16
            lg:mt-20
          "
        >
          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-20
            "
          >
            {/* =================================================
                IMAGE AREA
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -70,
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
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                min-h-[470px]
                sm:min-h-[570px]
                lg:min-h-[650px]
              "
            >
              {/* Main image */}

              <motion.div
                initial={{
                  scale: 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  left-0
                  top-0
                  h-[82%]
                  w-[76%]
                  overflow-hidden
                  rounded-[36px]
                  bg-[#F6F4EF]
                  shadow-[0_30px_80px_rgba(11,31,58,0.14)]
                  sm:w-[70%]
                  lg:w-[72%]
                "
              >
                <Image
                  src="/images/about/ibs-about.jpg"
                  alt="Innovative Business Solutions"
                  fill
                  priority
                  className="
                    object-cover
                    transition-transform
                    duration-[1400ms]
                    hover:scale-105
                  "
                  sizes="
                    (max-width: 1024px) 85vw,
                    60vw
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
              </motion.div>

              {/* =================================================
                  APPROACH CARD
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
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
                  delay: 0.25,
                }}
                className="
                  absolute
                  bottom-0
                  right-[2%]
                  h-[46%]
                  w-[48%]
                  overflow-hidden
                  rounded-[30px]
                  border-[8px]
                  border-white
                  bg-[#087F8C]
                  shadow-[0_25px_60px_rgba(11,31,58,0.15)]
                  sm:right-[4%]
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#087F8C]
                    via-[#087F8C]
                    to-[#0B1F3A]
                  "
                />

                <div
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-36
                    w-36
                    rounded-full
                    border
                    border-white/20
                  "
                />

                <div
                  className="
                    absolute
                    bottom-[-35px]
                    left-[-25px]
                    h-28
                    w-28
                    rounded-full
                    border
                    border-[#C6A15B]/50
                  "
                />

                <div
                  className="
                    relative
                    flex
                    h-full
                    flex-col
                    justify-between
                    p-6
                    sm:p-8
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#C6A15B]
                    "
                  >
                    Our approach
                  </span>

                  <p
                    className="
                      max-w-[240px]
                      text-[20px]
                      font-semibold
                      leading-7
                      text-white
                      sm:text-[24px]
                    "
                  >
                    Practical thinking.
                    <br />
                    Professional expertise.
                    <br />
                    Meaningful results.
                  </p>
                </div>
              </motion.div>

              {/* =================================================
                  IBS BADGE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.6,
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
                  delay: 0.5,
                }}
                animate={{
                  y: [0, -6, 0],
                }}
                className="
                  absolute
                  right-[18%]
                  top-[-35px]
                  flex
                  h-[105px]
                  w-[105px]
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
                      text-[25px]
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

              {/* Gold image accent */}

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
                  delay: 0.4,
                }}
                className="
                  absolute
                  bottom-[5%]
                  left-[4%]
                  h-[3px]
                  rounded-full
                  bg-[#C6A15B]
                "
              />
            </motion.div>

            {/* =================================================
                RIGHT CONTENT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
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
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
              "
            >
              {/* Quote */}

              <div
                className="
                  mb-5
                  text-[110px]
                  font-bold
                  leading-[0.35]
                  text-[#C6A15B]/30
                  sm:text-[125px]
                "
              >
                “
              </div>

              {/* Statement */}

              <p
                className="
                  max-w-[580px]
                  text-[23px]
                  font-medium
                  leading-[1.45]
                  tracking-[-0.02em]
                  text-[#202832]
                  sm:text-[27px]
                "
              >
                We provide professional business
                solutions designed around the
                unique needs of organizations and
                entrepreneurs.
              </p>

              {/* Description */}

              <p
                className="
                  mt-7
                  max-w-[580px]
                  text-[16px]
                  leading-[1.75]
                  text-[#68737D]
                "
              >
                Innovative Business Solutions Ltd.
                brings together experienced
                professionals to provide practical,
                culturally tailored solutions for
                Canadian and international Indigenous
                organizations and entrepreneurs.
              </p>

              {/* Highlight */}

              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-4
                  rounded-[18px]
                  bg-[#F6F4EF]
                  px-5
                  py-4
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#087F8C]
                    text-white
                  "
                >
                  <Plus
                    size={18}
                    strokeWidth={2}
                  />
                </span>

                <p
                  className="
                    text-[14px]
                    font-medium
                    leading-5
                    text-[#202832]
                  "
                >
                  One-stop professional service
                  support for organizations and
                  entrepreneurs.
                </p>
              </div>

              {/* CTA */}

              <Link
                href="/about"
                className="
                  group
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#0B1F3A]
                  px-7
                  py-4
                  text-[15px]
                  font-semibold
                  !text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#087F8C]
                  hover:shadow-[0_15px_35px_rgba(8,127,140,0.2)]
                "
              >
                <span className="!text-white">
                  Discover IBS
                </span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#C6A15B]
                    text-[#0B1F3A]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            CAPABILITIES
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-20
            lg:mt-28
          "
        >
          {/* Section heading */}

          <div
            className="
              mb-10
              flex
              items-end
              justify-between
              gap-8
            "
          >
            <div>
              <p
                className="
                  text-[16px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#087F8C]
                "
              >
                What we do
              </p>

              <h3
                className="
                  mt-3
                  text-[30px]
                  font-semibold
                  tracking-[-0.035em]
                  text-[#202832]
                  sm:text-[36px]
                "
              >
                Built around your needs.
              </h3>
            </div>

            <div
              className="
                hidden
                h-px
                w-[180px]
                bg-gradient-to-r
                from-[#C6A15B]
                to-transparent
                md:block
              "
            />
          </div>

          {/* Cards */}

          <div
            className="
              grid
              gap-5
              md:grid-cols-3
            "
          >
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -10,
                }}
                className={`
                  group
                  relative
                  min-h-[390px]
                  overflow-hidden
                  rounded-[28px]
                  border
                  p-7
                  transition-all
                  duration-700
                  lg:p-8

                  ${
                    index === 0
                      ? `
                        border-[#087F8C]/35
                        bg-gradient-to-br
                        from-[#087F8C]
                        via-[#096F78]
                        to-[#07545B]
                      `
                      : index === 1
                      ? `
                        border-[#4A789C]/35
                        bg-gradient-to-br
                        from-[#527F9F]
                        via-[#416B89]
                        to-[#304F68]
                      `
                      : `
                        border-[#C6A15B]/40
                        bg-gradient-to-br
                        from-[#D0A960]
                        via-[#AD8748]
                        to-[#80612F]
                      `
                  }

                  shadow-[0_18px_45px_rgba(11,31,58,0.12)]
                  hover:shadow-[0_30px_70px_rgba(11,31,58,0.22)]
                `}
              >
                {/* Metallic surface */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/[0.20]
                    via-transparent
                    to-black/[0.14]
                  "
                />

                {/* Metallic texture */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-20
                    mix-blend-overlay
                    [background-image:repeating-linear-gradient(115deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_5px)]
                  "
                />

                {/* Hover sheen */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-[120%]
                    top-[-30%]
                    h-[170%]
                    w-[55%]
                    rotate-[24deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.28]
                    to-transparent
                    blur-[8px]
                    transition-all
                    duration-[1200ms]
                    group-hover:left-[135%]
                  "
                />

                {/* Top edge */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-8
                    right-8
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/65
                    to-transparent
                  "
                />

                {/* Background grid */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-20px]
                    top-[-20px]
                    h-[190px]
                    w-[190px]
                    opacity-20
                    [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)]
                    [background-size:22px_22px]
                    [mask-image:radial-gradient(circle,black_20%,transparent_70%)]
                  "
                />

                {/* Large ghost icon */}

                <item.icon
                  size={190}
                  strokeWidth={0.7}
                  className={`
                    pointer-events-none
                    absolute
                    right-[-25px]
                    top-[-20px]
                    opacity-[0.08]
                    transition-all
                    duration-700
                    group-hover:scale-110
                    group-hover:rotate-6
                    group-hover:opacity-[0.14]

                    ${
                      index === 0
                        ? "text-[#D9FFFF]"
                        : index === 1
                        ? "text-[#EAF6FF]"
                        : "text-[#FFF0C2]"
                    }
                  `}
                />

                {/* Corner glow */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    bottom-[-100px]
                    left-1/2
                    h-[180px]
                    w-[180px]
                    -translate-x-1/2
                    rounded-full
                    blur-[70px]
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-40

                    ${
                      index === 0
                        ? "bg-[#4DE0E6]"
                        : index === 1
                        ? "bg-[#A7C9E2]"
                        : "bg-[#FFE09A]"
                    }
                  `}
                />

                {/* Content */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                  "
                >
                  {/* Top */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className={`
                          h-[7px]
                          w-[7px]
                          rounded-full

                          ${
                            index === 0
                              ? "bg-[#A5F2F4]"
                              : index === 1
                              ? "bg-[#D9EAF5]"
                              : "bg-[#FFE8A8]"
                          }
                        `}
                      />

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-white/75
                        "
                      >
                        Capability
                      </span>
                    </div>

                    <motion.div
                      whileHover={{
                        rotate: 45,
                        scale: 1.08,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 18,
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/25
                        bg-white/[0.08]
                        text-white
                        backdrop-blur-md
                        transition-all
                        duration-500
                        group-hover:border-white/70
                        group-hover:bg-white
                        group-hover:text-[#202832]
                      "
                    >
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.7}
                      />
                    </motion.div>
                  </div>

                  {/* Icon badge */}

                  <div className="mt-12">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: -4,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 16,
                      }}
                      className={`
                        relative
                        flex
                        h-[68px]
                        w-[68px]
                        items-center
                        justify-center
                        rounded-[20px]
                        border
                        bg-white/[0.10]
                        shadow-[inset_0_1px_2px_rgba(255,255,255,0.35),0_12px_28px_rgba(0,0,0,0.16)]
                        backdrop-blur-md

                        ${
                          index === 0
                            ? "border-[#A5F2F4]/60"
                            : index === 1
                            ? "border-[#D9EAF5]/60"
                            : "border-[#FFE8A8]/65"
                        }
                      `}
                    >
                      <span
                        className={`
                          pointer-events-none
                          absolute
                          inset-0
                          rounded-[20px]
                          opacity-0
                          blur-xl
                          transition-opacity
                          duration-500
                          group-hover:opacity-60

                          ${
                            index === 0
                              ? "bg-[#7BE3E8]"
                              : index === 1
                              ? "bg-[#B8D6EA]"
                              : "bg-[#FFE3A0]"
                          }
                        `}
                      />

                      <item.icon
                        size={30}
                        strokeWidth={1.7}
                        className={`
                          relative
                          z-10

                          ${
                            index === 0
                              ? "text-[#B9F8FA]"
                              : index === 1
                              ? "text-[#E0EFF8]"
                              : "text-[#FFEAB0]"
                          }
                        `}
                      />

                      <span
                        className="
                          pointer-events-none
                          absolute
                          left-2
                          right-2
                          top-1
                          h-px
                          rounded-full
                          bg-white/50
                        "
                      />
                    </motion.div>
                  </div>

                  {/* Title */}

                  <div className="mt-7">
                    <h3
                      className="
                        text-[28px]
                        font-semibold
                        leading-[1.1]
                        tracking-[-0.035em]
                        text-white
                        transition-all
                        duration-500
                        group-hover:translate-x-1
                        group-hover:text-[#FFF3CF]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-[340px]
                        text-[15px]
                        leading-6
                        text-white/75
                      "
                    >
                      {item.text}
                    </p>
                  </div>

                  {/* Bottom */}

                  <div
                    className="
                      mt-auto
                      pt-10
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        border-t
                        border-white/15
                        pt-5
                      "
                    >
                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-white/50
                        "
                      >
                        IBS Canada
                      </span>

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-white/70
                          transition-all
                          duration-500
                          group-hover:text-white
                        "
                      >
                        Explore
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}

                <motion.div
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    transition-all
                    duration-700
                    group-hover:w-full

                    ${
                      index === 0
                        ? "bg-[#A5F2F4]"
                        : index === 1
                        ? "bg-[#D9EAF5]"
                        : "bg-[#FFE8A8]"
                    }
                  `}
                />

                {/* Hover border */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[28px]
                    border
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100

                    ${
                      index === 0
                        ? "border-[#A5F2F4]/50"
                        : index === 1
                        ? "border-[#D9EAF5]/50"
                        : "border-[#FFE8A8]/55"
                    }
                  `}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            LOWER RIGHT DECORATION
            Gears deliberately placed away from text
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[420px]
            right-[-40px]
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
              size={180}
              strokeWidth={0.65}
              className="
                text-[#087F8C]/10
              "
            />
          </motion.div>
        </div>

        <div
          className="
            pointer-events-none
            absolute
            bottom-[510px]
            right-[90px]
            hidden
            xl:block
          "
        >
          <motion.div
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 23,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Cog
              size={105}
              strokeWidth={0.7}
              className="
                text-[#C6A15B]/12
              "
            />
          </motion.div>
        </div>

        {/* =====================================================
            LOWER RIGHT DOTS
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[400px]
            right-[6%]
            hidden
            grid
            grid-cols-5
            gap-3
            opacity-30
            xl:grid
          "
        >
          {Array.from({ length: 25 }).map((_, index) => (
            <span
              key={index}
              className="
                h-[4px]
                w-[4px]
                rounded-full
                bg-[#087F8C]/40
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}