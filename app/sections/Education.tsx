'use client';
import { motion } from 'framer-motion';

const degrees = [
  {
    degree: "Master of Science in Computer Science",
    school: "Texas A&M University – Corpus Christi",
    period: "Jan 2024 – Dec 2025",
    gpa: "3.3 / 4.0",
    courses: ["Machine Learning Systems", "Generative AI", "Advanced Software Engineering", "Advanced Operating Systems"],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Mahatma Gandhi Institute of Technology, India",
    period: "Jul 2019 – Aug 2023",
    gpa: "3.1 / 4.0",
    courses: ["Data Structures & Algorithms", "Database Management Systems", "Computer Architecture", "Computer Networks"],
  },
];

export default function Education() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
          Education
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Academic background in computer science with focus on AI/ML and data systems
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {degrees.map((d, i) => (
          <motion.div
            key={d.school}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-slate-900/60 border border-slate-800 hover:border-indigo-500/30 rounded-2xl p-7 shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-sm font-bold text-white leading-snug">{d.degree}</h3>
              <span className="shrink-0 text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/25 px-2.5 py-1 rounded-full">
                {d.gpa}
              </span>
            </div>

            <p className="text-indigo-400 font-semibold text-sm mb-1">{d.school}</p>
            <p className="text-xs text-slate-500 mb-5">{d.period}</p>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2.5">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {d.courses.map((c) => (
                  <span key={c} className="text-xs bg-slate-800 text-slate-300 border border-slate-700 px-2.5 py-1 rounded-full hover:border-indigo-500/40 hover:text-indigo-300 transition-colors cursor-default">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
