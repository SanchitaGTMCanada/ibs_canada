"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Mail,
  UsersRound,
  Target,
  Handshake,
} from "lucide-react";

import { motion } from "framer-motion";

/* =========================================================
   LEADERSHIP DATA
========================================================= */

const leadership = [
  {
    name: "John Doe",
    role: "President & CEO",
    image: "/images/team/team-1.jpg",
    description:
      "Leading IBS with a focus on sustainable growth, meaningful partnerships and long-term impact.",
  },
  {
    name: "Jane Smith",
    role: "Chief Operating Officer",
    image: "/images/team/team-2.jpg",
    description:
      "Driving operational excellence and creating practical solutions for organizations and communities.",
  },
];

/* =========================================================
   TEAM DATA
========================================================= */

const team = [
  {
    name: "Michael Anderson",
    role: "Senior Business Consultant",
    image: "/images/team/team-3.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Project Manager",
    image: "/images/team/team-4.jpg",
  },
  {
    name: "David Wilson",
    role: "Technology Consultant",
    image: "/images/team/team-5.jpg",
  },
  {
    name: "Emily Brown",
    role: "Community Engagement Lead",
    image: "/images/team/team-6.jpg",
  },
  {
    name: "Daniel Martin",
    role: "Financial Consultant",
    image: "/images/team/team-7.jpg",
  },
  {
    name: "Olivia Taylor",
    role: "Business Development",
    image: "/images/team/team-8.jpg",
  },
];

/* =========================================================
   VALUES DATA
========================================================= */

const values = [
  {
    icon: UsersRound,
    title: "People First",
    text:
      "We believe meaningful relationships are the foundation of meaningful outcomes.",
  },
  {
    icon: Target,
    title: "Purpose Driven",
    text:
      "Every solution is designed around clear goals, measurable impact and long-term value.",
  },
  {
    icon: Handshake,
    title: "Built Together",
    text:
      "We work collaboratively with clients, communities and partners to create lasting change.",
  },
];

/* =========================================================
   OUR TEAM PAGE
========================================================= */

