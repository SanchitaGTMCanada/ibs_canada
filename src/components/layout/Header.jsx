"use client";

import { useEffect, useState } from "react";
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

export default function Header() {
  const [scrolled, setScrolled] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

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
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
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
  className={`
    ibs-container
    relative
    flex
    items-center
    rounded-[30px]
    bg-white
    px-5
    shadow-[0_15px_50px_rgba(11,31,58,0.12)]
    transition-all
    duration-500
    sm:px-7
    lg:px-8
    xl:px-10
${
  scrolled
    ? "h-[88px] shadow-[0_18px_55px_rgba(11,31,58,0.16)]"
    : "h-[88px]"
}
  `}

  style={{margin:"0px", width:"100%"}}
>
          {/* =================================================
              LOGO
          ================================================= */}

<Link
  href="/"
  onClick={() => setMobileOpen(false)}
  className="
    relative
    z-[120]
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
              CENTER NAV
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              md:block
            "
          >
            <DesktopNav />
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              ml-auto
              flex
              items-center
              gap-3
            "
          >
            {/* Contact button */}

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
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-[#0B1F3A]
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

            {/* Mobile */}

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
                z-[120]
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
      </motion.header>

      {/* =================================================
          MOBILE NAV
      ================================================= */}

      <AnimatePresence>
        {mobileOpen && (
          <MobileNav
            onClose={() =>
              setMobileOpen(false)
            }
          />
        )}
      </AnimatePresence>
    </>
  );
}