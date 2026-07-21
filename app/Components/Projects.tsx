"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        id: "01",
        title: "Security Wrapper",
        category: "Cybersecurity · Desktop",
        dates: "Apr 2026 – May 2026",
        badge: "19 Security Features · 100% Portable",
        lead: "Zero-dependency desktop application automating security policy injection into mobile apps.",
        description:
            "Accomplishes security policy injection by modifying Android & iOS binaries (APKs/IPAs) without source code access using Apktool for Smali and Info.plist patching. Built a secure FastAPI backend to enforce strict subscription limits and multi-vendor tracking.",
        highlights: [
            "100% portable executable with PyInstaller & PyQt6",
            "Zero-dependency binary modification architecture",
            "FastAPI backend with strict subscription limits",
        ],
        tech: ["Next.js", "FastAPI", "Python", "PyQt6", "Smali", "Apktool", "Dylib", "PyInstaller"],
    },
    {
        id: "02",
        title: "NomosAI",
        category: "Artificial Intelligence · RAG",
        dates: "Feb 2025 – Apr 2025",
        badge: "RAG Hybrid Search · Top-8 Context",
        lead: "Legal AI research assistant querying thousands of legal documents in seconds.",
        description:
            "Co-developed a RAG pipeline leveraging LangChain, Hugging Face, and ChromaDB. Implements recursive character chunking and hybrid search (Semantic + Keyword) with top-8 context retrieval to maximize answer relevance. Architected a modular web interface with Case-Based Access Control (CBAC).",
        highlights: [
            "Hybrid Search (Semantic + Keyword) for legal docs",
            "Recursive character chunking & top-8 reranking",
            "CBAC multi-tenant access control for 5+ concurrent users",
        ],
        tech: ["Next.js", "FastAPI", "LangChain", "Hugging Face", "ChromaDB", "Llama3.9", "PostgreSQL"],
    },
    {
        id: "03",
        title: "PawPal",
        category: "Mobile Application · AI",
        dates: "2024",
        badge: "Gemini API · Emergency Locator",
        lead: "All-in-one pet care platform featuring AI emergency assistance and vet discovery.",
        description:
            "Integrated medication tracking, interactive emergency veterinary locator using OpenStreetMap & Overpass, and an AI-powered Emergency Guide leveraging Gemini API for immediate pet care guidance.",
        highlights: [
            "AI Emergency Guide powered by Gemini API",
            "Real-time vet locator via OpenStreetMap & Overpass",
            "Pet medication tracking & reminder system",
        ],
        tech: ["Dart", "Flutter", "Firebase", "GetX", "Gemini AI", "OpenStreetMap", "Overpass"],
    },
    {
        id: "04",
        title: "Distracted Driver Detection",
        category: "Deep Learning · Computer Vision",
        dates: "Jul 2024 – Aug 2024",
        badge: "80.43% Precision · 17,446 Images",
        lead: "CNN-based computer vision system classifying driver behavior into 10 categories.",
        description:
            "Assembled a CNN model using MobileNetV2, achieving 80.35% accuracy and 80.43% precision. Fine-tuned on 17,446 training images with data augmentation and lighting-invariant training strategies for complex real-world driving environments.",
        highlights: [
            "MobileNetV2 architecture with 2-phase fine-tuning",
            "Trained on 17,446 augmented driver behavior images",
            "Lighting-invariant strategies improving complex F1-scores",
        ],
        tech: ["Python", "TensorFlow", "MobileNetV2", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
    },
];

