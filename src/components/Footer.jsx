
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
  Target,
  Users,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const navigation = [
    {
      title: "About Us",
      href: "#about",
      icon: Users,
    },
    {
      title: "Our Services",
      href: "#services",
      icon: BriefcaseBusiness,
    },
    {
      title: "Our Approach",
      href: "#approach",
      icon: Compass,
    },
    {
      title: "Contact Us",
      href: "#contact",
      icon: MessageCircle,
    },
  ];

  const services = [
    {
      title: "Consulting",
      icon: Target,
    },
    {
      title: "Strategy",
      icon: Compass,
    },
    {
      title: "Solutions",
      icon: BriefcaseBusiness,
    },
    {
      title: "Partnerships",
      icon: Users,
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      short: "in",
      href: "#",
    },
    {
      name: "Instagram",
      short: "ig",
      href: "#",
    },
    {
      name: "Facebook",
      short: "f",
      href: "#",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#071A2E] text-white">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main background */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(135deg,#061525_0%,#0B1F3A_42%,#123A5A_100%)]
          "
        />

        {/* Teal atmosphere */}
        <motion.div
          animate={{
            x: [0, 45, 0],
            y: [0, -35, 0],
            opacity: [0.16, 0.27, 0.16],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-32
            top-0
            h-[460px]
            w-[460px]
            rounded-full
            bg-[#087F8C]/25
            blur-[120px]
          "
        />

        {/* Gold atmosphere */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-32
            bottom-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#C6A15B]/20
            blur-[120px]
          "
        />

        {/* Center glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#123A5A]/40
            blur-[140px]
          "
        />

        {/* IBS watermark */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            select-none
            whitespace-nowrap
            text-[180px]
            font-black
            tracking-[-0.08em]
            text-white/[0.025]
            sm:text-[250px]
            lg:text-[350px]
          "
        >
          IBS
        </div>

        {/* Vertical architecture */}
        <div
          className="
            absolute
            left-[7%]
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-white/[0.07]
            to-transparent
          "
        />

        <div
          className="
            absolute
            right-[7%]
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-white/[0.07]
            to-transparent
          "
        />

        {/* Horizontal architectural line */}
        <div
          className="
            absolute
            left-0
            right-0
            top-[44%]
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#C6A15B]/[0.12]
            to-transparent
          "
        />

        {/* Rings */}
        <div
          className="
            absolute
            -left-24
            bottom-16
            h-64
            w-64
            rounded-full
            border
            border-[#087F8C]/15
          "
        />

        <div
          className="
            absolute
            -left-12
            bottom-24
            h-44
            w-44
            rounded-full
            border
            border-[#C6A15B]/15
          "
        />

        <div
          className="
            absolute
            -right-28
            top-16
            h-72
            w-72
            rounded-full
            border
            border-[#087F8C]/15
          "
        />

        {/* Decorative dots */}
        <div className="absolute left-[14%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#C6A15B]/70" />
        <div className="absolute left-[21%] top-[70%] h-1.5 w-1.5 rounded-full bg-[#087F8C]/80" />
        <div className="absolute right-[17%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#C6A15B]/70" />
        <div className="absolute right-[12%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-[#087F8C]/80" />

      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1380px]
          px-6
          py-0
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >

        {/* =======================================================
            BRAND HEADER
        ======================================================= */}

        <div
          className="
            flex
            flex-col
            gap-6
            border-b
            border-white/[0.12]
            py-10
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* Logo */}
          <a
            href="#"
            className="
              group
              flex
              items-center
              gap-5
            "
          >
            <div
              className="
                flex
                h-[68px]
                w-[100px]
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-white/20
                bg-white
                shadow-[0_12px_35px_rgba(0,0,0,0.3)]
                transition-all
                duration-300
                group-hover:border-[#C6A15B]
                group-hover:shadow-[0_12px_40px_rgba(198,161,91,0.2)]
              "
            >
              <img
                src="/logo/logo.jpg"
                alt="IBS Canada"
                className="
                  h-full
                  w-full
                  object-contain
                "
              />
            </div>

            <div>

              <h2
                className="
                  text-[19px]
                  font-extrabold
                  tracking-[-0.025em]
                  text-white
                "
              >
                IBS Canada
              </h2>

              <p
                className="
                  mt-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#F0CB79]
                "
              >
                Integrated Business Solutions
              </p>

            </div>
          </a>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3">

            {[
              {
                title: "Strategy",
                icon: Target,
              },
              {
                title: "Solutions",
                icon: Compass,
              },
              {
                title: "Partnerships",
                icon: Users,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    flex
                    items-center
                    gap-2.5
                    rounded-xl
                    border
                    border-white/[0.13]
                    bg-white/[0.055]
                    px-4
                    py-2.5
                    shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                    transition-all
                    duration-300
                    hover:border-[#C6A15B]/50
                    hover:bg-[#C6A15B]/[0.08]
                  "
                >

                  <Icon
                    className="
                      h-4
                      w-4
                      text-[#F0CB79]
                    "
                  />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-white/70
                    "
                  >
                    {item.title}
                  </span>

                </div>
              );
            })}

          </div>

        </div>

        {/* =======================================================
            CONTENT
        ======================================================= */}

        <div
          className="
            grid
            gap-12
            py-12
            sm:grid-cols-2
            lg:grid-cols-[1.25fr_0.85fr_0.85fr_1fr]
            lg:gap-14
          "
        >

          {/* =====================================================
              ABOUT IBS
          ===================================================== */}

          <div>

            <h3
              className="
                mb-5
                text-[11px]
                font-black
                uppercase
                tracking-[0.22em]
                text-[#F0CB79]
              "
            >
              About IBS
            </h3>

            <p
              className="
                max-w-[340px]
                text-[14px]
                font-medium
                leading-7
                text-white/70
              "
            >
              Integrated business solutions designed to help
              organizations move forward with clarity,
              strategy and confidence.
            </p>

            <div className="mt-7 space-y-4">

              {/* Email */}
              <a
                href="mailto:info@ibsgroupcanada.com"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  text-white/65
                  transition-all
                  duration-300
                  hover:text-white
                "
              >

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#087F8C]/35
                    bg-[#087F8C]/10
                    transition-all
                    duration-300
                    group-hover:border-[#C6A15B]/60
                    group-hover:bg-[#C6A15B]/10
                  "
                >
                  <Mail
                    className="
                      h-4
                      w-4
                      text-[#35B7C0]
                      transition-colors
                      group-hover:text-[#F0CB79]
                    "
                  />
                </span>

                <span className="text-[13px] font-medium">
                  info@ibsgroupcanada.com
                </span>

              </a>

              {/* Location */}
              <div
                className="
                  flex
                  items-center
                  gap-4
                  text-white/65
                "
              >

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#087F8C]/35
                    bg-[#087F8C]/10
                  "
                >
                  <MapPin
                    className="
                      h-4
                      w-4
                      text-[#35B7C0]
                    "
                  />
                </span>

                <span className="text-[13px] font-medium">
                  Canada
                </span>

              </div>

              {/* Phone */}
              <a
                href="tel:+1"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  text-white/65
                  transition-all
                  duration-300
                  hover:text-white
                "
              >

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#087F8C]/35
                    bg-[#087F8C]/10
                    transition-all
                    duration-300
                    group-hover:border-[#C6A15B]/60
                    group-hover:bg-[#C6A15B]/10
                  "
                >
                  <Phone
                    className="
                      h-4
                      w-4
                      text-[#35B7C0]
                      transition-colors
                      group-hover:text-[#F0CB79]
                    "
                  />
                </span>

                <span className="text-[13px] font-medium">
                  Connect with IBS
                </span>

              </a>

            </div>

          </div>

          {/* =====================================================
              EXPLORE
          ===================================================== */}

          <div>

            <h3
              className="
                mb-5
                text-[11px]
                font-black
                uppercase
                tracking-[0.22em]
                text-[#F0CB79]
              "
            >
              Explore
            </h3>

            <div className="space-y-2.5">

              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-transparent
                      px-2
                      py-2.5
                      text-white/65
                      transition-all
                      duration-300
                      hover:border-white/[0.08]
                      hover:bg-white/[0.045]
                      hover:text-white
                    "
                  >

                    <Icon
                      className="
                        h-[18px]
                        w-[18px]
                        text-[#2BB5BF]
                        transition-colors
                        duration-300
                        group-hover:text-[#F0CB79]
                      "
                    />

                    <span
                      className="
                        text-[13px]
                        font-semibold
                      "
                    >
                      {item.title}
                    </span>

                    <ArrowUpRight
                      className="
                        ml-auto
                        h-4
                        w-4
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        group-hover:opacity-100
                        group-hover:text-[#F0CB79]
                      "
                    />

                  </a>
                );
              })}

            </div>

          </div>

          {/* =====================================================
              SERVICES
          ===================================================== */}

          <div>

            <h3
              className="
                mb-5
                text-[11px]
                font-black
                uppercase
                tracking-[0.22em]
                text-[#F0CB79]
              "
            >
              Services
            </h3>

            <div className="space-y-3">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-transparent
                      px-2
                      py-2
                      transition-all
                      duration-300
                      hover:border-white/[0.08]
                      hover:bg-white/[0.045]
                    "
                  >

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[#087F8C]/30
                        bg-[#087F8C]/10
                        transition-all
                        duration-300
                        group-hover:border-[#C6A15B]/50
                        group-hover:bg-[#C6A15B]/10
                      "
                    >

                      <Icon
                        className="
                          h-4
                          w-4
                          text-[#35B7C0]
                          transition-colors
                          duration-300
                          group-hover:text-[#F0CB79]
                        "
                      />

                    </span>

                    <span
                      className="
                        text-[13px]
                        font-semibold
                        text-white/65
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {service.title}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>

          {/* =====================================================
              CONNECT
          ===================================================== */}

          <div>

            <h3
              className="
                mb-5
                text-[11px]
                font-black
                uppercase
                tracking-[0.22em]
                text-[#F0CB79]
              "
            >
              Connect
            </h3>

            <p
              className="
                max-w-[270px]
                text-[14px]
                font-medium
                leading-6
                text-white/65
              "
            >
              Have a business challenge?
              Let&apos;s start a conversation.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-[#C6A15B]/60
                bg-[#C6A15B]/10
                px-5
                py-3.5
                shadow-[0_10px_30px_rgba(198,161,91,0.08)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#F0CB79]
                hover:bg-[#C6A15B]/20
                hover:shadow-[0_12px_35px_rgba(198,161,91,0.16)]
              "
            >

              <span
                className="
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.16em]
                  text-[#F0CB79]
                "
              >
                Let&apos;s Talk
              </span>

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  text-[#F0CB79]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </a>

            {/* Social buttons */}
            <div className="mt-7 flex items-center gap-3">

              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="
                    group
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/[0.13]
                    bg-white/[0.045]
                    text-[12px]
                    font-black
                    uppercase
                    text-white/55
                    shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#C6A15B]/70
                    hover:bg-[#C6A15B]/15
                    hover:text-[#F0CB79]
                  "
                >
                  {social.short}
                </a>
              ))}

            </div>

          </div>

        </div>

        {/* =======================================================
            BOTTOM BAR
        ======================================================= */}

        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.12]
            py-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.13em]
              text-white/45
            "
          >
            © {year} Integrated Business Solutions.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <a
              href="/privacy-policy"
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-white/45
                transition-colors
                hover:text-[#F0CB79]
              "
            >
              Privacy
            </a>

            <a
              href="/terms"
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-white/45
                transition-colors
                hover:text-[#F0CB79]
              "
            >
              Terms
            </a>

          </div>

        </div>

      </div>

      {/* =========================================================
          LEFT BOTTOM PAGE FOLD
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-20
          h-[80px]
          w-[80px]
          overflow-hidden
          sm:h-[96px]
          sm:w-[96px]
        "
      >

        <motion.div
          animate={{
            rotate: [-1, 3, -1],
            scale: [1, 1.025, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-[35px]
            -left-[35px]
            h-[84px]
            w-[84px]
            rotate-45
            border-r
            border-t
            border-[#C6A15B]/80
            bg-gradient-to-br
            from-[#164B68]
            via-[#0B1F3A]
            to-[#061525]
            shadow-[0_-10px_30px_rgba(0,0,0,0.3)]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-[78px]
            bg-gradient-to-r
            from-[#C6A15B]
            to-transparent
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            h-[78px]
            w-[3px]
            bg-gradient-to-t
            from-[#C6A15B]
            to-transparent
          "
        />

      </div>

      {/* =========================================================
          RIGHT BOTTOM PAGE FOLD
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          z-20
          h-[80px]
          w-[80px]
          overflow-hidden
          sm:h-[96px]
          sm:w-[96px]
        "
      >

        <motion.div
          animate={{
            rotate: [1, -3, 1],
            scale: [1, 1.025, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="
            absolute
            -bottom-[35px]
            -right-[35px]
            h-[84px]
            w-[84px]
            -rotate-45
            border-l
            border-t
            border-[#C6A15B]/80
            bg-gradient-to-bl
            from-[#164B68]
            via-[#0B1F3A]
            to-[#061525]
            shadow-[0_-10px_30px_rgba(0,0,0,0.3)]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[3px]
            w-[78px]
            bg-gradient-to-l
            from-[#C6A15B]
            to-transparent
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[78px]
            w-[3px]
            bg-gradient-to-t
            from-[#C6A15B]
            to-transparent
          "
        />

      </div>

      {/* =========================================================
          PREMIUM BOTTOM LINE
      ========================================================= */}

      <motion.div
        animate={{
          opacity: [0.45, 1, 0.45],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-30
          h-[3px]
          w-[55%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#C6A15B]
          to-transparent
        "
      />

    </footer>
  );
}

