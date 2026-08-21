"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  Award,
  CircleDot,
  Compass,
  Eye,
  Globe2,
  Handshake,
  HeartHandshake,
  Lightbulb,
  LockKeyhole,
  MoveUpRight,
  Network,
  Orbit,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Workflow,
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
      duration: 0.75,
      ease,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  children,
  light = false,
  gold = false,
  dark = false,
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-[2px] w-8 sm:w-11 ${
          gold
            ? "bg-[#C6A15B]"
            : light
              ? "bg-[#6DBAC0]"
              : dark
                ? "bg-[#0B1F3A]"
                : "bg-[#087F8C]"
        }`}
      />

      <span
        className={`text-[8px] font-bold uppercase tracking-[0.22em] sm:text-[9px] sm:tracking-[0.28em] ${
          gold
            ? "text-[#C6A15B]"
            : light
              ? "text-[#6DBAC0]"
              : dark
                ? "text-[#0B1F3A]"
                : "text-[#087F8C]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   GIANT NUMBER
========================================================= */

function GiantNumber({ children, className = "" }) {
  return (
    <span
      className={`pointer-events-none select-none font-medium leading-none tracking-[-0.1em] ${className}`}
    >
      {children}
    </span>
  );
}

/* =========================================================
   FLOATING ICON
========================================================= */

function FloatingIcon({
  icon: Icon,
  size = 100,
  className = "",
  duration = 6,
}) {
  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Icon size={size} strokeWidth={0.42} />
    </motion.div>
  );
}

/* =========================================================
   VALUES
========================================================= */

const values = [
  {
    number: "01",
    title: "Integrity",
    description:
      "We act honestly, responsibly and transparently in every relationship, decision and engagement.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Highest standards of service",
    description:
      "We strive for exceptional standards and consistently meaningful service that creates confidence and lasting value.",
    icon: Award,
  },
  {
    number: "03",
    title: "Value addition",
    description:
      "We focus on creating practical outcomes that deliver lasting value for communities, organizations and partners.",
    icon: HeartHandshake,
  },
  {
    number: "04",
    title: "Excellence",
    description:
      "We pursue continuous improvement and excellence in everything we undertake, from strategy to execution.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Respect",
    description:
      "We value people, perspectives, cultures and the communities we serve through thoughtful collaboration.",
    icon: Handshake,
  },
  {
    number: "06",
    title: "Confidentiality",
    description:
      "We protect sensitive information and maintain trust through responsible, disciplined and professional practices.",
    icon: LockKeyhole,
  },
];

/* =========================================================
   WHY IBS
========================================================= */

