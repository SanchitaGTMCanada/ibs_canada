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
    name: "John Doe",
    role: "President & CEO",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Leading IBS with a clear vision for sustainable growth and long-term impact.",
  },
  {
    name: "Jane Smith",
    role: "Chief Operating Officer",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    description:
      "Driving operational excellence through collaboration, innovation and trusted partnerships.",
  },
];

const team = [
  {
    name: "Michael Anderson",
    role: "Senior Business Consultant",
    image:
      "https://randomuser.me/api/portraits/men/46.jpg",
    icon: BriefcaseBusiness,
  },
  {
    name: "Sarah Williams",
    role: "Project Manager",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
    icon: Target,
  },
  {
    name: "David Wilson",
    role: "Technology Consultant",
    image:
      "https://randomuser.me/api/portraits/men/52.jpg",
    icon: BrainCircuit,
  },
  {
    name: "Emily Brown",
    role: "Community Engagement Lead",
    image:
      "https://randomuser.me/api/portraits/women/32.jpg",
    icon: Handshake,
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
          LEADERSHIP
      ===================================================== */}

{/* =========================================================
    LEADERSHIP
========================================================= */}

<section
  className="
    relative
    overflow-hidden
    bg-[#0B1F3A]
    px-6
    py-20
    sm:px-8
    lg:px-10
    lg:py-24
    xl:px-12
  "
>
  {/* =======================================================
      BACKGROUND IMAGE
  ======================================================= */}

  <div className="absolute inset-0">

    <img
      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90"
      alt=""
      aria-hidden="true"
      className="
        h-full
        w-full
        object-cover
        object-center
        opacity-20
      "
    />

    {/* Navy image overlay */}

    <div
      className="
        absolute
        inset-0
        bg-[#0B1F3A]/90
      "
    />

    {/* Executive gradient */}

    <div
      className="
        absolute
        inset-0
        bg-gradient-to-br
        from-[#0B1F3A]
        via-[#123A5A]/95
        to-[#087F8C]/70
      "
    />

    {/* Subtle image fade */}

    <div
      className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#0B1F3A]
        via-transparent
        to-[#087F8C]/20
      "
    />

  </div>


  {/* =======================================================
      LARGE ANIMATED BACKGROUND ICONS
  ======================================================= */}

  {/* Leadership / Award */}

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
    }}
    animate={{
      y: [0, -18, 0],
      rotate: [0, 4, 0],
    }}
    transition={{
      opacity: {
        duration: 1,
      },
      scale: {
        duration: 1,
      },
      y: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    className="
      pointer-events-none
      absolute
      -left-10
      top-[10%]
      z-[1]
      hidden
      text-[#C6A15B]/15
      lg:block
    "
  >
    <Award
      size={190}
      strokeWidth={0.7}
    />
  </motion.div>


  {/* Strategy / Target */}

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
    }}
    animate={{
      x: [0, 20, 0],
      y: [0, 12, 0],
      rotate: [0, -5, 0],
    }}
    transition={{
      opacity: {
        duration: 1,
      },
      scale: {
        duration: 1,
      },
      x: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
      y: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    className="
      pointer-events-none
      absolute
      right-[3%]
      top-[5%]
      z-[1]
      hidden
      text-[#087F8C]/20
      lg:block
    "
  >
    <Target
      size={240}
      strokeWidth={0.7}
    />
  </motion.div>


  {/* Collaboration / Users */}

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
    }}
    animate={{
      y: [0, 20, 0],
      x: [0, -12, 0],
    }}
    transition={{
      opacity: {
        duration: 1,
      },
      scale: {
        duration: 1,
      },
      y: {
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      },
      x: {
        duration: 11,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    className="
      pointer-events-none
      absolute
      bottom-[4%]
      left-[26%]
      z-[1]
      hidden
      text-[#087F8C]/15
      lg:block
    "
  >
    <UsersRound
      size={210}
      strokeWidth={0.7}
    />
  </motion.div>


  {/* Growth / Trending Up */}

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
    }}
    animate={{
      y: [0, -15, 0],
      rotate: [0, -3, 0],
    }}
    transition={{
      opacity: {
        duration: 1,
      },
      scale: {
        duration: 1,
      },
      y: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    className="
      pointer-events-none
      absolute
      bottom-[8%]
      right-[8%]
      z-[1]
      hidden
      text-[#C6A15B]/15
      lg:block
    "
  >
    <TrendingUp
      size={180}
      strokeWidth={0.7}
    />
  </motion.div>


  {/* Handshake */}

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
    }}
    animate={{
      y: [0, 14, 0],
      rotate: [0, 3, 0],
    }}
    transition={{
      opacity: {
        duration: 1,
      },
      scale: {
        duration: 1,
      },
      y: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    className="
      pointer-events-none
      absolute
      left-[48%]
      top-[8%]
      z-[1]
      hidden
      text-[#C6A15B]/10
      lg:block
    "
  >
    <Handshake
      size={150}
      strokeWidth={0.7}
    />
  </motion.div>


  {/* =======================================================
      DECORATIVE CIRCLES
  ======================================================= */}

  <div
    className="
      pointer-events-none
      absolute
      -right-40
      -top-40
      z-[1]
      h-[600px]
      w-[600px]
      rounded-full
      border
      border-[#C6A15B]/10
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-20
      -top-20
      z-[1]
      h-[400px]
      w-[400px]
      rounded-full
      border
      border-[#087F8C]/15
    "
  />


  {/* =======================================================
      MAIN CONTENT
  ======================================================= */}

  <div
    className="
      relative
      z-10
      mx-auto
      max-w-[1280px]
    "
  >

    <div
      className="
        grid
        gap-14
        lg:grid-cols-[0.82fr_1.18fr]
        lg:items-center
      "
    >

      {/* ===================================================
          LEFT CONTENT
      =================================================== */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={stagger}
        className="
          relative
          z-20
          max-w-[560px]
        "
      >

        {/* Label */}

        <motion.div
          variants={fadeUp}
          className="
            flex
            items-center
            gap-3
          "
        >

          <span
            className="
              h-[2px]
              w-12
              bg-[#C6A15B]
            "
          />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#C6A15B]
            "
          >
            Leadership
          </span>

        </motion.div>


        {/* Heading */}

        <motion.h2
          variants={fadeUp}
          className="
            mt-6
            max-w-[520px]
            text-[44px]
            font-semibold
            leading-[0.95]
            tracking-[-0.055em]
            text-white
            sm:text-[56px]
            lg:text-[64px]
          "
        >
          Guiding with

          <span
            className="
              block
              bg-gradient-to-r
              from-[#C6A15B]
              via-[#D8B866]
              to-[#087F8C]
              bg-clip-text
              text-transparent
            "
          >
            Vision.
          </span>

        </motion.h2>


        {/* Description */}

        <motion.p
          variants={fadeUp}
          className="
            mt-6
            max-w-[430px]
            text-[13px]
            leading-7
            text-[#DCE2E7]
          "
        >
          Our leadership team brings experience,
          perspective and a practical approach to
          building long-term success.
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
              gap-4
              rounded-full
              bg-[#C6A15B]
              px-6
              py-3
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#0B1F3A]
              shadow-[0_12px_30px_rgba(0,0,0,.18)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white
            "
          >

            Meet Our Leadership

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
              <ArrowRight size={13} />
            </span>

          </Link>

        </motion.div>


        {/* =================================================
            STATS
        ================================================= */}

        <motion.div
          variants={fadeUp}
          className="
            mt-11
            flex
            flex-wrap
            items-center
            gap-7
          "
        >

          {/* Experience */}

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                border
                border-[#C6A15B]/30
                bg-[#0B1F3A]/70
                text-[#C6A15B]
                backdrop-blur-sm
              "
            >
              <Award
                size={19}
                strokeWidth={1.4}
              />
            </div>

            <div>

              <p
                className="
                  text-[24px]
                  font-semibold
                  leading-none
                  text-white
                "
              >
                20+
              </p>

              <p
                className="
                  mt-1.5
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#8FA0AD]
                "
              >
                Years Experience
              </p>

            </div>

          </div>


          {/* Divider */}

          <span
            className="
              hidden
              h-10
              w-px
              bg-white/15
              sm:block
            "
          />


          {/* Commitment */}

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                border
                border-[#087F8C]/40
                bg-[#087F8C]/20
                text-[#087F8C]
              "
            >
              <Target
                size={19}
                strokeWidth={1.4}
              />
            </div>

            <div>

              <p
                className="
                  text-[24px]
                  font-semibold
                  leading-none
                  text-white
                "
              >
                100%
              </p>

              <p
                className="
                  mt-1.5
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#8FA0AD]
                "
              >
                Commitment
              </p>

            </div>

          </div>

        </motion.div>


        {/* Bottom statement */}

        <motion.div
          variants={fadeUp}
          className="
            mt-12
            flex
            items-center
            gap-3
          "
        >

          <span
            className="
              h-px
              w-16
              bg-[#C6A15B]
            "
          />

          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#C6A15B]
            "
          >
            People · Vision · Impact
          </span>

        </motion.div>

      </motion.div>


      {/* ===================================================
          RIGHT LEADERSHIP PANEL
      =================================================== */}

      <div
        className="
          relative
          rounded-[32px]
          bg-gradient-to-br
          from-[#0B1F3A]
          via-[#123A5A]
          to-[#087F8C]
          p-3
          shadow-[0_30px_80px_rgba(0,0,0,.25)]
          lg:p-4
        "
      >

        {/* Panel highlight */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[32px]
            border
            border-white/10
          "
        />

        {/* Gold top line */}

        <div
          className="
            pointer-events-none
            absolute
            left-10
            right-10
            top-0
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-[#C6A15B]
            to-transparent
          "
        />


        {/* =================================================
            CARDS
        ================================================= */}

        <div
          className="
            relative
            grid
            gap-4
            sm:grid-cols-2
          "
        >

          {leaders.map((leader, index) => (

            <motion.article
              key={leader.name}

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
                duration: 0.65,
                delay: index * 0.15,
              }}

              whileHover={{
                y: -8,
              }}

              className="
                group
                relative
                overflow-hidden
                rounded-[25px]
                border
                border-white/10
                bg-[#F6F4EF]
                shadow-[0_20px_50px_rgba(0,0,0,.20)]
              "
            >

              {/* ===========================================
                  IMAGE
              =========================================== */}

              <div
                className="
                  relative
                  h-[300px]
                  overflow-hidden
                "
              >

                <img
                  src={leader.image}
                  alt={leader.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Image overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0B1F3A]
                    via-[#0B1F3A]/25
                    to-transparent
                  "
                />


                {/* Leadership icon */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/20
                    bg-[#0B1F3A]
                    text-[#C6A15B]
                    shadow-[0_10px_25px_rgba(0,0,0,.20)]
                  "
                >

                  {index === 0 ? (
                    <Award
                      size={22}
                      strokeWidth={1.3}
                    />
                  ) : (
                    <Target
                      size={22}
                      strokeWidth={1.3}
                    />
                  )}

                </div>


                {/* Badge */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    rounded-full
                    border
                    border-[#C6A15B]/50
                    bg-[#0B1F3A]
                    px-3
                    py-1.5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#C6A15B]
                  "
                >
                  Leadership
                </div>


                {/* Name */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                  "
                >

                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#C6A15B]
                    "
                  >
                    Executive Team
                  </p>

                  <h3
                    className="
                      mt-2
                      text-[23px]
                      font-semibold
                      tracking-[-0.035em]
                      text-white
                    "
                  >
                    {leader.name}
                  </h3>

                </div>

              </div>


              {/* ===========================================
                  CONTENT
              =========================================== */}

              <div className="p-6">

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >

                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#087F8C]
                    "
                  >
                    {leader.role}
                  </p>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E8F3F2]
                      text-[#087F8C]
                      transition-all
                      duration-300
                      group-hover:bg-[#087F8C]
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight size={15} />
                  </div>

                </div>


                {/* Gold divider */}

                <div
                  className="
                    mt-5
                    h-[2px]
                    w-10
                    bg-[#C6A15B]
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />


                <p
                  className="
                    mt-4
                    text-[11px]
                    leading-6
                    text-[#68737D]
                  "
                >
                  {leader.description}
                </p>


                {/* Bottom row */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#DCE2E7]
                    pt-4
                  "
                >

                  <div className="flex items-center gap-2">

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
                      "
                    >
                      <UsersRound size={12} />
                    </span>

                    <span
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#8C989E]
                      "
                    >
                      IBS Canada
                    </span>

                  </div>


                  <button
                    type="button"
                    aria-label={`Email ${leader.name}`}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#DCE2E7]
                      bg-[#F6F4EF]
                      text-[#087F8C]
                      transition-all
                      duration-300
                      hover:border-[#087F8C]
                      hover:bg-[#087F8C]
                      hover:text-white
                    "
                  >
                    <Mail size={13} />
                  </button>

                </div>

              </div>


              {/* Bottom animated gold line */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
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

            </motion.article>

          ))}

        </div>

      </div>

    </div>


    {/* =======================================================
        FOOTER LABEL
    ======================================================= */}

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
        delay: 0.25,
      }}
      className="
        mt-10
        flex
        items-center
        justify-between
        border-t
        border-white/10
        pt-5
      "
    >

      <span
        className="
          text-[8px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-[#8FA0AD]
        "
      >
        Executive Leadership
      </span>

      <span
        className="
          bg-gradient-to-r
          from-[#C6A15B]
          via-[#D8B866]
          to-[#087F8C]
          bg-clip-text
          text-[8px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-transparent
        "
      >
        People · Vision · Impact
      </span>

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
                The Team
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
              People with different strengths,
              united by one purpose.
            </p>

          </div>

          {/* Team cards */}

          <div
            className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
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