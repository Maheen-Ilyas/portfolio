"use client";

export default function BottomNavigation({
  onContactClick,
}: {
  onContactClick: () => void;
}) {
  const item =
    "flex-1 text-center px-4 py-2.5 rounded-full text-sm font-medium text-primary hover:bg-secondary-fixed transition-colors";

  return (
    <nav
      aria-label="Quick links"
      className="fixed bottom-4 inset-x-4 md:inset-x-8 z-50 flex items-center rounded-full bg-white/70 backdrop-blur-md border border-outline-variant/50 p-2"
    >
      <a
        href="https://linkedin.com/in/maheen-ilyas"
        target="_blank"
        rel="noopener noreferrer"
        className={item}
        data-cursor="Connect"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/Maheen-Ilyas"
        target="_blank"
        rel="noopener noreferrer"
        className={item}
        data-cursor="View"
      >
        GitHub
      </a>
      <button onClick={onContactClick} className={item} data-cursor="Write">
        Contact
      </button>
    </nav>
  );
}
