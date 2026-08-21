"use client";

import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "#",
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

/* =========================================================
   SERVICES
========================================================= */

const services = [
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

/* =========================================================
   COMPONENT
========================================================= */

export default function MobileNav({
  onClose,
}) {
  const [servicesOpen, setServicesOpen] =
    useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        fixed
        inset-0
        z-[90]
        overflow-y-auto
        bg-[#0B1F3A]
        px-6
        pb-10
        pt-[130px]
        md:hidden
      "
    >

      <div className="mx-auto max-w-[600px]">

        {/* =================================================
            LABEL
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            mb-8
            text-[11px]
            font-medium
            uppercase
            tracking-[0.22em]
            text-[#C6A15B]
          "
        >
          Navigation
        </motion.p>


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav>

          {navigation.map(
            (item, index) => (

              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay:
                    0.08 +
                    index * 0.06,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  border-b
                  border-white/10
                "
              >

                {/* =================================================
                    MAIN NAV ITEM
                ================================================= */}

                <div className="flex items-center">

                  <Link
                    href={
                      item.dropdown
                        ? "#"
                        : item.href
                    }
                    onClick={(event) => {

                      if (item.dropdown) {
                        event.preventDefault();

                        setServicesOpen(
                          (previous) =>
                            !previous
                        );

                        return;
                      }

                      onClose();

                    }}
                    className="
                      flex-1
                      py-5
                      text-[28px]
                      font-semibold
                      tracking-[-0.04em]
                      text-white
                      transition-colors
                      duration-300
                      hover:text-[#C6A15B]
                      sm:text-[32px]
                    "
                  >
                    {item.label}
                  </Link>


                  {/* SERVICES ARROW */}

                  {item.dropdown && (

                    <button
                      type="button"
                      aria-label={
                        servicesOpen
                          ? "Close services"
                          : "Open services"
                      }
                      onClick={() =>
                        setServicesOpen(
                          (previous) =>
                            !previous
                        )
                      }
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        text-white
                        transition-colors
                        duration-300
                        hover:border-[#C6A15B]
                        hover:text-[#C6A15B]
                      "
                    >

                      <motion.div
                        animate={{
                          rotate:
                            servicesOpen
                              ? 180
                              : 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                      >

                        <ChevronDown
                          size={22}
                          strokeWidth={1.5}
                        />

                      </motion.div>

                    </button>

                  )}

                </div>


                {/* =================================================
                    SERVICES
                ================================================= */}

                {item.dropdown &&
                  servicesOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        overflow-hidden
                      "
                    >

                      <div
                        className="
                          mb-5
                          overflow-hidden
                          rounded-[20px]
                          border
                          border-white/10
                          bg-white/[0.04]
                          p-2
                        "
                      >

                        {/* SERVICE HEADER */}

                        <div
                          className="
                            border-b
                            border-white/10
                            px-4
                            pb-4
                            pt-3
                          "
                        >

                          <p
                            className="
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[0.22em]
                              text-[#C6A15B]
                            "
                          >
                            Our Services
                          </p>

                          <p
                            className="
                              mt-1.5
                              text-[12px]
                              leading-5
                              text-white/40
                            "
                          >
                            Explore our areas
                            of expertise
                          </p>

                        </div>


                        {/* SERVICE LIST */}

                        <div className="mt-1">

                          {services.map(
                            (
                              service,
                              serviceIndex
                            ) => (

                              <motion.div
                                key={
                                  service.href
                                }
                                initial={{
                                  opacity: 0,
                                  x: -15,
                                }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                transition={{
                                  delay:
                                    serviceIndex *
                                    0.04,
                                  duration: 0.3,
                                  ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1,
                                  ],
                                }}
                              >

                                <Link
                                  href={
                                    service.href
                                  }
                                  onClick={
                                    onClose
                                  }
                                  className="
                                    group
                                    relative
                                    flex
                                    items-center
                                    justify-between
                                    overflow-hidden
                                    border-b
                                    border-white/10
                                    px-4
                                    py-4
                                    text-[14px]
                                    font-medium
                                    text-white/70
                                    transition-all
                                    duration-300
                                    last:border-0
                                    hover:bg-white/[0.05]
                                    hover:text-[#C6A15B]
                                  "
                                >

                                  {/* GOLD HOVER LINE */}

                                  <span
                                    className="
                                      absolute
                                      left-0
                                      top-0
                                      h-full
                                      w-[2px]
                                      origin-bottom
                                      scale-y-0
                                      bg-[#C6A15B]
                                      transition-transform
                                      duration-300
                                      group-hover:scale-y-100
                                    "
                                  />


                                  {/* NUMBER + TITLE */}

                                  <span
                                    className="
                                      flex
                                      min-w-0
                                      items-center
                                      gap-3
                                    "
                                  >

                                    <span
                                      className="
                                        shrink-0
                                        font-mono
                                        text-[8px]
                                        text-[#C6A15B]
                                      "
                                    >
                                      {
                                        service.number
                                      }
                                    </span>

                                    <span>
                                      {
                                        service.title
                                      }
                                    </span>

                                  </span>


                                  {/* ARROW */}

                                  <ArrowUpRight
                                    size={15}
                                    className="
                                      ml-3
                                      shrink-0
                                      text-[#C6A15B]
                                      opacity-40
                                      transition-all
                                      duration-300
                                      group-hover:-translate-y-1
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

              </motion.div>

            )
          )}

        </nav>


        {/* =================================================
            CTA
        ================================================= */}

        <motion.div
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
            duration: 0.5,
          }}
          className="mt-8"
        >

          <Link
            href="/contact"
            onClick={onClose}
            className="
              group
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#C6A15B]
              px-7
              py-4
              text-[15px]
              font-semibold
              text-[#0B1F3A]
              transition-all
              duration-300
              hover:bg-[#087F8C]
              hover:text-white
            "
          >

            Contact Us

            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />

          </Link>

        </motion.div>


        {/* =================================================
            BOTTOM INFORMATION
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
          }}
          className="
            mt-10
            border-t
            border-white/10
            pt-6
          "
        >

          <div className="flex items-end justify-between">

            <div>

              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#C6A15B]
                "
              >
                IBS Services
              </p>

              <p
                className="
                  mt-2
                  text-[11px]
                  text-white/35
                "
              >
                Seven areas of expertise
              </p>

            </div>

            <span
              className="
                font-mono
                text-[42px]
                leading-none
                text-white/[0.08]
              "
            >
              07
            </span>

          </div>

        </motion.div>

      </div>

    </motion.div>
  );
}