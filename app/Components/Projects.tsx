"use client";
import { useState, useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "NomosAI",
        category: "Artificial Intelligence",
        description: "A high-precision legal research assistant using RAG and hybrid search to query thousands of legal documents with VoyageAI and Cohere re-ranking.",
        tech: ["Python", "Next.js", "FastAPI", "LangChain", "Hugging Face", "VoyageAI", "Cohere", "ChromaDB", "Supabase", "Docker"],
    },
    {
        id: 2,
        title: "PawPal",
        category: "Mobile Application",
        description: "An all-in-one pet care platform featuring medication tracking, an emergency veterinary locator, and AI-powered Emergency Guide using the Gemini API.",
        tech: ["Dart", "Flutter", "Firebase", "GetX", "Gemini AI", "OpenStreetMap", "Overpass"],
    },
    {
        id: 3,
        title: "Distracted Driver Detection",
        category: "Deep Learning",
        description: "A CNN-based system using MobileNetV2 to classify driver behavior into 10 categories with 80.43% precision, engineered with lighting-invariant training.",
        tech: ["Python", "Pandas", "NumPy", "Matplotlib", "TensorFlow", "Keras", "MobileNetV2"],
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 40, rotateY: 10, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateY: 0,
        filter: "blur(0px)",
        transition: { duration: 0.9, ease: "easeOut" }
    },
};

function Card({ project }: { project: any }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            variants={cardVariants}
            className={`relative cursor-pointer transition-all duration-500 w-[85vw] md:w-[600px] h-[400px] md:h-[450px] shrink-0 mx-4 md:mx-8 perspective-1000`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            style={{ perspective: "1000px" }}
        >
            <motion.div
                className="w-full h-full relative preserve-3d"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                <div
                    className="absolute inset-0 backface-hidden flex flex-col justify-end p-6 md:p-12 bg-neutral-100 border border-black/5 rounded-2xl transition-all group"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="relative overflow-hidden">
                        <span className="text-xs font-mono opacity-40 mb-2 block tracking-widest uppercase">0{project.id} / {project.category}</span>
                        <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">{project.title}</h3>
                    </div>
                </div>

                <div
                    className="absolute inset-0 backface-hidden p-6 md:p-12 bg-black text-white rounded-2xl flex flex-col justify-between shadow-2xl"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="space-y-4 md:space-y-6">
                        <h3 className="text-2xl md:text-4xl font-bold tracking-tighter">{project.title}</h3>
                        <p className="text-white/60 text-base md:text-xl leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t: string) => (
                            <span key={t} className="text-[10px] md:text-xs font-semibold uppercase tracking-widest border border-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <section id="projects" className="pt-32 border-t border-foreground/5 bg-white relative">
            {/* Static Header completely separate from the scroll area */}
            <div className="px-6 md:px-24 mb-16 relative z-10 pointer-events-none">
                <h2 className="text-sm font-medium uppercase mb-4 md:mb-8 opacity-40 italic tracking-widest text-black/50">03 / Projects</h2>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
                    Built Along the Way.
                </h1>
            </div>

            {/* Sticky Scrolling Area */}
            <div ref={targetRef} className="relative h-[300vh]">
                <div className="sticky top-0 flex items-center overflow-hidden h-[80vh] bg-white">
                    <motion.div
                        style={{ x }}
                        className="flex px-6 md:px-24"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ staggerChildren: 0.15 }}
                    >
                        {projects.map((project) => (
                            <Card key={project.id} project={project} />
                        ))}
                        <div className="w-[10vw] md:w-[30vw] shrink-0" /> {/* Spacer at the end */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}