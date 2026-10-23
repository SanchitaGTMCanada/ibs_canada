"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ArrowDown, GraduationCap } from "lucide-react";

import { useRef } from "react";
import { iconMap } from "./iconMap";



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

  const features = data?.features || [];

  return (
    <section
      ref={ref}
      className="
        relative
        isolate
        min-h-[680px]
        overflow-hidden
        bg-[#EEF5F8]
        sm:min-h-[720px]
        lg:min-h-[780px]
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Full-section background image */}
      <motion.img
        style={{ y: imageY }}
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-[112%] w-full object-cover"
      />

      {/* Light bluish overlays keep navy text readable */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-white/25" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-white/40 via-white/15 to-[#EEF5F8]50" />

      {/* Large teal glow */}

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

      {/* Blue glow */}

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

      {/* Decorative floating circle */}

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
          grid
          min-h-[680px]
          w-full
          items-center
          px-5
          pb-24
          pt-32
          sm:min-h-[820px]
          sm:px-8
lg:px-10
          lg:pt-36
          xl:px-14
        "
      >
        {/* =================================================
            LEFT SIDE
        ================================================== */}

        <div className="relative z-20">
          {/* Label */}

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
            className="
              flex
              items-center
              gap-3
            "
          >
            {/* <span
              className="
                h-[2px]
                w-10
                bg-[#2374A8]
              "
            /> */}

            <span
              className="
                text-[17px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#2374A8]
                sm:text-[17px]
              "

              style={{marginLeft:"10px"}}
            >
              {data.label}
            </span>
          </motion.div>

          {/* Main heading */}

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
              mb-5
              max-w-[780px]
              text-[58px]
              font-medium
              leading-[0.86]
              tracking-[-0.075em]
              text-[#0B2438]
              sm:text-[82px]
              md:text-[96px]
              lg:text-[108px]
              xl:text-[122px]
            "
          >
            {data.title}

            <span
              className="
                block
                text-[#0B2438]
              "
            >
              {data.titleAccent}
            </span>
          </motion.h1>

          {/* Animated accent */}
{/* 
          <motion.div
            initial={
              reduceMotion
                ? {}
                : {
                    width: 0,
                  }
            }
            animate={
              reduceMotion
                ? {}
                : {
                    width: 115,
                  }
            }
            transition={{
              duration: 0.9,
              delay: 0.45,
            }}
            className="
              mt-8
              h-[3px]
              bg-gradient-to-r
              from-[#2374A8]
              via-[#2374A8]
              to-[#087F8C]
            "
          /> */}

          {/* Description */}

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
              mt-7
              max-w-[620px]
              text-[14px]
              leading-[1.9]
              text-[#43515C]
              sm:text-[17px]
            "
          >
            {data.description}
          </motion.p>

          {/* =================================================
              FEATURE ICONS

              IMPORTANT:
              NO BOX
              NO GRID
              NO VERTICAL BORDER
              NO HORIZONTAL BORDER
          ================================================== */}
{/*  */}
        </div>
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