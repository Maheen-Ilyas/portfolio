"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const field =
  "w-full rounded-2xl bg-surface-low border border-outline-variant px-4 py-3.5 text-primary placeholder:text-outline/60 outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary-fixed";

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    document.documentElement.classList.toggle("lenis-stopped", isOpen);
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500)); // TODO: replace with a real API call
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-100 bg-primary/50 backdrop-blur-sm cursor-pointer"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            data-lenis-prevent
            className="fixed right-0 top-0 bottom-0 w-screen md:w-120 z-101 flex flex-col bg-white md:rounded-l-4xl overflow-hidden overscroll-contain"
          >
            <div className="h-1.5 shrink-0 bg-linear-to-r from-secondary via-secondary-container to-brand-mid" />

            <div
              data-lenis-prevent
              className="flex-1 overflow-y-auto p-6 md:p-10 overscroll-contain"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-sm text-secondary font-medium mb-2">
                    Get in touch
                  </p>
                  <h2 className="font-sans text-4xl font-extrabold tracking-tighter text-primary leading-none">
                    Send a{" "}
                    <span className="font-serif italic font-normal text-secondary">
                      message.
                    </span>
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-outline hover:bg-secondary-fixed hover:text-secondary transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center gap-4 py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-primary">
                    Message sent
                  </h3>
                  <p className="text-on-surface-variant">
                    I&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    {
                      id: "name",
                      label: "Name",
                      type: "text",
                      placeholder: "Jane Smith",
                    },
                    {
                      id: "email",
                      label: "Email",
                      type: "email",
                      placeholder: "jane@example.com",
                    },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id} className="space-y-2">
                      <label
                        htmlFor={id}
                        className="block text-sm font-medium text-primary"
                      >
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required
                        placeholder={placeholder}
                        className={field}
                        value={formState[id as "name" | "email"]}
                        onChange={(e) =>
                          setFormState({ ...formState, [id]: e.target.value })
                        }
                      />
                    </div>
                  ))}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-primary"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className={`${field} resize-none`}
                      placeholder="Tell me about your project or idea…"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-primary text-white py-4 text-sm font-semibold hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending…" : "Send message"}
                  </button>
                </form>
              )}
            </div>

            <div className="px-6 md:px-10 py-4 border-t border-outline-variant/50 flex gap-6 text-sm font-medium text-secondary">
              <a
                href="https://linkedin.com/in/maheen-ilyas"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Maheen-Ilyas"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:mahilyaos05@gmail.com"
                className="hover:text-primary transition-colors"
              >
                Email
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
