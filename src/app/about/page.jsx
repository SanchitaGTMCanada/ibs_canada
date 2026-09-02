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
            opacity-[0.065]
            [background-image:linear-gradient(rgba(220,226,231,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(220,226,231,0.32)_1px,transparent_1px)]
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
              Who we

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
               are 
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
            >Innovative Business Solutions Ltd. is a Canadian management consulting and professional services firm serving Indigenous organizations, communities, governments and entrepreneurs in Canada and internationally. 
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
  <span className="text-white">
    Explore Services
  </span>

  <ArrowUpRight
    size={14}
    className="
      text-white
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
                src="/images/about/about-who-hero.jpg"
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
                    Our Mission
                  </p>

                  <p className="mt-1 text-[14px] text-white">
                    To deliver culturally informed, practical business solutions.
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
                    text-[15px]
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
    py-20
    sm:px-8
    sm:py-24
    lg:px-10
    lg:py-28
    xl:px-14
  "
>
  {/* =========================================================
      BACKGROUND GRID
  ========================================================= */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.045]
      [background-image:linear-gradient(rgba(220,226,231,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(220,226,231,0.35)_1px,transparent_1px)]
      [background-size:80px_80px]
    "
  />

  {/* =========================================================
      DEEP BACKGROUND GLOWS
  ========================================================= */}

  <div
    className="
      pointer-events-none
      absolute
      -left-[220px]
      top-[18%]
      h-[500px]
      w-[500px]
      rounded-full
      bg-[#087F8C]/[0.10]
      blur-[120px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-[220px]
      top-[45%]
      h-[520px]
      w-[520px]
      rounded-full
      bg-[#123A5A]/[0.22]
      blur-[120px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      bottom-[-220px]
      left-1/2
      h-[480px]
      w-[680px]
      -translate-x-1/2
      rounded-full
      bg-[#C6A15B]/[0.045]
      blur-[120px]
    "
  />


  {/* =========================================================
      DECORATIVE BACKGROUND CIRCLES
  ========================================================= */}

  <div
    className="
      pointer-events-none
      absolute
      -left-[170px]
      top-[35%]
      h-[430px]
      w-[430px]
      rounded-full
      border
      border-[#087F8C]/[0.08]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -left-[135px]
      top-[39%]
      h-[350px]
      w-[350px]
      rounded-full
      border
      border-[#C6A15B]/[0.045]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-[180px]
      top-[54%]
      h-[460px]
      w-[460px]
      rounded-full
      border
      border-[#087F8C]/[0.07]
    "
  />


  {/* =========================================================
      MAIN CONTENT
  ========================================================= */}

  <div className="relative z-10 mx-auto max-w-[1280px]">


    {/* =======================================================
        HEADER
    ======================================================= */}

    <div
      className="
        flex
        flex-col
        lg:flex-row
        lg:items-end
        lg:gap-6
      "
    >

      <div className="shrink-0 lg:w-[275px]">

        <span
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.3em]
            text-[#C6A15B]
          "
        >
          02 / Our Vision
        </span>

        <h2
          className="
            mt-5
            text-[44px]
            font-bold
            leading-[0.92]
            tracking-[-0.055em]
            text-white
            sm:text-[58px]
            lg:text-[62px]
          "
        >
          Our

          <span className="block text-[#BCEBE8]">
            Mission
          </span>
        </h2>

      </div>


      <p
        className="
          mt-6
          max-w-[500px]
          text-[14px]
          leading-7
          text-white/45
          lg:mt-0
        "
      >
        To support stronger, more capable organizations through strategic
        direction, financial and operational management, research, training
        and practical implementation support.
      </p>

    </div>


    {/* =======================================================
        DIVIDER
    ======================================================= */}

    <div className="mt-7 flex items-center gap-3">

      <span
        className="
          h-[2px]
          w-16
          rounded-full
          bg-[#087F8C]
          sm:w-20
        "
      />

      <span
        className="
          h-[2px]
          w-24
          rounded-full
          bg-[#C6A15B]/70
          sm:w-32
        "
      />

    </div>


    {/* =======================================================
        DESKTOP CONSTELLATION
    ======================================================= */}

    <div
      className="
        relative
        mt-16
        hidden
        h-[760px]
        overflow-visible
        lg:block
        xl:h-[780px]
      "
    >

      {/* =====================================================
          PARTICLES
      ===================================================== */}

      {[
        ["15%", "16%", "#BCEBE8", 0],
        ["85%", "17%", "#C6A15B", 1.5],
        ["11%", "48%", "#5DE2E7", 2.5],
        ["89%", "48%", "#BCEBE8", 3],
        ["28%", "7%", "#C6A15B", 4],
        ["72%", "8%", "#5DE2E7", 1],
        ["25%", "91%", "#BCEBE8", 4.5],
        ["75%", "91%", "#C6A15B", 2.7],
      ].map(([left, top, color, delay], index) => (
        <motion.span
          key={`desktop-particle-${index}`}
          animate={{
            y: [0, -7, 0, 5, 0],
            opacity: [0.12, 0.55, 0.15, 0.4, 0.12],
            scale: [0.8, 1.15, 0.8],
          }}
          transition={{
            duration: 6 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
          className="
            pointer-events-none
            absolute
            z-10
            h-1
            w-1
            rounded-full
          "
          style={{
            left,
            top,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
      ))}


      {/* =====================================================
          OUTER ORBIT
      ===================================================== */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 48,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[570px]
          w-[570px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
        "
      >

        <div
          className="
            absolute
            inset-0
            rounded-full
            border-[3px]
            border-transparent
            border-t-[#5DE2E7]/70
            border-r-[#087F8C]/30
          "
        />

        <span
          className="
            absolute
            left-1/2
            top-[-6px]
            h-3
            w-3
            -translate-x-1/2
            rounded-full
            bg-[#BCEBE8]
            shadow-[0_0_14px_#BCEBE8]
          "
        />

        <span
          className="
            absolute
            right-[7%]
            top-[23%]
            h-2.5
            w-2.5
            rounded-full
            bg-[#F0D98A]
            shadow-[0_0_13px_#F0D98A]
          "
        />

        <span
          className="
            absolute
            bottom-[10%]
            left-[20%]
            h-2
            w-2
            rounded-full
            bg-[#5DE2E7]
            shadow-[0_0_11px_#5DE2E7]
          "
        />

      </motion.div>


      {/* =====================================================
          MIDDLE ORBIT
      ===================================================== */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[435px]
          w-[435px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
        "
      >

        <div
          className="
            absolute
            inset-0
            rounded-full
            border-[3px]
            border-transparent
            border-t-[#C6A15B]/85
            border-l-[#F0D98A]/25
          "
        />

        <span
          className="
            absolute
            left-[17%]
            top-[-5px]
            h-2.5
            w-2.5
            rounded-full
            bg-[#F0D98A]
            shadow-[0_0_13px_#F0D98A]
          "
        />

        <span
          className="
            absolute
            bottom-[8%]
            right-[14%]
            h-2
            w-2
            rounded-full
            bg-[#BCEBE8]
            shadow-[0_0_10px_#BCEBE8]
          "
        />

      </motion.div>


      {/* =====================================================
          INNER ORBIT
      ===================================================== */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 29,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[315px]
          w-[315px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
        "
      >

        <div
          className="
            absolute
            inset-0
            rounded-full
            border-[2px]
            border-transparent
            border-t-[#BCEBE8]/75
            border-b-[#087F8C]/30
          "
        />

        <span
          className="
            absolute
            left-1/2
            top-[-5px]
            h-2
            w-2
            -translate-x-1/2
            rounded-full
            bg-[#5DE2E7]
            shadow-[0_0_11px_#5DE2E7]
          "
        />

      </motion.div>


      {/* =====================================================
          CENTRAL GLOW
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.06, 0.13, 0.06],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#087F8C]/15
          blur-[100px]
        "
      />


      {/* =====================================================
          CENTRAL CIRCLE
      ===================================================== */}

      <motion.div
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
        animate={{
          boxShadow: [
            "0 0 45px rgba(8,127,140,0.08)",
            "0 0 80px rgba(8,127,140,0.22)",
            "0 0 45px rgba(8,127,140,0.08)",
          ],
        }}
        transition={{
          opacity: {
            duration: 0.8,
          },
          scale: {
            duration: 0.8,
          },
          boxShadow: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-40
          flex
          h-[165px]
          w-[165px]
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
          justify-center
          rounded-full
          border-[2px]
          border-[#C6A15B]/55
          bg-gradient-to-br
          from-[#164E61]
          via-[#123A5A]
          to-[#0B2942]
          text-center
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            inset-[10px]
            rounded-full
            border
            border-[#087F8C]/25
            bg-[#087F8C]/[0.08]
          "
        />

        <Sparkles
          size={29}
          strokeWidth={1.5}
          className="relative z-10 text-[#F0D98A]"
        />

        <span
          className="
            relative
            z-10
            mt-3
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-white/40
          "
        >
          IBS
        </span>

        <span
          className="
            relative
            z-10
            mt-1
            text-[15px]
            font-medium
            leading-6
            text-white
          "
        >
          Our
          <br />
          Values
        </span>

      </motion.div>


      {/* =====================================================
          DESKTOP SIX CARDS
          POSITIONS UNCHANGED
      ===================================================== */}

      {[
        {
          icon: BriefcaseBusiness,
          title: "Integrity",
          text:
            "We act with integrity and build trust through sound governance and professional conduct.",
          position: "left-[10%] top-[2%]",
          accent: "#BCEBE8",
        },
        {
          icon: Cpu,
          title: "Service Excellence",
          text:
            "We hold ourselves to high standards and consider the long-term impact of our work.",
          position: "right-[10%] top-[2%]",
          accent: "#BCEBE8",
        },
        {
          icon: Lightbulb,
          title: "Value Creation",
          text:
            "We focus on practical value, knowledge transfer and solutions that strengthen client capability.",
          position: "left-[2%] top-[40%]",
          accent: "#C6A15B",
        },
        {
          icon: Building2,
          title: "Excellence",
          text:
            "We promote teamwork, learning, innovation and disciplined execution.",
          position: "right-[2%] top-[40%]",
          accent: "#C6A15B",
        },
        {
          icon: Globe2,
          title: "Respect",
          text:
            "We collaborate respectfully with clients and stakeholders and recognize the importance of self-determination.",
          position: "left-[10%] bottom-[5%]",
          accent: "#BCEBE8",
        },
        {
          icon: Network,
          title: "Confidentiality",
          text:
            "We protect confidential information and build relationships grounded in trust.",
          position: "right-[10%] bottom-[5%]",
          accent: "#BCEBE8",
        },
      ].map((item, index) => {

        const Icon = item.icon;

        return (
          <motion.div
            key={`desktop-value-card-${index}`}
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            animate={{
              y: [0, -3, 0, 2, 0],
            }}
            transition={{
              opacity: {
                duration: 0.7,
                delay: index * 0.08,
              },
              scale: {
                duration: 0.7,
                delay: index * 0.08,
              },
              y: {
                duration: 8 + index * 0.45,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              },
            }}
            whileHover={{
              y: -7,
              scale: 1.02,
            }}
            className={`
              absolute
              ${item.position}
              z-30
              w-[175px]
              xl:w-[205px]
            `}
          >

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-[#BCEBE8]/20
                bg-gradient-to-br
                from-[#1A6B78]
                via-[#125263]
                to-[#0B2942]
                p-5
                shadow-[0_22px_60px_rgba(0,0,0,0.24)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-[#BCEBE8]/40
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[1px]
                  rounded-[23px]
                  border
                  border-white/[0.07]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-14
                  h-36
                  w-36
                  rounded-full
                  bg-[#087F8C]/30
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-12
                  -left-10
                  h-32
                  w-32
                  rounded-full
                  bg-[#C6A15B]/[0.12]
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  left-5
                  right-5
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#BCEBE8]/70
                  to-transparent
                "
              />

              <motion.div
                animate={{
                  x: ["-150%", "240%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatDelay: 15,
                  ease: "easeInOut",
                  delay: index * 1.1,
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-[20%]
                  -skew-x-12
                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.045]
                  to-transparent
                "
              />

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.06,
                }}
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.16]
                  bg-[#0B2942]/60
                  backdrop-blur-md
                "
              >

                <Icon
                  size={19}
                  strokeWidth={1.7}
                  style={{
                    color: item.accent,
                  }}
                />

              </motion.div>

              <h3
                className="
                  relative
                  mt-5
                  text-[16px]
                  font-semibold
                  tracking-[-0.02em]
                  text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  relative
                  mt-1.5
                  text-[11px]
                  leading-5
                  text-[#F6F4EF]/70
                "
              >
                {item.text}
              </p>

              <div
                className="
                  relative
                  mt-4
                  flex
                  items-center
                  gap-2
                  text-[#BCEBE8]/35
                "
              >
                <span className="h-px w-7 bg-current" />
                <ArrowRight size={11} />
              </div>

            </div>

          </motion.div>
        );
      })}

    </div>


    {/* =======================================================
        MOBILE / TABLET LAYOUT
    ======================================================= */}

    <div className="mt-14 lg:hidden">

      {/* =====================================================
          TOP TWO CARDS
      ===================================================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        {[
          {
            icon: BriefcaseBusiness,
            title: "Integrity",
            text:
              "We act with integrity and build trust through sound governance and professional conduct.",
            accent: "#BCEBE8",
          },
          {
            icon: Cpu,
            title: "Service Excellence",
            text:
              "We hold ourselves to high standards and consider the long-term impact of our work.",
            accent: "#BCEBE8",
          },
        ].map((item, index) => {

          const Icon = item.icon;

          return (
            <motion.div
              key={`mobile-top-card-${index}`}
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
                amount: 0.1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="
                relative
                overflow-hidden
                rounded-[22px]
                border
                border-[#BCEBE8]/20
                bg-gradient-to-br
                from-[#1A6B78]
                via-[#125263]
                to-[#0B2942]
                p-5
                shadow-[0_18px_45px_rgba(0,0,0,0.22)]
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  bg-[#087F8C]/25
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-14
                  -left-12
                  h-32
                  w-32
                  rounded-full
                  bg-[#C6A15B]/10
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-[#0B2942]/60
                "
              >

                <Icon
                  size={20}
                  strokeWidth={1.7}
                  style={{
                    color: item.accent,
                  }}
                />

              </div>

              <h3
                className="
                  relative
                  mt-4
                  text-[17px]
                  font-semibold
                  text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  relative
                  mt-2
                  text-[12px]
                  leading-5
                  text-white/65
                "
              >
                {item.text}
              </p>

            </motion.div>
          );
        })}

      </div>


      {/* =====================================================
          MOBILE CENTRAL SOLAR SYSTEM
      ===================================================== */}

      <div
        className="
          relative
          my-10
          flex
          h-[300px]
          items-center
          justify-center
          overflow-hidden
          sm:my-12
          sm:h-[340px]
        "
      >

        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[230px]
            w-[230px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#087F8C]/15
            blur-[70px]
          "
        />


        {/* Outer orbit */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 42,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[270px]
            w-[270px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border-[2px]
            border-transparent
            border-t-[#5DE2E7]/65
            border-r-[#087F8C]/25
          "
        >

          <span
            className="
              absolute
              left-1/2
              top-[-5px]
              h-2.5
              w-2.5
              -translate-x-1/2
              rounded-full
              bg-[#BCEBE8]
              shadow-[0_0_12px_#BCEBE8]
            "
          />

          <span
            className="
              absolute
              bottom-[12%]
              right-[5%]
              h-2
              w-2
              rounded-full
              bg-[#C6A15B]
              shadow-[0_0_10px_#C6A15B]
            "
          />

        </motion.div>


        {/* Middle orbit */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[200px]
            w-[200px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border-[2px]
            border-transparent
            border-t-[#C6A15B]/80
            border-l-[#F0D98A]/25
          "
        >

          <span
            className="
              absolute
              left-[15%]
              top-[-4px]
              h-2
              w-2
              rounded-full
              bg-[#F0D98A]
              shadow-[0_0_10px_#F0D98A]
            "
          />

        </motion.div>


        {/* Inner orbit */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[135px]
            w-[135px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#BCEBE8]/55
            border-t-transparent
          "
        >

          <span
            className="
              absolute
              right-[5%]
              top-[32%]
              h-1.5
              w-1.5
              rounded-full
              bg-[#5DE2E7]
              shadow-[0_0_8px_#5DE2E7]
            "
          />

        </motion.div>


        {/* Mobile central circle */}

        <motion.div
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            z-20
            flex
            h-[105px]
            w-[105px]
            flex-col
            items-center
            justify-center
            rounded-full
            border-[2px]
            border-[#C6A15B]/55
            bg-gradient-to-br
            from-[#164E61]
            via-[#123A5A]
            to-[#0B2942]
            text-center
            shadow-[0_0_55px_rgba(8,127,140,0.18)]
          "
        >

          <Sparkles
            size={23}
            strokeWidth={1.5}
            className="text-[#F0D98A]"
          />

          <span
            className="
              mt-2
              text-[7px]
              uppercase
              tracking-[0.28em]
              text-white/40
            "
          >
            IBS
          </span>

          <span
            className="
              mt-1
              text-[13px]
              leading-5
              text-white
            "
          >
            Our
            <br />
            Values
          </span>

        </motion.div>

      </div>


      {/* =====================================================
          BOTTOM FOUR CARDS
      ===================================================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        {[
          {
            icon: Lightbulb,
            title: "Value Creation",
            text:
              "We focus on practical value, knowledge transfer and solutions that strengthen client capability.",
            accent: "#C6A15B",
          },
          {
            icon: Building2,
            title: "Excellence",
            text:
              "We promote teamwork, learning, innovation and disciplined execution.",
            accent: "#C6A15B",
          },
          {
            icon: Globe2,
            title: "Respect",
            text:
              "We collaborate respectfully with clients and stakeholders and recognize the importance of self-determination.",
            accent: "#BCEBE8",
          },
          {
            icon: Network,
            title: "Confidentiality",
            text:
              "We protect confidential information and build relationships grounded in trust.",
            accent: "#BCEBE8",
          },
        ].map((item, index) => {

          const Icon = item.icon;

          return (
            <motion.div
              key={`mobile-bottom-card-${index}`}
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
                amount: 0.1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="
                relative
                overflow-hidden
                rounded-[22px]
                border
                border-[#BCEBE8]/20
                bg-gradient-to-br
                from-[#1A6B78]
                via-[#125263]
                to-[#0B2942]
                p-5
                shadow-[0_18px_45px_rgba(0,0,0,0.22)]
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  bg-[#087F8C]/25
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-14
                  -left-12
                  h-32
                  w-32
                  rounded-full
                  bg-[#C6A15B]/10
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-[#0B2942]/60
                "
              >

                <Icon
                  size={20}
                  strokeWidth={1.7}
                  style={{
                    color: item.accent,
                  }}
                />

              </div>

              <h3
                className="
                  relative
                  mt-4
                  text-[17px]
                  font-semibold
                  text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  relative
                  mt-2
                  text-[12px]
                  leading-5
                  text-white/65
                "
              >
                {item.text}
              </p>

            </motion.div>
          );
        })}

      </div>

    </div>


    {/* =======================================================
        SIGNATURE
    ======================================================= */}

    <div
      className="
        mt-10
        flex
        items-center
        gap-3
      "
    >

      <span
        className="
          h-1
          w-1
          rounded-full
          bg-[#C6A15B]
        "
      />

      <span
        className="
          h-px
          w-10
          bg-[#C6A15B]/40
        "
      />

      <span
        className="
          text-[8px]
          font-semibold
          uppercase
          tracking-[0.3em]
          text-white/25
        "
      >
        Stronger organizations · meaningful outcomes
      </span>

    </div>

  </div>

</section>


      {/* =====================================================
          04 — JOURNEY TIMELINE
      ===================================================== */}

<section
  className="
    relative
    h-auto
    min-h-0
    overflow-hidden
    bg-white
    px-6
    py-16
    sm:px-8
    sm:py-20
    lg:px-10
    lg:py-24
    xl:px-14
  "
>

  {/* =====================================================
      DEEP BACKGROUND ATMOSPHERE
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      -left-40
      top-20
      h-[420px]
      w-[420px]
      rounded-full
      bg-[#087F8C]/[0.08]
      blur-[100px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-40
      top-[35%]
      h-[480px]
      w-[480px]
      rounded-full
      bg-[#0B1F3A]/[0.07]
      blur-[110px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -left-32
      bottom-[-120px]
      h-[400px]
      w-[400px]
      rounded-full
      bg-[#C6A15B]/[0.055]
      blur-[100px]
    "
  />

  {/* =====================================================
      LARGE DECORATIVE CIRCLES
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      left-[-120px]
      top-[28%]
      h-[360px]
      w-[360px]
      rounded-full
      border
      border-[#087F8C]/[0.08]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      right-[-150px]
      top-[58%]
      h-[430px]
      w-[430px]
      rounded-full
      border
      border-[#C6A15B]/[0.08]
    "
  />

  {/* =====================================================
      CONTENT
  ===================================================== */}

  <div className="relative z-10 mx-auto max-w-[1280px]">

    {/* =====================================================
        HEADER
    ===================================================== */}

    <div className="max-w-[650px]">

      <span
        className="
          text-[12px]
          font-bold
          uppercase
          tracking-[0.3em]
          text-[#087F8C]
          sm:text-[13px]
        "
      >
        03 / The journey
      </span>

      <h2
        className="
          mt-5
          text-[42px]
          font-bold
          leading-[0.98]
          tracking-[-0.055em]
          text-[#202832]
          sm:text-[56px]
          lg:text-[64px]
        "
      >
        How We

        <span className="block text-[#087F8C]">
          Work
        </span>
      </h2>

    </div>


    {/* =====================================================
        TIMELINE
    ===================================================== */}

    <div
      className="
        relative
        mt-14
        h-auto
        sm:mt-16
        lg:mt-20
      "
    >

      {/* ===================================================
          TIMELINE BASE LINE
      =================================================== */}

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

      {/* ===================================================
          ANIMATED PROGRESS
      =================================================== */}

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
          w-[2px]
          bg-gradient-to-b
          from-[#C6A15B]
          via-[#087F8C]
          to-[#C6A15B]
          lg:left-1/2
        "
      />


      {/* ===================================================
          JOURNEY ITEMS
      =================================================== */}

      {[
        {
          year: "01",
          title:
            "Understand the challenge and define the desired outcome",
          icon: Lightbulb,
        },
        {
          year: "02",
          title:
            "Assess the current state, priorities, risks and opportunities",
          icon: Network,
        },
        {
          year: "03",
          title:
            "Develop a practical, evidence-informed approach",
          icon: Globe2,
        },
        {
          year: "04",
          title:
            "Collaborate with client leadership and teams to implement priorities",
          icon: Zap,
        },
        {
          year: "05",
          title:
            "Measure progress, transfer knowledge and strengthen internal capability",
          icon: Network,
        },
      ].map((item, index) => {

        const Icon = item.icon;

        return (
          <motion.div
            key={`journey-item-${index}-${item.year}`}
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className="
              relative
              grid
              gap-6
              pb-14
              pl-14
              last:pb-0
              lg:grid-cols-2
              lg:gap-20
              lg:pl-0
              lg:pb-20
            "
          >

            {/* =================================================
                BACKGROUND DECORATIVE CIRCLE
            ================================================= */}

            <div
              className={`
                pointer-events-none
                absolute
                top-1/2
                hidden
                h-[260px]
                w-[260px]
                -translate-y-1/2
                lg:block
                ${
                  index % 2 === 0
                    ? "left-[1%]"
                    : "right-[1%]"
                }
              `}
            >

              {/* Outer teal soft glow */}

              <div
                className="
                  absolute
                  inset-[-2px]
                  rounded-full
                  border-[4px]
                  border-transparent
                  border-l-[#087F8C]/10
                  border-t-[#087F8C]/8
                  rotate-[25deg]
                  blur-[5px]
                "
              />

              {/* Outer teal sharp arc */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border-[2px]
                  border-transparent
                  border-l-[#087F8C]/30
                  border-t-[#087F8C]/25
                  rotate-[25deg]
                "
              />

              {/* Inner gold soft glow */}

              <div
                className="
                  absolute
                  inset-[30px]
                  rounded-full
                  border-[4px]
                  border-transparent
                  border-r-[#C6A15B]/10
                  border-b-[#C6A15B]/8
                  -rotate-[35deg]
                  blur-[5px]
                "
              />

              {/* Inner gold sharp arc */}

              <div
                className="
                  absolute
                  inset-[30px]
                  rounded-full
                  border-[2px]
                  border-transparent
                  border-r-[#C6A15B]/28
                  border-b-[#C6A15B]/22
                  -rotate-[35deg]
                "
              />

            </div>


            {/* =================================================
                LARGE BACKGROUND ICON
            ================================================= */}

            <Icon
              size={145}
              strokeWidth={1}
              className={`
                pointer-events-none
                absolute
                top-1/2
                hidden
                -translate-y-1/2
                lg:block
                ${
                  index % 2 === 0
                    ? "left-[4%]"
                    : "right-[4%]"
                }
                ${
                  index % 2 === 0
                    ? "text-[#087F8C]/[0.10]"
                    : "text-[#0B1F3A]/[0.09]"
                }
              `}
            />


            {/* =================================================
                TIMELINE NODE
            ================================================= */}

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
                delay: index * 0.08 + 0.15,
                type: "spring",
                stiffness: 180,
              }}
              className="
                absolute
                left-[8px]
                top-1
                z-30
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                border
                border-[#C6A15B]
                bg-white
                shadow-[0_0_0_6px_rgba(255,255,255,0.9)]
                lg:left-1/2
                lg:-translate-x-1/2
              "
            >

              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#087F8C]
                  shadow-[0_0_12px_rgba(8,127,140,0.4)]
                "
              />

            </motion.div>


            {/* =================================================
                YEAR
            ================================================= */}

            <div
              className={`
                relative
                z-10
                ${
                  index % 2 === 0
                    ? "lg:pr-20"
                    : "lg:order-2 lg:pl-20"
                }
              `}
            >

              <div className="flex items-center gap-4">

                <span
                  className="
                    text-[27px]
                    font-bold
                    tracking-[0.18em]
                    text-[#C6A15B]
                    sm:text-[31px]
                  "
                >
                  {item.year}
                </span>

                <span
                  className="
                    h-px
                    flex-1
                    bg-gradient-to-r
                    from-[#DCE2E7]
                    to-transparent
                  "
                />

              </div>

            </div>


            {/* =================================================
                CONTENT CARD
            ================================================= */}

            <div
              className={`
                relative
                z-10
                ${
                  index % 2 === 0
                    ? "lg:pl-20"
                    : "lg:order-1 lg:pr-20"
                }
              `}
            >

              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#DCE2E7]
                  bg-white/90
                  p-5
                  shadow-[0_12px_38px_rgba(32,40,50,0.05)]
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:border-[#087F8C]/20
                  hover:shadow-[0_18px_50px_rgba(8,127,140,0.10)]
                  sm:p-6
                "
              >

                {/* Teal glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-32
                    w-32
                    rounded-full
                    bg-[#087F8C]/[0.07]
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-[#087F8C]/[0.12]
                  "
                />

                {/* Gold glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    -left-16
                    h-36
                    w-36
                    rounded-full
                    bg-[#C6A15B]/[0.055]
                    blur-3xl
                  "
                />

                {/* Top line */}

                <div
                  className="
                    absolute
                    left-6
                    right-6
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#087F8C]/35
                    to-transparent
                  "
                />

                {/* Content */}

                <div className="relative z-10">

                  <div className="flex items-center gap-4">

                    {/* Icon */}

                    <div
                      className="
                        relative
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-full
                        border
                        border-[#087F8C]/15
                        bg-gradient-to-br
                        from-[#087F8C]/15
                        via-[#087F8C]/[0.06]
                        to-[#0B1F3A]/[0.08]
                        text-[#087F8C]
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]
                        transition-all
                        duration-500
                        group-hover:border-[#C6A15B]/40
                        group-hover:text-[#C6A15B]
                        sm:h-16
                        sm:w-16
                      "
                    >

                      <div
                        className="
                          absolute
                          inset-1
                          rounded-full
                          border
                          border-white/60
                        "
                      />

                      <Icon
                        size={23}
                        strokeWidth={1.7}
                        className="relative z-10"
                      />

                    </div>


                    {/* Title */}

                    <h3
                      className="
                        text-[21px]
                        font-bold
                        leading-tight
                        tracking-[-0.035em]
                        text-[#202832]
                        sm:text-[25px]
                        lg:text-[27px]
                      "
                    >
                      {item.title}
                    </h3>

                  </div>

                </div>

              </motion.div>

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
          src="/images/about/better-que-about.jpg"
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
  {/* =====================================================
      BACKGROUND
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      left-[-180px]
      top-[20%]
      h-[500px]
      w-[500px]
      rounded-full
      bg-[#087F8C]/[0.045]
      blur-[130px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      right-[-180px]
      bottom-[5%]
      h-[500px]
      w-[500px]
      rounded-full
      bg-[#C6A15B]/[0.045]
      blur-[130px]
    "
  />

  {/* Fine architectural circle */}

  <div
    className="
      pointer-events-none
      absolute
      -right-[180px]
      top-[12%]
      h-[520px]
      w-[520px]
      rounded-full
      border
      border-[#0B1F3A]/[0.045]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-[120px]
      top-[18%]
      h-[400px]
      w-[400px]
      rounded-full
      border
      border-[#087F8C]/[0.055]
    "
  />


  <div className="relative z-10 mx-auto max-w-[1380px]">

    {/* =====================================================
        TOP HEADER
    ===================================================== */}

    <div
      className="
        grid
        gap-10
        lg:grid-cols-[0.85fr_1.15fr]
        lg:items-end
      "
    >

      <div>

        {/* Eyebrow */}

        <div className="flex items-center gap-3">

          <span
            className="
              h-[2px]
              w-9
              rounded-full
              bg-[#087F8C]
            "
          />

          <span
            className="
              h-[2px]
              w-4
              rounded-full
              bg-[#C6A15B]
            "
          />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#087F8C]
            "
          >
            05 / Principles
          </span>

        </div>


        <h2
          className="
            mt-6
            max-w-[650px]
            text-[48px]
            font-bold
            leading-[0.94]
            tracking-[-0.06em]
            text-[#202832]
            sm:text-[64px]
            lg:text-[72px]
          "
        >
          Why Clients

          <span className="block text-[#087F8C]">
            Select IBS.
          </span>
        </h2>

        

      </div>


      

    </div>


    {/* =====================================================
        PREMIUM PRINCIPLES LAYOUT
    ===================================================== */}

    <div
      className="
        mt-20
        grid
        gap-5
        lg:grid-cols-2
        lg:gap-6
      "
    >

      {/* ===================================================
          PRINCIPLE 01
      =================================================== */}

      <motion.article
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          group
          relative
          min-h-[430px]
          overflow-hidden
          rounded-[30px]
          bg-[#0B1F3A]
          shadow-[0_25px_70px_rgba(11,31,58,0.13)]
        "
      >

        {/* Background image */}

        <img
          src="/images/about/why-client-plan.jpg"
          alt="Purpose driven workspace"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-35
            grayscale-[20%]
            transition-all
            duration-700
            group-hover:scale-105
            group-hover:opacity-45
          "
        />

        {/* Image overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#071827]
            via-[#0B1F3A]/75
            to-[#087F8C]/20
          "
        />

        {/* Decorative circle */}

        <div
          className="
            absolute
            -right-24
            -top-24
            h-[300px]
            w-[300px]
            rounded-full
            border
            border-[#BCEBE8]/10
          "
        />

        <div
          className="
            absolute
            -right-10
            -top-10
            h-[170px]
            w-[170px]
            rounded-full
            border
            border-[#C6A15B]/15
          "
        />


        <div className="relative z-10 flex h-full flex-col p-7 sm:p-9">

          {/* Top */}

          <div className="flex items-start justify-between">

            <span
              className="
                text-[12px]
                font-bold
                tracking-[0.25em]
                text-[#C6A15B]
              "
            >
              01
            </span>

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-[#BCEBE8]
                backdrop-blur-md
              "
            >
              <Target
                size={21}
                strokeWidth={1.5}
              />
            </div>

          </div>


          {/* Bottom */}

          <div className="mt-auto max-w-[470px]">

            <div
              className="
                mb-5
                h-[2px]
                w-10
                bg-[#C6A15B]
                transition-all
                duration-500
                group-hover:w-16
              "
            />

            <h3
              className="
                text-[30px]
                font-bold
                leading-[1]
                tracking-[-0.045em]
                text-white
                sm:text-[34px]
              "
            >
            	Robust project planning and timeline management
            </h3>

           

          </div>

        </div>

      </motion.article>


      {/* ===================================================
          PRINCIPLE 02
      =================================================== */}

      <motion.article
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          delay: 0.08,
        }}
        className="
          group
          relative
          min-h-[430px]
          overflow-hidden
          rounded-[30px]
          border
          border-[#DCE2E7]
          bg-white
          shadow-[0_20px_55px_rgba(32,40,50,0.055)]
        "
      >

        <div className="grid h-full lg:grid-cols-[0.9fr_1.1fr]">

          {/* Content */}

          <div className="relative z-10 flex flex-col p-7 sm:p-9">

            <div className="flex items-start justify-between">

              <span
                className="
                  text-[12px]
                  font-bold
                  tracking-[0.25em]
                  text-[#C6A15B]
                "
              >
                02
              </span>

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#087F8C]/20
                  bg-[#087F8C]/[0.06]
                  text-[#087F8C]
                  transition-all
                  duration-500
                  group-hover:border-[#C6A15B]/40
                  group-hover:text-[#C6A15B]
                "
              >
                <Lightbulb
                  size={21}
                  strokeWidth={1.5}
                />
              </div>

            </div>

            <div className="mt-auto">

              <div
                className="
                  mb-5
                  h-[2px]
                  w-10
                  bg-[#087F8C]
                  transition-all
                  duration-500
                  group-hover:w-16
                "
              />

              <h3
                className="
                  text-[29px]
                  font-bold
                  leading-[1]
                  tracking-[-0.045em]
                  text-[#202832]
                  sm:text-[33px]
                "
              >
                	Disciplined resource allocation
              </h3>

            

            </div>

          </div>


          {/* Image */}

          <div className="relative min-h-[220px] overflow-hidden lg:min-h-0">

            <img
              src="images/about/why-client-resource.jpg"
              alt="Research and curiosity"
              className="
                h-full
                w-full
                object-cover
                grayscale-[15%]
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-white/20
                via-transparent
                to-[#087F8C]/15
              "
            />

          </div>

        </div>

      </motion.article>


      {/* ===================================================
          PRINCIPLE 03
      =================================================== */}

      <motion.article
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          delay: 0.16,
        }}
        className="
          group
          relative
          min-h-[430px]
          overflow-hidden
          rounded-[30px]
          border
          border-[#DCE2E7]
          bg-white
          shadow-[0_20px_55px_rgba(32,40,50,0.055)]
        "
      >

        <div className="grid h-full lg:grid-cols-[1.1fr_0.9fr]">

          {/* Image */}

          <div className="relative order-2 min-h-[220px] overflow-hidden lg:order-1 lg:min-h-0">

            <img
              src="images/about/why-client-transparent.jpg"
              alt="Partnership and collaboration"
              className="
                h-full
                w-full
                object-cover
                grayscale-[10%]
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#087F8C]/20
                via-transparent
                to-white/10
              "
            />

          </div>


          {/* Content */}

          <div className="relative z-10 order-1 flex flex-col p-7 sm:p-9 lg:order-2">

            <div className="flex items-start justify-between">

              <span
                className="
                  text-[12px]
                  font-bold
                  tracking-[0.25em]
                  text-[#087F8C]
                "
              >
                03
              </span>

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#087F8C]/20
                  bg-[#087F8C]/[0.06]
                  text-[#087F8C]
                  transition-all
                  duration-500
                  group-hover:border-[#C6A15B]/40
                  group-hover:text-[#C6A15B]
                "
              >
                <Handshake
                  size={21}
                  strokeWidth={1.5}
                />
              </div>

            </div>


            <div className="mt-auto">

              <div
                className="
                  mb-5
                  h-[2px]
                  w-10
                  bg-[#087F8C]
                  transition-all
                  duration-500
                  group-hover:w-16
                "
              />

              <h3
                className="
                  text-[29px]
                  font-bold
                  leading-[1]
                  tracking-[-0.045em]
                  text-[#202832]
                  sm:text-[33px]
                "
              >
              	Quality assurance and control
              </h3>

          

            </div>

          </div>

        </div>

      </motion.article>


      {/* ===================================================
          PRINCIPLE 04
      =================================================== */}

      <motion.article
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          delay: 0.24,
        }}
        className="
          group
          relative
          min-h-[430px]
          overflow-hidden
          rounded-[30px]
          bg-[#087F8C]
          shadow-[0_25px_65px_rgba(8,127,140,0.14)]
        "
      >

        {/* Image */}

        <img
          src="images/about/why-client-team.jpg"
          alt="Integrity and professional standards"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-25
            grayscale-[10%]
            transition-all
            duration-700
            group-hover:scale-105
            group-hover:opacity-35
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#087F8C]/95
            via-[#087F8C]/80
            to-[#0B1F3A]/95
          "
        />

        {/* Decorative rings */}

        <div
          className="
            absolute
            -bottom-[140px]
            -right-[100px]
            h-[380px]
            w-[380px]
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            absolute
            -bottom-[90px]
            -right-[50px]
            h-[280px]
            w-[280px]
            rounded-full
            border
            border-[#C6A15B]/20
          "
        />


        <div className="relative z-10 flex h-full flex-col p-7 sm:p-9">

          <div className="flex items-start justify-between">

            <span
              className="
                text-[12px]
                font-bold
                tracking-[0.25em]
                text-[#C6A15B]
              "
            >
              04
            </span>

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-[#C6A15B]
                backdrop-blur-md
              "
            >
              <ShieldCheck
                size={21}
                strokeWidth={1.5}
              />
            </div>

          </div>


          <div className="mt-auto max-w-[500px]">

            <div
              className="
                mb-5
                h-[2px]
                w-10
                bg-[#C6A15B]
                transition-all
                duration-500
                group-hover:w-16
              "
            />

            <h3
              className="
                text-[30px]
                font-bold
                leading-[1]
                tracking-[-0.045em]
                text-white
                sm:text-[34px]
              "
            >
             Transparent communication and reporting
            </h3>

        

          </div>

        </div>

      </motion.article>

    </div>


    {/* =====================================================
        BOTTOM SIGNATURE
    ===================================================== */}

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
        duration: 0.8,
        delay: 0.2,
      }}
      className="
        mt-14
        flex
        items-center
        justify-between
        gap-6
        border-t
        border-[#DCE2E7]
        pt-7
      "
    >

      <div className="flex items-center gap-4">

        <span
          className="
            h-[2px]
            w-16
            rounded-full
            bg-[#087F8C]
          "
        />

        <span
          className="
            h-[2px]
            w-8
            rounded-full
            bg-[#C6A15B]
          "
        />

      </div>


     

    </motion.div>

  </div>
</section>

      {/* =====================================================
          07 — IMPACT
      ===================================================== */}



      {/* =====================================================
          08 — FINAL CTA
      ===================================================== */}

     
      <Footer/>

    </main>
  );
}