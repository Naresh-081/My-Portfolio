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
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl lg:text-4xl font-bold mb-3 text-center text-slate-900"
      >
        Education
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-slate-500 mb-12 max-w-md mx-auto text-sm"
      >
        Academic background in computer science with focus on AI/ML and data systems
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        {degrees.map((d, i) => (
          <motion.div
            key={d.school}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{d.degree}</h3>
                <p className="text-indigo-600 font-medium text-sm">{d.school}</p>
              </div>
              <span className="shrink-0 text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                GPA {d.gpa}
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-4">{d.period}</p>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {d.courses.map((c) => (
                  <span key={c} className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full">
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
