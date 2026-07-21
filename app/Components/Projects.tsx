"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        id: "01",
        title: "Security Wrapper",
        category: "Cybersecurity · Desktop",
        dates: "Apr 2026 – May 2026",
        lead: "Zero-dependency application for deploying 100% portable executables.",
        description:
            "Accomplishes security injection by modifying Android & iOS apps without source code, implementing 19 security features. Secured multi-vendor tracking by enforcing strict subscription limits via a secure FastAPI backend.",
        tech: ["Next.js", "FastAPI", "Python", "PyQt6", "Smali", "Apktool", "Dylib", "PyInstaller"],
        featured: true,
    },
    {
        id: "02",
        title: "NomosAI",
        category: "Artificial Intelligence",
        dates: "Feb 2025 – Apr 2025",
        lead: "High-precision legal research assistant powered by RAG and hybrid search.",
        description:
            "Queries thousands of legal documents using hybrid search (Semantic + Keyword). Features recursive character chunking, top-8 context retrieval, and a modular CBAC web interface supporting concurrent user collaboration.",
        tech: ["Next.js", "FastAPI", "LangChain", "Hugging Face", "ChromaDB", "Llama3.9", "PostgreSQL"],
        featured: true,
    },
    {
        id: "03",
        title: "PawPal",
        category: "Mobile Application",
        dates: "2024",
        lead: "All-in-one pet care platform with AI emergency assistance.",
        description:
            "Features medication tracking, an emergency veterinary locator using OpenStreetMap, and an AI-powered Emergency Guide leveraging the Gemini API.",
        tech: ["Dart", "Flutter", "Firebase", "GetX", "Gemini AI", "OpenStreetMap", "Overpass"],
        featured: false,
    },
    {
        id: "04",
        title: "Distracted Driver Detection",
        category: "Deep Learning",
        dates: "Jul 2024 – Aug 2024",
        lead: "CNN-based classification system using MobileNetV2 with 80.43% precision.",
        description:
            "Classifies driver behaviour into 10 categories. Engineered with two-phase fine-tuning on 17,446 training images and lighting-invariant data augmentation strategies.",
        tech: ["Python", "TensorFlow", "MobileNetV2", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
        featured: false,
    },
];

export default function Projects() {
    const [activeTab, setActiveTab] = useState<number | null>(null);

    return (
        <section
            id="projects"
            className="border-t"
            style={{ borderColor: "var(--rule)", background: "var(--cream)" }}
        >
            {/* Section header bar */}
            <div
                className="px-6 md:px-12 py-4 flex items-center justify-between border-b"
                style={{ borderColor: "var(--rule)" }}
            >
                <p className="section-label">04 / Projects</p>
                <div className="flex-1 mx-6 border-t" style={{ borderColor: "var(--rule)" }} />
                <p className="dateline">Built Along the Way</p>
            </div>

            {/* Headline section */}
            <div
                className="px-6 md:px-12 py-10 md:py-16 border-b"
                style={{ borderColor: "var(--rule)" }}
            >
                <div className="max-w-4xl">
                    <p className="dateline mb-2">Featured Dispatch & Portfolio</p>
                    <h1
                        className="font-serif text-4xl md:text-6xl font-black tracking-tight leading-tight"
                        style={{ color: "var(--ink)" }}
                    >
                        Built Along the Way.
                    </h1>
                </div>
            </div>

            {/* Editorial Grid — Broadsheet 2-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {projects.map((project, index) => {
                    const isExpanded = activeTab === index;
                    const isRightColumn = index % 2 !== 0;
                    const isLastRow = index >= projects.length - 2;

                    return (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`p-6 md:p-10 flex flex-col justify-between transition-all duration-300 relative group ${
                                !isRightColumn ? "md:border-r" : ""
                            } ${!isLastRow ? "border-b" : "border-b md:border-b-0"}`}
                            style={{
                                borderColor: "var(--rule)",
                                background: isExpanded ? "var(--paper)" : "transparent",
                            }}
                        >
                            <div>
                                {/* Top Rule & Category */}
                                <div className="flex items-center justify-between mb-4">
                                    <span
                                        className="section-label"
                                        style={{ color: "var(--red)" }}
                                    >
                                        ART. {project.id} · {project.category}
                                    </span>
                                    <span className="dateline">{project.dates}</span>
                                </div>

                                <div
                                    className="column-rule mb-6"
                                    style={{
                                        borderTopWidth: "3px",
                                        borderTopStyle: "double",
                                        borderColor: "var(--ink)",
                                    }}
                                />

                                {/* Project Title */}
                                <h2
                                    className="font-serif text-3xl md:text-4xl font-black tracking-tight mb-3 group-hover:text-[var(--red)] transition-colors duration-300"
                                    style={{ color: "var(--ink)" }}
                                >
                                    {project.title}
                                </h2>

                                {/* Lead sentence */}
                                <p
                                    className="font-serif italic text-lg leading-snug mb-4"
                                    style={{ color: "var(--ink)" }}
                                >
                                    &ldquo;{project.lead}&rdquo;
                                </p>

                                {/* Description */}
                                <p
                                    className="font-sans text-sm md:text-base leading-relaxed mb-6"
                                    style={{ color: "var(--ink-faded)" }}
                                >
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack Tags */}
                            <div>
                                <div
                                    className="column-rule-thin mb-4"
                                    style={{ borderColor: "var(--rule)" }}
                                />
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="dateline mr-2">Reported Stack:</span>
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="tag-pill text-[10px]"
                                            style={{
                                                borderColor: "rgba(26,26,26,0.2)",
                                                color: "var(--ink)",
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
}