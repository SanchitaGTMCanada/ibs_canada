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

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* =========================================
          HEADER
      ========================================== */}

      <motion.header
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          left-0
          top-0
          z-[100]
          w-full
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-white shadow-[0_8px_30px_rgba(11,31,58,0.08)]"
              : "bg-[#0B1F3A]"
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            max-w-[1440px]
            items-center
            px-6
            sm:px-8
            lg:px-10
            xl:px-14
            transition-all
            duration-500
            ${
              scrolled
                ? "h-[80px]"
                : "h-[92px]"
            }
          `}
        >
          {/* =====================================
              LOGO
          ====================================== */}

          <Link
            href="/"
            className="
              relative
              z-[120]
              flex
              shrink-0
              items-center
              gap-3
            "
            onClick={() =>
              setMobileOpen(false)
            }
          >
            {/* Brand mark */}

            <motion.div
              animate={{
                scale: scrolled ? 0.92 : 1,
              }}
              transition={{
                duration: 0.35,
              }}
              className={`
                flex
                h-[48px]
                w-[48px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border-2
                text-[14px]
                font-bold
                transition-colors
                duration-300
                ${
                  scrolled
                    ? "border-[#087F8C] text-[#087F8C]"
                    : "border-[#C6A15B] text-[#C6A15B]"
                }
              `}
            >
              IBS
            </motion.div>

            {/* Logo text */}

            <motion.div
              animate={{
                opacity: 1,
              }}
              className="hidden sm:block"
            >
              <p
                className={`
                  text-[17px]
                  font-bold
                  leading-none
                  tracking-[-0.02em]
                  transition-colors
                  duration-300
                  ${
                    scrolled
                      ? "text-[#0B1F3A]"
                      : "text-white"
                  }
                `}
              >
                IBS Group
              </p>

              <p
                className={`
                  mt-1
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  transition-colors
                  duration-300
                  ${
                    scrolled
                      ? "text-[#6C7781]"
                      : "text-white/65"
                  }
                `}
              >
                Canada
              </p>
            </motion.div>
          </Link>

          {/* =====================================
              DESKTOP NAV
          ====================================== */}

          <div className="ml-auto flex items-center">
            <DesktopNav
              scrolled={scrolled}
            />

            {/* =================================
                CONTACT BUTTON
            ================================= */}

            <Link
              href="/contact"
              className={`
                group
                ml-5
                hidden
                items-center
                gap-2
                rounded-full
                px-5
                py-3
                text-[15px]
                font-medium
                transition-all
                duration-300
                md:inline-flex
                ${
                  scrolled
                    ? "bg-[#087F8C] text-white hover:bg-[#0B1F3A]"
                    : "border border-[#C6A15B] bg-[#C6A15B] text-[#0B1F3A] hover:bg-white hover:text-[#0B1F3A]"
                }
              `}
            >
              Contact Us

              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          {/* =====================================
              MOBILE BUTTON
          ====================================== */}

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
            className={`
              relative
              z-[120]
              ml-auto
              flex
              h-[46px]
              w-[46px]
              items-center
              justify-center
              rounded-full
              md:hidden
              ${
                scrolled
                  ? "bg-[#0B1F3A] text-white"
                  : "border border-white/30 text-white"
              }
            `}
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
                  <X size={22} />
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
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* =========================================
          MOBILE NAV
      ========================================== */}

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