function ProjectFlipCard({ project }: { project: typeof projects[0] }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full h-[480px] md:h-[460px] cursor-pointer perspective-1000 group"
            onClick={() => setIsFlipped(!isFlipped)}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
                {/* ── FRONT OF CARD ── */}
                <div
                    className="absolute inset-0 backface-hidden p-6 md:p-8 flex flex-col justify-between border-2 rounded-sm transition-shadow duration-300"
                    style={{
                        background: "var(--paper)",
                        borderColor: isFlipped ? "var(--cobalt)" : "var(--rule)",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                    }}
                >
                    {/* Top Bar */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <span className="section-label" style={{ color: "var(--cobalt)" }}>
                                ART. {project.id} · {project.category}
                            </span>
                            <span className="dateline">{project.dates}</span>
                        </div>

                        <div className="column-rule mb-5" style={{ borderTopWidth: "3px", borderTopStyle: "double", borderColor: "var(--ink)" }} />

                        {/* Title */}
                        <h3 className="font-serif text-3xl md:text-4xl font-black tracking-tight mb-3 group-hover:text-[var(--cobalt)] transition-colors">
                            {project.title}
                        </h3>

                        {/* Lead */}
                        <p className="font-serif italic text-base md:text-lg leading-snug mb-4" style={{ color: "var(--ink)" }}>
                            &ldquo;{project.lead}&rdquo;
                        </p>
                    </div>

                    {/* Highlights Badge & Flip CTA */}
                    <div>
                        {/* Highlight Badge */}
                        <div
                            className="px-3 py-2 rounded-sm border mb-4 inline-flex items-center gap-2"
                            style={{ background: "var(--cobalt-bg)", borderColor: "rgba(29, 78, 216, 0.2)" }}
                        >
                            <span className="text-xs" style={{ color: "var(--cobalt)" }}>✦</span>
                            <span className="font-sans text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--cobalt)" }}>
                                {project.badge}
                            </span>
                        </div>

                        <div className="column-rule-thin mb-3" style={{ borderColor: "var(--rule)" }} />

                        <div className="flex items-center justify-between">
                            <span className="dateline text-[10px]">TAP OR HOVER FOR DETAILS</span>
                            <span
                                className="font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                                style={{ color: "var(--cobalt)" }}
                            >
                            </span>
                        </div>
                    </div>
                </div>

                {/* ── BACK OF CARD ── */}
                <div
                    className="absolute inset-0 backface-hidden p-6 md:p-8 flex flex-col justify-between rounded-sm"
                    style={{
                        transform: "rotateY(180deg)",
                        background: "#0F172A",
                        color: "#F8FAFC",
                        border: "2px solid var(--cobalt)",
                        boxShadow: "0 20px 40px rgba(29, 78, 216, 0.25)",
                    }}
                >
                    {/* Header */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-blue-400">
                                {project.category}
                            </span>
                            <span className="font-sans text-[10px] uppercase tracking-widest opacity-60 text-slate-300">
                                {project.dates}
                            </span>
                        </div>
                        <div className="h-0.5 w-full bg-blue-500/30 mb-4" />

                        <h3 className="font-serif text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
                            {project.title}
                        </h3>

                        <p className="font-sans text-xs md:text-sm leading-relaxed text-slate-300 mb-4">
                            {project.description}
                        </p>
                    </div>

                    {/* Key Accomplishments & Tech Stack */}
                    <div>
                        <div className="mb-3 space-y-1.5">
                            {project.highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                                    <span className="text-blue-400 font-bold">✓</span>
                                    <span>{h}</span>
                                </div>
                            ))}
                        </div>

                        <div className="h-0.5 w-full bg-blue-500/30 mb-3" />

                        <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="font-sans text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-blue-500/10 text-blue-300 border border-blue-500/30"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="border-t"
            style={{ borderColor: "var(--rule)", background: "var(--cream)" }}
        >
            {/* Section Header Bar */}
            <div
                className="px-6 md:px-12 py-4 flex items-center justify-between border-b"
                style={{ borderColor: "var(--rule)" }}
            >
                <p className="section-label">04 / Projects</p>
                <div className="flex-1 mx-6 border-t" style={{ borderColor: "var(--rule)" }} />
                <p className="dateline">Built Along the Way</p>
            </div>

            {/* Headline Section */}
            <div
                className="px-6 md:px-12 py-10 md:py-14 border-b"
                style={{ borderColor: "var(--rule)" }}
            >
                <div className="max-w-4xl">
                    <p className="dateline mb-2">Featured Dispatch & Engineering Portfolio</p>
                    <h1
                        className="font-serif text-4xl md:text-6xl font-black tracking-tight leading-tight"
                        style={{ color: "var(--ink)" }}
                    >
                        Built Along the Way.
                    </h1>
                </div>
            </div>

            {/* 3D Flip Card Grid */}
            <div className="px-6 md:px-12 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project) => (
                        <ProjectFlipCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}