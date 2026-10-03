"use client";

export default function BottomNavigation({
  onContactClick,
}: {
  onContactClick: () => void;
}) {
  const link =
    "px-4 py-2 rounded-full text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors";
  return (
    <nav
      aria-label="Quick links"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full bg-primary/90 backdrop-blur-md p-1.5 shadow-xl shadow-primary/30"
    >
      <a
        href="https://linkedin.com/in/maheen-ilyas"
        target="_blank"
        rel="noopener noreferrer"
        className={link}
        data-cursor="Connect"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/Maheen-Ilyas"
        target="_blank"
        rel="noopener noreferrer"
        className={link}
        data-cursor="View"
      >
        GitHub
      </a>
      <button
        onClick={onContactClick}
        data-cursor="Write"
        className="px-5 py-2 rounded-full text-sm font-semibold bg-secondary-container text-primary hover:bg-secondary-fixed transition-colors"
      >
        Contact
      </button>
    </nav>
  );
}
