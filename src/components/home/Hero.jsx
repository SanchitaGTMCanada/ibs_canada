"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  UsersRound,
  Clock3,
} from "lucide-react";

export default function Hero() {
  const aurora_mid_img = "/home/home-1.jpg";

  const auroraImage =
    "/home/ibs-hero.png";

  return (
    <section
      className="
        relative
        min-h-[760px]
        overflow-hidden
        bg-[#0B1F3A]
        px-6
        pb-20
        pt-32
        sm:px-8
        sm:pt-36
        lg:min-h-[820px]
        lg:px-10
        lg:pb-24
        lg:pt-40
        xl:px-12
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Main Background Image */}

        <img
          src={auroraImage}
          alt="Canadian landscape"
          className="
            absolute
            left-1/2
            top-1/2
            h-full
            w-[140%]
            max-w-none
            -translate-x-1/2
            -translate-y-1/2
            object-cover
            object-center
          "
        />

        {/* Dark Readability Overlay */}

        {/* <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#06182F]/90
            via-[#0B1F3A]/50
            to-[#0B1F3A]/10
          "
        /> */}

        {/* Teal Atmospheric Tint */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-[#087F8C]/5
            via-[#087F8C]/20
            to-[#087F8C]/8
            mix-blend-screen
          "
        />

        {/* =================================================
            AURORA GLOW
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-15%]
            top-[10%]
            h-[280px]
            w-[130%]
            rounded-[50%]
            bg-[#087F8C]/20
            blur-[110px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[-20%]
            top-[2%]
            h-[190px]
            w-[140%]
            rotate-[-4deg]
            rounded-[50%]
            bg-[#6EC6D1]/10
            blur-[95px]
          "
        />

        {/* Right Gold Atmospheric Glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#C6A15B]/8
            blur-[120px]
          "
        />

        {/* =================================================
            WHITISH OMBRÉ
            Strong on left → fades toward right
        ================================================= */}

        {/* <div
          className="
            pointer-events-none
            absolute
            left-[-18%]
            top-[-5%]
            z-[2]
            h-[105%]
            w-[82%]
            blur-[70px]
          "
          style={{
            background:
              "radial-gradient(ellipse at 18% 48%, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.60) 24%, rgba(255,255,255,0.34) 43%, rgba(255,255,255,0.13) 62%, rgba(255,255,255,0.03) 75%, transparent 88%)",
          }}
        /> */}

        {/* Horizontal White Fade */}
{/* 
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-[3]
            w-[75%]
          "
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.30) 23%, rgba(255,255,255,0.16) 42%, rgba(255,255,255,0.06) 61%, transparent 100%)",
          }}
        /> */}

        {/* =================================================
            GOLDEN GLAZE
            Soft warm highlight over the white ombré
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-8%]
            top-[12%]
            z-[4]
            h-[65%]
            w-[58%]
            opacity-80
            blur-[90px]
          "
          style={{
            background:
              "radial-gradient(ellipse at 35% 38%, rgba(198,161,91,0.24) 0%, rgba(198,161,91,0.14) 28%, rgba(198,161,91,0.06) 52%, transparent 76%)",
          }}
        />

        {/* Small golden highlight near heading */}

        <div
          className="
            pointer-events-none
            absolute
            left-[15%]
            top-[27%]
            z-[4]
            h-[220px]
            w-[300px]
            rounded-full
            bg-[#C6A15B]/8
            blur-[85px]
          "
        />

        {/* Bottom Fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-[5]
            h-[280px]
            bg-gradient-to-t
            from-[#0B1F3A]
            via-[#0B1F3A]/65
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          BACKGROUND LINES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-100px]
          top-[15%]
          z-[6]
          h-[1px]
          w-[55%]
          rotate-[-3deg]
          bg-gradient-to-r
          from-transparent
          via-[#C6A15B]/25
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-100px]
          top-[34%]
          z-[6]
          h-[1px]
          w-[45%]
          rotate-[3deg]
          bg-gradient-to-r
          from-transparent
          via-[#087F8C]/25
          to-transparent
        "
      />

      {/* =====================================================
          DOT FIELD
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[20%]
          z-[6]
          h-[190px]
          w-[190px]
          opacity-20
        "
        style={{
          backgroundImage:
            "radial-gradient(#C6A15B 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
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
          max-w-[1280px]
          items-center
          gap-12
          lg:grid-cols-[1fr_0.9fr]
        "
      >
        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-20
            max-w-[670px]
          "
        >
          {/* =================================================
              EYEBROW
          ================================================= */}

          <div className="flex items-center gap-3">
            

         <span
  className="
    relative
    inline-block

    text-[14px]
    font-extrabold
    uppercase
    tracking-[0.32em]

    text-[#0A5264]

    drop-shadow-[0_1px_0_#FFFFFF]
    drop-shadow-[1px_2px_0_#D9E0E5]
    drop-shadow-[2px_3px_0_#AAB4BC]
    drop-shadow-[3px_4px_0_#71808C]
    drop-shadow-[4px_6px_7px_rgba(11,31,58,0.28)]

    transition-all
    duration-300
  "
  style={{marginLeft:"10px"}}
>
  Innovative Business Solutions
</span>
          </div>

          {/* =================================================
              HEADING
          ================================================= */}



<h1
  className="
    mt-7
    text-[38px]
    font-extrabold
    leading-[1.08]
    tracking-[-0.04em]
    sm:text-[46px]
    lg:text-[54px]
    xl:text-[60px]
  "
>
  <span className="relative inline-block">
    {/* DARK SILVER OUTER BORDER */}
    <span
      aria-hidden="true"
      className="
        absolute
        inset-0
        text-[#66727B]
        [-webkit-text-stroke:1px_#66727B]
      "
    >
      Turning complex challenges
    </span>

    {/* SOLID BLUE TEXT */}
    <span
      className="
        relative
        z-10
        text-[#0B2438]
        drop-shadow-[0_2px_2px_rgba(11,36,56,0.20)]
        drop-shadow-[0_5px_7px_rgba(11,36,56,0.18)]
      "
    >
      Turning complex challenges
    </span>
  </span>

  <span className="relative block w-fit">
    {/* DARK SILVER OUTER BORDER */}
    <span
      aria-hidden="true"
      className="
        absolute
        inset-0
        text-[#66727B]
        [-webkit-text-stroke:1px_#66727B]
      "
    >
      into practical progress
    </span>

    {/* SOLID BLUE TEXT */}
    <span
      className="
        relative
        z-10
        text-[#0B2438]
        drop-shadow-[0_2px_2px_rgba(11,36,56,0.20)]
        drop-shadow-[0_5px_7px_rgba(11,36,56,0.18)]
      "
    >
      into practical progress
    </span>
  </span>
</h1>




          {/* =================================================
              DIVIDER
          ================================================= */}

         

          {/* =================================================
              DESCRIPTION
          ================================================= */}

       <p
  className="
    mt-6
    max-w-[570px]

    text-[17px]
    font-medium
    leading-7
    tracking-[0.005em]
    text-[#19344F]

    drop-shadow-[0_1px_0_rgba(255,255,255,0.75)]
    drop-shadow-[0_2px_3px_rgba(11,31,58,0.18)]
    drop-shadow-[0_0_10px_rgba(198,161,91,0.10)]

    sm:text-[17px]
  "
>
  We combine strategic thinking, financial expertise, operational
  discipline, technology and technical capabilities to help
  organizations make better decisions and build sustainable
  capacity.
</p>

          {/* =================================================
              BUTTONS
          ================================================= */}

<div
  className="
    mt-9
    flex
    flex-wrap
    items-center
    gap-4
  "
>
  {/* PRIMARY BUTTON */}
  <a
    href="/contact"
    className="
      group
      inline-flex
      items-center
      gap-4
      rounded-full
      bg-[#087F8C]
      px-6
      py-3.5
      text-[12px]
      font-bold
      uppercase
      tracking-[0.15em]
      text-white
      shadow-[0_15px_40px_rgba(8,127,140,0.25)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-[#065F66]
      hover:shadow-[0_20px_45px_rgba(8,127,140,0.35)]
    "

    style={{
      color:"white"
    }}
  >
    Book a Consultation

    <span
      className="
        flex
        h-7
        w-7
        items-center
        justify-center
        rounded-full
        bg-white
        text-[#087F8C]
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    >
      <ArrowRight size={13} />
    </span>
  </a>

  {/* SECONDARY BUTTON */}
  <a
    href="/services"
    className="
      group
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-[#087F8C]/40
      bg-[#087F8C]
      px-6
      py-3.5
      text-[12px]
      font-bold
      uppercase
      tracking-[0.15em]
      text-white
      shadow-[0_10px_30px_rgba(8,127,140,0.15)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#065F66]
      hover:bg-[#065F66]
      hover:shadow-[0_15px_35px_rgba(8,127,140,0.25)]
    "
     style={{
      color:"white"
    }}
  >
    Explore Our Services

    <ArrowRight
      size={14}
      className="
        text-white
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    />
  </a>
</div>


          {/* =================================================
              STATS
          ================================================= */}

        </motion.div>

        {/* ===================================================
            RIGHT VISUAL
        ==================================================== */}

      
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          items-center
          gap-3
          lg:flex
        "
      >
        <span
          className="
            text-[12px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-white/50
          "
        >
          Explore
        </span>

        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            h-7
            w-px
            bg-[#C6A15B]
          "
        />
      </motion.div>
    </section>
  );
}