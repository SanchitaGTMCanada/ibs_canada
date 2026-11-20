"use client";

import Footer from "@/components/Footer";
import Header from "@/components/layout/Header";
import { useState } from "react";

const services = [
  {
    number: "01",
    category: "CORE",
    title: "Essential Managed Security Operations",
    tagline: "Establish a Strong Cybersecurity Foundation.",
    description:
      "Designed for organizations seeking continuous threat monitoring and professional security operations support.",
    features: [
      "24/7 Managed Detection and Response.",
      "Cyber Resilience Assessment.",
      "Concierge security expertise and guidance.",
      "Security data exploration.",
      "Log retention capabilities.",
      "Eligible Security Operations Warranty options."
    ],
    accent: "navy",
  },
  {
    number: "02",
    category: "PLUS",
    title: "Enhanced Security & Vulnerability Management",
    tagline: "Go Beyond Detection with Proactive Risk Reduction.",
    description:
      "Builds upon the Core offering by adding advanced vulnerability management capabilities.",
    features: [
      "All Core capabilities.",
      "Aurora Vulnerability Management.",
      "Vulnerability discovery and assessment.",
      "Security hardening support.",
      "Expanded eligible warranty options."
    ],
    accent: "teal",
  },
  {
    number: "03",
    category: "TOTAL",
    title: "Comprehensive Cyber Resilience",
    tagline: "A More Complete Approach to Cybersecurity Protection.",
    description:
      "Combines managed detection and response, proactive vulnerability management, and incident response preparedness.",
    features: [
      "All Plus capabilities.",
      "Aurora Security Awareness and Training.",
      "JumpStart Incident Response Retainer.",
      "Incident response preparedness support.",
      "Expanded eligible warranty options."
    ],
    accent: "gold",
  },
];


const industries = [
  {
    title: "Professional Services",
    description:
      "Protect confidential business information, client records, and critical applications.",
  },
  {
    title: "Financial and Accounting Services",
    description:
      "Strengthen protection for sensitive financial information and business systems.",
  },
  {
    title: "Education ands Training",
    description:
      "Support the security of institutional systems, employee accounts, and digital learning environments.",
  },
  {
    title: "Healthcare and Community Services",
    description:
      "Help safeguard sensitive information and maintain the availability of essential systems.",
  },
  {
    title: "Construction and Engineering",
    description:
      "Protect project information, business communications, and connected technology environments.",
  },
  {
    title: "Small and Medium Sized Businesses",
    description:
      "Access cybersecurity capabilities that support growing organizations without requiring a large internal security operations team.",
  },
];

const approach = [
  {
    number: "01",
    title: "Prevent",
    description:
      "Identify vulnerabilities, strengthen security controls, and reduce exposure to cyber threats.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
    background: "#E9EFED",
    accent: "#167F86",
  },
  {
    number: "02",
    title: "Detect",
    description:
      "Monitor critical systems and identify suspicious activities before they escalate into major incidents.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    background: "#E7EEF2",
    accent: "#203F65",
  },
  {
    number: "03",
    title: "Respond",
    description:
      "Support rapid investigation, containment, and remediation of security incidents.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    background: "#F0EBDD",
    accent: "#C69D50",
  },
  {
    number: "04",
    title: "Recover",
    description:
      "Improve incident readiness, support business restoration, and strengthen long-term cyber resilience. Through an integrated approach to cybersecurity, IBS helps organizations move from reactive security measures to proactive cyber risk management.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    background: "#E8ECE7",
    accent: "#167F86",
  },
];

const faqs = [
  {
    question: "What are managed cybersecurity services?",
    answer:
      "Managed cybersecurity services provide organizations with ongoing security monitoring, threat detection, security expertise, and response capabilities. These services can help businesses strengthen protection without building a complete internal security operations team.",
  },
  {
    question: "What is Managed Detection and Response (MDR)?",
    answer:
      "Managed Detection and Response combines security technology, continuous monitoring, and expert analysis to identify, investigate, and respond to potential cybersecurity threats.",
  },
  {
    question: "Why is endpoint security important?",
    answer:
      "Endpoints such as laptops, desktops, and servers can be targeted by malware, ransomware, and unauthorized access attempts. Endpoint security helps protect these devices and reduce the risk of security incidents.",
  },
  {
    question: "Can cybersecurity solutions help with cyber insurance requirements?",
    answer:
      "Yes. Security controls such as MFA, endpoint protection, vulnerability management, security monitoring, and incident response planning can help organizations demonstrate cybersecurity readiness during insurance assessments. However, insurance approval and policy terms remain subject to insurer requirements.",
  },
   {
    question: "Do small businesses need cybersecurity protection?",
    answer:
      "Yes. Small and medium-sized businesses face many of the same cybersecurity threats as larger organizations. Appropriate security controls can help protect sensitive information, business operations, and customer trust.",
  },
     {
    question: "What is a cybersecurity risk assessment?",
    answer:
      "A cybersecurity risk assessment evaluates an organization’s security posture, identifies potential weaknesses, and helps prioritize improvements to reduce exposure to cyber threats.",
  },
   {
    question: "How can IBS help improve our cybersecurity?",
    answer:
      "IBS can help organizations evaluate their cybersecurity requirements, explore appropriate security technologies, and identify solutions that support threat detection, endpoint protection, vulnerability management, incident preparedness, and ongoing risk reduction.",
  },
];

function Eyebrow({ children, light = false, gold = false }) {
  return (
    <p
      className={`mb-4 text-[14px] font-semibold uppercase tracking-[0.28em] ${
        light ? "text-[#80D4D0]" : gold ? "text-[#C69D50]" : "text-[#167F86]"
      }`}
    >
      {children}
    </p>
  );
}

