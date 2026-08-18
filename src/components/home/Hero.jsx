"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[850px] overflow-hidden bg-[#0B1F3A] lg:min-h-[900px]">

      {/* =========================================
          DECORATIVE BACKGROUND
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          bottom-[-220px]
          h-[500px]
          w-[500px]
          rounded-full
          border-[70px]
          border-[#087F8C]/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[80px]
          left-[100px]
          h-[130px]
          w-[130px]
          opacity-30
        "
        style={{
          backgroundImage:
            "radial-gradient(#087F8C 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[3%]
          top-[180px]
          h-[220px]
          w-[180px]
          opacity-30
        "
        style={{
          backgroundImage:
            "radial-gradient(#087F8C 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* =========================================
          MAIN CONTENT
      ========================================== */}

      <div className="ibs-container relative z-10 pt-[145px] lg:pt-[165px]">

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">

          {/* =====================================
              LEFT CONTENT
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
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
              z-20
              pb-10
              lg:pb-24
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
                delay: 0.35,
                duration: 0.5,
              }}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-[2px] w-[42px] bg-[#C6A15B]" />

              <span className="text-[13px] font-medium uppercase tracking-[0.22em] text-[#C6A15B]">
                Innovative Business Solutions
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                ibs-hero
                max-w-[620px]
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

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="
                ibs-body
                mt-7
                max-w-[570px]
                text-white/70
              "
            >
              Bringing culturally tailored business
              solutions to help Indigenous organizations
              and entrepreneurs achieve their goals
              across Canada and abroad.
            </motion.p>

            {/* Buttons */}

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
                delay: 0.75,
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

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#C6A15B]
                  px-7
                  py-4
                  text-[15px]
                  font-semibold
                  text-[#0B1F3A]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
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
                    group-hover:translate-x-1
                  "
                >
                  <ArrowUpRight size={15} />
                </span>
              </Link>

 <Link
  href="/services"
  className="
    group
    inline-flex
    items-center
    gap-3
    rounded-full
    border
    border-[#087F8C]
    bg-transparent
    px-7
    py-4
    text-[15px]
    font-semibold
    !text-white
    transition-all
    duration-300
    hover:bg-[#087F8C]
    hover:!text-white
  "
>
  <span className="!text-white">
    Our Services
  </span>

  <ArrowRight
    size={18}
    strokeWidth={2}
    className="
      !text-white
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />
</Link>

            </motion.div>

          </motion.div>

          {/* =====================================
              RIGHT IMAGE
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[520px]
              lg:min-h-[650px]
            "
          >

            {/* Teal backing shape */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 0.8,
              }}
              className="
                absolute
                right-[-30px]
                top-[70px]
                h-[470px]
                w-[88%]
                rounded-[60px]
                bg-[#087F8C]/70
                lg:h-[590px]
              "
            />

            {/* Gold circle */}

            <div
              className="
                absolute
                -left-[35px]
                top-[170px]
                z-10
                h-[160px]
                w-[160px]
                rounded-full
                border
                border-[#C6A15B]
                opacity-70
              "
            />

            {/* Image frame */}

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
                right-[5%]
                top-[20px]
                z-20
                h-[500px]
                w-[82%]
                overflow-hidden
                rounded-[45px]
                border
                border-white/30
                bg-[#163455]
                shadow-[0_35px_90px_rgba(0,0,0,0.28)]
                lg:h-[620px]
              "
            >

              <Image
                src="/images/hero/ibs-hero.jpg"
                alt="IBS Group Canada"
                fill
                priority
                className="
                  object-cover
                  transition-transform
                  duration-[2s]
                  hover:scale-105
                "
                sizes="(max-width: 1024px) 80vw, 50vw"
              />

              {/* Image overlay */}

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

            {/* =================================
                FLOATING MISSION CARD
            ================================== */}

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
                delay: 1,
                duration: 0.7,
              }}
              className="
                absolute
                bottom-[20px]
                left-[-10px]
                z-30
                w-[260px]
                rounded-[22px]
                bg-white
                p-5
                shadow-[0_25px_60px_rgba(0,0,0,0.18)]
                lg:bottom-[45px]
                lg:left-[-25px]
                lg:w-[300px]
              "
            >

              <div className="flex gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#087F8C]
                    text-white
                  "
                >
                  <Users size={20} />
                </div>

                <div>
                  <p className="text-[17px] font-semibold text-[#202832]">
                    Our Mission
                  </p>

                  <p className="mt-1 text-[13px] leading-5 text-[#6C7781]">
                    Empowering communities
                    through innovation,
                    collaboration and
                    sustainable growth.
                  </p>
                </div>

              </div>

              <div className="mt-5 h-[2px] w-[40px] bg-[#C6A15B]" />

            </motion.div>

            {/* =================================
                GOLD BADGE
            ================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 1.1,
                duration: 0.7,
                type: "spring",
              }}
              className="
                absolute
                bottom-[30px]
                right-[-5px]
                z-30
                flex
                h-[125px]
                w-[125px]
                items-center
                justify-center
                rounded-full
                border-[2px]
                border-[#C6A15B]
                bg-[#0B1F3A]
                shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                lg:h-[145px]
                lg:w-[145px]
              "
            >

              <div className="text-center">

                <Building2
                  size={27}
                  className="mx-auto mb-2 text-[#C6A15B]"
                />

                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#C6A15B]">
                  Innovative
                </p>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
                  Empowering
                </p>

              </div>

            </motion.div>

            {/* Floating teal icon */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[15%]
                top-[70px]
                z-40
                flex
                h-[65px]
                w-[65px]
                items-center
                justify-center
                rounded-full
                bg-[#087F8C]
                text-white
                shadow-[0_15px_35px_rgba(8,127,140,0.3)]
              "
            >
              <Users size={25} />

            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* =========================================
          CURVED BOTTOM
      ========================================== */}

      <div
        className="
          absolute
          bottom-[-1px]
          left-[-5%]
          h-[85px]
          w-[110%]
          rounded-[50%_50%_0_0]
          bg-[#F6F4EF]
        "
      />

      {/* Scroll indicator */}

      <motion.div
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[20px]
          left-1/2
          z-40
          hidden
          -translate-x-1/2
          flex-col
          items-center
          md:flex
        "
      >

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-[#C6A15B]
            text-[#0B1F3A]
          "
        >
          ↓
        </div>

        <span className="mt-2 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#202832]">
          Scroll Down
        </span>

      </motion.div>

    </section>
  );
}