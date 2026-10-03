"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);

      const el = (e.target as HTMLElement).closest(
        "a, button, .cursor-pointer, [data-cursor]",
      );
      setIsPointer(!!el);
      setCursorText(el?.getAttribute("data-cursor") || "");
    };
    const hide = () => setIsVisible(false);
    const show = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
    };
  }, [mouseX, mouseY]);

  const base = "fixed top-0 left-0 pointer-events-none hidden md:block";

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{ x: smoothX, y: smoothY, opacity: isVisible ? 1 : 0 }}
        className={`${base} z-10000`}
      >
        <div
          className={`bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isPointer ? "w-0 h-0" : "w-2.5 h-2.5"}`}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        style={{ x: smoothX, y: smoothY, opacity: isVisible ? 1 : 0 }}
        className={`${base} z-9999`}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ${
            isPointer
              ? "w-14 h-14 border-secondary-container bg-secondary-container/20"
              : "w-8 h-8 border-secondary/50"
          }`}
        />
      </motion.div>

      {/* Label */}
      <motion.div
        style={{ x: smoothX, y: smoothY, opacity: cursorText ? 1 : 0 }}
        className={`${base} z-10001`}
      >
        <div className="absolute left-8 top-8 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
          {cursorText}
        </div>
      </motion.div>
    </>
  );
}
