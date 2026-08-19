"use client";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Compass,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

/* =========================================================
   REUSABLE PREMIUM ANIMATED ICON
========================================================= */

function AnimatedIcon({
  icon: Icon,
  size = 22,
  large = false,
  delay = 0,
  rotation = true,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.75,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >

      {/* =================================================
          LARGE AMBIENT GOLD GLOW
      ================================================= */}

      <motion.div
        animate={{
          opacity: [0.15, 0.4, 0.15],
          scale: [0.9, 1.15, 0.9],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className={`
          pointer-events-none
          absolute
          rounded-full
          bg-[#C6A15B]/20
          blur-2xl

          ${
            large
              ? "-inset-6"
              : "-inset-5"
          }
        `}
      />


      {/* =================================================
          OUTER ORBIT
      ================================================= */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
        className={`
          pointer-events-none
          absolute
          rounded-full
          border
          border-[#C6A15B]/40

          ${
            large
              ? "-inset-3"
              : "-inset-2.5"
          }
        `}
      >

        {/* Gold orbit point */}

        <motion.span
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
          className="
            absolute
            -right-[4px]
            top-1/2
            h-2
            w-2
            -translate-y-1/2
            rounded-full
            bg-[#F4D58A]
            shadow-[0_0_14px_rgba(244,213,138,0.95)]
          "
        />

      </motion.div>


      {/* =================================================
          SECOND ORBIT
      ================================================= */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "linear",
          delay: delay + 0.5,
        }}
        className="
          pointer-events-none
          absolute
          -inset-1
          rounded-full
          border
          border-[#0B8995]/40
        "
      >

        <span
          className="
            absolute
            left-[5%]
            top-[10%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#18B8C2]
            shadow-[0_0_12px_rgba(24,184,194,0.9)]
          "
        />

      </motion.div>


      {/* =================================================
          MAIN ICON CONTAINER
      ================================================= */}

      <motion.div
        animate={{
          y: [0, -4, 0, 4, 0],

          rotate: rotation
            ? [0, 1.5, 0, -1.5, 0]
            : 0,
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        whileHover={{
          scale: 1.12,
          rotate: 4,
        }}
        className={`
          group/icon
          relative
          flex
          items-center
          justify-center
          overflow-hidden
          rounded-full

          border-2
          border-[#C6A15B]/80

          bg-gradient-to-br
          from-[#C6A15B]/20
          via-[#C6A15B]/[0.08]
          to-[#0B8995]/[0.04]

          text-[#F4D58A]

          shadow-[0_0_25px_rgba(198,161,91,0.12)]

          transition-all
          duration-500

          hover:border-[#F4D58A]
          hover:text-[#FFE8AA]
          hover:shadow-[0_0_40px_rgba(198,161,91,0.28)]

          ${
            large
              ? "h-[68px] w-[68px]"
              : "h-12 w-12"
          }
        `}
      >

        {/* =================================================
            GOLD INNER BORDER
        ================================================= */}

        <span
          className="
            pointer-events-none
            absolute
            inset-[4px]
            rounded-full
            border
            border-[#C6A15B]/25
          "
        />


        {/* =================================================
            MOVING LIGHT SWEEP
        ================================================= */}

        <motion.span
          animate={{
            x: ["-160%", "160%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + 1,
          }}
          className="
            pointer-events-none
            absolute
            inset-y-[-20%]
            w-[45%]
            rotate-[25deg]
            bg-gradient-to-r
            from-transparent
            via-[#FFF2C9]/35
            to-transparent
            blur-[3px]
          "
        />


        {/* =================================================
            INNER GOLD GLOW
        ================================================= */}

        <motion.span
          animate={{
            scale: [0.8, 1.12, 0.8],
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + 0.3,
          }}
          className="
            pointer-events-none
            absolute
            inset-3
            rounded-full
            bg-[#C6A15B]/25
            blur-lg
          "
        />


        {/* =================================================
            ICON
        ================================================= */}

        <motion.span
          animate={
            rotation
              ? {
                  rotate: [0, 4, 0, -4, 0],
                  scale: [1, 1.04, 1, 1.04, 1],
                }
              : {
                  scale: [1, 1.06, 1],
                }
          }
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + 0.2,
          }}
          className="
            relative
            z-20
            flex
            items-center
            justify-center
            drop-shadow-[0_0_8px_rgba(244,213,138,0.65)]
          "
        >
          <Icon
            size={size}
            strokeWidth={2.4}
          />
        </motion.span>

      </motion.div>

    </motion.div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const year = new Date().getFullYear();


  /* =======================================================
     EXPLORE NAVIGATION
  ======================================================= */

  const navigation = [
    {
      number: "01",
      title: "About Us",
      description: "Who we are and what drives us.",
      href: "#about",
      icon: Users,
    },
    {
      number: "02",
      title: "Our Services",
      description: "Practical solutions for your needs.",
      href: "#services",
      icon: BriefcaseBusiness,
    },
    {
      number: "03",
      title: "Our Approach",
      description: "How we turn ideas into outcomes.",
      href: "#approach",
      icon: Compass,
    },
    {
      number: "04",
      title: "Contact Us",
      description: "Let's start a meaningful conversation.",
      href: "#contact",
      icon: MessageCircle,
    },
  ];


  /* =======================================================
     SERVICES
  ======================================================= */

  const services = [
    "Consulting",
    "Strategy",
    "Solutions",
    "Partnerships",
  ];


  /* =======================================================
     SOCIALS
  ======================================================= */

  const socials = [
    {
      short: "LI",
      name: "LinkedIn",
      href: "#",
    },
    {
      short: "IG",
      name: "Instagram",
      href: "#",
    },
    {
      short: "FB",
      name: "Facebook",
      href: "#",
    },
  ];


  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#081F38]
        text-white
      "
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main background */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#0B2945]
            via-[#081F38]
            to-[#06182C]
          "
        />


        {/* Teal glow */}

        <div
          className="
            absolute
            -right-[180px]
            -top-[180px]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#0B8995]/[0.07]
            blur-[130px]
          "
        />


        <div
          className="
            absolute
            left-[35%]
            top-[30%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#0B8995]/[0.035]
            blur-[120px]
          "
        />


        {/* Gold glow */}

        <div
          className="
            absolute
            -bottom-[180px]
            -left-[150px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#C6A15B]/[0.035]
            blur-[130px]
          "
        />


        {/* Architectural lines */}

        <div
          className="
            absolute
            left-[7.5%]
            top-0
            h-full
            w-px
            bg-white/[0.025]
          "
        />

        <div
          className="
            absolute
            right-[7.5%]
            top-0
            h-full
            w-px
            bg-white/[0.025]
          "
        />


        {/* Decorative rings */}

        <div
          className="
            absolute
            -right-[190px]
            -top-[190px]
            h-[560px]
            w-[560px]
            rounded-full
            border
            border-[#0B8995]/[0.12]
          "
        />

        <div
          className="
            absolute
            -right-[145px]
            -top-[145px]
            h-[470px]
            w-[470px]
            rounded-full
            border
            border-[#C6A15B]/[0.09]
          "
        />

        <div
          className="
            absolute
            -right-[105px]
            -top-[105px]
            h-[390px]
            w-[390px]
            rounded-full
            border
            border-[#0B8995]/[0.08]
          "
        />


        {/* Animated gold dot */}

        <motion.span
          animate={{
            y: [0, -8, 0],
            opacity: [0.25, 0.8, 0.25],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[15%]
            top-[15%]
            h-2
            w-2
            rounded-full
            bg-[#C6A15B]
          "
        />


        {/* Animated teal dot */}

        <motion.span
          animate={{
            y: [0, 7, 0],
            opacity: [0.15, 0.65, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[27%]
            top-[42%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#0B8995]
          "
        />

      </div>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >


        {/* ===================================================
            BRAND HEADER
        =================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/[0.08]
            py-7
          "
        >

          {/* IBS BRAND */}

          <a
            href="#"
            className="
              group
              flex
              items-center
              gap-3
            "
          >

         


<div
  className="
    flex
    h-[90px]
    w-[130px]
    items-center
    justify-center
    overflow-hidden
    rounded-[20px]
    border
    border-white/20
    bg-white
    shadow-[0_10px_30px_rgba(0,0,0,0.20)]
    transition-all
    duration-300
    hover:scale-105
    hover:border-[#C6A15B]/60
  "
>
  <img
    src="/logo/logo.jpg"
    alt="IBS Canada"
    className="
      h-full
      w-full
      object-contain
      p-0
    "
  />
</div>

          </a>


          {/* HEADER MESSAGE */}

          <div
            className="
              hidden
              items-center
              gap-3

              sm:flex
            "
          >

            <span
              className="
                h-px
                w-8
                bg-[#C6A15B]
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#A6B7C5]
              "
            >
              Strategic thinking. Meaningful outcomes.
            </span>

          </div>

        </div>


        {/* ===================================================
            MAIN CTA
        =================================================== */}

        <section
          className="
            relative
            py-16

            sm:py-20

            lg:py-24

            xl:py-28
          "
        >

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
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              flex-col
              items-center
              text-center
            "
          >

            {/* Eyebrow */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-4
              "
            >

              <span
                className="
                  h-px
                  w-9
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
                YOUR NEXT MOVE STARTS HERE
              </span>

              <span
                className="
                  h-px
                  w-9
                  bg-[#C6A15B]
                "
              />

            </div>


            {/* Heading */}

            <h2
              className="
                mt-7
                max-w-[1000px]
                text-[48px]
                font-semibold
                leading-[0.95]
                tracking-[-0.055em]
                text-white

                sm:text-[62px]

                md:text-[72px]

                lg:text-[84px]

                xl:text-[96px]
              "
            >

              Let&apos;s create{" "}

              <span className="text-[#0B8995]">
                something
              </span>

              <br />

              meaningful
              <span className="text-[#C6A15B]">
                .
              </span>

            </h2>


            {/* Description */}

            <p
              className="
                mt-7
                max-w-[570px]
                text-[13px]
                leading-6
                text-[#A9B9C7]

                sm:text-[14px]
                sm:leading-7
              "
            >
              Turn ideas into practical solutions and
              meaningful outcomes. Let&apos;s build
              something that creates lasting impact.
            </p>


            {/* CTA */}

            <motion.a
              href="#contact"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-4
                rounded-full
                border
                border-[#C6A15B]/40
                bg-white/[0.025]
                px-5
                py-3
                transition-all
                duration-300

                hover:border-[#C6A15B]
                hover:bg-[#C6A15B]/[0.06]
              "
            >

              <motion.span
                animate={{
                  y: [0, -2, 0, 2, 0],
                  rotate: [0, 3, 0, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#C6A15B]
                  text-[#081F38]
                "
              >
                <ArrowUpRight size={16} />
              </motion.span>

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-white
                "
              >
                Let&apos;s work together
              </span>

            </motion.a>

          </motion.div>

        </section>


        {/* ===================================================
            EXPLORE NAVIGATION
        =================================================== */}

        <section
          className="
            border-t
            border-white/[0.08]
          "
        >

      

          {/* Navigation cards */}

          <div
            className="
              grid
              border-t
              border-white/[0.07]

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >

            {navigation.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.number}
                  href={item.href}
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-[205px]
                    flex-col
                    items-center
                    justify-center
                    border-b
                    border-white/[0.08]
                    bg-white/[0.012]
                    px-6
                    py-8
                    text-center
                    transition-all
                    duration-300

                    sm:border-r

                    lg:min-h-[220px]

                    hover:bg-[#0B8995]/[0.045]
                  "
                >

                  {/* Number */}

                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      text-[8px]
                      font-medium
                      tracking-[0.15em]
                      text-[#71889B]
                      transition-colors
                      duration-300

                      group-hover:text-[#C6A15B]
                    "
                  >
                    {item.number}
                  </span>


                  {/* Animated Gold Icon */}

                  <AnimatedIcon
                    icon={Icon}
                    size={20}
                    large
                    delay={index * 0.45}
                  />


                  {/* Title */}

                  <h3
                    className="
                      mt-5
                      text-[15px]
                      font-medium
                      tracking-[-0.015em]
                      text-[#E6EDF2]
                      transition-colors
                      duration-300

                      group-hover:text-white
                    "
                  >
                    {item.title}
                  </h3>


                  {/* Description */}

                  <p
                    className="
                      mt-2
                      max-w-[200px]
                      text-[10px]
                      leading-5
                      text-[#9AABBA]
                      transition-colors
                      duration-300

                      group-hover:text-[#C1CDD7]
                    "
                  >
                    {item.description}
                  </p>


                  {/* Arrow */}

                  <span
                    className="
                      absolute
                      bottom-5
                      right-5
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.1]
                      text-[#72899B]
                      transition-all
                      duration-300

                      group-hover:border-[#C6A15B]/45
                      group-hover:text-[#C6A15B]
                    "
                  >
                    <ArrowUpRight size={12} />
                  </span>


                  {/* Bottom gold line */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      bg-[#C6A15B]
                      transition-all
                      duration-500

                      group-hover:w-[45%]
                    "
                  />

                </motion.a>
              );
            })}

          </div>

        </section>


        {/* ===================================================
            LOWER INFORMATION
        =================================================== */}

        <section
          className="
            border-t
            border-white/[0.08]
            bg-[#0A2944]/60
          "
        >

          <div
            className="
              grid

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >


            {/* =================================================
                BRAND
            ================================================= */}

            <div
              className="
                flex
                min-h-[235px]
                flex-col
                items-center
                justify-center
                border-b
                border-white/[0.07]
                px-6
                py-10
                text-center

                sm:border-r

                lg:border-b-0
              "
            >

              <AnimatedIcon
                icon={Target}
                size={19}
                delay={0}
                rotation={false}
              />


              <p
                className="
                  mt-5
                  text-[28px]
                  font-semibold
                  leading-none
                  tracking-[-0.05em]
                  text-white
                "
              >
                IBS
              </p>


              <p
                className="
                  mt-1
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  text-[#C6A15B]
                "
              >
                CANADA
              </p>


              <p
                className="
                  mt-4
                  max-w-[210px]
                  text-[10px]
                  leading-5
                  text-[#9AABBA]
                "
              >
                Strategic thinking.
                <br />
                Practical execution.
                <br />
                Meaningful outcomes.
              </p>

            </div>


            {/* =================================================
                SERVICES
            ================================================= */}

            <div
              className="
                flex
                min-h-[235px]
                flex-col
                items-center
                justify-center
                border-b
                border-white/[0.07]
                px-6
                py-10
                text-center

                sm:border-r

                lg:border-b-0
              "
            >

              <AnimatedIcon
                icon={BriefcaseBusiness}
                size={17}
                delay={0.25}
              />


              <p
                className="
                  mt-4
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#0B8995]
                "
              >
                SERVICES
              </p>


              <div
                className="
                  mt-4
                  flex
                  flex-col
                  items-center
                  gap-2.5
                "
              >

                {services.map((service) => (
                  <a
                    key={service}
                    href="#services"
                    className="
                      group
                      flex
                      items-center
                      gap-1.5
                      text-[11px]
                      text-[#A4B3C0]
                      transition-colors
                      duration-300

                      hover:text-white
                    "
                  >

                    {service}

                    <ArrowUpRight
                      size={10}
                      className="
                        -translate-x-1
                        opacity-0
                        transition-all
                        duration-300

                        group-hover:translate-x-0
                        group-hover:opacity-100
                        group-hover:text-[#C6A15B]
                      "
                    />

                  </a>
                ))}

              </div>

            </div>


            {/* =================================================
                CONTACT
            ================================================= */}

            <div
              className="
                flex
                min-h-[235px]
                flex-col
                items-center
                justify-center
                border-b
                border-white/[0.07]
                px-6
                py-10
                text-center

                sm:border-r

                lg:border-b-0
              "
            >

              <AnimatedIcon
                icon={MessageCircle}
                size={17}
                delay={0.5}
              />


              <p
                className="
                  mt-4
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#0B8995]
                "
              >
                CONTACT
              </p>


              <div
                className="
                  mt-4
                  flex
                  flex-col
                  items-center
                  gap-3
                "
              >

                <a
                  href="mailto:hello@example.com"
                  className="
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    text-[#A4B3C0]
                    transition-colors
                    duration-300

                    hover:text-white
                  "
                >

                  <Mail
                    size={13}
                    className="text-[#C6A15B]"
                  />

                  hello@example.com

                </a>


                <a
                  href="tel:+10000000000"
                  className="
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    text-[#A4B3C0]
                    transition-colors
                    duration-300

                    hover:text-white
                  "
                >

                  <Phone
                    size={13}
                    className="text-[#C6A15B]"
                  />

                  +1 000 000 0000

                </a>


                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    text-[#A4B3C0]
                  "
                >

                  <MapPin
                    size={13}
                    className="text-[#C6A15B]"
                  />

                  Canada

                </div>

              </div>

            </div>


            {/* =================================================
                SOCIAL
            ================================================= */}

            <div
              className="
                flex
                min-h-[235px]
                flex-col
                items-center
                justify-center
                px-6
                py-10
                text-center
              "
            >

              <AnimatedIcon
                icon={Sparkles}
                size={17}
                delay={0.75}
              />


              <p
                className="
                  mt-4
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#0B8995]
                "
              >
                FOLLOW US
              </p>


              <div
                className="
                  mt-4
                  flex
                  gap-2
                "
              >

                {socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    title={social.name}
                    animate={{
                      y: [0, -2, 0, 2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C6A15B]/25
                      text-[8px]
                      font-bold
                      tracking-[0.05em]
                      text-[#A4B3C0]
                      transition-all
                      duration-300

                      hover:border-[#C6A15B]
                      hover:bg-[#C6A15B]
                      hover:text-[#081F38]
                    "
                  >
                    {social.short}
                  </motion.a>
                ))}

              </div>


              <p
                className="
                  mt-4
                  max-w-[180px]
                  text-[10px]
                  leading-5
                  text-[#8499AB]
                "
              >
                Follow our latest ideas
                and updates.
              </p>

            </div>

          </div>

        </section>


        {/* ===================================================
            BOTTOM BAR
        =================================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            gap-4
            border-t
            border-white/[0.08]
            py-5
            text-center

            sm:flex-row
            sm:justify-between
            sm:text-left
          "
        >

          {/* Copyright */}

          <p
            className="
              text-[9px]
              text-[#7890A2]
            "
          >
            © {year} IBS Canada. All rights reserved.
          </p>


          {/* Center IBS mark */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <span
              className="
                h-px
                w-7
                bg-[#C6A15B]/40
              "
            />

            <motion.span
              animate={{
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#C6A15B]
              "
            >
              IBS
            </motion.span>

            <span
              className="
                h-px
                w-7
                bg-[#C6A15B]/40
              "
            />

          </div>


          {/* Legal */}

          <div
            className="
              flex
              items-center
              gap-4
            "
          >

            <a
              href="#privacy"
              className="
                text-[9px]
                text-[#7890A2]
                transition-colors
                duration-300

                hover:text-white
              "
            >
              Privacy Policy
            </a>


            <span
              className="
                h-1
                w-1
                rounded-full
                bg-[#C6A15B]/60
              "
            />


            <a
              href="#terms"
              className="
                text-[9px]
                text-[#7890A2]
                transition-colors
                duration-300

                hover:text-white
              "
            >
              Terms &amp; Conditions
            </a>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM GOLD LINE
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#C6A15B]/80
          to-transparent
        "
      />

    </footer>
  );
}