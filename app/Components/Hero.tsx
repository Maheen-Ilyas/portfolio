"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        },
    };

    return (
        <section ref={containerRef} id="hero" className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
            <div className="flex flex-col justify-center px-6 md:px-24 py-32 md:py-0">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4 relative z-10"
                >
                    <motion.div
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-bold leading-[1.1] text-black tracking-tight"
                    >
                        <motion.div whileHover={{ x: 10, filter: "blur(2px)", color: "rgba(0,0,0,0.5)" }} transition={{ type: "spring", stiffness: 300 }} className="inline-block cursor-default">
                            AI-Driven.
                        </motion.div> <br />
                        <motion.div whileHover={{ x: 10, filter: "blur(2px)", color: "rgba(0,0,0,0.5)" }} transition={{ type: "spring", stiffness: 300 }} className="inline-block text-black/30 cursor-default">
                            Future-Ready.
                        </motion.div>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-black/60 max-w-sm mt-8 leading-relaxed"
                    >
                        Designing intelligent, full-stack solutions that blend seamless user experiences with advanced AI capabilities — inspired by innovation and community impact.
                    </motion.p>
                </motion.div>
            </div>

            <div className="relative h-[40vh] md:h-full w-full overflow-hidden bg-neutral-900 border-l border-black/5 order-last">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 w-full h-[120%]"
                >
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full relative"
                    >
                        <Image
                            src="/Right Content.png"
                            alt="Deep Learning and Design Illustration"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}