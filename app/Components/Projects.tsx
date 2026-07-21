"use client";
import { useState, useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Security Wrapper",
        category: "Cybersecurity · Desktop",
        dates: "Apr 2026 – May 2026",
        description:
            "Zero-dependency application for deploying 100% portable executables. Accomplishes security injection by modifying Android & iOS apps without source code, implementing 19 security features. Secured multi-vendor tracking by enforcing strict subscription limits via a secure FastAPI backend.",
        tech: ["Next.js", "FastAPI", "Python", "PyQt6", "Smali", "Apktool", "Dylib", "PyInstaller"],
    },
    {
        id: 2,
        title: "NomosAI",
        category: "Artificial Intelligence",
        dates: "Feb 2025 – Apr 2025",
        description:
            "A high-precision legal research assistant using RAG and hybrid search (Semantic + Keyword) to query thousands of legal documents. Features recursive character chunking, top-8 context retrieval, and a modular CBAC web interface supporting up to 5 concurrent users.",
        tech: ["Next.js", "FastAPI", "LangChain", "Hugging Face", "ChromaDB", "Llama3.9", "PostgreSQL"],
    },
    {
        id: 3,
        title: "PawPal",
        category: "Mobile Application",
        dates: "2024",
        description:
            "An all-in-one pet care platform featuring medication tracking, an emergency veterinary locator, and AI-powered Emergency Guide using the Gemini API.",
        tech: ["Dart", "Flutter", "Firebase", "GetX", "Gemini AI", "OpenStreetMap", "Overpass"],
    },
    {
        id: 4,
        title: "Distracted Driver Detection",
        category: "Deep Learning",
        dates: "Jul 2024 – Aug 2024",
        description:
            "A CNN-based system using MobileNetV2 to classify driver behaviour into 10 categories with 80.43% precision. Engineered with two-phase fine-tuning on 17,446 training images and lighting-invariant data augmentation.",
        tech: ["Python", "TensorFlow", "MobileNetV2", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

function ProjectCard({ project }: { project: typeof projects[0] }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            variants={cardVariants}
            className="relative cursor-pointer w-[85vw] md:w-[560px] h-[420px] md:h-[460px] shrink-0 mx-3 md:mx-6"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            style={{ perspective: "1200px" }}
        >
            <motion.div
                className="w-full h-full relative"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* ── Front – Newspaper clipping ── */}
                <div
                    className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 clipping-card rounded-sm"
                    style={{ backfaceVisibility: "hidden", background: "var(--cream)" }}
                >
                    {/* Top meta */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="section-label" style={{ color: "var(--red)" }}>
                                {String(project.id).padStart(2, "0")} / {project.category}
                            </span>
                            <span className="dateline">{project.dates}</span>
                        </div>
                        <div className="column-rule mb-6" style={{ borderTopWidth: "3px", borderTopStyle: "double", borderColor: "var(--ink)" }} />
                    </div>

                    {/* Headline */}
                    <div>
                        <h3
                            className="font-serif text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4"
                            style={{ color: "var(--ink)" }}
                        >
                            {project.title}
                        </h3>
                        <p className="font-sans text-sm" style={{ color: "var(--ink-faded)" }}>
                            Hover to read the full story →
                        </p>
                    </div>

                    {/* Bottom rule */}
                    <div className="column-rule-thin" style={{ borderColor: "var(--rule)" }} />
                </div>

                {/* ── Back – Full article ── */}
                <div
                    className="absolute inset-0 p-6 md:p-10 rounded-sm flex flex-col justify-between"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background: "var(--ink)",
                        color: "var(--cream)",
                    }}
                >
                    {/* Header */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-sans text-[10px] uppercase tracking-widest opacity-50">
                                {project.category}
                            </span>
                            <span className="font-sans text-[10px] uppercase tracking-widest opacity-50">
                                {project.dates}
                            </span>
                        </div>
                        <div style={{ borderTop: "1px solid rgba(245,240,232,0.15)" }} className="mb-4" />

                        <h3
                            className="font-serif text-2xl md:text-3xl font-black tracking-tight mb-4"
                            style={{ color: "var(--cream)" }}
                        >
                            {project.title}
                        </h3>
                        <p
                            className="font-sans text-sm md:text-base leading-relaxed"
                            style={{ color: "rgba(245,240,232,0.7)" }}
                        >
                            {project.description}
                        </p>
                    </div>

                    {/* Tech tags */}
                    <div>
                        <div style={{ borderTop: "1px solid rgba(245,240,232,0.15)" }} className="mb-4" />
                        <p className="dateline mb-3" style={{ color: "rgba(245,240,232,0.4)" }}>Built with</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="font-sans text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-sm"
                                    style={{
                                        border: "1px solid rgba(245,240,232,0.2)",
                                        color: "rgba(245,240,232,0.8)",
                                        background: "rgba(245,240,232,0.05)",
                                    }}
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
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

    return (
        <section
            id="projects"
            className="border-t"
            style={{ borderColor: "var(--rule)", background: "var(--cream)" }}
        >
            {/* Section header */}
            <div
                className="px-6 md:px-12 py-4 flex items-center justify-between border-b"
                style={{ borderColor: "var(--rule)" }}
            >
                <p className="section-label">04 / Projects</p>
                <div className="flex-1 mx-6 border-t" style={{ borderColor: "var(--rule)" }} />
                <p className="dateline">Built Along the Way</p>
            </div>

            {/* Headline */}
            <div
                className="px-6 md:px-12 py-8 border-b"
                style={{ borderColor: "var(--rule)" }}
            >
                <h1
                    className="font-serif text-4xl md:text-6xl font-black tracking-tight"
                    style={{ color: "var(--ink)" }}
                >
                    Built Along the Way.
                </h1>
            </div>

            {/* Sticky horizontal scroll */}
            <div ref={targetRef} className="relative h-[380vh]">
                <div
                    className="sticky top-0 flex items-center overflow-hidden bg-transparent"
                    style={{ height: "82vh" }}
                >
                    <motion.div
                        style={{ x }}
                        className="flex px-6 md:px-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ staggerChildren: 0.15 }}
                    >
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                        {/* End spacer */}
                        <div className="w-[8vw] md:w-[20vw] shrink-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}