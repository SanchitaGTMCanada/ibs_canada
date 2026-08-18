"use client";

import { motion } from "motion/react";
import { Search, X } from "lucide-react";

export default function HeaderSearch({
  onClose,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="
        fixed
        inset-0
        z-[200]
        flex
        items-start
        justify-center
        bg-[#111111]/95
        px-7
        pt-[17vh]
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
        className="w-full max-w-[900px]"
      >

        <div className="mb-7 flex items-center justify-between">

          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#0CB8E6]">
            Search
          </span>

          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              text-white
              transition
              hover:border-[#0CB8E6]
              hover:text-[#0CB8E6]
            "
          >
            <X size={21} />
          </button>

        </div>

        <div className="flex items-center border-b-2 border-white/30">

          <Search
            size={32}
            className="mr-6 shrink-0 text-[#0CB8E6]"
          />

          <input
            autoFocus
            type="text"
            placeholder="Search here..."
            className="
              h-[100px]
              w-full
              bg-transparent
              text-[36px]
              font-medium
              text-white
              outline-none
              placeholder:text-white/30
              sm:text-[52px]
              md:text-[58px]
            "
          />

        </div>

        <p className="mt-6 text-[13px] text-white/40">
          Search IBS Group Canada
        </p>

      </motion.div>

    </motion.div>
  );
}