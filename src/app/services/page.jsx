"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  ArrowDown,
  ArrowRight,
  Building2,
  Coins,
  GraduationCap,
  Landmark,
  Lightbulb,
  Network,
  Scale,
  Sparkles,
  TrendingUp,
  UsersRound,
  Wrench,
   Compass
} from "lucide-react";

/* =========================================================
   ANIMATION
========================================================= */

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease,
    },
  },
};

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    number: "01",
    title: "Education & Training",
    slug: "education-training",
    description:
      "Building knowledge, skills and capacity through culturally tailored education, training and professional development.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=90",
    accent: "#C6A15B",
  },
  {
    number: "02",
    title: "Engineering & Technical",
    slug: "engineering-technical",
    description:
      "Providing technical expertise and professional support to help organizations plan, develop and deliver complex initiatives.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90",
    accent: "#087F8C",
  },
  {
    number: "03",
    title: "Infrastructure",
    slug: "infrastructure",
    description:
      "Supporting infrastructure planning and development with practical, sustainable and community-focused solutions.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90",
    accent: "#C6A15B",
  },
  {
    number: "04",
    title: "Technology & Innovation",
    slug: "technology-innovation",
    description:
      "Using technology, innovation and digital thinking to create stronger systems, better processes and new opportunities.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90",
    accent: "#087F8C",
  },
  {
    number: "05",
    title: "Social & Economic",
    slug: "social-economic",
    description:
      "Supporting social and economic development through research, strategy, collaboration and sustainable growth.",
    icon: UsersRound,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=90",
    accent: "#C6A15B",
  },
  {
    number: "06",
    title: "Financial Management",
    slug: "financial-management",
    description:
      "Helping organizations strengthen financial planning, management, reporting and long-term financial sustainability.",
    icon: Coins,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=90",
    accent: "#087F8C",
  },
  {
    number: "07",
    title: "Governance",
    slug: "governance",
    description:
      "Strengthening governance, accountability, organizational structures and decision-making for long-term success.",
    icon: Scale,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=90",
    accent: "#C6A15B",
  },
];

/* =========================================================
   FLOATING ICON
========================================================= */

