"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopNavigation from "./Components/TopNavigation";
import BottomNavigation from "./Components/BottomNavigation";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import ContactDrawer from "./Components/ContactDrawer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-1000 pointer-events-none flex items-center justify-center"
            style={{ background: "var(--ink)" }}
          >
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <div
                className="w-10 h-10 border-2 border-t-transparent rounded-full animate-spin"
                style={{ borderColor: "var(--red)", borderTopColor: "transparent" }}
              />
              <p className="font-sans text-xs uppercase tracking-widest" style={{ color: "rgba(245,240,232,0.5)" }}>
                Loading…
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col" style={{ background: "var(--cream)", color: "var(--ink)" }}>
        <TopNavigation scrolled={scrolled} />

        <main className="flex-1">
          <Hero />

          <div className="relative z-10">
            <About />
            <Experience />
            <Projects />

            {/* ── BROADSHEET FOOTER ── */}
            <motion.footer
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="border-t relative overflow-hidden"
              style={{ borderColor: "var(--rule)", background: "var(--cream)" }}
            >
              {/* Red top rule */}
              <div style={{ height: "4px", background: "var(--red)" }} />

              {/* Masthead repeat */}
              <div
                className="w-full flex flex-col items-center py-8 border-b px-6 md:px-12"
                style={{ borderColor: "var(--rule)" }}
              >
                <p
                  className="masthead-title text-2xl md:text-4xl tracking-wide text-center"
                  style={{ color: "var(--ink)", fontFamily: "var(--font-fraktur, 'Playfair Display', serif)" }}
                >
                  Maheen Ilyas
                </p>
                <p
                  className="font-sans text-[10px] tracking-[0.3em] uppercase mt-1"
                  style={{ color: "var(--ink-faded)" }}
                >
                  Software Engineer · AI Researcher
                </p>
              </div>

              {/* CTA */}
              <div className="px-6 md:px-12 py-16 md:py-24 text-center relative">
                <h2
                  className="font-serif text-4xl md:text-6xl font-black mb-4 tracking-tight leading-tight text-balance"
                  style={{ color: "var(--ink)" }}
                >
                  Let&apos;s build something<br className="hidden md:block" /> extraordinary.
                </h2>
                <p
                  className="font-sans text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
                  style={{ color: "var(--ink-faded)" }}
                >
                  Whether it&apos;s building with AI, designing seamless apps, or just geeking out over ideas —
                  I&apos;d love to connect and see what we can create together.
                </p>

                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="group relative inline-flex items-center gap-2 text-xl font-sans font-semibold uppercase tracking-widest px-10 py-5 border-2 rounded-none transition-all duration-300 overflow-hidden"
                  style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "var(--ink)";
                    (e.currentTarget as HTMLElement).style.color = "var(--cream)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                  }}
                >
                  <span className="group-hover:-translate-y-10 transition-transform duration-400 block">Get in touch</span>
                  <span className="group-hover:-translate-y-10 transition-transform duration-400 block">→</span>
                </button>

                {/* Decorative background text */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black whitespace-nowrap pointer-events-none tracking-tighter select-none"
                  style={{ color: "rgba(26,26,26,0.03)", fontFamily: "var(--font-serif)" }}
                >
                  HELLO WORLD
                </div>
              </div>

              {/* Bottom rule + copyright */}
              <div
                className="px-6 md:px-12 py-4 border-t flex justify-between items-center"
                style={{ borderColor: "var(--rule)" }}
              >
                <p className="dateline">© 2026 Maheen Ilyas. All rights reserved.</p>
                <p className="dateline">mahilyaos05@gmail.com</p>
              </div>
            </motion.footer>
          </div>
        </main>

        <BottomNavigation scrolled={scrolled} onContactClick={() => setIsDrawerOpen(true)} />
        <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      </div>
    </>
  );
}
