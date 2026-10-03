"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", sub: "The Journey So Far", href: "#about" },
  { label: "Experience", sub: "The Chapters", href: "#experience" },
  { label: "Projects", sub: "Built Along the Way", href: "#projects" },
  { label: "Contact", sub: "The Vault", href: "#contact" },
];

export default function TopNavigation() {
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.documentElement.classList.remove("lenis-stopped");
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-4 inset-x-4 md:inset-x-8 z-50 flex items-center justify-between rounded-full bg-white/70 backdrop-blur-md border border-outline-variant/50 pl-2 pr-2 py-2">
        <a
          href="#hero"
          data-cursor="Home"
          className="flex items-center gap-3 font-sans font-bold text-primary"
        >
          <span className="w-9 h-9 rounded-full bg-primary text-white text-xs flex items-center justify-center">
            MI
          </span>
          <span className="hidden sm:inline text-sm">Maheen Ilyas</span>
        </a>

        <div className="hidden md:block text-xs text-outline tabular-nums">
          {time}
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          data-cursor="Open"
          className="flex items-center gap-3 rounded-full bg-primary text-white pl-5 pr-4 py-2.5 text-sm font-medium group hover:bg-secondary transition-colors"
        >
          Menu
          <span className="flex flex-col gap-1 w-5">
            <span className="h-px bg-white w-full ml-auto group-hover:w-1/2 transition-all duration-300" />
            <span className="h-px bg-white w-full ml-auto group-hover:w-3/4 transition-all duration-300" />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-100 bg-primary text-white flex flex-col overflow-hidden"
            data-lenis-prevent
          >
            <div
              aria-hidden
              className="absolute -bottom-40 -right-40 w-xl h-144 rounded-full bg-secondary/40 blur-[120px]"
            />

            <div className="relative flex items-center justify-between px-6 md:px-12 py-5 shrink-0">
              <span className="font-sans font-bold">Maheen Ilyas</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                data-cursor="Close"
                className="flex items-center gap-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors pl-5 pr-4 py-2.5 text-sm"
              >
                Close
                <span className="relative w-4 h-4">
                  <span className="absolute top-1/2 w-full h-px bg-white rotate-45" />
                  <span className="absolute top-1/2 w-full h-px bg-white -rotate-45" />
                </span>
              </button>
            </div>

            <div className="relative flex-1 flex flex-col md:flex-row min-h-0 overflow-y-auto">
              <nav className="flex-1 flex flex-col justify-center px-6 md:px-24 py-8">
                {navLinks.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    onClick={() => setIsMenuOpen(false)}
                    data-cursor="Go"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="group flex items-end gap-4 py-3 md:py-4 border-b border-white/15 hover:border-secondary-container transition-colors"
                  >
                    <span className="font-sans text-5xl md:text-7xl font-extrabold tracking-tighter group-hover:text-secondary-fixed-dim group-hover:translate-x-2 transition-all">
                      {l.label}
                    </span>
                    <span className="hidden md:block font-serif italic text-xl ml-auto mb-2 text-secondary-fixed/60 group-hover:text-secondary-fixed transition-colors">
                      {l.sub}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="w-full md:w-80 p-6 md:p-12 flex flex-col justify-between shrink-0 md:border-l border-white/15">
                <div>
                  <p className="text-sm text-secondary-fixed-dim mb-5">
                    Connect
                  </p>
                  <div className="flex flex-col gap-3 text-lg font-medium">
                    <a
                      href="mailto:mahilyaos05@gmail.com"
                      data-cursor="Email"
                      className="hover:text-secondary-fixed-dim transition-colors"
                    >
                      Email
                    </a>
                    <a
                      href="https://linkedin.com/in/maheen-ilyas"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="Connect"
                      className="hover:text-secondary-fixed-dim transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/Maheen-Ilyas"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="View"
                      className="hover:text-secondary-fixed-dim transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <p className="text-xs text-white/50 mt-10 md:mt-0">
                  © 2026 Maheen Ilyas. All rights reserved.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
