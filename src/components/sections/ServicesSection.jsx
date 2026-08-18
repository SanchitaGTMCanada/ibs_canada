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
  Settings2,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

const services = [
  {
    number: "01",
    title: "Education & Training",
    shortTitle: "Education",
    description:
      "Building knowledge, capabilities, and practical skills through tailored education and training solutions.",
    icon: GraduationCap,
    color: "#087F8C",
    softColor: "#E0F3F4",
  },
  {
    number: "02",
    title: "Engineering & Technical",
    shortTitle: "Engineering",
    description:
      "Professional technical expertise and practical solutions designed around complex organizational requirements.",
    icon: HardHat,
    color: "#4A789C",
    softColor: "#E5EDF4",
  },
  {
    number: "03",
    title: "Infrastructure",
    shortTitle: "Infrastructure",
    description:
      "Supporting sustainable infrastructure initiatives that strengthen communities and create long-term value.",
    icon: Building2,
    color: "#087F8C",
    softColor: "#E0F3F4",
  },
  {
    number: "04",
    title: "Technology & Innovation",
    shortTitle: "Technology",
    description:
      "Technology-driven solutions that improve operations, connectivity, efficiency, and business performance.",
    icon: Cpu,
    color: "#5A7090",
    softColor: "#E9EEF5",
  },
  {
    number: "05",
    title: "Social & Economic",
    shortTitle: "Social & Economic",
    description:
      "Strategies that support community development, economic participation, and sustainable opportunities.",
    icon: Users,
    color: "#087F8C",
    softColor: "#E0F3F4",
  },
  {
    number: "06",
    title: "Financial Management",
    shortTitle: "Financial",
    description:
      "Financial planning, management, funding assistance, proposal writing, and accounting support.",
    icon: WalletCards,
    color: "#C6A15B",
    softColor: "#FFF3D5",
  },
  {
    number: "07",
    title: "Governance",
    shortTitle: "Governance",
    description:
      "Strategic governance and organizational guidance designed to support stronger decision-making.",
    icon: Landmark,
    color: "#0B1F3A",
    softColor: "#E9EEF4",
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
        bg-[#F6F4EF]
        py-24
        sm:py-28
        lg:py-36
        xl:py-40
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
            gap-12
            lg:grid-cols-[1.25fr_0.75fr]
            lg:gap-16
            xl:grid-cols-[1.2fr_0.8fr]
            xl:gap-20
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
            {/* Soft glow */}

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

            {/* =================================================
                EYEBROW
            ================================================= */}

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
                mb-6
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-[3px]
                  w-12
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

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h2
              className="
                relative
                max-w-[900px]
                text-[45px]
                font-bold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#202832]
                sm:text-[58px]
                md:text-[68px]
                lg:text-[70px]
                xl:text-[82px]
                2xl:text-[88px]
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

                {/* Teal word */}

                <span
                  className="
                    relative
                    ml-3
                    inline-block
                    text-[#087F8C]
                  "
                >
                  {/* Highlight */}

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

                  {/* Gold underline */}

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
                      bottom-[-12px]
                      left-[-2px]
                      h-[5px]
                      rounded-full
                      bg-[#C6A15B]
                    "
                  />
                </span>

                {/* Gold dot */}

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

            {/* =================================================
                DESCRIPTION
            ================================================= */}

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
                mt-10
                max-w-[760px]
                border-l-2
                border-[#C6A15B]
                pl-5
                text-[16px]
                leading-7
                text-[#68737D]
                sm:text-[17px]
                sm:leading-8
              "
            >
              From strategy and technology to
              infrastructure and financial management,
              our capabilities come together to create
              practical solutions with lasting impact.
            </motion.p>

            {/* =================================================
                EXPERTISE BADGE
            ================================================= */}

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
                mt-8
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
              RIGHT — INNOVATION ICON
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.92,
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
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              min-h-[390px]
              items-center
              justify-center
              lg:min-h-[440px]
            "
          >
            {/* =================================================
                SOFT TEAL GLOW
            ================================================= */}

            <div
              className="
                absolute
                h-[330px]
                w-[330px]
                rounded-full
                bg-[radial-gradient(circle,rgba(8,127,140,0.12)_0%,rgba(8,127,140,0.045)_45%,transparent_72%)]
                blur-2xl
              "
            />

            {/* =================================================
                OUTER ORBIT
            ================================================= */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[300px]
                w-[300px]
                rounded-full
                border
                border-dashed
                border-[#087F8C]/30
                sm:h-[340px]
                sm:w-[340px]
              "
            >
              {/* Gold orbit dot */}

              <span
                className="
                  absolute
                  left-[8%]
                  top-[13%]
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[#C6A15B]
                  shadow-[0_0_0_5px_rgba(198,161,91,0.10)]
                "
              />

              {/* Teal orbit dot */}

              <span
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

            {/* =================================================
                CENTER TARGET
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
                relative
                z-20
                flex
                h-[205px]
                w-[205px]
                items-center
                justify-center
                rounded-full
                border
                border-[#087F8C]
                bg-white
                shadow-[0_25px_60px_rgba(11,31,58,0.10)]
                sm:h-[225px]
                sm:w-[225px]
              "
            >
              {/* Rings */}

              <div
                className="
                  absolute
                  inset-[22px]
                  rounded-full
                  border-[3px]
                  border-[#087F8C]/80
                "
              />

              <div
                className="
                  absolute
                  inset-[47px]
                  rounded-full
                  border-[3px]
                  border-[#087F8C]/70
                "
              />

              <div
                className="
                  absolute
                  inset-[70px]
                  rounded-full
                  bg-[#E0F3F4]
                "
              />

              {/* Target icon */}

              <Target
                size={78}
                strokeWidth={1.3}
                className="
                  relative
                  z-10
                  text-[#087F8C]
                "
              />

              {/* Gold arrow */}

              <motion.div
                initial={{
                  rotate: -45,
                }}
                animate={{
                  rotate: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                className="
                  absolute
                  right-[58px]
                  top-[45px]
                  z-20
                "
              >
                <ArrowUpRight
                  size={55}
                  strokeWidth={2.2}
                  className="
                    text-[#C6A15B]
                  "
                />
              </motion.div>
            </motion.div>

            {/* =================================================
                TOP ICON — INNOVATION
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
                duration: 0.5,
                delay: 0.4,
              }}
              className="
                absolute
                left-[50%]
                top-[4px]
                z-30
                flex
                h-[64px]
                w-[64px]
                -translate-x-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#C6A15B]/50
                bg-white
                shadow-[0_12px_30px_rgba(11,31,58,0.08)]
              "
            >
              <Lightbulb
                size={27}
                strokeWidth={1.6}
                className="
                  text-[#C6A15B]
                "
              />
            </motion.div>

            {/* =================================================
                LEFT ICON — COLLABORATION
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.55,
              }}
              className="
                absolute
                left-[4%]
                top-[43%]
                z-30
                flex
                h-[64px]
                w-[64px]
                items-center
                justify-center
                rounded-full
                border
                border-[#087F8C]/40
                bg-white
                shadow-[0_12px_30px_rgba(11,31,58,0.08)]
              "
            >
              <Handshake
                size={27}
                strokeWidth={1.6}
                className="
                  text-[#087F8C]
                "
              />
            </motion.div>

            {/* =================================================
                RIGHT ICON — GROWTH
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.65,
              }}
              className="
                absolute
                right-[3%]
                top-[40%]
                z-30
                flex
                h-[64px]
                w-[64px]
                items-center
                justify-center
                rounded-full
                border
                border-[#087F8C]/40
                bg-white
                shadow-[0_12px_30px_rgba(11,31,58,0.08)]
              "
            >
              <ChartNoAxesCombined
                size={27}
                strokeWidth={1.6}
                className="
                  text-[#087F8C]
                "
              />
            </motion.div>

            {/* =================================================
                BOTTOM ICON — PEOPLE
            ================================================= */}

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
                duration: 0.5,
                delay: 0.75,
              }}
              className="
                absolute
                bottom-[3%]
                left-[50%]
                z-30
                flex
                h-[64px]
                w-[64px]
                -translate-x-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#0B1F3A]/20
                bg-white
                shadow-[0_12px_30px_rgba(11,31,58,0.08)]
              "
            >
              <Users
                size={27}
                strokeWidth={1.6}
                className="
                  text-[#0B1F3A]
                "
              />
            </motion.div>

            {/* =================================================
                SMALL GOLD ACCENTS
            ================================================= */}

            <span
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

            <span
              className="
                absolute
                bottom-[16%]
                left-[18%]
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
            mt-16
            grid
            gap-6
            lg:mt-20
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-8
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
                      py-5
                      text-left
                      transition-all
                      duration-300
                      sm:px-5
                    "
                  >
                    {/* Active background */}

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

                    {/* Number */}

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

                    {/* Icon */}

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

                    {/* Title */}

                    <span
                      className={`
                        relative
                        z-10
                        flex-1
                        text-[16px]
                        font-semibold
                        transition-colors
                        duration-300
                        sm:text-[17px]
                        ${
                          isActive
                            ? "text-[#202832]"
                            : "text-[#59636D]"
                        }
                      `}
                    >
                      {service.title}
                    </span>

                    {/* Arrow */}

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
              min-h-[520px]
              overflow-hidden
              rounded-[34px]
              bg-[#0B1F3A]
              shadow-[0_25px_70px_rgba(11,31,58,0.16)]
            "
          >
            {/* Background circles */}

            <div
              className="
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

            <div
              className="
                absolute
                -right-[20px]
                -top-[20px]
                h-[270px]
                w-[270px]
                rounded-full
                bg-[#087F8C]/[0.13]
              "
            />

            {/* Decorative grid */}

            <div
              className="
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

            {/* Gold bottom line */}

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

            <AnimatePresence
              mode="wait"
            >
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
                  duration: 0.4,
                }}
                className="
                  relative
                  z-10
                  flex
                  min-h-[520px]
                  flex-col
                  justify-between
                  p-8
                  sm:p-10
                  lg:p-12
                "
              >
                {/* TOP */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                  "
                >
                  <div
                    className="
                      flex
                      h-[72px]
                      w-[72px]
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                    "
                    style={{
                      color:
                        active.color,
                    }}
                  >
                    <active.icon
                      size={32}
                      strokeWidth={1.6}
                    />
                  </div>

                  <span
                    className="
                      text-[80px]
                      font-bold
                      leading-none
                      tracking-[-0.08em]
                      text-white/[0.05]
                    "
                  >
                    {active.number}
                  </span>
                </div>

                {/* CONTENT */}

                <div
                  className="
                    max-w-[650px]
                  "
                >
                  <p
                    className="
                      mb-5
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#C6A15B]
                    "
                  >
                    IBS Solutions
                  </p>

                  <h3
                    className="
                      text-[36px]
                      font-bold
                      leading-[1.05]
                      tracking-[-0.035em]
                      text-white
                      sm:text-[44px]
                      lg:text-[50px]
                    "
                  >
                    {active.title}
                  </h3>

                  <p
                    className="
                      mt-6
                      max-w-[550px]
                      text-[16px]
                      leading-7
                      text-white/65
                      sm:text-[17px]
                    "
                  >
                    {active.description}
                  </p>
                </div>

                {/* BOTTOM */}

                <div
                  className="
                    flex
                    flex-wrap
                    items-end
                    justify-between
                    gap-6
                  "
                >
                  <div>
                    <p
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white/40
                      "
                    >
                      Professional
                    </p>

                    <div
                      className="
                        mt-3
                        h-[2px]
                        w-[80px]
                        bg-[#C6A15B]
                      "
                    />
                  </div>

                  <Link
                    href={`/services/${active.shortTitle
                      .toLowerCase()
                      .replaceAll(
                        " ",
                        "-"
                      )
                      .replaceAll(
                        "&",
                        "and"
                      )}`}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-white
                      px-5
                      py-3
                      text-[14px]
                      font-semibold
                      !text-[#0B1F3A]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#C6A15B]
                    "
                  >
                    <span
                      className="
                        !text-[#0B1F3A]
                      "
                    >
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
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      <ArrowUpRight
                        size={14}
                      />
                    </span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM CTA
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
            duration: 0.7,
          }}
          className="
            mt-8
            flex
            flex-col
            items-start
            justify-between
            gap-6
            rounded-[26px]
            border
            border-[#DCE2E7]
            bg-white
            px-6
            py-6
            sm:px-8
            lg:flex-row
            lg:items-center
            lg:px-10
          "
        >
          <div>
            <p
              className="
                text-[19px]
                font-semibold
                tracking-[-0.02em]
                text-[#202832]
              "
            >
              One partner. Multiple capabilities.
            </p>

            <p
              className="
                mt-1
                text-[14px]
                text-[#68737D]
              "
            >
              Tailored professional support for
              organizations and entrepreneurs.
            </p>
          </div>

          <Link
            href="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-3
              rounded-full
              bg-[#087F8C]
              px-6
              py-3.5
              text-[14px]
              font-semibold
              !text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0B1F3A]
            "
          >
            <span className="!text-white">
              Let's work together
            </span>

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
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}