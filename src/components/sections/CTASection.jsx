"use client";

import { useState } from "react";

import {
  ArrowUpRight,
  LockKeyhole,
  Puzzle,
  Sparkles,
  UsersRound,
  Lightbulb,
  Target,
  ChartNoAxesCombined,
  Building2,
  Cpu,
  ShieldCheck,
  MapPin,
  Network,
} from "lucide-react";

import { motion } from "framer-motion";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("CTA Form:", formData);
  };

  /* =========================================================
     WHY IBS
  ========================================================= */

  const benefits = [
    {
      icon: MapPin,
      title: "Deep Northern Canada Experience",
      text:
        "Deep experience working across Northern Canada and its unique operating environments.",
    },

    {
      icon: Puzzle,
      title: "Client-Tailored Consulting",
      text:
        "Practical consulting solutions designed around each client’s priorities, context and needs.",
    },

    {
      icon: Network,
      title: "Cross-Functional Expertise",
      text:
        "Professional expertise spanning multiple disciplines to address complex organizational challenges.",
    },

    {
      icon: Target,
      title: "Implementation Support",
      text:
        "Support that goes beyond strategy to help clients execute priorities and achieve results.",
    },

    {
      icon: UsersRound,
      title: "Indigenous, Government & Business Experience",
      text:
        "Experience working with Indigenous organizations, governments and businesses across diverse contexts.",
    },

    {
      icon: ShieldCheck,
      title: "Sustainable Outcomes",
      text:
        "A focus on long-term organizational capacity, resilience and sustainable outcomes.",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#0B1F3A]
        via-[#123A5A]
        to-[#087F8C]
        pb-12
        pt-16
        sm:pb-14
        sm:pt-20
        lg:pb-16
        lg:pt-24
        xl:pb-20
        xl:pt-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* =================================================
            MAIN TEAL GLOW
        ================================================= */}

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-[180px]
            -top-[100px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#8DE1DE]/15
            blur-[130px]
          "
        />

        {/* =================================================
            RIGHT TEAL GLOW
        ================================================= */}

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-[170px]
            top-[12%]
            h-[460px]
            w-[460px]
            rounded-full
            bg-[#4FAEB0]/10
            blur-[120px]
          "
        />

        {/* =================================================
            BOTTOM DARK GLOW
        ================================================= */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-180px]
            left-[30%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#011F23]/40
            blur-[120px]
          "
        />

        {/* =================================================
            GRID
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        {/* =================================================
            ORBIT 01
        ================================================= */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-[43%]
            top-[8%]
            h-[520px]
            w-[520px]
            rounded-full
            border
            border-white/[0.06]
          "
        >
          <span
            className="
              absolute
              left-[12%]
              top-[8%]
              h-2
              w-2
              rounded-full
              bg-[#C6A15B]
              shadow-[0_0_18px_rgba(198,161,91,0.8)]
            "
          />

          <span
            className="
              absolute
              bottom-[12%]
              right-[10%]
              h-1.5
              w-1.5
              rounded-full
              bg-[#8DE1DE]
              shadow-[0_0_15px_rgba(141,225,222,0.8)]
            "
          />
        </motion.div>

        {/* =================================================
            ORBIT 02
        ================================================= */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-[47%]
            top-[12%]
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#C6A15B]/[0.08]
          "
        />

        {/* =================================================
            FLOATING ICON 01
        ================================================= */}

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[3%]
            top-[18%]
            hidden
            h-[76px]
            w-[76px]
            items-center
            justify-center
            rounded-[22px]
            border
            border-white/10
            bg-white/[0.06]
            text-[#9CE5E1]/55
            backdrop-blur-md
            lg:flex
          "
        >
          <Target
            size={31}
            strokeWidth={1.2}
          />
        </motion.div>

        {/* =================================================
            FLOATING ICON 02
        ================================================= */}

        <motion.div
          animate={{
            y: [0, 13, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[5%]
            top-[10%]
            hidden
            h-[72px]
            w-[72px]
            items-center
            justify-center
            rounded-full
            border
            border-[#C6A15B]/20
            bg-white/[0.06]
            text-[#D8C27D]/70
            backdrop-blur-md
            lg:flex
          "
        >
          <Lightbulb
            size={29}
            strokeWidth={1.2}
          />
        </motion.div>

        {/* =================================================
            FLOATING ICON 03
        ================================================= */}

        <motion.div
          animate={{
            y: [0, -11, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[22%]
            right-[3%]
            hidden
            h-[78px]
            w-[78px]
            items-center
            justify-center
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.06]
            text-[#9CE5E1]/45
            backdrop-blur-md
            lg:flex
          "
        >
          <ChartNoAxesCombined
            size={32}
            strokeWidth={1.2}
          />
        </motion.div>

        {/* =================================================
            FLOATING ICON 04
        ================================================= */}

        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[13%]
            left-[4%]
            hidden
            h-[66px]
            w-[66px]
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.05]
            text-white/30
            backdrop-blur-md
            lg:flex
          "
        >
          <Building2
            size={27}
            strokeWidth={1.2}
          />
        </motion.div>

        {/* =================================================
            FLOATING ICON 05
        ================================================= */}

        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[8%]
            right-[21%]
            hidden
            h-[54px]
            w-[54px]
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.05]
            text-[#9CE5E1]/30
            backdrop-blur-md
            lg:flex
          "
        >
          <Cpu
            size={23}
            strokeWidth={1.2}
          />
        </motion.div>

        {/* =================================================
            FLOATING ICON 06
        ================================================= */}

        <motion.div
          animate={{
            y: [0, 8, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[28%]
            top-[7%]
            hidden
            h-[52px]
            w-[52px]
            items-center
            justify-center
            rounded-full
            border
            border-[#C6A15B]/15
            bg-white/[0.04]
            text-[#D8C27D]/45
            backdrop-blur-md
            lg:flex
          "
        >
          <Network
            size={22}
            strokeWidth={1.2}
          />
        </motion.div>

        {/* =================================================
            FLOATING ICON 07
        ================================================= */}

        <motion.div
          animate={{
            y: [0, -7, 0],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[14%]
            right-[29%]
            hidden
            h-[48px]
            w-[48px]
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            text-[#9CE5E1]/30
            backdrop-blur-md
            lg:flex
          "
        >
          <ShieldCheck
            size={21}
            strokeWidth={1.2}
          />
        </motion.div>

        {/* =================================================
            PARTICLES
        ================================================= */}

        <motion.span
          animate={{
            y: [0, -13, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[17%]
            top-[12%]
            h-2
            w-2
            rounded-full
            bg-[#C6A15B]
            shadow-[0_0_15px_rgba(198,161,91,0.7)]
          "
        />

        <motion.span
          animate={{
            y: [0, 9, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[28%]
            top-[27%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#9CE5E1]
          "
        />

        <motion.span
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[18%]
            left-[25%]
            h-2
            w-2
            rounded-full
            bg-[#C6A15B]
          "
        />

      </div>

      {/* =====================================================
          TOP EDGE
      ===================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          z-30
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#D7C17A]/40
          to-transparent
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >

        {/* =================================================
            TWO COLUMN LAYOUT
        ================================================= */}

        <div
          className="
            grid
            items-stretch
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
            xl:gap-28
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================= */}

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-30
              flex
              h-full
              flex-col
              justify-between
              pt-3
              lg:min-h-full
              lg:pt-8
            "
          >

            {/* =================================================
                TOP CONTENT
            ================================================= */}

            <div>

              {/* =================================================
                  EYEBROW
              ================================================= */}

              <div className="mb-6 flex items-center gap-4">

                <motion.span
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 48,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  className="
                    h-[3px]
                    rounded-full
                    bg-gradient-to-r
                    from-[#D7C17A]
                    to-[#087F8C]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#BCEBE8]
                  "
                >
                  YOUR NEXT MOVE STARTS HERE
                </span>

              </div>

              {/* =================================================
                  MAIN HEADING
              ================================================= */}

              <h2
                className="
                  max-w-[620px]
                  text-[50px]
                  font-bold
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-white
                  sm:text-[60px]
                  md:text-[66px]
                  lg:text-[70px]
                  xl:text-[80px]
                "
              >

                <motion.span
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.65,
                  }}
                  className="block"
                >
                  Let&apos;s work on
                </motion.span>

                <motion.span
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.1,
                  }}
                  className="
                    block
                    bg-gradient-to-r
                    from-[#E2FAF8]
                    via-[#A9E5E1]
                    to-[#D7C17A]
                    bg-clip-text
                    text-transparent
                  "
                >
                  what&apos;s next
                  <span className="text-[#D7C17A]">
                    .
                  </span>
                </motion.span>

              </h2>

              {/* =================================================
                  ACCENT LINE
              ================================================= */}

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 75,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
                className="
                  mt-7
                  h-[3px]
                  rounded-full
                  bg-gradient-to-r
                  from-[#D7C17A]
                  via-[#9CE5E1]
                  to-transparent
                "
              />

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
                className="
                  mt-6
                  max-w-[560px]
                  text-[14px]
                  leading-7
                  text-white/65
                  sm:text-[15px]
                  sm:leading-7
                "
              >
                Whether you are strengthening governance, improving
                financial performance, planning an investment,
                modernizing operations or building organizational
                capacity, IBS can help define the challenge and move
                toward practical action.
              </motion.p>

            </div>

            {/* =================================================
                WHY IBS
            ================================================= */}

            <div
              className="
                mt-10
                lg:mt-auto
                lg:pt-10
              "
            >

              {/* Heading */}

              <div className="mb-5 flex items-center gap-3">

                <span
                  className="
                    h-[2px]
                    w-8
                    rounded-full
                    bg-gradient-to-r
                    from-[#D7C17A]
                    to-[#087F8C]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-[#BCEBE8]/80
                  "
                >
                  Why IBS
                </span>

              </div>

              {/* =================================================
                  BENEFITS
              ================================================= */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >

                {benefits.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.1,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        y: -3,
                      }}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[16px]
                        border
                        border-white/[0.10]
                        bg-gradient-to-br
                        from-white/[0.075]
                        via-[#087F8C]/[0.045]
                        to-[#061A26]/[0.18]
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:border-[#9CE5E1]/25
                        hover:from-white/[0.10]
                        hover:via-[#087F8C]/[0.07]
                        hover:to-[#061A26]/[0.22]
                      "
                    >

                      {/* =================================================
                          CARD GLOW
                      ================================================= */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-8
                          -top-8
                          h-20
                          w-20
                          rounded-full
                          bg-[#70D5D1]/10
                          blur-[30px]
                          transition-all
                          duration-500
                          group-hover:scale-125
                          group-hover:bg-[#70D5D1]/20
                        "
                      />

                      {/* =================================================
                          CARD CONTENT
                      ================================================= */}

                      <div
                        className="
                          relative
                          z-10
                          flex
                          items-stretch
                          h-full
                        "
              
                      >

                        {/* =================================================
                            LIGHT TEAL ICON PANEL
                        ================================================= */}

                        <motion.div
                          whileHover={{
                            scale: 1.04,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="
                            relative
                            flex
                            min-h-[82px]
                            w-[58px]
                            shrink-0
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-l-[15px]
                            border-r
                            border-[#A9E5E1]/25
                           bg-gradient-to-b
from-[#071A31]
via-[#103B57]
to-[#087F8C]
                            text-[#075D66]
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]
                          "
                        >

                          {/* WHITE GLOW */}

                          <span
                            className="
                              pointer-events-none
                              absolute
                              -right-5
                              -top-5
                              h-16
                              w-16
                              rounded-full
                              bg-white/40
                              blur-[20px]
                              transition-all
                              duration-500
                              group-hover:scale-125
                            "
                          />

                          {/* TEAL GLOW */}

                          <span
                            className="
                              pointer-events-none
                              absolute
                              -bottom-5
                              -left-5
                              h-14
                              w-14
                              rounded-full
                              bg-[#087F8C]/20
                              blur-[18px]
                            "
                          />

                          {/* INNER BORDER */}

                          <span
                            className="
                              absolute
                              inset-[6px]
                              rounded-[10px]
                              border
                              border-white/45
                              transition-all
                              duration-300
                              group-hover:border-white/70
                            "
                             style={{background:"#078c939a"}}
                          />

                          {/* ICON */}

                          <Icon
                            size={19}
                            strokeWidth={1.5}
                            className="
                              relative
                              z-10
                              transition-transform
                              duration-300
                              group-hover:scale-110
                            "
                            style={{color:"white"}}
                          />

                        </motion.div>

                        {/* =================================================
                            TEXT
                        ================================================= */}

                        <div
                          className="
                            min-w-0
                            flex-1
                            px-3.5
                            py-3.5
                            pr-5
                          "
                        >

                          <h4
                            className="
                              pr-4
                              text-[9px]
                              font-bold
                              uppercase
                              leading-4
                              tracking-[0.10em]
                              text-white/80
                              transition-colors
                              duration-300
                              group-hover:text-[#BCEBE8]
                              sm:text-[10px]
                            "
                          >
                            {item.title}
                          </h4>

                          <p
                            className="
                              mt-1
                              text-[10px]
                              leading-[1.5]
                              text-white/40
                              transition-colors
                              duration-300
                              group-hover:text-white/65
                              sm:text-[10.5px]
                            "
                          >
                            {item.text}
                          </p>

                        </div>

                        {/* =================================================
                            ARROW
                        ================================================= */}

                        <ArrowUpRight
                          size={12}
                          strokeWidth={1.3}
                          className="
                            absolute
                            right-3
                            top-3
                            text-white/10
                            transition-all
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:text-[#D7C17A]/80
                          "
                        />

                      </div>

                      {/* =================================================
                          BOTTOM ACCENT
                      ================================================= */}

                      <span
                        className="
                          absolute
                          bottom-0
                          left-0
                          h-[2px]
                          w-0
                          rounded-r-full
                          bg-gradient-to-r
                          from-[#087F8C]
                          via-[#9CE5E1]
                          to-[#D7C17A]
                          transition-all
                          duration-500
                          group-hover:w-14
                        "
                      />

                    </motion.div>
                  );
                })}

              </div>

            </div>

          </motion.div>

          {/* =================================================
              RIGHT SIDE — FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-[100]
              self-stretch
            "
          >

            {/* =================================================
                FORM GLOW
            ================================================= */}

            <motion.div
              animate={{
                scale: [1, 1.025, 1],
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -inset-5
                rounded-[38px]
                bg-[#9CE5E1]/20
                blur-2xl
              "
            />

            {/* =================================================
                FORM CARD
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/20
                bg-[#F4F8F6]
                p-6
                shadow-[0_35px_90px_rgba(0,0,0,0.30)]
                sm:p-8
                lg:p-9
                xl:p-10
              "
            >

              {/* =================================================
                  TEAL HIGHLIGHT
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[80px]
                  -top-[80px]
                  h-[260px]
                  w-[260px]
                  rounded-full
                  bg-[#087F8C]/[0.10]
                  blur-[80px]
                "
              />

              {/* =================================================
                  GOLD HIGHLIGHT
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-100px]
                  left-[20%]
                  h-[260px]
                  w-[260px]
                  rounded-full
                  bg-[#C6A15B]/[0.08]
                  blur-[80px]
                "
              />

              {/* =================================================
                  TOP LINE
              ================================================= */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-[4px]
                  bg-gradient-to-r
                  from-[#063F46]
                  via-[#087F8C]
                  to-[#D7C17A]
                "
              />

              {/* =================================================
                  FORM HEADER
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  mb-7
                  flex
                  items-start
                  justify-between
                  gap-5
                "
              >

                <div>

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#087F8C]
                    "
                  >
                    CONTACT US
                  </p>

                  <h3
                    className="
                      mt-2
                      text-[28px]
                      font-bold
                      leading-tight
                      tracking-[-0.04em]
                      text-[#102A32]
                      sm:text-[32px]
                    "
                  >
                    Let us discuss your priorities.
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[400px]
                      text-[12px]
                      leading-6
                      text-[#65777C]
                    "
                  >
                    Tell us what you are working to achieve.
                    Our team will review your requirements and
                    connect you with the appropriate IBS
                    professional.
                  </p>

                </div>

                {/* =================================================
                    FORM HEADER ICON
                ================================================= */}

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-[18px]
                    border
                    border-[#087F8C]/15
                    bg-white
                    text-[#087F8C]
                    shadow-[0_12px_30px_rgba(8,127,140,0.10)]
                  "
                >

                  <span
                    className="
                      absolute
                      inset-[6px]
                      rounded-[13px]
                      border
                      border-[#C6A15B]/20
                    "
                   
                  />

                  <ArrowUpRight
                    size={23}
                    strokeWidth={1.5}
                    className="relative z-10"
                  />

                </motion.div>

              </div>

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="
                  relative
                  z-10
                  space-y-5
                "
              >

                {/* =================================================
                    NAME
                ================================================= */}

                <div>

                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#53676D]
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    placeholder="Your name"
                    required
                    className={`
                      h-[53px]
                      w-full
                      rounded-[11px]
                      border
                      bg-white
                      px-4
                      text-[14px]
                      text-[#102A32]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#A0ADB0]
                      ${
                        focused === "name"
                          ? "border-[#087F8C] shadow-[0_0_0_4px_rgba(8,127,140,0.08)]"
                          : "border-[#D9E3E2]"
                      }
                    `}
                  />

                </div>

                {/* =================================================
                    PHONE
                ================================================= */}

                <div>

                  <label
                    htmlFor="phone"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#53676D]
                    "
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused("")}
                    placeholder="+1 000 000 0000"
                    required
                    className={`
                      h-[53px]
                      w-full
                      rounded-[11px]
                      border
                      bg-white
                      px-4
                      text-[14px]
                      text-[#102A32]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#A0ADB0]
                      ${
                        focused === "phone"
                          ? "border-[#087F8C] shadow-[0_0_0_4px_rgba(8,127,140,0.08)]"
                          : "border-[#D9E3E2]"
                      }
                    `}
                  />

                </div>

                {/* =================================================
                    EMAIL
                ================================================= */}

                <div>

                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#53676D]
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    placeholder="you@example.com"
                    required
                    className={`
                      h-[53px]
                      w-full
                      rounded-[11px]
                      border
                      bg-white
                      px-4
                      text-[14px]
                      text-[#102A32]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#A0ADB0]
                      ${
                        focused === "email"
                          ? "border-[#087F8C] shadow-[0_0_0_4px_rgba(8,127,140,0.08)]"
                          : "border-[#D9E3E2]"
                      }
                    `}
                  />

                </div>

                {/* =================================================
                    COMMENT
                ================================================= */}

                <div>

                  <label
                    htmlFor="comment"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#53676D]
                    "
                  >
                    Comment
                  </label>

                  <textarea
                    id="comment"
                    name="comment"
                    rows={4}
                    value={formData.comment}
                    onChange={handleChange}
                    onFocus={() => setFocused("comment")}
                    onBlur={() => setFocused("")}
                    placeholder="Tell us a little about your project..."
                    required
                    className={`
                      min-h-[115px]
                      w-full
                      resize-none
                      rounded-[11px]
                      border
                      bg-white
                      px-4
                      py-3.5
                      text-[14px]
                      leading-6
                      text-[#102A32]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#A0ADB0]
                      ${
                        focused === "comment"
                          ? "border-[#087F8C] shadow-[0_0_0_4px_rgba(8,127,140,0.08)]"
                          : "border-[#D9E3E2]"
                      }
                    `}
                  />

                </div>

                {/* =================================================
                    SUBMIT BUTTON
                ================================================= */}

                <motion.button
                  type="submit"
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    relative
                    flex
                    h-[56px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-[11px]
                    bg-gradient-to-r
                    from-[#063F46]
                    via-[#087F8C]
                    to-[#159FA2]
                    px-6
                    font-semibold
                    !text-white
                    shadow-[0_15px_35px_rgba(8,127,140,0.24)]
                    transition-all
                    duration-300
                    hover:shadow-[0_20px_42px_rgba(8,127,140,0.32)]
                  "
                >

                  {/* Shine */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      -left-[100%]
                      top-0
                      h-full
                      w-[60%]
                      skew-x-[-20deg]
                      bg-white/20
                      transition-all
                      duration-700
                      group-hover:left-[120%]
                    "
                  />

                  <span
                    className="
                      relative
                      z-10
                      !text-white
                    "
                  >
                    Let&apos;s Talk
                  </span>

                  <span
                    className="
                      relative
                      z-10
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#D7C17A]
                      !text-[#063F46]
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:bg-[#E3D294]
                    "
                  >
                    <ArrowUpRight
                      size={16}
                      strokeWidth={2}
                    />
                  </span>

                </motion.button>

                {/* =================================================
                    PRIVACY
                ================================================= */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    pt-1
                  "
                >

                  <LockKeyhole
                    size={13}
                    strokeWidth={1.5}
                    className="text-[#087F8C]"
                  />

                  <span
                    className="
                      text-[10px]
                      text-[#7C8C91]
                    "
                  >
                    Your information is safe with us.
                  </span>

                </div>

              </form>

            </div>

          </motion.div>

        </div>

        {/* =====================================================
            BOTTOM DETAIL
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="
            mx-auto
            mt-14
            h-px
            w-[220px]
            origin-center
            bg-gradient-to-r
            from-transparent
            via-[#9CE5E1]/35
            to-transparent
          "
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            mx-auto
            mt-4
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-dashed
            border-[#D7C17A]/40
          "
        >
          <Sparkles
            size={13}
            strokeWidth={1.4}
            className="text-[#D7C17A]"
          />
        </motion.div>

      </div>

    </section>
  );
}