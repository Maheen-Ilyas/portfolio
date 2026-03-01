"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate an API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
            setFormState({ name: "", email: "", message: "" });
            onClose();
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] cursor-pointer"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-[100vw] md:w-[500px] bg-white z-[101] shadow-2xl flex flex-col border-l border-black/5"
                    >
                        <div className="p-6 md:p-12 flex-1 overflow-y-auto">
                            <div className="flex justify-between items-center mb-8 md:mb-12">
                                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-black/5 rounded-full transition-colors"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>

                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="h-full flex flex-col items-center justify-center text-center space-y-4 text-emerald-600"
                                >
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <h3 className="text-2xl font-bold text-black tracking-tight">Message Sent!</h3>
                                    <p className="text-black/60">I'll get back to you as soon as possible.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold uppercase tracking-widest text-black/50">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formState.name}
                                            onChange={e => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full bg-neutral-100 border-none p-4 rounded-xl focus:ring-2 focus:ring-black outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold uppercase tracking-widest text-black/50">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formState.email}
                                            onChange={e => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full bg-neutral-100 border-none p-4 rounded-xl focus:ring-2 focus:ring-black outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold uppercase tracking-widest text-black/50">Message</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={formState.message}
                                            onChange={e => setFormState({ ...formState, message: e.target.value })}
                                            className="w-full bg-neutral-100 border-none p-4 rounded-xl focus:ring-2 focus:ring-black outline-none transition-all resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-black text-white p-5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-black/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                        {!isSubmitting && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
