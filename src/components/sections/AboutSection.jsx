"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Operations",
    text: "Smarter processes and stronger day-to-day performance.",
  },
  {
    number: "02",
    title: "Growth",
    text: "Strategies designed to create sustainable revenue opportunities.",
  },
  {
    number: "03",
    title: "Management",
    text: "Strategic planning, financial and organizational support.",
  },
];

const revealUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-36
        xl:py-44
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[10%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#087F8C]/[0.045]
          blur-3xl
        "
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[-200px]
          bottom-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#C6A15B]/[0.04]
          blur-3xl
        "
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* =====================================================
            TOP INTRO
        ===================================================== */}

        <div
          className="
            grid
            items-end
            gap-8
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-16
          "
        >
          {/* Label */}

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-[9px]
                  w-[9px]
                  rounded-full
                  bg-[#C6A15B]
                "
              />

              <span
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#087F8C]
                "
              >
                About our company
              </span>
            </div>

            <div
              className="
                mt-7
                hidden
                h-px
                w-[150px]
                bg-[#DCE2E7]
                lg:block
              "
            />
          </motion.div>

          {/* Heading */}

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <h2
              className="
                text-[42px]
                font-bold
                leading-[1.02]
                tracking-[-0.045em]
                text-[#202832]
                sm:text-[54px]
                md:text-[64px]
                lg:text-[72px]
                xl:text-[82px]
              "
            >
              Business solutions
              <br />

              <span className="text-[#087F8C]">
                with a purpose.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            VISUAL + CONTENT
        ===================================================== */}

        <div
          className="
            relative
            mt-16
            lg:mt-20
          "
        >
          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-20
            "
          >
            {/* =================================================
                IMAGE COLLAGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                min-h-[470px]
                sm:min-h-[570px]
                lg:min-h-[650px]
              "
            >
              {/* Main image */}

              <motion.div
                initial={{
                  scale: 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  left-0
                  top-0
                  h-[82%]
                  w-[76%]
                  overflow-hidden
                  rounded-[36px]
                  bg-[#F6F4EF]
                  shadow-[0_30px_80px_rgba(11,31,58,0.14)]
                  sm:w-[70%]
                  lg:w-[72%]
                "
              >
                <Image
                  src="/images/about/ibs-about.jpg"
                  alt="Innovative Business Solutions"
                  fill
                  priority
                  className="
                    object-cover
                    transition-transform
                    duration-[1400ms]
                    hover:scale-105
                  "
                  sizes="
                    (max-width: 1024px) 85vw,
                    60vw
                  "
                />

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
                  SECOND VISUAL
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                }}
                className="
                  absolute
                  bottom-0
                  right-[2%]
                  h-[46%]
                  w-[48%]
                  overflow-hidden
                  rounded-[30px]
                  border-[8px]
                  border-white
                  bg-[#087F8C]
                  shadow-[0_25px_60px_rgba(11,31,58,0.15)]
                  sm:right-[4%]
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#087F8C]
                    via-[#087F8C]
                    to-[#0B1F3A]
                  "
                />

                <div
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-36
                    w-36
                    rounded-full
                    border
                    border-white/20
                  "
                />

                <div
                  className="
                    absolute
                    bottom-[-35px]
                    left-[-25px]
                    h-28
                    w-28
                    rounded-full
                    border
                    border-[#C6A15B]/50
                  "
                />

                <div
                  className="
                    relative
                    flex
                    h-full
                    flex-col
                    justify-between
                    p-6
                    sm:p-8
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#C6A15B]
                    "
                  >
                    Our approach
                  </span>

                  <p
                    className="
                      max-w-[240px]
                      text-[20px]
                      font-semibold
                      leading-7
                      text-white
                      sm:text-[24px]
                    "
                  >
                    Practical thinking.
                    <br />
                    Professional expertise.
                    <br />
                    Meaningful results.
                  </p>
                </div>
              </motion.div>

              {/* =================================================
                  FLOATING IBS CIRCLE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.6,
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
                  delay: 0.5,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                className="
                  absolute
                  right-[18%]
                  top-[-35px]
                  flex
                  h-[105px]
                  w-[105px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C6A15B]
                  bg-white
                  shadow-[0_15px_40px_rgba(11,31,58,0.08)]
                "
              >
                <div className="text-center">
                  <p
                    className="
                      text-[25px]
                      font-bold
                      leading-none
                      text-[#0B1F3A]
                    "
                  >
                    IBS
                  </p>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#087F8C]
                    "
                  >
                    Canada
                  </p>
                </div>
              </motion.div>

              {/* Gold accent */}

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 100,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                }}
                className="
                  absolute
                  bottom-[5%]
                  left-[4%]
                  h-[3px]
                  rounded-full
                  bg-[#C6A15B]
                "
              />
            </motion.div>

            {/* =================================================
                RIGHT CONTENT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className="
                  mb-7
                  text-[60px]
                  font-bold
                  leading-none
                  text-[#C6A15B]/30
                "
              >
                “
              </div>

              <p
                className="
                  max-w-[580px]
                  text-[23px]
                  font-medium
                  leading-[1.45]
                  tracking-[-0.02em]
                  text-[#202832]
                  sm:text-[27px]
                "
              >
                We provide professional business
                solutions designed around the
                unique needs of organizations and
                entrepreneurs.
              </p>

              <p
                className="
                  mt-7
                  max-w-[580px]
                  text-[16px]
                  leading-[1.75]
                  text-[#68737D]
                "
              >
                Innovative Business Solutions Ltd.
                brings together experienced
                professionals to provide practical,
                culturally tailored solutions for
                Canadian and international Indigenous
                organizations and entrepreneurs.
              </p>

              {/* Highlight */}

              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-4
                  rounded-[18px]
                  bg-[#F6F4EF]
                  px-5
                  py-4
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#087F8C]
                    text-white
                  "
                >
                  <Plus
                    size={18}
                    strokeWidth={2}
                  />
                </span>

                <p
                  className="
                    text-[14px]
                    font-medium
                    leading-5
                    text-[#202832]
                  "
                >
                  One-stop professional service
                  support for organizations and
                  entrepreneurs.
                </p>
              </div>

              {/* CTA */}

              <Link
                href="/about"
                className="
                  group
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#0B1F3A]
                  px-7
                  py-4
                  text-[15px]
                  font-semibold
                  !text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#087F8C]
                  hover:shadow-[0_15px_35px_rgba(8,127,140,0.2)]
                "
              >
                <span className="!text-white">
                  Discover IBS
                </span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#C6A15B]
                    text-[#0B1F3A]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            CAPABILITY CARDS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
            duration: 0.8,
          }}
          className="
            mt-20
            lg:mt-28
          "
        >
          <div
            className="
              grid
              gap-5
              md:grid-cols-3
            "
          >
            {capabilities.map(
              (item, index) => (
                <motion.div
                  key={item.number}
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
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className={`
                    group
                    relative
                    min-h-[320px]
                    overflow-hidden
                    rounded-[30px]
                    border
                    p-7
                    shadow-[0_15px_45px_rgba(11,31,58,0.08)]
                    transition-all
                    duration-500
                    hover:shadow-[0_28px_65px_rgba(11,31,58,0.14)]
                    lg:p-8

                    ${
                      index === 0
                        ? `
                          border-[#087F8C]/20
                          bg-gradient-to-br
                          from-[#D9F1F2]
                          via-[#EDF8F8]
                          to-[#F8FCFC]
                        `
                        : index === 1
                        ? `
                          border-[#087F8C]/16
                          bg-gradient-to-br
                          from-[#E0EAF4]
                          via-[#EFF4F9]
                          to-[#F8FAFC]
                        `
                        : `
                          border-[#C6A15B]/25
                          bg-gradient-to-br
                          from-[#FFF0C9]
                          via-[#FFF6DE]
                          to-[#FFF9EC]
                        `
                    }
                  `}
                >
                  {/* =================================================
                      SOFT COLOR GLOW
                  ================================================= */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-[220px]
                      w-[220px]
                      rounded-full
                      blur-3xl
                      opacity-50
                      transition-all
                      duration-700
                      group-hover:scale-125

                      ${
                        index === 0
                          ? "bg-[#087F8C]/12"
                          : index === 1
                          ? "bg-[#087F8C]/9"
                          : "bg-[#C6A15B]/12"
                      }
                    `}
                  />

                  {/* =================================================
                      OUTER DECORATIVE CIRCLE
                  ================================================= */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-[175px]
                      w-[175px]
                      rounded-full
                      border
                      transition-all
                      duration-700
                      group-hover:scale-125

                      ${
                        index === 0
                          ? "border-[#087F8C]/15"
                          : index === 1
                          ? "border-[#087F8C]/10"
                          : "border-[#C6A15B]/20"
                      }
                    `}
                  />

                  {/* =================================================
                      INNER DECORATIVE CIRCLE
                  ================================================= */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-5
                      -top-5
                      h-[95px]
                      w-[95px]
                      rounded-full
                      transition-all
                      duration-700
                      group-hover:scale-125

                      ${
                        index === 0
                          ? "bg-[#087F8C]/[0.04]"
                          : index === 1
                          ? "bg-[#087F8C]/[0.03]"
                          : "bg-[#C6A15B]/[0.05]"
                      }
                    `}
                  />

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      flex-col
                    "
                  >
                    {/* =================================================
                        TOP ROW
                    ================================================= */}

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                      "
                    >
                      {/* Number */}
{/* Number */}

<div
  className={`
    relative
    flex
    h-[54px]
    w-[54px]
    items-center
    justify-center
    rounded-full
    border-2
    bg-white
    shadow-[0_5px_15px_rgba(11,31,58,0.08)]
    transition-all
    duration-500
    group-hover:scale-110

    ${
      index === 0
        ? `
          border-[#087F8C]
          group-hover:bg-[#087F8C]
        `
        : index === 1
        ? `
          border-[#4A789C]
          group-hover:bg-[#4A789C]
        `
        : `
          border-[#C6A15B]
          group-hover:bg-[#C6A15B]
        `
    }
  `}
>
  <span
    className={`
      text-[13px]
      font-bold
      tracking-[0.08em]
      transition-colors
      duration-300

      ${
        index === 0
          ? "text-[#087F8C] group-hover:text-white"
          : index === 1
          ? "text-[#4A789C] group-hover:text-white"
          : "text-[#C6A15B] group-hover:text-[#0B1F3A]"
      }
    `}
  >
    {item.number}
  </span>

  {/* Soft outer ring */}

  <span
    className={`
      absolute
      -inset-[5px]
      rounded-full
      border
      opacity-40
      transition-all
      duration-500
      group-hover:-inset-[7px]
      group-hover:opacity-70

      ${
        index === 0
          ? "border-[#087F8C]"
          : index === 1
          ? "border-[#4A789C]"
          : "border-[#C6A15B]"
      }
    `}
  />
</div>
                      {/* Arrow */}

                      <div
                        className={`
                          flex
                          h-[46px]
                          w-[46px]
                          items-center
                          justify-center
                          rounded-full
                          border
                          bg-white/80
                          backdrop-blur-sm
                          transition-all
                          duration-500

                          ${
                            index === 2
                              ? "border-[#C6A15B]/30 text-[#0B1F3A]"
                              : "border-[#087F8C]/15 text-[#087F8C]"
                          }

                          group-hover:border-[#C6A15B]
                          group-hover:bg-[#C6A15B]
                          group-hover:text-[#0B1F3A]
                        `}
                      >
                        <ArrowUpRight
                          size={19}
                          strokeWidth={1.8}
                          className="
                            transition-transform
                            duration-500
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                          "
                        />
                      </div>
                    </div>

                    {/* =================================================
                        TITLE + DESCRIPTION
                    ================================================= */}

                    <div className="mt-10">
                      <h3
                        className="
                          text-[25px]
                          font-semibold
                          leading-[1.15]
                          tracking-[-0.025em]
                          text-[#202832]
                          transition-colors
                          duration-300
                          group-hover:text-[#087F8C]
                          lg:text-[28px]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          max-w-[330px]
                          text-[15px]
                          leading-6
                          text-[#59636D]
                        "
                      >
                        {item.text}
                      </p>
                    </div>

                    {/* =================================================
                        BOTTOM ACCENT
                    ================================================= */}

                    <div className="mt-auto pt-8">
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <span
                          className="
                            h-[3px]
                            w-10
                            rounded-full
                            bg-[#C6A15B]
                            transition-all
                            duration-500
                            group-hover:w-20
                          "
                        />

                        <span
                          className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-[#087F8C]
                            opacity-0
                            transition-all
                            duration-500
                            group-hover:opacity-100
                          "
                        >
                          Explore
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      GOLD BOTTOM LINE
                  ================================================= */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-0
                      bg-[#C6A15B]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}