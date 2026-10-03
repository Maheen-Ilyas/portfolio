"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Security Wrapper",
    category: "Cybersecurity · Desktop",
    year: "2026",
    description:
      "Zero-dependency desktop application automating security policy injection into mobile apps via binary modification.",
    tech: ["FastAPI", "Python", "PyQt6", "Smali", "Apktool"],
  },
  {
    id: "02",
    title: "NomosAI",
    category: "Artificial Intelligence · RAG",
    year: "2025",
    description:
      "Legal AI research assistant querying thousands of legal documents with Hybrid Search and Top-8 context retrieval.",
    tech: ["LangChain", "Hugging Face", "ChromaDB", "Llama3"],
  },
  {
    id: "03",
    title: "PawPal",
    category: "Mobile Application · AI",
    year: "2024",
    description:
      "Pet care platform featuring AI emergency assistance via Gemini API and interactive vet discovery.",
    tech: ["Dart", "Flutter", "Firebase", "Gemini AI"],
  },
  {
    id: "04",
    title: "Driver Detection",
    category: "Deep Learning · CV",
    year: "2024",
    description:
      "CNN-based computer vision system classifying driver behavior with MobileNetV2.",
    tech: ["Python", "TensorFlow", "MobileNetV2"],
  },
];

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId)!;

  return (
    <section
      id="projects"
      className="py-28 px-6 md:px-12 bg-primary rounded-t-[2.5rem] md:rounded-t-[4rem] relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-0 right-0 w-120 h-120 rounded-full bg-secondary/30 blur-[120px]"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 className="group font-sans text-4xl md:text-6xl font-extrabold tracking-tighter uppercase leading-none text-white">
            <span data-redact="light">Built Along</span>
            <span className="font-serif italic font-normal normal-case ml-3 text-secondary-fixed-dim">
              the way
            </span>
          </h2>
          <p className="text-sm rounded-full px-4 py-1.5 self-start md:self-auto bg-white/10 text-secondary-fixed">
            4 projects · 2024–2026
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* List */}
          <div className="lg:col-span-7 flex flex-col border-t border-white/15">
            {projects.map((p) => {
              const on = p.id === activeId;
              return (
                <div
                  key={p.id}
                  onMouseEnter={() => setActiveId(p.id)}
                  onClick={() => setActiveId(p.id)}
                  data-cursor="Inspect"
                  className={`cursor-pointer py-7 px-4 -mx-4 border-b border-white/15 rounded-2xl transition-colors ${on ? "bg-white/8" : ""}`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3
                      className={`font-sans text-3xl md:text-5xl font-extrabold tracking-tighter transition-colors ${on ? "text-secondary-fixed-dim" : "text-white"}`}
                    >
                      {p.title}
                    </h3>
                    <span className="text-sm text-white/50 shrink-0">
                      {p.year}
                    </span>
                  </div>
                  <p className="font-serif italic text-lg text-secondary-fixed/70 mt-1">
                    {p.category}
                  </p>

                  {/* Mobile detail */}
                  <div className="lg:hidden mt-4 text-white/80 text-sm leading-relaxed">
                    {p.description}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs rounded-full border border-white/25 px-2.5 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Viewer (desktop) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.96, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.96, rotate: 2 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                  className="rounded-4xl bg-surface-low p-6 shadow-2xl shadow-black/30"
                >
                  <div className="aspect-4/3 rounded-2xl bg-linear-to-br from-secondary via-brand-mid to-tertiary flex items-center justify-center mb-6">
                    <span className="font-sans text-8xl font-extrabold text-white/30 tracking-tighter">
                      {active.id}
                    </span>
                  </div>
                  <p className="text-primary leading-relaxed mb-5">
                    {active.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs rounded-full bg-secondary-fixed text-brand-mid px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <p className="font-serif italic text-secondary-fixed/70 mt-12 text-lg">
          <span
            className="text-secondary-container not-italic font-bold text-2xl align-middle mr-2"
            data-cursor="Steal"
          >
            *
          </span>
          Four exhibits. All admissible.
        </p>
      </div>
    </section>
  );
}
