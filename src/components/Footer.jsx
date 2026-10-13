
"use client";

import { motion } from "framer-motion";
import { ArrowUp, MapPin, Sparkles } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/ibsgroupcanada/",
      type: "instagram",
    },
    {
      name: "X",
      href: "https://x.com/ibsgroupcanada",
      type: "x",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/ibsgroupcanada/",
      type: "linkedin",
    },
  ];

  const SocialIcon = ({ type }) => {
    if (type === "instagram") {
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="12"
            cy="12"
            r="4.2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
        </svg>
      );
    }

    if (type === "linkedin") {
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.2 8.3H2.4V21h2.8V8.3ZM3.8 3C2.8 3 2 3.8 2 4.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8S4.8 3 3.8 3ZM21.6 13.7c0-3.8-2-5.7-4.8-5.7-2.2 0-3.2 1.2-3.8 2v-1.7h-2.8V21H13v-6.3c0-1.7.3-3.4 2.5-3.4 2.1 0 2.1 1.9 2.1 3.5V21h4v-7.3Z" />
        </svg>
      );
    }

    if (type === "x") {
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-[17px] w-[17px]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.55l-5.13-6.71L5.2 22H1.94l7.6-8.69L1.5 2h6.72l4.64 6.14L18.244 2Zm-1.15 17.88h1.81L7.22 4h-1.94l11.814 15.88Z" />
        </svg>
      );
    }

    return null;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative isolate w-full overflow-hidden bg-[#071A29] text-white">
      {/* AMBIENT BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 -top-36 h-[300px] w-[300px] rounded-full bg-[#087F8C]/15 blur-[110px]" />
        <div className="absolute -right-24 top-0 h-[260px] w-[260px] rounded-full bg-[#2374A8]/15 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[180px] w-[420px] -translate-x-1/2 rounded-full bg-[#087F8C]/10 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 0.7px, transparent 0.7px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* TOP ACCENT LINE */}
      <div className="relative h-[3px] w-full overflow-hidden bg-white/[0.04]">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full w-full bg-gradient-to-r from-transparent via-[#087F8C] to-[#2374A8]"
        />
      </div>

      {/* TOP INFORMATION BAR */}
      <div className="relative border-b border-white/[0.09]">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-6 py-10 sm:px-8 md:grid-cols-[1fr_1.4fr_1fr] md:gap-8 lg:px-12 lg:py-12">
          {/* LOGO */}
        <motion.a
  href="/"
  aria-label="IBS Canada home"
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="group flex items-center justify-center md:justify-start"
>
  <div className="relative rounded-xl border border-white/[0.08] bg-white/[0.035] p-3 transition-all duration-300 group-hover:border-[#087F8C]/40 group-hover:bg-white/[0.06]">
    <div className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-[#087F8C]/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

    <img
      src="/logo/logo.jpg"
      alt="IBS Canada"
      className="h-[68px] max-w-[250px] object-contain"
    />
  </div>
</motion.a>

          {/* ADDRESS */}
    <motion.div
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="flex w-full min-w-0 items-start justify-start gap-4"
>
  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#087F8C]/25 bg-[#087F8C]/10 text-[#55C4CA]">
    <MapPin className="h-5 w-5" strokeWidth={1.8} />
  </div>

  <div className="min-w-0 flex-1">
    <div className="mb-2 flex items-center gap-2">
      <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#55C4CA]" />

      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#55C4CA]">
        Visit Our Office
      </p>
    </div>

    <address className="w-full not-italic text-[13px] font-medium leading-[1.9] text-white/70 sm:text-[14px]">
      EPR Yellowknife Building, P.O. Box 20072, 2nd Floor,
      4910 – 50th Street, Yellowknife, NT X1A 3X8
    </address>
  </div>
</motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-4 md:items-end"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
              Connect With Us
            </p>

            <div className="flex items-center gap-3">
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.25 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/[0.12] bg-white/[0.045] text-white/75 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-[#087F8C]/60 hover:bg-[#087F8C]/15 hover:text-[#70D6DB]"
                >
                  <span className="pointer-events-none absolute inset-x-2 bottom-0 h-[2px] scale-x-0 bg-[#55C4CA] transition-transform duration-300 group-hover:scale-x-100" />
                  <SocialIcon type={social.type} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="relative">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-3 py-6 pr-0 text-center sm:flex-row sm:pr-14 sm:text-left">
            <p className="text-[11px] font-medium leading-5 text-white/50 sm:text-[12px]">
              © {year} Integrated Business Solutions. All rights reserved.
            </p>

            <p className="text-[11px] font-medium leading-5 text-white/50 sm:text-[12px]">
              Website Designed &amp; Maintained By{" "}
              <a
                href="https://gtmcanada.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/80 transition-colors duration-200 hover:text-[#55C4CA]"
              >
                GTM Canada
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* BACK TO TOP */}
      <motion.button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        whileHover={{ y: -4, scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#D52B1E] text-white shadow-[0_8px_30px_rgba(213,43,30,0.28)] transition-colors duration-300 hover:bg-[#B92319] sm:bottom-5 sm:right-8 sm:h-[50px] sm:w-[50px]"
      >
        <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
      </motion.button>
    </footer>
  );
}
