"use client";
import { useState, useEffect, useRef } from "react";

export default function TopNavigation({ scrolled }: { scrolled: boolean }) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between w-full items-center px-4 md:px-8 py-4 md:py-6 transition-all duration-300">
            <div className="text-[10px] sm:text-xs md:text-xl font-bold hover:opacity-70 transition-opacity text-black">
                <a href="#hero">MI</a>
            </div>
            <div className="hover:opacity-50 transition-opacity text-[10px] sm:text-xs md:text-xl font-bold uppercase text-black">
                <a href="#about">ABOUT</a>
            </div>
            <div className={`hover:opacity-50 transition-opacity text-[10px] sm:text-xs md:text-xl font-bold uppercase transition-colors duration-500 ${scrolled ? 'text-black' : 'md:text-white text-black'}`}>
                <a href="#experience">EXPERIENCE</a>
            </div>
            <div className={`hover:opacity-50 transition-opacity text-[10px] sm:text-xs md:text-xl font-bold uppercase transition-colors duration-500 ${scrolled ? 'text-black' : 'md:text-white text-black'}`}>
                <a href="#projects">PROJECTS</a>
            </div>
        </nav>
    );
}