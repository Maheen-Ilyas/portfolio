"use client";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

function ExperienceItem({ item }: { item: any }) {
    return (
        <motion.div
            variants={itemVariants}
            className="group relative flex flex-col md:flex-row justify-between items-baseline gap-4 py-8 border-b border-black/5 hover:border-black/20 transition-colors"
        >
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 w-full">
                <span className="text-sm font-mono text-black/40 min-w-[150px]">{item.year}</span>
                <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:translate-x-2 transition-transform duration-500">
                        {item.role}
                    </h3>
                    <p className="text-lg text-black/60 italic group-hover:text-black transition-colors duration-500">
                        {item.company}
                    </p>
                </div>
            </div>

            {/* Decorative hover indicator */}
            <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-1 h-0 bg-black group-hover:h-8 transition-all duration-500 rounded-full hidden md:block" />
        </motion.div>
    );
}

export default function Experience() {
    const experiences = [
        { year: "June 2024 - Sep 2024", role: "Software Engineering Intern", company: "Repsoft Consultancy Services Ltd." },
        { year: "May 2024 - Aug 2024", role: "Open-source Contributor", company: "GirlScript Summer of Code" },
    ];

    const leadership = [
        { year: "Sep 2024 - July 2025", role: "Chief Coordinator", company: "Google Developer Groups on Campus" },
        { year: "July 2023 - May 2024", role: "General Secretary", company: "Google Developer Student Clubs" },
    ];

    return (
        <section id="experience" className="py-32 border-t border-foreground/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-sm font-medium uppercase mb-8 opacity-40 italic tracking-widest text-black/50">02 / Experience</h2>

                <div className="mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold text-black mb-16 tracking-tighter text-balance">
                        The Chapters.
                    </h1>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-0"
                    >
                        {experiences.map((item, i) => (
                            <ExperienceItem key={i} item={item} />
                        ))}
                    </motion.div>
                </div>

                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-black mb-16 tracking-tighter text-balance">
                        Leadership.
                    </h1>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-0"
                    >
                        {leadership.map((item, i) => (
                            <ExperienceItem key={i} item={item} />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}