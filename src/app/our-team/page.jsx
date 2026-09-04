"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Mail,
  UsersRound,
  Target,
  Lightbulb,
  ShieldCheck,
  Star,
  Sparkles,
  BriefcaseBusiness,
  BrainCircuit,
  Handshake,
  Award,
  TrendingUp
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/layout/Header";


/*
  =========================================================
  IBS — OUR TEAM
  =========================================================

  Royal Navy       #0B1F3A
  Executive Teal   #087F8C
  Heritage Gold   #C6A15B
  Charcoal Ink    #202832
  Ivory Mist      #F6F4EF
  Silver Mist     #DCE2E7
*/

const leaders = [
  {
    name: "Biswanath Chakrabarty",
    role: "President | FCGA (Canada), MBA (MBS, UK), CPA (CO, USA)",
    image: "/images/our_team/BNC.webp",
    description:
      "Audits and reviews; internal controls; taxation; financial planning; business plans; feasibility studies; strategic planning; performance management; program reviews.",
  },
  {
    name: "Newton Grey",
    role: "Chief Operating Officer | MSc, Tourism and Hospitality Management",
    tagline: "Growth · Partnerships · Leadership",
    image: "/images/our_team/Newton.webp",
    description:
      "Business development; strategic growth; corporate relationship management; market expansion; revenue generation; strategic partnerships; leadership and team development.",
  },
  {
    name: "Manik Duggar",
    role: "Strategic Advisor",
    image: "/images/our_team/Manik-Dugger.jpg",
    description:
      "Policy advisory; major-project management; Northern projects; environmental and regulatory experience; international development and capacity building.",
  },
  {
    name: "Isaiah Mutandiwa",
    role: "Senior Vice President – Operations | B.Acc. Hons (UZ)",
    image: "/images/our_team/10-Isiah-Mutandiwa.webp",
    description:
      "Audits and reviews; business process re-engineering; procedures manuals; controllership; internal controls; systems analysis; training.",
  },
  {
    name: "Meera Basnyat",
    role: "Director of Operations | MBA, CPA, CGA",
    image: "/images/our_team/05-Meera-Basnyat.webp",
    description:
      "Audits, reviews and compilations; internal controls; taxation.",
  },
  {
    name: "Ranajit Batabyal",
    role: "Director – Business Development",
    image: "/images/our_team/11-Ranajit-Batabyal.webp",
    description:
      "Accounting systems; business planning; financial analysis; budgeting; business process development; project management; corporate management; policy writing.",
  },
  {
    name: "Partha Chakraborty",
    role: "Director – IT Infrastructure",
    image: "/images/our_team/Partha.webp",
    description:
      "IT infrastructure management; vendor management; Windows server; network security and firewall; IT operations; infrastructure planning and design.",
  },
  {
    name: "Paulami Gupta",
    role: "Director of Consulting",
    image: "/images/our_team/PG.webp",
    description:
      "Professional research and writing; business proposals and plans; project research and coordination; editing; administration; event management.",
  },
  {
    name: "Edwin Luyinda",
    role: "Engineering Specialist",
    image: "/images/our_team/Edwin.jpg",
    description:
      "Technical leadership; project management and oversight; compliance and standards; safety and risk management; collaboration and communication.",
  }
];

const team = [
  {
    name: "Norman Yakeleya",
    role: "Indigenous Advisor",
    image: "/images/our_team/NORMAN.webp",
    icon: UsersRound,
    description:
      "Indigenous community knowledge, governance and community context; business consulting; training and professional development.",
  },
  {
    name: "Dr. Deborah Nixon",
    role: "Senior Management Consultant | PhD, MEH, B.Comm",
    image: "/images/our_team/13-Dr.-Deborah-Nixon.webp",
    icon: Target,
    description:
      "Organizational development; business and strategic planning; community consultation; market research; leadership development; change management; performance assessment; project management.",
  },
  {
    name: "Agamani Chakrabarty",
    role: "Economist | M.A, B.Comm",
    image: "/images/our_team/15-Agamani-Chakrabarty.webp",
    icon: TrendingUp,
    description:
      "Statistical analysis and modelling; investment research; enterprise risk modelling; economic and business analysis; data integrity; research reporting.",
  },
  {
    name: "Eric Whitworth",
    role: "Public Sector Consultant | CPA, CMA",
    image: "/images/our_team/Eric.webp",
    icon: BriefcaseBusiness,
    description:
      "Program reviews; compliance audits; corporate training; business process re-engineering; policies and procedures; controllership; internal controls.",
  },
  {
    name: "Kyle Chisholm",
    role: "Senior Accounting Advisor | CPA, CMA, MBA",
    image: "/images/our_team/08-Kyle-Chisholm.webp",
    icon: Award,
    description:
      "Audits and reviews; compilations; internal controls; bookkeeping; strategy development; taxation; training.",
  },
  {
    name: "Suman Basnyat",
    role: "Accounting & Sage Intacct Advisor | CPA, CMA, MBA",
    image: "/images/our_team/09-Suman-Basnyat.webp",
    icon: BrainCircuit,
    description:
      "Audits and reviews; internal controls; financial procedures; taxation; financial system setup; training.",
  },
];

