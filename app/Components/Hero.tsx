"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TICKER_ITEMS = [
    "AI-Driven Engineer",
    "FastAPI",
    "Next.js",
    "Flutter",
    "RAG & LLM Systems",
    "TensorFlow",
    "PyTorch",
    "Full-Stack Developer",
    "Deep Learning Researcher",
];

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const tickerItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

    return (
        <section
            ref={containerRef}
            id="hero"
            className="flex flex-col"
            style={{ background: "var(--cream)", paddingTop: "110px" }}
        >
            {/* ── FRONT PAGE GRID ── */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-12 border-b"
                style={{ borderColor: "var(--rule)" }}>

                {/* ── LEFT COLUMN – Lead story ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="md:col-span-5 flex flex-col justify-between px-6 md:px-10 py-6 md:py-10 border-r"
                    style={{ borderColor: "var(--rule)" }}
                >
                    {/* Section label */}
                    <div>
                        <p className="section-label mb-3">Featured</p>
                        <div
                            className="column-rule mb-5"
                            style={{ borderTopWidth: "3px", borderTopStyle: "double", borderColor: "var(--ink)" }}
                        />

                        {/* Headline */}
                        <h1
                            className="font-serif text-4xl md:text-6xl font-black leading-[1.05] tracking-tight mb-5"
                            style={{ color: "var(--ink)" }}
                        >
                            <motion.span
                                className="block"
                                whileHover={{ x: 6, opacity: 0.7 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                AI-Driven.
                            </motion.span>
                            <motion.span
                                className="block"
                                style={{ color: "var(--ink-faded)" }}
                                whileHover={{ x: 6, opacity: 1, color: "var(--ink)" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Future-Ready.
                            </motion.span>
                        </h1>

                        {/* Byline rule */}
                        <div className="column-rule-thin mb-3" style={{ borderColor: "var(--rule)" }} />
                        <p className="dateline mb-3">By Maheen Ilyas</p>
                        <div className="column-rule-thin mb-5" style={{ borderColor: "var(--rule)" }} />

                        {/* Lead paragraph */}
                        <p
                            className="font-sans text-sm md:text-base leading-relaxed"
                            style={{ color: "var(--ink-faded)" }}
                        >
                            Designing intelligent, full-stack solutions that blend seamless
                            user experiences with advanced AI capabilities — inspired by
                            innovation and community impact.
                        </p>
                    </div>
                </motion.div>

                {/* ── RIGHT COLUMN – sidebar stats ── */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                    className="md:col-span-3 flex flex-col px-6 py-6 md:py-10 gap-4"
                >
                    {/* Pull quote */}
                    <blockquote className="pull-quote w-xl mt-6 mb-0 text-sm md:text-base">
                        &ldquo;Building things that feel less like software, and more like something
                        that belongs in your hands.&rdquo;
                    </blockquote>

                    {/* Social links */}
                    <div className="mt-auto pt-3" style={{ borderTop: "1px solid var(--rule)" }}>
                        <p className="dateline mb-2">Connect</p>
                        <div className="flex flex-col gap-1.5">
                            {[
                                { label: "LinkedIn", href: "https://linkedin.com/in/maheen-ilyas" },
                                { label: "GitHub", href: "https://github.com/Maheen-Ilyas" },
                                { label: "Email", href: "mailto:mahilyaos05@gmail.com" },
                            ].map(({ label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-sans text-[11px] font-semibold uppercase tracking-widest flex items-center gap-2 transition-colors group"
                                    style={{ color: "var(--red)" }}
                                >
                                    <span className="w-3 h-px group-hover:w-6 transition-all duration-300" style={{ background: "var(--red)" }} />
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ── RED TICKER ── */}
            <div
                className="w-full ticker-wrap py-2 overflow-hidden flex"
                style={{ background: "var(--red)" }}
            >
                <div className="ticker-inner flex items-center gap-0">
                    {tickerItems.map((item, i) => (
                        <span
                            key={i}
                            className="font-sans text-[11px] font-semibold uppercase tracking-widest text-white px-6 shrink-0"
                        >
                            {item}
                            <span className="mx-4 opacity-50">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}