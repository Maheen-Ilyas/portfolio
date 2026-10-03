"use client";
import { motion } from "framer-motion";

export default function Hero({
  onContactClick,
}: {
  onContactClick: () => void;
}) {
  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Soft purple orbs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -right-24 w-136 h-136 rounded-full bg-secondary-fixed-dim/60 blur-[100px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-24 w-104 h-104 rounded-full bg-secondary-container/25 blur-[100px]"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-sans text-6xl md:text-[9rem] font-extrabold leading-[0.92] tracking-tighter uppercase"
        >
          <span className="block overflow-hidden pb-2">
            <motion.span
              className="block text-primary"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              I engineer
            </motion.span>
          </span>
          <span className="flex items-start gap-3 overflow-hidden pb-2">
            <motion.span
              className="block bg-linear-to-r from-secondary via-secondary-container to-brand-mid bg-clip-text text-transparent"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Intelligence
            </motion.span>
            <span
              className="text-secondary text-4xl md:text-7xl cursor-pointer"
              data-cursor="Steal"
            >
              *
            </span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12"
        >
          <p className="font-serif text-xl md:text-2xl text-on-surface-variant max-w-lg leading-relaxed">
            Software engineer and AI researcher building retrieval systems,
            mobile apps, and tools that make complex things simple.
          </p>
          <div className="flex gap-3">
            <a
              href="#projects"
              data-cursor="View"
              className="rounded-full bg-primary text-white px-7 py-3.5 text-sm font-medium hover:bg-secondary transition-colors"
            >
              View projects
            </a>
            <button
              onClick={onContactClick}
              data-cursor="Write"
              className="rounded-full border border-primary/20 text-primary px-7 py-3.5 text-sm font-medium hover:bg-secondary-fixed transition-colors"
            >
              Get in touch
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-12 flex flex-col gap-2 items-center z-10"
      >
        <span
          className="text-xs text-outline"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-outline-variant relative overflow-hidden">
          <div className="absolute inset-0 bg-secondary animate-[scrollLine_2s_infinite_ease-in-out]" />
        </div>
      </motion.div>
    </section>
  );
}
