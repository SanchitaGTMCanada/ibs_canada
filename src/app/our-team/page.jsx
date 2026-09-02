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
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Audits and reviews; internal controls; taxation; financial planning; business plans; feasibility studies; strategic planning; performance management; program reviews.",
  },
  {
    name: "Newton Grey",
    role: "Chief Operating Officer | MSc, Tourism and Hospitality Management",
    tagline: "Growth · Partnerships · Leadership",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    description:
      "Business development; strategic growth; corporate relationship management; market expansion; revenue generation; strategic partnerships; leadership and team development.",
  },
  {
    name: "Manik Duggar",
    role: "Strategic Advisor",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    description:
      "Policy advisory; major-project management; Northern projects; environmental and regulatory experience; international development and capacity building.",
  },
  {
    name: "Isaiah Mutandiwa",
    role: "Senior Vice President – Operations | B.Acc. Hons (UZ)",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    description:
      "Audits and reviews; business process re-engineering; procedures manuals; controllership; internal controls; systems analysis; training.",
  },
  {
    name: "Meera Basnyat",
    role: "Director of Operations | MBA, CPA, CGA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description:
      "Audits, reviews and compilations; internal controls; taxation.",
  },
  {
    name: "Ranajit Batabyal",
    role: "Director – Business Development",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    description:
      "Accounting systems; business planning; financial analysis; budgeting; business process development; project management; corporate management; policy writing.",
  },
  {
    name: "Partha Chakraborty",
    role: "Director – IT Infrastructure",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    description:
      "IT infrastructure management; vendor management; Windows server; network security and firewall; IT operations; infrastructure planning and design.",
  },
  {
    name: "Paulami Gupta",
    role: "Director of Consulting",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    description:
      "Professional research and writing; business proposals and plans; project research and coordination; editing; administration; event management.",
  },
  {
    name: "Edwin Luyinda",
    role: "Engineering Specialist",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    description:
      "Technical leadership; project management and oversight; compliance and standards; safety and risk management; collaboration and communication.",
  },
  {
    name: "Kimberly Acheson",
    role: "Controller & Financial Advisor to the President | BBA",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    description:
      "Strategic financial planning; financial reporting and compliance; budgeting, forecasting and cash-flow management; risk management and internal controls; accounting operations and systems; stakeholder collaboration.",
  },
];

