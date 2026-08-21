"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { iconMap } from "./iconMap";

export default function ServiceBenefits({
  data,
  reduceMotion = false,
}) {
  const benefits = data?.benefits || [];

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [isInteracting, setIsInteracting] =
    useState(false);

  /*
   * ============================================================
   * ACCENT COLOURS
   * ============================================================
   */

  const accents = [
    "#087F8C",
    "#C6A15B",
    "#6EC6D1",
    "#087F8C",
    "#C6A15B",
  ];

  /*
   * ============================================================
   * FALLBACK IMAGES
   * ============================================================
   */

  const fallbackImages = [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=90",

    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90",

    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=90",

    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=90",

    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=90",
  ];

  /*
   * ============================================================
   * PRELOAD IMAGES
   * ============================================================
   */

  useEffect(() => {
    benefits.forEach((benefit, index) => {
      const src =
        benefit?.image ||
        fallbackImages[
          index % fallbackImages.length
        ];

      if (!src) return;

      const image = new Image();
      image.src = src;
    });
  }, [benefits]);

  /*
   * ============================================================
   * AUTO ROTATION
   * ============================================================
   *
   * Does NOT rotate while user is interacting with
   * the right-side navigation.
   */

  useEffect(() => {
    if (
      reduceMotion ||
      benefits.length <= 1 ||
      isInteracting
    ) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) => {
        if (
          current >=
          benefits.length - 1
        ) {
          return 0;
        }

        return current + 1;
      });
    }, 6500);

    return () => {
      clearInterval(timer);
    };
  }, [
    reduceMotion,
    benefits.length,
    isInteracting,
  ]);

  /*
   * ============================================================
   * EMPTY STATE
   * ============================================================
   */

  if (!benefits.length) {
    return null;
  }

  /*
   * ============================================================
   * ACTIVE BENEFIT
   * ============================================================
   */

  const activeBenefit =
    benefits[activeIndex];

  const ActiveIcon =
    iconMap[
      activeBenefit?.icon
    ] || ShieldCheck;

  /*
   * ============================================================
   * IMAGE LIST
   * ============================================================
   *
   * All images remain mounted.
   * Only opacity changes.
   */

  const images = benefits.map(
    (benefit, index) =>
      benefit?.image ||
      fallbackImages[
        index % fallbackImages.length
      ]
  );

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#E8EEF0]
        via-[#F3F1EA]
        to-[#DCE8E9]
        px-5
        py-24
        sm:px-8
        lg:px-14
        lg:py-32
      "
    >
      {/* ========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_75%_40%,rgba(8,127,140,0.10),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(198,161,91,0.08),transparent_28%)]
        "
      />

      {/* Teal glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#087F8C]/10
          blur-[110px]
        "
      />

      {/* Gold glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          bottom-[5%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#C6A15B]/10
          blur-[110px]
        "
      />

      {/* Architectural lines */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-[8%]
          hidden
          w-px
          bg-[#0B1F3A]/[0.05]
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-[8%]
          hidden
          w-px
          bg-[#0B1F3A]/[0.05]
          lg:block
        "
      />

      {/* ========================================================
          WATERMARK
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-20px]
          top-[-60px]
          select-none
          text-[250px]
          font-semibold
          leading-none
          tracking-[-0.12em]
          text-[#0B1F3A]/[0.045]
          sm:text-[380px]
          lg:text-[500px]
        "
      >
        05
      </div>

      {/* ========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1450px]
        "
      >
        {/* ======================================================
            HEADER
        ======================================================= */}

        <div
          className="
            grid
            gap-10
            lg:grid-cols-[1fr_0.65fr]
            lg:items-end
          "
        >
          {/* Heading */}

          <motion.div
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    x: -30,
                  }
            }
            whileInView={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
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
                  w-10
                  bg-[#087F8C]
                "
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#087F8C]
                "
              >
                The IBS Difference
              </span>
            </div>

            <h2
              className="
                mt-7
                max-w-[800px]
                text-[54px]
                font-medium
                leading-[0.84]
                tracking-[-0.075em]
                text-[#0B1F3A]
                sm:text-[74px]
                lg:text-[96px]
              "
            >
              {data.impactTitle}

              <span
                className="
                  block
                  text-[#087F8C]
                "
              >
                {data.impactAccent}
              </span>

              {data.impactSecond && (
                <>
                  <span className="block">
                    {data.impactSecond}
                  </span>

                  <span
                    className="
                      block
                      text-[#C6A15B]
                    "
                  >
                    {data.impactSecondAccent}
                  </span>
                </>
              )}
            </h2>
          </motion.div>

          {/* Description */}

          <motion.div
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <div
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <Sparkles
                size={16}
                className="text-[#C6A15B]"
                strokeWidth={1}
              />

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#202832]/40
                "
              >
                What sets us apart
              </span>
            </div>

            <p
              className="
                max-w-[560px]
                text-[14px]
                leading-[1.9]
                text-[#202832]/60
                sm:text-[16px]
              "
            >
              {data.impactDescription}
            </p>
          </motion.div>
        </div>

        {/* ======================================================
            FEATURE AREA
        ======================================================= */}

        <div
          className="
            mt-20
            grid
            gap-6
            lg:mt-24
            lg:grid-cols-[1.18fr_0.82fr]
            lg:items-stretch
          "
        >
          {/* ====================================================
              IMAGE PANEL
          ===================================================== */}

          <div
            className="
              group
              relative
              min-h-[540px]
              overflow-hidden
              bg-[#0B1F3A]
              sm:min-h-[590px]
            "
          >
            {/* ==================================================
                ALL IMAGES REMAIN MOUNTED
            =================================================== */}

            <div
              className="
                absolute
                inset-0
              "
            >
              {images.map(
                (
                  image,
                  index
                ) => (
                  <img
                    key={`${image}-${index}`}
                    src={image}
                    alt=""
                    aria-hidden={
                      index !==
                      activeIndex
                    }
                    className={`
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-opacity
                      duration-[1400ms]
                      ease-in-out
                      ${
                        index ===
                        activeIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }
                    `}
                  />
                )
              )}
            </div>

            {/* ==================================================
                CINEMATIC OVERLAY
            =================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#07182D]
                via-[#07182D]/60
                to-[#07182D]/10
              "
            />

            {/* Teal overlay */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-[#087F8C]/20
                via-transparent
                to-[#0B1F3A]/55
                mix-blend-multiply
              "
            />

            {/* Gold light */}

            <div
              className="
                pointer-events-none
                absolute
                right-[-15%]
                top-[-20%]
                h-[380px]
                w-[380px]
                rounded-full
                bg-[#C6A15B]/10
                blur-[100px]
              "
            />

            {/* ==================================================
                LARGE NUMBER
            =================================================== */}

            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={activeIndex}
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
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-[-30px]
                  select-none
                  text-[190px]
                  font-semibold
                  leading-none
                  tracking-[-0.12em]
                  text-white/[0.10]
                  sm:right-8
                  sm:text-[250px]
                "
              >
                {String(
                  activeIndex + 1
                ).padStart(
                  2,
                  "0"
                )}
              </motion.div>
            </AnimatePresence>

            {/* ==================================================
                FEATURE CONTENT
            =================================================== */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                z-10
                p-7
                sm:p-10
                lg:p-14
              "
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                <motion.div
                  key={activeIndex}
                  initial={
                    reduceMotion
                      ? {}
                      : {
                          opacity: 0,
                          y: 14,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={
                    reduceMotion
                      ? {}
                      : {
                          opacity: 0,
                          y: -10,
                        }
                  }
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  {/* Label */}

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
                        w-9
                        bg-[#C6A15B]
                      "
                    />

                    <span
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-white/55
                      "
                    >
                      IBS Advantage
                    </span>
                  </div>

                  {/* Icon */}

                  <div
                    className="
                      relative
                      mt-7
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      border
                      border-white/20
                      bg-[#0B1F3A]/75
                      text-[#C6A15B]
                      backdrop-blur-md
                    "
                  >
                    <ActiveIcon
                      size={28}
                      strokeWidth={1.3}
                    />

                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[3px]
                        w-full
                        bg-[#C6A15B]
                      "
                    />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-6
                      max-w-[680px]
                      text-[34px]
                      font-medium
                      leading-[0.95]
                      tracking-[-0.05em]
                      text-white
                      sm:text-[46px]
                      lg:text-[58px]
                    "
                  >
                    {
                      activeBenefit.title
                    }
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-5
                      max-w-[590px]
                      text-[12px]
                      leading-[1.8]
                      text-white/55
                      sm:text-[14px]
                    "
                  >
                    {
                      activeBenefit.text
                    }
                  </p>

                  {/* Bottom */}

                  <div
                    className="
                      mt-7
                      flex
                      items-center
                      justify-between
                      gap-5
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#C6A15B]
                        "
                      />

                      <span
                        className="
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-white/35
                        "
                      >
                        Creating meaningful
                        impact
                      </span>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-[#C6A15B]"
                      strokeWidth={1}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ==================================================
                FRAME
            =================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-5
                border
                border-white/10
                sm:inset-7
              "
            />

            {/* Top-left accent */}

            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                h-[60px]
                w-[60px]
                border-l
                border-t
                border-[#C6A15B]/60
              "
            />

            {/* Bottom-right accent */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                right-0
                h-[60px]
                w-[60px]
                border-b
                border-r
                border-[#087F8C]/60
              "
            />

            {/* Bottom gold line */}

            <div
              className="
                absolute
                bottom-0
                left-0
                z-20
                h-[3px]
                w-[140px]
                bg-[#C6A15B]
              "
            />
          </div>

          {/* ====================================================
              RIGHT BENEFIT NAVIGATION
          ===================================================== */}

          <div
            className="
              flex
              min-h-[540px]
              flex-col
              border-y
              border-[#DCE2E7]
              sm:min-h-[590px]
            "
            onMouseEnter={() =>
              setIsInteracting(true)
            }
            onMouseLeave={() =>
              setIsInteracting(false)
            }
          >
            {benefits.map(
              (
                item,
                index
              ) => {
                const Icon =
                  iconMap[
                    item.icon
                  ] ||
                  ShieldCheck;

                const accent =
                  accents[
                    index %
                      accents.length
                  ];

                const active =
                  index ===
                  activeIndex;

                return (
                  <button
                    key={
                      item.title
                    }
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        index
                      )
                    }
                    className={`
                      group
                      relative
                      flex
                      min-h-0
                      flex-1
                      items-center
                      gap-4
                      border-b
                      border-[#DCE2E7]
                      px-5
                      py-4
                      text-left
                      outline-none
                      transition-colors
                      duration-300
                      last:border-b-0
                      sm:px-6
                      lg:px-7
                      ${
                        active
                          ? "bg-white"
                          : "bg-transparent hover:bg-white/70"
                      }
                    `}
                  >
                    {/* Active indicator */}

                    <span
                      className={`
                        absolute
                        bottom-0
                        left-0
                        top-0
                        w-[3px]
                        origin-center
                        transition-transform
                        duration-300
                        ${
                          active
                            ? "scale-y-100"
                            : "scale-y-0"
                        }
                      `}
                      style={{
                        backgroundColor:
                          accent,
                      }}
                    />

                    {/* Number */}

                    <span
                      className={`
                        w-6
                        shrink-0
                        text-[9px]
                        font-semibold
                        tracking-[0.12em]
                        ${
                          active
                            ? "text-[#0B1F3A]"
                            : "text-[#202832]/25"
                        }
                      `}
                    >
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    {/* Icon */}

                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        ${
                          active
                            ? "bg-[#0B1F3A]"
                            : "bg-[#DCE2E7]/50 group-hover:bg-white"
                        }
                      `}
                      style={{
                        color: active
                          ? accent
                          : "#0B1F3A",
                      }}
                    >
                      <Icon
                        size={19}
                        strokeWidth={
                          active
                            ? 1.5
                            : 1
                        }
                      />
                    </div>

                    {/* Text */}

                    <div
                      className="
                        min-w-0
                        flex-1
                      "
                    >
                      <span
                        className={`
                          block
                          text-[12px]
                          font-medium
                          leading-[1.25]
                          tracking-[-0.015em]
                          transition-colors
                          duration-300
                          sm:text-[14px]
                          ${
                            active
                              ? "text-[#0B1F3A]"
                              : "text-[#202832]/55"
                          }
                        `}
                      >
                        {
                          item.title
                        }
                      </span>

                      {/* Active description */}

                      <AnimatePresence
                        initial={false}
                      >
                        {active && (
                          <motion.p
                            initial={{
                              opacity: 0,
                              height: 0,
                              marginTop: 0,
                            }}
                            animate={{
                              opacity: 1,
                              height:
                                "auto",
                              marginTop: 7,
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                              marginTop: 0,
                            }}
                            transition={{
                              duration:
                                0.25,
                              ease: "easeOut",
                            }}
                            className="
                              max-w-[360px]
                              overflow-hidden
                              text-[9px]
                              leading-[1.55]
                              text-[#202832]/45
                              sm:text-[10px]
                            "
                          >
                            {
                              item.text
                            }
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Plus */}

                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        border
                        text-[17px]
                        font-light
                        leading-none
                        transition-all
                        duration-300
                        ${
                          active
                            ? "rotate-45 border-[#C6A15B]/50 text-[#087F8C]"
                            : "border-[#DCE2E7] text-[#202832]/20"
                        }
                      `}
                    >
                      +
                    </span>
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* ======================================================
            PROGRESS
        ======================================================= */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            {benefits.map(
              (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      index
                    )
                  }
                  className="
                    relative
                    h-[3px]
                    overflow-hidden
                    bg-[#C7D1D4]
                    outline-none
                    transition-all
                    duration-300
                  "
                  style={{
                    width:
                      index ===
                      activeIndex
                        ? "42px"
                        : "18px",
                  }}
                  aria-label={`Show benefit ${
                    index + 1
                  }`}
                >
                  {index ===
                    activeIndex &&
                    !reduceMotion && (
                      <motion.span
                        initial={{
                          width: "0%",
                        }}
                        animate={{
                          width: "100%",
                        }}
                        transition={{
                          duration: 6.5,
                          ease: "linear",
                        }}
                        className="
                          absolute
                          inset-y-0
                          left-0
                          bg-[#087F8C]
                        "
                      />
                    )}
                </button>
              )
            )}
          </div>

          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#202832]/30
            "
          >
            {String(
              activeIndex + 1
            ).padStart(
              2,
              "0"
            )}{" "}
            /{" "}
            {String(
              benefits.length
            ).padStart(
              2,
              "0"
            )}
          </span>
        </div>

        {/* ======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? {}
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={
            reduceMotion
              ? {}
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-14
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#087F8C]
              "
            >
              Beyond the classroom
            </span>

            <p
              className="
                mt-2
                text-[20px]
                font-medium
                tracking-[-0.04em]
                text-[#0B1F3A]
                sm:text-[26px]
              "
            >
              Knowledge becomes
              <span
                className="
                  text-[#087F8C]
                "
              >
                {" "}
                possibility.
              </span>
            </p>
          </div>

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-12
                bg-[#C6A15B]
              "
            />

            <Sparkles
              size={17}
              className="text-[#C6A15B]"
              strokeWidth={1}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}