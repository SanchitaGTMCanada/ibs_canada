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
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2400&q=85";

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

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#06182F]/90
            via-[#0B1F3A]/50
            to-[#0B1F3A]/10
          "
        />

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

        <div
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
        />

        {/* Horizontal White Fade */}

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
        />

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
                h-[2px]
                w-12
                bg-gradient-to-r
                from-[#A47B32]
                to-[#087F8C]
              "
            />

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
    text-[52px]
    font-extrabold
    leading-[1.06]
    tracking-[-0.045em]
    sm:text-[64px]
    lg:text-[72px]
    xl:text-[78px]
  "
>
  {/* ================================
      TURNING COMPLEX CHALLENGES
      ================================ */}
  <span className="relative inline-block mb-3">
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

    {/* ORIGINAL TEXT */}
    <span
      className="
        relative
        z-10
        bg-gradient-to-b
        from-[#315B7D]
        via-[#0B1F3A]
        to-[#050D18]
        bg-clip-text
        text-transparent

        drop-shadow-[0_2px_2px_rgba(5,13,24,0.20)]
        drop-shadow-[0_5px_7px_rgba(5,13,24,0.18)]
      "
    >
      Turning complex challenges
    </span>
  </span>

  {/* ================================
      INTO PRACTICAL PROGRESS
      ================================ */}
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

    {/* ORIGINAL TEXT */}
    <span
      className="
        relative
        z-10
        bg-gradient-to-r
        from-[#071B34]
        via-[#0A5264]
        to-[#13A8A8]
        bg-clip-text
        text-transparent

        drop-shadow-[0_2px_2px_rgba(4,40,50,0.22)]
        drop-shadow-[0_5px_8px_rgba(4,40,50,0.18)]
      "
    >
      into practical progress
    </span>
  </span>
</h1>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="mt-7 flex items-center gap-3">
            <span
              className="
                h-[2px]
                w-16
                bg-gradient-to-r
                from-[#C6A15B]
                to-[#087F8C]
              "
            />

            <span className="h-[2px] w-5 bg-[#315B9B]" />
          </div>

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
                bg-gradient-to-r
                from-[#A47B32]
                via-[#C6A15B]
                to-[#D8B866]
                px-6
                py-3.5
                text-[12px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#0B1F3A]
                shadow-[0_15px_40px_rgba(198,161,91,.28)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_45px_rgba(198,161,91,.38)]
              "
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
                  bg-[#0B1F3A]
                  text-white
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
                border-[#0B1F3A]/15
                bg-white/55
                px-6
                py-3.5
                text-[12px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#0B1F3A]
                shadow-[0_10px_30px_rgba(11,31,58,.08)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#C6A15B]/70
                hover:bg-white/80
                hover:text-[#0B1F3A]
              "
            >
              Explore Our Services

              <ArrowRight
                size={14}
                className="
                  text-[#087F8C]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#A47B32]
                "
              />
            </a>
          </div>

          {/* =================================================
              STATS
          ================================================= */}
<div
  className="
    mt-12
    grid
    max-w-[650px]
    grid-cols-1
    gap-4
    sm:grid-cols-3
  "
>
  {/* =================================================
      STAT 1 — SERVICE AREAS
  ================================================= */}

  <motion.div
    whileHover={{
      y: -7,
      scale: 1.02,
    }}
    transition={{
      duration: 0.25,
    }}
    className="
      group
      relative
      overflow-hidden
      rounded-[22px]

      border
      border-[#9A6A20]/35

      bg-gradient-to-br
      from-white/75
      via-[#FFFDF6]/65
      to-[#F3E5C3]/40

      p-5

      shadow-[0_18px_45px_rgba(11,31,58,0.12)]

      backdrop-blur-md

      transition-all
      duration-300

      hover:border-[#C6A15B]/75
      hover:shadow-[0_20px_55px_rgba(173,125,35,0.20)]
    "
  >
    {/* Golden glow */}
    <div
      className="
        pointer-events-none
        absolute
        -right-10
        -top-10
        h-32
        w-32
        rounded-full
        bg-[#D8A83E]/20
        blur-3xl
        transition-all
        duration-500
        group-hover:bg-[#D8A83E]/35
        group-hover:scale-125
      "
    />

    {/* Top highlight */}
    <div
      className="
        absolute
        left-0
        top-0
        h-[4px]
        w-14
        rounded-r-full
        bg-gradient-to-r
        from-[#7A5017]
        via-[#E3BD62]
        to-[#FFF0B0]

        shadow-[0_0_12px_rgba(214,169,68,0.55)]

        transition-all
        duration-500

        group-hover:w-full
      "
    />

    <div className="relative flex items-center justify-between">
      {/* Icon */}
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-[14px]

          border
          border-[#B98A36]/30

          bg-gradient-to-br
          from-[#FFF1C2]
          to-[#D8A83E]/20

          text-[#8A601C]

          shadow-[0_6px_18px_rgba(173,125,35,0.16)]

          transition-all
          duration-300

          group-hover:border-[#C6A15B]/70
          group-hover:bg-gradient-to-br
          group-hover:from-[#D8A83E]
          group-hover:to-[#A87524]
          group-hover:text-white
          group-hover:shadow-[0_8px_22px_rgba(173,125,35,0.35)]
        "
      >
        <Building2
          size={21}
          strokeWidth={1.8}
        />
      </div>

      {/* Number */}
      <span
        className="
          text-[11px]
          font-extrabold
          tracking-[0.22em]
          text-[#76501A]/55
        "
      >
        01
      </span>
    </div>

    {/* Main number */}
<p
  className="
    relative
    mt-6
    text-[34px]
    font-extrabold
    leading-none
    tracking-[-0.06em]
    text-[#102A43]

    drop-shadow-[0_1px_0_rgba(255,255,255,0.95)]
    drop-shadow-[1px_2px_0_rgba(180,188,196,0.75)]
    drop-shadow-[2px_4px_6px_rgba(100,110,120,0.22)]
    drop-shadow-[0_0_10px_rgba(220,225,230,0.45)]
  "
>
  6+
</p>

    {/* Label */}
    <p
      className="
        relative
        mt-2

        text-[10px]
        font-extrabold
        uppercase
        tracking-[0.18em]

        text-[#4A5D70]
      "
    >
      Service Areas
    </p>
  </motion.div>


  {/* =================================================
      STAT 2 — SUPPORT
  ================================================= */}

  <motion.div
    whileHover={{
      y: -7,
      scale: 1.02,
    }}
    transition={{
      duration: 0.25,
    }}
    className="
      group
      relative
      overflow-hidden
      rounded-[22px]

      border
      border-[#087F8C]/35

      bg-gradient-to-br
      from-white/75
      via-[#F7FCFC]/65
      to-[#DDF3F4]/35

      p-5

      shadow-[0_18px_45px_rgba(11,31,58,0.12)]

      backdrop-blur-md

      transition-all
      duration-300

      hover:border-[#087F8C]/70
      hover:shadow-[0_20px_55px_rgba(8,127,140,0.18)]
    "
  >
    {/* Teal glow */}
    <div
      className="
        pointer-events-none
        absolute
        -right-10
        -top-10
        h-32
        w-32
        rounded-full
        bg-[#087F8C]/15
        blur-3xl
        transition-all
        duration-500
        group-hover:bg-[#087F8C]/30
        group-hover:scale-125
      "
    />

    {/* Top highlight */}
    <div
      className="
        absolute
        left-0
        top-0
        h-[4px]
        w-14
        rounded-r-full

        bg-gradient-to-r
        from-[#087F8C]
        via-[#31B8C5]
        to-[#7EE7ED]

        shadow-[0_0_12px_rgba(8,127,140,0.45)]

        transition-all
        duration-500

        group-hover:w-full
      "
    />

    <div className="relative flex items-center justify-between">
      {/* Icon */}
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-[14px]

          border
          border-[#087F8C]/25

          bg-gradient-to-br
          from-[#DDF7F8]
          to-[#087F8C]/10

          text-[#087F8C]

          shadow-[0_6px_18px_rgba(8,127,140,0.14)]

          transition-all
          duration-300

          group-hover:border-[#087F8C]/60
          group-hover:bg-gradient-to-br
          group-hover:from-[#087F8C]
          group-hover:to-[#075E69]
          group-hover:text-white
          group-hover:shadow-[0_8px_22px_rgba(8,127,140,0.32)]
        "
      >
        <Clock3
          size={21}
          strokeWidth={1.8}
        />
      </div>

      {/* Number */}
      <span
        className="
          text-[11px]
          font-extrabold
          tracking-[0.22em]
          text-[#087F8C]/45
        "
      >
        02
      </span>
    </div>

    {/* Main number */}
  <p
  className="
    relative
    mt-6
    text-[34px]
    font-extrabold
    leading-none
    tracking-[-0.06em]
    text-[#102A43]

    drop-shadow-[0_1px_0_rgba(255,255,255,0.95)]
    drop-shadow-[1px_2px_0_rgba(180,188,196,0.75)]
    drop-shadow-[2px_4px_6px_rgba(100,110,120,0.22)]
    drop-shadow-[0_0_10px_rgba(220,225,230,0.45)]
  "
>
  24/7
</p>

    {/* Label */}
    <p
      className="
        relative
        mt-2

        text-[10px]
        font-extrabold
        uppercase
        tracking-[0.18em]

        text-[#4A5D70]
      "
    >
      Support
    </p>
  </motion.div>


  {/* =================================================
      STAT 3 — COMMITMENT
  ================================================= */}

  <motion.div
    whileHover={{
      y: -7,
      scale: 1.02,
    }}
    transition={{
      duration: 0.25,
    }}
    className="
      group
      relative
      overflow-hidden
      rounded-[22px]

      border
      border-[#A47B32]/35

      bg-gradient-to-br
      from-white/75
      via-[#FFFDF7]/65
      to-[#EAF4F3]/35

      p-5

      shadow-[0_18px_45px_rgba(11,31,58,0.12)]

      backdrop-blur-md

      transition-all
      duration-300

      hover:border-[#087F8C]/60
      hover:shadow-[0_20px_55px_rgba(8,127,140,0.16)]
    "
  >
    {/* Dual glow */}
    <div
      className="
        pointer-events-none
        absolute
        -right-10
        -top-10
        h-32
        w-32
        rounded-full

        bg-gradient-to-br
        from-[#D8A83E]/20
        to-[#087F8C]/15

        blur-3xl

        transition-all
        duration-500

        group-hover:scale-125
      "
    />

    {/* Top highlight */}
    <div
      className="
        absolute
        left-0
        top-0
        h-[4px]
        w-14
        rounded-r-full

        bg-gradient-to-r
        from-[#8A601C]
        via-[#D8A83E]
        to-[#087F8C]

        shadow-[0_0_12px_rgba(198,161,91,0.4)]

        transition-all
        duration-500

        group-hover:w-full
      "
    />

    <div className="relative flex items-center justify-between">
      {/* Icon */}
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-[14px]

          border
          border-[#A47B32]/25

          bg-gradient-to-br
          from-[#FFF1C2]
          to-[#DDF3F4]

          text-[#8A601C]

          shadow-[0_6px_18px_rgba(173,125,35,0.12)]

          transition-all
          duration-300

          group-hover:border-[#087F8C]/50
          group-hover:bg-gradient-to-br
          group-hover:from-[#D8A83E]
          group-hover:to-[#087F8C]
          group-hover:text-white
          group-hover:shadow-[0_8px_22px_rgba(8,127,140,0.28)]
        "
      >
        <CheckCircle2
          size={21}
          strokeWidth={1.8}
        />
      </div>

      {/* Number */}
      <span
        className="
          text-[11px]
          font-extrabold
          tracking-[0.22em]
          text-[#76501A]/45
        "
      >
        03
      </span>
    </div>

    {/* Main number */}
  <p
  className="
    relative
    mt-6
    text-[34px]
    font-extrabold
    leading-none
    tracking-[-0.06em]
    text-[#102A43]

    drop-shadow-[0_1px_0_rgba(255,255,255,0.95)]
    drop-shadow-[1px_2px_0_rgba(180,188,196,0.75)]
    drop-shadow-[2px_4px_6px_rgba(100,110,120,0.22)]
    drop-shadow-[0_0_10px_rgba(220,225,230,0.45)]
  "
>
  100%
</p>
    {/* Label */}
    <p
      className="
        relative
        mt-2

        text-[10px]
        font-extrabold
        uppercase
        tracking-[0.18em]

        text-[#4A5D70]
      "
    >
      Commitment
    </p>
  </motion.div>
</div>
        </motion.div>

        {/* ===================================================
            RIGHT VISUAL
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            min-h-[430px]
            lg:min-h-[560px]
          "
        >
          {/* =================================================
              TEAL BACKING LAYER
          ================================================= */}

          <div
            className="
              absolute
              right-[-15px]
              top-[55px]
              h-[390px]
              w-[90%]
              rounded-[36px]
              bg-[#087F8C]
              lg:h-[510px]
            "
          />

          {/* =================================================
              IMAGE
          ================================================= */}

          <div
            className="
              absolute
              right-0
              top-[25px]
              z-20
              h-[430px]
              w-[94%]
              overflow-hidden
              rounded-[34px]
              border
              border-white/15
              bg-[#123A5A]
              shadow-[0_35px_90px_rgba(0,0,0,.30)]
              lg:h-[530px]
            "
          >
            <img
              src={aurora_mid_img}
              alt="Northern lights over the Canadian landscape"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* Image Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0B1F3A]/75
                via-[#0B1F3A]/20
                to-transparent
              "
            />

            {/* Teal Tint */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-[#087F8C]/10
                via-transparent
                to-[#0B1F3A]/25
              "
            />

            {/* Image Label */}

            <div
              className="
                absolute
                right-5
                top-5
                rounded-full
                border
                border-white/15
                bg-[#0B1F3A]/60
                px-4
                py-2
                backdrop-blur-md
              "
            >
              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#D8B866]
                "
              >
                Northern Canada
              </span>
            </div>

            {/* Image Location */}

            <div
              className="
                absolute
                bottom-6
                right-6
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-[#0B1F3A]/60
                px-3
                py-2
                backdrop-blur-md
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#6EC6D1]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white/80
                "
              >
                Northern Lights
              </span>
            </div>
          </div>

          {/* =================================================
              MISSION CARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            className="
              absolute
              bottom-[5px]
              left-[-20px]
              z-40
              w-[220px]
              rounded-[22px]
              border
              border-white/10
              bg-[#0B1F3A]/95
              p-5
              shadow-[0_25px_65px_rgba(0,0,0,.35)]
              backdrop-blur-xl
              sm:w-[280px]
              lg:bottom-[25px]
            "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-[12px]
                    bg-gradient-to-br
                    from-[#A47B32]
                    to-[#C6A15B]
                    text-[#0B1F3A]
                  "
                >
                  <Building2
                    size={18}
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[12px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#D8B866]
                    "
                  >
                    Our Mission
                  </p>

                  <p
                    className="
                      mt-1
                      text-[12px]
                      font-medium
                      text-white
                    "
                  >
                    From Strategy to Delivery
                  </p>
                </div>
              </div>

              <CheckCircle2
                size={17}
                className="shrink-0 text-[#6EC6D1]"
              />
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#C6A15B]" />
              <span className="h-[2px] w-3 bg-[#087F8C]" />
            </div>
          </motion.div>

          {/* =================================================
              FLOATING USERS ICON
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[-15px]
              top-[15px]
              z-30
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border
              border-[#C6A15B]/35
              bg-[#0B1F3A]/80
              text-[#D8B866]
              shadow-[0_20px_50px_rgba(0,0,0,.25)]
              backdrop-blur-md
            "
          >
            <UsersRound
              size={32}
              strokeWidth={1.1}
            />
          </motion.div>

          {/* =================================================
              CORNER ACCENT
          ================================================= */}

          <div
            className="
              absolute
              bottom-[-10px]
              left-[-20px]
              z-30
              h-[100px]
              w-[100px]
              bg-gradient-to-br
              from-[#A47B32]
              to-[#087F8C]
            "
            style={{
              clipPath:
                "polygon(0 0, 100% 100%, 0 100%)",
            }}
          />
        </motion.div>
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