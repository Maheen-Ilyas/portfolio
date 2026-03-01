"use client";
import { useState, useEffect } from "react";

export default function BottomNavigation({ scrolled, onContactClick }: { scrolled: boolean, onContactClick?: () => void }) {
    const [timeStr, setTimeStr] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            setTimeStr(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-between w-full items-center px-4 md:px-8 py-4 md:py-6 transition-all duration-300">
            <div className={`text-[10px] sm:text-xs md:text-xl font-bold uppercase transition-colors duration-500 text-black`}>
                {timeStr || "••:••:••"}
            </div>
            <div className={`hover:opacity-50 transition-opacity text-[10px] sm:text-xs md:text-xl font-bold uppercase transition-colors duration-500 text-black`}>
                <a href="https://linkedin.com/in/maheen-ilyas" target="_blank">LINKEDIN</a>
            </div>
            <div className={`hover:opacity-50 transition-opacity text-[10px] sm:text-xs md:text-xl font-bold uppercase transition-colors duration-500 ${scrolled ? 'text-black' : 'md:text-white text-black'}`}>
                <a href="https://github.com/Maheen-Ilyas" target="_blank">GITHUB</a>
            </div>
            <div className={`hover:opacity-50 transition-opacity text-[10px] sm:text-xs md:text-xl font-bold uppercase transition-colors duration-500 ${scrolled ? 'text-black' : 'md:text-white text-black'}`}>
                <button onClick={onContactClick} className="uppercase font-bold">CONTACT</button>
            </div>
        </nav>
    );
}