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

import {

  Files,
  FolderOpen,
  CloudUpload,
  LockKeyhole,
  
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
      "EPR Yellowknife Building",
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
    isolate
    overflow-hidden
    bg-[#FAFBFA]
    px-6
    pb-16
    pt-36
    sm:px-8
    sm:pt-40
    lg:px-10
    lg:pb-20
    lg:pt-44
    xl:px-12
      min-h-[650px] sm:min-h-[650px]  lg:min-h-[650px]
  "
>
  {/* Full background image */}
  <div className="absolute inset-0 -z-20">
    <img
      src="/images/about/about-hero.jpg"
      alt=""
      aria-hidden="true"
      className="h-full w-full object-cover"
    />
  </div>


  <div
    className="
      pointer-events-none
      absolute
      inset-0
      -z-10
      bg-gradient-to-r
      from-white/75
      via-white/35
      to-[#EEF5F8]/15
    "
  />

  {/* Decorative circles */}
  <div
    className="
      pointer-events-none
      absolute
      -right-40
      -top-40
      -z-10
      h-[520px]
      w-[520px]
      rounded-full
      border
      border-[#0B2438]/10
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-20
      -top-20
      -z-10
      h-[350px]
      w-[350px]
      rounded-full
      border
      border-[#2374A8]/20
    "
  />

  {/* Hero content */}
  <div
    className="
      relative
      z-10
      mx-auto
      max-w-[1280px]
    "
  >
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="max-w-[750px]"
    >
      {/* Eyebrow */}
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-3"
      >
    

        <span
          className="
            text-[13px]
            font-bold
            uppercase
            tracking-[0.32em]
            text-[#0B2438]
          "
        >
          Get In Touch
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        variants={fadeUp}
        className="
          mt-6
          text-[46px]
          font-semibold
          leading-[0.98]
          tracking-[-0.055em]
          text-[#0B2438]
          sm:text-[62px]
          lg:text-[76px]
        "
      >
        Let&apos;s discuss
        <span className="block text-[#0B2438]">
          your priorities
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="
  mt-7
  max-w-[700px]
  text-[15px]
  font-bold
  leading-7
  text-[#43515C]
  sm:mt-8
  sm:text-[17px]
  sm:leading-8
  lg:text-[18px]
"
      >
        Tell us what you are working to achieve. Our team will review
        your requirements and connect you with the appropriate IBS
        professional
      </motion.p>

   {/* Quick contact */}
<motion.div
  variants={fadeUp}
  className="mt-9 flex flex-wrap gap-3"
>
  <a
    href="tel:+18676690242"
    className="
      group
      inline-flex
      items-center
      gap-3
      rounded-full
      bg-[#087F8C]
      px-5
      py-3
      text-[14px]
      font-bold
      uppercase
      tracking-[0.12em]
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-[#066D78]
    "
    style={{color:"white"}}
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
      border-[#087F8C]
      bg-[#087F8C]
      px-5
      py-3
      text-[14px]
      font-bold
      uppercase
      tracking-[0.12em]
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#066D78]
      hover:bg-[#066D78]
    "
    style={{color:"white"}}
  >
    <Mail size={14} />
    Email Us
  </a>
</motion.div>
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
          py-10
          sm:px-8
          lg:px-10
          lg:py-18
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
                    text-[14px]
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
                  text-[17px]
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
                      text-[14px]
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
                    text-[14px]
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
                  text-[17px]
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
                            text-[14px]
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
                            text-[14px]
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
                      text-[14px]
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
                      text-[14px]
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
          py-10
          sm:px-8
          lg:px-10
          lg:py-14
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
                  text-[14px]
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
                text-[17px]
                leading-6
                text-[#68737D]
              "
            >Media inquiries should be directed to the designated media contact. Contact details are intended for journalists and media representatives.
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
                      text-[14px]
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
                  text-[14px]
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
                    text-[14px]
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
    bg-[#EEF5F8]
    px-6
    py-10
    text-[#43515C]
    sm:px-8
    lg:px-10
    lg:py-14
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
      from-white/80
      to-transparent
    "
  />

  {/* Decorative background icons */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  <FileLock2
    className="
      absolute
      -left-10
      top-20
      h-36
      w-36
      rotate-[-15deg]
      text-[#0B2438]/[0.07]
      sm:h-48
      sm:w-48
      lg:h-60
      lg:w-60
    "
    strokeWidth={1}
  />

  <ShieldCheck
    className="
      absolute
      right-[8%]
      top-16
      h-28
      w-28
      rotate-[12deg]
      text-[#0B2438]/[0.08]
      sm:h-40
      sm:w-40
      lg:h-52
      lg:w-52
    "
    strokeWidth={1}
  />

  <FolderOpen
    className="
      absolute
      -right-8
      top-[45%]
      h-32
      w-32
      rotate-[-12deg]
      text-[#0B2438]/[0.06]
      sm:h-44
      sm:w-44
      lg:h-56
      lg:w-56
    "
    strokeWidth={1}
  />

  <CloudUpload
    className="
      absolute
      bottom-8
      left-[12%]
      h-28
      w-28
      rotate-[8deg]
      text-[#0B2438]/[0.07]
      sm:h-40
      sm:w-40
      lg:h-48
      lg:w-48
    "
    strokeWidth={1}
  />

  <Files
    className="
      absolute
      bottom-10
      right-[28%]
      hidden
      h-32
      w-32
      rotate-[-8deg]
      text-[#0B2438]/[0.06]
      md:block
      lg:h-44
      lg:w-44
    "
    strokeWidth={1}
  />
</div>

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
      border-[#087F8C]/15
    "
  />

  <div className="relative mx-auto max-w-[1280px]">
    {/* Intro */}
    <div className="mx-auto max-w-[820px] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
          shadow-[0_12px_35px_rgba(11,36,56,0.10)]
        "
      >
        <FileLock2 size={42} strokeWidth={1.5} />
      </motion.div>

      <p
        className="
          mt-7
          text-[11px]
          font-bold
          uppercase
          tracking-[0.3em]
          text-[#087F8C]
          sm:text-[12px]
        "
      >
        Client File Sharing
      </p>

      <h2
        className="
          mt-4
          text-[44px]
          font-semibold
          leading-tight
          tracking-[-0.04em]
          text-[#0B2438]
          sm:text-[54px]
          lg:text-[60px]
        "
      >
        ShareFile
      </h2>

      <p
        className="
          mx-auto
          mt-5
          max-w-[700px]
          text-[15px]
          font-medium
          leading-7
          text-[#43515C]
          sm:text-[17px]
          sm:leading-8
          lg:text-[18px]
        "
      >
        IBS provides secure file-sharing access for staff and clients through its designated platform. Access should be requested through the appropriate IBS file lead, manager or internal administrator.
      </p>
    </div>

    {/* Information cards */}
    <div
      className="
        mx-auto
        mt-14
        grid
        max-w-[1050px]
        gap-6
        md:grid-cols-2
      "
    >
      {/* Staff card */}
      <div
        className="
          rounded-[24px]
          border
          border-[#D7E5EC]
          bg-white
          p-7
          shadow-[0_10px_35px_rgba(11,36,56,0.05)]
          sm:p-9
        "
      >
        <div className="flex items-center gap-4">
          <span
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#E0F1F3]
              text-[#087F8C]
            "
          >
            <UsersRound size={22} />
          </span>

          <h3
            className="
              text-[19px]
              font-semibold
              leading-snug
              text-[#0B2438]
              sm:text-[21px]
            "
          >
            Are you an IBS Staff?
          </h3>
        </div>

        <p
          className="
            mt-6
            text-[14px]
            leading-7
            text-[#43515C]
            sm:text-[16px]
            sm:leading-8
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

      {/* Client card */}
      <div
        className="
          rounded-[24px]
          border
          border-[#D7E5EC]
          bg-white
          p-7
          shadow-[0_10px_35px_rgba(11,36,56,0.05)]
          sm:p-9
        "
      >
        <div className="flex items-center gap-4">
          <span
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#E0F1F3]
              text-[#087F8C]
            "
          >
            <Handshake size={22} />
          </span>

          <h3
            className="
              text-[19px]
              font-semibold
              leading-snug
              text-[#0B2438]
              sm:text-[21px]
            "
          >
            Are you a Client?
          </h3>
        </div>

        <p
          className="
            mt-6
            text-[14px]
            leading-7
            text-[#43515C]
            sm:text-[16px]
            sm:leading-8
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
        mt-6
        max-w-[1050px]
        rounded-[24px]
        border
        border-[#CFE2E9]
        bg-white
        p-7
        shadow-[0_10px_35px_rgba(11,36,56,0.05)]
        sm:p-9
      "
    >
      <div className="flex items-center gap-4">
        <span
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-[#E0F1F3]
            text-[#087F8C]
          "
        >
          <CheckCircle2 size={22} />
        </span>

        <h3
          className="
            text-[19px]
            font-semibold
            text-[#0B2438]
            sm:text-[22px]
          "
        >
          What you need to do
        </h3>
      </div>

      <div
        className="
          mt-6
          grid
          gap-5
          text-[14px]
          leading-7
          text-[#43515C]
          sm:grid-cols-2
          sm:text-[16px]
          sm:leading-8
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

      <div className="mt-8">
        <a
          href="#sharefile"
          className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[#087F8C]
            px-7
            py-4
            text-[11px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#066D78]
            sm:text-[12px]
          "
          style={{color: 'white'}}
        >
          Login to ShareFile

          <ArrowUpRight
            size={17}
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
          py-10
          sm:px-8
          lg:px-10
          lg:py-14
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
                    text-[14px]
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
                  text-[17px]
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
        isolate
        overflow-hidden
        rounded-[22px]
        border
        border-[#D7E5EC]
        bg-gradient-to-br
        from-white
        to-[#EEF5F8]
        p-5
        shadow-[0_8px_25px_rgba(11,36,56,0.05)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#087F8C]/40
        hover:shadow-[0_16px_35px_rgba(11,36,56,0.10)]
        sm:p-6
      "
    >
      {/* Decorative corner */}
      <div
        className="
          pointer-events-none
          absolute
          -right-8
          -top-8
          -z-10
          h-24
          w-24
          rounded-full
          bg-[#E0F1F3]
          transition-transform
          duration-500
          group-hover:scale-125
        "
      />

      {/* Icon */}
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-[14px]
          bg-[#E0F1F3]
          text-[#087F8C]
          transition-all
          duration-300
          group-hover:bg-[#087F8C]
          group-hover:text-white
        "
      >
        <Icon size={21} strokeWidth={1.6} />
      </div>

      {/* Office name */}
      <h3
        className="
          mt-4
          text-[17px]
          font-bold
          leading-snug
          text-[#0B2438]
          transition-colors
          duration-300
          group-hover:text-[#087F8C]
          sm:text-[18px]
        "
      >
        {office.label}
      </h3>

      {/* Accent */}
      <div
        className="
          mt-3
          h-[3px]
          w-9
          rounded-full
          bg-[#087F8C]
          transition-all
          duration-300
          group-hover:w-14
        "
      />

      {/* Address */}
      <div
        className="
          mt-4
          space-y-1
          text-[12px]
          leading-5
          text-[#43515C]
          sm:text-[13px]
        "
      >
        {office.address.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      {/* Bottom hover accent */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[3px]
          w-0
          bg-[#087F8C]
          transition-all
          duration-300
          group-hover:w-full
        "
      />
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