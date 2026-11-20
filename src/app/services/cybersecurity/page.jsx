"use client";

import Footer from "@/components/Footer";
import Header from "@/components/layout/Header";
import { useState } from "react";

const services = [
  {
    number: "01",
    category: "SECURITY OPERATIONS",
    title: "Managed Detection & Response",
    description:
      "Continuous monitoring and expert-led threat detection to help identify suspicious activity across your digital environment.",
    accent: "navy",
  },
  {
    number: "02",
    category: "RISK & READINESS",
    title: "Cybersecurity Assessment",
    description:
      "Understand your current security posture, identify gaps and prioritize practical improvements for your organization.",
    accent: "gold",
  },
  {
    number: "03",
    category: "PEOPLE & AWARENESS",
    title: "Security Awareness",
    description:
      "Help your people recognize cyber risks and make safer decisions in their everyday work.",
    accent: "teal",
  },
  {
    number: "04",
    category: "PROTECTION",
    title: "Security Strategy & Guidance",
    description:
      "Build a clear and considered approach to cybersecurity that reflects your organization's needs and priorities.",
    accent: "navy",
  },
  {
    number: "05",
    category: "RESPONSE & RESILIENCE",
    title: "Incident Response Readiness",
    description:
      "Prepare your organization with a coordinated approach to managing security incidents and supporting recovery.",
    accent: "teal",
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
      "Strengthen your security foundations and reduce exposure before threats become incidents.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
    background: "#E9EFED",
    accent: "#167F86",
  },
  {
    number: "02",
    title: "Detect",
    description:
      "Identify unusual activity and potential threats with improved visibility across your environment.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    background: "#E7EEF2",
    accent: "#203F65",
  },
  {
    number: "03",
    title: "Respond",
    description:
      "Take informed action with a clear response process when a security concern is identified.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    background: "#F0EBDD",
    accent: "#C69D50",
  },
  {
    number: "04",
    title: "Recover",
    description:
      "Restore operations, learn from incidents and improve resilience for the future.",
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
<section className="relative isolate min-h-[600px] overflow-hidden bg-[#F5F3EE]">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=85"
      alt=""
      className="h-full w-full object-cover object-center"
    />

    {/* White / Cream Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3EE]/[98%] via-[#F5F3EE]/[88%] via-50% to-[#F5F3EE]/[25%]" />

    {/* Soft Overall Brightness */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#F5F3EE]/40 via-[#F5F3EE]/10 to-[#FFFFFF]/30" />
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






      {/* INTRO / LEARNING JOURNEY-INSPIRED SERVICE STORY */}
      <section className="relative overflow-hidden bg-[#F5F3EE] px-5 py-16 sm:px-8 lg:py-24">
        <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full border border-[#167F86]/10" />
        <div className="pointer-events-none absolute -left-14 top-44 h-52 w-52 rounded-full border border-[#C69D50]/20" />
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
          <div className="relative">
            <Eyebrow>Security Starts with Awareness</Eyebrow>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-[-0.035em] text-[#102A43] sm:text-[46px]">
              WHY CHOOSE IBS?
              <br/>
              <span className="text-[#167F86]"> </span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[#697581]">
            Your Business Deserves a Proactive Cybersecurity Approach
            </p>

            <div className="relative mt-9 max-w-[470px]">
              <div className="absolute -left-5 top-8 h-32 w-32 border-l-[10px] border-t-[10px] border-[#167F86]/80" />
              <div className="relative ml-3 w-[88%] overflow-hidden shadow-[0_18px_40px_rgba(16,42,67,.16)]">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"
                  alt="Cybersecurity professional working at a computer"
                  className="h-[230px] w-full object-cover sm:h-[280px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 to-transparent" />
                <span className="absolute bottom-5 left-5 text-3xl font-semibold text-white">
                  Protect.
                </span>
              </div>
              <div className="absolute -bottom-8 right-0 w-[62%] overflow-hidden border-[7px] border-[#F5F3EE] shadow-[0_16px_35px_rgba(16,42,67,.15)]">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=85"
                  alt="Secure server infrastructure"
                  className="h-[130px] w-full object-cover sm:h-[155px]"
                />
              </div>
            </div>
            <p className="mt-16 max-w-sm text-sm leading-6 text-[#87919A]">
              Practical cybersecurity support for a changing digital
              environment.
            </p>
          </div>

          <div className="relative pt-2 lg:pt-10">
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

            <div className="relative space-y-4 before:absolute before:bottom-6 before:left-[17px] before:top-6 before:w-px before:bg-[#167F86]/45">
              {[
                ["01", "Business-Focused Solutions", "Cybersecurity recommendations aligned with your organization’s operational requirements and business priorities."],
                ["02", "Advanced Security Technologies", "Access to cybersecurity capabilities designed to address modern threats and evolving digital risks."],
                ["03", "Proactive Risk Reduction", "A focus on identifying vulnerabilities, strengthening security controls, and improving preparedness."],
                ["04", "Continuous Security Improvement", "An approach that encourages ongoing evaluation and enhancement of cybersecurity practices."],
                ["05", "Scalable Security Solutions", "Security capabilities that can evolve with your organization’s changing technology environment."],
                ["06", "Cyber Resilience & Business Continuity", "Helping businesses prepare for potential security incidents and strengthen their ability to recover."],


              ].map(([number, title, description], index) => (
                <article
                  key={number}
                  className="relative ml-10 border border-[#E5E2DA] bg-white px-5 py-5 shadow-[0_8px_25px_rgba(16,42,67,.045)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(16,42,67,.09)] sm:px-7"
                >
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

      {/* ARCTIC WOLF FEATURE BANNER */}
      <section className="px-5 py-12 sm:px-8 lg:py-16">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden bg-gradient-to-r from-[#102A43] via-[#123B57] to-[#087C83] px-7 py-10 text-white sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-12 -top-28 h-80 w-80 rounded-full border border-white/15" />
          <div className="pointer-events-none absolute right-10 top-0 h-64 w-64 rounded-full border border-[#C69D50]/40" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <Eyebrow gold>The Next Layer of Protection</Eyebrow>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-[46px]">
                Advanced Security Operations
                <span className="text-[#E1B967]"> Powered by Arctic Wolf.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                Strengthen your security operations with advanced monitoring,
                threat detection and expert support through Arctic Wolf.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-24 items-center justify-center bg-white px-3 text-center text-sm font-bold leading-tight text-[#102A43]">
                IBS<br />CANADA
              </div>
              <div className="flex h-16 w-32 items-center justify-center bg-white px-3 text-center text-base font-black tracking-tight text-[#102A43]">
                ARCTIC WOLF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="cyber-services" className="bg-[#F5F3EE] px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 grid gap-5 md:grid-cols-[1fr_.8fr] md:items-end">
            <div>
              <Eyebrow>Flexible Cybersecurity Solutions</Eyebrow>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#102A43] sm:text-[46px]">
                Flexible solutions for different business needs.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-[#697581] md:justify-self-end">
              Explore practical cybersecurity support that can be aligned with
              your organization's needs, priorities and operating environment.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.number}
                className={`group relative min-h-[265px] overflow-hidden border border-[#E4E0D7] bg-white p-7 shadow-[0_8px_24px_rgba(16,42,67,.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(16,42,67,.10)] ${
                  index === 0 ? "xl:col-span-1" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-semibold tracking-[0.22em] text-[#C69D50]">
                    {service.category}
                  </span>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      service.accent === "gold"
                        ? "bg-[#F3E8D1] text-[#B38A3F]"
                        : service.accent === "teal"
                        ? "bg-[#DCEFED] text-[#167F86]"
                        : "bg-[#E5EBF0] text-[#102A43]"
                    }`}
                  >
                    <ShieldIcon />
                  </span>
                </div>
                <div className="mt-8 h-px w-12 bg-[#167F86] transition-all duration-300 group-hover:w-20" />
                <h3 className="mt-5 max-w-sm text-2xl font-semibold leading-snug text-[#102A43]">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#697581]">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-[0.18em] text-[#167F86]"
                >
                  Learn more <Arrow />
                </a>
                <span className="pointer-events-none absolute -bottom-8 -right-5 text-[100px] font-semibold leading-none text-[#102A43]/[0.035]">
                  {service.number}
                </span>
              </article>
            ))}
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

      {/* APPROACH / VALUE TO CLIENTS */}
      <section
        className="relative overflow-hidden px-5 py-16 transition-colors duration-500 sm:px-8 lg:py-24"
        style={{ backgroundColor: approach[activeApproach].background }}
      >
        <div className="pointer-events-none absolute -right-8 top-0 select-none text-[280px] font-bold leading-none text-[#102A43]/[0.035]">
          04
        </div>
        <div className="relative mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
            <div>
              <Eyebrow>The IBS Difference</Eyebrow>
              <h2 className="max-w-lg text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#102A43] sm:text-[53px]">
             Cyber Threats Are Evolving. Is Your Business Prepared?
               
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-[#65727B]">
              Cyberattacks are becoming increasingly sophisticated, targeting organizations of every size and industry. From ransomware and phishing attacks to compromised credentials and network vulnerabilities, businesses face security challenges that can disrupt operations, compromise sensitive information, and create significant financial exposure. Traditional security tools alone are often insufficient to address today’s complex threat landscape. Organizations need a comprehensive cybersecurity strategy that combines prevention, continuous monitoring, rapid incident response, and ongoing security improvements.
              </p>
              <div className="relative mt-8 overflow-hidden shadow-[0_18px_42px_rgba(16,42,67,.15)]">
                {approach.map((item, index) => (
                  <img
                    key={item.number}
                    src={item.image}
                    alt={`${item.title} cybersecurity approach`}
                    className={`h-[300px] w-full object-cover transition-all duration-700 sm:h-[390px] ${
                      activeApproach === index
                        ? "relative opacity-100"
                        : "pointer-events-none absolute inset-0 opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E0B766]">
                    Step {approach[activeApproach].number}
                  </p>
                  <p className="mt-1 text-4xl font-semibold">
                    {approach[activeApproach].title}.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              
              <div className="space-y-2">
                {approach.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveApproach(index)}
                    aria-pressed={activeApproach === index}
                    className={`group flex w-full gap-4 border-b border-[#C8D2CF] px-4 py-5 text-left transition-all duration-300 ${
                      activeApproach === index
                        ? "border-l-2 bg-white shadow-[0_8px_25px_rgba(16,42,67,.08)]"
                        : "hover:bg-white/70"
                    }`}
                    style={{
                      borderLeftColor:
                        activeApproach === index ? item.accent : "transparent",
                    }}
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold transition-colors"
                      style={{
                        backgroundColor:
                          activeApproach === index ? item.accent : "#DCE8E5",
                        color: activeApproach === index ? "#FFFFFF" : "#167F86",
                      }}
                    >
                      {item.number}
                    </span>
                    <span className="flex-1">
                      <span className="block text-xl font-semibold text-[#102A43]">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-base leading-7 text-[#65727B]">
                        {item.description}
                      </span>
                    </span>
                    <Arrow className="mt-2 h-5 w-5 shrink-0 text-[#167F86] transition group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
              <p className="pt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#167F86]">
                Select a step to explore the approach
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-between border-t border-[#C8D2CF] pt-5">
            <p className="text-base font-medium text-[#526273]">
              Stronger security begins with informed decisions.
            </p>
            <span className="text-sm font-semibold tracking-[0.2em] text-[#C69D50]">
              IBS CANADA
            </span>
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
           Don't Wait for a Cyberattack to Take Cybersecurity Seriously.
Protect What Matters Most to Your Business.
Cyber threats continue to evolve, and organizations need security strategies that evolve with them.

Whether you are looking to strengthen endpoint protection, implement managed security monitoring, improve vulnerability management, or prepare for cyber insurance requirements, IBS can help you explore suitable cybersecurity solutions
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85"
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
