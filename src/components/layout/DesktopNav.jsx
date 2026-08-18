"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

const navigation = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    dropdown: true,
  },
  {
    label: "Our Team",
    href: "/team",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const services = [
  {
    title: "Education & Training",
    href: "/services",
  },
  {
    title: "Engineering & Technical",
    href: "/services",
  },
  {
    title: "Infrastructure",
    href: "/services",
  },
  {
    title: "Technology & Innovation",
    href: "/services",
  },
  {
    title: "Social & Economic",
    href: "/services",
  },
  {
    title: "Financial Management",
    href: "/services",
  },
  {
    title: "Governance",
    href: "/services",
  },
];

export default function DesktopNav({
  scrolled,
}) {
  const [servicesOpen, setServicesOpen] =
    useState(false);

  return (
    <nav
      className="
        hidden
        items-center
        md:flex
      "
    >
      {/* =====================================
          MAIN NAVIGATION
      ====================================== */}

      <div className="flex items-center">
        {navigation.map((item) => {
          const isServices =
            item.label === "Services";

          return (
            <div
              key={item.label}
              className="
                relative
                px-3
                lg:px-4
                xl:px-5
              "
              onMouseEnter={() => {
                if (isServices) {
                  setServicesOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (isServices) {
                  setServicesOpen(false);
                }
              }}
            >
  <Link
  href={item.href}
  style={{
    color: scrolled ? "#202832" : "#FFFFFF",
  }}
  className="
    group
    relative
    flex
    h-[80px]
    items-center
    gap-1.5
    whitespace-nowrap
    text-[15px]
    font-medium
    leading-none
    transition-colors
    duration-300
  "
>
  <span
    className="
      transition-colors
      duration-300
      group-hover:text-[#C6A15B]
      [@media(min-width:768px)]:group-hover:text-[#087F8C]
    "
  >
    {item.label}
  </span>

  {isServices && (
    <motion.span
      animate={{
        rotate: servicesOpen ? 180 : 0,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <ChevronDown
        size={16}
        strokeWidth={1.7}
      />
    </motion.span>
  )}

  <span
    className={`
      absolute
      bottom-[21px]
      left-0
      h-[2px]
      rounded-full
      bg-[#C6A15B]
      transition-all
      duration-300
      ${
        isServices && servicesOpen
          ? "w-full"
          : "w-0 group-hover:w-full"
      }
    `}
  />
</Link>

              {/* =================================
                  SERVICES DROPDOWN
              ================================== */}

              {isServices && (
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 12,
                        scale: 0.97,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.22,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className="
                        absolute
                        left-1/2
                        top-[80px]
                        z-[150]
                        w-[350px]
                        -translate-x-1/2
                        pt-3
                      "
                    >
                      <div
                        className="
                          overflow-hidden
                          rounded-[20px]
                          border
                          border-[#DCE2E7]
                          bg-white
                          p-3
                          shadow-[0_25px_70px_rgba(11,31,58,0.14)]
                        "
                      >
                        {/* Dropdown heading */}

                        <div className="border-b border-[#DCE2E7] px-4 pb-4 pt-3">
                          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#C6A15B]">
                            Our Services
                          </p>

                          <p className="mt-1.5 text-[13px] leading-5 text-[#6C7781]">
                            Professional solutions
                            designed for lasting
                            impact.
                          </p>
                        </div>

                        {/* Services */}

                        <div className="mt-2">
                          {services.map(
                            (
                              service,
                              index
                            ) => (
                              <motion.div
                                key={
                                  service.title
                                }
                                initial={{
                                  opacity: 0,
                                  x: -10,
                                }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                transition={{
                                  delay:
                                    index *
                                    0.035,
                                  duration:
                                    0.22,
                                }}
                              >
                                <Link
                                  href={
                                    service.href
                                  }
                                  className="
                                    group
                                    flex
                                    items-center
                                    justify-between
                                    rounded-[11px]
                                    px-4
                                    py-3
                                    text-[14px]
                                    font-medium
                                    text-[#202832]
                                    transition-all
                                    duration-200
                                    hover:bg-[#F6F4EF]
                                    hover:text-[#087F8C]
                                  "
                                >
                                  <span>
                                    {
                                      service.title
                                    }
                                  </span>

                                  <ArrowUpRight
                                    size={
                                      15
                                    }
                                    className="
                                      -translate-x-1
                                      opacity-0
                                      transition-all
                                      duration-200
                                      group-hover:translate-x-0
                                      group-hover:opacity-100
                                    "
                                  />
                                </Link>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}