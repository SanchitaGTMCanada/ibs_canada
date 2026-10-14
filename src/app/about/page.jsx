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





import {


  Award,

  
  LockKeyhole,
 


  TrendingUp,
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

{/* =====================================================
    01 — HERO WITH FULL BACKGROUND IMAGE
===================================================== */}

<Header />

<section className="relative isolate flex min-h-[780px] items-center overflow-hidden bg-[#0B1F3A]  sm:min-h-[820px]  lg:min-h-[900px] ">

  {/* =================================================
      FULL-WIDTH BACKGROUND IMAGE
  ================================================= */}

  <div className="absolute inset-0 -z-30">
    <img
      src="/images/about/about-hero.jpg"
      alt=""
      aria-hidden="true"
      fetchPriority="high"
      className="h-full w-full object-cover object-center"
    />
  </div>

 {/* =================================================
    GRADIENT OVERLAY — CONTENT READABILITY
================================================= */}
{/* LIGHT OVERLAY — SLIGHTLY STRONGER */}
<div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-[#EEF5F8]/60 via-[#EEF5F8]/35 via-45% to-[#EEF5F8]/8" />

{/* BOTTOM SHADING */}
<div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-t from-[#0B2438]/25 via-transparent to-white/[0.03]" />

{/* SUBTLE WHITE HIGHLIGHT */}
<div className="pointer-events-none absolute inset-0 -z-20 bg-white/[0.03]" />

  {/* =================================================
      AMBIENT LIGHT
  ================================================= */}

  <motion.div
    animate={{
      x: [0, 60, 0],
      y: [0, -25, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -left-[220px] top-[5%] -z-10 h-[500px] w-[500px] rounded-full bg-[#087F8C]/20 blur-[140px]"
  />

  <motion.div
    animate={{
      x: [0, -50, 0],
      y: [0, 30, 0],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -right-[180px] top-[25%] -z-10 h-[420px] w-[420px] rounded-full bg-[#C6A15B]/15 blur-[130px]"
  />

  {/* =================================================
      SUBTLE GRID
  ================================================= */}

  <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045] [background-image:linear-gradient(rgba(220,226,231,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(220,226,231,0.4)_1px,transparent_1px)] [background-size:75px_75px]" />

  {/* =================================================
      GIANT BACKGROUND IBS
  ================================================= */}

  <motion.div
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.3 }}
    className="pointer-events-none absolute bottom-[-45px] left-[-12px] -z-10 select-none text-[180px] font-black leading-none tracking-[-0.1em] text-white/[0.045] sm:bottom-[-65px] sm:text-[260px] lg:bottom-[-90px] lg:text-[390px]"
  >
    IBS
  </motion.div>

  {/* =================================================
      VERTICAL ACCENT
  ================================================= */}

  <div className="pointer-events-none absolute bottom-0 right-[10%] top-0 hidden w-px bg-white/[0.10] lg:block" />

  {/* =================================================
      FLOATING DECORATIVE ICONS
  ================================================= */}

  <motion.div
    animate={{
      y: [0, -14, 0],
      rotate: [0, 5, 0],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute left-[5%] top-[30%] hidden lg:block"
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C6A15B]/30 bg-[#0B1F3A]/40 text-[#C6A15B]/80 backdrop-blur-md">
      <Lightbulb size={25} />
    </div>
  </motion.div>

  <motion.div
    animate={{
      y: [0, 16, 0],
      rotate: [0, -5, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute right-[5%] top-[60%] hidden lg:block"
  >
    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#087F8C]/40 bg-[#0B1F3A]/40 text-[#BCEBE8]/80 backdrop-blur-md">
      <Network size={28} />
    </div>
  </motion.div>

  {/* =================================================
      HERO CONTENT — SINGLE COLUMN
  ================================================= */}

  <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-12 sm:px-8 sm:pb-22 lg:px-10 lg:pb-22 xl:px-14">

    <div className="max-w-[900px]">

   {/* EYEBROW */}
<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeLeft}
  transition={{ duration: 0.7 }}
  className="flex items-center gap-4"
>
  <span className="text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#0B2438] drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)] sm:text-[14px]">
    About IBS Canada
  </span>
</motion.div>

{/* MAIN HEADING */}
<motion.h1
  initial="hidden"
  animate="visible"
  variants={fadeLeft}
  transition={{
    delay: 0.12,
    duration: 0.9,
  }}
  className="mt-8 text-[44px] font-bold leading-[1.02] tracking-[-0.05em] text-[#0B2438] drop-shadow-[0_3px_8px_rgba(255,255,255,0.45)] sm:mt-10 sm:text-[56px] md:text-[68px] lg:text-[76px] xl:text-[88px]"
>
  Who we

  <motion.span
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.5,
      duration: 0.8,
    }}
    className="block text-[#0B2438]"
  >
    are
  </motion.span>
</motion.h1>

  

{/* DESCRIPTION */}
<motion.p
  initial="hidden"
  animate="visible"
  variants={fadeLeft}
  transition={{
    delay: 0.35,
    duration: 0.8,
  }}
  className="mt-7 max-w-[700px] text-[15px] font-bold leading-7 text-[#43515C] sm:mt-8 sm:text-[17px] sm:leading-8 lg:text-[18px]"
>
  Innovative Business Solutions Ltd. is a Canadian management consulting
  and professional services firm serving Indigenous organizations,
  communities, governments and entrepreneurs in Canada and internationally.
</motion.p>
      {/* CTA BUTTONS */}
   <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.7,
    duration: 0.7,
  }}
  className="mt-8 flex flex-wrap gap-4 sm:mt-10"
>
  {/* DISCOVER IBS */}
  <Link
    href="#story"
    className="group inline-flex items-center gap-3 rounded-full bg-[#087F8C] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-md shadow-[#087F8C]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#066A75] sm:px-6 sm:py-3.5"
  style={{color:"white"}}
  
  >
    Discover IBS

    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-y-1">
      <ArrowDown size={13} />
    </span>
  </Link>

  {/* EXPLORE SERVICES */}
  <Link
    href="/services"
    className="group inline-flex items-center gap-2 rounded-full border border-[#087F8C] bg-[#087F8C] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-md shadow-[#087F8C]/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#066A75] hover:bg-[#066A75] sm:px-6 sm:py-3.5"
  style={{color:"white"}}
  
  >
    <span >Explore Services</span>

    <ArrowUpRight
      size={14}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>
</motion.div>

   

    </div>
  </div>

  {/* =================================================
      BOTTOM FADE INTO NEXT SECTION
  ================================================= */}

  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1F3A] to-transparent" />

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
          py-12
          sm:px-8
          lg:px-10
          lg:py-12
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
    text-[#0B2438]
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
    className="text-[#0B2438]"
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



{/* Our Mission Section */}
<section className="relative isolate overflow-hidden bg-[#0B2438] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
  {/* Background grid */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.06]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
      backgroundSize: "56px 56px",
    }}
  />

  {/* Ambient glow */}
  <div className="pointer-events-none absolute -left-24 top-8 h-48 w-48 rounded-full bg-[#2374A8]/15 blur-[80px]" />
  <div className="pointer-events-none absolute -bottom-20 right-0 h-52 w-52 rounded-full bg-[#00B8C4]/10 blur-[80px]" />

  <div className="relative mx-auto max-w-[1200px]">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid items-center gap-7 md:grid-cols-[0.9fr_1.1fr] md:gap-10 lg:gap-14"
    >
      {/* Left column */}
      <div>
      

        <h2 className="text-[42px] font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-[52px] md:text-[58px] lg:text-[64px]">
         Our
          <br />
          <span className="text-[#B9F0E8]">Mission</span>
        </h2>

       

        <p className="mt-5 max-w-[300px] text-[12px] leading-6 text-[#AAB8CA] sm:text-[13px]">
          Turning strategic thinking into practical progress for stronger,
          more capable organizations.
        </p>
      </div>

      {/* Right column */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="relative"
      >
        {/* Corner accents */}
        <div className="absolute -right-1.5 -top-1.5 h-10 w-10 rounded-tr-xl border-r border-t border-[#C69A45]/60" />
        <div className="absolute -bottom-1.5 -left-1.5 h-10 w-10 rounded-bl-xl border-b border-l border-[#00B8C4]/60" />

        <div className="relative rounded-xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:p-7 lg:p-8">
          {/* Card label */}
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#B9F0E8]">
              What drives us
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#00B8C4] shadow-[0_0_10px_rgba(0,184,196,0.6)]" />
          </div>

          <div className="mb-5 h-px w-full bg-gradient-to-r from-[#00B8C4]/70 via-white/10 to-transparent" />

          <p className="text-[15px] font-light leading-[1.8] tracking-[-0.01em] text-white sm:text-[17px] lg:text-[18px]">
            To support stronger, more capable organizations through{" "}
            <span className="font-medium text-[#B9F0E8]">
              strategic direction
            </span>
            , financial and operational management, research, training and
            practical implementation support.
          </p>

          {/* Bottom detail */}
          <div className="mt-6 flex items-center gap-3">
            <span className="h-6 w-[2px] rounded-full bg-[#00B8C4]" />
            <p className="text-[10px] leading-5 text-[#AAB8CA] sm:text-[11px]">
              Strategy, expertise and execution working together.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
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
    text-[#0B2438]
    sm:text-[56px]
    lg:text-[64px]
  "
>
  How We

  <span className="block text-[#0B2438]">
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

    

{/* SIX NAVY + WHITE VALUE CARDS */}


{/* SIX NAVY + WHITE VALUE CARDS */}
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
  {[
    {
      icon: ShieldCheck,
      number: "01",
      title: "Integrity",
      detail: "Trust & governance",
      text: "We act with integrity and build trust through sound governance and professional conduct.",
    },
    {
      icon: Award,
      number: "02",
      title: "Service Excellence",
      detail: "Quality & accountability",
      text: "We hold ourselves to high standards and consider the long-term impact of our work.",
    },
    {
      icon: Lightbulb,
      number: "03",
      title: "Value Creation",
      detail: "Ideas into impact",
      text: "We focus on practical value, knowledge transfer and solutions that strengthen client capability.",
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Excellence",
      detail: "Continuous improvement",
      text: "We promote teamwork, learning, innovation and disciplined execution.",
    },
    {
      icon: Handshake,
      number: "05",
      title: "Respect",
      detail: "People & partnerships",
      text: "We collaborate respectfully with clients and stakeholders and recognize the importance of self-determination.",
    },
    {
      icon: LockKeyhole,
      number: "06",
      title: "Confidentiality",
      detail: "Privacy & trust",
      text: "We protect confidential information and build relationships grounded in trust.",
    },
  ].map((item, index) => {
    const IconComponent = item.icon;

    return (
<motion.div
  key={item.number}
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{
    duration: 0.55,
    delay: index * 0.07,
  }}
  whileHover={{ y: -3 }}
  className="group relative isolate overflow-hidden rounded-[24px] border border-[#D6E3ED] bg-white p-6 shadow-[0_8px_28px_rgba(11,36,56,0.06)] transition-all duration-300 hover:border-[#2374A8]/40 hover:shadow-[0_14px_36px_rgba(11,36,56,0.10)] sm:p-7"
>
  {/* Navy and blue top accent */}
  <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#0B2438] via-[#2374A8] to-[#D6E3ED]" />

  {/* Decorative background circle */}
  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#2374A8]/10 transition-transform duration-500 group-hover:scale-110" />

  {/* Icon and number */}
  <div className="relative flex items-start justify-between gap-4">
    {/* Dynamic item icon */}
    <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[18px] border border-[#2374A8]/20 bg-gradient-to-br from-[#0B2438] to-[#2374A8] text-white shadow-[0_6px_16px_rgba(11,36,56,0.18)] transition-all duration-300 group-hover:rounded-full group-hover:from-[#2374A8] group-hover:to-[#0B2438]">
      {typeof item.icon === "string" ? (
        <span className="text-[26px] leading-none">{item.icon}</span>
      ) : (
        (() => {
          const IconComponent = item.icon;
          return IconComponent ? (
            <IconComponent size={25} strokeWidth={1.8} />
          ) : null;
        })()
      )}
    </div>

    {/* Number */}
    <span className="text-[12px] font-bold tracking-[0.12em] text-[#2374A8]/60">
      {item.number}
    </span>
  </div>

  {/* Title */}
  <h4 className="relative mt-6 text-[19px] font-bold tracking-[-0.025em] text-[#0B2438] sm:text-[21px]">
    {item.title}
  </h4>

  {/* Description */}
  <p className="relative mt-3 min-h-[76px] text-[13px] leading-6 text-[#43515C] sm:text-[14px] sm:leading-7">
    {item.text}
  </p>

  {/* Bottom details */}
  <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-[#0B2438]/10 pt-5">
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-[#2374A8]" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#2374A8]">
        {item.detail}
      </span>
    </div>

    {/* Arrow */}
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D6E3ED] bg-[#F4F8FC] text-[#0B2438] transition-all duration-300 group-hover:border-[#0B2438] group-hover:bg-[#0B2438] group-hover:text-white">
      <ArrowRight size={15} />
    </span>
  </div>
</motion.div>
    );
  })}
</div>





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
            bg-[#0B1F3A]/25
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#0B1F3A]/35
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
    text-[#0B2438]
    sm:text-[64px]
    lg:text-[72px]
  "
>
  Why Clients

  <span className="block text-[#0B2438]">
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