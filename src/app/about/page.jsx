"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Cpu,
  Globe2,
  Handshake,
  Lightbulb,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Zap,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/layout/Header";

/* =========================================================
   EXTERNAL IMAGES
   Normal <img> intentionally used.
   No next.config.js changes required.
========================================================= */

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=90";

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90";

const IMPACT_IMAGE =
  "https://images.unsplash.com/photo-1524751638371-6f0f9f6f7f8c?auto=format&fit=crop&w=2000&q=90";

/* =========================================================
   COMMON ANIMATION
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#F6F4EF] text-[#202832]">

      {/* =====================================================
          01 — HERO
      ===================================================== */}
<Header/>
      <section
        className="
          relative
          min-h-[900px]
          overflow-hidden
          bg-[#0B1F3A]
          pt-[155px]
          sm:pt-[165px]
          lg:min-h-[930px]
          lg:pt-[180px]
        "
      >
        

        {/* =================================================
            BACKGROUND LIGHT
        ================================================= */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -left-[250px]
            -top-[180px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#087F8C]/20
            blur-[140px]
          "
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 40, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -right-[250px]
            top-[10%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#C6A15B]/10
            blur-[130px]
          "
        />

        {/* Grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:75px_75px]
          "
        />

        {/* Giant IBS */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          className="
            pointer-events-none
            absolute
            bottom-[-80px]
            left-[-20px]
            select-none
            text-[190px]
            font-black
            leading-none
            tracking-[-0.1em]
            text-white/[0.025]
            sm:text-[270px]
            lg:text-[400px]
          "
        >
          IBS
        </motion.div>

        {/* Vertical accent */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-[11%]
            top-0
            hidden
            w-px
            bg-white/[0.06]
            lg:block
          "
        />

        {/* =================================================
            FLOATING ICONS
        ================================================= */}

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[5%]
            top-[35%]
            hidden
            lg:block
          "
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-[#C6A15B]/20
              bg-white/[0.03]
              text-[#C6A15B]/50
              backdrop-blur-md
            "
          >
            <Lightbulb size={25} />
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 18, 0],
            rotate: [0, -6, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            right-[4%]
            top-[58%]
            hidden
            lg:block
          "
        >
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[#087F8C]/25
              bg-white/[0.03]
              text-[#BCEBE8]/50
              backdrop-blur-md
            "
          >
            <Network size={28} />
          </div>
        </motion.div>

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-[1400px]
            gap-14
            px-6
            pb-28
            sm:px-8
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-center
            lg:gap-16
            lg:px-10
            xl:px-14
          "
        >

          {/* LEFT */}

          <div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeLeft}
              transition={{
                duration: 0.7,
              }}
              className="flex items-center gap-4"
            >

              <motion.span
                initial={{
                  width: 0,
                }}
                animate={{
                  width: 48,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.7,
                }}
                className="h-[2px] bg-[#C6A15B]"
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#BCEBE8]
                "
              >
                About IBS Canada
              </span>

            </motion.div>


            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeLeft}
              transition={{
                delay: 0.12,
                duration: 0.9,
              }}
              className="
                mt-9
                max-w-[720px]
                text-[58px]
                font-bold
                leading-[0.9]
                tracking-[-0.07em]
                text-white
                sm:text-[78px]
                lg:text-[92px]
                xl:text-[112px]
              "
            >
              We build

              <motion.span
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                }}
                className="block text-[#BCEBE8]"
              >
                with purpose.
              </motion.span>

            </motion.h1>


            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 75,
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="
                mt-9
                h-[3px]
                rounded-full
                bg-gradient-to-r
                from-[#C6A15B]
                to-[#087F8C]
              "
            />


            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeLeft}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
              className="
                mt-8
                max-w-[560px]
                text-[16px]
                leading-8
                text-white/55
                sm:text-[18px]
              "
            >
              IBS Canada brings business, technology,
              education, engineering and community
              expertise together to transform ideas into
              practical, meaningful outcomes.
            </motion.p>


            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="mt-9 flex flex-wrap gap-4"
            >

              <Link
                href="#story"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#C6A15B]
                  px-6
                  py-3.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#0B1F3A]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#D7C17A]
                "
              >
                Discover IBS

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B1F3A]
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-y-1
                  "
                >
                  <ArrowDown size={13} />
                </span>

              </Link>


              <Link
                href="/services"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  px-6
                  py-3.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#BCEBE8]
                  hover:bg-white/5
                "
              >
                Explore Services

                <ArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </Link>

            </motion.div>

          </div>


          {/* =================================================
              HERO IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              x: 60,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >

            {/* Animated frame */}

            <motion.div
              animate={{
                rotate: [0, 1.5, 0, -1.5, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-5
                -left-5
                h-full
                w-full
                rounded-[34px]
                border
                border-[#C6A15B]/25
              "
            />

            <div
              className="
                relative
                aspect-[1.05/1]
                overflow-hidden
                rounded-[34px]
                border
                border-white/15
                bg-[#123A5A]
                shadow-[0_40px_100px_rgba(0,0,0,0.3)]
              "
            >

              <motion.img
                initial={{
                  scale: 1.12,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 1.8,
                  ease: "easeOut",
                }}
                src={HERO_IMAGE}
                alt="Business professionals collaborating"
                loading="eager"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1600ms]
                  hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-tr
                  from-[#0B1F3A]/75
                  via-transparent
                  to-[#087F8C]/10
                "
              />

              {/* Corner icon */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-6
                  top-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-[#0B1F3A]/50
                  text-[#C6A15B]
                  backdrop-blur-md
                "
              >
                <Sparkles size={19} />
              </motion.div>


              {/* Image caption */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  flex
                  items-end
                  justify-between
                  gap-5
                  rounded-[20px]
                  border
                  border-white/15
                  bg-[#0B1F3A]/65
                  p-5
                  backdrop-blur-xl
                "
              >

                <div>

                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#C6A15B]
                    "
                  >
                    Our philosophy
                  </p>

                  <p className="mt-1 text-[14px] text-white">
                    Think beyond the obvious.
                  </p>

                </div>

                <span
                  className="
                    text-[40px]
                    font-bold
                    leading-none
                    text-white/10
                  "
                >
                  01
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          02 — MANIFESTO
      ===================================================== */}

      <section
        id="story"
        className="
          relative
          overflow-hidden
          bg-[#F6F4EF]
          px-6
          py-28
          sm:px-8
          lg:px-10
          lg:py-36
          xl:px-14
        "
      >

        {/* Decorative large circle */}

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
            duration: 1,
          }}
          className="
            pointer-events-none
            absolute
            -right-[180px]
            top-[10%]
            h-[450px]
            w-[450px]
            rounded-full
            border
            border-[#087F8C]/10
          "
        />

        <div className="mx-auto max-w-[1280px]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={reveal}
            transition={{
              duration: 0.8,
            }}
            className="
              grid
              gap-14
              lg:grid-cols-[0.35fr_1.65fr]
              lg:gap-20
            "
          >

            <div>

              <motion.span
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
                }}
                className="
                  block
                  text-[90px]
                  font-bold
                  leading-none
                  tracking-[-0.08em]
                  text-[#087F8C]/10
                  sm:text-[120px]
                "
              >
                01
              </motion.span>

              <div className="mt-5 flex items-center gap-3">

                <span className="h-px w-10 bg-[#C6A15B]" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#087F8C]
                  "
                >
                  Why IBS exists
                </span>

              </div>

            </div>


            <div>

              <h2
                className="
                  max-w-[1000px]
                  text-[43px]
                  font-bold
                  leading-[1.05]
                  tracking-[-0.055em]
                  text-[#202832]
                  sm:text-[60px]
                  lg:text-[76px]
                "
              >
                Progress happens when

                <motion.span
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
                    delay: 0.25,
                    duration: 0.8,
                  }}
                  className="text-[#087F8C]"
                >
                  {" "}different ideas
                </motion.span>{" "}

                start moving together.
              </h2>


              <div className="mt-12 grid gap-8 md:grid-cols-2">

                <p
                  className="
                    text-[15px]
                    leading-8
                    text-[#68737D]
                  "
                >
                  We created IBS around a simple belief:
                  complex challenges rarely have simple,
                  isolated answers.
                </p>

                <p
                  className="
                    text-[15px]
                    leading-8
                    text-[#68737D]
                  "
                >
                  By combining different disciplines,
                  perspectives and experiences, we help
                  organizations see possibilities that may
                  otherwise remain disconnected.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          03 — CAPABILITY CONSTELLATION
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#0B1F3A]
          px-6
          py-28
          sm:px-8
          lg:px-10
          lg:py-36
          xl:px-14
        "
      >

        {/* Background grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Aurora */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[20%]
            top-[20%]
            h-[400px]
            w-[700px]
            rounded-full
            bg-[#087F8C]/10
            blur-[120px]
          "
        />


        <div className="relative z-10 mx-auto max-w-[1280px]">

          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-end
            "
          >

            <div>

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#C6A15B]
                "
              >
                02 / Our capabilities
              </span>

              <h2
                className="
                  mt-6
                  text-[45px]
                  font-bold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-white
                  sm:text-[60px]
                "
              >
                Many disciplines.

                <span className="block text-[#BCEBE8]">
                  One ecosystem.
                </span>
              </h2>

            </div>

            <p
              className="
                max-w-[520px]
                text-[15px]
                leading-8
                text-white/45
              "
            >
              IBS operates across interconnected areas of
              expertise. Each capability can stand alone,
              but the greatest value appears where they
              intersect.
            </p>

          </div>


          {/* =================================================
              CONSTELLATION
          ================================================= */}

          <div
            className="
              relative
              mt-20
              min-h-[720px]
            "
          >

            {/* Animated rings */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                hidden
                h-[550px]
                w-[550px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#087F8C]/15
                lg:block
              "
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                hidden
                h-[370px]
                w-[370px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#C6A15B]/15
                lg:block
              "
            />

            {/* =================================================
                CONNECTION LINES
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                hidden
                h-[480px]
                w-[1px]
                -translate-x-1/2
                -translate-y-1/2
                bg-gradient-to-b
                from-transparent
                via-[#087F8C]/30
                to-transparent
                lg:block
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                hidden
                h-[1px]
                w-[480px]
                -translate-x-1/2
                -translate-y-1/2
                bg-gradient-to-r
                from-transparent
                via-[#087F8C]/30
                to-transparent
                lg:block
              "
            />


            {/* =================================================
                CENTER CORE
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
                duration: 1,
              }}
              className="
                absolute
                left-1/2
                top-1/2
                z-30
                flex
                h-[155px]
                w-[155px]
                -translate-x-1/2
                -translate-y-1/2
                flex-col
                items-center
                justify-center
                rounded-full
                border
                border-[#C6A15B]/50
                bg-[#123A5A]
                text-center
                shadow-[0_0_100px_rgba(8,127,140,0.25)]
              "
            >

              {/* Pulsing ring */}

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-[-14px]
                  rounded-full
                  border
                  border-[#087F8C]/40
                "
              />

              <Sparkles
                size={30}
                className="text-[#C6A15B]"
              />

              <span
                className="
                  mt-3
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                IBS
              </span>

              <span className="mt-1 text-[14px] font-semibold text-white">
                Integrated
                <br />
                Thinking
              </span>

            </motion.div>


            {/* =================================================
                CAPABILITY NODES
            ================================================= */}

            {[
              {
                icon: BriefcaseBusiness,
                title: "Business",
                text: "Strategy & growth",
                position:
                  "left-0 top-0 lg:left-[4%] lg:top-[7%]",
              },
              {
                icon: Cpu,
                title: "Technology",
                text: "Digital transformation",
                position:
                  "right-0 top-0 lg:right-[4%] lg:top-[7%]",
              },
              {
                icon: Lightbulb,
                title: "Education",
                text: "Learning & capability",
                position:
                  "left-0 top-[240px] lg:left-[1%] lg:top-[42%]",
              },
              {
                icon: Building2,
                title: "Engineering",
                text: "Technical expertise",
                position:
                  "right-0 top-[240px] lg:right-[1%] lg:top-[42%]",
              },
              {
                icon: Globe2,
                title: "Community",
                text: "Social impact",
                position:
                  "left-[5%] bottom-[15px] lg:left-[16%] lg:bottom-[5%]",
              },
              {
                icon: Network,
                title: "Partnership",
                text: "Connected ecosystems",
                position:
                  "right-[5%] bottom-[15px] lg:right-[16%] lg:bottom-[5%]",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.15 + index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className={`
                    absolute
                    ${item.position}
                    z-20
                    w-[150px]
                    sm:w-[195px]
                  `}
                >

                  <div
                    className="
                      group
                      rounded-[22px]
                      border
                      border-white/10
                      bg-white/[0.035]
                      p-5
                      backdrop-blur-md
                      transition-all
                      duration-500
                      hover:border-[#C6A15B]/40
                      hover:bg-[#123A5A]
                      hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]
                    "
                  >

                    <motion.div
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                      }}
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#087F8C]/30
                        text-[#BCEBE8]
                        transition-colors
                        duration-300
                        group-hover:border-[#C6A15B]/50
                        group-hover:text-[#C6A15B]
                      "
                    >
                      <Icon size={20} />
                    </motion.div>

                    <h3
                      className="
                        mt-5
                        text-[15px]
                        font-semibold
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        leading-5
                        text-white/35
                      "
                    >
                      {item.text}
                    </p>

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        gap-2
                        text-[#C6A15B]/0
                        transition-all
                        duration-300
                        group-hover:text-[#C6A15B]
                      "
                    >
                      <span className="h-px w-5 bg-current" />
                      <ArrowRight size={11} />
                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          04 — JOURNEY TIMELINE
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          px-6
          py-28
          sm:px-8
          lg:px-10
          lg:py-36
          xl:px-14
        "
      >

        <div className="mx-auto max-w-[1280px]">

          <div className="max-w-[650px]">

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#087F8C]
              "
            >
              03 / The journey
            </span>

            <h2
              className="
                mt-6
                text-[46px]
                font-bold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#202832]
                sm:text-[64px]
              "
            >
              Built through

              <span className="block text-[#087F8C]">
                evolution.
              </span>

            </h2>

          </div>


          <div className="relative mt-20">

            {/* Timeline background */}

            <div
              className="
                absolute
                bottom-0
                left-[20px]
                top-0
                w-px
                bg-[#DCE2E7]
                lg:left-1/2
              "
            />

            {/* Animated progress */}

            <motion.div
              initial={{
                height: 0,
              }}
              whileInView={{
                height: "100%",
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[20px]
                top-0
                w-px
                bg-gradient-to-b
                from-[#C6A15B]
                via-[#087F8C]
                to-[#C6A15B]
                lg:left-1/2
              "
            />


            {[
              {
                year: "01",
                title: "The idea",
                icon: Lightbulb,
                text: "A vision to create an organization where different areas of expertise could work together rather than operate in isolation.",
              },
              {
                year: "02",
                title: "The expansion",
                icon: Network,
                text: "New capabilities and disciplines created a broader platform for organizations, professionals and communities.",
              },
              {
                year: "03",
                title: "The ecosystem",
                icon: Globe2,
                text: "IBS evolved toward an interconnected model where partnerships and shared knowledge became central to the way we work.",
              },
              {
                year: "04",
                title: "The future",
                icon: Zap,
                text: "We continue to explore new opportunities to connect people, ideas and technology around meaningful outcomes.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.year}
                  initial={{
                    opacity: 0,
                    y: 40,
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
                    delay: index * 0.1,
                  }}
                  className="
                    relative
                    grid
                    gap-8
                    pb-20
                    pl-14
                    last:pb-0
                    lg:grid-cols-2
                    lg:gap-24
                    lg:pl-0
                  "
                >

                  {/* Node */}

                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 180,
                    }}
                    className="
                      absolute
                      left-[8px]
                      top-0
                      z-10
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C6A15B]
                      bg-white
                      lg:left-1/2
                      lg:-translate-x-1/2
                    "
                  >
                    <span className="h-2 w-2 rounded-full bg-[#C6A15B]" />
                  </motion.div>


                  <div
                    className={`
                      ${
                        index % 2 === 0
                          ? "lg:pr-24"
                          : "lg:order-2 lg:pl-24"
                      }
                    `}
                  >

                    <div className="flex items-center gap-4">

                      <span
                        className="
                          text-[11px]
                          font-bold
                          tracking-[0.2em]
                          text-[#C6A15B]
                        "
                      >
                        {item.year}
                      </span>

                      <span className="h-px flex-1 bg-[#DCE2E7]" />

                    </div>

                  </div>


                  <div
                    className={`
                      ${
                        index % 2 === 0
                          ? "lg:pl-24"
                          : "lg:order-1 lg:pr-24"
                      }
                    `}
                  >

                    <div className="flex items-center gap-4">

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#F6F4EF]
                          text-[#087F8C]
                        "
                      >
                        <Icon size={19} />
                      </div>

                      <h3
                        className="
                          text-[28px]
                          font-bold
                          tracking-[-0.035em]
                          text-[#202832]
                        "
                      >
                        {item.title}
                      </h3>

                    </div>

                    <p
                      className="
                        mt-5
                        text-[14px]
                        leading-7
                        text-[#68737D]
                      "
                    >
                      {item.text}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          05 — IMAGE MANIFESTO
      ===================================================== */}

      <section
        className="
          relative
          h-[650px]
          overflow-hidden
          bg-[#0B1F3A]
          sm:h-[720px]
        "
      >

        <motion.img
          initial={{
            scale: 1.12,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.6,
            ease: "easeOut",
          }}
          src={STORY_IMAGE}
          alt="IBS team collaborating"
          loading="lazy"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[#0B1F3A]/65
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#0B1F3A]/95
            via-[#0B1F3A]/50
            to-transparent
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            max-w-[1280px]
            items-center
            px-6
            sm:px-8
            lg:px-10
            xl:px-14
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
            }}
            className="max-w-[850px]"
          >

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#C6A15B]
              "
            >
              04 / Our belief
            </span>

            <h2
              className="
                mt-7
                text-[48px]
                font-bold
                leading-[0.95]
                tracking-[-0.06em]
                text-white
                sm:text-[70px]
                lg:text-[88px]
              "
            >
              Better questions

              <span className="block text-[#BCEBE8]">
                create better futures.
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-[600px]
                text-[15px]
                leading-7
                text-white/55
                sm:text-[17px]
              "
            >
              We are not interested in simply providing
              answers. We want to understand the question,
              challenge assumptions and discover what is
              possible beyond the obvious.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          06 — PRINCIPLES
      ===================================================== */}

      <section
        className="
          bg-[#F6F4EF]
          px-6
          py-28
          sm:px-8
          lg:px-10
          lg:py-36
          xl:px-14
        "
      >

        <div className="mx-auto max-w-[1280px]">

          <div
            className="
              flex
              flex-col
              justify-between
              gap-10
              lg:flex-row
              lg:items-end
            "
          >

            <div>

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#087F8C]
                "
              >
                05 / Principles
              </span>

              <h2
                className="
                  mt-6
                  text-[46px]
                  font-bold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-[#202832]
                  sm:text-[62px]
                "
              >
                How we

                <span className="text-[#087F8C]">
                  {" "}work.
                </span>

              </h2>

            </div>

            <p
              className="
                max-w-[420px]
                text-[14px]
                leading-7
                text-[#68737D]
              "
            >
              Our approach is guided by a small number of
              principles that shape how we think, collaborate
              and deliver.
            </p>

          </div>


          <div className="mt-16">

            {[
              {
                icon: Target,
                number: "01",
                title: "Purpose before process",
                text: "We begin with the outcome. Process follows purpose, not the other way around.",
              },
              {
                icon: Lightbulb,
                number: "02",
                title: "Curiosity creates progress",
                text: "We ask questions, challenge assumptions and remain open to possibilities.",
              },
              {
                icon: Handshake,
                number: "03",
                title: "Partnership over transaction",
                text: "The strongest work is built through trust, transparency and shared ownership.",
              },
              {
                icon: ShieldCheck,
                number: "04",
                title: "Integrity in every detail",
                text: "Long-term credibility comes from doing the right thing consistently.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    delay: index * 0.08,
                    duration: 0.6,
                  }}
                  className="
                    group
                    grid
                    gap-6
                    border-t
                    border-[#DCE2E7]
                    py-8
                    lg:grid-cols-[100px_0.9fr_1.1fr_50px]
                    lg:items-center
                  "
                >

                  <span
                    className="
                      text-[11px]
                      font-bold
                      tracking-[0.2em]
                      text-[#C6A15B]
                    "
                  >
                    {item.number}
                  </span>


                  <div className="flex items-center gap-5">

                    <motion.div
                      whileHover={{
                        rotate: 12,
                        scale: 1.12,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                      }}
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#087F8C]/20
                        text-[#087F8C]
                        transition-all
                        duration-300
                        group-hover:border-[#C6A15B]
                        group-hover:bg-[#C6A15B]
                        group-hover:text-[#0B1F3A]
                      "
                    >
                      <Icon size={19} />
                    </motion.div>

                    <h3
                      className="
                        text-[20px]
                        font-bold
                        tracking-[-0.025em]
                        text-[#202832]
                        sm:text-[23px]
                      "
                    >
                      {item.title}
                    </h3>

                  </div>


                  <p
                    className="
                      max-w-[520px]
                      text-[13px]
                      leading-7
                      text-[#68737D]
                    "
                  >
                    {item.text}
                  </p>


                  <ArrowRight
                    size={18}
                    className="
                      text-[#C6A15B]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:opacity-100
                    "
                  />

                </motion.div>
              );
            })}

            <div className="border-t border-[#DCE2E7]" />

          </div>

        </div>

      </section>


      {/* =====================================================
          07 — IMPACT
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          px-6
          py-28
          sm:px-8
          lg:px-10
          lg:py-36
          xl:px-14
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1280px]
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
            lg:gap-20
          "
        >

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
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
            }}
            className="
              relative
              aspect-[0.9/1]
              overflow-hidden
              rounded-[30px]
              bg-[#0B1F3A]
            "
          >

            <motion.img
              initial={{
                scale: 1.12,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.5,
              }}
              src={IMPACT_IMAGE}
              alt="People collaborating on meaningful projects"
              loading="lazy"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0B1F3A]/75
                via-transparent
                to-transparent
              "
            />

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-6
                top-6
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-[#0B1F3A]/50
                text-[#C6A15B]
                backdrop-blur-md
              "
            >
              <Target size={20} />
            </motion.div>


            <div
              className="
                absolute
                bottom-7
                left-7
                right-7
                flex
                items-end
                justify-between
              "
            >

              <div>

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#C6A15B]
                  "
                >
                  The outcome
                </p>

                <p className="mt-2 text-[20px] font-semibold text-white">
                  Meaningful impact
                </p>

              </div>

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#C6A15B]
                  text-[#0B1F3A]
                "
              >
                <ArrowUpRight size={20} />
              </div>

            </div>

          </motion.div>


          {/* CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
            }}
          >

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#087F8C]
              "
            >
              06 / Impact
            </span>

            <h2
              className="
                mt-6
                text-[47px]
                font-bold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#202832]
                sm:text-[62px]
              "
            >
              Connect the

              <span className="block text-[#087F8C]">
                right pieces.
              </span>

            </h2>

            <p
              className="
                mt-7
                text-[15px]
                leading-8
                text-[#68737D]
              "
            >
              Our role is often to connect things that
              already have potential — people with ideas,
              organizations with expertise, technology
              with opportunity and communities with
              resources.
            </p>


            {/* METRICS */}

            <div className="mt-10 grid grid-cols-2 gap-x-8">

              {[
                {
                  value: "01",
                  label: "Integrated approach",
                },
                {
                  value: "04",
                  label: "Core disciplines",
                },
                {
                  value: "∞",
                  label: "Room to innovate",
                },
                {
                  value: "01",
                  label: "Shared purpose",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.label}
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
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  className="
                    border-t
                    border-[#DCE2E7]
                    py-6
                  "
                >

                  <div
                    className="
                      text-[38px]
                      font-bold
                      tracking-[-0.05em]
                      text-[#087F8C]
                    "
                  >
                    {item.value}
                  </div>

                  <p
                    className="
                      mt-2
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#68737D]
                    "
                  >
                    {item.label}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          08 — FINAL CTA
      ===================================================== */}

     
      <Footer/>

    </main>
  );
}