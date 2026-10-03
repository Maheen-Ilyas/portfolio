"use client";

const skills = [
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "Dart",
  "Flutter",
  "React",
  "Next.js",
  "FastAPI",
  "Firebase",
  "Supabase",
  "ChromaDB",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Scikit-Learn",
  "TensorFlow",
  "PyTorch",
  "Hugging Face",
  "LangChain",
];
const facts = [
  { num: "4+", label: "Years of code" },
  { num: "3+", label: "Major projects" },
  { num: "1", label: "Research paper" },
];
const research = [
  { dt: "Domain", dd: "Machine Learning" },
  { dt: "Focus", dd: "Retrieval-Augmented Generation" },
  { dt: "Models", dd: "Fine-tuning LLMs" },
  { dt: "Application", dd: "Applied Deep Learning" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 className="group font-sans text-4xl md:text-6xl font-extrabold tracking-tighter uppercase leading-none text-primary">
            <span data-redact>The Journey</span>
            <span className="font-serif italic font-normal normal-case ml-3 text-secondary">
              so far
            </span>
          </h2>
          <p className="text-sm rounded-full px-4 py-1.5 self-start md:self-auto bg-secondary-fixed/60 text-brand-mid">
            Facts on file
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div
            className="lg:col-span-8 rounded-4xl bg-secondary-fixed/50 p-8 md:p-12"
            data-cursor="Read"
          >
            <p className="font-serif text-2xl md:text-4xl leading-snug text-primary">
              I didn&apos;t start off with AI, big projects, or a very refined
              tech stack. I started with curiosity. That small spark grew into
              building apps, leading communities, and exploring how artificial
              intelligence can transform everyday experiences.
            </p>
          </div>
          <ul className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-4">
            {facts.map((f) => (
              <li
                key={f.label}
                className="rounded-3xl bg-white border border-outline-variant/50 p-5 md:p-6 flex flex-col justify-center"
              >
                <span className="font-sans text-4xl md:text-5xl font-extrabold tracking-tighter text-secondary">
                  {f.num}
                </span>
                <span className="text-sm text-on-surface-variant mt-1">
                  {f.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="rounded-4xl bg-white border border-outline-variant/50 p-8">
            <h3 className="font-sans text-lg font-bold text-primary mb-6">
              Technical skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  data-cursor="Inspect"
                  className="rounded-full px-3.5 py-1.5 text-sm bg-surface-low border border-outline-variant/60 text-on-surface hover:bg-secondary hover:border-secondary hover:text-white transition-colors cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-4xl bg-primary p-8 text-white">
            <h3 className="font-sans text-lg font-bold mb-6">
              Research interests
            </h3>
            <dl>
              {research.map((r) => (
                <div
                  key={r.dt}
                  className="flex justify-between gap-6 py-3.5 border-b border-white/15 last:border-0 hover:pl-2 transition-all"
                  data-cursor="Read"
                >
                  <dt className="text-secondary-fixed-dim text-sm">{r.dt}</dt>
                  <dd className="font-medium text-right">{r.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