const advantages = [
  {
    number: "01",
    title: "Project Management",
    text: "Robust scheduling, coordination and timeline management keep every project organized, accountable and moving forward.",
    icon: Target,
  },
  {
    number: "02",
    title: "Resource Efficiency",
    text: "Efficient resource utilization and allocation help create practical, sustainable and measurable outcomes.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Quality Assurance",
    text: "Rigorous quality assurance and control protocols support consistent professional standards throughout every engagement.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Risk Management",
    text: "Thorough risk assessment helps identify challenges early and supports informed, confident decision-making.",
    icon: Compass,
  },
  {
    number: "05",
    title: "Transparent Communication",
    text: "Clear reporting frameworks keep stakeholders informed and aligned throughout the project lifecycle.",
    icon: Network,
  },
  {
    number: "06",
    title: "Lasting Partnerships",
    text: "We focus on relationships built through trust, collaboration, accountability and long-term value.",
    icon: HeartHandshake,
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="w-full max-w-full overflow-hidden">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#0B1F3A]">

          <div className="pointer-events-none absolute -right-[250px] -top-[200px] h-[500px] w-[500px] rounded-full bg-[#087F8C]/20 blur-[120px] sm:h-[650px] sm:w-[650px]" />

          <div className="pointer-events-none absolute -bottom-[220px] -left-[180px] h-[400px] w-[400px] rounded-full bg-[#C6A15B]/10 blur-[120px]" />

          <div className="pointer-events-none absolute right-[-50px] top-[15%] hidden text-white/[0.025] lg:block">
            <GiantNumber className="text-[32vw]">
              01
            </GiantNumber>
          </div>

          <motion.div
            className="pointer-events-none absolute right-[-40px] top-[18%] hidden text-[#087F8C]/10 xl:block"
            animate={{ rotate: 360 }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Orbit
              size={560}
              strokeWidth={0.3}
            />
          </motion.div>

          <div className="relative z-10 mx-auto grid max-w-[1450px] items-center gap-12 px-4 pb-20 pt-28 min-[360px]:px-5 sm:gap-16 sm:px-8 sm:pb-24 sm:pt-32 lg:min-h-[820px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:py-28">

            {/* HERO CONTENT */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="min-w-0"
            >

              <motion.div variants={fadeUp}>
                <SectionLabel light>
                  About Innovative Business Solutions
                </SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 break-words text-[52px] font-medium leading-[0.84] tracking-[-0.075em] text-white min-[360px]:text-[58px] sm:text-[76px] md:text-[90px] lg:text-[105px] xl:text-[120px]"
              >
                Business

                <span className="block text-[#C6A15B]">
                  with
                </span>

                <span className="block">
                  purpose.
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
                className="mt-6 max-w-[620px] text-[15px] leading-[1.8] text-[#C4D1D6] sm:mt-8 sm:text-[18px] sm:leading-[1.85]"
              >
                Innovative Business Solutions is committed to providing
                culturally tailored business solutions that support Indigenous
                communities and organizations.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:items-center"
              >

                <a
                  href="/contact"
                  className="group flex w-fit items-center gap-4 bg-[#C6A15B] px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#0B1F3A] transition-all duration-500 hover:-translate-y-1 hover:bg-white sm:px-7 sm:py-4"
                >
                  Work With Us

                  <span className="flex h-8 w-8 items-center justify-center bg-[#0B1F3A] text-white">
                    <ArrowRight size={14} />
                  </span>
                </a>

                <a
                  href="#mission"
                  className="group flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-[#C6A15B]"
                >
                  Explore Our Story
                  <ArrowDownRight
                    size={16}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </a>

              </motion.div>

            </motion.div>


            {/* HERO IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                x: 35,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                ease,
              }}
              className="relative w-full min-w-0"
            >

              <div className="relative mx-auto w-[90%] sm:w-[88%] lg:w-full">

                <div className="absolute -right-3 -top-3 h-full w-full border border-[#C6A15B]/50 sm:-right-5 sm:-top-5" />

                <div className="absolute -bottom-4 -left-4 h-[45%] w-[45%] bg-[#087F8C] sm:-bottom-6 sm:-left-6" />

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                  }}
                  className="absolute -right-5 top-[12%] z-30 text-[#C6A15B] sm:-right-8"
                >
                  <Award
                    className="h-[65px] w-[65px] sm:h-[90px] sm:w-[90px] lg:h-[110px] lg:w-[110px]"
                    strokeWidth={0.42}
                  />
                </motion.div>

                <div className="relative z-10 aspect-[0.9] overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90"
                    alt="Business professionals working together"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/10 to-transparent" />

                  <div className="absolute left-0 top-0 h-full w-[3px] bg-[#C6A15B]" />

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 4, 0, -4, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                    }}
                    className="absolute right-4 top-4 text-[#C6A15B]"
                  >
                    <UsersRound
                      className="h-[65px] w-[65px] sm:h-[90px] sm:w-[90px]"
                      strokeWidth={0.42}
                    />
                  </motion.div>

                  <div className="absolute bottom-0 left-0 p-5 sm:p-8">

                    <div className="flex items-end gap-3">

                      <span className="text-[62px] font-medium leading-none tracking-[-0.1em] text-[#C6A15B] sm:text-[80px]">
                        01
                      </span>

                      <div className="pb-1">

                        <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#C6A15B]">
                          Our Approach
                        </p>

                        <p className="mt-1 text-[11px] text-white sm:text-[15px]">
                          People. Purpose. Progress.
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
            PURPOSE
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#F6F4EF] px-4 py-20 min-[360px]:py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">

          <div className="pointer-events-none absolute right-[-100px] top-[-80px] opacity-50 sm:right-[-80px]">

            <Globe2
              className="h-[280px] w-[280px] text-[#087F8C]/10 sm:h-[430px] sm:w-[430px]"
              strokeWidth={0.25}
            />

          </div>

          <FloatingIcon
            icon={Lightbulb}
            size={45}
            duration={6}
            className="absolute left-2 top-[28%] text-[#C6A15B]/45 sm:left-[6%] sm:top-[25%]"
          />

          <div className="relative z-10 mx-auto max-w-[1350px]">

            <div className="grid gap-7 lg:grid-cols-[0.35fr_1.65fr] lg:gap-12">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <SectionLabel dark>
                  Purpose & Direction
                </SectionLabel>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >

                <h2 className="max-w-[1050px] text-[40px] font-medium leading-[0.93] tracking-[-0.06em] text-[#202832] min-[360px]:text-[44px] sm:text-[55px] md:text-[65px] lg:text-[82px] xl:text-[92px]">

                  Creating meaningful impact through

                  <span className="text-[#087F8C]">
                    {" "}
                    purposeful solutions.
                  </span>

                </h2>

                <div className="mt-8 h-[2px] w-full bg-[#202832]/10 sm:mt-10" />

                <p className="mt-6 max-w-[800px] text-[15px] leading-[1.85] text-[#202832]/65 sm:mt-7 sm:text-[18px]">
                  We bring professional expertise, cultural understanding and
                  disciplined execution together to help organizations create
                  meaningful and sustainable progress.
                </p>

              </motion.div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MISSION
        ===================================================== */}

        <section
          id="mission"
          className="relative overflow-hidden bg-[#E8D8B8] px-4 py-16 min-[360px]:py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        >

          <div className="pointer-events-none absolute left-[-60px] top-[-60px] hidden text-[#0B1F3A]/[0.025] md:block">
            <GiantNumber className="text-[30vw]">
              02
            </GiantNumber>
          </div>

          <FloatingIcon
            icon={UsersRound}
            size={45}
            duration={6}
            className="absolute right-4 top-8 text-[#087F8C]/20 sm:right-8 sm:top-10 lg:hidden"
          />

          <div className="relative z-10 mx-auto max-w-[1380px]">

            <div className="grid w-full min-w-0 grid-cols-1 items-center lg:grid-cols-2">

              {/* IMAGE */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeLeft}
                className="group relative h-[300px] w-full overflow-hidden sm:h-[420px] md:h-[500px] lg:h-[580px]"
              >

                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=90"
                  alt="Business team collaboration"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/15 to-transparent" />

                <div className="absolute left-0 top-0 h-full w-[3px] bg-[#C6A15B]" />

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-4, 4, -4],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                  }}
                  className="absolute right-4 top-4 text-[#C6A15B] sm:right-7 sm:top-7"
                >
                  <Target
                    className="h-[70px] w-[70px] sm:h-[110px] sm:w-[110px]"
                    strokeWidth={0.4}
                  />
                </motion.div>

                <div className="absolute bottom-0 left-0 p-5 sm:p-8">

                  <div className="flex items-end gap-3">

                    <span className="text-[68px] font-medium leading-none tracking-[-0.1em] text-[#C6A15B] sm:text-[95px]">
                      02
                    </span>

                    <div className="pb-1">

                      <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#C6A15B]">
                        Our Mission
                      </p>

                      <p className="mt-1 text-[11px] text-white sm:text-[15px]">
                        Purpose driven. Community focused.
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>


              {/* CONTENT */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeRight}
                className="min-w-0 px-0 pt-10 sm:px-5 sm:pt-12 md:px-8 lg:px-12 lg:pt-0 xl:px-16"
              >

                <SectionLabel dark>
                  Mission
                </SectionLabel>

                <h2 className="mt-6 max-w-[650px] break-words text-[45px] font-medium leading-[0.84] tracking-[-0.07em] text-[#0B1F3A] min-[360px]:text-[48px] sm:text-[60px] md:text-[70px] lg:text-[78px] xl:text-[90px]">

                  Empowerment

                  <span className="block text-[#087F8C]">
                    through
                  </span>

                  <span className="block">
                    action.
                  </span>

                </h2>

                <div className="mt-7 flex gap-2">

                  <span className="h-[3px] w-12 bg-[#C6A15B]" />

                  <span className="h-[3px] w-5 bg-[#087F8C]" />

                  <span className="h-[3px] w-2 bg-[#0B1F3A]/20" />

                </div>

                <p className="mt-6 max-w-[680px] text-[15px] leading-[1.85] text-[#202832]/70 sm:mt-8 sm:text-[17px] md:text-[18px] lg:text-[19px]">
                  Bring culturally tailored business solutions to help achieve
                  the contemporary mandates of the Indigenous people across
                  Canada and abroad by assisting Indigenous communities in
                  their persistent effort of social, political, economic
                  empowerment and right to self-determination.
                </p>

                <div className="mt-8 flex items-center gap-5 sm:mt-10 sm:gap-7">

                  <Target
                    className="h-10 w-10 text-[#087F8C] sm:h-14 sm:w-14"
                    strokeWidth={0.42}
                  />

                  <UsersRound
                    className="h-10 w-10 text-[#0B1F3A] sm:h-14 sm:w-14"
                    strokeWidth={0.42}
                  />

                  <Handshake
                    className="h-10 w-10 text-[#C6A15B] sm:h-14 sm:w-14"
                    strokeWidth={0.42}
                  />

                </div>

              </motion.div>

            </div>

          </div>

        </section>


        {/* =====================================================
            VISION
        ===================================================== */}

        <section
          id="vision"
          className="relative overflow-hidden bg-[#087F8C] px-4 py-20 min-[360px]:py-24 sm:px-8 sm:py-28 md:px-10 lg:px-12 lg:py-36"
        >

          <div className="pointer-events-none absolute bottom-[-80px] left-[-20px] hidden text-white/[0.035] md:block">
            <GiantNumber className="text-[34vw]">
              03
            </GiantNumber>
          </div>

          <motion.div
            className="pointer-events-none absolute -right-[100px] -top-[100px] hidden text-white/[0.04] sm:block"
            animate={{
              rotate: [0, 8, 0, -8, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
            }}
          >
            <Eye
              className="h-[380px] w-[380px] md:h-[500px] md:w-[500px]"
              strokeWidth={0.3}
            />
          </motion.div>

          <div className="relative z-10 mx-auto max-w-[1380px]">

            <div className="grid w-full min-w-0 grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16">

              {/* CONTENT */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="min-w-0"
              >

                <SectionLabel gold>
                  Our Vision
                </SectionLabel>

                <h2
                  className="
                    mt-6
                    max-w-full
                    break-words
                    text-[44px]
                    font-medium
                    leading-[0.85]
                    tracking-[-0.065em]
                    text-white

                    min-[360px]:text-[48px]
                    sm:text-[62px]
                    md:text-[75px]
                    lg:text-[86px]
                    xl:text-[100px]
                  "
                >
                  Empowerment

                  <span className="block text-[#C6A15B]">
                    through
                  </span>

                  <span className="block">
                    opportunity.
                  </span>
                </h2>

                <div className="mt-7 flex gap-2">

                  <span className="h-[3px] w-12 bg-[#C6A15B]" />

                  <span className="h-[3px] w-5 bg-white/60" />

                  <span className="h-[3px] w-2 bg-white/30" />

                </div>

                <p className="mt-6 max-w-[760px] text-[15px] leading-[1.85] text-white/75 sm:mt-8 sm:text-[17px] md:text-[19px]">
                  We are committed to the process of empowerment of Indigenous
                  communities in achieving their political, economic and
                  community development objectives by providing customised
                  training, financial and operational management support, and
                  conducting research, which will assist in the development of
                  long-term strategic direction.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-5">

                  <div className="border-t border-white/20 pt-4">

                    <Target
                      className="h-8 w-8 text-[#C6A15B] sm:h-11 sm:w-11"
                      strokeWidth={0.4}
                    />

                    <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.15em] text-white sm:text-[10px]">
                      Purpose
                    </p>

                  </div>

                  <div className="border-t border-white/20 pt-4">

                    <UsersRound
                      className="h-8 w-8 text-white sm:h-11 sm:w-11"
                      strokeWidth={0.4}
                    />

                    <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.15em] text-white sm:text-[10px]">
                      People
                    </p>

                  </div>

                  <div className="border-t border-white/20 pt-4">

                    <Rocket
                      className="h-8 w-8 text-[#C6A15B] sm:h-11 sm:w-11"
                      strokeWidth={0.4}
                    />

                    <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.15em] text-white sm:text-[10px]">
                      Progress
                    </p>

                  </div>

                </div>

              </motion.div>


              {/* ORBIT */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.9,
                  ease,
                }}
                className="
                  relative
                  flex
                  h-[275px]
                  w-full
                  max-w-full
                  items-center
                  justify-center

                  min-[360px]:h-[300px]

                  sm:h-[390px]

                  md:h-[460px]

                  lg:h-[500px]
                "
              >

                {/* OUTER */}

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    h-[175px]
                    w-[175px]
                    rounded-full
                    border
                    border-white/20

                    min-[360px]:h-[195px]
                    min-[360px]:w-[195px]

                    sm:h-[290px]
                    sm:w-[290px]

                    md:h-[350px]
                    md:w-[350px]

                    lg:h-[390px]
                    lg:w-[390px]
                  "
                >

                  <span className="absolute right-[-3px] top-1/2 h-2 w-2 rounded-full bg-[#C6A15B] sm:h-4 sm:w-4" />

                  <span className="absolute bottom-[10%] left-[14%] h-1.5 w-1.5 rounded-full bg-white/70 sm:h-3 sm:w-3" />

                </motion.div>


                {/* INNER */}

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 19,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    h-[125px]
                    w-[125px]
                    rounded-full
                    border
                    border-white/15

                    min-[360px]:h-[140px]
                    min-[360px]:w-[140px]

                    sm:h-[215px]
                    sm:w-[215px]

                    md:h-[260px]
                    md:w-[260px]

                    lg:h-[290px]
                    lg:w-[290px]
                  "
                >

                  <span className="absolute left-[-2px] top-1/2 h-1.5 w-1.5 rounded-full bg-white sm:h-3 sm:w-3" />

                  <span className="absolute bottom-[18%] right-[8%] h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />

                </motion.div>


                {/* EYE */}

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="relative z-20 text-[#C6A15B]"
                >

                  <Eye
                    className="
                      h-[65px]
                      w-[65px]

                      min-[360px]:h-[75px]
                      min-[360px]:w-[75px]

                      sm:h-[120px]
                      sm:w-[120px]

                      md:h-[150px]
                      md:w-[150px]

                      lg:h-[175px]
                      lg:w-[175px]
                    "
                    strokeWidth={0.38}
                  />

                </motion.div>


                <Globe2
                  className="absolute left-[3%] top-[18%] h-6 w-6 text-white/60 sm:left-[7%] sm:h-12 sm:w-12"
                  strokeWidth={0.45}
                />

                <Rocket
                  className="absolute right-[3%] top-[20%] h-6 w-6 text-[#C6A15B] sm:right-[7%] sm:h-12 sm:w-12"
                  strokeWidth={0.45}
                />

                <Sparkles
                  className="absolute bottom-[10%] left-[8%] h-5 w-5 text-white/40 sm:h-9 sm:w-9"
                  strokeWidth={0.45}
                />

              </motion.div>

            </div>

          </div>

        </section>


        {/* =====================================================
            VALUES
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#202832] px-4 py-20 min-[360px]:py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">

          <motion.div
            className="pointer-events-none absolute -left-[150px] top-[5%] hidden text-[#087F8C]/[0.05] md:block"
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
            }}
          >
            <ShieldCheck
              className="h-[500px] w-[500px]"
              strokeWidth={0.25}
            />
          </motion.div>

          <div className="relative z-10 mx-auto max-w-[1350px]">

            <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >

                <SectionLabel gold>
                  What We Stand For
                </SectionLabel>

                <h2 className="mt-6 text-[62px] font-medium leading-[0.78] tracking-[-0.075em] text-white min-[360px]:text-[68px] sm:text-[82px] md:text-[95px] lg:text-[110px]">

                  Our

                  <span className="block text-[#C6A15B]">
                    Values.
                  </span>

                </h2>

              </motion.div>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="max-w-[700px] text-[15px] leading-[1.8] text-white/50 sm:text-[18px] md:text-[19px]"
              >
                We are determined to achieve our Mission and Vision by putting
                these principles at the heart of everything we do.
              </motion.p>

            </div>


            {/* VALUES LIST */}

            <div className="mt-14 sm:mt-20">

              {values.map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
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
                      amount: 0.08,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.04,
                      ease,
                    }}
                    className="group border-t border-white/10 py-7 sm:py-10"
                  >

                    <div className="grid gap-4 sm:grid-cols-[50px_85px_1fr] sm:items-center lg:grid-cols-[70px_110px_0.8fr_1fr] lg:gap-7">

                      <span className="font-mono text-[9px] tracking-[0.2em] text-[#C6A15B] sm:text-[10px]">
                        {item.number}
                      </span>

                      <div className="relative flex h-[65px] w-[65px] items-center justify-center text-[#C6A15B] sm:h-[85px] sm:w-[85px]">

                        <Icon
                          className="h-[48px] w-[48px] sm:h-[65px] sm:w-[65px]"
                          strokeWidth={0.4}
                        />

                        <span className="absolute inset-0 rounded-full border border-[#C6A15B]/10 transition-all duration-500 group-hover:scale-110 group-hover:border-[#C6A15B]/30" />

                      </div>

                      <h3 className="max-w-[480px] text-[25px] font-medium leading-[0.95] tracking-[-0.045em] text-white transition-colors duration-500 group-hover:text-[#C6A15B] sm:text-[31px] md:text-[36px]">
                        {item.title}
                      </h3>

                      <div className="sm:col-span-2 lg:col-span-1">

                        <p className="max-w-[600px] text-[14px] leading-[1.8] text-white/45 sm:text-[16px] md:text-[17px]">
                          {item.description}
                        </p>

                        <div className="mt-4 flex items-center gap-3">

                          <span className="h-[2px] w-8 bg-[#087F8C] sm:w-11" />

                          <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                            IBS
                          </span>

                        </div>

                      </div>

                    </div>

                  </motion.div>
                );

              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY IBS
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#F6F4EF] px-4 py-20 min-[360px]:py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">

          {/* DECORATIVE CIRCLE */}

          <div className="pointer-events-none absolute -right-[170px] -top-[170px] h-[360px] w-[360px] rounded-full bg-[#087F8C] sm:-right-[230px] sm:-top-[230px] sm:h-[520px] sm:w-[520px]" />

          <div className="relative z-10 mx-auto max-w-[1350px]">

            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >

                <SectionLabel dark>
                  Why IBS
                </SectionLabel>

                <h2 className="mt-6 text-[65px] font-medium leading-[0.76] tracking-[-0.08em] text-[#0B1F3A] min-[360px]:text-[70px] sm:text-[88px] md:text-[105px] lg:text-[115px]">

                  Why

                  <span className="block text-[#087F8C]">
                    IBS?
                  </span>

                </h2>

              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >

                <p className="max-w-[760px] text-[15px] leading-[1.85] text-[#202832]/65 sm:text-[18px] md:text-[19px]">
                  We combine professional expertise, disciplined project
                  management and culturally informed solutions to create
                  meaningful and sustainable outcomes.
                </p>

                <div className="mt-6 flex items-center gap-4">

                  <span className="h-[3px] w-12 bg-[#C6A15B]" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#202832]/50">
                    The IBS Advantage
                  </span>

                </div>

              </motion.div>

            </div>


            {/* ADVANTAGES */}

            <div className="mt-14 grid gap-10 sm:mt-20 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">

              {/* IMAGE */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeLeft}
                className="relative h-[330px] overflow-hidden sm:h-[450px] md:h-[520px] lg:h-[590px]"
              >

                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=90"
                  alt="Professional business team collaborating"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                  }}
                  className="absolute right-5 top-5 text-[#C6A15B]"
                >
                  <ShieldCheck
                    className="h-[85px] w-[85px] sm:h-[120px] sm:w-[120px]"
                    strokeWidth={0.38}
                  />
                </motion.div>

                <div className="absolute bottom-4 left-5 sm:bottom-7 sm:left-7">

                  <span className="text-[80px] font-medium leading-none tracking-[-0.1em] text-[#C6A15B] sm:text-[110px]">
                    04
                  </span>

                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white sm:text-[10px]">
                    The IBS Advantage
                  </p>

                </div>

              </motion.div>


              {/* LIST */}

              <div className="min-w-0">

                {advantages.map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      initial={{
                        opacity: 0,
                        x: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.08,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.04,
                        ease,
                      }}
                      className="group border-b border-[#202832]/15 py-6 sm:py-7"
                    >

                      <div className="flex gap-4 sm:gap-5">

                        <span className="w-6 shrink-0 pt-2 font-mono text-[8px] text-[#202832]/40 sm:w-8 sm:text-[9px]">
                          {item.number}
                        </span>

                        <motion.div
                          whileHover={{
                            scale: 1.1,
                            rotate: 6,
                          }}
                          className="flex h-[48px] w-[48px] shrink-0 items-center justify-center text-[#087F8C] sm:h-[62px] sm:w-[62px]"
                        >

                          <Icon
                            className="h-[38px] w-[38px] sm:h-[50px] sm:w-[50px]"
                            strokeWidth={0.45}
                          />

                        </motion.div>

                        <div className="min-w-0 flex-1">

                          <h3 className="text-[20px] font-medium leading-none tracking-[-0.04em] text-[#0B1F3A] sm:text-[25px] md:text-[29px]">
                            {item.title}
                          </h3>

                          <p className="mt-2 max-w-[650px] text-[13px] leading-[1.75] text-[#202832]/60 sm:mt-3 sm:text-[15px] md:text-[16px]">
                            {item.text}
                          </p>

                        </div>

                      </div>

                    </motion.div>
                  );

                })}

              </div>

            </div>


            <div className="mt-12 flex items-center gap-4 sm:mt-16">

              <Award
                className="h-10 w-10 text-[#C6A15B] sm:h-12 sm:w-12"
                strokeWidth={0.45}
              />

              <p className="max-w-[700px] text-[12px] leading-6 text-[#202832]/50 sm:text-[15px]">
                Professional expertise. Cultural understanding. Responsible
                delivery.
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}