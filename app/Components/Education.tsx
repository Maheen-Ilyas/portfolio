"use client";
import { motion } from "framer-motion";

const COURSEWORK = [
    "Data Structures & Algorithms",
    "Design & Analysis of Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Natural Language Processing",
    "Distributed Systems",
];

export default function Education() {
    return (
        <section
            id="education"
            className="border-t"
            style={{ borderColor: "var(--rule)", background: "var(--cream)" }}
        >
            {/* Section header bar */}
            <div
                className="px-6 md:px-12 py-4 flex items-center justify-between border-b"
                style={{ borderColor: "var(--rule)" }}
            >
                <p className="section-label">02 / Education</p>
                <div className="flex-1 mx-6 border-t" style={{ borderColor: "var(--rule)" }} />
                <p className="dateline">Academic Record</p>
            </div>

            {/* Main content */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b" style={{ borderColor: "var(--rule)" }}>

                {/* Announcement left column */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-5 px-6 md:px-12 py-12 border-r flex flex-col justify-between"
                    style={{ borderColor: "var(--rule)" }}
                >
                    {/* Red accent top rule */}
                    <div>
                        <div className="column-rule-red mb-4" style={{ borderTopWidth: "2px", borderTopStyle: "solid", borderColor: "var(--red)" }} />
                        <p className="dateline mb-2">Bachelor of Engineering · Computer Science</p>
                        <div className="column-rule-thin mb-6" style={{ borderColor: "var(--rule)" }} />

                        <h2
                            className="font-serif text-4xl md:text-5xl font-black tracking-tight leading-tight mb-2"
                            style={{ color: "var(--ink)" }}
                        >
                            Osmania<br />University
                        </h2>
                        <p className="font-sans text-sm italic mb-6" style={{ color: "var(--ink-faded)" }}>
                            Telangana, India
                        </p>

                        {/* Key stats as broadsheet data table */}
                        <div className="border" style={{ borderColor: "var(--rule)" }}>
                            {[
                                { label: "Degree", value: "B.E. Computer Science & Engineering" },
                                { label: "Duration", value: "Dec 2021 – Jul 2025" },
                                { label: "CGPA", value: "8.63 / 10  (3.6 / 4.0)" },
                                { label: "Status", value: "Graduated" },
                            ].map(({ label, value }, i) => (
                                <div
                                    key={label}
                                    className={`flex items-start gap-4 px-4 py-3 ${i < 3 ? "border-b" : ""}`}
                                    style={{ borderColor: "var(--rule)" }}
                                >
                                    <span className="dateline w-24 shrink-0 mt-0.5">{label}</span>
                                    <span className="font-sans text-sm font-semibold" style={{ color: "var(--ink)" }}>
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CGPA badge */}
                        <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 border-2"
                            style={{ borderColor: "var(--red)" }}>
                            <span className="font-serif text-4xl font-black" style={{ color: "var(--red)" }}>8.63</span>
                            <div>
                                <p className="font-sans text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--red)" }}>CGPA</p>
                                <p className="font-sans text-[10px] uppercase tracking-widest" style={{ color: "var(--ink-faded)" }}>Out of 10.0</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Coursework column */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="md:col-span-7 px-6 md:px-12 py-12"
                >
                    <p className="dateline mb-3">Relevant Coursework</p>
                    <div className="column-rule mb-6" style={{ borderTopWidth: "3px", borderTopStyle: "double", borderColor: "var(--ink)" }} />

                    <div className="flex flex-wrap gap-3">
                        {COURSEWORK.map((course, i) => (
                            <motion.div
                                key={course}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.07 }}
                                className="clipping-card px-4 py-3 rounded-sm"
                            >
                                <p className="font-sans text-xs font-semibold" style={{ color: "var(--ink)" }}>
                                    {course}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Decorative quote */}
                    <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--rule)" }}>
                        <blockquote className="pull-quote text-xl md:text-2xl">
                            &quot;Four years of data structures, distributed systems, and deep learning
                            — all converging into a single thesis: technology should serve people.&quot;
                        </blockquote>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
