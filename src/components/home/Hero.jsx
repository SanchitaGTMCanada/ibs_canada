"use client";

// import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  UsersRound,
   Clock3,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[760px]
        overflow-hidden
        bg-[#0B1F3A]
        px-6
        pb-20
        pt-32
        sm:px-8
        sm:pt-36
        lg:min-h-[820px]
        lg:px-10
        lg:pb-24
        lg:pt-40
        xl:px-12
      "
    >

      {/* =====================================================
          HERO BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0">

       <img
  src="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=2000&q=90"
  alt="Canadian city skyline"
  className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    object-center
    transition-transform
    duration-[1800ms]
  "
/>


        {/* Main dark overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#0B1F3A]
            via-[#0B1F3A]/95
            to-[#0B1F3A]/35
          "
        />


        {/* Bottom fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[280px]
            bg-gradient-to-t
            from-[#0B1F3A]
            via-[#0B1F3A]/70
            to-transparent
          "
        />


        {/* Teal atmospheric glow */}

        <div
          className="
            absolute
            right-[10%]
            top-[20%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#087F8C]/10
            blur-[120px]
          "
        />

      </div>


      {/* =====================================================
          DECORATIVE CIRCLES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
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
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-[#087F8C]/15
        "
      />


      {/* =====================================================
          SMALL DOT PATTERN
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[20%]
          h-[180px]
          w-[180px]
          opacity-20
        "
        style={{
          backgroundImage:
            "radial-gradient(#C6A15B 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1280px]
          items-center
          gap-12
          lg:grid-cols-[1fr_0.9fr]
        "
      >

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-20
            max-w-[670px]
          "
        >

          {/* Eyebrow */}

          <div
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
                tracking-[0.32em]
                text-[#C6A15B]
              "
            >
              Innovative Business Solutions
            </span>

          </div>


          {/* Heading */}

          <h1
            className="
              mt-7
              text-[48px]
              font-semibold
              leading-[0.94]
              tracking-[-0.06em]
              text-white
              sm:text-[62px]
              lg:text-[76px]
              xl:text-[84px]
            "
          >
            Building stronger

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
              communities
            </span>

            <span
              className="
                block
                text-white
              "
            >
              through innovation.
            </span>

          </h1>


          {/* Gold divider */}

          <div
            className="
              mt-7
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                h-[2px]
                w-16
                bg-[#C6A15B]
              "
            />

            <span
              className="
                h-[2px]
                w-5
                bg-[#087F8C]
              "
            />

          </div>


          {/* Description */}

          <p
            className="
              mt-6
              max-w-[570px]
              text-[13px]
              leading-7
              text-[#DCE2E7]
              sm:text-[14px]
            "
          >
            Innovative Business Solutions delivers practical,
            forward-thinking solutions designed to help
            organizations grow, adapt and create lasting
            impact.
          </p>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <div
            className="
              mt-9
              flex
              flex-wrap
              items-center
              gap-4
            "
          >

            {/* Primary */}

            <a
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-4
                rounded-full
                bg-[#C6A15B]
                px-6
                py-3.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#0B1F3A]
                shadow-[0_15px_35px_rgba(0,0,0,.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
              "
            >

              Contact Us

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

            </a>


            {/* Secondary */}
<a
  href="/services"
  className="
    group
    inline-flex
    items-center
    gap-3
    rounded-full
    border
    border-white/20
    bg-white/[0.05]
    px-6
    py-3.5
    text-[9px]
    font-bold
    uppercase
    tracking-[0.15em]
    text-white
    backdrop-blur-md
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-[#087F8C]
    hover:bg-[#087F8C]
    hover:text-white
  "
>
  <span className="text-white">
    Explore Services
  </span>

  <ArrowRight
    size={14}
    className="
      text-white
      transition-transform
      duration-300
      group-hover:translate-x-1
      group-hover:text-white
    "
  />
</a>

          </div>


          {/* =================================================
              STATS
          ================================================= */}

     {/* =================================================
    PREMIUM STATS
================================================= */}

<div
  className="
    mt-12
    grid
    max-w-[600px]
    grid-cols-1
    gap-3
    sm:grid-cols-3
  "
>

  {/* =================================================
      STAT 1
  ================================================= */}

  <motion.div
    whileHover={{
      y: -5,
    }}
    transition={{
      duration: 0.25,
    }}
    className="
      group
      relative
      overflow-hidden
      rounded-[20px]
      border
      border-white/10
      bg-white/[0.06]
      p-5
      backdrop-blur-md
      transition-all
      duration-300
      hover:border-[#C6A15B]/40
      hover:bg-white/[0.09]
      hover:shadow-[0_15px_35px_rgba(0,0,0,.18)]
    "
  >

    {/* Gold accent */}

    <div
      className="
        absolute
        left-0
        top-0
        h-[3px]
        w-10
        bg-[#C6A15B]
        transition-all
        duration-300
        group-hover:w-full
      "
    />


    <div
      className="
        flex
        items-center
        justify-between
      "
    >

      {/* Icon */}

      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-[#C6A15B]/10
          text-[#C6A15B]
          transition-all
          duration-300
          group-hover:bg-[#C6A15B]
          group-hover:text-[#0B1F3A]
        "
      >
        <Building2
          size={19}
          strokeWidth={1.4}
        />
      </div>


      {/* Number */}

      <span
        className="
          text-[8px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-white/30
        "
      >
        01
      </span>

    </div>


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
      20+
    </p>


    <p
      className="
        mt-2
        text-[8px]
        font-bold
        uppercase
        tracking-[0.18em]
        text-[#8FA0AD]
      "
    >
      Service Areas
    </p>

  </motion.div>


  {/* =================================================
      STAT 2
  ================================================= */}

  <motion.div
    whileHover={{
      y: -5,
    }}
    transition={{
      duration: 0.25,
    }}
    className="
      group
      relative
      overflow-hidden
      rounded-[20px]
      border
      border-white/10
      bg-white/[0.06]
      p-5
      backdrop-blur-md
      transition-all
      duration-300
      hover:border-[#087F8C]/50
      hover:bg-white/[0.09]
      hover:shadow-[0_15px_35px_rgba(0,0,0,.18)]
    "
  >

    {/* Teal accent */}

    <div
      className="
        absolute
        left-0
        top-0
        h-[3px]
        w-10
        bg-[#087F8C]
        transition-all
        duration-300
        group-hover:w-full
      "
    />


    <div
      className="
        flex
        items-center
        justify-between
      "
    >

      {/* Icon */}

      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-[#087F8C]/10
          text-[#087F8C]
          transition-all
          duration-300
          group-hover:bg-[#087F8C]
          group-hover:text-white
        "
      >
        <Clock3
          size={19}
          strokeWidth={1.4}
        />
      </div>


      {/* Number */}

      <span
        className="
          text-[8px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-white/30
        "
      >
        02
      </span>

    </div>


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
      24/7
    </p>


    <p
      className="
        mt-2
        text-[8px]
        font-bold
        uppercase
        tracking-[0.18em]
        text-[#8FA0AD]
      "
    >
      Support
    </p>

  </motion.div>


  {/* =================================================
      STAT 3
  ================================================= */}

  <motion.div
    whileHover={{
      y: -5,
    }}
    transition={{
      duration: 0.25,
    }}
    className="
      group
      relative
      overflow-hidden
      rounded-[20px]
      border
      border-white/10
      bg-white/[0.06]
      p-5
      backdrop-blur-md
      transition-all
      duration-300
      hover:border-[#C6A15B]/40
      hover:bg-white/[0.09]
      hover:shadow-[0_15px_35px_rgba(0,0,0,.18)]
    "
  >

    {/* Gold accent */}

    <div
      className="
        absolute
        left-0
        top-0
        h-[3px]
        w-10
        bg-gradient-to-r
        from-[#C6A15B]
        to-[#087F8C]
        transition-all
        duration-300
        group-hover:w-full
      "
    />


    <div
      className="
        flex
        items-center
        justify-between
      "
    >

      {/* Icon */}

      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-br
          from-[#C6A15B]/15
          to-[#087F8C]/15
          text-[#C6A15B]
          transition-all
          duration-300
          group-hover:bg-gradient-to-br
          group-hover:from-[#C6A15B]
          group-hover:to-[#087F8C]
          group-hover:text-white
        "
      >
        <CheckCircle2
          size={19}
          strokeWidth={1.4}
        />
      </div>


      {/* Number */}

      <span
        className="
          text-[8px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-white/30
        "
      >
        03
      </span>

    </div>


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
      100%
    </p>


    <p
      className="
        mt-2
        text-[8px]
        font-bold
        uppercase
        tracking-[0.18em]
        text-[#8FA0AD]
      "
    >
      Commitment
    </p>

  </motion.div>

</div>

        </motion.div>


        {/* ===================================================
            RIGHT IMAGE / VISUAL
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            min-h-[430px]
            lg:min-h-[560px]
          "
        >

          {/* =================================================
              TEAL BACKING
          ================================================= */}

          <div
            className="
              absolute
              right-[-15px]
              top-[55px]
              h-[390px]
              w-[90%]
              rounded-[36px]
              bg-[#087F8C]
              lg:h-[510px]
            "
          />


          {/* =================================================
              IMAGE
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-0
              top-[25px]
              z-20
              h-[430px]
              w-[94%]
              overflow-hidden
              rounded-[34px]
              border
              border-white/15
              bg-[#123A5A]
              shadow-[0_35px_90px_rgba(0,0,0,.30)]
              lg:h-[530px]
            "
          >

          <img
  src="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=2000&q=90"
  alt="Canadian city skyline"
  className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    object-center
    transition-transform
    duration-[1800ms]
  "
/>


            {/* Image overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0B1F3A]/80
                via-[#0B1F3A]/10
                to-transparent
              "
            />


            {/* Image label */}

            <div
              className="
                absolute
                right-5
                top-5
                rounded-full
                border
                border-white/15
                bg-[#0B1F3A]/60
                px-4
                py-2
                backdrop-blur-md
              "
            >

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#C6A15B]
                "
              >
                Canada
              </span>

            </div>

          </motion.div>


          {/* =================================================
              FLOATING MISSION CARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            className="
              absolute
              bottom-[5px]
              left-[-20px]
              z-40
              w-[310px]
              rounded-[24px]
              border
              border-white/10
              bg-[#0B1F3A]/95
              p-6
              shadow-[0_25px_65px_rgba(0,0,0,.35)]
              backdrop-blur-xl
              sm:w-[340px]
              lg:bottom-[25px]
            "
          >

            {/* Card header */}

            <div
              className="
                flex
                items-center
                justify-between
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
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-[#C6A15B]
                    text-[#0B1F3A]
                  "
                >

                  <Building2
                    size={19}
                    strokeWidth={1.5}
                  />

                </div>


                <div>

                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#C6A15B]
                    "
                  >
                    Our Mission
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      font-medium
                      text-white
                    "
                  >
                    Innovation with purpose
                  </p>

                </div>

              </div>


              <CheckCircle2
                size={18}
                className="text-[#087F8C]"
              />

            </div>


            {/* Card text */}

            <p
              className="
                mt-5
                text-[11px]
                leading-6
                text-[#B9C5CC]
              "
            >
              Creating meaningful solutions that connect
              people, organizations and communities through
              innovation.
            </p>


            {/* Card line */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
              "
            >

              <span
                className="
                  h-[2px]
                  w-8
                  bg-[#C6A15B]
                "
              />

              <span
                className="
                  h-[2px]
                  w-3
                  bg-[#087F8C]
                "
              />

            </div>

          </motion.div>


          {/* =================================================
              FLOATING USERS ICON
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[-15px]
              top-[15px]
              z-30
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border
              border-[#C6A15B]/30
              bg-[#0B1F3A]/80
              text-[#C6A15B]
              shadow-[0_20px_50px_rgba(0,0,0,.25)]
              backdrop-blur-md
            "
          >

            <UsersRound
              size={32}
              strokeWidth={1.1}
            />

          </motion.div>


          {/* =================================================
              FOLDED GOLD CORNER
          ================================================= */}

          <div
            className="
              absolute
              bottom-[-10px]
              left-[-20px]
              z-30
              h-[100px]
              w-[100px]
              bg-[#C6A15B]
            "
            style={{
              clipPath:
                "polygon(0 0, 100% 100%, 0 100%)",
            }}
          />

        </motion.div>

      </div>


      {/* =====================================================
          BOTTOM SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          items-center
          gap-3
          lg:flex
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
          Explore
        </span>

        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            h-7
            w-px
            bg-[#C6A15B]
          "
        />

      </motion.div>

    </section>
  );
}