const team = [
  {
    name: "Norman Yakeleya",
    role: "Indigenous Advisor",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    icon: UsersRound,
    description:
      "Indigenous community knowledge, governance and community context; business consulting; training and professional development.",
  },
  {
    name: "Dr. Deborah Nixon",
    role: "Senior Management Consultant | PhD, MEH, B.Comm",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    icon: Target,
    description:
      "Organizational development; business and strategic planning; community consultation; market research; leadership development; change management; performance assessment; project management.",
  },
  {
    name: "Agamani Chakrabarty",
    role: "Economist | M.A, B.Comm",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    icon: TrendingUp,
    description:
      "Statistical analysis and modelling; investment research; enterprise risk modelling; economic and business analysis; data integrity; research reporting.",
  },
  {
    name: "Eric Whitworth",
    role: "Public Sector Consultant | CPA, CMA",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
    icon: BriefcaseBusiness,
    description:
      "Program reviews; compliance audits; corporate training; business process re-engineering; policies and procedures; controllership; internal controls.",
  },
  {
    name: "Kyle Chisholm",
    role: "Senior Accounting Advisor | CPA, CMA, MBA",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    icon: Award,
    description:
      "Audits and reviews; compilations; internal controls; bookkeeping; strategy development; taxation; training.",
  },
  {
    name: "Suman Basnyat",
    role: "Accounting & Sage Intacct Advisor | CPA, CMA, MBA",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
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
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90"
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
          CORE TEAM — LEADERSHIP ORBIT
      ===================================================== */}
      <section
        className="relative overflow-hidden bg-[#071A2D] px-5 py-20 sm:px-8 lg:px-10 lg:py-24 xl:px-12"
      >
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[45%] h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#087F8C]/10 blur-[110px]" />
          <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C6A15B]/[0.05] blur-[100px]" />
          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#087F8C]/[0.08] blur-[110px]" />
          <div className="absolute left-1/2 top-[47%] hidden h-[920px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035] lg:block" />
          <div className="absolute left-1/2 top-[47%] hidden h-[710px] w-[710px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A15B]/[0.09] lg:block" />
          <div className="absolute left-1/2 top-[47%] hidden h-[515px] w-[515px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#087F8C]/[0.16] lg:block" />
        </div>

        {/* Decorative floating icons */}
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -16, 0], rotate: [0, 5, 0], opacity: [0.06, 0.16, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-[3%] top-[16%] hidden text-[#C6A15B] lg:block"
        >
          <Award size={150} strokeWidth={0.6} />
        </motion.div>

        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 18, 0], rotate: [0, -6, 0], opacity: [0.05, 0.14, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute bottom-[9%] right-[3%] hidden text-[#087F8C] lg:block"
        >
          <BrainCircuit size={170} strokeWidth={0.6} />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-[1380px]">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-[780px] text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C6A15B]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C6A15B]">
                Core Team
              </span>
              <span className="h-px w-12 bg-[#C6A15B]" />
            </div>

            <h2 className="mt-5 text-[38px] font-semibold leading-[1] tracking-[-0.045em] text-white sm:text-[52px] lg:text-[62px]">
              Leadership at the Core.
              <span className="block bg-gradient-to-r from-white via-[#D8B866] to-[#43B8BA] bg-clip-text text-transparent">
                Strength in Every Direction.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[650px] text-[12px] leading-6 text-[#B9C5CF] sm:text-[13px]">
              IBS brings together professionals across finance, strategy, governance,
              operations, technology, research, economics and technical disciplines.
            </p>
          </motion.div>

          {/* =====================================================
              DESKTOP — STEPPED LEADERSHIP
              ===================================================== */}
          <div className="relative mx-auto mt-14 hidden w-full max-w-[1380px] xl:block">
            {/* Animated oversized background icons */}
            <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden rounded-[50px]">
              <motion.div
                aria-hidden="true"
                animate={{ y: [0, -24, 0], rotate: [0, 8, 0], opacity: [0.16, 0.30, 0.16], scale: [1, 1.05, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[1%] top-[10%] text-[#087F8C]"
              >
                <UsersRound size={190} strokeWidth={0.65} />
              </motion.div>
              <motion.div
                aria-hidden="true"
                animate={{ y: [0, 26, 0], rotate: [0, -8, 0], opacity: [0.14, 0.28, 0.14], scale: [1, 1.06, 1] }}
                transition={{ duration: 8, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[0%] top-[22%] text-[#C6A15B]"
              >
                <Target size={205} strokeWidth={0.65} />
              </motion.div>
              <motion.div
                aria-hidden="true"
                animate={{ y: [0, -22, 0], rotate: [0, -7, 0], opacity: [0.13, 0.27, 0.13], scale: [1, 1.05, 1] }}
                transition={{ duration: 6.5, delay: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[5%] bottom-[8%] text-[#C6A15B]"
              >
                <Lightbulb size={175} strokeWidth={0.65} />
              </motion.div>
              <motion.div
                aria-hidden="true"
                animate={{ y: [0, 23, 0], rotate: [0, 8, 0], opacity: [0.14, 0.29, 0.14], scale: [1, 1.06, 1] }}
                transition={{ duration: 7.5, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[5%] bottom-[6%] text-[#087F8C]"
              >
                <BriefcaseBusiness size={185} strokeWidth={0.65} />
              </motion.div>
              <motion.div
                aria-hidden="true"
                animate={{ y: [0, -18, 0], rotate: [0, 5, 0], opacity: [0.10, 0.22, 0.10] }}
                transition={{ duration: 9, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[25%] top-[3%] text-[#C6A15B]"
              >
                <Handshake size={135} strokeWidth={0.65} />
              </motion.div>
              <motion.div
                aria-hidden="true"
                animate={{ y: [0, 18, 0], rotate: [0, -5, 0], opacity: [0.10, 0.22, 0.10] }}
                transition={{ duration: 9.5, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[25%] bottom-[2%] text-[#087F8C]"
              >
                <TrendingUp size={140} strokeWidth={0.65} />
              </motion.div>

              <div className="absolute left-1/2 top-[3%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#087F8C]/[0.055] blur-[120px]" />
              <div className="absolute left-[-100px] bottom-[-100px] h-[400px] w-[400px] rounded-full bg-[#C6A15B]/[0.04] blur-[100px]" />
              <div className="absolute right-[-100px] top-[20%] h-[450px] w-[450px] rounded-full bg-[#087F8C]/[0.04] blur-[110px]" />
            </div>

            {/* Soft background structure */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[40px]">
              <div className="absolute left-1/2 top-[8%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#087F8C]/[0.08] blur-[100px]" />
              <div className="absolute -left-32 bottom-10 h-[380px] w-[380px] rounded-full bg-[#C6A15B]/[0.045] blur-[90px]" />
              <div className="absolute -right-32 top-32 h-[420px] w-[420px] rounded-full bg-[#087F8C]/[0.05] blur-[100px]" />
            </div>

            {/* Leadership spine */}
            <div className="pointer-events-none absolute left-1/2 top-[300px] bottom-[170px] w-px -translate-x-1/2 bg-gradient-to-b from-[#C6A15B]/80 via-[#087F8C]/50 to-[#C6A15B]/20" />

            {/* PRESIDENT — STEP 00 */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative z-10 mx-auto w-[450px]"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full border border-[#C6A15B]/50 bg-[#0B1F3A] px-5 py-2 text-[8px] font-bold uppercase tracking-[0.28em] text-[#C6A15B]">
                Step 00 · Leadership
              </div>

              <div className="rounded-[38px] border border-[#C6A15B]/50 bg-gradient-to-br from-[#0B1F3A] via-[#123A5A] to-[#087F8C] p-[2px] shadow-[0_30px_80px_rgba(0,0,0,.28)]">
                <div className="rounded-[36px] bg-[#F6F4EF] px-10 py-10 text-center">
                  <div className="mx-auto h-[150px] w-[150px] overflow-hidden rounded-full border-[3px] border-[#C6A15B] bg-[#DCE2E7] shadow-lg">
                    <img src={leaders[0].image} alt={leaders[0].name} className="h-full w-full object-cover" />
                  </div>
                  <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#C6A15B]">
                    <Award size={12} /> President
                  </div>
                  <h3 className="mt-3 text-[27px] font-semibold tracking-[-0.03em] text-[#0B1F3A]">{leaders[0].name}</h3>
                  <p className="mt-1 text-[9px] leading-4 text-[#68737D]">{leaders[0].role}</p>
                  <p className="mx-auto mt-4 max-w-[360px] text-[11px] leading-5 text-[#68737D]">{leaders[0].description}</p>
                </div>
              </div>
            </motion.div>

            {/* Connector */}
            <div className="relative z-10 mx-auto h-16 w-px bg-gradient-to-b from-[#C6A15B] to-[#087F8C]" />

            {/* STEP 01 — COO */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 mx-auto w-[420px]"
            >
              <div className="rounded-[32px] border border-[#087F8C]/40 bg-[#123A5A] p-1 shadow-[0_22px_60px_rgba(0,0,0,.2)]">
                <div className="rounded-[28px] bg-[#0B1F3A] px-8 py-8 text-center">
                  <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#C6A15B]">Step 01 · Operations</span>
                  <div className="mx-auto mt-4 h-[105px] w-[105px] overflow-hidden rounded-full border-2 border-[#C6A15B] bg-[#DCE2E7]">
                    <img src={leaders[1].image} alt={leaders[1].name} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-4 text-[20px] font-semibold text-white">{leaders[1].name}</h3>
                  <p className="mt-1 text-[8px] font-semibold uppercase leading-4 tracking-[0.08em] text-[#43B8BA]">{leaders[1].role}</p>
                  <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">{leaders[1].tagline}</p>
                </div>
              </div>
            </motion.div>

            {/* Connector */}
            <div className="relative z-10 mx-auto h-14 w-px bg-gradient-to-b from-[#087F8C] to-[#C6A15B]" />

            {/* STEPPED TEAM LEVELS */}
            <div className="relative z-10 space-y-7">
              {[
                [leaders[2], leaders[6]],
                [leaders[3], leaders[4], leaders[7]],
                [leaders[5], leaders[8], leaders[9]],
              ].map((row, rowIndex) => {
                const icons = [Handshake, BriefcaseBusiness, UsersRound, Target, BrainCircuit, Lightbulb, ShieldCheck, Award];
                return (
                  <motion.div
                    key={`step-row-${rowIndex}`}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.55, delay: rowIndex * 0.08 }}
                    className="relative"
                  >
                    {/* horizontal step rail */}
                    <div className="pointer-events-none absolute left-[7%] right-[7%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#087F8C]/30 to-transparent" />

                    <div
                      className={
                        row.length === 2
                          ? "mx-auto grid max-w-[860px] grid-cols-2 gap-10"
                          : "mx-auto grid max-w-[1120px] grid-cols-3 gap-8"
                      }
                    >
                      {row.map((leader, index) => {
                        const leaderIndex = leaders.indexOf(leader);
                        const Icon = icons[Math.max(0, leaderIndex - 2) % icons.length];
                        const stepNumber = String(rowIndex + 2).padStart(2, "0");

                        return (
                          <div key={leader.name} className="relative">
                            <div className="absolute -top-3 left-7 z-20 flex h-7 min-w-7 items-center justify-center rounded-full border border-[#C6A15B]/50 bg-[#0B1F3A] px-2 text-[7px] font-bold text-[#C6A15B]">
                              {stepNumber}
                            </div>

                            <article className="group relative min-h-[300px] overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-[#0B1F3A] via-[#123A5A] to-[#087F8C] p-[1px] shadow-[0_20px_50px_rgba(0,0,0,.2)] transition-transform duration-300 hover:-translate-y-2">
                              <div className="relative h-full overflow-hidden rounded-[25px] bg-[#F6F4EF]">
                                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C6A15B] via-[#087F8C] to-[#C6A15B]" />

                                <div className="flex items-center gap-4 p-5">
                                  <div className="relative h-[94px] w-[94px] shrink-0 overflow-hidden rounded-[18px] border-2 border-[#C6A15B] bg-[#DCE2E7]">
                                    <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
                                    <div className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-tl-[12px] bg-[#0B1F3A] text-[#C6A15B]">
                                      <Icon size={13} />
                                    </div>
                                  </div>

                                  <div className="min-w-0">
                                    <p className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#A47C2F]">Leadership Step</p>
                                    <h3 className="mt-1 text-[18px] font-semibold leading-6 tracking-[-0.02em] text-[#0B1F3A]">{leader.name}</h3>
                                    <p className="mt-1 text-[8px] font-bold uppercase leading-3.5 tracking-[0.06em] text-[#087F8C]">{leader.role}</p>
                                  </div>
                                </div>

                                <div className="border-t border-[#DCE2E7] px-5 py-4">
                                  <p className="text-[10px] leading-6 text-[#68737D]">{leader.description}</p>
                                  <div className="mt-4 h-[2px] w-8 bg-[#C6A15B] transition-all duration-500 group-hover:w-16" />
                                </div>
                              </div>
                            </article>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto mt-14 flex max-w-[920px] items-center justify-center gap-4 border-t border-white/10 pt-7"
            >
              <span className="h-px w-12 bg-[#C6A15B]" />
              <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#8FA0AD]">Strategy · Operations · Expertise · Impact</span>
              <span className="h-px w-12 bg-[#087F8C]" />
            </motion.div>
          </div>

          {/* =====================================================
              MOBILE / TABLET — SAME HIERARCHY, CLEAN FLOW
          ===================================================== */}
          <div className="mt-12 xl:hidden">
            {/* President */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-[390px] rounded-[32px] border border-[#C6A15B]/50 bg-gradient-to-br from-[#0B1F3A] via-[#123A5A] to-[#087F8C] p-2 shadow-[0_25px_60px_rgba(0,0,0,.25)]"
            >
              <div className="rounded-[26px] bg-[#F6F4EF] px-6 py-7 text-center">
                <div className="mx-auto h-[125px] w-[125px] overflow-hidden rounded-full border-[3px] border-[#C6A15B] bg-[#DCE2E7] shadow-lg">
                  <img src={leaders[0].image} alt={leaders[0].name} className="h-full w-full object-cover" />
                </div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-4 py-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-[#C6A15B]">
                  <Award size={12} /> President
                </div>
                <h3 className="mt-3 text-[21px] font-semibold text-[#0B1F3A]">{leaders[0].name}</h3>
                <p className="mt-1 text-[9px] leading-4 text-[#68737D]">{leaders[0].role}</p>
                <p className="mt-3 text-[10px] leading-5 text-[#68737D]">{leaders[0].description}</p>
              </div>
            </motion.article>

            <div className="mx-auto my-6 h-12 w-px bg-gradient-to-b from-[#C6A15B] to-[#087F8C]" />

            <div className="grid gap-4 sm:grid-cols-2">
              {leaders.slice(1).map((leader, index) => {
                const icons = [
                  TrendingUp,
                  Handshake,
                  BriefcaseBusiness,
                  UsersRound,
                  Target,
                  BrainCircuit,
                  Lightbulb,
                  ShieldCheck,
                  Award,
                ];
                const Icon = icons[index];

                return (
                  <motion.article
                    key={leader.name}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.55, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#F6F4EF] shadow-[0_15px_40px_rgba(0,0,0,.18)]"
                  >
                    <div className="flex items-center gap-4 bg-gradient-to-r from-[#0B1F3A] to-[#123A5A] p-4">
                      <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-2 border-[#C6A15B] bg-[#DCE2E7]">
                        <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#087F8C] text-white">
                          <Icon size={15} />
                        </div>
                        <h3 className="text-[14px] font-semibold text-white">{leader.name}</h3>
                        <p className="mt-1 text-[8px] font-semibold uppercase leading-3.5 tracking-[0.08em] text-[#43B8BA]">{leader.role}</p>
                        {leader.tagline && (
                          <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.1em] text-[#C6A15B]">{leader.tagline}</p>
                        )}
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] leading-5 text-[#68737D]">{leader.description}</p>
                      <div className="mt-4 h-[2px] w-9 bg-[#C6A15B] transition-all duration-500 group-hover:w-16" />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* Bottom message */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-14 flex max-w-[900px] flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A15B]/50 bg-[#C6A15B]/10 text-[#C6A15B]">
                <UsersRound size={15} />
              </span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C6A15B]">One multidisciplinary team</p>
                <p className="mt-1 text-[10px] text-[#8FA0AD]">Different expertise. One shared purpose.</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.22em] text-[#8FA0AD]">
              <span className="h-px w-8 bg-[#087F8C]" />
              Expertise · Collaboration · Impact
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          TEAM
      ===================================================== */}

      <section
        id="team"
        className="
          relative
          overflow-hidden
          bg-[#E8F3F2]
          px-6
          py-16
          sm:px-8
          lg:px-10
          lg:py-20
          xl:px-12
        "
      >

        <FloatingIcon
          Icon={UsersRound}
          delay={0}
          className="left-[3%] top-[20%]"
        />

        <FloatingIcon
          Icon={BrainCircuit}
          delay={1}
          className="right-[3%] top-[30%]"
        />

        <FloatingIcon
          Icon={Target}
          delay={2}
          className="left-[7%] bottom-[12%]"
        />

        <div
          className="
            relative
            mx-auto
            max-w-[1280px]
          "
        >

          {/* Heading */}

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
                  text-[#A47C2F]
                "
              >
                Advisors & Consultants
              </p>

              <h2
                className="
                  mt-3
                  text-[42px]
                  font-semibold
                  leading-none
                  tracking-[-0.05em]
                  text-[#0B1F3A]
                  sm:text-[54px]
                "
              >
                Meet the{" "}
                <span className="text-[#087F8C]">
                  Experts
                </span>
              </h2>

            </div>

            <p
              className="
                max-w-[280px]
                text-[11px]
                leading-5
                text-[#68737D]
                sm:text-right
              "
            >
              Professionals across finance, strategy, governance, operations, technology, research, economics and technical disciplines.
            </p>

          </div>

          {/* Compact expert cards */}

          <div
            className="
              mt-10
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
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[18px] border border-[#DCE2E7] bg-white shadow-[0_10px_30px_rgba(11,31,58,.06)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(11,31,58,.12)]"
                >
                  <div className="flex gap-4 p-4 sm:p-5">
                    <div className="relative h-[112px] w-[92px] shrink-0 overflow-hidden rounded-[14px] bg-[#DCE2E7]">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/55 to-transparent" />
                      <div className="absolute bottom-2 left-2 flex h-7 w-7 items-center justify-center rounded-lg bg-[#087F8C] text-white shadow-md">
                        <Icon size={13} strokeWidth={1.6} />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#C6A15B]">
                          0{index + 1} / Expert
                        </span>
                        <ArrowUpRight size={14} className="shrink-0 text-[#087F8C]/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C6A15B]" />
                      </div>

                      <h3 className="mt-2 text-[15px] font-semibold leading-5 tracking-[-0.025em] text-[#0B1F3A]">
                        {person.name}
                      </h3>

                      <p className="mt-1.5 line-clamp-2 text-[8px] font-bold uppercase leading-3.5 tracking-[0.09em] text-[#087F8C]">
                        {person.role}
                      </p>

                      <div className="mt-3 h-px w-8 bg-[#C6A15B] transition-all duration-500 group-hover:w-14" />
                    </div>
                  </div>

                  <div className="border-t border-[#DCE2E7] px-4 py-3 sm:px-5">
                    <p className="line-clamp-3 text-[9px] leading-[1.65] text-[#68737D]">
                      {person.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
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