"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileLock2,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Header from "@/components/layout/Header";

import Footer from "@/components/Footer";


/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};


/* =========================================================
   CONTACT DATA
========================================================= */

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@ibsgroupcanada.com",
    href: "mailto:info@ibsgroupcanada.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 867-669-0242",
    href: "tel:+18676690242",
  },
  {
    icon: Clock3,
    label: "Availability",
    value: "Monday – Friday",
    href: null,
  },
];


const mediaContact = {
  name: "JARED LANE",
  role: "Lawyer",
  direct: "780-482-9170",
  fax: "780-669-7075",
  tollFree: "1-800-567-9200",
  email: "jared.lane@mross.com",
};


const offices = [
  {
    icon: Building2,
    label: "Corporate Headquarters",
    address: [
      "ERP Corporate Building",
      "P.O. Box 20072, 2nd Floor,",
      "4910 – 50th Street, Yellowknife,",
      "NT X1A 3X8",
    ],
  },
  {
    icon: MapPin,
    label: "British Columbia Address",
    address: [
      "208-7238 137 Street",
      "Surrey BC",
      "V3W 1V3",
    ],
  },
];


const socials = [
  {
    label: "Facebook",
    short: "f",
  },
  {
    label: "Instagram",
    short: "ig",
  },
  {
    label: "X",
    short: "X",
  },
  {
    label: "YouTube",
    short: "▶",
  },
  {
    label: "LinkedIn",
    short: "in",
  },
];


