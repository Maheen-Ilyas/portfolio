"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
    { name: "C++", color: "#1565C0" },
    { name: "Python", color: "#F9A825" },
    { name: "JavaScript", color: "#F57F17" },
    { name: "TypeScript", color: "#1976D2" },
    { name: "Dart", color: "#0288D1" },
    { name: "HTML", color: "#E64A19" },
    { name: "CSS", color: "#00838F" },
    { name: "Flutter", color: "#0288D1" },
    { name: "React", color: "#0288D1" },
    { name: "Next.js", color: "#1A1A1A" },
    { name: "FastAPI", color: "#00695C" },
    { name: "Firebase", color: "#FF8F00" },
    { name: "Supabase", color: "#2E7D32" },
    { name: "ChromaDB", color: "#C62828" },
    { name: "PostgreSQL", color: "#1565C0" },
    { name: "Git", color: "#BF360C" },
    { name: "GitHub", color: "#1A1A1A" },
    { name: "Pandas", color: "#AD1457" },
    { name: "NumPy", color: "#00838F" },
    { name: "Matplotlib", color: "#E64A19" },
    { name: "Scikit-Learn", color: "#E65100" },
    { name: "TensorFlow", color: "#BF360C" },
    { name: "PyTorch", color: "#B71C1C" },
    { name: "LangChain", color: "#00695C" },
    { name: "Hugging Face", color: "#F9A825" },
    { name: "Apktool", color: "#4527A0" },
    { name: "Smali", color: "#4527A0" },
    { name: "Dylib", color: "#558B2F" },
    { name: "PyInstaller", color: "#1565C0" },
];

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const filmStripY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const constraintsRef = useRef(null);

    return (
        <section
            ref={containerRef}
            id="about"
            className="border-t"
            style={{ borderColor: "var(--rule)", background: "var(--cream)" }}
        >
            {/* Section header bar */}
            <div
                className="px-6 md:px-12 py-4 flex items-center justify-between border-b"
                style={{ borderColor: "var(--rule)" }}
            >
                <p className="section-label">01 / About</p>
                <div className="flex-1 mx-6 border-t" style={{ borderColor: "var(--rule)" }} />
                <p className="dateline">The Journey so Far</p>
            </div>

            {/* Main grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b" style={{ borderColor: "var(--rule)" }}>

                {/* Headline column */}
                <div
                    className="md:col-span-4 px-6 md:px-12 py-12 border-r flex flex-col justify-between"
                    style={{ borderColor: "var(--rule)" }}
                >
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="font-serif text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6"
                            style={{ color: "var(--ink)" }}
                        >
                            The Journey<br />so Far.
                        </motion.h1>

                        <div className="column-rule-red mb-6" style={{ borderTopWidth: "2px", borderTopStyle: "solid", borderColor: "var(--red)" }} />

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="font-sans text-base leading-relaxed drop-cap"
                            style={{ color: "var(--ink-faded)" }}
                        >
                            I didn&apos;t start off with AI, big projects, or a very refined tech stack.
                            I started with curiosity. That small spark grew into building apps, leading communities, and exploring how artificial
                            intelligence can transform everyday experiences.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.25 }}
                            className="font-sans text-base leading-relaxed mt-4"
                            style={{ color: "var(--ink-faded)" }}
                        >
                            Today, I&apos;m still chasing that spark — crafting solutions that feel less like software,
                            and more like something that belongs in your hands.
                        </motion.p>
                    </div>

                    {/* Research interests */}
                    <div className="mt-8">
                        <p className="dateline mb-3">Research Interests</p>
                        <div className="column-rule-thin mb-3" style={{ borderColor: "var(--rule)" }} />
                        <div className="flex flex-wrap gap-2">
                            {["Machine Learning", "Retrieval-Augmented Generation", "Fine-tuning", "Applied Deep Learning"].map(i => (
                                <span key={i} className="tag-pill tag-pill-red">{i}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills / classifieds column */}
                <div
                    className="md:col-span-8 px-6 md:px-12 py-12"
                >
                    <p className="dateline mb-4">Technical Skills — Drag to explore</p>
                    <div className="column-rule mb-6" style={{ borderTopWidth: "3px", borderTopStyle: "double", borderColor: "var(--ink)" }} />

                    <motion.div
                        ref={constraintsRef}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.04, duration: 0.6 } },
                        }}
                        className="flex flex-wrap gap-2 relative"
                    >
                        {skills.map((skill) => (
                            <motion.span
                                key={skill.name}
                                variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } }}
                                drag
                                dragConstraints={constraintsRef}
                                dragElastic={0.8}
                                dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                                whileDrag={{ scale: 1.12, zIndex: 10 }}
                                whileHover={{ y: -3 }}
                                className="tag-pill cursor-grab select-none transition-all duration-200 hover:text-white"
                                style={{ borderColor: skill.color + "55", color: skill.color }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.background = skill.color;
                                    (e.currentTarget as HTMLElement).style.color = "#fff";
                                    (e.currentTarget as HTMLElement).style.borderColor = skill.color;
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.background = "transparent";
                                    (e.currentTarget as HTMLElement).style.color = skill.color;
                                    (e.currentTarget as HTMLElement).style.borderColor = skill.color + "55";
                                }}
                            >
                                {skill.name}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Film strip decorative */}
                    <motion.div
                        style={{ y: filmStripY }}
                        className="mt-12 flex justify-end opacity-10 grayscale pointer-events-none"
                    >
                        <div className="relative w-full md:w-[65%] aspect-[4/1]">
                            <Image
                                src="/Film Strip.png"
                                alt="Decorative Film Strip"
                                fill
                                className="object-contain object-right-bottom"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}