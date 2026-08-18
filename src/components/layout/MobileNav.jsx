"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  motion,
} from "framer-motion";
import { useState } from "react";

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
  "Education & Training",
  "Engineering & Technical",
  "Infrastructure",
  "Technology & Innovation",
  "Social & Economic",
  "Financial Management",
  "Governance",
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

        {/* Label */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
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

        {/* Navigation */}

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
                }}
                className="
                  border-b
                  border-white/10
                "
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
                      py-5
                      text-[28px]
                      font-semibold
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    {item.label}
                  </Link>

                  {item.dropdown && (
                    <button
                      type="button"
                      onClick={() =>
                        setServicesOpen(
                          !servicesOpen
                        )
                      }
                      className="
                        p-4
                        text-white
                      "
                    >
                      <motion.div
                        animate={{
                          rotate:
                            servicesOpen
                              ? 180
                              : 0,
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
                      className="
                        overflow-hidden
                      "
                    >
                      <div
                        className="
                          mb-5
                          rounded-[20px]
                          bg-white/5
                          p-3
                        "
                      >
                        {services.map(
                          (service) => (
                            <Link
                              key={service}
                              href="/services"
                              onClick={onClose}
                              className="
                                block
                                border-b
                                border-white/10
                                px-4
                                py-4
                                text-[15px]
                                font-medium
                                text-white/70
                                transition-colors
                                last:border-0
                                hover:text-[#C6A15B]
                              "
                            >
                              {service}
                            </Link>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
              </motion.div>
            )
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
            delay: 0.4,
          }}
          className="mt-8"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="
              flex
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#C6A15B]
              px-7
              py-4
              text-[15px]
              font-semibold
              text-[#0B1F3A]
            "
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}