/* =========================================================
   FOLDING PAPER DECORATION
========================================================= */

function FoldingPaper({ variant = "light" }) {
  const isLight = variant === "light";

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        right-0
        top-0
        z-30
        h-[92px]
        w-[92px]
        overflow-hidden
      "
    >
      {/* Silver outer paper */}
      <div
        className="
          absolute
          right-0
          top-0
          h-[92px]
          w-[92px]
          bg-[#DCE2E7]/90
          shadow-[-10px_10px_24px_rgba(11,31,58,.20)]
        "
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%)",
        }}
      />

      {/* Main paper */}
      <div
        className={`
          absolute
          right-0
          top-0
          h-[74px]
          w-[74px]
          ${isLight ? "bg-[#F6F4EF]" : "bg-[#FFFFFF]"}
          shadow-[-8px_8px_18px_rgba(11,31,58,.18)]
          transition-all
          duration-500
          group-hover:h-[82px]
          group-hover:w-[82px]
        `}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%)",
        }}
      />

      {/* Teal folded underside */}
      <div
        className="
          absolute
          right-0
          top-0
          h-[74px]
          w-[74px]
          bg-[#087F8C]
          transition-all
          duration-500
          group-hover:h-[82px]
          group-hover:w-[82px]
        "
        style={{
          clipPath: "polygon(0 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Navy inner fold */}
      <div
        className="
          absolute
          right-0
          top-0
          h-[48px]
          w-[48px]
          bg-[#0B1F3A]
        "
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Gold fold detail */}
      <div
        className="
          absolute
          right-[14px]
          top-[14px]
          z-40
          h-[2px]
          w-[38px]
          rotate-45
          bg-[#C6A15B]
          transition-all
          duration-500
          group-hover:w-[44px]
        "
      />
    </div>
  );
}

const values = [
  {
    icon: UsersRound,
    title: "Collaborative",
    text: "Different perspectives. Shared success.",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    text: "Ideas that create practical impact.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    text: "Built on trust, quality and transparency.",
  },
  {
    icon: Star,
    title: "Client-Focused",
    text: "Your goals remain at the centre.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   FLOATING BACKGROUND ICON
========================================================= */

function FloatingIcon({
  Icon,
  className,
  delay = 0,
  size = 32,
}) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{
        y: [0, -12, 0],
        opacity: [0.1, 0.28, 0.1],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`pointer-events-none absolute ${className}`}
    >
      <Icon
        size={size}
        strokeWidth={1}
        className="text-[#087F8C]"
      />
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function OurTeamPage() {
  return (
    <>
      <main className="overflow-hidden bg-[#F6F4EF] text-[#202832]">

        {/* =====================================================
            HERO
        ===================================================== */}

        <Header />

        <section
          className="
            relative
            min-h-[calc(100svh-80px)]
            w-full
            overflow-hidden
            bg-[#0B1F3A]
          "
          style={{ paddingTop: "75px" }}
        >

          {/* ===================================================
              HERO IMAGE
          =================================================== */}

          <div className="absolute inset-0">

            <img
              src="/images/our_team/our-team.jpg"
              alt="IBS Canada team"
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[#0B1F3A]/10
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#0B1F3A]/96
                via-[#0B1F3A]/78
                via-[46%]
                to-[#0B1F3A]/5
              "
            />

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-44
                bg-gradient-to-t
                from-[#0B1F3A]
                to-transparent
              "
            />

          </div>

          {/* Hero content */}
          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[calc(100svh-155px)]
              max-w-[1320px]
              items-center
              px-5
              py-20
              sm:px-8
              lg:px-10
              xl:px-12
            "
          >

            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-[720px]"
            >

              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#C6A15B]" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.32em]
                    text-[#D8B866]
                  "
                >
                  IBS Canada
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="
                  mt-6
                  text-[48px]
                  font-semibold
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-white
                  sm:text-[66px]
                  lg:text-[82px]
                "
              >
                Our
                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-white
                    via-[#D8B866]
                    to-[#43B8BA]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Team.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="
                  mt-7
                  max-w-[620px]
                  text-[12px]
                  leading-6
                  text-[#DCE2E7]
                  sm:text-[13px]
                "
              >
                Meet the multidisciplinary professionals who bring together
                finance, strategy, governance, operations, technology,
                research, economics and technical expertise.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="
                  mt-9
                  flex
                  flex-wrap
                  items-center
                  gap-3
                "
              >

                <a
                  href="#team"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#087F8C]
                    px-6
                    py-3
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white
                    shadow-[0_15px_35px_rgba(8,127,140,.25)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#096F78]
                  "
                >
                  Meet the team
                  <ArrowDown size={14} />
                </a>

                <a
                  href="#values"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/20
                    bg-white/[0.06]
                    px-6
                    py-3
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:bg-white/[0.12]
                  "
                >
                  Our principles
                  <ArrowRight size={14} />
                </a>

              </motion.div>

            </motion.div>

          </div>

        </section>


        {/* =====================================================
            VALUES
        ===================================================== */}

        

        {/* =====================================================
            CORE TEAM — EXECUTIVE LEADERSHIP
        ===================================================== */}

        <section
          id="team"
          className="
            relative
            overflow-hidden
            bg-[#071A2D]
            px-3
            py-3
            sm:px-5
            sm:py-5
            lg:px-6
            lg:py-6
            xl:px-7
          "
        >
          {/* Bright premium outer border */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              bg-gradient-to-r
      from-[#087F8C]
      via-[#F0C75E]
      to-[#087F8C]
            "
          />

          {/* Image panel inside the bright border */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              bg-[#071A2D]
              px-5
              py-20
              sm:px-8
              lg:px-10
              lg:py-24
              xl:px-12
            "
          >

          {/* Team image background */}

          <div className="pointer-events-none absolute inset-0">

            <img
              src="/images/our_team/our-team.jpg"
              alt=""
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* Bright IBS overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#087F8C]/80
                via-[#123A5A]/72
                to-[#0B1F3A]/90
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[#071A2D]/35
              "
            />

            {/* Ambient glow */}

            <div
              className="
                absolute
                left-1/2
                top-[28%]
                h-[720px]
                w-[720px]
                -translate-x-1/2
                rounded-full
                bg-[#087F8C]/[0.08]
                blur-[120px]
              "
            />

            <div
              className="
                absolute
                -left-48
                top-[18%]
                h-[520px]
                w-[520px]
                rounded-full
                bg-[#C6A15B]/[0.06]
                blur-[110px]
              "
            />

            <div
              className="
                absolute
                -right-48
                bottom-[-5%]
                h-[560px]
                w-[560px]
                rounded-full
                bg-[#087F8C]/[0.06]
                blur-[120px]
              "
            />

            {/* Subtle grid */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.035]
              "
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "70px 70px",
              }}
            />

          </div>

          {/* Bright inner teal frame */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[5]
              rounded-[30px]
              border-[3px]
        border-[#F0C75E]
        shadow-[inset_0_0_0_1px_#C6A15B,inset_0_0_28px_rgba(240,199,94,.22)]
            "
          />

          {/* Gold inner highlight */}
          <div
            className="
              pointer-events-none
              absolute
              inset-[7px]
              z-[5]
              rounded-[25px]
              border
              border-[#C6A15B]/75
            "
          />

          {/* Top gold light */}
          <div
            className="
              pointer-events-none
              absolute
              left-[8%]
              right-[8%]
              top-0
              z-[6]
              h-[3px]
              bg-gradient-to-r
              from-transparent
              via-[#C6A15B]
              to-transparent
              shadow-[0_0_18px_rgba(198,161,91,.8)]
            "
          />

          {/* Bottom teal light */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[15%]
              right-[15%]
              z-[6]
              h-[3px]
              bg-gradient-to-r
              from-transparent
              via-[#087F8C]
              to-transparent
              shadow-[0_0_18px_rgba(8,127,140,.8)]
            "
          />

          {/* Oversized decorative icons */}

          <motion.div
            aria-hidden="true"
            animate={{
              y: [0, -18, 0],
              rotate: [0, 5, 0],
              opacity: [0.05, 0.11, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-[2%]
              top-[18%]
              hidden
              text-[#C6A15B]
              lg:block
            "
          >
            <Award
              size={180}
              strokeWidth={0.65}
            />
          </motion.div>


          <motion.div
            aria-hidden="true"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
              opacity: [0.04, 0.10, 0.04],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              bottom-[10%]
              right-[2%]
              hidden
              text-[#087F8C]
              lg:block
            "
          >
            <BrainCircuit
              size={190}
              strokeWidth={0.65}
            />
          </motion.div>


          <div className="relative z-10 mx-auto max-w-[1320px]">

            {/* Section heading */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
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
                duration: 0.7,
              }}

              className="
                mx-auto
                max-w-[820px]
                text-center
              "
            >

              <div className="flex items-center justify-center gap-3">

                <span className="h-px w-12 bg-[#C6A15B]" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.32em]
                    text-[#C6A15B]
                  "
                >
                  Core Team
                </span>

                <span className="h-px w-12 bg-[#087F8C]" />

              </div>


              <h2
                className="
                  mt-5
                  text-[38px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.045em]
                  text-white
                  sm:text-[52px]
                  lg:text-[62px]
                "
              >
                Leadership that

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-white
                    via-[#D8B866]
                    to-[#43B8BA]
                    bg-clip-text
                    text-transparent
                  "
                >
                  drives the difference.
                </span>

              </h2>


              <p
                className="
                  mx-auto
                  mt-5
                  max-w-[690px]
                  text-[12px]
                  leading-6
                  text-[#B9C5CF]
                  sm:text-[13px]
                "
              >
                IBS brings together professionals across finance, strategy,
                governance, operations, technology, research, economics and
                technical disciplines.
              </p>

            </motion.div>


            {/* =====================================================
                FEATURED PRESIDENT — PREMIUM
            ===================================================== */}

            <motion.article
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
                amount: 0.2,
              }}

              transition={{
                duration: 0.8,
              }}

              className="
                group
                relative
                mx-auto
                mt-14
                max-w-[1080px]
              "
            >

              {/* Premium gold + teal frame */}

              <div
                className="
                  absolute
                  -inset-[1px]
                  rounded-[32px]
                  bg-gradient-to-r
                  from-[#C6A15B]
                  via-[#087F8C]
                  to-[#C6A15B]
                  opacity-90
                  blur-[1px]
                "
              />


              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[#C6A15B]/40
                  bg-gradient-to-br
                  from-[#123A5A]
                  via-[#0B1F3A]
                  to-[#071A2D]
                  shadow-[0_35px_100px_rgba(0,0,0,.38)]
                "
              >

                {/* Folding paper */}

                <FoldingPaper variant="dark" />


                {/* Ambient highlights */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-72
                    w-72
                    rounded-full
                    bg-[#087F8C]/15
                    blur-[80px]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-28
                    left-[18%]
                    h-64
                    w-64
                    rounded-full
                    bg-[#C6A15B]/10
                    blur-[80px]
                  "
                />


                {/* Fine grid */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.035]
                  "
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                    backgroundSize: "46px 46px",
                  }}
                />


                <div className="relative grid lg:grid-cols-[310px_1fr]">

                  {/* PRESIDENT PORTRAIT */}

                  <div
                    className="
                      relative
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                      bg-gradient-to-br
                      from-[#16445D]
                      via-[#123A5A]
                      to-[#0B1F3A]
                      p-9
                      sm:p-11
                    "
                  >

                    {/* Gold halo */}

                    <div
                      className="
                        absolute
                        h-[235px]
                        w-[235px]
                        rounded-full
                        border
                        border-[#C6A15B]/20
                      "
                    />

                    <div
                      className="
                        absolute
                        h-[205px]
                        w-[205px]
                        rounded-full
                        border
                        border-[#087F8C]/20
                      "
                    />


                    <div className="relative">

                      <div
                        className="
                          absolute
                          -inset-4
                          rounded-[30px]
                          border
                          border-[#C6A15B]/35
                        "
                      />


                      <div
                        className="
                          relative
                          h-[205px]
                          w-[205px]
                          overflow-hidden
                          rounded-[26px]
                          border-[3px]
                          border-[#C6A15B]
                          bg-[#DCE2E7]
                          shadow-[0_24px_55px_rgba(0,0,0,.38)]
                        "
                      >

                        <img
                          src={leaders[0].image}
                          alt={leaders[0].name}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-[1.04]
                          "
                        />

                      </div>


                      {/* Role badge */}

                      <div
                        className="
                          absolute
                          -bottom-4
                          left-1/2
                          flex
                          -translate-x-1/2
                          items-center
                          gap-2
                          whitespace-nowrap
                          rounded-full
                          border
                          border-[#C6A15B]/70
                          bg-[#071A2D]
                          px-5
                          py-2.5
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.24em]
                          text-[#D8B866]
                          shadow-[0_10px_30px_rgba(0,0,0,.35)]
                        "
                      >

                        <Award
                          size={13}
                          strokeWidth={1.6}
                        />

                        President

                      </div>

                    </div>

                  </div>


                  {/* PRESIDENT DETAILS */}

                  <div
                    className="
                      relative
                      flex
                      flex-col
                      justify-center
                      p-8
                      sm:p-10
                      lg:p-12
                    "
                  >

                    <div className="flex items-center gap-3">

                      <span
                        className="
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.28em]
                          text-[#C6A15B]
                        "
                      >
                        Executive Leadership · 01
                      </span>

                      <span
                        className="
                          h-px
                          w-16
                          bg-gradient-to-r
                          from-[#C6A15B]
                          to-[#087F8C]
                        "
                      />

                    </div>


                    <div
                      className="
                        mt-5
                        flex
                        items-start
                        justify-between
                        gap-5
                      "
                    >

                      <div>

                        <h3
                          className="
                            text-[32px]
                            font-semibold
                            tracking-[-0.045em]
                            text-white
                            sm:text-[40px]
                          "
                        >
                          {leaders[0].name}
                        </h3>

                        <p
                          className="
                            mt-2
                            max-w-[700px]
                            text-[9px]
                            font-bold
                            uppercase
                            leading-5
                            tracking-[0.09em]
                            text-[#43B8BA]
                          "
                        >
                          {leaders[0].role}
                        </p>

                      </div>


                      <div
                        className="
                          hidden
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#C6A15B]/35
                          bg-[#C6A15B]/10
                          text-[#D8B866]
                          sm:flex
                        "
                      >
                        <Award
                          size={19}
                          strokeWidth={1.4}
                        />
                      </div>

                    </div>


                    {/* Gold rule */}

                    <div
                      className="
                        mt-6
                        h-[2px]
                        w-14
                        bg-[#C6A15B]
                        transition-all
                        duration-500
                        group-hover:w-24
                      "
                    />


                    <p
                      className="
                        mt-6
                        max-w-[720px]
                        text-[11px]
                        leading-6
                        text-[#DCE2E7]
                        sm:text-[12px]
                      "
                    >
                      {leaders[0].description}
                    </p>


                    {/* Bottom executive strip */}

                    <div
                      className="
                        mt-8
                        flex
                        flex-wrap
                        items-center
                        gap-x-8
                        gap-y-3
                        border-t
                        border-white/10
                        pt-5
                      "
                    >

                      <div>

                        <p
                          className="
                            text-[7px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-[#C6A15B]
                          "
                        >
                          Leadership
                        </p>

                        <p
                          className="
                            mt-1
                            text-[9px]
                            text-[#8FA0AD]
                          "
                        >
                          Strategy & Advisory
                        </p>

                      </div>


                      <div>

                        <p
                          className="
                            text-[7px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-[#C6A15B]
                          "
                        >
                          Expertise
                        </p>

                        <p
                          className="
                            mt-1
                            text-[9px]
                            text-[#8FA0AD]
                          "
                        >
                          Finance · Governance · Strategy
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </motion.article>


            {/* =====================================================
                SENIOR LEADERSHIP — COO + STRATEGIC ADVISOR
            ===================================================== */}

            <div className="mt-14">

              <div
                className="
                  mb-6
                  flex
                  items-center
                  gap-4
                "
              >

                <div>

                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#C6A15B]
                    "
                  >
                    Senior Leadership
                  </p>

                  <h3
                    className="
                      mt-2
                      text-[28px]
                      font-semibold
                      tracking-[-0.035em]
                      text-white
                      sm:text-[34px]
                    "
                  >
                    Strategic leadership.
                  </h3>

                </div>

                <div
                  className="
                    hidden
                    h-px
                    flex-1
                    bg-gradient-to-r
                    from-[#087F8C]/50
                    to-transparent
                    sm:block
                  "
                />

              </div>


              <div
                className="
                  grid
                  gap-5
                  lg:grid-cols-2
                "
              >

                {leaders.slice(1, 3).map((leader, index) => {

                  const Icon =
                    index === 0
                      ? BriefcaseBusiness
                      : Handshake;

                  return (
                    <motion.article
                      key={leader.name}

                      initial={{
                        opacity: 0,
                        y: 25,
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
                        duration: 0.6,
                        delay: index * 0.08,
                      }}

                      whileHover={{
                        y: -6,
                      }}

                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[26px]
                        border
                        border-white/10
                        bg-gradient-to-br
                        from-[#0B1F3A]
                        via-[#123A5A]
                        to-[#071A2D]
                        shadow-[0_22px_55px_rgba(0,0,0,.25)]
                      "
                    >

                      <FoldingPaper variant="dark" />


                      <div
                        className="
                          absolute
                          inset-x-0
                          top-0
                          h-[3px]
                          bg-gradient-to-r
                          from-[#C6A15B]
                          via-[#087F8C]
                          to-[#C6A15B]
                        "
                      />


                      <div
                        className="
                          relative
                          flex
                          flex-col
                          gap-5
                          p-6
                          sm:flex-row
                          sm:items-center
                          sm:p-7
                        "
                      >

                        <div
                          className="
                            relative
                            h-[125px]
                            w-[105px]
                            shrink-0
                            overflow-hidden
                            rounded-[20px]
                            border-2
                            border-[#C6A15B]
                            bg-[#DCE2E7]
                            shadow-[0_15px_35px_rgba(0,0,0,.25)]
                          "
                        >

                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="
                              h-full
                              w-full
                              object-cover
                              transition-transform
                              duration-700
                              group-hover:scale-105
                            "
                          />

                        </div>


                        <div className="min-w-0 flex-1">

                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              gap-3
                            "
                          >

                            <span
                              className="
                                text-[7px]
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-[#C6A15B]
                              "
                            >
                              0{index + 2} / Leadership
                            </span>

                            <span
                              className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#087F8C]/40
                                bg-[#087F8C]/15
                                text-[#43B8BA]
                              "
                            >
                              <Icon size={16} />
                            </span>

                          </div>


                          <h3
                            className="
                              mt-4
                              text-[23px]
                              font-semibold
                              leading-6
                              tracking-[-0.035em]
                              text-white
                            "
                          >
                            {leader.name}
                          </h3>


                          <p
                            className="
                              mt-2
                              text-[8px]
                              font-bold
                              uppercase
                              leading-4
                              tracking-[0.08em]
                              text-[#43B8BA]
                            "
                          >
                            {leader.role}
                          </p>


                          <div
                            className="
                              mt-4
                              h-[2px]
                              w-10
                              bg-[#C6A15B]
                              transition-all
                              duration-500
                              group-hover:w-20
                            "
                          />


                          <p
                            className="
                              mt-4
                              text-[10px]
                              leading-5
                              text-[#B9C5CF]
                            "
                          >
                            {leader.description}
                          </p>

                        </div>

                      </div>

                    </motion.article>
                  );

                })}

              </div>

            </div>


            {/* =====================================================
                MEET THE EXPERTS — ADVISORS & CONSULTANTS
            ===================================================== */}

            <div className="mt-14">

              <div
                className="
                  flex
                  flex-col
                  justify-between
                  gap-5
                  sm:flex-row
                  sm:items-end
                "
              >

                <div>

                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#C6A15B]
                    "
                  >
                    Advisors & Consultants
                  </p>

                  <h3
                    className="
                      mt-3
                      text-[34px]
                      font-semibold
                      leading-none
                      tracking-[-0.045em]
                      text-white
                      sm:text-[42px]
                    "
                  >
                    Meet the{" "}
                    <span className="text-[#43B8BA]">
                      Experts
                    </span>
                  </h3>

                </div>


                <p
                  className="
                    max-w-[330px]
                    text-[11px]
                    leading-5
                    text-[#B9C5CF]
                    sm:text-right
                  "
                >
                  Professionals across finance, strategy, governance,
                  operations, technology, research, economics and technical
                  disciplines.
                </p>

              </div>


              <div
                className="
                  mt-8
                  grid
                  gap-4
                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >

                {team.map((person, index) => {

                  const Icon = person.icon;

                  return (
                    <motion.article
                      key={person.name}

                      initial={{
                        opacity: 0,
                        y: 24,
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
                        duration: 0.55,
                        delay: index * 0.06,
                      }}

                      whileHover={{
                        y: -6,
                      }}

                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[24px]
                        border
                        border-[#DCE2E7]
                        bg-[#F6F4EF]
                        shadow-[0_18px_45px_rgba(0,0,0,.16)]
                        transition-all
                        duration-300
                        hover:border-[#C6A15B]/70
                        hover:shadow-[0_24px_55px_rgba(0,0,0,.22)]
                      "
                    >

                      {/* Folding paper */}

                      <FoldingPaper />


                      {/* CARD TOP / PROFILE */}

                      <div
                        className="
                          relative
                          overflow-hidden
                          bg-gradient-to-br
                          from-[#123A5A]
                          via-[#0B1F3A]
                          to-[#071A2D]
                          p-5
                          sm:p-6
                        "
                      >

                        {/* subtle teal glow */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            -right-16
                            -top-16
                            h-40
                            w-40
                            rounded-full
                            bg-[#087F8C]/15
                            blur-3xl
                            transition-transform
                            duration-700
                            group-hover:scale-150
                          "
                        />


                        <div
                          className="
                            relative
                            flex
                            items-start
                            gap-5
                          "
                        >

                          {/* IMAGE */}

                          <div
                            className="
                              relative
                              h-[112px]
                              w-[92px]
                              shrink-0
                              overflow-hidden
                              rounded-[18px]
                              border-2
                              border-[#C6A15B]
                              bg-[#DCE2E7]
                              shadow-[0_12px_30px_rgba(0,0,0,.25)]
                            "
                          >

                            <img
                              src={person.image}
                              alt={person.name}
                              className="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-700
                                group-hover:scale-105
                              "
                            />


                            {/* Teal icon */}

                            <div
                              className="
                                absolute
                                bottom-0
                                left-0
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-tr-[12px]
                                bg-[#087F8C]
                                text-white
                                shadow-lg
                              "
                            >
                              <Icon
                                size={14}
                                strokeWidth={1.6}
                              />
                            </div>

                          </div>


                          {/* DETAILS */}

                          <div
                            className="
                              min-w-0
                              flex-1
                              pt-1
                            "
                          >

                            {/* Number + arrow */}

                            <div
                              className="
                                flex
                                items-start
                                justify-between
                                gap-3
                              "
                            >

                              <span
                                className="
                                  text-[7px]
                                  font-bold
                                  uppercase
                                  tracking-[0.22em]
                                  text-[#C6A15B]
                                "
                              >
                                0{index + 1} / Expert
                              </span>


                              <ArrowUpRight
                                size={16}
                                className="
                                  shrink-0
                                  text-[#43B8BA]
                                  transition-all
                                  duration-300
                                  group-hover:-translate-y-1
                                  group-hover:translate-x-1
                                "
                              />

                            </div>


                            {/* Name */}

                            <h3
                              className="
                                mt-3
                                text-[17px]
                                font-semibold
                                leading-5
                                tracking-[-0.025em]
                                text-white
                                sm:text-[18px]
                              "
                            >
                              {person.name}
                            </h3>


                            {/* Role */}

                            <p
                              className="
                                mt-2
                                text-[8px]
                                font-bold
                                uppercase
                                leading-4
                                tracking-[0.08em]
                                text-[#43B8BA]
                              "
                            >
                              {person.role}
                            </p>


                            {/* Gold accent */}

                            <div
                              className="
                                mt-4
                                h-[2px]
                                w-9
                                bg-[#C6A15B]
                                transition-all
                                duration-500
                                group-hover:w-16
                              "
                            />

                          </div>

                        </div>

                      </div>


                      {/* CARD CONTENT */}

                      <div
                        className="
                          relative
                          min-h-[145px]
                          bg-[#F6F4EF]
                          p-5
                          sm:p-6
                        "
                      >

                        <p
                          className="
                            text-[10px]
                            leading-[1.8]
                            text-[#52606D]
                            sm:text-[11px]
                          "
                        >
                          {person.description}
                        </p>


                        {/* Bottom detail */}

                        <div
                          className="
                            absolute
                            bottom-5
                            left-5
                            right-5
                            flex
                            items-center
                            justify-between
                            sm:left-6
                            sm:right-6
                          "
                        >

                          <span
                            className="
                              text-[7px]
                              font-bold
                              uppercase
                              tracking-[0.22em]
                              text-[#A47C2F]
                            "
                          >
                            IBS / Expertise
                          </span>


                          <span
                            className="
                              h-[2px]
                              w-10
                              bg-[#C6A15B]
                              transition-all
                              duration-500
                              group-hover:w-16
                            "
                          />

                        </div>

                      </div>

                    </motion.article>
                  );

                })}

              </div>

            </div>


            {/* =====================================================
                LEADERSHIP TEAM GRID
            ===================================================== */}

            <div className="mt-12">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
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
                  mb-6
                  flex
                  items-center
                  gap-4
                "
              >

                <div>

                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#C6A15B]
                    "
                  >
                    Leadership Team
                  </p>

                  <h3
                    className="
                      mt-1
                      text-[24px]
                      font-semibold
                      tracking-[-0.025em]
                      text-white
                      sm:text-[28px]
                    "
                  >
                    Expertise across every discipline.
                  </h3>

                </div>


                <div
                  className="
                    hidden
                    h-px
                    flex-1
                    bg-gradient-to-r
                    from-[#087F8C]/40
                    to-transparent
                    sm:block
                  "
                />

              </motion.div>


              <div
                className="
                  grid
                  gap-5
                  md:grid-cols-2
                  xl:grid-cols-3
                "
              >

                {leaders.slice(3).map((leader, index) => {

                  const icons = [
                    BriefcaseBusiness,
                    UsersRound,
                    Target,
                    BrainCircuit,
                    Lightbulb,
                    ShieldCheck,
                    Award,
                  ];

                  const Icon =
                    icons[index % icons.length];

                  return (
                    <motion.article
                      key={leader.name}

                      initial={{
                        opacity: 0,
                        y: 25,
                      }}

                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}

                      viewport={{
                        once: true,
                        amount: 0.12,
                      }}

                      transition={{
                        duration: 0.55,
                        delay: index * 0.05,
                      }}

                      whileHover={{
                        y: -6,
                      }}

                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[24px]
                        border
                        border-white/10
                        bg-[#F6F4EF]
                        shadow-[0_18px_45px_rgba(0,0,0,.18)]
                      "
                    >

                      {/* Folding paper */}

                      <FoldingPaper />


                      <div
                        className="
                          absolute
                          inset-x-0
                          top-0
                          h-[3px]
                          bg-gradient-to-r
                          from-[#C6A15B]
                          via-[#087F8C]
                          to-[#C6A15B]
                        "
                      />


                      <div
                        className="
                          flex
                          items-center
                          gap-4
                          bg-gradient-to-r
                          from-[#0B1F3A]
                          to-[#123A5A]
                          p-5
                        "
                      >

                        <div
                          className="
                            relative
                            h-[82px]
                            w-[82px]
                            shrink-0
                            overflow-hidden
                            rounded-[18px]
                            border-2
                            border-[#C6A15B]/80
                            bg-[#DCE2E7]
                          "
                        >

                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="
                              h-full
                              w-full
                              object-cover
                            "
                          />

                        </div>


                        <div
                          className="
                            min-w-0
                            flex-1
                          "
                        >

                          <div
                            className="
                              mb-2
                              flex
                              items-center
                              justify-between
                              gap-2
                            "
                          >

                            <span
                              className="
                                text-[7px]
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-[#C6A15B]
                              "
                            >
                              0{index + 4} / Leadership
                            </span>


                            <span
                              className="
                                flex
                                h-7
                                w-7
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#087F8C]/40
                                bg-[#087F8C]/15
                                text-[#43B8BA]
                              "
                            >
                              <Icon size={13} />
                            </span>

                          </div>


                          <h3
                            className="
                              text-[16px]
                              font-semibold
                              leading-5
                              tracking-[-0.02em]
                              text-white
                            "
                          >
                            {leader.name}
                          </h3>


                          <p
                            className="
                              mt-1
                              text-[7px]
                              font-bold
                              uppercase
                              leading-3.5
                              tracking-[0.07em]
                              text-[#43B8BA]
                            "
                          >
                            {leader.role}
                          </p>

                        </div>

                      </div>


                      <div className="p-5">

                        <p
                          className="
                            text-[10px]
                            leading-5
                            text-[#68737D]
                          "
                        >
                          {leader.description}
                        </p>


                        <div
                          className="
                            mt-5
                            flex
                            items-center
                            justify-between
                          "
                        >

                          <span
                            className="
                              h-[2px]
                              w-9
                              bg-[#C6A15B]
                              transition-all
                              duration-500
                              group-hover:w-16
                            "
                          />

                          <span
                            className="
                              text-[7px]
                              font-bold
                              uppercase
                              tracking-[0.2em]
                              text-[#A47C2F]
                            "
                          >
                            IBS Leadership
                          </span>

                        </div>

                      </div>

                    </motion.article>
                  );

                })}

              </div>

            </div>


            {/* Bottom statement */}

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
                duration: 0.7,
                delay: 0.15,
              }}

              className="
                mx-auto
                mt-14
                flex
                max-w-[1000px]
                flex-col
                items-center
                justify-between
                gap-5
                border-t
                border-white/10
                pt-7
                text-center
                sm:flex-row
                sm:text-left
              "
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
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C6A15B]/50
                    bg-[#C6A15B]/10
                    text-[#C6A15B]
                  "
                >
                  <UsersRound size={15} />
                </span>

                <div>

                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#C6A15B]
                    "
                  >
                    One multidisciplinary team
                  </p>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      text-[#8FA0AD]
                    "
                  >
                    Different expertise. One shared purpose.
                  </p>

                </div>

              </div>


              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#8FA0AD]
                "
              >

                <span className="h-px w-8 bg-[#087F8C]" />

                Strategy · Operations · Expertise · Impact

                <span className="h-px w-8 bg-[#C6A15B]" />

              </div>

            </motion.div>

          </div>


          </div>
        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

      </main>

      <Footer />

    </>
  );
}