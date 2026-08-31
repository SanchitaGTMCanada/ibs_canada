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
  const auroraImage =
    "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=2400&q=90";

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
          WIDE CINEMATIC AURORA BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden">
        <img
          src={auroraImage}
          alt="Northern lights over the Canadian landscape"
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

        {/* Dark readability overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#06182F]/95
            via-[#0B1F3A]/55
            to-[#0B1F3A]/10
          "
        />

        {/* Wide teal Aurora enhancement */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-[#087F8C]/5
            via-[#087F8C]/25
            to-[#087F8C]/10
            mix-blend-screen
          "
        />

        {/* =================================================
            WIDE HORIZONTAL AURORA GLOW
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

        {/* Second Aurora band */}

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

        {/* Gold atmospheric glow */}

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

        {/* Bottom fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[300px]
            bg-gradient-to-t
            from-[#0B1F3A]
            via-[#0B1F3A]/65
            to-transparent
          "
        />

        {/* Left readability fade */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[60%]
            bg-gradient-to-r
            from-[#06182F]/40
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          SUBTLE BACKGROUND STROKES
          NOT GIANT CIRCLES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-100px]
          top-[15%]
          h-[1px]
          w-[55%]
          rotate-[-3deg]
          bg-gradient-to-r
          from-transparent
          via-[#C6A15B]/20
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-100px]
          top-[34%]
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
          BACKGROUND DOT FIELD
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[20%]
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
          {/* Eyebrow */}

          <div className="flex items-center gap-3">
            <span className="h-[2px] w-12 bg-[#C6A15B]" />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.32em]
                text-[#C6A15B]
              "
            >
              Innovative Business Solutions
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              mt-7
              text-[48px]
              font-semibold
              leading-[0.94]
              tracking-[-0.06em]
              text-white
              sm:text-[62px]
              lg:text-[76px]
              xl:text-[84px]
            "
          >
            Turning complex challenges 

            <span
              className="
                block
                bg-gradient-to-r
                from-[#C6A15B]
                via-[#D8B866]
                to-[#087F8C]
                bg-clip-text
                text-transparent
              "
            >
              into practical progress
            </span>

            {/* <span className="block text-white">
              through innovation.
            </span> */}
          </h1>

          {/* Divider */}

          <div className="mt-7 flex items-center gap-3">
            <span className="h-[2px] w-16 bg-[#C6A15B]" />

            <span className="h-[2px] w-5 bg-[#087F8C]" />
          </div>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-[570px]
              text-[13px]
              leading-7
              text-[#DCE2E7]
              sm:text-[14px]
            "
          >
            We combine strategic thinking, financial expertise, operational discipline, technology and technical capabilities to help organizations make better decisions and build sustainable capacity
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
            {/* Primary */}

            <a
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-4
                rounded-full
                bg-[#C6A15B]
                px-6
                py-3.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#0B1F3A]
                shadow-[0_15px_35px_rgba(0,0,0,.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
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

            {/* Secondary */}

    <a
  href="/services"
  className="
    group
    inline-flex
    items-center
    gap-3
    rounded-full
    border
    border-white/20
    bg-white/[0.05]
    px-6
    py-3.5
    text-[9px]
    font-bold
    uppercase
    tracking-[0.15em]
    !text-white
    backdrop-blur-md
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-[#087F8C]
    hover:bg-[#087F8C]
    hover:!text-white
  "
>
  Explore Our Services

  <ArrowRight
    size={14}
    className="
      !text-white
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

          <div
            className="
              mt-12
              grid
              max-w-[600px]
              grid-cols-1
              gap-3
              sm:grid-cols-3
            "
          >
            {/* STAT 1 */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-white/10
                bg-white/[0.06]
                p-5
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#C6A15B]/40
                hover:bg-white/[0.09]
              "
            >
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[3px]
                  w-10
                  bg-[#C6A15B]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />

              <div className="flex items-center justify-between">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#C6A15B]/10
                    text-[#C6A15B]
                    transition-all
                    duration-300
                    group-hover:bg-[#C6A15B]
                    group-hover:text-[#0B1F3A]
                  "
                >
                  <Building2
                    size={19}
                    strokeWidth={1.4}
                  />
                </div>

                <span className="text-[8px] font-bold tracking-[0.2em] text-white/30">
                  01
                </span>
              </div>

              <p
                className="
                  mt-5
                  text-[28px]
                  font-semibold
                  leading-none
                  tracking-[-0.05em]
                  text-white
                "
              >
                6+
              </p>

              <p
                className="
                  mt-2
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#8FA0AD]
                "
              >
                Service Areas
              </p>
            </motion.div>

            {/* STAT 2 */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-white/10
                bg-white/[0.06]
                p-5
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#087F8C]/50
                hover:bg-white/[0.09]
              "
            >
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[3px]
                  w-10
                  bg-[#087F8C]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />

              <div className="flex items-center justify-between">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#087F8C]/10
                    text-[#087F8C]
                    transition-all
                    duration-300
                    group-hover:bg-[#087F8C]
                    group-hover:text-white
                  "
                >
                  <Clock3
                    size={19}
                    strokeWidth={1.4}
                  />
                </div>

                <span className="text-[8px] font-bold tracking-[0.2em] text-white/30">
                  02
                </span>
              </div>

              <p
                className="
                  mt-5
                  text-[28px]
                  font-semibold
                  leading-none
                  tracking-[-0.05em]
                  text-white
                "
              >
                24/7
              </p>

              <p
                className="
                  mt-2
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#8FA0AD]
                "
              >
                Support
              </p>
            </motion.div>

            {/* STAT 3 */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-white/10
                bg-white/[0.06]
                p-5
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#C6A15B]/40
                hover:bg-white/[0.09]
              "
            >
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[3px]
                  w-10
                  bg-gradient-to-r
                  from-[#C6A15B]
                  to-[#087F8C]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />

              <div className="flex items-center justify-between">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-[#C6A15B]/15
                    to-[#087F8C]/15
                    text-[#C6A15B]
                    transition-all
                    duration-300
                    group-hover:bg-gradient-to-br
                    group-hover:from-[#C6A15B]
                    group-hover:to-[#087F8C]
                    group-hover:text-white
                  "
                >
                  <CheckCircle2
                    size={19}
                    strokeWidth={1.4}
                  />
                </div>

                <span className="text-[8px] font-bold tracking-[0.2em] text-white/30">
                  03
                </span>
              </div>

              <p
                className="
                  mt-5
                  text-[28px]
                  font-semibold
                  leading-none
                  tracking-[-0.05em]
                  text-white
                "
              >
                100%
              </p>

              <p
                className="
                  mt-2
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#8FA0AD]
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
              STILL AURORA IMAGE
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
              src={auroraImage}
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

            {/* Image overlay */}

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

            {/* Aurora tint */}

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

            {/* Image label */}

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
                  text-[#C6A15B]
                "
              >
                Northern Canada
              </span>
            </div>

            {/* Image location */}

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
              <span className="h-1.5 w-1.5 rounded-full bg-[#087F8C]" />

              <span
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white/70
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
          bg-[#C6A15B]
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
            text-[8px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#C6A15B]
          "
        >
          Our Mission
        </p>

        <p
          className="
            mt-1
            text-[10px]
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
      className="shrink-0 text-[#087F8C]"
    />
  </div>

  <div className="mt-4 flex items-center gap-2">
    <span className="h-[2px] w-7 bg-[#C6A15B]" />

    <span className="h-[2px] w-3 bg-[#087F8C]" />
  </div>
</motion.div>

          {/* =================================================
              USERS FLOATING ICON
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
              border-[#C6A15B]/30
              bg-[#0B1F3A]/80
              text-[#C6A15B]
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
              GOLD CORNER
          ================================================= */}

          <div
            className="
              absolute
              bottom-[-10px]
              left-[-20px]
              z-30
              h-[100px]
              w-[100px]
              bg-[#C6A15B]
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
            text-[8px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-[#8FA0AD]
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