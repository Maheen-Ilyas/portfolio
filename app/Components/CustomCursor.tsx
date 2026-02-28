"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Raw position of the mouse
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoothed position using precisely tuned springs for zero latency feel
    const springConfig = { damping: 40, stiffness: 600, mass: 0.4 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Hidden initially to avoid jump
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            if (!isVisible) setIsVisible(true);

            // Lightweight interactive check
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
    }, [mouseX, mouseY, isVisible]);

    return (
        <motion.div
            style={{
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%",
                opacity: isVisible ? 1 : 0,
            }}
            className={`fixed top-0 left-0 w-6 h-6 border-[1.5px] border-black rounded-full pointer-events-none z-[9999] transition-[width,height,background-color] duration-300 ease-out flex items-center justify-center ${isPointer ? "w-12 h-12 bg-black/10 border-black/20" : "w-6 h-6 bg-transparent"
                }`}
        >
            {isPointer && <div className="w-1 h-1 bg-black rounded-full" />}
        </motion.div>
    );
}