function FloatingIcon({
  icon: Icon,
  size = 80,
  className = "",
  duration = 6,
}) {
  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      animate={{
        y: [0, -12, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Icon
        size={size}
        strokeWidth={0.4}
      />
    </motion.div>
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  children,
  light = false,
  gold = false,
}) {
  return (
    <div className="flex items-center gap-3">

      <span
        className={`h-[2px] w-8 sm:w-11 ${
          gold
            ? "bg-[#C6A15B]"
            : light
              ? "bg-[#6DBAC0]"
              : "bg-[#087F8C]"
        }`}
      />

      <span
        className={`text-[8px] font-bold uppercase tracking-[0.25em] sm:text-[9px] sm:tracking-[0.3em] ${
          gold
            ? "text-[#C6A15B]"
            : light
              ? "text-[#6DBAC0]"
              : "text-[#087F8C]"
        }`}
      >
        {children}
      </span>

    </div>
  );
}

/* =========================================================
   SERVICE ITEM
========================================================= */

function ServiceItem({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 0.75,
        delay: index * 0.04,
        ease,
      }}
      className="group relative border-t border-[#202832]/15"
    >

      <Link
        href={`/services/${service.slug}`}
        className="relative block overflow-hidden py-8 sm:py-10 md:py-12 lg:py-14"
      >

        {/* HOVER BACKGROUND */}

        <motion.div
          initial={{
            scaleY: 0,
          }}
          whileHover={{
            scaleY: 1,
          }}
          transition={{
            duration: 0.45,
            ease,
          }}
          className="absolute inset-0 origin-bottom bg-[#0B1F3A]"
        />


        <div className="relative z-10 grid gap-6 sm:grid-cols-[55px_75px_1fr_80px] sm:items-center sm:gap-7 lg:grid-cols-[75px_105px_1fr_100px] lg:gap-9">

          {/* NUMBER */}

          <span className="font-mono text-[9px] tracking-[0.25em] text-[#087F8C] transition-colors duration-500 group-hover:text-[#C6A15B] sm:text-[10px]">
            {service.number}
          </span>


          {/* ICON */}

          <motion.div
            whileHover={{
              scale: 1.12,
              rotate: 7,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 14,
            }}
            className="relative flex h-[68px] w-[68px] items-center justify-center text-[#087F8C] transition-colors duration-500 group-hover:text-[#C6A15B] sm:h-[82px] sm:w-[82px] lg:h-[95px] lg:w-[95px]"
          >

            <Icon
              className="h-[48px] w-[48px] sm:h-[58px] sm:w-[58px] lg:h-[65px] lg:w-[65px]"
              strokeWidth={0.4}
            />

            <span className="absolute inset-0 rounded-full border border-[#087F8C]/10 transition-all duration-500 group-hover:scale-110 group-hover:border-[#C6A15B]/30" />

          </motion.div>


          {/* CONTENT */}

          <div className="min-w-0">

            <h3 className="break-words text-[29px] font-medium leading-[0.95] tracking-[-0.05em] text-[#0B1F3A] transition-colors duration-500 group-hover:text-white sm:text-[38px] md:text-[45px] lg:text-[52px] xl:text-[58px]">
              {service.title}
            </h3>

            <p className="mt-3 max-w-[720px] text-[13px] leading-[1.75] text-[#202832]/55 transition-colors duration-500 group-hover:text-white/55 sm:mt-4 sm:text-[15px] md:text-[16px]">
              {service.description}
            </p>

          </div>


          {/* ARROW */}

          <div className="flex justify-start sm:justify-end">

            <motion.div
              whileHover={{
                x: 8,
                y: -8,
              }}
              className="flex h-11 w-11 items-center justify-center border border-[#202832]/15 text-[#0B1F3A] transition-all duration-500 group-hover:border-[#C6A15B] group-hover:bg-[#C6A15B] group-hover:text-[#0B1F3A] sm:h-14 sm:w-14"
            >

              <ArrowRight
                size={18}
                strokeWidth={1}
              />

            </motion.div>

          </div>

        </div>

      </Link>

    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="w-full max-w-full overflow-hidden">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#0B1F3A]">

          {/* GLOW */}

          <div className="pointer-events-none absolute -right-[220px] -top-[180px] h-[500px] w-[500px] rounded-full bg-[#087F8C]/20 blur-[120px] sm:h-[700px] sm:w-[700px]" />

          <div className="pointer-events-none absolute -bottom-[220px] -left-[200px] h-[450px] w-[450px] rounded-full bg-[#C6A15B]/10 blur-[120px]" />


          {/* LARGE NUMBER */}

          <div className="pointer-events-none absolute right-[-50px] top-[8%] hidden select-none text-white/[0.025] lg:block">

            <span className="text-[34vw] font-medium leading-none tracking-[-0.1em]">
              01
            </span>

          </div>


          {/* ORBIT */}

          <motion.div
            className="pointer-events-none absolute right-[-100px] top-[15%] hidden text-[#087F8C]/10 xl:block"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Network
              size={600}
              strokeWidth={0.25}
            />
          </motion.div>


          {/* FLOATING ICONS */}

          <div className="hidden lg:block">

            <FloatingIcon
              icon={Sparkles}
              size={90}
              duration={5}
              className="absolute right-[42%] top-[16%] text-[#C6A15B]/40"
            />

            <FloatingIcon
              icon={Lightbulb}
              size={80}
              duration={7}
              className="absolute bottom-[17%] right-[6%] text-[#087F8C]/45"
            />

            <FloatingIcon
              icon={Compass}
              size={60}
              duration={6}
              className="absolute left-[5%] top-[35%] text-[#C6A15B]/25"
            />

          </div>


          {/* HERO GRID */}

          <div className="relative z-10 mx-auto grid max-w-[1450px] items-center gap-12 px-4 pb-20 pt-28 min-[360px]:px-5 sm:gap-16 sm:px-8 sm:pb-24 sm:pt-32 lg:min-h-[780px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:py-28">

            {/* LEFT */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="min-w-0"
            >

              <motion.div variants={fadeUp}>
                <SectionLabel light>
                  Our Services
                </SectionLabel>
              </motion.div>


              <motion.h1
                variants={fadeUp}
                className="mt-7 break-words text-[53px] font-medium leading-[0.82] tracking-[-0.075em] text-white min-[360px]:text-[59px] sm:text-[78px] md:text-[92px] lg:text-[110px] xl:text-[125px]"
              >

                Solutions

                <span className="block text-[#C6A15B]">
                  built for
                </span>

                <span className="block">
                  impact.
                </span>

              </motion.h1>


              <motion.div
                variants={fadeUp}
                className="mt-7 flex gap-2"
              >

                <span className="h-[3px] w-14 bg-[#C6A15B]" />

                <span className="h-[3px] w-6 bg-[#087F8C]" />

                <span className="h-[3px] w-3 bg-white/20" />

              </motion.div>


              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-[650px] text-[15px] leading-[1.85] text-[#C4D1D6] sm:mt-8 sm:text-[18px] sm:leading-[1.9]"
              >
                We provide culturally tailored business solutions across
                education, technical services, infrastructure, technology,
                economic development, financial management and governance.
              </motion.p>


              <motion.div
                variants={fadeUp}
                className="mt-8 flex items-center gap-4 sm:mt-10"
              >

                <span className="flex h-10 w-10 items-center justify-center border border-[#C6A15B]/40 text-[#C6A15B] sm:h-12 sm:w-12">
                  <ArrowDown size={17} />
                </span>

                <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/40 sm:text-[9px]">
                  Explore our capabilities
                </span>

              </motion.div>

            </motion.div>


            {/* RIGHT IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                x: 35,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1.1,
                ease,
              }}
              className="relative w-full min-w-0"
            >

              <div className="relative mx-auto w-[91%] sm:w-[88%] lg:w-full">

                <div className="absolute -right-3 -top-3 h-full w-full border border-[#C6A15B]/50 sm:-right-5 sm:-top-5" />

                <div className="absolute -bottom-5 -left-5 h-[45%] w-[45%] bg-[#087F8C] sm:-bottom-7 sm:-left-7" />


                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                  }}
                  className="absolute -right-5 top-[13%] z-30 text-[#C6A15B] sm:-right-8"
                >

                  <Network
                    className="h-[65px] w-[65px] sm:h-[90px] sm:w-[90px] lg:h-[115px] lg:w-[115px]"
                    strokeWidth={0.35}
                  />

                </motion.div>


                <div className="relative z-10 aspect-[0.9] overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90"
                    alt="Professionals collaborating"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/15 to-transparent" />

                  <div className="absolute left-0 top-0 h-full w-[4px] bg-[#C6A15B]" />


                  <div className="absolute bottom-0 left-0 p-5 sm:p-8">

                    <div className="flex items-end gap-3">

                      <span className="text-[68px] font-medium leading-none tracking-[-0.1em] text-[#C6A15B] sm:text-[90px]">
                        07
                      </span>

                      <div className="pb-1">

                        <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#C6A15B] sm:text-[9px]">
                          Service Areas
                        </p>

                        <p className="mt-1 text-[12px] text-white sm:text-[15px]">
                          One purpose. Many capabilities.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#F6F4EF] px-4 py-20 min-[360px]:py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">

          <div className="pointer-events-none absolute right-[-100px] top-[-80px] text-[#087F8C]/[0.05]">

            <Network
              className="h-[300px] w-[300px] sm:h-[450px] sm:w-[450px]"
              strokeWidth={0.25}
            />

          </div>


          <div className="relative z-10 mx-auto max-w-[1350px]">

            <div className="grid gap-8 lg:grid-cols-[0.35fr_1.65fr] lg:gap-12">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >

                <SectionLabel>
                  What We Do
                </SectionLabel>

              </motion.div>


              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >

                <h2 className="max-w-[1050px] break-words text-[39px] font-medium leading-[0.92] tracking-[-0.06em] text-[#202832] min-[360px]:text-[43px] sm:text-[55px] md:text-[68px] lg:text-[85px] xl:text-[96px]">

                  From ideas to implementation,

                  <span className="text-[#087F8C]">
                    {" "}
                    we create solutions that move organizations forward.
                  </span>

                </h2>

                <div className="mt-8 h-[2px] w-full bg-[#202832]/10 sm:mt-10" />

                <p className="mt-6 max-w-[820px] text-[15px] leading-[1.85] text-[#202832]/65 sm:mt-8 sm:text-[18px] sm:leading-[1.9]">
                  Our multidisciplinary service areas allow us to work with
                  communities and organizations across different stages of
                  development, combining strategic thinking with practical
                  execution.
                </p>

              </motion.div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SERVICES LIST
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#F6F4EF] px-4 pb-20 min-[360px]:pb-24 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36">

          <div className="relative z-10 mx-auto max-w-[1350px]">

            {/* TOP LINE */}

            <div className="mb-5 flex items-center justify-between sm:mb-7">

              <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#202832]/35 sm:text-[9px]">
                07 Service Areas
              </span>

              <span className="font-mono text-[9px] text-[#202832]/30">
                IBS / SERVICES
              </span>

            </div>


            {/* SERVICES */}

            <div className="border-b border-[#202832]/15">

              {services.map((service, index) => (
                <ServiceItem
                  key={service.slug}
                  service={service}
                  index={index}
                />
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            FEATURED SERVICE
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#E8D8B8] px-4 py-20 min-[360px]:py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">

          <div className="pointer-events-none absolute right-[-100px] top-[15%] hidden text-[#087F8C]/10 md:block">

            <TrendingUp
              className="h-[450px] w-[450px] lg:h-[600px] lg:w-[600px]"
              strokeWidth={0.25}
            />

          </div>


          <div className="relative z-10 mx-auto max-w-[1350px]">

            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

              {/* IMAGE */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                variants={fadeLeft}
                className="relative h-[350px] overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]"
              >

                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />

                <div className="absolute left-0 top-0 h-full w-[4px] bg-[#C6A15B]" />

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 6, 0, -6, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                  }}
                  className="absolute right-5 top-5 text-[#C6A15B]"
                >

                  <GraduationCap
                    className="h-[90px] w-[90px] sm:h-[125px] sm:w-[125px]"
                    strokeWidth={0.35}
                  />

                </motion.div>


                <div className="absolute bottom-0 left-0 p-6 sm:p-9">

                  <span className="text-[75px] font-medium leading-none tracking-[-0.1em] text-[#C6A15B] sm:text-[110px]">
                    01
                  </span>

                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                    Featured capability
                  </p>

                </div>

              </motion.div>


              {/* CONTENT */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                variants={fadeRight}
              >

                <SectionLabel dark>
                  Featured Service
                </SectionLabel>

                <h2 className="mt-7 max-w-[700px] break-words text-[46px] font-medium leading-[0.84] tracking-[-0.07em] text-[#0B1F3A] min-[360px]:text-[50px] sm:text-[65px] md:text-[78px] lg:text-[90px]">

                  Education

                  <span className="block text-[#087F8C]">
                    & Training
                  </span>

                </h2>

                <div className="mt-7 flex gap-2">

                  <span className="h-[3px] w-14 bg-[#C6A15B]" />

                  <span className="h-[3px] w-6 bg-[#087F8C]" />

                  <span className="h-[3px] w-3 bg-[#0B1F3A]/20" />

                </div>

                <p className="mt-7 max-w-[700px] text-[15px] leading-[1.85] text-[#202832]/70 sm:mt-8 sm:text-[18px]">
                  Building knowledge, skills and capacity through culturally
                  tailored education, training and professional development.
                </p>

                <Link
                  href="/services/education-training"
                  className="group mt-8 inline-flex items-center gap-4 bg-[#0B1F3A] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.22em] text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#087F8C] sm:mt-10 sm:px-7 sm:py-5"
                >

                  Explore Service

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-500 group-hover:translate-x-2"
                  />

                </Link>

              </motion.div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CLOSING
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#0B1F3A] px-4 py-20 min-[360px]:py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">

          <div className="pointer-events-none absolute -right-[150px] -top-[150px] h-[400px] w-[400px] rounded-full bg-[#087F8C]/15 blur-[100px] sm:h-[600px] sm:w-[600px]" />

          <div className="pointer-events-none absolute bottom-[-150px] left-[-100px] h-[350px] w-[350px] rounded-full bg-[#C6A15B]/10 blur-[100px]" />


          <FloatingIcon
            icon={Sparkles}
            size={75}
            duration={5}
            className="absolute right-[8%] top-[20%] text-[#C6A15B]/35"
          />

          <FloatingIcon
            icon={Network}
            size={80}
            duration={7}
            className="absolute bottom-[18%] left-[7%] text-[#087F8C]/35"
          />


          <div className="relative z-10 mx-auto max-w-[1050px] text-center">

            <SectionLabel
              light
            >
              One Purpose
            </SectionLabel>

            <h2 className="mt-7 text-[45px] font-medium leading-[0.86] tracking-[-0.07em] text-white min-[360px]:text-[50px] sm:text-[66px] md:text-[80px] lg:text-[95px]">

              Many capabilities.

              <span className="block text-[#C6A15B]">
                One meaningful direction.
              </span>

            </h2>

            <p className="mx-auto mt-7 max-w-[680px] text-[14px] leading-[1.85] text-white/50 sm:mt-9 sm:text-[17px]">
              Explore our service areas and discover how Innovative Business
              Solutions can support your organization's next stage of growth.
            </p>


            {/* SMALL SERVICE NAV */}

            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-3 sm:mt-12 sm:gap-x-7">

              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-[#C6A15B] sm:text-[9px]"
                >
                  {service.title}
                </Link>
              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}