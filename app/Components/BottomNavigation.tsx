"use client";
import { useState, useEffect } from "react";

export default function BottomNavigation({ scrolled, onContactClick }: { scrolled: boolean; onContactClick?: () => void }) {
    const [timeStr, setTimeStr] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            setTimeStr(date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-50 flex justify-between w-full items-center px-4 md:px-8 py-3 md:py-4 border-t transition-all duration-300"
            style={{
                background: "var(--cream)",
                borderColor: "var(--rule)",
            }}
        >
            <div className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--ink-faded)" }}>
                {timeStr || "••:••:••"}
            </div>
            <div className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity" style={{ color: "var(--ink)" }}>
                <a href="https://linkedin.com/in/maheen-ilyas" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity" style={{ color: "var(--ink)" }}>
                <a href="https://github.com/Maheen-Ilyas" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--red)" }}>
                <button onClick={onContactClick} className="uppercase font-bold hover:opacity-70 transition-opacity">
                    Contact
                </button>
            </div>
        </nav>
    );
}