'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "LLM-Powered NL-to-SQL Data Assistant",
    year: "2026",
    gradient: "from-indigo-600 to-violet-600",
    glow: "hover:shadow-indigo-500/15",
    hoverBorder: "hover:border-indigo-500/40",
    tags: ["Python", "LangChain", "OpenAI API", "FAISS", "Snowflake", "FastAPI"],
    points: [
      "AI assistant converting natural language to Snowflake SQL using LangChain + OpenAI, with RAG over schema metadata via FAISS; cut manual SQL dependency by ~40%.",
      "REST API via FastAPI with async query execution and JSON responses, ready for BI tool integration.",
    ],
    links: [],
  },
  {
    title: "Real-Time Streaming Pipeline with Anomaly Detection",
    year: "2025",
    gradient: "from-orange-500 to-rose-500",
    glow: "hover:shadow-orange-500/15",
    hoverBorder: "hover:border-orange-500/40",
    tags: ["Apache Kafka", "Spark Structured Streaming", "Python", "AWS S3", "Airflow"],
    points: [
      "Event-driven pipeline using Kafka + Spark Structured Streaming writing to partitioned S3 with Airflow-orchestrated alerting DAGs.",
      "Statistical anomaly detection in Spark to flag patterns within seconds; sustained 3× simulated load with zero message loss.",
    ],
    links: [],
  },
  {
    title: "RAG-Based Document Search & Q&A System",
    year: "2025",
    gradient: "from-emerald-500 to-teal-500",
    glow: "hover:shadow-emerald-500/15",
    hoverBorder: "hover:border-emerald-500/40",
    tags: ["Python", "LangChain", "Pinecone", "OpenAI API", "FastAPI", "Docker"],
    points: [
      "Semantic search using LangChain + OpenAI embeddings + Pinecone; RAG pipeline feeds GPT-4 retrieved chunks for citation-aware answers.",
      "Containerized with Docker, served via FastAPI for repeatable deployment and internal tooling integration.",
    ],
    links: [],
  },
  {
    title: "GEN-AI-EMAIL — Cover Letter & Cold Email Generator",
    year: "2024",
    gradient: "from-sky-500 to-blue-600",
    glow: "hover:shadow-sky-500/15",
    hoverBorder: "hover:border-sky-500/40",
    tags: ["LangChain", "Streamlit", "LLaMA 3", "Groq API", "Python"],
    points: [
      "AI web app generating cover letters and cold emails from uploaded PDF resumes and pasted job post links using LangChain orchestration.",
      "LLaMA 3 (70B) via Groq API; Streamlit UI with PyMuPDF for PDF parsing.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/Naresh-081/GEN-AI-EMAIL", type: "github" }],
  },
  {
    title: "AI-Driven Real-Time Phishing Detection System",
    year: "2024",
    gradient: "from-red-500 to-pink-600",
    glow: "hover:shadow-red-500/15",
    hoverBorder: "hover:border-red-500/40",
    tags: ["Python", "BERT", "FastAPI", "PyTorch", "Google Safe Browsing API"],
    points: [
      "Hybrid BERT + Google Safe Browsing phishing detection achieving 100% accuracy on 66K+ samples; outperformed XGBoost by 9%.",
      "FastAPI deployment handling 1000+ security requests/day with sub-second latency.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/Naresh-081/Phishing_App", type: "github" }],
  },
];

export default function Projects() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
          Featured{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Data engineering and AI projects — real-time pipelines, LLM applications, and cloud platforms
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className={`group bg-slate-900/60 border border-slate-800 ${p.hoverBorder} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl ${p.glow} hover:-translate-y-1 transition-all duration-300 flex flex-col`}
          >
            {/* Gradient top bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${p.gradient}`} />

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-2 mb-4">
                <h3 className="text-sm font-bold text-white leading-snug group-hover:text-indigo-300 transition-colors duration-300">
                  {p.title}
                </h3>
                <span className="shrink-0 text-xs text-slate-500 font-medium mt-0.5">{p.year}</span>
              </div>

              <ul className="space-y-2 mb-5 flex-1">
                {p.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400/60 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-slate-800 text-slate-400 px-2.5 py-0.5 rounded-full border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              {p.links.length > 0 && (
                <div className="flex gap-3 pt-4 border-t border-slate-800">
                  {p.links.map((link, k) => (
                    <a key={k} href={link.url} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                      {link.type === "github" ? <FiGithub className="w-3.5 h-3.5" /> : <FiExternalLink className="w-3.5 h-3.5" />}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
