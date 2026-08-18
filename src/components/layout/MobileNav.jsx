"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import {
  motion,
} from "framer-motion";

const services = [
  {
    title: "Education & Training",
    href: "/education-training",
  },
  {
    title: "Engineering & Technical",
    href: "/engineering-technical",
  },
  {
    title: "Infrastructure",
    href: "/infrastructure",
  },
  {
    title: "Technology & Innovation",
    href: "/technology-innovation",
  },
  {
    title: "Social & Economic",
    href: "/social-economic",
  },
  {
    title: "Financial Management",
    href: "/financial-management",
  },
  {
    title: "Governance",
    href: "/governance",
  },
];

const navigation = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
    dropdown: true,
  },
  {
    title: "Our Team",
    href: "/team",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

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
        duration: 0.3,
      }}
      className="
        fixed
        inset-0
        z-[90]
        overflow-y-auto
        bg-white
        lg:hidden
      "
    >
      <div className="min-h-full px-7 pb-10 pt-[125px]">

        {/* Label */}

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
            delay: 0.1,
          }}
          className="mb-8"
        >
          <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#19BFE8]">
            Navigation
          </span>
        </motion.div>

        {/* Navigation */}

        <nav>
          {navigation.map(
            (item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.08 + index * 0.07,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-[#E7EEF1]"
              >
                <div className="flex items-center">

                  <Link
                    href={item.href}
                    onClick={() => {
                      if (!item.dropdown) {
                        onClose();
                      }
                    }}
                    className="
                      flex-1
                      py-6
                      text-[25px]
                      font-extrabold
                      tracking-[-0.04em]
                      text-[#111111]
                    "
                  >
                    {item.title}
                  </Link>

                  {item.dropdown && (
                    <button
                      type="button"
                      onClick={() =>
                        setServicesOpen(
                          !servicesOpen,
                        )
                      }
                      className="p-5"
                    >
                      <motion.div
                        animate={{
                          rotate:
                            servicesOpen
                              ? 180
                              : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <ChevronDown size={22} />
                      </motion.div>
                    </button>
                  )}
                </div>

                {/* Services */}

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
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mb-5 rounded-[20px] bg-[#EAFBFF] p-3">
                        {services.map(
                          (
                            service,
                            serviceIndex,
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
                                  serviceIndex *
                                  0.04,
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
                                  block
                                  border-b
                                  border-[#D6F0F5]
                                  px-4
                                  py-4
                                  text-[15px]
                                  font-semibold
                                  text-[#4E5A60]
                                  transition-colors
                                  last:border-0
                                  hover:text-[#19BFE8]
                                "
                              >
                                {
                                  service.title
                                }
                              </Link>
                            </motion.div>
                          ),
                        )}
                      </div>
                    </motion.div>
                  )}
              </motion.div>
            ),
          )}
        </nav>

        {/* CTA */}

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
            duration: 0.4,
          }}
          className="mt-8"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="
              group
              flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#19BFE8]
              px-7
              py-4
              text-[15px]
              font-bold
              text-white
              transition-all
              duration-300
              hover:bg-[#08AED8]
            "
          >
            Contact Us

            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        {/* Contact information */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.55,
          }}
          className="mt-12 border-t border-[#E7EEF1] pt-7"
        >
          <a
            href="tel:+18676690242"
            className="mb-5 flex items-center gap-3 text-[14px] font-medium text-[#68747B]"
          >
            <Phone
              size={17}
              className="text-[#19BFE8]"
            />

            +1 867-669-0242
          </a>

          <a
            href="mailto:info@ibsgroupcanada.com"
            className="flex items-center gap-3 text-[14px] font-medium text-[#68747B]"
          >
            <Mail
              size={17}
              className="text-[#19BFE8]"
            />

            info@ibsgroupcanada.com
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}