export default function OurTeam() {
  return (
    <main className="relative overflow-hidden bg-[#F6F4EF]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-[#0B1F3A]
          via-[#123A5A]
          to-[#087F8C]
          pb-20
          pt-[150px]
          sm:pb-24
          lg:pb-28
          lg:pt-[175px]
        "
      >

        {/* =================================================
            BACKGROUND GLOW 1
        ================================================= */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -left-[180px]
            -top-[150px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#087F8C]/25
            blur-[120px]
          "
        />

        {/* =================================================
            BACKGROUND GLOW 2
        ================================================= */}

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -right-[150px]
            top-[10%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#C6A15B]/10
            blur-[120px]
          "
        />

        {/* =================================================
            BACKGROUND GRID
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        {/* =================================================
            DECORATIVE CIRCLE
        ================================================= */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-[18%]
            hidden
            h-[300px]
            w-[300px]
            rounded-full
            border
            border-white/10
            lg:block
          "
        >
          <span
            className="
              absolute
              left-[15%]
              top-[10%]
              h-2
              w-2
              rounded-full
              bg-[#C6A15B]
              shadow-[0_0_15px_rgba(198,161,91,0.8)]
            "
          />
        </motion.div>

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1280px]
            px-6
            sm:px-8
            lg:px-10
            xl:px-12
          "

      
        >
          <div className="max-w-[850px]">

            {/* Eyebrow */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
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
              <span
                className="
                  h-[2px]
                  w-[48px]
                  rounded-full
                  bg-[#C6A15B]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#BCEBE8]
                "
              >
                Our Team
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.8,
              }}
              className="
                text-[52px]
                font-bold
                leading-[0.95]
                tracking-[-0.055em]
                text-white
                sm:text-[65px]
                lg:text-[82px]
                xl:text-[92px]
              "
            >
              The people
              <br />

              <span className="text-[#BCEBE8]">
                behind the purpose.
              </span>
            </motion.h1>

            {/* Gold Line */}

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 80,
              }}
              transition={{
                delay: 0.55,
                duration: 0.6,
              }}
              className="
                mt-8
                h-[4px]
                rounded-full
                bg-gradient-to-r
                from-[#C6A15B]
                to-[#D7C17A]
              "
            />

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
              className="
                mt-7
                max-w-[650px]
                text-[16px]
                leading-7
                text-white/65
                sm:text-[18px]
                sm:leading-8
              "
            >
              Meet the people who bring expertise,
              experience and purpose together to
              create meaningful solutions for
              organizations, entrepreneurs and
              communities.
            </motion.p>

          </div>
        </div>

        {/* Bottom Fade */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-24
            bg-gradient-to-t
            from-[#F6F4EF]
            to-transparent
          "
        />
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        className="
          relative
          bg-[#F6F4EF]
          px-6
          py-20
          sm:px-8
          lg:px-10
          lg:py-24
          xl:px-12
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1280px]
            gap-12
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
            lg:gap-20
          "
        >

          {/* Left */}

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
              amount: 0.2,
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
                  h-[3px]
                  w-[38px]
                  rounded-full
                  bg-[#C6A15B]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#087F8C]
                "
              >
                Who We Are
              </span>
            </div>

            <h2
              className="
                mt-5
                text-[38px]
                font-bold
                leading-tight
                tracking-[-0.045em]
                text-[#202832]
                sm:text-[48px]
              "
            >
              Experience with

              <span
                className="
                  block
                  text-[#087F8C]
                "
              >
                purpose.
              </span>
            </h2>
          </motion.div>

          {/* Right */}

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <p
              className="
                text-[16px]
                leading-8
                text-[#68737D]
              "
            >
              Our team brings together diverse
              perspectives, practical expertise and
              a shared commitment to creating
              meaningful outcomes.
            </p>

            <p
              className="
                mt-5
                text-[16px]
                leading-8
                text-[#68737D]
              "
            >
              We believe the strongest solutions
              come from collaboration — combining
              knowledge, creativity and an
              understanding of the communities we
              serve.
            </p>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          LEADERSHIP SECTION
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          px-6
          py-20
          sm:px-8
          lg:px-10
          lg:py-24
          xl:px-12
        "
      >

        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-150px]
            top-[15%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#087F8C]/5
            blur-[100px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[1280px]
          "
        >

          {/* Heading */}

          <div className="max-w-[700px]">

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-[3px]
                  w-[38px]
                  rounded-full
                  bg-[#C6A15B]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#087F8C]
                "
              >
                Leadership
              </span>
            </div>

            <h2
              className="
                mt-5
                text-[42px]
                font-bold
                leading-tight
                tracking-[-0.045em]
                text-[#202832]
                sm:text-[52px]
              "
            >
              Guiding the

              <span className="text-[#087F8C]">
                {" "}journey.
              </span>
            </h2>

          </div>


          {/* Leadership Cards */}

          <div
            className="
              mt-12
              grid
              gap-7
              lg:grid-cols-2
            "
          >

            {leadership.map((person, index) => (
              <motion.article
                key={person.name}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#DCE2E7]
                  bg-[#F6F4EF]
                  shadow-[0_20px_55px_rgba(11,31,58,0.07)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_30px_70px_rgba(11,31,58,0.13)]
                "
              >

                <div
                  className="
                    grid
                    md:grid-cols-[0.9fr_1.1fr]
                  "
                >

                  {/* Photo */}

                  <div
                    className="
                      relative
                      h-[360px]
                      overflow-hidden
                      md:h-[390px]
                    "
                  >
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="
                        (max-width: 768px) 100vw,
                        45vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#0B1F3A]/55
                        via-transparent
                        to-transparent
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/30
                        bg-white/10
                        text-white
                        backdrop-blur-md
                      "
                    >
                      <UsersRound size={17} />
                    </div>
                  </div>


                  {/* Content */}

                  <div
                    className="
                      flex
                      flex-col
                      justify-center
                      p-7
                      sm:p-9
                    "
                  >

                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.24em]
                        text-[#087F8C]
                      "
                    >
                      Leadership
                    </span>

                    <h3
                      className="
                        mt-3
                        text-[28px]
                        font-bold
                        tracking-[-0.035em]
                        text-[#202832]
                      "
                    >
                      {person.name}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#A47C2F]
                      "
                    >
                      {person.role}
                    </p>

                    <div
                      className="
                        mt-5
                        h-px
                        w-12
                        bg-gradient-to-r
                        from-[#C6A15B]
                        to-[#087F8C]
                      "
                    />

                    <p
                      className="
                        mt-5
                        text-[13px]
                        leading-6
                        text-[#68737D]
                      "
                    >
                      {person.description}
                    </p>

                    {/* Social / Contact */}

                    <div
                      className="
                        mt-7
                        flex
                        items-center
                        gap-2
                      "
                    >

                      {/* Profile Button */}

                      <button
                        type="button"
                        aria-label="View team member"
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#DCE2E7]
                          bg-white
                          text-[#087F8C]
                          transition-all
                          duration-300
                          hover:border-[#087F8C]
                          hover:bg-[#087F8C]
                          hover:text-white
                        "
                      >
                        <UsersRound
                          size={15}
                          strokeWidth={1.6}
                        />
                      </button>

                      {/* Email Button */}

                      <button
                        type="button"
                        aria-label="Email team member"
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#DCE2E7]
                          bg-white
                          text-[#087F8C]
                          transition-all
                          duration-300
                          hover:border-[#087F8C]
                          hover:bg-[#087F8C]
                          hover:text-white
                        "
                      >
                        <Mail
                          size={15}
                          strokeWidth={1.6}
                        />
                      </button>

                    </div>

                  </div>

                </div>

              </motion.article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          TEAM MEMBERS SECTION
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

        <div
          className="
            mx-auto
            max-w-[1280px]
          "
        >

          {/* Section Heading */}

          <div
            className="
              flex
              flex-col
              justify-between
              gap-7
              lg:flex-row
              lg:items-end
            "
          >

            <div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-[3px]
                    w-[38px]
                    rounded-full
                    bg-[#C6A15B]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#087F8C]
                  "
                >
                  Our Team
                </span>
              </div>

              <h2
                className="
                  mt-5
                  text-[42px]
                  font-bold
                  leading-tight
                  tracking-[-0.045em]
                  text-[#202832]
                  sm:text-[52px]
                "
              >
                A team built

                <span className="text-[#087F8C]">
                  {" "}to deliver.
                </span>
              </h2>

            </div>

            <p
              className="
                max-w-[430px]
                text-[14px]
                leading-6
                text-[#68737D]
              "
            >
              A multidisciplinary group bringing
              business, technology, finance and
              community expertise together.
            </p>

          </div>


          {/* Team Grid */}

          <div
            className="
              mt-12
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {team.map((person, index) => (
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
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#DCE2E7]
                  bg-white
                  shadow-[0_12px_35px_rgba(11,31,58,0.05)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_25px_55px_rgba(11,31,58,0.12)]
                "
              >

                {/* Image */}

                <div
                  className="
                    relative
                    h-[330px]
                    overflow-hidden
                  "
                >

                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#0B1F3A]/60
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Number */}

                  <span
                    className="
                      absolute
                      right-5
                      top-5
                      text-[10px]
                      font-bold
                      tracking-[0.15em]
                      text-white/60
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                {/* Info */}

                <div
                  className="
                    relative
                    p-6
                  "
                >

                  {/* Accent */}

                  <div
                    className="
                      absolute
                      left-6
                      top-0
                      h-[3px]
                      w-10
                      -translate-y-1/2
                      rounded-full
                      bg-gradient-to-r
                      from-[#C6A15B]
                      to-[#087F8C]
                    "
                  />

                  <h3
                    className="
                      text-[20px]
                      font-bold
                      tracking-[-0.025em]
                      text-[#202832]
                    "
                  >
                    {person.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#087F8C]
                    "
                  >
                    {person.role}
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
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-[#9AA5AA]
                      "
                    >
                      IBS Canada
                    </span>

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#DCE2E7]
                        text-[#087F8C]
                        transition-all
                        duration-300
                        group-hover:border-[#087F8C]
                        group-hover:bg-[#087F8C]
                        group-hover:text-white
                      "
                    >
                      <ArrowUpRight size={14} />
                    </span>

                  </div>

                </div>

              </motion.article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          VALUES SECTION
      ===================================================== */}

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

        {/* Background Grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        {/* Teal Glow */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -left-[150px]
            bottom-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#087F8C]
            blur-[120px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[1280px]
          "
        >

          {/* Heading */}

          <div className="max-w-[650px]">

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-[3px]
                  w-[38px]
                  rounded-full
                  bg-[#C6A15B]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#BCEBE8]
                "
              >
                What Drives Us
              </span>
            </div>

            <h2
              className="
                mt-5
                text-[42px]
                font-bold
                leading-tight
                tracking-[-0.045em]
                text-white
                sm:text-[52px]
              "
            >
              More than expertise.

              <span
                className="
                  block
                  text-[#BCEBE8]
                "
              >
                A shared purpose.
              </span>
            </h2>

          </div>


          {/* Values */}

          <div
            className="
              mt-12
              grid
              gap-5
              md:grid-cols-3
            "
          >

            {values.map((item, index) => {
              const Icon = item.icon;

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
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    rounded-[22px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    p-7
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:border-[#C6A15B]/30
                    hover:bg-white/[0.08]
                  "
                >

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-[14px]
                      border
                      border-[#BCEBE8]/15
                      bg-[#087F8C]/15
                      text-[#BCEBE8]
                      transition-all
                      duration-300
                      group-hover:border-[#C6A15B]/30
                      group-hover:bg-[#C6A15B]/10
                      group-hover:text-[#D7C17A]
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.4}
                    />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-[19px]
                      font-semibold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[13px]
                      leading-6
                      text-white/55
                    "
                  >
                    {item.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-[#087F8C]
          via-[#123A5A]
          to-[#0B1F3A]
          px-6
          py-16
          sm:px-8
          lg:px-10
          lg:py-20
          xl:px-12
        "
      >

        {/* Decorative Circle */}

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            -right-[100px]
            -top-[100px]
            h-[350px]
            w-[350px]
            rounded-full
            border
            border-white/10
          "
        />

        {/* Inner Circle */}

        <div
          className="
            pointer-events-none
            absolute
            -right-[40px]
            -top-[40px]
            h-[220px]
            w-[220px]
            rounded-full
            border
            border-[#C6A15B]/10
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            max-w-[1100px]
            flex-col
            items-start
            justify-between
            gap-8
            md:flex-row
            md:items-center
          "
        >

          <div>

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#D7C17A]
              "
            >
              Work With Us
            </span>

            <h2
              className="
                mt-3
                max-w-[650px]
                text-[35px]
                font-bold
                leading-tight
                tracking-[-0.04em]
                text-white
                sm:text-[45px]
              "
            >
              Great things happen
              when the right people
              work together.
            </h2>

          </div>

          {/* CTA Button */}

          <Link
            href="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-3
              rounded-full
              bg-white
              px-6
              py-3.5
              text-[13px]
              font-semibold
              text-[#0B1F3A]
              shadow-[0_15px_40px_rgba(0,0,0,0.18)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#D7C17A]
            "
          >
            Let&apos;s Connect

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

        </div>
      </section>

    </main>
  );
}