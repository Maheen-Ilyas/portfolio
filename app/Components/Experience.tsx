"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    id: "eswift",
    role: "Software Engineer",
    company: "eSwiftSoftware",
    year: "Apr 2026 – Jul 2026",
    details:
      "Led the end-to-end development of a zero-dependency desktop application automating security policy injection into pre-compiled mobile apps without source code access. Spearheaded the architectural design for an upcoming enterprise data warehouse, focusing on centralising cross-platform analytics and designing scalable ETL pipelines.",
    tags: ["FastAPI", "Python", "ETL", "Security"],
  },
  {
    id: "repsoft",
    role: "Software Engineering Intern",
    company: "Repsoft Consultancy Services",
    year: "Jun 2024 – Sep 2024",
    details:
      "Engineered and optimised Flutter applications to enhance UI responsiveness and considerably improve user satisfaction. Partnered with design teams to implement intuitive UI/UX components for 3 applications with over 20 screens each.",
    tags: ["Flutter", "Dart", "UI/UX", "Mobile"],
  },
  {
    id: "gdg",
    role: "Chief Coordinator",
    company: "GDG on Campus",
    year: "Sep 2024 – Jul 2025",
    details:
      "Led the Google Developer Groups on Campus chapter, organizing workshops, hackathons, and technical sessions for hundreds of students. Managed a core team of developers to build community-driven projects.",
    tags: ["Leadership", "Community", "Event Management"],
  },
];

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>("eswift");

  return (
    <section id="experience" className="py-28 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 className="group font-sans text-4xl md:text-6xl font-extrabold tracking-tighter uppercase leading-none text-primary">
            <span data-redact>The</span>
            <span className="font-serif italic font-normal normal-case ml-3 text-secondary">
              Chapters
            </span>
          </h2>
          <p className="text-sm rounded-full px-4 py-1.5 self-start md:self-auto bg-secondary-fixed/60 text-brand-mid">
            Software · AI · Community
          </p>
        </header>

        <div className="flex flex-col gap-4">
          {experiences.map((exp) => {
            const open = openId === exp.id;
            return (
              <div
                key={exp.id}
                className={`rounded-[1.75rem] border transition-colors ${open ? "bg-secondary-fixed/40 border-secondary-fixed-dim" : "bg-surface-low border-outline-variant/50 hover:border-secondary-container"}`}
              >
                <h3>
                  <button
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 group"
                    onClick={() => setOpenId(open ? null : exp.id)}
                    aria-expanded={open}
                    data-cursor={open ? "Close" : "Open"}
                  >
                    <span className="flex flex-col gap-1">
                      <span className="font-sans text-2xl md:text-3xl font-extrabold tracking-tighter text-primary group-hover:text-secondary transition-colors">
                        {exp.role}
                      </span>
                      <span className="font-serif italic text-lg text-on-surface-variant">
                        {exp.company}
                      </span>
                    </span>
                    <span className="flex items-center gap-4 shrink-0">
                      <span className="hidden md:block text-sm text-brand-mid bg-secondary-fixed rounded-full px-3 py-1">
                        {exp.year}
                      </span>
                      <span
                        className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-colors ${open ? "bg-secondary" : "bg-primary"}`}
                      >
                        <span className="absolute w-4 h-px bg-white" />
                        <span
                          className={`absolute h-4 w-px bg-white transition-transform duration-300 ${open ? "rotate-90 opacity-0" : ""}`}
                        />
                      </span>
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8">
                        <p className="md:hidden text-sm text-brand-mid mb-3">
                          {exp.year}
                        </p>
                        <p className="text-on-surface-variant leading-relaxed max-w-3xl mb-6">
                          {exp.details}
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {exp.tags.map((t) => (
                            <li
                              key={t}
                              className="text-sm rounded-full bg-white border border-secondary-fixed-dim text-primary px-3 py-1"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <p className="font-serif italic text-on-surface-variant mt-10 text-lg">
          <span
            className="text-secondary not-italic font-bold text-2xl align-middle mr-2"
            data-cursor="Steal"
          >
            *
          </span>
          Three methods. One motive.
        </p>
      </div>
    </section>
  );
}
