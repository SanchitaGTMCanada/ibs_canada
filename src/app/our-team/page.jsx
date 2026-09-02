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
              DESKTOP — PRESIDENT + RADIAL TEAM
              ===================================================== */}
          <div className="relative mx-auto mt-14 hidden h-[1280px] w-full max-w-[1380px] xl:block">
            {(() => {
              const orbitRadius = 500;
              const centerX = 690;
              const centerY = 640;
              const presidentRadius = 170;
              const cardWidth = 235;
              const cardHeight = 280;
              const halfCardWidth = cardWidth / 2;
              const halfCardHeight = cardHeight / 2;

              const orbitAngles = leaders.slice(1).map((_, index) => -90 - index * 40);

              const getPoint = (angle, radius) => {
                const radians = (angle * Math.PI) / 180;
                return {
                  x: centerX + Math.cos(radians) * radius,
                  y: centerY + Math.sin(radians) * radius,
                };
              };

              // Find the exact point where a radial connector meets each card edge.
              const getCardEdgePoint = (angle) => {
                const radians = (angle * Math.PI) / 180;
                const ux = Math.cos(radians);
                const uy = Math.sin(radians);

                const xDistance = Math.abs(ux) < 0.0001
                  ? Infinity
                  : halfCardWidth / Math.abs(ux);
                const yDistance = Math.abs(uy) < 0.0001
                  ? Infinity
                  : halfCardHeight / Math.abs(uy);

                const edgeDistance = Math.min(xDistance, yDistance);
                const point = getPoint(angle, orbitRadius - edgeDistance);

                return point;
              };

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

              return (
                <>
                  {/* Equal-radius orbit */}
                  <motion.div
                    aria-hidden="true"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A15B]/20"
                  >
                    <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B] shadow-[0_0_20px_#C6A15B]" />
                    <span className="absolute right-[6%] top-[24%] h-2 w-2 rounded-full bg-[#087F8C] shadow-[0_0_18px_#087F8C]" />
                    <span className="absolute bottom-[9%] left-[28%] h-2 w-2 rounded-full bg-[#43B8BA] shadow-[0_0_18px_#43B8BA]" />
                  </motion.div>

                  {/* Secondary orbit */}
                  <motion.div
                    aria-hidden="true"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#087F8C]/20 border-dashed"
                  >
                    <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#43B8BA] shadow-[0_0_22px_#43B8BA]" />
                    <span className="absolute left-[10%] bottom-[18%] h-2 w-2 rounded-full bg-[#C6A15B] shadow-[0_0_18px_#C6A15B]" />
                  </motion.div>

                  {/* Inner orbit around the President */}
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]"
                  />

                  {/* =================================================
                      EXPLICIT NEWTON → PRESIDENT CONNECTION
                      Newton is the 12 o'clock card, so give this
                      vertical connection its own dedicated layer.
                      This guarantees a clean, visible connection
                      from the President's top edge to Newton's
                      bottom edge.
                  ================================================= */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 z-[25] -translate-x-1/2"
                    style={{
                      // Newton is at 12 o'clock. Keep the connector ONLY
                      // in the real gap between Newton's bottom edge and
                      // Biswanath's top edge so it can never pass behind
                      // the President card.
                      top: centerY - orbitRadius + halfCardHeight,
                      height: orbitRadius - halfCardHeight - presidentRadius,
                    }}
                  >
                    <motion.div
                      initial={{ scaleY: 0, opacity: 0 }}
                      whileInView={{ scaleY: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.45, ease: "easeOut" }}
                      className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-[#C6A15B] via-[#43B8BA] to-[#C6A15B] shadow-[0_0_14px_rgba(67,184,186,.8)]"
                    />

                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.15, duration: 0.35 }}
                      className="absolute bottom-[-6px] left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border border-[#C6A15B] bg-[#071A2D] shadow-[0_0_18px_rgba(198,161,91,.9)]"
                    />
                  </div>

                  <motion.div
                    aria-hidden="true"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: [0, 1, 0], scale: [0.5, 1.15, 0.5] }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.4, delay: 1.2, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
                    className="pointer-events-none absolute left-1/2 z-[16] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#C6A15B] shadow-[0_0_18px_#C6A15B]"
                    style={{ top: centerY - 255 }}
                  />

                  {/* =================================================
                      CENTER → EVERY CARD CONNECTORS
                      Every card uses the same 40° spacing and the
                      connector starts at the President and terminates
                      exactly at the corresponding card edge.
                  ================================================= */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 1380 1280"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 z-[14] h-full w-full overflow-visible"
                  >
                    <defs>
                      <linearGradient id="teamLinePremium" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.28" />
                        <stop offset="45%" stopColor="#43B8BA" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#C6A15B" stopOpacity="0.45" />
                      </linearGradient>
                      <filter id="teamLineGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {orbitAngles.map((angle, index) => {
                      const start = getPoint(angle, presidentRadius);
                      const end = getCardEdgePoint(angle);

                      return (
                        <g key={angle}>
                          {/* soft glow */}
                          <motion.line
                            x1={start.x}
                            y1={start.y}
                            x2={end.x}
                            y2={end.y}
                            stroke="#43B8BA"
                            strokeOpacity="0.22"
                            strokeWidth="7"
                            filter="url(#teamLineGlow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, delay: 0.2 + index * 0.08 }}
                          />

                          {/* main connector */}
                          <motion.line
                            x1={start.x}
                            y1={start.y}
                            x2={end.x}
                            y2={end.y}
                            stroke="url(#teamLinePremium)"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeDasharray="4 7"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.25, delay: 0.2 + index * 0.08 }}
                          />

                          {/* animated connection pulse */}
                          <motion.circle
                            r="4"
                            fill="#C6A15B"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: [0, 1, 0] }}
                            viewport={{ once: true }}
                            animate={{
                              cx: [start.x, end.x],
                              cy: [start.y, end.y],
                            }}
                            transition={{
                              duration: 2.8,
                              delay: 1.3 + index * 0.15,
                              repeat: Infinity,
                              repeatDelay: 1.2,
                              ease: "easeInOut",
                            }}
                          />
                        </g>
                      );
                    })}
                  </svg>

                  {/* Connection nodes at the outer edge of every card */}
                  {orbitAngles.map((angle, index) => {
                    const edge = getCardEdgePoint(angle);
                    const node = getPoint(angle, Math.max(presidentRadius + 30, orbitRadius - 145));

                    return (
                      <motion.span
                        key={`node-${angle}`}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + index * 0.08, duration: 0.35 }}
                        animate={{
                          boxShadow: [
                            "0 0 0 rgba(198,161,91,0)",
                            "0 0 20px rgba(198,161,91,.8)",
                            "0 0 0 rgba(198,161,91,0)",
                          ],
                        }}
                        className="pointer-events-none absolute z-[12] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A15B] bg-[#071A2D]"
                        style={{ left: node.x, top: node.y }}
                      >
                        <span
                          className="absolute inset-0 rounded-full bg-[#C6A15B]/30 blur-[3px]"
                          style={{ opacity: edge ? 1 : 0 }}
                        />
                      </motion.span>
                    );
                  })}

                  {/* President */}
                  <motion.article
                    initial={{ opacity: 0, scale: 0.72, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    whileHover={{ scale: 1.035 }}
                    className="absolute left-1/2 top-1/2 z-30 flex h-[325px] w-[325px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#C6A15B] bg-gradient-to-br from-[#0B1F3A] via-[#123A5A] to-[#087F8C] p-[9px] shadow-[0_0_90px_rgba(8,127,140,.3)]"
                  >
                    <motion.div
                      aria-hidden="true"
                      animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.7, 0.35] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-[-18px] rounded-full border border-[#C6A15B]/35"
                    />
                    <div className="absolute inset-[-30px] rounded-full border border-[#087F8C]/10" />

                    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full border border-white/15 bg-[#F6F4EF] text-center">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(8,127,140,.18),transparent_48%)]" />

                      <div className="relative h-[138px] w-[138px] overflow-hidden rounded-full border-[3px] border-[#C6A15B] bg-[#DCE2E7] shadow-[0_12px_35px_rgba(11,31,58,.25)]">
                        <img
                          src={leaders[0].image}
                          alt={leaders[0].name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <span className="relative mt-4 rounded-full bg-[#0B1F3A] px-4 py-1.5 text-[8px] font-bold uppercase tracking-[0.22em] text-[#C6A15B]">
                        President
                      </span>

                      <h3 className="relative mt-3 px-4 text-[21px] font-semibold tracking-[-0.035em] text-[#0B1F3A]">
                        {leaders[0].name}
                      </h3>

                      <p className="relative mt-1 max-w-[240px] px-4 text-[9px] leading-4 text-[#68737D]">
                        {leaders[0].role}
                      </p>

                      <div className="relative mt-3 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#087F8C]">
                        <Award size={13} />
                        Leadership · Strategy · Finance
                      </div>
                    </div>
                  </motion.article>

                  {/* =================================================
                      NINE CORE TEAM MEMBERS — EQUAL CIRCULAR ORBIT
                  ================================================= */}
                  {leaders.slice(1).map((leader, index) => {
                    const angle = orbitAngles[index];
                    const radians = (angle * Math.PI) / 180;
                    const x = Math.cos(radians) * orbitRadius;
                    const y = Math.sin(radians) * orbitRadius;
                    const Icon = icons[index];

                    return (
                      <div
                        key={leader.name}
                        className="absolute left-1/2 top-1/2 z-20"
                        style={{
                          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                        }}
                      >
                        <motion.article
                          initial={{ opacity: 0, scale: 0.72 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.12 }}
                          transition={{ duration: 0.65, delay: 0.2 + index * 0.08, ease: "easeOut" }}
                          whileHover={{ scale: 1.045, y: -6, zIndex: 50 }}
                          className="group relative h-[280px] w-[235px]"
                        >
                          <div className="relative h-full overflow-hidden rounded-[30px] border border-[#C6A15B]/45 bg-gradient-to-br from-[#102B43] via-[#0D344A] to-[#087F8C]/90 shadow-[0_20px_55px_rgba(0,0,0,.3)] transition-all duration-500 group-hover:border-[#C6A15B] group-hover:shadow-[0_28px_70px_rgba(8,127,140,.28)]">
                            <div className="absolute left-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#C6A15B] bg-[#071A2D]/90 text-[#C6A15B] shadow-[0_8px_20px_rgba(0,0,0,.22)] backdrop-blur-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#C6A15B] group-hover:text-[#0B1F3A]">
                              <Icon size={18} strokeWidth={1.35} />
                            </div>

                            <div className="relative flex items-center justify-center px-5 pb-4 pt-5">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,161,91,.2),transparent_58%)]" />
                              <div className="relative h-[94px] w-[94px] overflow-hidden rounded-full border-[3px] border-[#C6A15B] bg-[#DCE2E7] shadow-[0_10px_30px_rgba(0,0,0,.3)] transition-transform duration-500 group-hover:scale-105">
                                <img
                                  src={leader.image}
                                  alt={leader.name}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                            </div>

                            <div className="px-5 pb-5 pt-3 text-center">
                              <h3 className="text-[14px] font-semibold leading-tight tracking-[-0.02em] text-white">
                                {leader.name}
                              </h3>
                              <p className="mt-1.5 min-h-[30px] text-[8px] font-bold uppercase leading-4 tracking-[0.075em] text-[#43B8BA]">
                                {leader.role}
                              </p>

                              {leader.tagline && (
                                <div className="mx-auto mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/5 px-2.5 py-1 text-[7.5px] font-semibold uppercase tracking-[0.12em] text-[#C6A15B]">
                                  <span className="h-px w-3 bg-[#C6A15B]/70" />
                                  <span>{leader.tagline}</span>
                                  <span className="h-px w-3 bg-[#C6A15B]/70" />
                                </div>
                              )}

                              <div className="mx-auto mt-2.5 h-px w-8 bg-[#C6A15B] transition-all duration-500 group-hover:w-14" />
                              <p className="mt-2.5 line-clamp-3 text-[7.8px] leading-4 text-[#C5D0D8]">
                                {leader.description}
                              </p>
                            </div>

                            <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#C6A15B] via-[#087F8C] to-[#C6A15B] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                          </div>
                        </motion.article>
                      </div>
                    );
                  })}
                </>
              );
            })()}
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

          {/* Team cards */}

          <div
            className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {team.map(
              (person, index) => {
                const Icon = person.icon;

                return (
                  <motion.article
                    key={person.name}
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
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.01,
                    }}
                    className="
                      group
                      overflow-hidden
                      rounded-[20px]
                      border
                      border-[#C9DDDA]
                      bg-[#F6F4EF]
                      shadow-[0_12px_35px_rgba(11,31,58,.07)]
                      transition-shadow
                      duration-500
                      hover:shadow-[0_25px_55px_rgba(11,31,58,.15)]
                    "
                  >

                    {/* Image */}

                    <div
                      className="
                        relative
                        h-[285px]
                        overflow-hidden
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
                          group-hover:scale-110
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#0B1F3A]/80
                          via-transparent
                          to-transparent
                          opacity-80
                        "
                      />

                      {/* Icon */}

                      <motion.div
                        whileHover={{
                          rotate: 12,
                          scale: 1.1,
                        }}
                        className="
                          absolute
                          left-4
                          top-4
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-[#087F8C]/90
                          text-white
                          backdrop-blur-md
                        "
                      >
                        <Icon
                          size={16}
                          strokeWidth={1.5}
                        />
                      </motion.div>

                      {/* Number */}

                      <div
                        className="
                          absolute
                          bottom-4
                          left-4
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#C6A15B]
                        "
                      >
                        0{index + 1} / IBS
                      </div>

                      {/* Arrow */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.6,
                        }}
                        whileHover={{
                          opacity: 1,
                          scale: 1,
                        }}
                        className="
                          absolute
                          bottom-4
                          right-4
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-[#C6A15B]
                          text-[#0B1F3A]
                        "
                      >
                        <ArrowUpRight size={16} />
                      </motion.div>

                    </div>

                    {/* Content */}

                    <div className="p-5">

                      <h3
                        className="
                          text-[16px]
                          font-semibold
                          tracking-[-0.02em]
                          text-[#202832]
                        "
                      >
                        {person.name}
                      </h3>

                      <p
                        className="
                          mt-1.5
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.13em]
                          text-[#087F8C]
                        "
                      >
                        {person.role}
                      </p>

                      <p
                        className="
                          mt-3
                          text-[10px]
                          leading-5
                          text-[#68737D]
                        "
                      >
                        {person.description}
                      </p>

                      <div
                        className="
                          mt-4
                          flex
                          items-center
                          justify-between
                          border-t
                          border-[#DCE2E7]
                          pt-3
                        "
                      >

                        <span
                          className="
                            text-[8px]
                            uppercase
                            tracking-[0.12em]
                            text-[#8C989E]
                          "
                        >
                          IBS Canada
                        </span>

                        <ArrowRight
                          size={13}
                          className="
                            text-[#C6A15B]
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />

                      </div>

                    </div>

                  </motion.article>
                );
              }
            )}

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