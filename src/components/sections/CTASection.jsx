"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Handshake,
  LockKeyhole,
  Puzzle,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("CTA Form:", formData);
  };

  const benefits = [
    {
      number: "01",
      icon: UsersRound,
      title: "Practical expertise",
      text: "Real-world experience that delivers meaningful results.",
    },
    {
      number: "02",
      icon: Puzzle,
      title: "Tailored solutions",
      text: "Approaches designed around your goals and challenges.",
    },
    {
      number: "03",
      icon: Handshake,
      title: "Long-term partnership",
      text: "Relationships built on trust, collaboration and impact.",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        pb-0
        pt-20
        sm:pt-24
        lg:pt-28
        xl:pt-32
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="
            absolute
            left-[5%]
            top-[12%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#087F8C]/[0.025]
            blur-[110px]
          "
        />

        <motion.span
          animate={{
            y: [0, -6, 0],
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[8%]
            top-[12%]
            h-3
            w-3
            rounded-full
            bg-[#C6A15B]
          "
        />

        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[13%]
            top-[21%]
            h-2
            w-2
            rounded-full
            bg-[#087F8C]/50
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        <div
          className="
            grid
            gap-14
            lg:grid-cols-[0.92fr_1.08fr]
            lg:items-start
            lg:gap-16
            xl:gap-24
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-30
              max-w-[650px]
              pt-3
              lg:pt-8
            "
          >
            {/* EYEBROW */}

            <div
              className="
                mb-6
                flex
                items-center
                gap-4
              "
            >
              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 48,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="
                  h-[3px]
                  rounded-full
                  bg-[#C6A15B]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#087F8C]
                "
              >
                YOUR NEXT MOVE STARTS HERE
              </span>
            </div>

            {/* HEADING */}

            <h2
              className="
                max-w-[650px]
                text-[52px]
                font-bold
                leading-[0.94]
                tracking-[-0.055em]
                text-[#142133]

                sm:text-[64px]

                md:text-[72px]

                lg:text-[76px]

                xl:text-[88px]
              "
            >
              <motion.span
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.65,
                }}
                className="block"
              >
                Let&apos;s build
              </motion.span>

              <motion.span
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.1,
                }}
                className="
                  block
                  text-[#087F8C]
                "
              >
                what&apos;s next
                <span className="text-[#C6A15B]">.</span>
              </motion.span>
            </h2>

            {/* GOLD LINE */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 72,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="
                mt-7
                h-[4px]
                rounded-full
                bg-[#C6A15B]
              "
            />

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="
                mt-7
                max-w-[520px]
                text-[16px]
                leading-7
                text-[#627286]

                sm:text-[17px]
                sm:leading-8
              "
            >
              Turn ideas into practical solutions and meaningful outcomes.
            </motion.p>

            {/* =================================================
                BENEFITS
            ================================================= */}

            <div
              className="
                mt-10
                space-y-5
              "
            >
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.35 + index * 0.12,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      sm:gap-5
                    "
                  >
                    {/* ICON */}

                    <motion.div
                      whileHover={{
                        y: -4,
                        scale: 1.06,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#E5E9EA]
                        bg-white
                        text-[#087F8C]
                        shadow-[0_8px_25px_rgba(20,33,51,0.07)]
                        transition-all
                        duration-300

                        group-hover:border-[#087F8C]/30
                        group-hover:shadow-[0_12px_30px_rgba(8,127,140,0.12)]
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                      />
                    </motion.div>

                    {/* NUMBER */}

                    <div
                      className="
                        flex
                        min-w-[42px]
                        items-center
                        justify-center
                        border-l
                        border-[#C6A15B]
                        pl-4
                      "
                    >
                      <span
                        className="
                          text-[27px]
                          font-light
                          tracking-[-0.04em]
                          text-[#C6A15B]
                        "
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* TEXT */}

                    <div>
                      <p
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-[#142133]
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-1
                          max-w-[390px]
                          text-[12px]
                          leading-5
                          text-[#718092]
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* =================================================
              FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-[100]
              lg:-mt-4
            "
          >
            {/* FORM GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                -inset-4
                rounded-[34px]
                bg-[#087F8C]/[0.055]
                blur-2xl
              "
            />

            {/* FORM CARD */}

            <div
              className="
                relative
                z-[110]
                overflow-hidden
                rounded-[28px]
                border
                border-[#E1E5E7]
                bg-white
                p-6
                shadow-[0_25px_70px_rgba(20,33,51,0.13)]

                sm:p-8

                lg:p-9

                xl:p-10
              "
            >
              {/* TOP ACCENT */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-[4px]
                  bg-gradient-to-r
                  from-[#087F8C]
                  via-[#C6A15B]
                  to-[#087F8C]
                "
              />

              {/* FORM HEADER */}

              <div
                className="
                  mb-7
                  flex
                  items-start
                  justify-between
                  gap-5
                "
              >
                <div>
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#087F8C]
                    "
                  >
                    LET&apos;S TALK
                  </p>

                  <h3
                    className="
                      mt-2
                      text-[28px]
                      font-bold
                      leading-tight
                      tracking-[-0.04em]
                      text-[#142133]

                      sm:text-[32px]
                    "
                  >
                    Start a conversation.
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[400px]
                      text-[12px]
                      leading-6
                      text-[#7B8793]
                    "
                  >
                    Share a few details and we&apos;ll get back to you.
                  </p>
                </div>

                {/* FLOATING ICON */}

                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#087F8C]/15
                    bg-[#E5F4F5]
                    text-[#087F8C]
                  "
                >
                  <ArrowUpRight
                    size={21}
                    strokeWidth={1.6}
                  />
                </motion.div>
              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* NAME */}

                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#53616F]
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    placeholder="Your name"
                    required
                    className={`
                      h-[53px]
                      w-full
                      rounded-[11px]
                      border
                      bg-[#FCFCFB]
                      px-4
                      text-[14px]
                      text-[#142133]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#A2ACB4]

                      ${
                        focused === "name"
                          ? "border-[#087F8C] bg-white shadow-[0_0_0_4px_rgba(8,127,140,0.07)]"
                          : "border-[#E1E5E7]"
                      }
                    `}
                  />
                </div>

                {/* PHONE */}

                <div>
                  <label
                    htmlFor="phone"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#53616F]
                    "
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused("")}
                    placeholder="+1 000 000 0000"
                    required
                    className={`
                      h-[53px]
                      w-full
                      rounded-[11px]
                      border
                      bg-[#FCFCFB]
                      px-4
                      text-[14px]
                      text-[#142133]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#A2ACB4]

                      ${
                        focused === "phone"
                          ? "border-[#087F8C] bg-white shadow-[0_0_0_4px_rgba(8,127,140,0.07)]"
                          : "border-[#E1E5E7]"
                      }
                    `}
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#53616F]
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    placeholder="you@example.com"
                    required
                    className={`
                      h-[53px]
                      w-full
                      rounded-[11px]
                      border
                      bg-[#FCFCFB]
                      px-4
                      text-[14px]
                      text-[#142133]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#A2ACB4]

                      ${
                        focused === "email"
                          ? "border-[#087F8C] bg-white shadow-[0_0_0_4px_rgba(8,127,140,0.07)]"
                          : "border-[#E1E5E7]"
                      }
                    `}
                  />
                </div>

                {/* COMMENT */}

                <div>
                  <label
                    htmlFor="comment"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#53616F]
                    "
                  >
                    Comment
                  </label>

                  <textarea
                    id="comment"
                    name="comment"
                    rows={4}
                    value={formData.comment}
                    onChange={handleChange}
                    onFocus={() => setFocused("comment")}
                    onBlur={() => setFocused("")}
                    placeholder="Tell us a little about your project..."
                    required
                    className={`
                      min-h-[115px]
                      w-full
                      resize-none
                      rounded-[11px]
                      border
                      bg-[#FCFCFB]
                      px-4
                      py-3.5
                      text-[14px]
                      leading-6
                      text-[#142133]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#A2ACB4]

                      ${
                        focused === "comment"
                          ? "border-[#087F8C] bg-white shadow-[0_0_0_4px_rgba(8,127,140,0.07)]"
                          : "border-[#E1E5E7]"
                      }
                    `}
                  />
                </div>

                {/* SUBMIT */}

                <motion.button
                  type="submit"
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    relative
                    flex
                    h-[56px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-[11px]
                    bg-[#087F8C]
                    px-6
                    font-semibold
                    !text-white
                    shadow-[0_15px_30px_rgba(8,127,140,0.18)]
                    transition-all
                    duration-300
                    hover:bg-[#0B1F3A]
                  "
                >
                  {/* BUTTON SHINE */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      -left-[100%]
                      top-0
                      h-full
                      w-[60%]
                      skew-x-[-20deg]
                      bg-white/10
                      transition-all
                      duration-700
                      group-hover:left-[120%]
                    "
                  />

                  <span
                    className="
                      relative
                      z-10
                      !text-white
                    "
                  >
                    Let&apos;s Talk
                  </span>

                  <span
                    className="
                      relative
                      z-10
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C6A15B]
                      !text-[#0B1F3A]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowUpRight
                      size={16}
                      strokeWidth={2}
                    />
                  </span>
                </motion.button>

                {/* PRIVACY */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    pt-1
                  "
                >
                  <LockKeyhole
                    size={13}
                    strokeWidth={1.5}
                    className="text-[#087F8C]"
                  />

                  <span
                    className="
                      text-[10px]
                      text-[#8A949A]
                    "
                  >
                    Your information is safe with us.
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE WAVY LOWER TRANSITION

          MOBILE:
          - Separate softer geometry
          - Shallower wave
          - Less aggressive curve

          DESKTOP:
          - Larger premium wave
          - Multiple contour lines

          Z-INDEX:
          Form card  = 110
          Form        = 100
          Wave        = 30
      ===================================================== */}

      <div
        className="
          relative
          z-30
          mt-[-45px]
          h-[260px]
          w-full

          sm:mt-[-65px]
          sm:h-[300px]

          md:mt-[-90px]
          md:h-[350px]

          lg:mt-[-135px]
          lg:h-[450px]

          xl:mt-[-155px]
          xl:h-[480px]
        "
      >
        {/* =================================================
            MOBILE TEAL WAVE
        ================================================= */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[230px]
            sm:h-[265px]
            md:hidden
          "
        >
          <svg
            viewBox="0 0 390 260"
            preserveAspectRatio="none"
            className="
              absolute
              inset-0
              h-full
              w-full
            "
          >
            <path
              d="
                M0 92
                C65 135 120 145 190 110
                C255 78 315 92 390 130
                L390 260
                L0 260
                Z
              "
              fill="#087F8C"
            />
          </svg>
        </div>

        {/* =================================================
            MOBILE NAVY WAVE
        ================================================= */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[155px]
            sm:h-[175px]
            md:hidden
          "
        >
          <svg
            viewBox="0 0 390 220"
            preserveAspectRatio="none"
            className="
              absolute
              inset-0
              h-full
              w-full
            "
          >
            <path
              d="
                M0 95
                C70 130 125 138 195 108
                C260 80 320 95 390 135
                L390 220
                L0 220
                Z
              "
              fill="#0B1F3A"
            />
          </svg>
        </div>

        {/* =================================================
            MOBILE GOLD CONTOUR
        ================================================= */}

        <svg
          viewBox="0 0 390 260"
          preserveAspectRatio="none"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-20
            h-[230px]
            w-full
            sm:h-[265px]
            md:hidden
          "
        >
          <path
            d="
              M0 83
              C65 126 120 137 190 102
              C255 70 315 84 390 123
            "
            fill="none"
            stroke="#C6A15B"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* =================================================
            MOBILE TEAL CONTOUR
        ================================================= */}

        <svg
          viewBox="0 0 390 260"
          preserveAspectRatio="none"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-20
            h-[230px]
            w-full
            sm:h-[265px]
            md:hidden
          "
        >
          <path
            d="
              M0 105
              C65 148 120 157 190 122
              C255 90 315 105 390 143
            "
            fill="none"
            stroke="#62C3C9"
            strokeOpacity="0.38"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* =================================================
            MOBILE GOLD DOT
        ================================================= */}

        <motion.span
          animate={{
            y: [0, -5, 0],
            opacity: [0.45, 0.9, 0.45],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            bottom-[85px]
            left-[18%]
            z-30
            h-2
            w-2
            rounded-full
            bg-[#C6A15B]
            md:hidden
          "
        />

        {/* =================================================
            MOBILE TEAL DOT
        ================================================= */}

        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            bottom-[105px]
            right-[18%]
            z-30
            h-2
            w-2
            rounded-full
            bg-[#62C3C9]
            md:hidden
          "
        />

        {/* =================================================
            DESKTOP TEAL WAVE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-x-0
            bottom-0
            hidden
            h-[310px]
            md:block
            lg:h-[360px]
            xl:h-[385px]
          "
        >
          <svg
            viewBox="0 0 1440 420"
            preserveAspectRatio="none"
            className="
              absolute
              bottom-0
              left-0
              h-full
              w-full
            "
          >
            <path
              d="
                M0 145
                C180 300 350 330 540 240
                C720 155 835 135 1010 225
                C1180 315 1300 300 1440 175
                L1440 420
                L0 420
                Z
              "
              fill="#087F8C"
            />
          </svg>
        </motion.div>

        {/* =================================================
            DESKTOP NAVY WAVE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 1.1,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-x-0
            bottom-0
            hidden
            h-[220px]
            md:block
            lg:h-[260px]
            xl:h-[280px]
          "
        >
          <svg
            viewBox="0 0 1440 300"
            preserveAspectRatio="none"
            className="
              absolute
              bottom-0
              left-0
              h-full
              w-full
            "
          >
            <path
              d="
                M0 130
                C190 235 365 250 550 175
                C760 90 895 110 1060 180
                C1215 245 1325 230 1440 115
                L1440 300
                L0 300
                Z
              "
              fill="#0B1F3A"
            />
          </svg>
        </motion.div>

        {/* =================================================
            DESKTOP PRIMARY GOLD CONTOUR
        ================================================= */}

        <motion.svg
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.45,
          }}
          viewBox="0 0 1440 420"
          preserveAspectRatio="none"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-20
            hidden
            h-full
            w-full
            md:block
          "
        >
          <path
            d="
              M0 165
              C180 310 350 345 540 255
              C730 175 850 155 1020 245
              C1180 325 1300 315 1440 190
            "
            fill="none"
            stroke="#C6A15B"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </motion.svg>

        {/* =================================================
            DESKTOP SECOND GOLD CONTOUR
        ================================================= */}

        <motion.svg
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.65,
          }}
          viewBox="0 0 1440 420"
          preserveAspectRatio="none"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-20
            hidden
            h-full
            w-full
            md:block
          "
        >
          <path
            d="
              M0 255
              C220 365 390 380 580 300
              C760 225 900 225 1060 300
              C1220 375 1330 365 1440 255
            "
            fill="none"
            stroke="#C6A15B"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
        </motion.svg>

        {/* =================================================
            DESKTOP TEAL CONTOUR
        ================================================= */}

        <svg
          viewBox="0 0 1440 420"
          preserveAspectRatio="none"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-20
            hidden
            h-full
            w-full
            md:block
          "
        >
          <path
            d="
              M0 185
              C170 320 350 340 535 250
              C720 165 845 150 1010 240
              C1180 330 1300 315 1440 205
            "
            fill="none"
            stroke="#62C3C9"
            strokeOpacity="0.35"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* =================================================
            DESKTOP LEFT GOLD DOT PATTERN
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[65px]
            left-[5%]
            z-30
            hidden
            h-[90px]
            w-[135px]
            opacity-50
            [background-image:radial-gradient(#C6A15B_1.1px,transparent_1.1px)]
            [background-size:14px_14px]
            sm:block
          "
        />

        {/* =================================================
            DESKTOP RIGHT GOLD DOT PATTERN
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[50px]
            right-[5%]
            z-30
            hidden
            h-[100px]
            w-[150px]
            opacity-50
            [background-image:radial-gradient(#C6A15B_1.1px,transparent_1.1px)]
            [background-size:14px_14px]
            sm:block
          "
        />

        {/* =================================================
            DESKTOP FLOATING GOLD DOT
        ================================================= */}

        <motion.span
          animate={{
            y: [0, -7, 0],
            opacity: [0.55, 1, 0.55],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            bottom-[125px]
            left-[49%]
            z-40
            hidden
            h-3
            w-3
            rounded-full
            bg-[#C6A15B]
            shadow-[0_0_20px_rgba(198,161,91,0.35)]
            md:block
          "
        />
      </div>

      {/* =====================================================
          SMALL ROTATING DETAIL
      ===================================================== */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[55px]
          left-[48%]
          z-40
          hidden
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-dashed
          border-[#C6A15B]/45
          lg:flex
        "
      >
        <Sparkles
          size={14}
          className="text-[#C6A15B]"
        />
      </motion.div>
    </section>
  );
}