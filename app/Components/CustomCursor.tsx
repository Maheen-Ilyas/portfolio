"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Raw coordinates for the inner dot
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics for the outer ring (creates the trailing effect)
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsVisible(true);

            const target = e.target as HTMLElement;
            const isInteractive =
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.cursor-pointer') ||
                ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);

            setIsPointer(!!isInteractive);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Outer Ring (Trails behind) */}
            <motion.div
                style={{
                    x: smoothX,
                    y: smoothY,
                    opacity: isVisible ? 1 : 0,
                }}
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
            >
                <div
                    className={`flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full border border-white transition-all duration-300 ease-out ${isPointer ? "w-16 h-16 bg-white/10" : "w-10 h-10 bg-transparent"
                        }`}
                />
            </motion.div>

            {/* Inner Dot (Instant) */}
            <motion.div
                style={{
                    x: mouseX,
                    y: mouseY,
                    opacity: isVisible ? 1 : 0,
                }}
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
            >
                <div
                    className={`bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isPointer ? "w-0 h-0" : "w-2 h-2"
                        }`}
                />
            </motion.div>
        </>
    );
}
