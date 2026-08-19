"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[850px]
        overflow-hidden
        bg-[#0B1F3A]
        lg:min-h-[900px]
      "
    >
      {/* =================================================
          SUBTLE DECORATION
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[220px]
          -left-[180px]
          h-[500px]
          w-[500px]
          rounded-full
          border-[70px]
          border-[#087F8C]/20
        "
      />

      {/* =================================================
          HERO CONTAINER
      ================================================= */}

      <div
        className="
          ibs-container
          relative
          z-10
          pt-[150px]
          pb-[90px]
          lg:pt-[170px]
          lg:pb-[80px]
        "
      >
        {/* =================================================
            50 / 50 GRID
        ================================================= */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-12
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-30
              max-w-[600px]
            "
          >
            {/* Eyebrow */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.5,
              }}
              className="
                mb-7
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-[2px]
                  w-[48px]
                  bg-[#C6A15B]
                "
              />

              <span
                className="
                  text-[13px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-[#C6A15B]
                "
              >
                Innovative Business Solutions
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                ibs-hero
                max-w-[590px]
                text-white
              "
            >
              Building stronger
              <br />

              <span className="text-[#C6A15B]">
                communities
              </span>

              <br />

              through innovation.
            </motion.h1>

            {/* Divider */}

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 100,
              }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              className="
                mt-7
                h-px
                bg-white/20
              "
            />

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.65,
                duration: 0.6,
              }}
              className="
                ibs-body
                mt-6
                max-w-[560px]
                text-white/70
              "
            >
              Bringing culturally tailored
              business solutions to help
              Indigenous organizations and
              entrepreneurs achieve their goals
              across Canada and abroad.
            </motion.p>

            {/* Buttons */}

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
                delay: 0.8,
                duration: 0.6,
              }}
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              {/* Gold CTA */}

              <Link
                href="/contact"
                className="
                  group
                  ibs-btn-gold
                "
              >
                Contact Us

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
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                >
                  <ArrowUpRight size={15} />
                </span>
              </Link>

              {/* Outline */}

              <Link
                href="/services"
                className="
                  group
                  ibs-btn-outline
                "
              >
                <span className="text-white">
                  Our Services
                </span>

                <ArrowRight
                  size={18}
                  className="
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

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
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[540px]
              lg:min-h-[590px]
            "
          >
            {/* =================================================
                TEAL BACKING
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 0.7,
                x: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 0.7,
              }}
              className="
                absolute
                right-[-18px]
                top-[55px]
                h-[460px]
                w-[85%]
                rounded-[40px]
                bg-[#087F8C]
                lg:h-[555px]
              "
            />

            {/* =================================================
                IMAGE
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-0
                top-[30px]
                z-20
                h-[500px]
                w-[94%]
                overflow-hidden
                rounded-[36px]
                border
                border-white/20
                bg-[#163455]
                shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                lg:h-[590px]
              "
            >
              <Image
                src="/images/hero/ibs-hero.jpg"
                alt="IBS Group Canada"
                fill
                priority
                sizes="
                  (max-width: 1024px) 90vw,
                  50vw
                "
                className="
                  object-cover
                  transition-transform
                  duration-[1800ms]
                  hover:scale-105
                "
              />

              {/* Overlay */}

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
                TEAL FLOATING ICON
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[2%]
                top-[80px]
                z-40
                flex
                h-[70px]
                w-[70px]
                items-center
                justify-center
                rounded-full
                bg-[#087F8C]
                text-white
                shadow-[0_15px_35px_rgba(8,127,140,0.3)]
              "
            >
              <Users size={27} />
            </motion.div>

            {/* =================================================
                MISSION CARD
            ================================================= */}

       <motion.div
  initial={{
    opacity: 0,
    y: 25,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.9,
    duration: 0.6,
  }}
  className="
    group
    absolute
    bottom-[25px]
    left-[-15px]
    z-40
    w-[280px]
    overflow-hidden
    rounded-[22px]
    border
    border-[#D8E5E4]
    bg-gradient-to-br
    from-white
    via-white
    to-[#EEF7F6]
    p-5
    shadow-[0_20px_55px_rgba(8,63,70,0.14)]
    backdrop-blur-xl
    transition-all
    duration-500
    hover:-translate-y-1
    hover:border-[#087F8C]/30
    hover:shadow-[0_25px_65px_rgba(8,63,70,0.18)]
    lg:bottom-[35px]
  "
>
  {/* =====================================================
      PREMIUM BACKGROUND GLOW
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      -right-10
      -top-10
      h-[120px]
      w-[120px]
      rounded-full
      bg-[#087F8C]/10
      blur-[35px]
      transition-all
      duration-500
      group-hover:bg-[#C6A15B]/15
    "
  />

  {/* =====================================================
      GOLD SIDE ACCENT
  ===================================================== */}

  <div
    className="
      absolute
      bottom-0
      left-0
      top-0
      w-[3px]
      bg-gradient-to-b
      from-[#C6A15B]
      via-[#087F8C]
      to-[#087F8C]/20
    "
  />

  {/* =====================================================
      CONTENT
  ===================================================== */}

  <div
    className="
      relative
      z-10
      flex
      gap-4
    "
  >
    {/* =================================================
        ICON
    ================================================= */}

    <motion.div
      whileHover={{
        scale: 1.06,
        rotate: 4,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        relative
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        rounded-[14px]
        border
        border-[#087F8C]/20
        bg-[#E4F3F2]
        text-[#087F8C]
        shadow-[0_8px_20px_rgba(8,127,140,0.08)]
        transition-all
        duration-500
        group-hover:border-[#C6A15B]/40
        group-hover:bg-[#F8F1E1]
        group-hover:text-[#A47C2F]
      "
    >
      {/* Inner border */}

      <span
        className="
          absolute
          inset-[5px]
          rounded-[10px]
          border
          border-current
          opacity-10
        "
      />

      <Users
        size={20}
        strokeWidth={1.6}
      />
    </motion.div>

    {/* =================================================
        TEXT
    ================================================= */}

    <div className="min-w-0">
      {/* Label */}

      <div
        className="
          flex
          items-center
          gap-2
        "
      >
        <p
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-[#087F8C]
            transition-colors
            duration-300
            group-hover:text-[#A47C2F]
          "
        >
          Our Mission
        </p>

        <span
          className="
            h-1
            w-1
            shrink-0
            rounded-full
            bg-[#C6A15B]
          "
        />
      </div>

      {/* Description */}

      <p
        className="
          mt-1.5
          text-[13px]
          font-medium
          leading-[1.55]
          tracking-[-0.01em]
          text-[#405158]
        "
      >
        Empowering communities through
        innovation, collaboration and
        sustainable growth.
      </p>
    </div>
  </div>

  {/* =====================================================
      BOTTOM ACCENT
  ===================================================== */}

  <div
    className="
      relative
      z-10
      mt-5
      flex
      items-center
      gap-2
    "
  >
    <div
      className="
        h-[2px]
        w-[42px]
        rounded-full
        bg-gradient-to-r
        from-[#C6A15B]
        to-[#087F8C]
      "
    />

    <div
      className="
        h-[2px]
        w-[8px]
        rounded-full
        bg-[#C6A15B]/30
      "
    />
  </div>

  {/* =====================================================
      SUBTLE SHINE
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-0
      right-0
      h-[1px]
      w-[90px]
      bg-gradient-to-l
      from-[#C6A15B]/40
      to-transparent
    "
  />
</motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}