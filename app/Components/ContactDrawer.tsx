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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
            setFormState({ name: "", email: "", message: "" });
            onClose();
        }, 3000);
    };

    const inputStyle = {
        width: "100%",
        background: "var(--paper)",
        border: "1px solid var(--rule)",
        padding: "0.875rem 1rem",
        outline: "none",
        fontFamily: "var(--font-sans)",
        fontSize: "0.9rem",
        color: "var(--ink)",
        borderRadius: "2px",
        transition: "border-color 0.2s",
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
                        className="fixed inset-0 z-[100] cursor-pointer"
                        style={{ background: "rgba(26,26,26,0.5)", backdropFilter: "blur(4px)" }}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-[100vw] md:w-[500px] z-[101] flex flex-col border-l"
                        style={{ background: "var(--cream)", borderColor: "var(--rule)" }}
                    >
                        {/* Red top bar */}
                        <div style={{ height: "4px", background: "var(--red)", flexShrink: 0 }} />

                        <div className="flex-1 overflow-y-auto p-6 md:p-12">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <p className="section-label mb-2">Get in Touch</p>
                                    <div className="column-rule mb-3" style={{ borderTopWidth: "3px", borderTopStyle: "double", borderColor: "var(--ink)", width: "100%" }} />
                                    <h2
                                        className="font-serif text-3xl md:text-4xl font-black tracking-tight"
                                        style={{ color: "var(--ink)" }}
                                    >
                                        Send a<br />Message.
                                    </h2>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 transition-colors mt-1"
                                    style={{ color: "var(--ink-faded)" }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "var(--red)")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-faded)")}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>

                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16"
                                >
                                    <div
                                        className="w-16 h-16 flex items-center justify-center border-2 rounded-full"
                                        style={{ borderColor: "var(--red)", color: "var(--red)" }}
                                    >
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold tracking-tight" style={{ color: "var(--ink)" }}>
                                        Message Sent!
                                    </h3>
                                    <p className="font-sans text-sm" style={{ color: "var(--ink-faded)" }}>
                                        I&apos;ll get back to you as soon as possible.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {[
                                        { id: "name", label: "Name", type: "text", placeholder: "Jane Smith" },
                                        { id: "email", label: "Email", type: "email", placeholder: "jane@example.com" },
                                    ].map(({ id, label, type, placeholder }) => (
                                        <div key={id} className="space-y-2">
                                            <label
                                                htmlFor={id}
                                                className="dateline block"
                                            >
                                                {label}
                                            </label>
                                            <input
                                                type={type}
                                                id={id}
                                                required
                                                value={formState[id as "name" | "email"]}
                                                onChange={e => setFormState({ ...formState, [id]: e.target.value })}
                                                style={inputStyle}
                                                placeholder={placeholder}
                                                onFocus={e => (e.currentTarget.style.borderColor = "var(--ink)")}
                                                onBlur={e => (e.currentTarget.style.borderColor = "var(--rule)")}
                                            />
                                        </div>
                                    ))}

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="dateline block">Message</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={formState.message}
                                            onChange={e => setFormState({ ...formState, message: e.target.value })}
                                            style={{ ...inputStyle, resize: "none" }}
                                            placeholder="Tell me about your project or idea…"
                                            onFocus={e => (e.currentTarget.style.borderColor = "var(--ink)")}
                                            onBlur={e => (e.currentTarget.style.borderColor = "var(--rule)")}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 font-sans text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{ background: "var(--ink)", color: "var(--cream)", borderRadius: "2px" }}
                                        onMouseEnter={e => {
                                            if (!isSubmitting) (e.currentTarget as HTMLElement).style.background = "var(--red)";
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLElement).style.background = "var(--ink)";
                                        }}
                                    >
                                        {isSubmitting ? "Sending…" : "Send Message"}
                                        {!isSubmitting && <span className="text-base">→</span>}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Footer */}
                        <div
                            className="px-6 md:px-12 py-4 border-t"
                            style={{ borderColor: "var(--rule)" }}
                        >
                            <div className="flex gap-6">
                                <a href="https://linkedin.com/in/maheen-ilyas" target="_blank" rel="noopener noreferrer"
                                    className="dateline hover:opacity-60 transition-opacity" style={{ color: "var(--red)" }}>
                                    LinkedIn
                                </a>
                                <a href="https://github.com/Maheen-Ilyas" target="_blank" rel="noopener noreferrer"
                                    className="dateline hover:opacity-60 transition-opacity" style={{ color: "var(--red)" }}>
                                    GitHub
                                </a>
                                <a href="mailto:mahilyaos05@gmail.com"
                                    className="dateline hover:opacity-60 transition-opacity" style={{ color: "var(--red)" }}>
                                    Email
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
