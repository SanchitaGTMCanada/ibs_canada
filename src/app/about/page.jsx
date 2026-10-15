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

<section className="relative isolate flex min-h-[700px] items-center overflow-hidden bg-[#0B1F3A]  sm:min-h-[700px]  lg:min-h-[700px] ">

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

  <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6  sm:px-8  lg:px-10  xl:px-14 mt-25">

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
    px-5
    py-8
    sm:px-7
    lg:px-10
    lg:py-10
    xl:px-14
    font-[var(--font-manrope)]
  "
>
  {/* Decorative circle */}
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
      -right-[140px]
      top-[10%]
      h-[320px]
      w-[320px]
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
        gap-8
        lg:grid-cols-[0.35fr_1.65fr]
        lg:gap-12
      "
    >
      {/* Section label */}
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
            text-[72px]
            font-bold
            leading-none
            tracking-[-0.08em]
            text-[#087F8C]/10
            sm:text-[90px]
          "
        >
          01
        </motion.span>

        <div className="mt-3 flex items-center gap-3">
          <span className="h-px w-8 bg-[#C6A15B]" />

          <span
            className="
              text-[12px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#087F8C]
            "
          >
            Why IBS exists
          </span>
        </div>
      </div>

      {/* Main content */}
      <div>
        <h2
          className="
            max-w-[900px]
            text-[36px]
            font-bold
            leading-[1.12]
            tracking-[-0.045em]
            text-[#0B2438]
            sm:text-[46px]
            lg:text-[58px]
          "
        >
          Progress happens when{" "}

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
            different ideas
          </motion.span>{" "}

          start moving together.
        </h2>

        {/* Description */}
        <div className="mt-7 grid gap-5 md:grid-cols-2 md:gap-8">
          <p
            className="
              text-[15px]
              leading-[1.7]
              text-[#68737D]
              sm:text-[16px]
            "
          >
            We created IBS around a simple belief:
            complex challenges rarely have simple,
            isolated answers.
          </p>

          <p
            className="
              text-[15px]
              leading-[1.7]
              text-[#68737D]
              sm:text-[16px]
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

<section
  className="
    relative
    isolate
    overflow-hidden
    bg-[#0B2438]
    px-5
    py-8
    sm:px-8
    sm:py-10
    lg:px-12
    lg:py-10
    font-[var(--font-manrope)]
  "
>
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
      className="
        grid
        items-center
        gap-7
        md:grid-cols-[0.9fr_1.1fr]
        md:gap-10
        lg:gap-14
      "
    >
      {/* Left column */}
      <div>
        <h2
          className="
            text-[36px]
            font-bold
            leading-[1.02]
            tracking-[-0.045em]
            text-white
            sm:text-[46px]
            md:text-[52px]
            lg:text-[58px]
          "
        >
          Our
          <br />
          <span className="text-[#B9F0E8]">
            Mission
          </span>
        </h2>

        <p
          className="
            mt-5
            max-w-[340px]
            text-[15px]
            leading-[1.7]
            text-[#AAB8CA]
            sm:text-[16px]
          "
        >
          Turning strategic thinking into practical
          progress for stronger, more capable
          organizations.
        </p>
      </div>

      {/* Right column */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="relative"
      >
        {/* Corner accents */}
        <div className="absolute -right-1.5 -top-1.5 h-10 w-10 rounded-tr-xl border-r border-t border-[#C69A45]/60" />

        <div className="absolute -bottom-1.5 -left-1.5 h-10 w-10 rounded-bl-xl border-b border-l border-[#00B8C4]/60" />

        {/* Mission card */}
        <div
          className="
            relative
            rounded-xl
            border
            border-white/10
            bg-white/[0.045]
            p-5
            shadow-[0_16px_50px_rgba(0,0,0,0.12)]
            backdrop-blur-sm
            sm:p-6
            lg:p-7
          "
        >
          {/* Card label */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#B9F0E8]
              "
            >
              What drives us
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#00B8C4] shadow-[0_0_10px_rgba(0,184,196,0.6)]" />
          </div>

          {/* Divider */}
          <div className="mb-5 h-px w-full bg-gradient-to-r from-[#00B8C4]/70 via-white/10 to-transparent" />

          {/* Mission statement */}
          <p
            className="
              text-[16px]
              font-light
              leading-[1.75]
              tracking-[-0.01em]
              text-white
              sm:text-[17px]
              lg:text-[18px]
            "
          >
            To support stronger, more capable
            organizations through{" "}
            <span className="font-semibold text-[#B9F0E8]">
              strategic direction
            </span>
            , financial and operational management,
            research, training and practical
            implementation support.
          </p>

          {/* Bottom detail */}
          <div className="mt-5 flex items-center gap-3">
            <span className="h-6 w-[2px] shrink-0 rounded-full bg-[#00B8C4]" />

            <p className="text-[12px] leading-[1.7] text-[#AAB8CA] sm:text-[13px]">
              Strategy, expertise and execution working
              together.
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
    px-5
    py-8
    sm:px-8
    sm:py-10
    lg:px-10
    lg:py-10
    xl:px-14
    font-[var(--font-manrope)]
  "
>
  {/* ================================================
      BACKGROUND ATMOSPHERE
  ================================================ */}

  <div className="pointer-events-none absolute -left-40 top-20 h-[320px] w-[320px] rounded-full bg-[#087F8C]/[0.08] blur-[100px]" />

  <div className="pointer-events-none absolute -right-40 top-[35%] h-[360px] w-[360px] rounded-full bg-[#2374A8]/[0.08] blur-[110px]" />

  <div className="pointer-events-none absolute -left-32 bottom-[-120px] h-[300px] w-[300px] rounded-full bg-[#087F8C]/[0.05] blur-[100px]" />

  {/* Decorative circles */}
  <div className="pointer-events-none absolute left-[-120px] top-[28%] h-[300px] w-[300px] rounded-full border border-[#087F8C]/[0.10]" />

  <div className="pointer-events-none absolute right-[-150px] top-[58%] h-[350px] w-[350px] rounded-full border border-[#2374A8]/[0.10]" />

  {/* ================================================
      MAIN CONTENT
  ================================================ */}

  <div className="relative z-10 mx-auto max-w-[1280px]">

    {/* Section heading */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-[650px]"
    >
      <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#087F8C] sm:text-[13px]">
        03 / The journey
      </span>

      <h2
        className="
          mt-3
          text-[36px]
          font-bold
          leading-[1.05]
          tracking-[-0.045em]
          text-[#0B2438]
          sm:text-[46px]
          lg:text-[58px]
        "
      >
        How We Work
       
      </h2>
    </motion.div>

    {/* ================================================
        TIMELINE AND CARDS
    ================================================ */}

    <div className="relative mt-7 sm:mt-8 lg:mt-10">

      {/* Timeline base */}
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

      {/* Animated timeline progress */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true, amount: 0.1 }}
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
          from-[#2374A8]
          via-[#087F8C]
          to-[#2374A8]
          lg:left-1/2
        "
      />

      {/* ================================================
          VALUE CARDS
      ================================================ */}

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-6">
        {[
          {
            icon: ShieldCheck,
            number: "01",
            title: "Integrity",
            detail: "Trust & governance",
            text: "We act with integrity and build trust through sound governance and professional conduct.",
            theme: "navy",
          },
          {
            icon: Award,
            number: "02",
            title: "Service Excellence",
            detail: "Quality & accountability",
            text: "We hold ourselves to high standards and consider the long-term impact of our work.",
            theme: "ice",
          },
          {
            icon: Lightbulb,
            number: "03",
            title: "Value Creation",
            detail: "Ideas into impact",
            text: "We focus on practical value, knowledge transfer and solutions that strengthen client capability.",
            theme: "teal",
          },
          {
            icon: TrendingUp,
            number: "04",
            title: "Excellence",
            detail: "Continuous improvement",
            text: "We promote teamwork, learning, innovation and disciplined execution.",
            theme: "ice",
          },
          {
            icon: Handshake,
            number: "05",
            title: "Respect",
            detail: "People & partnerships",
            text: "We collaborate respectfully with clients and stakeholders and recognize the importance of self-determination.",
            theme: "navy",
          },
          {
            icon: LockKeyhole,
            number: "06",
            title: "Confidentiality",
            detail: "Privacy & trust",
            text: "We protect confidential information and build relationships grounded in trust.",
            theme: "ice",
          },
        ].map((item, index) => {
          const IconComponent = item.icon;

          const themes = {
            navy: {
              card: "bg-[#0B2438] border-[#0B2438]",
              number: "text-white/10",
              title: "text-white",
              body: "text-[#D1DFEA]",
              detail: "text-[#B9F0E8]",
              corner: "bg-[#087F8C]",
              icon: "text-white",
              arrow:
                "border-[#B9F0E8]/70 text-white group-hover:bg-[#B9F0E8] group-hover:text-[#0B2438]",
              divider: "bg-[#00B8C4]",
            },
            ice: {
              card: "bg-[#E5F0F5] border-[#C9DDE8]",
              number: "text-[#0B2438]/10",
              title: "text-[#0B2438]",
              body: "text-[#43515C]",
              detail: "text-[#17647D]",
              corner: "bg-[#0B2438]",
              icon: "text-white",
              arrow:
                "border-[#2374A8] text-[#0B2438] group-hover:bg-[#0B2438] group-hover:text-white",
              divider: "bg-[#087F8C]",
            },
            teal: {
              card: "bg-[#075563] border-[#075563]",
              number: "text-white/10",
              title: "text-white",
              body: "text-[#D3EBEF]",
              detail: "text-[#B9F0E8]",
              corner: "bg-[#2374A8]",
              icon: "text-white",
              arrow:
                "border-[#B9F0E8] text-white group-hover:bg-[#B9F0E8] group-hover:text-[#0B2438]",
              divider: "bg-[#00B8C4]",
            },
          };

          const style = themes[item.theme];

          return (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              whileHover={{ y: -5 }}
              className={`
                group relative isolate flex min-h-[285px]
                flex-col overflow-hidden rounded-[22px]
                border p-5 shadow-[0_8px_24px_rgba(11,36,56,0.08)]
                transition-shadow duration-300
                hover:shadow-[0_16px_35px_rgba(11,36,56,0.16)]
                sm:min-h-[295px] sm:p-6
                ${style.card}
              `}
            >
              {/* Half-round corner */}
              <div
                className={`
                  pointer-events-none absolute -right-1 -top-1
                  h-[116px] w-[116px] rounded-bl-[100%]
                  transition-all duration-500
                  group-hover:h-[132px] group-hover:w-[132px]
                  ${style.corner}
                `}
              />

              {/* Corner ring */}
              <div className="pointer-events-none absolute right-3 top-3 h-[76px] w-[76px] rounded-full border border-white/20" />

              {/* Icon inside curved corner */}
              <div
                className={`
                  absolute right-6 top-6 z-10
                  flex h-12 w-12 items-center justify-center
                  ${style.icon}
                `}
              >
                <IconComponent size={29} strokeWidth={1.7} />
              </div>

              {/* Number */}
              <span
                className={`
                  relative z-10 text-[52px] font-bold
                  leading-none tracking-[-0.07em]
                  sm:text-[58px] ${style.number}
                `}
              >
                {item.number}
              </span>

              {/* Title */}
              <h3
                className={`
                  relative z-10 mt-5 max-w-[85%]
                  text-[20px] font-bold leading-snug
                  tracking-[-0.035em] sm:text-[22px]
                  ${style.title}
                `}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`
                  relative z-10 mt-3 max-w-[340px]
                  text-[14px] leading-[1.8] sm:text-[15px]
                  ${style.body}
                `}
              >
                {item.text}
              </p>

              {/* Footer */}
              <div className="relative z-10 mt-auto flex items-end justify-between gap-3 pt-5">
                <div className="min-w-0">
                  <div className={`mb-3 h-[2px] w-12 ${style.divider}`} />

                  <span
                    className={`
                      text-[10px] font-bold uppercase
                      leading-relaxed tracking-[0.12em]
                      sm:text-[11px] ${style.detail}
                    `}
                  >
                    {item.detail}
                  </span>
                </div>

                {/* Arrow */}
                <span
                  className={`
                    flex h-10 w-10 shrink-0 items-center
                    justify-center rounded-full border
                    transition-all duration-300 ${style.arrow}
                  `}
                >
                  <ArrowRight size={17} />
                </span>
              </div>

              {/* Animated bottom accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#2374A8] to-[#00B8C4] transition-all duration-500 group-hover:w-full" />
            </motion.article>
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
    h-[430px]
    overflow-hidden
    bg-[#0B1F3A]
    sm:h-[490px]
    lg:h-[420px]
    font-[var(--font-manrope)]
  "
>
  {/* Background image */}
  <motion.img
    initial={{ scale: 1.12 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
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

  {/* Image overlays */}
  <div className="absolute inset-0 bg-[#0B1F3A]/30" />

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#0B1F3A]/70
      via-[#0B1F3A]/45
      to-transparent
    "
  />

  {/* Content */}
  <div
    className="
      relative
      z-10
      mx-auto
      flex
      h-full
      max-w-[1280px]
      items-center
      px-5
      sm:px-7
      lg:px-10
      xl:px-14
    "
  >
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-[850px]"
    >
      <span
        className="
          text-[12px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-[#B9F0E8]
        "
      >
        04 / Our belief
      </span>

      <h2
        className="
          mt-3
          text-[40px]
          font-bold
          leading-[1.04]
          tracking-[-0.05em]
          text-white
          sm:text-[56px]
          lg:text-[72px]
        "
      >
        Better questions
        <span className="block text-[#B9F0E8]">
          create better futures.
        </span>
      </h2>

      <p
        className="
          mt-4
          max-w-[600px]
          text-[15px]
          leading-[1.7]
          text-white/80
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
    px-5
    py-8
    sm:px-8
    sm:py-10
    lg:px-10
    lg:py-10
    xl:px-14
    font-[var(--font-manrope)]
  "
>
  {/* Background atmosphere */}
  <div className="pointer-events-none absolute -left-40 top-[20%] h-[350px] w-[350px] rounded-full bg-[#087F8C]/[0.045] blur-[110px]" />

  <div className="pointer-events-none absolute -right-40 bottom-[5%] h-[350px] w-[350px] rounded-full bg-[#087F8C]/[0.045] blur-[110px]" />

  {/* Decorative circles */}
  <div className="pointer-events-none absolute -right-[140px] top-[12%] h-[420px] w-[420px] rounded-full border border-[#0B2438]/[0.045]" />

  <div className="pointer-events-none absolute -right-[100px] top-[18%] h-[320px] w-[320px] rounded-full border border-[#087F8C]/[0.055]" />

  <div className="relative z-10 mx-auto max-w-[1380px]">

    {/* Header */}
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
      <div>
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-9 rounded-full bg-[#087F8C]" />
          <span className="h-[2px] w-4 rounded-full bg-[#2374A8]" />

          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#087F8C] sm:text-[12px]">
            05 / Principles
          </span>
        </div>

        <h2
          className="
            mt-3
            max-w-[650px]
            text-[36px]
            font-bold
            leading-[1.02]
            tracking-[-0.045em]
            text-[#0B2438]
            sm:text-[48px]
            lg:text-[58px]
          "
        >
          Why Clients
          <span className="block">Select IBS.</span>
        </h2>
      </div>
    </div>

    {/* Principles grid */}
    <div className="mt-8 grid gap-4 lg:mt-8 lg:grid-cols-2 lg:gap-5">

      {/* Principle 01 */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="group relative min-h-[280px] overflow-hidden rounded-[24px] bg-[#0B1F3A] shadow-[0_16px_40px_rgba(11,31,58,0.12)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(11,31,58,0.18)] sm:min-h-[300px]"
      >
        <img
          src="/images/about/why-client-plan.jpg"
          alt="Purpose driven workspace"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-35 grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071827] via-[#0B1F3A]/75 to-[#087F8C]/20" />

        <div className="absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full border border-[#B9F0E8]/10" />

        <div className="relative z-10 flex h-full min-h-[280px] flex-col p-4 sm:min-h-[300px] sm:p-6">
          <div className="flex items-start justify-between">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#B9F0E8]">
              01
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#B9F0E8] backdrop-blur-md">
              <Target size={20} strokeWidth={1.5} />
            </div>
          </div>

          <div className="mt-auto max-w-[470px]">
            <div className="mb-3 h-[2px] w-10 bg-[#00B8C4] transition-all duration-500 group-hover:w-16" />

            <h3 className="text-[24px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[28px]">
              Robust project planning and timeline management
            </h3>
          </div>
        </div>
      </motion.article>

      {/* Principle 02 */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="group relative min-h-[280px] overflow-hidden rounded-[24px] border border-[#D6E3ED] bg-white shadow-[0_12px_35px_rgba(11,36,56,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(11,36,56,0.10)] sm:min-h-[300px]"
      >
        <div className="grid h-full min-h-[280px] lg:min-h-[300px] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Content */}
          <div className="relative z-10 flex flex-col p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#2374A8]">
                02
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#087F8C]/20 bg-[#087F8C]/[0.07] text-[#087F8C] transition-colors duration-300 group-hover:bg-[#0B2438] group-hover:text-white">
                <Lightbulb size={20} strokeWidth={1.5} />
              </div>
            </div>

            <div className="mt-auto pt-5">
              <div className="mb-3 h-[2px] w-10 bg-[#087F8C] transition-all duration-500 group-hover:w-16" />

              <h3 className="text-[24px] font-bold leading-[1.08] tracking-[-0.04em] text-[#0B2438] sm:text-[28px]">
                Disciplined resource allocation
              </h3>
            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-[180px] overflow-hidden lg:min-h-0">
            <img
              src="/images/about/why-client-resource.jpg"
              alt="Research and resource planning"
              loading="lazy"
              className="h-full w-full object-cover grayscale-[15%] transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-[#087F8C]/20" />
          </div>
        </div>
      </motion.article>

      {/* Principle 03 */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.16 }}
        className="group relative min-h-[280px] overflow-hidden rounded-[24px] border border-[#D6E3ED] bg-white shadow-[0_12px_35px_rgba(11,36,56,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(11,36,56,0.10)] sm:min-h-[300px]"
      >
        <div className="grid h-full min-h-[280px] lg:min-h-[300px] lg:grid-cols-[1.1fr_0.9fr]">
          {/* Image */}
          <div className="relative order-2 min-h-[180px] overflow-hidden lg:order-1 lg:min-h-0">
            <img
              src="/images/about/why-client-transparent.jpg"
              alt="Partnership and collaboration"
              loading="lazy"
              className="h-full w-full object-cover grayscale-[10%] transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#087F8C]/15 via-transparent to-white/10" />
          </div>

          {/* Content */}
          <div className="relative z-10 order-1 flex flex-col p-4 sm:p-6 lg:order-2">
            <div className="flex items-start justify-between">
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#087F8C]">
                03
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#087F8C]/20 bg-[#087F8C]/[0.07] text-[#087F8C] transition-colors duration-300 group-hover:bg-[#0B2438] group-hover:text-white">
                <Handshake size={20} strokeWidth={1.5} />
              </div>
            </div>

            <div className="mt-auto pt-5">
              <div className="mb-3 h-[2px] w-10 bg-[#087F8C] transition-all duration-500 group-hover:w-16" />

              <h3 className="text-[24px] font-bold leading-[1.08] tracking-[-0.04em] text-[#0B2438] sm:text-[28px]">
                Quality assurance and control
              </h3>
            </div>
          </div>
        </div>
      </motion.article>

      {/* Principle 04 */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.24 }}
        className="group relative min-h-[280px] overflow-hidden rounded-[24px] bg-[#087F8C] shadow-[0_16px_40px_rgba(8,127,140,0.12)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(8,127,140,0.20)] sm:min-h-[300px]"
      >
        <img
          src="/images/about/why-client-team.jpg"
          alt="Integrity and professional standards"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale-[10%] transition-all duration-700 group-hover:scale-105 group-hover:opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#087F8C]/95 via-[#087F8C]/80 to-[#0B1F3A]/95" />

        <div className="absolute -bottom-[100px] -right-[70px] h-[280px] w-[280px] rounded-full border border-white/10" />

        <div className="absolute -bottom-[65px] -right-[35px] h-[210px] w-[210px] rounded-full border border-[#B9F0E8]/20" />

        <div className="relative z-10 flex h-full min-h-[280px] flex-col p-4 sm:min-h-[300px] sm:p-6">
          <div className="flex items-start justify-between">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#B9F0E8]">
              04
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#B9F0E8] backdrop-blur-md">
              <ShieldCheck size={20} strokeWidth={1.5} />
            </div>
          </div>

          <div className="mt-auto max-w-[500px]">
            <div className="mb-3 h-[2px] w-10 bg-[#B9F0E8] transition-all duration-500 group-hover:w-16" />

            <h3 className="text-[24px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[28px]">
              Transparent communication and reporting
            </h3>
          </div>
        </div>
      </motion.article>
    </div>

    {/* Bottom signature */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-6 flex items-center justify-between gap-6 border-t border-[#D6E3ED] pt-4"
    >
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-12 rounded-full bg-[#087F8C]" />
        <span className="h-[2px] w-6 rounded-full bg-[#2374A8]" />
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