"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "NomosAI",
        category: "Artificial Intelligence",
        description: "A high-precision legal research assistant using RAG and hybrid search to query thousands of legal documents with VoyageAI and Cohere re-ranking.",
        tech: ["Python", "Next.js", "FastAPI", "LangChain", "Hugging Face", "VoyageAI", "Cohere", "ChromaDB", "Supabase", "Docker"],
        className: "md:col-span-2 md:row-span-2",
    },
    {
        id: 2,
        title: "PawPal",
        category: "Mobile Application",
        description: "An all-in-one pet care platform featuring medication tracking, an emergency veterinary locator, and AI-powered Emergency Guide using the Gemini API.",
        tech: ["Dart", "Flutter", "Firebase", "GetX", "Gemini AI", "OpenStreetMap", "Overpass"],
        className: "md:col-span-2 md:row-span-1",
    },
    {
        id: 3,
        title: "Distracted Driver Detection",
        category: "Deep Learning",
        description: "A CNN-based system using MobileNetV2 to classify driver behavior into 10 categories with 80.43% precision, engineered with lighting-invariant training.",
        tech: ["Python", "Pandas", "NumPy", "Matplotlib", "TensorFlow", "Keras", "MobileNetV2"],
        className: "md:col-span-2 md:row-span-1",
    },
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.8 }
    },
};

function Card({ project }: { project: any }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            variants={cardVariants}
            className={`relative cursor-pointer transition-all duration-500 perspective-1000 ${project.className}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            style={{ perspective: "1000px" }}
        >
            <motion.div
                className="w-full h-full relative preserve-3d"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d", minHeight: "300px" }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 backface-hidden flex flex-col justify-end p-8 bg-neutral-100 border border-black/5 rounded-2xl transition-all group"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="relative overflow-hidden">
                        <span className="text-xs font-mono opacity-40 mb-2 block tracking-widest uppercase">0{project.id} / {project.category}</span>
                        <h3 className="text-3xl font-bold tracking-tighter">{project.title}</h3>
                    </div>
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 backface-hidden p-8 bg-black text-white rounded-2xl flex flex-col justify-between"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tighter">{project.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t: string) => (
                            <span key={t} className="text-[10px] uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full bg-white/5">
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
    return (
        <section id="projects" className="py-32 border-t border-foreground/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-sm font-medium uppercase mb-8 opacity-40 italic tracking-widest text-black/50">03 / Projects</h2>
                <h1 className="text-4xl md:text-7xl font-bold text-black mb-16 tracking-tighter">
                    Built Along the Way.
                </h1>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 auto-rows-[300px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {projects.map((project) => (
                        <Card key={project.id} project={project} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}