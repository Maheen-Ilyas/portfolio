"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TopNavigation from "./Components/TopNavigation";
import BottomNavigation from "./Components/BottomNavigation";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col bg-background text-foreground">
      <TopNavigation scrolled={scrolled} />

      <main className="flex-1">
        <Hero />

        <div className="px-6 md:px-24 bg-white relative z-10">
          <About />
          <Experience />
          <Projects />

          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-32 border-t border-foreground/5 text-center"
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-4 tracking-tighter text-black leading-tight">Let's build something <br /> extraordinary.</h2>
            <p className="text-xl text-black/60 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether it’s building with AI, designing seamless apps, or just geeking out over ideas — I’d love to connect and see what we can create together.
            </p>
            <a href="mailto:mahilyas05@gmail.com" className="group inline-flex items-center gap-2 text-xl px-10 py-5 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300">
              Get in touch
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
             <p className="text-center text-black/50 text-sm mt-8">© 2026 Maheen Ilyas. All rights reserved.</p>
          </motion.footer>
        </div>
      </main>

      <BottomNavigation scrolled={scrolled} />
    </div>
  );
}
