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
    href: "/our-team",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const services = [
  "Education & Training",
  "Engineering & Technical",
  "Infrastructure",
  "Technology & Innovation",
  "Social & Economic",
  "Financial Management",
  "Governance",
];

export default function DesktopNav() {
  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [hoveredItem, setHoveredItem] =
    useState(null);

  return (
    <nav className="hidden md:flex">
      <div className="flex items-center">

        {navigation.map((item) => {
          const isServices =
            item.label === "Services";

          const isHovered =
            hoveredItem === item.label;

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
                setHoveredItem(item.label);

                if (isServices) {
                  setServicesOpen(true);
                } else {
                  setServicesOpen(false);
                }
              }}
              onMouseLeave={() => {
                if (isServices) {
                  /*
                   * Small delay gives the cursor
                   * time to move into the dropdown.
                   */
                  setTimeout(() => {
                    setServicesOpen(false);
                  }, 120);
                }

                setHoveredItem(null);
              }}
            >
              {/* =================================================
                  MAIN NAVIGATION LINK
              ================================================= */}

              <Link
                href={item.href}
                className={`
                  relative
                  flex
                  h-[88px]
                  items-center
                  gap-1.5
                  whitespace-nowrap
                  text-[15px]
                  font-medium
                  leading-none
                  transition-colors
                  duration-300
                  ${
                    isHovered ||
                    (isServices &&
                      servicesOpen)
                      ? "text-[#087F8C]"
                      : "text-[#0B1F3A]"
                  }
                `}
              >
                <span>
                  {item.label}
                </span>

                {/* Services arrow */}

                {isServices && (
                  <motion.span
                    animate={{
                      rotate:
                        servicesOpen
                          ? 180
                          : 0,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="
                      flex
                      items-center
                    "
                  >
                    <ChevronDown
                      size={15}
                      strokeWidth={1.8}
                    />
                  </motion.span>
                )}

                {/* =================================================
                    UNDERLINE
                ================================================= */}

                <motion.span
                  initial={false}
                  animate={{
                    width:
                      isHovered ||
                      (isServices &&
                        servicesOpen)
                        ? "100%"
                        : "0%",
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    bottom-[21px]
                    left-0
                    h-[2px]
                    rounded-full
                    bg-[#C6A15B]
                  "
                />
              </Link>

              {/* =================================================
                  SERVICES DROPDOWN
              ================================================= */}

              {isServices && (
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                        scale: 0.98,
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
                        duration: 0.2,
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
                        top-[76px]
                        z-[999]
                        w-[360px]
                        -translate-x-1/2
                      "
                      onMouseEnter={() => {
                        setServicesOpen(true);
                        setHoveredItem(
                          "Services"
                        );
                      }}
                      onMouseLeave={() => {
                        setServicesOpen(false);
                        setHoveredItem(null);
                      }}
                    >
                      {/* =================================================
                          HOVER BRIDGE
                      ================================================= */}

                      <div
                        className="
                          absolute
                          left-0
                          right-0
                          top-[-10px]
                          h-[14px]
                        "
                      />

                      {/* =================================================
                          DROPDOWN BOX
                      ================================================= */}

                      <div
                        className="
                          relative
                          overflow-hidden
                          rounded-[22px]
                          border
                          border-[#DCE2E7]
                          bg-white
                          p-3
                          shadow-[0_25px_70px_rgba(11,31,58,0.18)]
                        "
                      >
                        {/* Dropdown header */}

                        <div
                          className="
                            border-b
                            border-[#DCE2E7]
                            px-4
                            pb-4
                            pt-3
                          "
                        >
                          <p
                            className="
                              text-[10px]
                              font-semibold
                              uppercase
                              tracking-[0.2em]
                              text-[#C6A15B]
                            "
                          >
                            Our Services
                          </p>

                          <p
                            className="
                              mt-1.5
                              text-[13px]
                              leading-5
                              text-[#6C7781]
                            "
                          >
                            Professional solutions
                            designed for lasting
                            impact.
                          </p>
                        </div>

                        {/* Service list */}

                        <div className="mt-2">
                          {services.map(
                            (
                              service,
                              index
                            ) => (
                              <motion.div
                                key={service}
                                initial={{
                                  opacity: 0,
                                  x: -8,
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
                                    0.2,
                                }}
                              >
                                <Link
                                  href="/services"
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
                                    {service}
                                  </span>

                                  <ArrowUpRight
                                    size={15}
                                    className="
                                      text-[#C6A15B]
                                      opacity-0
                                      transition-all
                                      duration-200
                                      group-hover:translate-x-1
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