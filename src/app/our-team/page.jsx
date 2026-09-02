"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowRight,
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
      <Header/>

      <section
        className="
          relative
          min-h-[calc(100svh-80px)]
          w-full
          overflow-hidden
          bg-[#0B1F3A]
        "

        style={{paddingTop:"75px"}}
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

          {/* Image tint */}

          <div
            className="
              absolute
              inset-0
              bg-[#0B1F3A]/10
            "
          />

          {/* Main image gradient */}

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

          {/* Bottom fade */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-44
              bg-gradient-to-t
              from-[#0B1F3A]/50
              to-transparent
            "
          />

        </div>

        {/* ===================================================
            ANGLED NAVY CONTENT PANEL
        =================================================== */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            z-10
            hidden
            w-[59%]
            bg-[#0B1F3A]
            lg:block
          "
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 77% 100%, 0 100%)",
          }}
        />

        {/* ===================================================
            TILTED TEAL DIVIDER
        =================================================== */}

     
        {/* ===================================================
            SOFT GLOW AROUND DIVIDER
        =================================================== */}

        {/* ===================================================
            BACKGROUND ICONS
        =================================================== */}

        <FloatingIcon
          Icon={UsersRound}
          delay={0}
          className="right-[31%] top-[19%]"
        />

        <FloatingIcon
          Icon={Target}
          delay={1}
          className="right-[18%] top-[32%]"
        />

        <FloatingIcon
          Icon={Sparkles}
          delay={1.8}
          className="right-[38%] bottom-[27%]"
        />

        <FloatingIcon
          Icon={Award}
          delay={2.6}
          className="right-[9%] bottom-[16%]"
        />

        {/* ===================================================
            MOBILE OVERLAY
        =================================================== */}

        <div
          className="
            absolute
            inset-0
            z-10
            bg-[#0B1F3A]/70
            lg:hidden
          "
        />

        {/* ===================================================
            HERO CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-40
            mx-auto
            flex
            min-h-[calc(100svh-80px)]
            w-full
            max-w-[1500px]
            items-center
            px-7
            py-24
            sm:px-10
            lg:px-14
            xl:px-20
            2xl:px-24
          "
        >

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-[650px]"
          >

            {/* Label */}

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >

              <span
                className="
                  h-[2px]
                  w-14
                  bg-[#C6A15B]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-[#C6A15B]
                "
              >
                Our Team
              </span>

            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="
                mt-8
                text-[58px]
                font-semibold
                leading-[0.88]
                tracking-[-0.065em]
                text-white
                sm:text-[72px]
                md:text-[82px]
                lg:text-[88px]
                xl:text-[96px]
              "
            >
              The People

              <span className="block text-[#087F8C]">
                Behind Impact
              </span>

            </motion.h1>

            {/* Gold divider */}

            <motion.div
              variants={fadeUp}
              className="
                mt-8
                h-[3px]
                w-[68px]
                bg-[#C6A15B]
              "
            />

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="
                mt-7
                max-w-[540px]
                text-[14px]
                leading-7
                text-[#B9C5CF]
                sm:text-[15px]
              "
            >
              A diverse team of experts passionate about
              driving meaningful change through insight,
              collaboration and trusted partnerships.
            </motion.p>

            {/* CTA */}

            <motion.div
              variants={fadeUp}
              className="mt-8"
            >

            <Link
  href="#team"
  className="
    group
    inline-flex
    items-center
    gap-3
    rounded-full
    border
    border-[#C6A15B]
    px-5
    py-2.5
    text-[10px]
    font-bold
    uppercase
    tracking-[0.12em]
    text-white
    transition-all
    duration-300
    hover:bg-[#C6A15B]
    hover:text-[#0B1F3A]
  "
>
  <span className="text-white transition-colors duration-300 group-hover:text-[#0B1F3A]">
    Meet Our Team
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
      transition-all
      duration-300
      group-hover:translate-x-1
      group-hover:bg-[#0B1F3A]
      group-hover:text-white
    "
  >
    <ArrowRight size={13} />
  </span>
</Link>

            </motion.div>

            {/* =================================================
                STATISTICS
            ================================================= */}

            <motion.div
              variants={fadeUp}
              className="
                mt-11
                flex
                flex-wrap
                items-center
                gap-6
                sm:gap-7
              "
            >

              {[
                [
                  UsersRound,
                  "20+",
                  "Years Experience",
                  false,
                ],
                [
                  Target,
                  "6+",
                  "Disciplines",
                  false,
                ],
                [
                  Star,
                  "100%",
                  "Commitment",
                  true,
                ],
              ].map(
                (
                  [Icon, value, label, gold],
                  index
                ) => (
                  <div
                    key={label}
                    className="
                      flex
                      items-center
                      gap-6
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >

                      <div
                        className={
                          gold
                            ? `
                              flex
                              h-11
                              w-11
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-[#C6A15B]/60
                              bg-[#C6A15B]/10
                              text-[#D8B866]
                            `
                            : `
                              flex
                              h-11
                              w-11
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-[#087F8C]/60
                              bg-[#087F8C]/15
                              text-[#56C6C4]
                            `
                        }
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.5}
                        />
                      </div>

                      <div>

                        <p
                          className="
                            text-[22px]
                            font-semibold
                            leading-none
                            text-white
                          "
                        >
                          {value}
                        </p>

                        <p
                          className="
                            mt-1.5
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.13em]
                            text-[#718393]
                          "
                        >
                          {label}
                        </p>

                      </div>

                    </div>

                    {index !== 2 && (
                      <span
                        className="
                          hidden
                          h-10
                          w-px
                          bg-white/15
                          sm:block
                        "
                      />
                    )}

                  </div>
                )
              )}

            </motion.div>

          </motion.div>

          {/* =================================================
              QUOTE CARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              y: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            className="
              absolute
              bottom-10
              right-7
              z-40
              hidden
              w-[285px]
              rounded-[22px]
              border
              border-[#087F8C]/70
              bg-[#123E51]/95
              p-7
              shadow-[0_25px_70px_rgba(0,0,0,.35)]
              backdrop-blur-xl
              lg:block
              xl:right-12
              2xl:right-20
            "
          >

            <div
              className="
                text-[42px]
                leading-none
                text-[#C6A15B]
              "
            >
              “
            </div>

            <p
              className="
                mt-2
                text-[17px]
                font-medium
                leading-7
                text-white
              "
            >
              Great teams don&apos;t just work
              together, they create{" "}
              <span className="text-[#43B8BA]">
                impact
              </span>{" "}
              together.
            </p>

            <div
              className="
                mt-5
                h-[2px]
                w-10
                bg-[#C6A15B]
              "
            />

            <p
              className="
                mt-4
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#C6A15B]
              "
            >
              IBS Canada
            </p>

          </motion.div>

          {/* =================================================
              GOLD DOT GRID
          ================================================= */}

          <div
            className="
              absolute
              bottom-12
              right-[37%]
              z-30
              hidden
              grid
              grid-cols-3
              gap-2
              lg:grid
            "
          >

            {Array.from({
              length: 9,
            }).map((_, index) => (
              <motion.span
                key={index}
                animate={{
                  opacity: [
                    0.2,
                    1,
                    0.2,
                  ],
                  scale: [
                    0.8,
                    1,
                    0.8,
                  ],
                }}
                transition={{
                  duration: 2.3,
                  repeat: Infinity,
                  delay: index * 0.12,
                }}
                className="
                  h-[6px]
                  w-[6px]
                  rounded-full
                  bg-[#C6A15B]
                "
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}
<section
  className="
    relative
    overflow-hidden
    bg-[#F6F4EF]
    px-6
    py-20
    sm:px-8
    lg:px-10
    lg:py-24
    xl:px-12
  "
>
  {/* =========================================================
      BACKGROUND DECORATION
  ========================================================= */}

  <div
    className="
      pointer-events-none
      absolute
      -right-32
      -top-32
      h-[480px]
      w-[480px]
      rounded-full
      bg-[#087F8C]/[0.045]
      blur-3xl
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -bottom-40
      -left-40
      h-[420px]
      w-[420px]
      rounded-full
      bg-[#C6A15B]/[0.045]
      blur-3xl
    "
  />

  {/* =========================================================
      MAIN CONTAINER
  ========================================================= */}

  <div className="relative mx-auto max-w-[1280px]">

    {/* =======================================================
        SECTION HEADER
    ======================================================= */}

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
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        mb-12
        flex
        flex-col
        justify-between
        gap-6
        lg:flex-row
        lg:items-end
      "
    >

      <div>

        {/* Label */}

        <div className="flex items-center gap-3">

          <span
            className="
              h-[2px]
              w-10
              bg-[#C6A15B]
            "
          />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#A47C2F]
            "
          >
            What Defines Us
          </span>

        </div>


        {/* Heading */}

        <h2
          className="
            mt-5
            max-w-[620px]
            text-[38px]
            font-semibold
            leading-[0.98]
            tracking-[-0.055em]
            text-[#202832]
            sm:text-[48px]
            lg:text-[56px]
          "
        >
          Values that shape

          <span
            className="
              block
              bg-gradient-to-r
              from-[#0B1F3A]
              via-[#123A5A]
              to-[#087F8C]
              bg-clip-text
              text-transparent
            "
          >
            meaningful impact.
          </span>

        </h2>

      </div>


      {/* Description */}

      <p
        className="
          max-w-[310px]
          text-[12px]
          leading-6
          text-[#68737D]
          lg:pb-1
        "
      >
        The principles behind how we collaborate,
        innovate and build lasting relationships.
      </p>

    </motion.div>


    {/* =========================================================
        PREMIUM VALUE PANEL
    ========================================================= */}

    <div
      className="
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-[#DCE2E7]/20
        bg-gradient-to-r
        from-[#0B1F3A]
        via-[#123A5A]
        to-[#087F8C]
        shadow-[0_30px_90px_rgba(11,31,58,.18)]
      "
    >

      {/* =======================================================
          AMBIENT TEAL GLOW
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#087F8C]/20
          blur-3xl
        "
      />


      {/* =======================================================
          AMBIENT GOLD GLOW
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-[25%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#C6A15B]/[0.08]
          blur-3xl
        "
      />


      {/* =======================================================
          TOP GOLD DETAIL
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-10
          right-10
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#C6A15B]/50
          to-transparent
        "
      />


      {/* =======================================================
          VALUE GRID
      ======================================================= */}

      <div
        className="
          relative
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
        "
      >

        {values.map((item, index) => {

          const Icon = item.icon;

          /* ===============================================
             DIFFERENT IBS GRADIENT FOR EACH CARD
          =============================================== */

          const cardGradients = [
            "from-[#0B1F3A] via-[#123A5A] to-[#164E63]",

            "from-[#087F8C] via-[#087F8C] to-[#0B1F3A]",

            "from-[#0B1F3A] via-[#123A5A] to-[#087F8C]",

            "from-[#123A5A] via-[#087F8C] to-[#0B1F3A]",
          ];


          return (
            <motion.div
              key={item.title}

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
                duration: 0.6,
                delay: index * 0.1,
              }}

              whileHover={{
                y: -8,
              }}

              className={`
                group
                relative
                min-h-[320px]
                overflow-hidden
                border-b
                border-white/10
                bg-gradient-to-br
                ${cardGradients[index]}
                p-8
                shadow-[inset_0_1px_0_rgba(255,255,255,.08)]
                transition-all
                duration-500
                md:min-h-[340px]
                md:p-9
                lg:border-b-0
                lg:border-r
                lg:p-10
                lg:last:border-r-0
              `}
            >

              {/* =================================================
                  CARD HOVER LIGHT
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-white/[0.025]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />


              {/* =================================================
                  CARD AMBIENT GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-52
                  w-52
                  rounded-full
                  bg-white/[0.06]
                  blur-3xl
                  transition-transform
                  duration-700
                  group-hover:scale-150
                "
              />


              {/* =================================================
                  SOLID FOLDED PAPER — TOP RIGHT
              ================================================= */}

              {/* Silver outer paper */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  z-20
                  h-[110px]
                  w-[110px]
                  bg-[#DCE2E7]
                "
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%)",
                }}
              />


              {/* Ivory main paper */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  z-20
                  h-[88px]
                  w-[88px]
                  bg-[#F6F4EF]
                  shadow-[-10px_10px_20px_rgba(11,31,58,.20)]
                  transition-all
                  duration-500
                  group-hover:h-[98px]
                  group-hover:w-[98px]
                "
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%)",
                }}
              />


              {/* Teal folded underside */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  z-20
                  h-[88px]
                  w-[88px]
                  bg-[#087F8C]
                  transition-all
                  duration-500
                  group-hover:h-[98px]
                  group-hover:w-[98px]
                "
                style={{
                  clipPath:
                    "polygon(0 0, 100% 100%, 0 100%)",
                }}
              />


              {/* Navy inner fold */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  z-20
                  h-[58px]
                  w-[58px]
                  bg-[#0B1F3A]
                "
                style={{
                  clipPath:
                    "polygon(100% 0, 100% 100%, 0 100%)",
                }}
              />


              {/* Gold fold detail */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[18px]
                  top-[18px]
                  z-30
                  h-[2px]
                  w-[45px]
                  rotate-45
                  bg-[#C6A15B]
                  transition-all
                  duration-500
                  group-hover:w-[52px]
                "
              />


              {/* =================================================
                  LARGE ICON
              ================================================= */}

              <motion.div
                whileHover={{
                  rotate: -5,
                  scale: 1.08,
                }}

                transition={{
                  duration: 0.3,
                }}

                className="
                  relative
                  z-10
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-[24px]
                  border
                  border-white/20
                  bg-white/[0.08]
                  text-[#C6A15B]
                  shadow-[inset_0_1px_0_rgba(255,255,255,.15)]
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  group-hover:border-[#C6A15B]/60
                  group-hover:bg-white/[0.12]
                "
              >

                <Icon
                  size={40}
                  strokeWidth={1.2}
                />

              </motion.div>


              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  mt-10
                "
              >

                <h3
                  className="
                    text-[21px]
                    font-semibold
                    tracking-[-0.03em]
                    text-white
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    mt-3
                    max-w-[220px]
                    text-[12px]
                    leading-6
                    text-[#DCE2E7]
                  "
                >
                  {item.text}
                </p>


                {/* Gold accent */}

                <div
                  className="
                    mt-7
                    h-[2px]
                    w-8
                    bg-[#C6A15B]
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />

              </div>


              {/* =================================================
                  BOTTOM LABEL
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-8
                  right-8
                  z-10
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white/30
                  transition-colors
                  duration-300
                  group-hover:text-white/60
                  lg:bottom-9
                  lg:right-9
                "
              >
                IBS / PRINCIPLE
              </div>


              {/* =================================================
                  BOTTOM FOLDED PAPER DETAIL
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  z-10
                  h-[55px]
                  w-[55px]
                  bg-[#123A5A]
                "
                style={{
                  clipPath:
                    "polygon(0 0, 0 100%, 100% 100%)",
                }}
              />


              {/* Bottom gold line */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  z-20
                  h-[2px]
                  w-0
                  bg-gradient-to-r
                  from-[#C6A15B]
                  via-[#087F8C]
                  to-[#C6A15B]
                  transition-all
                  duration-700
                  group-hover:w-full
                "
              />

            </motion.div>
          );
        })}

      </div>

    </div>


    {/* =========================================================
        BOTTOM STATEMENT
    ========================================================= */}

    <motion.div
      initial={{
        opacity: 0,
      }}

      whileInView={{
        opacity: 1,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.8,
        delay: 0.2,
      }}

      className="
        mt-7
        flex
        items-center
        justify-between
        border-t
        border-[#DCE2E7]
        pt-5
      "
    >

      <span
        className="
          text-[8px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-[#68737D]
        "
      >
        Built on principles
      </span>


      <span
        className="
          bg-gradient-to-r
          from-[#0B1F3A]
          via-[#123A5A]
          to-[#087F8C]
          bg-clip-text
          text-[8px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-transparent
        "
      >
        People · Purpose · Progress
      </span>

    </motion.div>

  </div>

</section>
      {/* =====================================================
          CORE TEAM — EXECUTIVE LEADERSHIP
      ===================================================== */}
      <section
        id="team"
        className="relative overflow-hidden bg-[#071A2D] px-5 py-20 sm:px-8 lg:px-10 lg:py-24 xl:px-12"
      >
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[28%] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[#087F8C]/[0.07] blur-[120px]" />
          <div className="absolute -left-48 top-[18%] h-[520px] w-[520px] rounded-full bg-[#C6A15B]/[0.045] blur-[110px]" />
          <div className="absolute -right-48 bottom-[-5%] h-[560px] w-[560px] rounded-full bg-[#087F8C]/[0.055] blur-[120px]" />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        {/* Oversized decorative icons */}
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -18, 0], rotate: [0, 5, 0], opacity: [0.05, 0.11, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-[2%] top-[18%] hidden text-[#C6A15B] lg:block"
        >
          <Award size={180} strokeWidth={0.65} />
        </motion.div>

        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0], opacity: [0.04, 0.10, 0.04] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute bottom-[10%] right-[2%] hidden text-[#087F8C] lg:block"
        >
          <BrainCircuit size={190} strokeWidth={0.65} />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-[1320px]">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-[820px] text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C6A15B]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C6A15B]">
                Core Team
              </span>
              <span className="h-px w-12 bg-[#087F8C]" />
            </div>

            <h2 className="mt-5 text-[38px] font-semibold leading-[1] tracking-[-0.045em] text-white sm:text-[52px] lg:text-[62px]">
              Leadership that
              <span className="block bg-gradient-to-r from-white via-[#D8B866] to-[#43B8BA] bg-clip-text text-transparent">
                drives the difference.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[690px] text-[12px] leading-6 text-[#B9C5CF] sm:text-[13px]">
              IBS brings together professionals across finance, strategy, governance,
              operations, technology, research, economics and technical disciplines.
            </p>
          </motion.div>

          {/* =====================================================
              FEATURED PRESIDENT — PREMIUM
          ===================================================== */}
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="group relative mx-auto mt-14 max-w-[1080px]"
          >
            {/* Premium gold + teal frame */}
            <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-r from-[#C6A15B] via-[#087F8C] to-[#C6A15B] opacity-90 blur-[1px]" />

            <div className="relative overflow-hidden rounded-[32px] border border-[#C6A15B]/40 bg-gradient-to-br from-[#123A5A] via-[#0B1F3A] to-[#071A2D] shadow-[0_35px_100px_rgba(0,0,0,.38)]">

              {/* Ambient highlights */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#087F8C]/15 blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-28 left-[18%] h-64 w-64 rounded-full bg-[#C6A15B]/10 blur-[80px]" />

              {/* Fine grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                  backgroundSize: "46px 46px",
                }}
              />

              <div className="relative grid lg:grid-cols-[310px_1fr]">

                {/* PRESIDENT PORTRAIT */}
                <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#16445D] via-[#123A5A] to-[#0B1F3A] p-9 sm:p-11">

                  {/* Gold halo */}
                  <div className="absolute h-[235px] w-[235px] rounded-full border border-[#C6A15B]/20" />
                  <div className="absolute h-[205px] w-[205px] rounded-full border border-[#087F8C]/20" />

                  <div className="relative">
                    <div className="absolute -inset-4 rounded-[30px] border border-[#C6A15B]/35" />

                    <div className="relative h-[205px] w-[205px] overflow-hidden rounded-[26px] border-[3px] border-[#C6A15B] bg-[#DCE2E7] shadow-[0_24px_55px_rgba(0,0,0,.38)]">
                      <img
                        src={leaders[0].image}
                        alt={leaders[0].name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>

                    {/* Role badge */}
                    <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-[#C6A15B]/70 bg-[#071A2D] px-5 py-2.5 text-[8px] font-bold uppercase tracking-[0.24em] text-[#D8B866] shadow-[0_10px_30px_rgba(0,0,0,.35)]">
                      <Award size={13} strokeWidth={1.6} />
                      President
                    </div>
                  </div>
                </div>

                {/* PRESIDENT DETAILS */}
                <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-12">

                  <div className="flex items-center gap-3">
                    <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#C6A15B]">
                      Executive Leadership · 01
                    </span>
                    <span className="h-px w-16 bg-gradient-to-r from-[#C6A15B] to-[#087F8C]" />
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-[32px] font-semibold tracking-[-0.045em] text-white sm:text-[40px]">
                        {leaders[0].name}
                      </h3>

                      <p className="mt-2 max-w-[700px] text-[9px] font-bold uppercase leading-5 tracking-[0.09em] text-[#43B8BA]">
                        {leaders[0].role}
                      </p>
                    </div>

                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C6A15B]/35 bg-[#C6A15B]/10 text-[#D8B866] sm:flex">
                      <Award size={19} strokeWidth={1.4} />
                    </div>
                  </div>

                  {/* Gold rule */}
                  <div className="mt-6 h-[2px] w-14 bg-[#C6A15B] transition-all duration-500 group-hover:w-24" />

                  <p className="mt-6 max-w-[720px] text-[11px] leading-6 text-[#DCE2E7] sm:text-[12px]">
                    {leaders[0].description}
                  </p>

                  {/* Bottom executive strip */}
                  <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-5">
                    <div>
                      <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#718393]">
                        Role
                      </p>
                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#C6A15B]">
                        President
                      </p>
                    </div>

                    <span className="hidden h-8 w-px bg-white/10 sm:block" />

                    <div>
                      <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#718393]">
                        Leadership Focus
                      </p>
                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#43B8BA]">
                        Strategy · Governance · Impact
                      </p>
                    </div>

                    <span className="ml-auto hidden text-[8px] font-bold uppercase tracking-[0.22em] text-white/25 lg:block">
                      IBS Canada
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* =====================================================
              SENIOR LEADERSHIP — COO + STRATEGIC ADVISOR
          ===================================================== */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {leaders.slice(1, 3).map((leader, index) => {
              const Icon = index === 0 ? TrendingUp : Handshake;

              return (
                <motion.article
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-[#0B1F3A] via-[#123A5A] to-[#0E4552] p-[1px] shadow-[0_22px_55px_rgba(0,0,0,.22)]"
                >
                  <div className="relative h-full overflow-hidden rounded-[25px] bg-[#0B1F3A] p-6 sm:p-7">
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#087F8C]/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

                    <div className="relative flex gap-5">
                      <div className="relative h-[105px] w-[105px] shrink-0 overflow-hidden rounded-[20px] border-2 border-[#C6A15B]/80 bg-[#DCE2E7]">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-tl-[12px] bg-[#087F8C] text-white">
                          <Icon size={14} />
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#C6A15B]">
                          {index === 0 ? "Executive Leadership · 02" : "Senior Advisory · 03"}
                        </p>
                        <h3 className="mt-2 text-[21px] font-semibold tracking-[-0.025em] text-white">
                          {leader.name}
                        </h3>
                        <p className="mt-1 text-[8px] font-bold uppercase leading-4 tracking-[0.07em] text-[#43B8BA]">
                          {leader.role}
                        </p>
                        {leader.tagline && (
                          <p className="mt-2 text-[7px] font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">
                            {leader.tagline}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="relative mt-6 border-t border-white/10 pt-5">
                      <p className="text-[10px] leading-6 text-[#B9C5CF]">
                        {leader.description}
                      </p>
                      <div className="mt-5 h-[2px] w-9 bg-[#C6A15B] transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* =====================================================
              MEET THE EXPERTS — ADVISORS & CONSULTANTS
          ===================================================== */}
          <div className="mt-14">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#C6A15B]">
                  Advisors & Consultants
                </p>

                <h3 className="mt-3 text-[34px] font-semibold leading-none tracking-[-0.045em] text-white sm:text-[42px]">
                  Meet the{" "}
                  <span className="text-[#43B8BA]">Experts</span>
                </h3>
              </div>

              <p className="max-w-[330px] text-[11px] leading-5 text-[#B9C5CF] sm:text-right">
                Professionals across finance, strategy, governance, operations,
                technology, research, economics and technical disciplines.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((person, index) => {
                const Icon = person.icon;

                return (
                  <motion.article
  key={person.name}
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.55, delay: index * 0.06 }}
  whileHover={{ y: -6 }}
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
  {/* =========================
      CARD TOP / PROFILE
  ========================= */}
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

    <div className="relative flex items-start gap-5">
      
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
          <Icon size={14} strokeWidth={1.6} />
        </div>
      </div>

      {/* DETAILS */}
      <div className="min-w-0 flex-1 pt-1">

        {/* Number + arrow */}
        <div className="flex items-start justify-between gap-3">
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

  {/* =========================
      CARD CONTENT
  ========================= */}
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
    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between sm:left-6 sm:right-6">
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
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-4"
            >
              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#C6A15B]">
                  Leadership Team
                </p>
                <h3 className="mt-1 text-[24px] font-semibold tracking-[-0.025em] text-white sm:text-[28px]">
                  Expertise across every discipline.
                </h3>
              </div>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-[#087F8C]/40 to-transparent sm:block" />
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
                const Icon = icons[index % icons.length];

                return (
                  <motion.article
                    key={leader.name}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.55, delay: index * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#F6F4EF] shadow-[0_18px_45px_rgba(0,0,0,.18)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C6A15B] via-[#087F8C] to-[#C6A15B]" />

                    <div className="flex items-center gap-4 bg-gradient-to-r from-[#0B1F3A] to-[#123A5A] p-5">
                      <div className="relative h-[82px] w-[82px] shrink-0 overflow-hidden rounded-[18px] border-2 border-[#C6A15B]/80 bg-[#DCE2E7]">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#C6A15B]">
                            0{index + 4} / Leadership
                          </span>
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#087F8C]/40 bg-[#087F8C]/15 text-[#43B8BA]">
                            <Icon size={13} />
                          </span>
                        </div>

                        <h3 className="text-[16px] font-semibold leading-5 tracking-[-0.02em] text-white">
                          {leader.name}
                        </h3>

                        <p className="mt-1 text-[7px] font-bold uppercase leading-3.5 tracking-[0.07em] text-[#43B8BA]">
                          {leader.role}
                        </p>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-[10px] leading-5 text-[#68737D]">
                        {leader.description}
                      </p>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="h-[2px] w-9 bg-[#C6A15B] transition-all duration-500 group-hover:w-16" />
                        <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#A47C2F]">
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-14 flex max-w-[1000px] flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A15B]/50 bg-[#C6A15B]/10 text-[#C6A15B]">
                <UsersRound size={15} />
              </span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C6A15B]">
                  One multidisciplinary team
                </p>
                <p className="mt-1 text-[10px] text-[#8FA0AD]">
                  Different expertise. One shared purpose.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.22em] text-[#8FA0AD]">
              <span className="h-px w-8 bg-[#087F8C]" />
              Strategy · Operations · Expertise · Impact
              <span className="h-px w-8 bg-[#C6A15B]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

     

    </main>
    <Footer/>
    </>
   
  );
}