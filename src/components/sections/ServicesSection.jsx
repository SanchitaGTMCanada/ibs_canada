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
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
  const [activeService, setActiveService] = useState(0);

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
            HEADER
        ===================================================== */}

        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.65fr_1.35fr]
            lg:items-end
            lg:gap-20
          "
        >
          {/* LEFT LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
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
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.23em]
                  text-[#087F8C]
                "
              >
                What we do
              </span>
            </div>

            <div
              className="
                mt-7
                h-px
                w-[120px]
                bg-[#DCE2E7]
              "
            />

            <p
              className="
                mt-7
                max-w-[260px]
                text-[14px]
                leading-6
                text-[#68737D]
              "
            >
              Professional solutions built around
              the unique needs of organizations,
              communities, and entrepreneurs.
            </p>
          </motion.div>

          {/* RIGHT HEADING */}

          <motion.div
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2
              className="
                max-w-[850px]
                text-[42px]
                font-bold
                leading-[1.02]
                tracking-[-0.045em]
                text-[#202832]
                sm:text-[54px]
                md:text-[64px]
                lg:text-[70px]
                xl:text-[78px]
              "
            >
              Solutions that create
              <span className="text-[#087F8C]">
                {" "}
                meaningful impact.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            SERVICES EXPERIENCE
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
            {services.map((service, index) => {
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
                  {/* ACTIVE BACKGROUND */}

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

                  {/* NUMBER */}

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
                      color: service.color,
                    }}
                  >
                    {service.number}
                  </span>

                  {/* ICON */}

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
                      color: service.color,
                    }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                    />
                  </span>

                  {/* TITLE */}

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

                  {/* ARROW */}

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
            })}
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
            {/* =================================================
                BACKGROUND SHAPE
            ================================================= */}

            <motion.div
              key={active.number}
              initial={{
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
              }}
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

            <motion.div
              key={`inner-${active.number}`}
              initial={{
                scale: 0.6,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                absolute
                right-[-20px]
                top-[-20px]
                h-[270px]
                w-[270px]
                rounded-full
              "
              style={{
                backgroundColor:
                  `${active.color}22`,
              }}
            />

            {/* GOLD ACCENT */}

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
                CONTENT
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
                      color: active.color,
                    }}
                  >
                    <active.icon
                      size={32}
                      strokeWidth={1.6}
                    />
                  </div>

                  <span
                    className="
                      text-[90px]
                      font-bold
                      leading-none
                      tracking-[-0.08em]
                      text-white/[0.06]
                    "
                  >
                    {active.number}
                  </span>
                </div>

                {/* MIDDLE */}

                <div className="max-w-[650px]">
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
                      .replaceAll(" ", "-")
                      .replaceAll("&", "and")}`}
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
            BOTTOM STATEMENT
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
            delay: 0.15,
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