function Arrow({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12h15M12 5l7 7-7 7" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
      <path
        d="M24 4 40 10v11c0 10-6.8 17.6-16 22C14.8 38.6 8 31 8 21V10L24 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m16.5 23 5 5 10-11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CybersecurityPage() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeApproach, setActiveApproach] = useState(0);

  return (<>
  <Header/>
   <main className="overflow-hidden bg-[#F5F3EE] text-[#102A43]">
      
  


{/* HERO — editorial split layout */}

{/* HERO — Cybersecurity */}

{/* HERO — Cybersecurity */}


{/* HERO — Cybersecurity */}

{/* HERO — Cybersecurity */}
<section className="relative isolate min-h-[600px] overflow-hidden bg-[#F5F3EE]">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/cyber/hero.jpeg"
      alt=""
      className="h-full w-full object-cover object-center"
    />

    {/* Left White Fade — Right Completely Transparent */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3EE]/[98%] via-[#F5F3EE]/[85%] via-50% to-transparent" />
  </div>

  {/* Hero Content */}
  <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1380px] items-center px-5 pt-28 pb-16 sm:px-9 sm:pt-32 lg:px-14 lg:pt-36 lg:pb-20">

    <div className="w-full max-w-[800px]">

      {/* Eyebrow */}
      <div className="mb-6">
        <Eyebrow>Technology & Digital Protection</Eyebrow>
      </div>

      {/* Main Heading */}
      <h1 className="text-[46px] font-bold leading-[1.05] tracking-[-0.045em] text-[#142F46] sm:text-[60px] lg:text-[72px]">
        Cybersecurity
      </h1>

      {/* Subtitle */}
      <p className="mt-5 max-w-[700px] text-[20px] font-medium leading-[1.45] text-[#173A57] sm:text-[23px]">
        Protect Your Business. Strengthen Your Security. Build Cyber Resilience.
      </p>

      {/* Supporting Heading */}
      <p className="mt-5 max-w-[750px] text-[18px] leading-[1.6] text-[#173A57] sm:text-[21px]">
        Advanced Cybersecurity Solutions for a Safer Digital Future
      </p>

      {/* Description */}
      <p className="mt-3 max-w-[800px] text-[17px] leading-[1.6] text-[#173A57] sm:text-[20px]">
        At Innovative Business Solutions (IBS), we help organizations strengthen their cybersecurity posture through proactive risk management, advanced threat detection, endpoint protection, and security operations solutions.
        By combining cybersecurity expertise with advanced security technologies, including solutions powered by Arctic Wolf, we help businesses identify vulnerabilities, respond to emerging threats, and build a more resilient digital environment.
      </p>

      {/* CTA Button */}
      <a
        href="#cyber-services"
        className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#0D8990] px-8 py-4 text-[14px] font-bold uppercase tracking-[0.12em] !text-white shadow-lg shadow-[#0D8990]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#08747B] hover:!text-white"
      >
        Schedule a Cybersecurity Consultation
        <span className="!text-white">
          <Arrow />
        </span>
      </a>

    </div>
  </div>

  {/* Bottom Label */}
  <div className="absolute bottom-5 right-8 z-10 hidden items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-[#526273] sm:flex">
    <span className="h-px w-10 bg-[#167F86]" />
    IBS Canada
  </div>

</section>










{/* INTRO / CYBERSECURITY APPROACH SECTION */}
<section className="relative overflow-hidden bg-[#F5F3EE] px-5 py-16 sm:px-8 lg:py-24">

  {/* Decorative Background Circles */}
  <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full border border-[#167F86]/10" />
  <div className="pointer-events-none absolute -left-14 top-44 h-52 w-52 rounded-full border border-[#C69D50]/20" />

  <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">

    {/* LEFT SIDE — CYBERSECURITY IMAGE COLLAGE */}
    <div className="relative">

      <Eyebrow>Security Starts with Awareness</Eyebrow>

      <h2 className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-[-0.035em] text-[#102A43] sm:text-[46px]">
        WHY CHOOSE IBS?
        <br />
        <span className="text-[#167F86]"></span>
      </h2>

      <p className="mt-5 max-w-md text-base leading-7 text-[#697581]">
        Your Business Deserves a Proactive Cybersecurity Approach
      </p>

      {/* Extended Image Collage */}
      <div className="relative mt-10 h-[850px] w-full max-w-[500px]">

        {/* Decorative Frame */}
        <div className="absolute -left-5 top-8 h-36 w-36 border-l-[10px] border-t-[10px] border-[#167F86]/80" />

        {/* Image 1 — Main Cybersecurity Image */}
        <div className="absolute left-3 top-0 z-10 w-[78%] overflow-hidden shadow-[0_18px_40px_rgba(16,42,67,.18)]">
          <img
            src="/cyber/c-2.jpg"
            alt="Cybersecurity professional working at a computer"
            className="h-[240px] w-full object-cover sm:h-[280px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/75 via-transparent to-transparent" />

          <span className="absolute bottom-5 left-5 text-2xl font-semibold text-white sm:text-3xl">
            Protect.
          </span>
        </div>

        {/* Image 2 — Server Security */}
        <div className="absolute right-0 top-[190px] z-20 w-[53%] overflow-hidden border-[7px] border-[#F5F3EE] shadow-[0_16px_35px_rgba(16,42,67,.16)]">
          <img
            src="/cyber/c-1.jpg"
            alt="Secure server infrastructure"
            className="h-[160px] w-full object-cover"
          />
        </div>

        {/* Image 3 — Digital Protection */}
        <div className="absolute left-0 top-[350px] z-10 w-[62%] overflow-hidden border-[7px] border-[#F5F3EE] shadow-[0_16px_35px_rgba(16,42,67,.16)]">
          <img
            src="/cyber/c-3.jpg"
            alt="Cybersecurity digital technology"
            className="h-[175px] w-full object-cover"
          />
        </div>

        {/* Image 4 — Data Security */}
        <div className="absolute right-0 top-[530px] z-20 w-[65%] overflow-hidden border-[7px] border-[#F5F3EE] shadow-[0_16px_35px_rgba(16,42,67,.16)]">
          <img
            src="/cyber/c-4.jpg"
            alt="Digital security and data protection"
            className="h-[170px] w-full object-cover"
          />
        </div>

        {/* Image 5 — Technology Team */}
        <div className="absolute left-2 top-[690px] z-10 w-[55%] overflow-hidden border-[7px] border-[#F5F3EE] shadow-[0_16px_35px_rgba(16,42,67,.16)]">
          <img
            src="/cyber/c-5.jpg"
            alt="Technology team working together"
            className="h-[145px] w-full object-cover"
          />
        </div>

      </div>

      {/* Supporting Text */}
      <p className="mt-5 max-w-sm text-sm leading-6 text-[#87919A]">
        Practical cybersecurity support for a changing digital environment.
      </p>

    </div>

    {/* RIGHT SIDE — CYBERSECURITY APPROACH */}
    <div className="relative pt-2 lg:pt-10">

      {/* Section Heading */}
      <div className="mb-7 flex items-end justify-between gap-4">

        <div>
          <Eyebrow gold>Choose Your Security Priorities</Eyebrow>

          <h3 className="text-3xl font-semibold text-[#102A43] sm:text-4xl">
            Our Approach to Cybersecurity
          </h3>
        </div>

        <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-[#C69D50]/50 text-[#C69D50] sm:flex">
          <ShieldIcon />
        </div>

      </div>

      {/* Timeline Cards */}
      <div className="relative space-y-4 before:absolute before:bottom-6 before:left-[17px] before:top-6 before:w-px before:bg-[#167F86]/45">

        {[
          [
            "01",
            "Business-Focused Solutions",
            "Cybersecurity recommendations aligned with your organization’s operational requirements and business priorities."
          ],
          [
            "02",
            "Advanced Security Technologies",
            "Access to cybersecurity capabilities designed to address modern threats and evolving digital risks."
          ],
          [
            "03",
            "Proactive Risk Reduction",
            "A focus on identifying vulnerabilities, strengthening security controls, and improving preparedness."
          ],
          [
            "04",
            "Continuous Security Improvement",
            "An approach that encourages ongoing evaluation and enhancement of cybersecurity practices."
          ],
          [
            "05",
            "Scalable Security Solutions",
            "Security capabilities that can evolve with your organization’s changing technology environment."
          ],
          [
            "06",
            "Cyber Resilience & Business Continuity",
            "Helping businesses prepare for potential security incidents and strengthen their ability to recover."
          ]

        ].map(([number, title, description], index) => (

          <article
            key={number}
            className="relative ml-10 border border-[#E5E2DA] bg-white px-5 py-5 shadow-[0_8px_25px_rgba(16,42,67,.045)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(16,42,67,.09)] sm:px-7"
          >

            {/* Timeline Number */}
            <span
              className={`absolute -left-[51px] top-6 flex h-9 w-9 items-center justify-center rounded-full border-[4px] border-[#F5F3EE] text-[14px] font-bold text-white ${
                index % 3 === 0
                  ? "bg-[#102A43]"
                  : index % 3 === 1
                  ? "bg-[#C69D50]"
                  : "bg-[#167F86]"
              }`}
            >
              {number}
            </span>

            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#C69D50]">
              Cybersecurity focus
            </p>

            <h4 className="mt-2 text-xl font-semibold text-[#102A43]">
              {title}
            </h4>

            <p className="mt-2 text-base leading-6 text-[#697581]">
              {description}
            </p>

          </article>

        ))}

      </div>
    </div>

  </div>
</section>



{/* CYBERSECURITY — THREAT PROTECTION SECTION */}

{/* CYBERSECURITY — THREAT PROTECTION SECTION */}
<section className="relative isolate overflow-hidden border-y border-[#DCE8E6] bg-[#EDF4F3] px-5 py-20 sm:px-8 lg:py-24">

  {/* TOP DECORATIVE ACCENT */}
  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#167F86] via-[#C69D50] to-transparent" />

  {/* BACKGROUND DECORATIONS */}
  <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full border border-[#167F86]/15" />

  <div className="pointer-events-none absolute -left-16 top-32 h-56 w-56 rounded-full border border-[#C69D50]/20" />

  <div className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full border border-[#167F86]/10" />

  {/* MAIN CONTAINER */}
  <div className="relative mx-auto max-w-[1320px]">

    {/* SECTION HEADING */}
    <div className="mb-12 max-w-4xl">

      <Eyebrow>Stay Ahead of Cyber Threats</Eyebrow>

      <h2 className="mt-4 text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-[#102744] sm:text-5xl lg:text-[52px]">
        Cyber Threats Are Evolving.
        <span className="block text-[#102744]">
          Is Your Business Prepared?
        </span>
      </h2>

      <div className="mt-6 h-[3px] w-24 rounded-full bg-[#C69D50]" />

    </div>


    {/* TWO EQUAL HEIGHT COLUMNS */}
    <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">


      {/* ====================================== */}
      {/* LEFT SIDE — INTRODUCTION + TWO CARDS */}
      {/* ====================================== */}

      <div className="flex h-full flex-col">

        {/* INTRO HEADING */}
        <div className="mb-7 flex items-center gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#167F86]/20 bg-white text-[#167F86]">
            <ShieldIcon />
          </div>

          <div>

            <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-[#A3A8AE]">
              Cybersecurity Strategy
            </p>

            <h3 className="mt-1 text-xl font-semibold tracking-tight text-[#102744]">
              Stay Protected. Stay Prepared.
            </h3>

          </div>

        </div>


        {/* INTRODUCTION */}
        <p className="text-base leading-[1.8] text-[#656B75] sm:text-lg">
          Cyberattacks are becoming increasingly sophisticated, targeting organizations of every size and industry. From ransomware and phishing attacks to compromised credentials and network vulnerabilities, businesses face security challenges that can disrupt operations, compromise sensitive information, and create significant financial exposure. Traditional security tools alone are often insufficient to address today’s complex threat landscape. Organizations need a comprehensive cybersecurity strategy that combines prevention, continuous monitoring, rapid incident response, and ongoing security improvements.
        </p>

       


        {/* PREVENT + DETECT CARDS */}
        <div className="mt-9 grid gap-4 sm:grid-cols-2">

          {[
            {
              number: "01",
              title: "PREVENT",
              description:
                "Identify vulnerabilities, strengthen security controls, and reduce exposure to cyber threats.",
              icon: "shield-check",
              color: "teal"
            },
            {
              number: "02",
              title: "DETECT",
              description:
                "Monitor critical systems and identify suspicious activities before they escalate into major incidents.",
              icon: "scan-eye",
              color: "gold"
            }
          ].map((item) => (

            <article
              key={item.number}
              className="group relative flex flex-col border border-[#E1E4E3] bg-white p-5 shadow-[0_8px_25px_rgba(16,42,67,.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#167F86]/40 hover:shadow-[0_14px_30px_rgba(16,42,67,.09)] sm:p-6"
            >

              {/* TOP ACCENT */}
              <div
                className={`absolute left-0 top-0 h-1 w-full ${
                  item.color === "teal"
                    ? "bg-[#167F86]"
                    : "bg-[#C69D50]"
                }`}
              />

              {/* NUMBER AND ICON */}
              <div className="mb-5 flex items-center justify-between">

                <span className="text-sm font-semibold tracking-widest text-[#A3A8AE]">
                  {item.number}
                </span>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                    item.color === "teal"
                      ? "bg-[#167F86]/10 text-[#167F86] group-hover:bg-[#167F86] group-hover:text-white"
                      : "bg-[#C69D50]/10 text-[#C69D50] group-hover:bg-[#C69D50] group-hover:text-white"
                  }`}
                >
                  <icon name={item.icon} size="xl" />
                </div>

              </div>

              {/* CARD TITLE */}
              <h4 className="text-xl font-semibold tracking-tight text-[#102744]">
                {item.title}
              </h4>

              {/* GOLD DIVIDER */}
              <div className="mt-3 h-px w-12 bg-[#C69D50]" />

              {/* DESCRIPTION */}
              <p className="mt-4 text-[15px] leading-[1.75] text-[#656B75]">
                {item.description}
              </p>

            </article>

          ))}

        </div>


        {/* CLOSING STATEMENT */}
        <div className="mt-auto pt-9">

          <div className="border-l-[3px] border-[#167F86] bg-white px-6 py-6 shadow-[0_8px_25px_rgba(16,42,67,.04)]">

            <p className="text-base font-medium leading-[1.8] text-[#102744] sm:text-lg">
              Through an integrated approach to cybersecurity, IBS helps
              organizations move from reactive security measures to proactive
              cyber risk management.
            </p>

          </div>

          {/* BOTTOM LABEL */}
          <div className="mt-7 flex items-center gap-3">

            <span className="h-[2px] w-12 bg-[#C69D50]" />

            <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#A3A8AE]">
              Protecting Your Digital Future
            </span>

          </div>

        </div>

      </div>


      {/* ====================================== */}
      {/* RIGHT SIDE — VIDEO + TWO CARDS */}
      {/* ====================================== */}

      <div className="flex h-full flex-col">

        {/* VIDEO HEADING */}
        <div className="mb-5">

          <Eyebrow gold>Our Cybersecurity Approach</Eyebrow>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#102744] sm:text-3xl">
            Prevention to Recovery
          </h3>

          <p className="mt-3 text-base leading-7 text-[#656B75]">
            A comprehensive approach to protecting your organization's
            digital infrastructure.
          </p>

        </div>


        {/* VIDEO CONTAINER */}
        <div className="relative mt-2">

          {/* GOLD DECORATIVE CORNER */}
          <div className="absolute -right-3 -top-3 h-20 w-20 rounded-tr-[25px] border-r-2 border-t-2 border-[#C69D50]/70" />

          {/* TEAL DECORATIVE CORNER */}
          <div className="absolute -bottom-3 -left-3 h-20 w-20 rounded-bl-[25px] border-b-2 border-l-2 border-[#167F86]/60" />

          {/* VIDEO FRAME */}
          <div className="relative z-10 overflow-hidden rounded-[20px] border border-white bg-[#102744] p-2 shadow-[0_20px_45px_rgba(16,42,67,.14)]">

            <div className="aspect-video overflow-hidden rounded-[13px] bg-[#102744]">

              <video
                controls
                preload="metadata"
                playsInline
                className="h-full w-full object-cover"
              >

                <source
                  src="/cyber/cyber-vdo.mp4"
                  type="video/mp4"
                />

                Your browser does not support the video element.

              </video>

            </div>

          </div>

        </div>


        {/* RESPOND + RECOVER CARDS */}
        <div className="mt-8 grid flex-1 gap-4 sm:grid-cols-2">

          {[
            {
              number: "03",
              title: "RESPOND",
              description:
                "Support rapid investigation, containment, and remediation of security incidents.",
              icon: "shield-alert",
              color: "navy"
            },
            {
              number: "04",
              title: "RECOVER",
              description:
                "Improve incident readiness, support business restoration, and strengthen long-term cyber resilience. Through an integrated approach to cybersecurity, IBS helps organizations move from reactive security measures to proactive cyber risk management.",
              icon: "refresh-cw",
              color: "teal"
            }

          ].map((item) => (

            <article
              key={item.number}
              className="group relative flex flex-col border border-[#E1E4E3] bg-white p-5 shadow-[0_8px_25px_rgba(16,42,67,.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#167F86]/40 hover:shadow-[0_14px_30px_rgba(16,42,67,.09)] sm:p-6"
            >

              {/* TOP ACCENT */}
              <div
                className={`absolute left-0 top-0 h-1 w-full ${
                  item.color === "teal"
                    ? "bg-[#167F86]"
                    : "bg-[#102744]"
                }`}
              />

              {/* NUMBER AND ICON */}
              <div className="mb-5 flex items-center justify-between">

                <span className="text-sm font-semibold tracking-widest text-[#A3A8AE]">
                  {item.number}
                </span>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                    item.color === "teal"
                      ? "bg-[#167F86]/10 text-[#167F86] group-hover:bg-[#167F86] group-hover:text-white"
                      : "bg-[#102744]/10 text-[#102744] group-hover:bg-[#102744] group-hover:text-white"
                  }`}
                >
                  <icon name={item.icon} size="xl" />
                </div>

              </div>

              {/* CARD TITLE */}
              <h4 className="text-xl font-semibold tracking-tight text-[#102744]">
                {item.title}
              </h4>

              {/* GOLD DIVIDER */}
              <div className="mt-3 h-px w-12 bg-[#C69D50]" />

              {/* DESCRIPTION */}
              <p className="mt-4 text-[15px] leading-[1.75] text-[#656B75]">
                {item.description}
              </p>

            </article>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>






 {/* ARCTIC WOLF — ADVANCED SECURITY OPERATIONS */}
 
{/* ARCTIC WOLF — ADVANCED SECURITY OPERATIONS */}
<section className="px-5 py-7 sm:px-8 lg:py-9">

  <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[22px] bg-gradient-to-br from-[#102A43] via-[#123B57] to-[#087C83] px-6 py-7 text-white shadow-[0_15px_40px_rgba(16,42,67,.14)] sm:px-9 sm:py-9 lg:px-11 lg:py-10">

    {/* BACKGROUND DECORATIONS */}
    <div className="pointer-events-none absolute -right-16 -top-28 h-72 w-72 rounded-full border border-white/10" />

    <div className="pointer-events-none absolute right-16 top-0 h-56 w-56 rounded-full border border-[#C69D50]/30" />

    <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full border border-white/10" />

    {/* CONTENT */}
    <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_.7fr] lg:gap-10">

      {/* LEFT CONTENT */}
      <div>

        <Eyebrow gold>
          The Next Layer of Protection
        </Eyebrow>

        <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-[1.18] tracking-[-0.035em] text-white sm:text-4xl lg:text-[40px]">
          Advanced Security Operations Powered by Arctic Wolf
        </h2>

        <p className="mt-4 max-w-3xl text-[15px] leading-7 text-white/80 sm:text-[17px]">
          Combining Advanced Technology with Cybersecurity Expertise.
          IBS offers cybersecurity solutions incorporating technologies
          and capabilities from Arctic Wolf, a global provider of security
          operations solutions. Arctic Wolf’s security operations approach
          combines continuous monitoring, advanced threat detection,
          cybersecurity expertise, and proactive risk management. Through
          this technology-driven approach, organizations can improve their
          ability to identify cyber threats, strengthen their security
          posture, and respond to security incidents.
        </p>

        {/* KEY CAPABILITIES */}
        <div className="mt-6">

          <div className="mb-4 flex items-center gap-3">

            <span className="h-px w-8 bg-[#C69D50]" />

            <h3 className="text-lg font-semibold tracking-wide text-white sm:text-xl">
              Key Arctic Wolf Security Capabilities
            </h3>

          </div>

          <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">

            {[
              "24/7 Managed Security Operations",
              "Advanced Threat Detection",
              "Proactive Risk Management",
              "Endpoint Protection",
              "Security Awareness",
              "Incident Response",
              "Security Operations Designed Around Your Business"
            ].map((item, index) => (

              <div
                key={item}
                className={`flex items-start gap-2.5 ${
                  index === 6 ? "sm:col-span-2" : ""
                }`}
              >

                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#C69D50]/60 bg-white/10 text-[#E2BD76]">
                  <icon name="check" size="xs" />
                </span>

                <p className="text-[15px] font-medium leading-6 text-white/90 sm:text-base">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* RIGHT SIDE — BRANDING */}
      <div className="relative flex flex-col items-center justify-center gap-5">

        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
          Technology & Expertise
        </p>

        {/* LOGO CONTAINER */}
        <div className="flex w-full max-w-[340px] flex-col items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">

          {/* IBS LOGO */}
          <div className="flex h-28 w-32 items-center justify-center overflow-hidden rounded-lg bg-white p-3 shadow-lg">

            <img
              src="/logo/logo.jpg"
              alt="Innovative Business Solutions"
              className="max-h-full max-w-full object-contain"
            />

          </div>

          {/* CONNECTOR */}
          <div className="flex flex-col items-center gap-1">
            <span className="h-3 w-px bg-[#C69D50]" />
            <span className="h-2 w-2 rounded-full bg-[#C69D50]" />
            <span className="h-3 w-px bg-[#C69D50]" />
          </div>

          {/* ARCTIC WOLF LOGO */}
          <div className="h-20 w-full max-w-[250px] overflow-hidden rounded-lg bg-white shadow-lg">

            <img
              src="/cyber/arctic.png"
              alt="Arctic Wolf"
              className="h-full w-full object-cover"
            />

          </div>

          <p className="max-w-[260px] text-center text-sm leading-6 text-white/70">
            Combining cybersecurity expertise with advanced security operations technology.
          </p>

        </div>

        {/* BOTTOM BRAND LABEL */}
        <div className="flex items-center gap-3">

          <span className="h-px w-7 bg-[#C69D50]" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            IBS Canada
          </span>

          <span className="h-px w-7 bg-[#C69D50]" />

        </div>

      </div>

    </div>

  </div>

</section>


{/* CYBERSECURITY — INSURANCE BENEFITS */}
<section className="relative isolate overflow-hidden bg-[#102744] px-5 py-12 sm:px-8 lg:py-14">

  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10" />

  <div className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full border border-[#C69D50]/20" />

  <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#167F86]/10 blur-[90px]" />

  <div className="relative mx-auto grid max-w-[1320px] items-center gap-9 lg:grid-cols-[1.15fr_.85fr] lg:gap-12">

    {/* LEFT CONTENT */}
    <div>

      <Eyebrow gold>
        Cybersecurity & Business Protection
      </Eyebrow>

      <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[42px]">
        Better Security Can Support Better Insurance Outcomes.
      </h2>

      <div className="mt-4 h-[3px] w-16 rounded-full bg-[#C69D50]" />

      <p className="mt-5 text-base leading-7 text-white/75 sm:text-[17px]">
        Organizations that demonstrate strong cybersecurity practices may
        be better positioned to negotiate favourable cyber insurance terms.
        Depending on the insurer, policy, and organizational risk profile,
        potential benefits may include:
      </p>

      {/* BENEFITS GRID */}
      <div className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">

        {[
          "Improved cyber insurance eligibility.",
          "More competitive insurance premiums.",
          "Enhanced coverage options.",
          "Stronger risk assessments.",
          "Improved incident preparedness.",
          "Reduced financial exposure following certain cyber incidents."
        ].map((item, index) => (

          <div key={index} className="flex items-start gap-3">

            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#167F86]/20 text-[#62C5C0]">
              <icon name="check" size="xs" />
            </span>

            <p className="text-[15px] font-medium leading-6 text-white/90 sm:text-base">
              {item}
            </p>

          </div>

        ))}

      </div>

      {/* IMPORTANT NOTE */}
      <div className="mt-6 border-l-[3px] border-[#C69D50] bg-white/[0.06] px-4 py-3">

        <p className="text-sm leading-6 text-white/65">
          <span className="font-semibold text-white">
            Important:
          </span>{" "}
          Insurance eligibility, pricing, coverage, and financial benefits
          depend on individual circumstances and insurer underwriting
          requirements.
        </p>

      </div>

    </div>


    {/* RIGHT IMAGE */}
    <div className="relative">

      {/* GOLD CORNER */}
      <div className="absolute -right-2 -top-2 h-16 w-16 rounded-tr-2xl border-r-2 border-t-2 border-[#C69D50]" />

      {/* IMAGE */}
      <div className="relative z-10 overflow-hidden rounded-xl border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,.25)]">

        <img
          src="/cyber/cyber.jpeg"
          alt="Cybersecurity monitoring workstation"
          className="h-[280px] w-full object-cover object-center sm:h-[340px] lg:h-[380px]"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102744]/65 via-transparent to-transparent" />

        {/* IMAGE LABEL */}
        <div className="absolute bottom-5 left-5">

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-[#C69D50]" />

            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Proactive Cyber Risk Management
            </span>

          </div>

        </div>

      </div>

      {/* TEAL CORNER */}
      <div className="absolute -bottom-2 -left-2 h-16 w-16 rounded-bl-2xl border-b-2 border-l-2 border-[#167F86]" />

    </div>

  </div>

</section>


      {/* SERVICES */}
   {/* CYBERSECURITY PACKAGES SECTION */}
<section
  id="cyber-services"
  className="relative isolate overflow-hidden bg-[#F5F3EE] px-5 py-14 sm:px-8 lg:py-20"
>

  {/* BACKGROUND DECORATIONS */}
  <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full border border-[#167F86]/10" />

  <div className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full border border-[#C69D50]/15" />

  <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full border border-[#167F86]/10" />


  <div className="relative mx-auto max-w-[1320px]">

    {/* SECTION HEADER */}
    <div className="mb-12 grid gap-7 lg:grid-cols-[1fr_.85fr] lg:items-end lg:gap-16">

      <div>

        <Eyebrow>Cybersecurity Service Packages</Eyebrow>

        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-[#102A43] sm:text-4xl lg:text-[46px]">
          Flexible Cybersecurity Solutions for Different Business Needs
        </h2>

        <div className="mt-6 h-[3px] w-20 rounded-full bg-[#C69D50]" />

      </div>

      <div className="lg:pb-1">

        <p className="text-base leading-7 text-[#526273] sm:text-[17px]">
          Every organization has unique cybersecurity requirements. IBS helps
          businesses explore scalable security operations solutions designed
          to support their security maturity, operational environment, and
          risk profile. Arctic Wolf Security Operations Bundles are available
          in three configurations.
        </p>

      </div>

    </div>


    {/* PACKAGE CARDS */}
    <div className="grid items-stretch gap-6 lg:grid-cols-3">

      {services.map((service, index) => (

        <article
          key={service.number}
          className={`group relative flex h-full flex-col overflow-hidden rounded-[20px] border bg-white transition-all duration-300 hover:-translate-y-2 ${
            service.accent === "teal"
              ? "border-[#167F86]/30 shadow-[0_18px_45px_rgba(22,127,134,.13)] lg:-translate-y-3 lg:hover:-translate-y-5"
              : "border-[#E5E2DA] shadow-[0_12px_35px_rgba(16,42,67,.06)] hover:shadow-[0_22px_45px_rgba(16,42,67,.12)]"
          }`}
        >

          {/* TOP COLOR STRIP */}
          <div
            className={`h-2 w-full ${
              service.accent === "navy"
                ? "bg-[#102A43]"
                : service.accent === "teal"
                ? "bg-[#167F86]"
                : "bg-[#C69D50]"
            }`}
          />


          <div className="flex flex-1 flex-col p-6 sm:p-7">

            {/* CARD HEADER */}
            <div className="flex items-center justify-between">

              <span className="text-sm font-semibold tracking-[0.2em] text-[#9AA3AA]">
                {service.number}
              </span>

              <span
                className={`rounded-full px-4 py-2 text-xs font-bold tracking-[0.16em] ${
                  service.accent === "navy"
                    ? "bg-[#E9EEF3] text-[#102A43]"
                    : service.accent === "teal"
                    ? "bg-[#E1F1EF] text-[#167F86]"
                    : "bg-[#F5EDDE] text-[#B38A3F]"
                }`}
              >
                {service.category}
              </span>

            </div>


            {/* PACKAGE TITLE */}
            <h3 className="mt-6 min-h-[65px] text-[23px] font-semibold leading-[1.3] tracking-[-0.025em] text-[#102A43]">
              {service.title}
            </h3>


            {/* TAGLINE */}
            <p
              className={`mt-5 text-[16px] font-semibold leading-6 ${
                service.accent === "teal"
                  ? "text-[#167F86]"
                  : service.accent === "gold"
                  ? "text-[#B38A3F]"
                  : "text-[#102A43]"
              }`}
            >
              {service.tagline}
            </p>


            {/* DIVIDER */}
            <div
              className={`mt-4 h-[2px] w-12 rounded-full transition-all duration-300 group-hover:w-20 ${
                service.accent === "navy"
                  ? "bg-[#102A43]"
                  : service.accent === "teal"
                  ? "bg-[#167F86]"
                  : "bg-[#C69D50]"
              }`}
            />


            {/* DESCRIPTION */}
            <p className="mt-5 min-h-[105px] text-[15px] leading-7 text-[#697581]">
              {service.description}
            </p>


            {/* FEATURES HEADING */}
            <div className="mt-5 flex items-center gap-3 border-b border-[#E9E6DF] pb-4">

              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  service.accent === "navy"
                    ? "bg-[#E9EEF3] text-[#102A43]"
                    : service.accent === "teal"
                    ? "bg-[#E1F1EF] text-[#167F86]"
                    : "bg-[#F5EDDE] text-[#B38A3F]"
                }`}
              >
                <icon name="shield-check" size="sm" />
              </span>

              <h4 className="text-sm font-bold uppercase tracking-[0.13em] text-[#102A43]">
                What's Included
              </h4>

            </div>


            {/* FEATURES LIST */}
            <ul className="mt-5 flex-1 space-y-4">

              {service.features.map((feature, featureIndex) => (

                <li
                  key={featureIndex}
                  className="flex items-start gap-3"
                >

                  <span
                    className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      service.accent === "navy"
                        ? "bg-[#E9EEF3] text-[#102A43]"
                        : service.accent === "teal"
                        ? "bg-[#E1F1EF] text-[#167F86]"
                        : "bg-[#F5EDDE] text-[#B38A3F]"
                    }`}
                  >
                    <icon name="check" size="xs" />
                  </span>

                  <span className="text-[14px] leading-6 text-[#526273] sm:text-[15px]">
                    {feature}
                  </span>

                </li>

              ))}

            </ul>


            {/* CARD FOOTER */}
            <div className="mt-8 flex items-center justify-between border-t border-[#E9E6DF] pt-5">

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#87919A]">
                IBS Canada
              </span>

              <a
                href="#contact"
                className={`flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] transition-all hover:gap-4 ${
                  service.accent === "navy"
                    ? "text-[#102A43]"
                    : service.accent === "teal"
                    ? "text-[#167F86]"
                    : "text-[#B38A3F]"
                }`}
              >
                Enquire Now
                <icon name="arrow-up-right" size="sm" />
              </a>

            </div>

          </div>

        </article>

      ))}

    </div>


    {/* BOTTOM LABEL */}
    <div className="mt-10 flex items-center justify-center gap-4">

      <span className="h-px w-12 bg-[#C69D50]/60" />

      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#87919A]">
        Security Solutions Designed Around Your Business
      </p>

      <span className="h-px w-12 bg-[#C69D50]/60" />

    </div>

  </div>

</section>



      {/* INDUSTRY APPLICATIONS — rounded descriptive industry cards */}
      <section className="relative isolate overflow-hidden bg-[#09263D] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_50%,rgba(17,130,137,.55),transparent_35%),linear-gradient(115deg,#09213A,#0B5965)]" />
        <div className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full border border-white/[0.06]" />
        <div className="pointer-events-none absolute -left-5 top-24 h-64 w-64 rounded-full border border-[#C69D50]/15" />
        <div className="pointer-events-none absolute right-[12%] top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute right-[17%] top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full border border-[#80D4D0]/20" />

        <div className="relative mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <Eyebrow gold>Industry Applications</Eyebrow>
            <h2 className="max-w-lg text-4xl font-semibold leading-tight sm:text-[48px]">
              Cybersecurity for
              <span className="block text-[#E0B766]">organizations across industries.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-white/70">
              Organizations have different responsibilities, technology
              environments and risk profiles. Security priorities should
              reflect the way each organization works.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#80D4D0]">
              <span className="h-px w-9 bg-[#80D4D0]" />
              Connected protection
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <article
                key={industry.title}
                className={`group relative flex min-h-[230px] flex-col overflow-hidden rounded-[26px] border border-white/10 p-6 shadow-[0_16px_38px_rgba(0,0,0,.14)] transition-all duration-300 hover:-translate-y-2 hover:rounded-[38px] hover:shadow-[0_22px_48px_rgba(0,0,0,.24)] sm:p-7 ${
                  index % 3 === 1
                    ? "bg-[#167F86]"
                    : index % 3 === 2
                    ? "bg-[#183B5B]"
                    : "bg-[#203F65]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold tracking-[0.22em] text-white/60">
                    0{index + 1}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition duration-300 group-hover:rotate-45 group-hover:bg-white/20">
                    <Arrow className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold leading-snug text-white sm:text-[21px]">
                  {industry.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  {industry.description}
                </p>
                <div className="mt-auto pt-5">
                  <span className="block h-px w-10 bg-[#E0B766] transition-all duration-300 group-hover:w-20" />
                </div>
                <span className="pointer-events-none absolute -bottom-10 -right-3 text-[112px] font-semibold leading-none text-white/[0.045]">
                  0{index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>


{/* CYBERSECURITY — RISK REDUCTION APPROACH */}
<section className="relative isolate overflow-hidden bg-[#F5F3EE]">

  <div className="grid lg:min-h-[650px] lg:grid-cols-[0.85fr_1.15fr]">

    {/* LEFT SIDE — IMAGE */}
    <div className="relative flex items-center justify-center px-6 py-12 sm:px-10 lg:px-12 lg:py-16">

      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full border border-[#167F86]/15" />

      <div className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full border border-[#C69D50]/20" />

      <div className="pointer-events-none absolute bottom-8 left-0 h-36 w-full bg-gradient-to-r from-white/0 via-white/70 to-transparent" />

      {/* IMAGE WRAPPER */}
      <div className="relative z-10 w-full max-w-[470px]">

        {/* GOLD DECORATIVE FRAME */}
        <div className="absolute -right-3 -top-3 h-28 w-28 rounded-tr-[25px] border-r-2 border-t-2 border-[#C69D50]" />

        <div className="absolute -bottom-3 -left-3 h-28 w-28 rounded-bl-[25px] border-b-2 border-l-2 border-[#167F86]" />

        {/* MAIN IMAGE */}
      <div className="relative overflow-hidden rounded-lg border border-white shadow-[0_25px_55px_rgba(16,42,67,.20)]">

  <img
    src="/cyber/cyber-2.jpeg"
    alt="Cybersecurity professional analyzing security threats"
    className="h-[500px] w-full object-cover object-center sm:h-[580px] lg:h-[680px] xl:h-[720px]"
  />

  {/* IMAGE OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/65 via-transparent to-transparent" />

  {/* IMAGE LABEL */}
  <div className="absolute bottom-6 left-6 right-6">

    <div className="flex items-center gap-3">
      <span className="h-1 w-10 rounded-full bg-[#C69D50]" />

      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
        Cybersecurity Protection
      </span>
    </div>

    <p className="mt-3 max-w-xs text-2xl font-semibold leading-tight text-white sm:text-3xl">
      Building a Stronger Digital Future.
    </p>

  </div>

</div>

      </div>

    </div>


    {/* RIGHT SIDE — CONTENT */}
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#102A43] via-[#18364D] to-[#263B49] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">

      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-12 -top-20 h-72 w-72 rounded-full border border-[#C69D50]/20" />

      <div className="pointer-events-none absolute -bottom-36 -right-20 h-96 w-96 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#167F86]/10 to-transparent" />


      <div className="relative z-10 mx-auto max-w-[680px]">

        {/* SECTION HEADING */}
        <Eyebrow gold>
          Our Cybersecurity Methodology
        </Eyebrow>

        <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.15] tracking-[-0.035em] text-white sm:text-4xl lg:text-[42px]">
          A Structured Approach to
          <span className="block text-[#75C8C4]">
            Cyber Risk Reduction
          </span>
        </h2>

        <div className="mt-5 h-[3px] w-20 rounded-full bg-[#C69D50]" />

        <p className="mt-5 text-[15px] leading-7 text-white/70 sm:text-base">
          Our cybersecurity approach follows five important stages.
        </p>


        {/* FIVE STAGES */}
        <div className="relative mt-8 space-y-6">

          {/* TIMELINE */}
          <div className="absolute bottom-5 left-[17px] top-5 w-px bg-gradient-to-b from-[#C69D50] via-[#167F86] to-transparent" />

          {[
            [
              "01",
              "ASSESS",
              "Understand your organization’s IT environment, cybersecurity challenges, and existing security controls."
            ],
            [
              "02",
              "IDENTIFY",
              "Identify potential vulnerabilities, security gaps, and areas requiring additional protection."
            ],
            [
              "03",
              "PROTECT",
              "Explore and implement appropriate cybersecurity technologies and security controls."
            ],
            [
              "04",
              "MONITOR & RESPOND",
              "Use continuous monitoring and threat detection capabilities to support timely security responses."
            ],
            [
              "05",
              "IMPROVE",
              "Review security findings, strengthen existing controls, and support ongoing cybersecurity maturity."
            ]
          ].map(([number, title, description], index) => (

            <div
              key={number}
              className="group relative flex gap-5"
            >

              {/* NUMBER */}
              <div className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-xs font-bold text-white shadow-lg transition duration-300 group-hover:scale-110 ${
                index === 0
                  ? "bg-[#C69D50]"
                  : index === 2
                  ? "bg-[#167F86]"
                  : "bg-[#203F66]"
              }`}>
                {number}
              </div>

              {/* STAGE CONTENT */}
              <div className="flex-1 pb-1">

                <h3 className="text-[17px] font-semibold tracking-wide text-white transition-colors group-hover:text-[#75C8C4] sm:text-lg">
                  {title}
                </h3>

                <p className="mt-2 max-w-xl text-[14px] leading-6 text-white/70 sm:text-[15px]">
                  {description}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* FINAL MESSAGE */}
        <div className="mt-8 border-l-[3px] border-[#C69D50] bg-white/[0.07] px-5 py-4">

          <div className="flex items-start gap-3">

            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#167F86]/20 text-[#75C8C4]">
              <icon name="shield-check" size="lg" />
            </span>

            <p className="text-[15px] font-semibold leading-7 text-white sm:text-base">
              Our Goal: Help Your Organization Become More Secure, Prepared, and Resilient.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

   {/* FAQ */}
      <section className="bg-[#102A43] px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <Eyebrow light>Frequently Asked Questions</Eyebrow>
            <h2 className="max-w-sm text-4xl font-semibold leading-tight sm:text-[46px]">
              Cybersecurity FAQs
            </h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-white/65">
              Find answers to common questions about cybersecurity and
              protecting your organization.
            </p>
          </div>
          <div className="border-t border-white/25">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={faq.question} className="border-b border-white/25">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  >
                    <span className="text-base font-medium leading-6 sm:text-lg">
                      {faq.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/35 text-[#E0B766]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="max-w-3xl pb-6 pr-12 text-base leading-7 text-white/65">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    

   

      {/* FINAL CTA */}
      <section id="contact" className="bg-[#F5F3EE] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <Eyebrow gold>The Next Chapter</Eyebrow>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-[#102A43] sm:text-[48px]">
            Don't Wait for a Cyberattack to Take Cybersecurity Seriously.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#65727B]">
           Protect What Matters Most to Your Business.
Cyber threats continue to evolve, and organizations need security strategies that evolve with them.

Whether you are looking to strengthen endpoint protection, implement managed security monitoring, improve vulnerability management, or prepare for cyber insurance requirements, IBS can help you explore suitable cybersecurity solutions.
            </p>
            <a
  href="/contact"
  className="mt-7 inline-flex items-center gap-3 rounded-full !bg-[#167F86] px-8 py-4 text-[14px] font-bold uppercase tracking-[0.12em] !text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:!bg-[#102A43] hover:!text-white hover:shadow-lg"
  style={{ color: "#ffffff" }}
>
  <span className="!text-white">Contact IBS</span>
  <span className="!text-white">
    <Arrow />
  </span>
</a>
          </div>
          <div className="relative">
            <div className="absolute -bottom-3 -left-3 h-24 w-24 bg-[#167F86]" />
            <div className="relative overflow-hidden shadow-[0_18px_42px_rgba(16,42,67,.15)]">
              <img
                src="/cyber/cyber-3.jpeg"
                alt="Connected digital technology network"
                className="h-[260px] w-full object-cover sm:h-[330px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#102A43]/35 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
  </>
   
  );
}
