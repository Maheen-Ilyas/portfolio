"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const filmStripY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const skills = [
        { name: "Python", color: "border-yellow-400", hover: "hover:bg-yellow-400/20 hover:text-yellow-600", shadow: "shadow-[0_8px_20px_-6px_rgba(250,204,21,0.5)]" },
        { name: "Dart", color: "border-blue-500", hover: "hover:bg-blue-500/20 hover:text-blue-700", shadow: "shadow-[0_8px_20px_-6px_rgba(59,130,246,0.5)]" },
        { name: "HTML", color: "border-orange-400", hover: "hover:bg-orange-400/20 hover:text-orange-600", shadow: "shadow-[0_8px_20px_-6px_rgba(251,146,60,0.5)]" },
        { name: "CSS", color: "border-cyan-400", hover: "hover:bg-cyan-400/20 hover:text-cyan-600", shadow: "shadow-[0_8px_20px_-6px_rgba(34,211,238,0.5)]" },
        { name: "JavaScript", color: "border-yellow-300", hover: "hover:bg-yellow-300/20 hover:text-yellow-600", shadow: "shadow-[0_8px_20px_-6px_rgba(253,224,71,0.5)]" },
        { name: "TypeScript", color: "border-blue-600", hover: "hover:bg-blue-600/20 hover:text-blue-800", shadow: "shadow-[0_8px_20px_-6px_rgba(37,99,235,0.5)]" },
        { name: "Flutter", color: "border-sky-400", hover: "hover:bg-sky-400/20 hover:text-sky-600", shadow: "shadow-[0_8px_20px_-6px_rgba(56,189,248,0.5)]" },
        { name: "React", color: "border-sky-500", hover: "hover:bg-sky-500/20 hover:text-sky-700", shadow: "shadow-[0_8px_20px_-6px_rgba(14,165,233,0.5)]" },
        { name: "Next.js", color: "border-black", hover: "hover:bg-black/10 hover:text-black", shadow: "shadow-[0_8px_20px_-6px_rgba(0,0,0,0.2)]" },
        { name: "FastAPI", color: "border-emerald-400", hover: "hover:bg-emerald-400/20 hover:text-emerald-700", shadow: "shadow-[0_8px_20px_-6px_rgba(52,211,153,0.5)]" },
        { name: "Firebase", color: "border-amber-400", hover: "hover:bg-amber-400/20 hover:text-amber-700", shadow: "shadow-[0_8px_20px_-6px_rgba(251,191,36,0.5)]" },
        { name: "Supabase", color: "border-emerald-500", hover: "hover:bg-emerald-500/20 hover:text-emerald-700", shadow: "shadow-[0_8px_20px_-6px_rgba(16,185,129,0.5)]" },
        { name: "ChromDB", color: "border-red-400", hover: "hover:bg-red-400/20 hover:text-red-700", shadow: "shadow-[0_8px_20px_-6px_rgba(248,113,113,0.5)]" },
        { name: "Git", color: "border-orange-500", hover: "hover:bg-orange-500/20 hover:text-orange-700", shadow: "shadow-[0_8px_20px_-6px_rgba(249,115,22,0.5)]" },
        { name: "GitHub", color: "border-gray-800", hover: "hover:bg-gray-800/20 hover:text-gray-900", shadow: "shadow-[0_8px_20px_-6px_rgba(31,41,55,0.5)]" },
        { name: "Pandas", color: "border-pink-400", hover: "hover:bg-pink-400/20 hover:text-pink-700", shadow: "shadow-[0_8px_20_rgba(244,114,182,0.5)]" },
        { name: "NumPy", color: "border-cyan-500", hover: "hover:bg-cyan-500/20 hover:text-cyan-700", shadow: "shadow-[0_8px_20px_-6px_rgba(6,182,212,0.5)]" },
        { name: "Matplotlib", color: "border-orange-400", hover: "hover:bg-orange-400/20 hover:text-orange-700", shadow: "shadow-[0_8px_20px_-6px_rgba(251,146,60,0.5)]" },
        { name: "Scikit-Learn", color: "border-orange-400", hover: "hover:bg-orange-400/20 hover:text-orange-700", shadow: "shadow-[0_8px_20px_-6px_rgba(251,146,60,0.5)]" },
        { name: "TensorFlow", color: "border-orange-600", hover: "hover:bg-orange-600/20 hover:text-orange-800", shadow: "shadow-[0_8px_20px_-6px_rgba(234,88,12,0.5)]" },
        { name: "PyTorch", color: "border-rose-500", hover: "hover:bg-rose-500/20 hover:text-rose-700", shadow: "shadow-[0_8px_20px_-6px_rgba(244,63,94,0.5)]" },
        { name: "LangChain", color: "border-teal-500", hover: "hover:bg-teal-500/20 hover:text-teal-700", shadow: "shadow-[0_8px_20px_-6px_rgba(20,184,166,0.5)]" },
        { name: "Hugging Face", color: "border-yellow-500", hover: "hover:bg-yellow-500/20 hover:text-yellow-700", shadow: "shadow-[0_8px_20px_-6px_rgba(234,179,8,0.5)]" },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    const constraintsRef = useRef(null);

    return (
        <section ref={containerRef} id="about" className="py-32 border-t border-foreground/5 relative overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10"
            >
                <div className="space-y-8">
                    <h2 className="text-sm font-medium uppercase mb-8 opacity-40 italic tracking-widest text-black/50">01 / About</h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tighter">
                        The Journey so Far.
                    </h1>

                    <motion.div ref={constraintsRef} className="flex flex-wrap gap-3 max-w-xl relative">
                        {skills.map((skill) => (
                            <motion.span
                                key={skill.name}
                                variants={itemVariants}
                                drag
                                dragConstraints={constraintsRef}
                                dragElastic={0.8}
                                dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                                whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 10 }}
                                className={`px-4 py-1 border-2 ${skill.color} ${skill.shadow} ${skill.hover} rounded-full text-xs font-semibold transition-all duration-300 hover:translate-y-[-4px] cursor-grab`}
                            >
                                {skill.name}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                <div className="space-y-8 text-xl text-black/70 leading-relaxed md:pt-4">
                    <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-black">
                        I didn’t start off with AI, big projects, or a very refined tech stack.
                        I started with curiosity. That small spark grew into building apps, leading communities, and exploring how artificial
                        intelligence can transform everyday experiences.
                    </p>
                    <p>
                        Today, I’m still chasing that spark — crafting solutions that feel less like software,
                        and more like something that belongs in your hands.
                    </p>
                </div>
            </motion.div>

            <motion.div
                style={{ y: filmStripY }}
                className="mt-8 md:-mt-40 flex justify-end opacity-20 grayscale brightness-125 pointer-events-none"
            >
                <div className="relative w-full md:w-[60%] aspect-[4/1] pointer-events-none">
                    <Image
                        src="/Film Strip.png"
                        alt="Decorative Film Strip"
                        fill
                        className="object-contain object-right-bottom"
                    />
                </div>
            </motion.div>
        </section>
    );
}