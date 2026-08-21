"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import Image from "next/image";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

/* =========================================================
   SERVICE LINKS
========================================================= */

const serviceLinks = [
  {
    number: "01",
    title: "Education & Training",
    href: "/services/education-training",
  },
  {
    number: "02",
    title: "Engineering & Technical",
    href: "/services/engineering-technical",
  },
  {
    number: "03",
    title: "Infrastructure",
    href: "/services/infrastructure",
  },
  {
    number: "04",
    title: "Technology & Innovation",
    href: "/services/technology-innovation",
  },
  {
    number: "05",
    title: "Social & Economic",
    href: "/services/social-economic",
  },
  {
    number: "06",
    title: "Financial Management",
    href: "/services/financial-management",
  },
  {
    number: "07",
    title: "Governance",
    href: "/services/governance",
  },
];

export default function Header() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const lastScrollY = useRef(0);

  /* =====================================================
     SCROLL BEHAVIOUR

     Scroll DOWN → hide navbar
     Scroll UP   → show navbar
     Top         → always show
  ===================================================== */

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;

      /* Always show navbar at top */

      if (currentScrollY <= 40) {
        setNavbarVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      /* Ignore tiny movements */

      const scrollDifference = Math.abs(
        currentScrollY - previousScrollY
      );

      if (scrollDifference < 8) {
        return;
      }

      /* Scrolling down */

      if (currentScrollY > previousScrollY) {
        setNavbarVisible(false);
        setMobileOpen(false);
      }

      /* Scrolling up */

      else if (currentScrollY < previousScrollY) {
        setNavbarVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =====================================================
     MOBILE BODY LOCK
  ===================================================== */

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* =================================================
          FLOATING HEADER
      ================================================= */}

      <motion.header
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          opacity: navbarVisible ? 1 : 0,
          y: navbarVisible ? 0 : -120,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          left-0
          top-0
          z-[100]
          w-full
          px-4
          pt-5
          sm:px-6
          sm:pt-6
          lg:px-8
          lg:pt-8
        "
      >

        {/* =================================================
            NAVBAR PILL
        ================================================= */}

        <div
          className="
            ibs-container
            relative
            z-[100]
            flex
            h-[88px]
            items-center
            overflow-visible
            rounded-[30px]
            bg-white
            px-5
            shadow-[0_15px_50px_rgba(11,31,58,0.12)]
            transition-shadow
            duration-500
            sm:px-7
            lg:px-8
            xl:px-10
          "
          style={{
            margin: "0px",
            width: "100%",
          }}
        >

          {/* =================================================
              BACKGROUND DECORATION
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              overflow-hidden
              rounded-[30px]
            "
          >

            {/* BASE */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-white
                via-white
                to-[#F6F4EF]
              "
            />


            {/* TEAL GLOW */}

            <motion.div
              className="
                absolute
                -right-[80px]
                -top-[120px]
                h-[270px]
                w-[380px]
                rounded-full
                bg-[#087F8C]/[0.11]
                blur-3xl
              "
              animate={{
                scale: [1, 1.05, 1],
                x: [0, -8, 0],
                y: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


            {/* GOLD GLOW */}

            <motion.div
              className="
                absolute
                -bottom-[130px]
                -left-[60px]
                h-[230px]
                w-[300px]
                rounded-full
                bg-[#C6A15B]/[0.09]
                blur-3xl
              "
              animate={{
                scale: [1, 1.06, 1],
                x: [0, 7, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


            {/* TEAL CIRCLE */}

            <div
              className="
                absolute
                right-[110px]
                top-[-95px]
                h-[190px]
                w-[190px]
                rounded-full
                border
                border-[#087F8C]/20
              "
            />


            {/* GOLD CIRCLE */}

            <div
              className="
                absolute
                right-[125px]
                top-[-80px]
                h-[160px]
                w-[160px]
                rounded-full
                border
                border-[#C6A15B]/20
              "
            />


            {/* DOT PATTERN */}

            <div
              className="
                absolute
                right-[30px]
                top-1/2
                h-[80px]
                w-[180px]
                -translate-y-1/2
                opacity-40
              "
              style={{
                backgroundImage:
                  "radial-gradient(#087F8C 1.2px, transparent 1.2px)",
                backgroundSize:
                  "14px 14px",
              }}
            />


            {/* GOLD DOTS */}

            <div
              className="
                absolute
                right-[35px]
                top-[18px]
                h-[5px]
                w-[5px]
                rounded-full
                bg-[#C6A15B]/60
              "
            />

            <div
              className="
                absolute
                right-[50px]
                top-[30px]
                h-[3px]
                w-[3px]
                rounded-full
                bg-[#087F8C]/50
              "
            />

            <div
              className="
                absolute
                right-[25px]
                top-[34px]
                h-[3px]
                w-[3px]
                rounded-full
                bg-[#C6A15B]/50
              "
            />


            {/* LEFT GOLD DOT */}

            <div
              className="
                absolute
                bottom-[17px]
                left-[210px]
                h-[4px]
                w-[4px]
                rounded-full
                bg-[#C6A15B]/40
              "
            />


            {/* TEAL LINE */}

            <div
              className="
                absolute
                bottom-[12px]
                right-[170px]
                h-px
                w-[90px]
                bg-gradient-to-r
                from-transparent
                via-[#087F8C]/30
                to-transparent
              "
            />

          </div>


          {/* =================================================
              NAVBAR CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-[200]
              flex
              w-full
              items-center
            "
          >

            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="
                relative
                z-[220]
                flex
                h-full
                w-[170px]
                shrink-0
                items-center
                overflow-hidden
              "
            >

              <Image
                src="/logo/logo.jpg"
                alt="IBS Group Canada"
                width={170}
                height={88}
                priority
                className="
                  h-[82px]
                  w-[165px]
                  object-contain
                  object-left
                "
              />

            </Link>


            {/* =================================================
                CENTER NAVIGATION
            ================================================= */}

            <div
              className="
                absolute
                left-1/2
                z-[999]
                hidden
                -translate-x-1/2
                md:block
              "
            >

              <DesktopNav
                services={serviceLinks}
              />

            </div>


            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div
              className="
                relative
                z-[220]
                ml-auto
                flex
                items-center
                gap-3
              "
            >

              {/* CONTACT */}

              <Link
                href="/contact"
                className="
                  group
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  bg-[#087F8C]
                  px-5
                  py-3
                  text-[15px]
                  font-medium
                  !text-white
                  shadow-[0_8px_25px_rgba(8,127,140,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#0B1F3A]
                  hover:shadow-[0_12px_30px_rgba(11,31,58,0.2)]
                  hover:!text-white
                  md:inline-flex
                "
              >

                <span className="!text-white">
                  Contact Us
                </span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B1F3A]
                    !text-white
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                >

                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    className="!text-white"
                  />

                </span>

              </Link>


              {/* MOBILE MENU */}

              <button
                type="button"
                aria-label={
                  mobileOpen
                    ? "Close navigation"
                    : "Open navigation"
                }
                onClick={() =>
                  setMobileOpen(!mobileOpen)
                }
                className="
                  relative
                  z-[220]
                  flex
                  h-[46px]
                  w-[46px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0B1F3A]
                  text-white
                  transition-colors
                  duration-300
                  hover:bg-[#087F8C]
                  md:hidden
                "
              >

                <AnimatePresence
                  mode="wait"
                  initial={false}
                >

                  {mobileOpen ? (

                    <motion.span
                      key="close"
                      initial={{
                        opacity: 0,
                        rotate: -90,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                      }}
                    >
                      <X size={21} />
                    </motion.span>

                  ) : (

                    <motion.span
                      key="menu"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                      }}
                    >
                      <Menu size={21} />
                    </motion.span>

                  )}

                </AnimatePresence>

              </button>

            </div>

          </div>

        </div>

      </motion.header>


      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}

      <AnimatePresence>

        {mobileOpen && (

          <MobileNav
            onClose={() => setMobileOpen(false)}
            services={serviceLinks}
          />

        )}

      </AnimatePresence>

    </>
  );
}