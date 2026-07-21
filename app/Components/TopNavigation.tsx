"use client";
import { useState, useEffect } from "react";

export default function TopNavigation({ scrolled }: { scrolled: boolean }) {
    const [date, setDate] = useState("");

    useEffect(() => {
        const d = new Date();
        setDate(d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).toUpperCase());
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
            style={{
                background: "var(--cream)",
                borderColor: "var(--rule)",
                boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.06)" : "none",
            }}
        >
            {/* Top red bar — issue & date line */}
            {!scrolled && (
                <div
                    className="w-full px-4 md:px-12 py-1 flex justify-between items-center transition-all duration-300"
                    style={{ background: "var(--red)" }}
                >
                    <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-white/90">
                        Est. 2021 · Telangana, India
                    </span>
                    <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-white/90 hidden sm:inline">
                        {date || "MONDAY, JULY 21, 2026"}
                    </span>
                    <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-white/90">
                        Vol. I, Issue 1
                    </span>
                </div>
            )}

            {/* Main Header / Nav Row */}
            {scrolled ? (
                /* Compact navbar on scroll */
                <div className="w-full px-4 md:px-12 py-2.5 flex justify-between items-center transition-all duration-300">
                    <a
                        href="#hero"
                        className="masthead-title text-xl md:text-2xl font-bold tracking-wide flex items-center gap-3"
                        style={{ color: "var(--ink)", fontFamily: "var(--font-fraktur, 'Playfair Display', serif)" }}
                    >
                        <span>Maheen Ilyas</span>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--red)" }} />
                    </a>

                    <nav className="flex items-center gap-1 md:gap-4">
                        {[
                            { label: "About", href: "#about" },
                            { label: "Education", href: "#education" },
                            { label: "Experience", href: "#experience" },
                            { label: "Projects", href: "#projects" },
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="px-2.5 md:px-4 py-1 font-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest transition-all duration-200 rounded-sm hover:text-white"
                                style={{ color: "var(--ink)" }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.background = "var(--ink)";
                                    (e.currentTarget as HTMLElement).style.color = "var(--cream)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.background = "transparent";
                                    (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            ) : (
                /* Full broadsheet masthead at top */
                <>
                    <div
                        className="w-full flex flex-col items-center py-3 md:py-4 px-4 md:px-12 border-b-2"
                        style={{ borderColor: "var(--ink)" }}
                    >
                        <a
                            href="#hero"
                            className="masthead-title text-3xl md:text-5xl font-bold tracking-wide text-center leading-none"
                            style={{ color: "var(--ink)", fontFamily: "var(--font-fraktur, 'Playfair Display', serif)" }}
                        >
                            Maheen Ilyas
                        </a>
                        <p
                            className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase mt-1"
                            style={{ color: "var(--ink-faded)" }}
                        >
                            Software Engineer · AI Researcher · Full-Stack Developer
                        </p>
                    </div>

                    <nav
                        className="w-full flex justify-center items-center gap-0"
                        style={{ background: "var(--cream)" }}
                    >
                        {[
                            { label: "About", href: "#about" },
                            { label: "Education", href: "#education" },
                            { label: "Experience", href: "#experience" },
                            { label: "Projects", href: "#projects" },
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="px-5 md:px-8 py-2 font-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest transition-all duration-200 border-r hover:text-white"
                                style={{
                                    borderColor: "var(--rule)",
                                    color: "var(--ink)",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.background = "var(--ink)";
                                    (e.currentTarget as HTMLElement).style.color = "var(--cream)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.background = "transparent";
                                    (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </>
            )}
        </header>
    );
}