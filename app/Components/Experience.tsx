"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface ExperienceEntry {
    year: string;
    role: string;
    company: string;
    location?: string;
    bullets?: string[];
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

function ExperienceItem({ item, index }: { item: ExperienceEntry; index: number }) {
    const [expanded, setExpanded] = useState(false);
    const hasBullets = item.bullets && item.bullets.length > 0;

    return (
        <motion.article
            variants={itemVariants}
            className="border-b"
            style={{ borderColor: "var(--rule)" }}
        >
            <button
                onClick={() => hasBullets && setExpanded(!expanded)}
                className={`w-full text-left px-0 py-6 group ${hasBullets ? "" : ""}`}
                style={{ cursor: hasBullets ? undefined : "default" }}
            >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start">
                    {/* Index & date */}
                    <div className="md:col-span-2">
                        <span
                            className="font-serif text-3xl font-black leading-none"
                            style={{ color: "var(--red)" }}
                        >
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="dateline mt-1">{item.year}</p>
                    </div>

                    {/* Role & company */}
                    <div className="md:col-span-8 flex flex-col">
                        <h3
                            className="font-serif text-2xl md:text-3xl font-bold tracking-tight group-hover:translate-x-1 transition-transform duration-300"
                            style={{ color: "var(--ink)" }}
                        >
                            {item.role}
                        </h3>
                        <p className="font-sans text-base italic mt-1" style={{ color: "var(--ink-faded)" }}>
                            {item.company}
                        </p>
                        {item.location && (
                            <span
                                className="tag-pill mt-2 self-start"
                                style={{ borderColor: "var(--rule)", color: "var(--ink-faded)" }}
                            >
                                {item.location}
                            </span>
                        )}
                    </div>

                    {/* Expand indicator */}
                    {hasBullets && (
                        <div className="md:col-span-2 flex items-center justify-end">
                            <motion.span
                                animate={{ rotate: expanded ? 45 : 0 }}
                                transition={{ duration: 0.25 }}
                                className="font-sans text-2xl leading-none select-none"
                                style={{ color: "var(--red)" }}
                            >
                                +
                            </motion.span>
                        </div>
                    )}
                </div>
            </button>

            {/* Expandable bullets */}
            <AnimatePresence>
                {expanded && hasBullets && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div
                            className="pb-6 pl-0 md:pl-[calc(16.666%+1.5rem)] border-l-4 ml-0 md:ml-[16.666%]"
                            style={{ borderColor: "var(--red)" }}
                        >
                            <ul className="space-y-3 pl-4 md:pl-6">
                                {item.bullets!.map((b, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                        className="font-sans text-sm leading-relaxed flex gap-3"
                                        style={{ color: "var(--ink-faded)" }}
                                    >
                                        <span style={{ color: "var(--red)", flexShrink: 0 }}>✦</span>
                                        <span>{b}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.article>
    );
}

export default function Experience() {
    const experiences: ExperienceEntry[] = [
        {
            year: "Apr 2026 – Jul 2026",
            role: "Software Engineer",
            company: "eSwiftSoftware",
            location: "Remote",
            bullets: [
                "Led the end-to-end development of a desktop application that automates the injection of security policies into pre-compiled mobile apps (APKs/IPAs) without modifying the source code.",
                "Spearheaded the architectural design for an upcoming enterprise data warehouse, focusing on centralising cross-platform analytics and designing scalable ETL pipelines.",
            ],
        },
        {
            year: "Jun 2024 – Sep 2024",
            role: "Software Engineering Intern",
            company: "Repsoft Consultancy Services Ltd.",
            location: "Remote",
            bullets: [
                "Engineered and optimised Flutter applications to enhance UI responsiveness and considerably improve user satisfaction.",
                "Partnered with design teams to implement intuitive UI/UX components for 3 applications with over 20 screens each.",
            ],
        },
    ];

    const leadership: ExperienceEntry[] = [
        {
            year: "Sep 2024 – Jul 2025",
            role: "Chief Coordinator",
            company: "Google Developer Groups on Campus",
            location: "On-site",
        },
        {
            year: "Jul 2023 – May 2024",
            role: "General Secretary",
            company: "Google Developer Student Clubs",
            location: "On-site",
        },
        {
            year: "May 2024 – Aug 2024",
            role: "Open-Source Contributor",
            company: "GirlScript Summer of Code",
            location: "Remote",
        },
    ];

    return (
        <section
            id="experience"
            className="border-t"
            style={{ borderColor: "var(--rule)", background: "var(--cream)" }}
        >
            {/* Section header bar */}
            <div
                className="px-6 md:px-12 py-4 flex items-center justify-between border-b"
                style={{ borderColor: "var(--rule)" }}
            >
                <p className="section-label">03 / Experience</p>
                <div className="flex-1 mx-6 border-t" style={{ borderColor: "var(--rule)" }} />
                <p className="dateline">The Chapters</p>
            </div>

            {/* Work experience */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b" style={{ borderColor: "var(--rule)" }}>
                <div className="md:col-span-3 px-6 md:px-12 py-12 border-r" style={{ borderColor: "var(--rule)" }}>
                    <h1
                        className="font-serif text-4xl md:text-5xl font-black tracking-tight leading-tight"
                        style={{ color: "var(--ink)" }}
                    >
                        The<br />Chapters.
                    </h1>
                    <div className="column-rule-red mt-6" style={{ borderTopWidth: "2px", borderTopStyle: "solid", borderColor: "var(--red)" }} />
                    <p className="font-sans text-sm mt-4 leading-relaxed" style={{ color: "var(--ink-faded)" }}>
                        Tap any role to read the full story.
                    </p>
                </div>

                <div className="md:col-span-9 px-6 md:px-12 py-6">
                    <p className="dateline mb-4 pt-6">Work Experience</p>
                    <div className="column-rule mb-0" style={{ borderTopWidth: "3px", borderTopStyle: "double", borderColor: "var(--ink)" }} />
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {experiences.map((item, i) => (
                            <ExperienceItem key={i} item={item} index={i} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Leadership */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b" style={{ borderColor: "var(--rule)" }}>
                <div className="md:col-span-3 px-6 md:px-12 py-12 border-r" style={{ borderColor: "var(--rule)" }}>
                    <h1
                        className="font-serif text-4xl md:text-5xl font-black tracking-tight leading-tight"
                        style={{ color: "var(--ink)" }}
                    >
                        Leadership.
                    </h1>
                    <div className="column-rule-red mt-6" style={{ borderTopWidth: "2px", borderTopStyle: "solid", borderColor: "var(--red)" }} />
                </div>

                <div className="md:col-span-9 px-6 md:px-12 py-6">
                    <p className="dateline mb-4 pt-6">Community & Leadership Roles</p>
                    <div className="column-rule mb-0" style={{ borderTopWidth: "3px", borderTopStyle: "double", borderColor: "var(--ink)" }} />
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {leadership.map((item, i) => (
                            <ExperienceItem key={i} item={item} index={i} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}