"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  UsersRound,
  Mail,
} from "lucide-react";

export default function ServiceFooter({
  reduceMotion = false,
}) {
  const cards = [
    {
      title: "About IBS",
      icon: Building2,
      href: "/about",
    },
    {
      title: "Our Services",
      icon: GraduationCap,
      href: "/services/education-training",
    },
    {
      title: "Our Team",
      icon: UsersRound,
      href: "/team",
    },
    {
      title: "Contact Us",
      icon: Mail,
      href: "/contact",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#081B31] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
      {/* Decorative Orbit */}

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-[120px] -top-[180px] h-[500px] w-[500px] rounded-full border border-[#087F8C]/10"
      />

      <div className="absolute left-1/2 top-[30%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#087F8C]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        <div className="text-center">
          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C6A15B]">
            Continue the conversation
          </span>

          <h2 className="mx-auto mt-7 max-w-[900px] text-[54px] font-medium leading-[0.88] tracking-[-0.07em] text-white sm:text-[78px] lg:text-[96px]">
            Let's create

            <span className="text-[#087F8C]">
              {" "}something
            </span>

            <br />

            meaningful.
          </h2>

          <p className="mx-auto mt-7 max-w-[600px] text-[14px] leading-[1.8] text-white/40 sm:text-[16px]">
            Discover how IBS can help create meaningful
            opportunities, stronger organizations and
            lasting impact.
          </p>
        </div>

        {/* Navigation Cards */}

        <div className="mt-16 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
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
                  delay: index * 0.08,
                }}
              >
                <Link
                  href={card.href}
                  className="group relative flex min-h-[170px] flex-col justify-between border-r border-white/10 p-6 transition-all duration-500 hover:bg-[#0B1F3A]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A15B]/50 text-[#C6A15B] transition-all duration-500 group-hover:bg-[#C6A15B] group-hover:text-[#0B1F3A]">
                    <Icon
                      size={20}
                      strokeWidth={0.5}
                    />
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                        Navigate
                      </span>

                      <h3 className="mt-2 text-[16px] font-medium text-white">
                        {card.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-[#087F8C] transition-colors group-hover:text-[#C6A15B]"
                    />
                  </div>

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C6A15B] transition-all duration-500 group-hover:w-full" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <div>
            <span className="text-[13px] font-semibold tracking-[0.2em] text-white">
              IBS
            </span>

            <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/25">
              Innovative Business Solutions
            </p>
          </div>

          <p className="text-[9px] uppercase tracking-[0.16em] text-white/25">
            Building meaningful futures together.
          </p>
        </div>
      </div>
    </section>
  );
}