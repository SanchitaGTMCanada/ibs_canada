"use client";

import Link from "next/link";

import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Factory,
  ShoppingBag,
  Rocket,
  Cpu,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const industries = [
  {
    id: "technology",
    title: "Technology & SaaS",
    description:
      "Digital products, software businesses and technology-driven organizations.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85",
    className: "lg:col-span-2 lg:row-span-2",
  },

  {
    id: "finance",
    title: "Finance & Advisory",
    description:
      "Financial services, consulting and professional advisory businesses.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    className: "lg:col-span-1",
  },

  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Healthcare providers and organizations focused on better outcomes.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    className: "lg:col-span-1",
  },

  {
    id: "real-estate",
    title: "Real Estate & Construction",
    description:
      "Property, architecture, construction and development businesses.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    className: "lg:col-span-1",
  },

  {
    id: "retail",
    title: "Retail & E-commerce",
    description:
      "Consumer brands, retail businesses and digital commerce platforms.",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
    className: "lg:col-span-1",
  },

  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Industrial businesses focused on operations, production and growth.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=85",
    className: "lg:col-span-1",
  },

  {
    id: "education",
    title: "Education",
    description:
      "Educational institutions, learning platforms and knowledge businesses.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    className: "lg:col-span-1",
  },

  {
    id: "startups",
    title: "Startups & Entrepreneurs",
    description:
      "Ambitious founders and growing businesses building what comes next.",
    icon: Rocket,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    className: "lg:col-span-2",
  },
];

export default function IndustriesSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F4F7F6]
        pb-16
        pt-20
        sm:pb-20
        sm:pt-24
        lg:pb-24
        lg:pt-28
        xl:pb-28
        xl:pt-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Teal ambient glow */}

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-[180px]
            top-[5%]
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#087F8C]/[0.055]
            blur-[110px]
          "
        />

        {/* Gold ambient glow */}

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-[160px]
            bottom-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#C6A15B]/[0.045]
            blur-[110px]
          "
        />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#087F8C_1px,transparent_1px),linear-gradient(90deg,#087F8C_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-12
            flex
            flex-col
            justify-between
            gap-7
            lg:mb-14
            lg:flex-row
            lg:items-end
          "
        >
          {/* LEFT */}

          <div className="max-w-[700px]">
            {/* Eyebrow */}

            <div
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-[3px]
                  w-10
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
                INDUSTRIES WE SERVE
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                text-[45px]
                font-bold
                leading-[0.98]
                tracking-[-0.05em]
                text-[#132D34]
                sm:text-[54px]
                md:text-[62px]
                lg:text-[68px]
              "
            >
              Expertise that moves
              <span
                className="
                  block
                  text-[#087F8C]
                "
              >
                across industries.
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div
            className="
              max-w-[390px]
              lg:pb-1
            "
          >
            <div
              className="
                mb-4
                h-px
                w-14
                bg-[#C6A15B]
              "
            />

            <p
              className="
                text-[14px]
                leading-7
                text-[#68797D]
                sm:text-[15px]
              "
            >
              Every industry has different challenges,
              opportunities and ways of working. We
              bring practical expertise and tailored
              solutions to help organizations move
              forward.
            </p>
          </div>
        </motion.div>

        {/* =================================================
            INDUSTRY GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
            lg:auto-rows-[250px]
            xl:auto-rows-[270px]
          "
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.id}
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
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group
                  relative
                  min-h-[300px]
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white
                  bg-[#073F46]
                  shadow-[0_18px_45px_rgba(13,45,51,0.08)]
                  ${industry.className}
                `}
              >
                {/* IMAGE */}

                <img
                  src={industry.image}
                  alt={industry.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[900ms]
                    ease-out
                    group-hover:scale-[1.08]
                  "
                />

                {/* IMAGE COLOR TREATMENT */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-[#063F46]/10
                    mix-blend-multiply
                    transition-opacity
                    duration-500
                    group-hover:opacity-30
                  "
                />

                {/* DARK GRADIENT */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#032F35]
                    via-[#063F46]/65
                    to-transparent
                    opacity-95
                  "
                />

                {/* HOVER LIGHT */}

                <motion.div
                  className="
                    absolute
                    -right-[80px]
                    -top-[80px]
                    h-[220px]
                    w-[220px]
                    rounded-full
                    bg-[#7AD9D6]/20
                    opacity-0
                    blur-[70px]
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* TOP ICON */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-[14px]
                    border
                    border-white/15
                    bg-white/10
                    text-[#CDEDEB]
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:border-[#D7C17A]/50
                    group-hover:bg-[#D7C17A]/15
                    group-hover:text-[#D7C17A]
                  "
                >
                  <Icon
                    size={19}
                    strokeWidth={1.35}
                  />
                </div>

                {/* INDUSTRY NUMBER */}

                <span
                  className="
                    absolute
                    right-5
                    top-5
                    text-[10px]
                    font-semibold
                    tracking-[0.18em]
                    text-white/45
                  "
                >
                  0{index + 1}
                </span>

                {/* CONTENT */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-5
                    sm:p-6
                  "
                >
                  {/* Gold line */}

                  <motion.div
                    initial={{
                      width: 22,
                    }}
                    className="
                      mb-3
                      h-[2px]
                      rounded-full
                      bg-[#D7C17A]
                      transition-all
                      duration-500
                      group-hover:w-14
                    "
                  />

                  <div
                    className="
                      flex
                      items-end
                      justify-between
                      gap-4
                    "
                  >
                    <div>
                      <h3
                        className="
                          text-[20px]
                          font-semibold
                          tracking-[-0.025em]
                          text-white
                          sm:text-[21px]
                        "
                      >
                        {industry.title}
                      </h3>

                      <p
                        className="
                          mt-1.5
                          max-w-[440px]
                          text-[11px]
                          leading-5
                          text-white/60
                          transition-colors
                          duration-300
                          group-hover:text-white/80
                        "
                      >
                        {industry.description}
                      </p>
                    </div>

                    {/* ARROW */}

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        translate-y-2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-white/10
                        text-white
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                        group-hover:border-[#D7C17A]/50
                        group-hover:bg-[#D7C17A]
                        group-hover:text-[#063F46]
                        group-hover:opacity-100
                      "
                    >
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>
                </div>

                {/* PREMIUM BORDER */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[24px]
                    border
                    border-white/0
                    transition-all
                    duration-500
                    group-hover:border-white/20
                  "
                />
              </motion.div>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 0.2,
          }}
          className="
            mt-10
            flex
            flex-col
            items-start
            justify-between
            gap-5
            rounded-[22px]
            border
            border-[#D9E5E3]
            bg-white/70
            px-6
            py-5
            backdrop-blur-md
            sm:flex-row
            sm:items-center
            sm:px-7
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[#E4F1F0]
                text-[#087F8C]
              "
            >
              <Sparkles
                size={16}
                strokeWidth={1.4}
              />
            </div>

            <p
              className="
                text-[12px]
                font-medium
                text-[#53666B]
              "
            >
              Different industries. One commitment
              to meaningful results.
            </p>
          </div>

          <Link
            href="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2.5
              rounded-full
              bg-[#063F46]
              px-5
              py-2.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              !text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#087F8C]
              hover:shadow-[0_12px_25px_rgba(8,127,140,0.18)]
            "
          >
            <span className="!text-white">
              Explore how we help
            </span>

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#D7C17A]
                !text-[#063F46]
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              <ArrowUpRight
                size={13}
                strokeWidth={2}
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}