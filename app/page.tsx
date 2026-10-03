"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopNavigation from "./Components/TopNavigation";
import BottomNavigation from "./Components/BottomNavigation";
import ContactDrawer from "./Components/ContactDrawer";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.2 } }}
            className="fixed inset-0 z-10002 pointer-events-none flex items-center justify-center bg-primary"
          >
            <span className="font-serif italic text-2xl text-secondary-fixed animate-pulse">
              Loading…
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <TopNavigation />
      <BottomNavigation onContactClick={() => setContactOpen(true)} />
      <ContactDrawer
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <main className="w-full">
        <Hero onContactClick={() => setContactOpen(true)} />
        <About />
        <Experience />
        <Projects />

        {/* ── CONTACT ── */}
        <section id="contact" className="py-28 px-6 md:px-12 bg-surface-low">
          <div className="max-w-7xl mx-auto">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
              <h2 className="group font-sans text-4xl md:text-6xl font-extrabold tracking-tighter uppercase leading-none text-primary">
                <span data-redact>Contact</span>
                <span className="font-serif italic font-normal normal-case ml-3 text-secondary">
                  the vault
                </span>
              </h2>
              <p className="text-sm rounded-full px-4 py-1.5 self-start md:self-auto bg-secondary-fixed/60 text-brand-mid">
                Open 24/7
              </p>
            </header>

            <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-primary via-primary-container to-tertiary-container text-white p-8 md:p-16">
              <div
                aria-hidden
                className="absolute -top-32 -right-32 w-md h-112 rounded-full bg-secondary/40 blur-[100px]"
              />
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-7">
                  <h3 className="font-sans text-4xl md:text-7xl font-extrabold tracking-tighter leading-[0.98] mb-6">
                    Let&apos;s execute
                    <br />
                    <span className="font-serif italic font-normal text-secondary-fixed-dim">
                      the next plan.
                    </span>
                  </h3>
                  <p className="text-lg text-secondary-fixed/80 max-w-md mb-8">
                    Looking for a developer to build intelligent, scalable
                    systems? The vault is open. Drop a message.
                  </p>
                  <button
                    onClick={() => setContactOpen(true)}
                    data-cursor="Write"
                    className="rounded-full bg-white text-primary px-8 py-4 text-sm font-semibold hover:bg-secondary-fixed transition-colors"
                  >
                    Send a message
                  </button>
                </div>

                <dl className="lg:col-span-5 divide-y divide-white/15 border-y border-white/15">
                  {[
                    {
                      dt: "Email",
                      label: "mahilyaos05@gmail.com",
                      href: "mailto:mahilyaos05@gmail.com",
                    },
                    {
                      dt: "LinkedIn",
                      label: "maheen-ilyas",
                      href: "https://linkedin.com/in/maheen-ilyas",
                    },
                    {
                      dt: "GitHub",
                      label: "Maheen-Ilyas",
                      href: "https://github.com/Maheen-Ilyas",
                    },
                  ].map((c) => (
                    <div key={c.dt} className="flex justify-between gap-4 py-4">
                      <dt className="text-secondary-fixed-dim text-sm">
                        {c.dt}
                      </dt>
                      <dd>
                        <a
                          href={c.href}
                          target={
                            c.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className="hover:text-secondary-fixed-dim transition-colors"
                          data-cursor="Open"
                        >
                          {c.label}
                        </a>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 pb-28 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-outline">
          <p>© 2026 Maheen Ilyas. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