/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
  return (
<>
<Header/>
    <main className="overflow-hidden bg-[#F6F4EF] text-[#202832]">


      {/* =====================================================
          HERO
      ===================================================== */}
<section
  className="
    relative
    overflow-hidden
    bg-[#0B1F3A]
    px-6
    pb-16
    pt-36
    sm:px-8
    sm:pt-40
    lg:px-10
    lg:pb-20
    lg:pt-44
    xl:px-12
  "
>

        {/* Background image */}

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90"
            alt=""
            aria-hidden="true"
            className="
              h-full
              w-full
              object-cover
              opacity-20
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#0B1F3A]
              via-[#0B1F3A]/95
              to-[#123A5A]/75
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#0B1F3A]
              via-transparent
              to-transparent
            "
          />

        </div>


        {/* Decorative circles */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[520px]
            w-[520px]
            rounded-full
            border
            border-[#C6A15B]/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-[350px]
            w-[350px]
            rounded-full
            border
            border-[#087F8C]/20
          "
        />


        {/* Hero content */}

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-[1280px]
            gap-12
            lg:grid-cols-[1fr_0.85fr]
            lg:items-center
          "
        >

          {/* Left */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-[650px]"
          >

            <motion.div
              variants={fadeUp}
              className="
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  h-[2px]
                  w-12
                  bg-[#C6A15B]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-[#C6A15B]
                "
              >
                Get In Touch
              </span>

            </motion.div>


            <motion.h1
              variants={fadeUp}
              className="
                mt-6
                text-[46px]
                font-semibold
                leading-[0.95]
                tracking-[-0.055em]
                text-white
                sm:text-[62px]
                lg:text-[76px]
              "
            >
              Let&apos;s start a

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#C6A15B]
                  via-[#D8B866]
                  to-[#087F8C]
                  bg-clip-text
                  text-transparent
                "
              >
                conversation.
              </span>

            </motion.h1>


            <motion.p
              variants={fadeUp}
              className="
                mt-7
                max-w-[540px]
                text-[13px]
                leading-7
                text-[#DCE2E7]
              "
            >
              Whether you have a business inquiry, partnership
              opportunity or simply want to learn more about
              Innovative Business Solutions, our team is here
              to help.
            </motion.p>


            {/* Quick contact */}

            <motion.div
              variants={fadeUp}
              className="
                mt-9
                flex
                flex-wrap
                gap-3
              "
            >

              <a
                href="tel:+18676690242"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#C6A15B]
                  px-5
                  py-3
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#0B1F3A]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                "
              >

                <Phone size={14} />

                +1 867-669-0242

              </a>


              <a
                href="mailto:info@ibsgroupcanada.com"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.06]
                  px-5
                  py-3
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#087F8C]
                  hover:bg-[#087F8C]
                "
              >

                <Mail size={14} />

                Email Us

              </a>

            </motion.div>

          </motion.div>


          {/* Right visual */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[500px]
            "
          >

            {/* Main image */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/15
                bg-[#123A5A]
                p-2
                shadow-[0_30px_80px_rgba(0,0,0,.30)]
              "
            >

              <div
                className="
                  relative
                  h-[330px]
                  overflow-hidden
                  rounded-[24px]
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90"
                  alt="Business professionals discussing a project"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0B1F3A]/80
                    via-transparent
                    to-transparent
                  "
                />


                {/* Floating card */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    rounded-2xl
                    border
                    border-white/15
                    bg-[#0B1F3A]/90
                    p-5
                    backdrop-blur-md
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#C6A15B]
                        text-[#0B1F3A]
                      "
                    >
                      <MessageSquare
                        size={20}
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>

                      <p
                        className="
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#C6A15B]
                        "
                      >
                        We&apos;re here to help
                      </p>

                      <p
                        className="
                          mt-1
                          text-[12px]
                          text-white
                        "
                      >
                        Tell us what you&apos;re working on.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* Gold corner */}

            <div
              className="
                absolute
                -bottom-4
                -left-4
                h-24
                w-24
                bg-[#C6A15B]
              "
              style={{
                clipPath:
                  "polygon(0 100%, 0 0, 100% 100%)",
              }}
            />

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM + INFORMATION
      ===================================================== */}

      <section
        className="
          relative
          bg-[#F6F4EF]
          px-6
          py-20
          sm:px-8
          lg:px-10
          lg:py-28
          xl:px-12
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1280px]
            gap-10
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >

          {/* =================================================
              FORM
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-[#DCE2E7]
              bg-white
              p-7
              shadow-[0_25px_70px_rgba(11,31,58,.08)]
              sm:p-9
              lg:p-11
            "
          >

            {/* Decorative fold */}

            <div
              className="
                absolute
                right-0
                top-0
                h-[110px]
                w-[110px]
                bg-[#DCE2E7]
              "
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%)",
              }}
            />

            <div
              className="
                absolute
                right-0
                top-0
                h-[84px]
                w-[84px]
                bg-[#087F8C]
              "
              style={{
                clipPath:
                  "polygon(0 0, 100% 100%, 0 100%)",
              }}
            />

            <div
              className="
                absolute
                right-5
                top-5
                h-[2px]
                w-10
                rotate-45
                bg-[#C6A15B]
              "
            />


            <motion.div variants={fadeUp}>

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#E8F3F2]
                    text-[#087F8C]
                  "
                >
                  <Send
                    size={17}
                    strokeWidth={1.5}
                  />
                </span>

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#087F8C]
                  "
                >
                  Send an Inquiry
                </span>

              </div>


              <h2
                className="
                  mt-5
                  text-[34px]
                  font-semibold
                  leading-none
                  tracking-[-0.045em]
                  text-[#0B1F3A]
                  sm:text-[42px]
                "
              >
                How can we
                <span className="block text-[#087F8C]">
                  help you?
                </span>
              </h2>


              <p
                className="
                  mt-4
                  max-w-[480px]
                  text-[12px]
                  leading-6
                  text-[#68737D]
                "
              >
                Complete the form below and a member of our
                team will get back to you.
              </p>

            </motion.div>


            {/* Form */}

            <motion.form
              variants={fadeUp}
              className="
                relative
                z-10
                mt-8
                grid
                gap-5
              "
            >

              <div
                className="
                  grid
                  gap-5
                  sm:grid-cols-2
                "
              >

                <div>

                  <label
                    className="
                      mb-2
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#202832]
                    "
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#DCE2E7]
                      bg-[#F6F4EF]
                      px-4
                      text-[12px]
                      text-[#202832]
                      outline-none
                      transition-all
                      placeholder:text-[#9BA5AB]
                      focus:border-[#087F8C]
                      focus:ring-2
                      focus:ring-[#087F8C]/10
                    "
                  />

                </div>


                <div>

                  <label
                    className="
                      mb-2
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#202832]
                    "
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#DCE2E7]
                      bg-[#F6F4EF]
                      px-4
                      text-[12px]
                      text-[#202832]
                      outline-none
                      transition-all
                      placeholder:text-[#9BA5AB]
                      focus:border-[#087F8C]
                      focus:ring-2
                      focus:ring-[#087F8C]/10
                    "
                  />

                </div>

              </div>


              <div>

                <label
                  className="
                    mb-2
                    block
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#202832]
                  "
                >
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+1"
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-[#DCE2E7]
                    bg-[#F6F4EF]
                    px-4
                    text-[12px]
                    text-[#202832]
                    outline-none
                    transition-all
                    placeholder:text-[#9BA5AB]
                    focus:border-[#087F8C]
                    focus:ring-2
                    focus:ring-[#087F8C]/10
                  "
                />

              </div>


              <div>

                <label
                  className="
                    mb-2
                    block
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#202832]
                  "
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-[#DCE2E7]
                    bg-[#F6F4EF]
                    px-4
                    text-[12px]
                    text-[#202832]
                    outline-none
                    transition-all
                    placeholder:text-[#9BA5AB]
                    focus:border-[#087F8C]
                    focus:ring-2
                    focus:ring-[#087F8C]/10
                  "
                />

              </div>


              <div>

                <label
                  className="
                    mb-2
                    block
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#202832]
                  "
                >
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us a little about your inquiry..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[#DCE2E7]
                    bg-[#F6F4EF]
                    px-4
                    py-4
                    text-[12px]
                    leading-6
                    text-[#202832]
                    outline-none
                    transition-all
                    placeholder:text-[#9BA5AB]
                    focus:border-[#087F8C]
                    focus:ring-2
                    focus:ring-[#087F8C]/10
                  "
                />

              </div>


              <button
                type="submit"
                className="
                  group
                  mt-2
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#0B1F3A]
                  px-6
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#087F8C]
                "
              >

                Send Message

                <ArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </button>

            </motion.form>

          </motion.div>


          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
            className="
              flex
              flex-col
              justify-between
              rounded-[30px]
              bg-gradient-to-br
              from-[#0B1F3A]
              via-[#123A5A]
              to-[#087F8C]
              p-8
              text-white
              shadow-[0_25px_70px_rgba(11,31,58,.18)]
              sm:p-10
              lg:p-11
            "
          >

            <div>

              <motion.div
                variants={fadeUp}
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
                    bg-[#C6A15B]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#C6A15B]
                  "
                >
                  Contact Details
                </span>

              </motion.div>


              <motion.h2
                variants={fadeUp}
                className="
                  mt-6
                  text-[35px]
                  font-semibold
                  leading-none
                  tracking-[-0.045em]
                  sm:text-[42px]
                "
              >
                Connect with
                <span
                  className="
                    block
                    text-[#C6A15B]
                  "
                >
                  our team.
                </span>
              </motion.h2>


              <motion.p
                variants={fadeUp}
                className="
                  mt-5
                  max-w-[420px]
                  text-[12px]
                  leading-6
                  text-[#DCE2E7]
                "
              >
                Reach us directly using any of the
                channels below.
              </motion.p>


              {/* Contact details */}

              <div className="mt-9 grid gap-4">

                {contactDetails.map((item) => {

                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.label}
                      variants={fadeUp}
                      href={item.href || undefined}
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.05]
                        p-4
                        transition-all
                        duration-300
                        hover:border-[#C6A15B]/40
                        hover:bg-white/[0.08]
                      "
                    >

                      <span
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#C6A15B]
                          text-[#0B1F3A]
                        "
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.5}
                        />
                      </span>

                      <span>

                        <span
                          className="
                            block
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-[#8FA0AD]
                          "
                        >
                          {item.label}
                        </span>

                        <span
                          className="
                            mt-1
                            block
                            text-[12px]
                            text-white
                          "
                        >
                          {item.value}
                        </span>

                      </span>

                      {item.href && (
                        <ArrowUpRight
                          size={15}
                          className="
                            ml-auto
                            text-[#C6A15B]
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                          "
                        />
                      )}

                    </motion.a>
                  );
                })}

              </div>

            </div>


            {/* Bottom information */}

            <motion.div
              variants={fadeUp}
              className="
                mt-10
                border-t
                border-white/10
                pt-6
              "
            >

              <div className="flex items-start gap-4">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#087F8C]
                  "
                >
                  <Globe2 size={17} />
                </div>

                <div>

                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#C6A15B]
                    "
                  >
                    Serving Canada
                  </p>

                  <p
                    className="
                      mt-2
                      text-[11px]
                      leading-5
                      text-[#DCE2E7]
                    "
                  >
                    Innovative Business Solutions
                    is committed to supporting clients
                    with practical, long-term solutions.
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          MEDIA INQUIRIES
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#DCE2E7]
          px-6
          py-20
          sm:px-8
          lg:px-10
          lg:py-24
          xl:px-12
        "
      >

        {/* Decorative background */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#087F8C]/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            -bottom-40
            h-[450px]
            w-[450px]
            rounded-full
            border
            border-[#C6A15B]/15
          "
        />


        <div
          className="
            relative
            mx-auto
            grid
            max-w-[1280px]
            gap-10
            lg:grid-cols-[1fr_0.8fr]
            lg:items-center
          "
        >

          {/* Left content */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
          >

            <motion.div
              variants={fadeUp}
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
                  bg-[#C6A15B]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#A47C2F]
                "
              >
                Media Inquiries
              </span>

            </motion.div>


            <motion.h2
              variants={fadeUp}
              className="
                mt-5
                max-w-[580px]
                text-[40px]
                font-semibold
                leading-[0.95]
                tracking-[-0.05em]
                text-[#0B1F3A]
                sm:text-[52px]
              "
            >
              Looking for the
              <span
                className="
                  block
                  text-[#087F8C]
                "
              >
                right contact?
              </span>
            </motion.h2>


            <motion.p
              variants={fadeUp}
              className="
                mt-5
                max-w-[570px]
                text-[12px]
                leading-6
                text-[#68737D]
              "
            >
              Below you can find the media contact for
              your specific inquiry. We trust you will
              appreciate these contact details are intended
              only for journalists.
            </motion.p>


            {/* Media person */}

            <motion.div
              variants={fadeUp}
              className="
                mt-8
                rounded-[24px]
                border
                border-[#DCE2E7]
                bg-[#F6F4EF]
                p-6
                shadow-[0_20px_50px_rgba(11,31,58,.07)]
                sm:p-7
              "
            >

              <div className="flex items-start gap-4">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#0B1F3A]
                    text-[#C6A15B]
                  "
                >
                  <UsersRound
                    size={24}
                    strokeWidth={1.3}
                  />
                </div>

                <div>

                  <h3
                    className="
                      text-[20px]
                      font-semibold
                      tracking-[-0.03em]
                      text-[#0B1F3A]
                    "
                  >
                    {mediaContact.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#087F8C]
                    "
                  >
                    {mediaContact.role}
                  </p>

                </div>

              </div>


              <div
                className="
                  mt-6
                  grid
                  gap-3
                  text-[11px]
                  text-[#68737D]
                  sm:grid-cols-2
                "
              >

                <p>
                  <span className="font-semibold text-[#202832]">
                    Direct:
                  </span>{" "}
                  {mediaContact.direct}
                </p>

                <p>
                  <span className="font-semibold text-[#202832]">
                    Fax:
                  </span>{" "}
                  {mediaContact.fax}
                </p>

                <p>
                  <span className="font-semibold text-[#202832]">
                    Toll Free:
                  </span>{" "}
                  {mediaContact.tollFree}
                </p>

                <p>
                  <span className="font-semibold text-[#202832]">
                    Email:
                  </span>{" "}
                  {mediaContact.email}
                </p>

              </div>

            </motion.div>

          </motion.div>


          {/* City visual */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
              duration: 0.7,
            }}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white
              bg-[#0B1F3A]
              p-2
              shadow-[0_30px_70px_rgba(11,31,58,.15)]
            "
          >

            <div
              className="
                relative
                h-[430px]
                overflow-hidden
                rounded-[24px]
              "
            >

              <img
                src="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=90"
                alt="Canadian city skyline"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0B1F3A]/90
                  via-transparent
                  to-transparent
                "
              />


              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                "
              >

                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#C6A15B]
                  "
                >
                  Canada
                </p>

                <h3
                  className="
                    mt-2
                    text-[28px]
                    font-semibold
                    text-white
                  "
                >
                  Local presence.
                  <span className="block text-[#DCE2E7]">
                    National perspective.
                  </span>
                </h3>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          SHAREFILE
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#0B1F3A]
          px-6
          py-20
          text-white
          sm:px-8
          lg:px-10
          lg:py-24
          xl:px-12
        "
      >

        {/* Background geometry */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            h-full
            w-[45%]
            bg-gradient-to-l
            from-[#123A5A]
            to-transparent
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#087F8C]/20
          "
        />


        <div
          className="
            relative
            mx-auto
            max-w-[1280px]
          "
        >

          {/* Intro */}

          <div
            className="
              mx-auto
              max-w-[780px]
              text-center
            "
          >

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
              className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-[24px]
                bg-white
                text-[#087F8C]
                shadow-[0_20px_50px_rgba(0,0,0,.25)]
              "
            >
              <FileLock2
                size={38}
                strokeWidth={1.2}
              />
            </motion.div>


            <p
              className="
                mt-7
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#C6A15B]
              "
            >
              Secure Document Sharing
            </p>


            <h2
              className="
                mt-4
                text-[40px]
                font-semibold
                leading-none
                tracking-[-0.05em]
                sm:text-[52px]
              "
            >
              ShareFile
            </h2>


            <p
              className="
                mx-auto
                mt-5
                max-w-[680px]
                text-[12px]
                leading-6
                text-[#DCE2E7]
              "
            >
              ShareFile is a secure platform used to
              share files between you and Innovative
              Business Solutions.
            </p>

          </div>


          {/* Information cards */}

          <div
            className="
              mx-auto
              mt-12
              grid
              max-w-[1050px]
              gap-4
              md:grid-cols-2
            "
          >

            <div
              className="
                rounded-[24px]
                border
                border-white/10
                bg-white/[0.05]
                p-7
              "
            >

              <div className="flex items-center gap-3">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#087F8C]
                  "
                >
                  <UsersRound size={17} />
                </span>

                <h3
                  className="
                    text-[15px]
                    font-semibold
                  "
                >
                  Are you an IBS Staff?
                </h3>

              </div>


              <p
                className="
                  mt-5
                  text-[11px]
                  leading-6
                  text-[#B9C5CC]
                "
              >
                Please keep your User ID and Password
                handy. Please e-mail your requirement
                to your supervisor who will forward the
                requisition to the in-house ShareFile
                system administrator to get you the
                requested access.
              </p>

            </div>


            <div
              className="
                rounded-[24px]
                border
                border-white/10
                bg-white/[0.05]
                p-7
              "
            >

              <div className="flex items-center gap-3">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#C6A15B]
                    text-[#0B1F3A]
                  "
                >
                  <Handshake size={17} />
                </span>

                <h3
                  className="
                    text-[15px]
                    font-semibold
                  "
                >
                  Are you a Client?
                </h3>

              </div>


              <p
                className="
                  mt-5
                  text-[11px]
                  leading-6
                  text-[#B9C5CC]
                "
              >
                This is hassle-free for you. Please
                contact your File Lead or Manager,
                Operational Support at +1 867-669-0242,
                who will assist you to get access to
                ShareFile.
              </p>

            </div>

          </div>


          {/* What you need to do */}

          <div
            className="
              mx-auto
              mt-5
              max-w-[1050px]
              rounded-[24px]
              border
              border-[#087F8C]/20
              bg-gradient-to-r
              from-[#123A5A]
              to-[#0B1F3A]
              p-7
            "
          >

            <div className="flex items-center gap-3">

              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#087F8C]
                "
              >
                <CheckCircle2 size={17} />
              </span>

              <h3
                className="
                  text-[15px]
                  font-semibold
                "
              >
                What you need to do
              </h3>

            </div>


            <div
              className="
                mt-5
                grid
                gap-3
                text-[11px]
                leading-6
                text-[#B9C5CC]
                sm:grid-cols-2
              "
            >

              <p>
                • You are required to save your document
                in a particular folder of which you have
                been given access to.
              </p>

              <p>
                • You can simply drag and drop or import
                any document to the folder you have been
                given access to.
              </p>

            </div>


            <div className="mt-7">

              <a
                href="#sharefile"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#0B1F3A]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#C6A15B]
                "
              >

                Login to ShareFile

                <ArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OFFICE LOCATIONS
      ===================================================== */}

      <section
        className="
          bg-[#F6F4EF]
          px-6
          py-20
          sm:px-8
          lg:px-10
          lg:py-24
          xl:px-12
        "
      >

        <div className="mx-auto max-w-[1280px]">

          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.8fr_1.2fr]
            "
          >

            {/* Heading */}

            <div>

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
                    bg-[#C6A15B]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#A47C2F]
                  "
                >
                  Our Locations
                </span>

              </div>


              <h2
                className="
                  mt-5
                  text-[42px]
                  font-semibold
                  leading-none
                  tracking-[-0.05em]
                  text-[#0B1F3A]
                  sm:text-[52px]
                "
              >
                Where we
                <span className="block text-[#087F8C]">
                  operate.
                </span>
              </h2>


              <p
                className="
                  mt-5
                  max-w-[400px]
                  text-[12px]
                  leading-6
                  text-[#68737D]
                "
              >
                Connect with our teams across Canada
                through our corporate and regional
                offices.
              </p>

            </div>


            {/* Office cards */}

            <div
              className="
                grid
                gap-5
                sm:grid-cols-2
              "
            >

              {offices.map((office) => {

                const Icon = office.icon;

                return (
                  <div
                    key={office.label}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[26px]
                      border
                      border-[#DCE2E7]
                      bg-white
                      p-7
                      shadow-[0_18px_50px_rgba(11,31,58,.06)]
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-[0_25px_60px_rgba(11,31,58,.10)]
                    "
                  >

                    {/* Fold */}

                    <div
                      className="
                        absolute
                        right-0
                        top-0
                        h-[65px]
                        w-[65px]
                        bg-[#DCE2E7]
                      "
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 100%)",
                      }}
                    />


                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#E8F3F2]
                        text-[#087F8C]
                      "
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.3}
                      />
                    </div>


                    <h3
                      className="
                        mt-6
                        text-[16px]
                        font-semibold
                        text-[#0B1F3A]
                      "
                    >
                      {office.label}
                    </h3>


                    <div
                      className="
                        mt-4
                        h-[2px]
                        w-9
                        bg-[#C6A15B]
                      "
                    />


                    <div
                      className="
                        mt-5
                        space-y-1
                        text-[11px]
                        leading-5
                        text-[#68737D]
                      "
                    >

                      {office.address.map((line) => (
                        <p key={line}>
                          {line}
                        </p>
                      ))}

                    </div>

                  </div>
                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CLOSING CTA
      ===================================================== */}



    </main>
    <Footer/>
</>
  );
}