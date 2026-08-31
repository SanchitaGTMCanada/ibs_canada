"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ArrowUpRight,
  GraduationCap,
  HardHat,
  Building2,
  Cpu,
  Users,
  WalletCards,
  Landmark,
  Target,
  Lightbulb,
  Handshake,
  ChartNoAxesCombined,
  Compass
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

const services = [
  {
    number: "01",
    title: "Consulting",
    shortTitle: "Consulting",
    description:
      "Helping leaders make informed decisions and move forward with confidence through strategic, operational, financial, governance and growth-focused consulting.",
    icon: Compass,
    color: "#087F8C",
    softColor: "#E0F3F4",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
  },

  {
    number: "02",
    title: "Project Execution",
    shortTitle: "Project Execution",
    description:
      "Turning strategy and plans into coordinated action through disciplined project planning, resource management, risk control, stakeholder coordination and implementation support.",
    icon: HardHat,
    color: "#4A789C",
    softColor: "#E5EDF4",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85",
  },

  {
    number: "03",
    title: "Financial Management",
    shortTitle: "Financial",
    description:
      "Strengthening financial management through budgeting, forecasting, accounting, financial controls, reporting, audit support and funding assistance.",
    icon: WalletCards,
    color: "#C6A15B",
    softColor: "#FFF3D5",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=85",
  },

  {
    number: "04",
    title: "Corporate Governance",
    shortTitle: "Governance",
    description:
      "Strengthening governance frameworks, organizational structures, policies and performance systems to create greater clarity, accountability and confidence.",
    icon: Landmark,
    color: "#0B1F3A",
    softColor: "#E9EEF4",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=85",
  },

  {
    number: "05",
    title: "Technology & IT Services",
    shortTitle: "Technology & IT",
    description:
      "Providing practical technology, IT infrastructure, digital and creative services tailored to organizational needs, including software, websites, IT operations and modernization.",
    icon: Cpu,
    color: "#087F8C",
    softColor: "#E0F3F4",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
  },

  {
    number: "06",
    title: "Education & Training",
    shortTitle: "Education",
    description:
      "Building the skills organizations and workforces need through industry-focused education, professional designation pathways, executive education and corporate training.",
    icon: GraduationCap,
    color: "#5A7090",
    softColor: "#E9EEF5",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=85",
  },

  {
    number: "07",
    title: "Social & Economic Development",
    shortTitle: "Social & Economic",
    description:
      "Building stronger communities through informed planning, capacity building and sustainable development across social, economic and environmental priorities.",
    icon: Users,
    color: "#087F8C",
    softColor: "#E0F3F4",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
  },

  {
    number: "08",
    title: "Engineering & Technical Services",
    shortTitle: "Engineering",
    description:
      "Supporting clients through technical planning, feasibility analysis, project monitoring, regulatory compliance and risk management from concept to implementation.",
    icon: HardHat,
    color: "#4A789C",
    softColor: "#E5EDF4",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85",
  },

  {
    number: "09",
    title: "Infrastructure & Project Delivery",
    shortTitle: "Infrastructure",
    description:
      "Supporting projects from concept to delivery through project planning, execution, risk management, budgeting, resource allocation, stakeholder coordination and quality control.",
    icon: Building2,
    color: "#087F8C",
    softColor: "#E0F3F4",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85",
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] =
    useState(0);

  const active = services[activeService];

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#9ecbd769]
        py-12
        sm:py-14
        lg:py-16
        xl:py-20
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[5%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#087F8C]/[0.045]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[200px]
          bottom-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#C6A15B]/[0.045]
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN CONTAINER
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
            SERVICES HEADER
        ===================================================== */}

        <div
          className="
            grid
            items-center
            gap-8
            lg:grid-cols-[1.25fr_0.75fr]
            lg:gap-12
            xl:grid-cols-[1.2fr_0.8fr]
            xl:gap-16
          "
        >
          {/* =================================================
              LEFT — MAIN HEADING
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-10
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -left-20
                top-0
                h-[420px]
                w-[650px]
                rounded-full
                bg-[radial-gradient(ellipse_at_center,rgba(8,127,140,0.10)_0%,rgba(8,127,140,0.035)_42%,transparent_72%)]
                blur-3xl
              "
            />

            <motion.div
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
                duration: 0.6,
              }}
              className="
                relative
                mb-5
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
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.26em]
                  text-[#087F8C]
                "
              >
                Built around your needs
              </span>

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#C6A15B]
                "
              />
            </motion.div>

            <h2
              className="
                relative
                max-w-[900px]
                text-[42px]
                font-bold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#202832]
                sm:text-[54px]
                md:text-[64px]
                lg:text-[68px]
                xl:text-[78px]
                2xl:text-[84px]
              "
            >
              <span className="block">
                Expertise that
              </span>

              <span
                className="
                  relative
                  mt-2
                  block
                "
              >
                <span>
                  moves you
                </span>

                <span
                  className="
                    relative
                    ml-3
                    inline-block
                    text-[#087F8C]
                  "
                >
                  <span
                    className="
                      absolute
                      -bottom-1
                      -left-3
                      -right-3
                      top-[15%]
                      -z-10
                      rounded-[12px]
                      bg-[#087F8C]/[0.075]
                    "
                  />

                  forward

                  <motion.span
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width:
                        "calc(100% + 18px)",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    className="
                      absolute
                      bottom-[-10px]
                      left-[-2px]
                      h-[4px]
                      rounded-full
                      bg-[#C6A15B]
                    "
                  />
                </span>

                <motion.span
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.9,
                  }}
                  className="
                    absolute
                    -right-8
                    bottom-2
                    h-3
                    w-3
                    rounded-full
                    bg-[#C6A15B]
                    shadow-[0_0_0_6px_rgba(198,161,91,0.10)]
                  "
                />
              </span>
            </h2>

            <motion.p
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
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                relative
                mt-8
                max-w-[760px]
                border-l-2
                border-[#C6A15B]
                pl-5
                text-[15px]
                leading-7
                text-[#68737D]
                sm:text-[16px]
              "
            >
              From strategy and technology to
              infrastructure and financial management,
              our capabilities come together to create
              practical solutions with lasting impact.
            </motion.p>

            <motion.div
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
                duration: 0.7,
                delay: 0.5,
              }}
              className="
                relative
                mt-6
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#DCE2E7]
                bg-white
                px-4
                py-2.5
                shadow-[0_12px_35px_rgba(11,31,58,0.08)]
              "
            >
              <span
                className="
                  relative
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#087F8C]
                "
              >
                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-white
                  "
                />

                <span
                  className="
                    absolute
                    inset-1
                    rounded-full
                    border
                    border-white/30
                  "
                />
              </span>

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#202832]
                "
              >
                7 areas of expertise
              </span>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT — PREMIUM INNOVATION VISUAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              min-h-[320px]
              items-center
              justify-center
              lg:min-h-[360px]
            "
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[300px]
                w-[300px]
                rounded-full
                bg-[radial-gradient(circle,rgba(8,127,140,0.16)_0%,rgba(8,127,140,0.055)_45%,transparent_72%)]
                blur-2xl
              "
            />

            <motion.div
              animate={{
                scale: [0.9, 1.15, 0.9],
                opacity: [0.08, 0.18, 0.08],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[190px]
                w-[190px]
                rounded-full
                bg-[#C6A15B]
                blur-[90px]
              "
            />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[270px]
                w-[270px]
                rounded-full
                border
                border-dashed
                border-[#087F8C]/25
                sm:h-[300px]
                sm:w-[300px]
              "
            >
              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.65, 1, 0.65],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-[8%]
                  top-[13%]
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[#C6A15B]
                "
              />

              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[14%]
                  right-[8%]
                  h-2
                  w-2
                  rounded-full
                  bg-[#087F8C]
                "
              />
            </motion.div>

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[215px]
                w-[215px]
                rounded-full
                border
                border-[#C6A15B]/20
                sm:h-[240px]
                sm:w-[240px]
              "
            >
              <motion.span
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.7, 1.2, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-[5%]
                  top-[45%]
                  h-2
                  w-2
                  rounded-full
                  bg-[#C6A15B]
                "
              />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[210px]
                w-[210px]
                rounded-full
                border
                border-[#087F8C]/30
              "
            />

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-20
                flex
                h-[185px]
                w-[185px]
                items-center
                justify-center
                rounded-full
                border
                border-[#087F8C]/80
                bg-white
                shadow-[0_30px_80px_rgba(11,31,58,0.13)]
                sm:h-[205px]
                sm:w-[205px]
              "
            >
              <div
                className="
                  absolute
                  inset-[18px]
                  rounded-full
                  border-[2px]
                  border-[#087F8C]/60
                "
              />

              <div
                className="
                  absolute
                  inset-[38px]
                  rounded-full
                  border
                  border-[#087F8C]/30
                "
              />

              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-[58px]
                  rounded-full
                  bg-[#E0F3F4]
                "
              />

              <motion.div
                animate={{
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Target
                  size={64}
                  strokeWidth={1.25}
                  className="text-[#087F8C]"
                />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-[45px]
                  top-[38px]
                  z-20
                "
              >
                <ArrowUpRight
                  size={44}
                  strokeWidth={2}
                  className="text-[#C6A15B]"
                />
              </motion.div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-[-5px]
                z-30
                flex
                h-[56px]
                w-[56px]
                -translate-x-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#C6A15B]/45
                bg-white
                shadow-[0_15px_40px_rgba(11,31,58,0.10)]
              "
            >
              <Lightbulb
                size={25}
                strokeWidth={1.5}
                className="text-[#C6A15B]"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[3%]
                top-[43%]
                z-30
                flex
                h-[56px]
                w-[56px]
                items-center
                justify-center
                rounded-full
                border
                border-[#087F8C]/35
                bg-white
                shadow-[0_15px_40px_rgba(11,31,58,0.10)]
              "
            >
              <Handshake
                size={25}
                strokeWidth={1.5}
                className="text-[#087F8C]"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[2%]
                top-[40%]
                z-30
                flex
                h-[56px]
                w-[56px]
                items-center
                justify-center
                rounded-full
                border
                border-[#087F8C]/35
                bg-white
                shadow-[0_15px_40px_rgba(11,31,58,0.10)]
              "
            >
              <ChartNoAxesCombined
                size={25}
                strokeWidth={1.5}
                className="text-[#087F8C]"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[0%]
                left-1/2
                z-30
                flex
                h-[56px]
                w-[56px]
                -translate-x-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#0B1F3A]/20
                bg-white
                shadow-[0_15px_40px_rgba(11,31,58,0.10)]
              "
            >
              <Users
                size={25}
                strokeWidth={1.5}
                className="text-[#0B1F3A]"
              />
            </motion.div>

            <motion.span
              animate={{
                y: [0, -10, 0],
                opacity: [0.35, 0.9, 0.35],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[18%]
                top-[10%]
                h-2
                w-2
                rounded-full
                bg-[#C6A15B]
              "
            />

            <motion.span
              animate={{
                y: [0, 8, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[16%]
                left-[17%]
                h-1.5
                w-1.5
                rounded-full
                bg-[#087F8C]
              "
            />
          </motion.div>
        </div>

        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            gap-5
            lg:mt-12
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-7
          "
        >
          {/* =================================================
              SERVICE LIST
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              overflow-hidden
              rounded-[30px]
              border
              border-[#DCE2E7]
              bg-white
              p-3
              shadow-[0_20px_60px_rgba(11,31,58,0.06)]
            "
          >
            {services.map(
              (service, index) => {
                const Icon = service.icon;

                const isActive =
                  activeService === index;

                return (
                  <button
                    key={service.number}
                    type="button"
                    onMouseEnter={() =>
                      setActiveService(index)
                    }
                    onFocus={() =>
                      setActiveService(index)
                    }
                    onClick={() =>
                      setActiveService(index)
                    }
                    className="
                      group
                      relative
                      flex
                      w-full
                      items-center
                      gap-4
                      rounded-[22px]
                      px-4
                      py-4
                      text-left
                      transition-all
                      duration-300
                      hover:shadow-[0_8px_25px_rgba(8,127,140,0.06)]
                      sm:px-5
                    "
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeService"
                        className="
                          absolute
                          inset-0
                          rounded-[22px]
                        "
                        style={{
                          backgroundColor:
                            service.softColor,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <span
                      className="
                        relative
                        z-10
                        flex
                        h-[42px]
                        w-[42px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        bg-white
                        text-[11px]
                        font-bold
                        tracking-[0.08em]
                      "
                      style={{
                        borderColor:
                          service.color,
                        color:
                          service.color,
                      }}
                    >
                      {service.number}
                    </span>

                    <span
                      className="
                        relative
                        z-10
                        hidden
                        h-[38px]
                        w-[38px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        sm:flex
                      "
                      style={{
                        color:
                          service.color,
                      }}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                      />
                    </span>

                    <span
                      className={`
                        relative
                        z-10
                        flex-1
                        text-[15px]
                        font-semibold
                        transition-colors
                        duration-300
                        sm:text-[16px]
                        ${
                          isActive
                            ? "text-[#202832]"
                            : "text-[#59636D]"
                        }
                      `}
                    >
                      {service.title}
                    </span>

                    <span
                      className={`
                        relative
                        z-10
                        flex
                        h-[38px]
                        w-[38px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        bg-white
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "border-[#C6A15B] bg-[#C6A15B] text-[#0B1F3A]"
                            : "border-[#DCE2E7] text-[#68737D]"
                        }
                      `}
                    >
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.8}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </span>
                  </button>
                );
              }
            )}
          </motion.div>

          {/* =================================================
              FEATURED SERVICE PANEL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              relative
              min-h-[500px]
              overflow-hidden
              rounded-[34px]
              bg-[#0B1F3A]
              shadow-[0_25px_70px_rgba(11,31,58,0.16)]
            "
          >
            {/* =================================================
                SERVICE BACKGROUND IMAGE
            ================================================= */}

            <AnimatePresence mode="sync">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.title}
                initial={{
                  opacity: 0,
                  scale: 1.10,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />
            </AnimatePresence>

            {/* =================================================
                DARK TEAL OVERLAY
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#031F25]
                via-[#063F46]/85
                to-[#063F46]/30
              "
            />

            {/* =================================================
                IMAGE COLOR TREATMENT
            ================================================= */}

            <motion.div
              key={`color-${active.number}`}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                absolute
                inset-0
                bg-[#063F46]/20
                mix-blend-multiply
              "
            />

            {/* =================================================
                TEAL GLOW
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[100px]
                -top-[100px]
                h-[430px]
                w-[430px]
                rounded-full
                bg-[#087F8C]/25
                blur-[100px]
              "
            />

            {/* =================================================
                GOLD GLOW
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-[120px]
                left-[15%]
                h-[300px]
                w-[300px]
                rounded-full
                bg-[#C6A15B]/10
                blur-[100px]
              "
            />

            {/* =================================================
                DECORATIVE CIRCLE
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[100px]
                -top-[100px]
                h-[430px]
                w-[430px]
                rounded-full
                border
                border-white/10
              "
            />

            {/* =================================================
                DOT PATTERN
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                right-10
                top-10
                h-[180px]
                w-[180px]
                opacity-[0.08]
                [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
                [background-size:12px_12px]
              "
            />

            {/* =================================================
                GOLD BOTTOM ACCENT
            ================================================= */}

            <div
              className="
                absolute
                bottom-0
                left-0
                h-[5px]
                w-[180px]
                bg-[#C6A15B]
              "
            />

            {/* =================================================
                ACTIVE SERVICE CONTENT
            ================================================= */}

            <AnimatePresence mode="wait">
              <motion.div
                key={active.number}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  z-20
                  flex
                  min-h-[500px]
                  flex-col
                  justify-between
                  p-7
                  sm:p-8
                  lg:p-10
                "
              >
                {/* =================================================
                    TOP
                ================================================= */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                  "
                >
                  <motion.div
                    initial={{
                      scale: 0.8,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.1,
                    }}
                    className="
                      flex
                      h-[68px]
                      w-[68px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-white/95
                      shadow-[0_15px_40px_rgba(0,0,0,0.15)]
                    "
                    style={{
                      color: active.color,
                    }}
                  >
                    <active.icon
                      size={30}
                      strokeWidth={1.6}
                    />
                  </motion.div>

                  <span
                    className="
                      text-[70px]
                      font-bold
                      leading-none
                      tracking-[-0.08em]
                      text-white/10
                    "
                  >
                    {active.number}
                  </span>
                </div>

                {/* =================================================
                    MIDDLE CONTENT
                ================================================= */}

                <div
                  className="
                    max-w-[650px]
                  "
                >
                  <motion.p
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.08,
                    }}
                    className="
                      mb-4
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#D7C17A]
                    "
                  >
                    IBS Solutions
                  </motion.p>

                  <h3
                    className="
                      text-[34px]
                      font-bold
                      leading-[1.05]
                      tracking-[-0.035em]
                      text-white
                      sm:text-[42px]
                      lg:text-[48px]
                    "
                  >
                    {active.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-[550px]
                      text-[15px]
                      leading-7
                      text-white/70
                      sm:text-[16px]
                    "
                  >
                    {active.description}
                  </p>
                </div>

                {/* =================================================
                    BOTTOM CONTENT
                ================================================= */}

                <div
                  className="
                    flex
                    flex-wrap
                    items-end
                    justify-between
                    gap-5
                  "
                >
                  <div>
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white/45
                      "
                    >
                      Professional
                    </p>

                    <div
                      className="
                        mt-2
                        h-[2px]
                        w-[70px]
                        bg-[#C6A15B]
                      "
                    />
                  </div>

                  <Link
                    href={`/services/${active.shortTitle
                      .toLowerCase()
                      .replaceAll(" ", "-")
                      .replaceAll("&", "and")}`}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-white/20
                      bg-white
                      px-5
                      py-3
                      text-[13px]
                      font-semibold
                      !text-[#0B1F3A]
                      shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#D7C17A]
                    "
                  >
                    <span className="!text-[#0B1F3A]">
                      Explore service
                    </span>

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-[#087F8C]
                        text-white
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:bg-[#0B1F3A]
                      "
                    >
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2}
                      />
                    </span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* =====================================================
            PREMIUM BOTTOM CTA
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group
            relative
            mt-7
            overflow-hidden
            rounded-[30px]
            border
            border-[#C8D9D7]
            bg-gradient-to-br
            from-[#063F46]
            via-[#087F8C]
            to-[#4FAEB0]
            px-6
            py-6
            shadow-[0_18px_55px_rgba(73,61,39,0.10)]
            sm:px-8
            sm:py-7
            lg:px-10
            lg:py-8
          "
        >
          {/* =================================================
              PREMIUM GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[100px]
              -top-[120px]
              h-[300px]
              w-[300px]
              rounded-full
              bg-[#087F8C]/[0.07]
              blur-[90px]
            "
          />

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -bottom-[100px]
              left-[20%]
              h-[250px]
              w-[250px]
              rounded-full
              bg-[#C6A15B]/10
              blur-[90px]
            "
          />

          {/* Decorative pattern */}

          <div
            className="
              pointer-events-none
              absolute
              right-7
              top-7
              h-[130px]
              w-[180px]
              opacity-[0.12]
              [background-image:radial-gradient(#087F8C_1px,transparent_1px)]
              [background-size:12px_12px]
            "
          />

          {/* Gold top accent */}

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "130px",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-0
              top-0
              h-[3px]
              rounded-r-full
              bg-[#B58B3A]
            "
          />

          {/* =================================================
              CTA CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* LEFT */}

            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              {/* Premium icon */}

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
                  h-[58px]
                  w-[58px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[18px]
                  border
                  border-white/20
                  bg-white/10
                  shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                  backdrop-blur-md
                "
              >
                <span
                  className="
                    absolute
                    inset-[7px]
                    rounded-[13px]
                    border
                    border-white/10
                  "
                />

                <Handshake
                  size={25}
                  strokeWidth={1.4}
                  className="
                    relative
                    z-10
                    text-[#D7C17A]
                  "
                />
              </motion.div>

              <div>
                {/* Eyebrow */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      h-[6px]
                      w-[6px]
                      rounded-full
                      bg-[#D7C17A]
                      shadow-[0_0_10px_rgba(215,193,122,0.7)]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#D7C17A]
                    "
                  >
                    Let's work together
                  </span>
                </div>

                {/* Heading */}

                <h3
                  className="
                    mt-1.5
                    text-[21px]
                    font-semibold
                    tracking-[-0.035em]
                    text-white
                    sm:text-[24px]
                  "
                >
                  One partner.

                  <span
                    className="
                      ml-1.5
                      text-[#B9E8E5]
                    "
                  >
                    Multiple capabilities.
                  </span>
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-1
                    max-w-[560px]
                    text-[12px]
                    leading-5
                    text-white/65
                    sm:text-[13px]
                  "
                >
                  Tailored professional support for
                  organizations and entrepreneurs.
                </p>
              </div>
            </div>

            {/* =================================================
                CTA BUTTON
            ================================================= */}

            <Link
              href="/contact"
              className="
                group/cta
                relative
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-3
                overflow-hidden
                rounded-full
                border
                border-white/20
                bg-white
                px-5
                py-3
                text-[11px]
                font-bold
                uppercase
                tracking-[0.1em]
                !text-[#064951]
                shadow-[0_12px_30px_rgba(0,0,0,0.14)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D7C17A]
                hover:bg-[#D7C17A]
                hover:shadow-[0_18px_38px_rgba(0,0,0,0.18)]
              "
            >
              {/* Shine */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-[80%]
                  w-[45%]
                  rotate-[20deg]
                  bg-white/50
                  blur-md
                  transition-all
                  duration-700
                  group-hover/cta:left-[130%]
                "
              />

              <span
                className="
                  relative
                  z-10
                  !text-[#064951]
                "
              >
                Let's work together
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
                  bg-[#087F8C]
                  text-white
                  transition-all
                  duration-300
                  group-hover/cta:translate-x-1
                  group-hover/cta:bg-[#0B1F3A]
                "
              >
                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                />
              </span>
            </Link>
          </div>

          {/* =================================================
              BOTTOM DETAILS
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[15%]
              h-[1px]
              w-[240px]
              bg-gradient-to-r
              from-transparent
              via-[#B58B3A]/35
              to-transparent
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              h-[2px]
              w-[150px]
              bg-gradient-to-l
              from-[#087F8C]/50
              to-transparent
            "
          />
        </motion.div>
      </div>
    </section>
  );
}