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
            className="fixed inset-0 z-[1000] bg-black pointer-events-none flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col bg-background text-foreground">
        <TopNavigation scrolled={scrolled} />

        <main className="flex-1">
          <Hero />

          <div className="px-6 md:px-24 bg-white relative z-10">
            <About />
            <Experience />
            <Projects />

            <motion.footer
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)", y: 20 }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="py-24 md:py-32 border-t border-foreground/5 text-center relative overflow-hidden group/footer"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-4 tracking-tighter text-black leading-tight text-balance">Let's build something <br className="hidden md:block" /> extraordinary.</h2>
              <p className="text-lg md:text-xl text-black/60 mb-8 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
                Whether it’s building with AI, designing seamless apps, or just geeking out over ideas — I’d love to connect and see what we can create together.
              </p>

              <button
                onClick={() => setIsDrawerOpen(true)}
                className="group relative inline-flex items-center gap-2 text-2xl px-10 py-5 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="group-hover:-translate-y-12 transition-transform duration-500 block">Get in touch</span>
                  <span className="group-hover:-translate-y-12 transition-transform duration-500 block">→</span>
                </span>
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 text-white cursor-pointer pointer-events-none">
                  <span>Say Hello ☕️</span>
                </span>
              </button>

              <p className="text-center text-black/50 text-md mt-8">© 2026 Maheen Ilyas. All rights reserved.</p>

              {/* Easter Egg Background Text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-black/[0.02] whitespace-nowrap pointer-events-none tracking-tighter mix-blend-multiply select-none group-hover/footer:scale-110 transition-transform duration-1000">
                HELLO WORLD
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
