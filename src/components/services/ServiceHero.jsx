
"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function ServiceHero({
  data,
  reduceMotion = false,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const HERO_IMAGE = data.image;

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "12%"]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-[660px]
        overflow-hidden
        bg-[#0B1F3A]
        pl-0
        pr-6
        pb-20
        pt-32
        sm:pr-8
        sm:pt-36
        lg:min-h-[620px]
        lg:pr-10
        lg:pb-24
        lg:pt-40
        xl:pr-12
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <motion.img
        style={{ y: imageY }}
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-0
          h-[112%]
          w-full
          object-cover
        "
      />

      {/* Light bluish overlays */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-white/25
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-gradient-to-r
          from-white/40
          via-white/15
          to-[#EEF5F8]/50
        "
      />

      {/* =====================================================
          LARGE TEAL GLOW
      ====================================================== */}

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                scale: [1, 1.12, 1],
                x: [0, 35, 0],
                y: [0, -25, 0],
              }
        }
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-[200px]
          -top-[200px]
          z-0
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#087F8C]/10
          blur-[110px]
        "
      />

      {/* =====================================================
          BLUE GLOW
      ====================================================== */}

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                scale: [1, 1.08, 1],
                opacity: [0.15, 0.28, 0.15],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[-160px]
          z-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#2374A8]/10
          blur-[100px]
        "
      />

      {/* =====================================================
          DECORATIVE FLOATING CIRCLE
      ====================================================== */}

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          right-[-160px]
          top-[22%]
          z-0
          hidden
          h-[380px]
          w-[380px]
          rounded-full
          border
          border-[#0B2438]/[0.08]
          lg:block
        "
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
      
          w-full
          max-w-[1280px]
          items-center
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? {}
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          animate={
            reduceMotion
              ? {}
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-20
            max-w-[670px]
            px-5
            sm:px-8
            lg:px-10
            xl:px-14
          "

          style={{paddingLeft:"0px"}}
        >
          {/* =================================================
              EYEBROW
          ================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    x: -25,
                  }
            }
            animate={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            transition={{
              duration: 0.8,
            }}
            className="flex items-center gap-3"
          >
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
              style={{ marginLeft: "10px" }}
            >
              {data.label}
            </span>
          </motion.div>

          {/* =================================================
              HEADING
              Same responsive typography as homepage
          ================================================== */}

          <motion.h1
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    y: 35,
                  }
            }
            animate={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-7
              max-w-[780px]
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
              {/* SILVER OUTLINE */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  text-[#66727B]
                  [-webkit-text-stroke:1px_#66727B]
                "
              >
                {data.title}
              </span>

              {/* SOLID BLUE TITLE */}

              <span
                className="
                  relative
                  z-10
                  text-[#0B2438]
                  drop-shadow-[0_2px_2px_rgba(11,36,56,0.20)]
                  drop-shadow-[0_5px_7px_rgba(11,36,56,0.18)]
                "
              >
                {data.title}
              </span>
            </span>

            {data.titleAccent && (
              <span className="relative block">
                {/* SILVER OUTLINE */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    text-[#66727B]
                    [-webkit-text-stroke:1px_#66727B]
                  "
                >
                  {data.titleAccent}
                </span>

                {/* SOLID BLUE ACCENT */}

                <span
                  className="
                    relative
                    z-10
                    text-[#0B2438]
                    drop-shadow-[0_2px_2px_rgba(11,36,56,0.20)]
                    drop-shadow-[0_5px_7px_rgba(11,36,56,0.18)]
                  "
                >
                  {data.titleAccent}
                </span>
              </span>
            )}
          </motion.h1>

          {/* =================================================
              DESCRIPTION
              Same typography as homepage
          ================================================== */}

          <motion.p
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
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
            {data.description}
          </motion.p>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                y: [0, 7, 0],
              }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-7
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          items-center
          gap-3
          text-[#43515C]/75
          lg:flex
        "
      >
        <ArrowDown size={14} />

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.3em]
          "
        >
          Explore
        </span>
      </motion.div>
    </section>
  );
}
