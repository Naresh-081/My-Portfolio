'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "LLM-Powered NL-to-SQL Data Assistant",
    year: "2026",
    accentClass: "bg-gradient-to-r from-indigo-600 to-violet-600",
    tags: ["Python", "LangChain", "OpenAI API", "FAISS", "Snowflake", "FastAPI"],
    points: [
      "AI assistant converting natural language to Snowflake SQL using LangChain + OpenAI, with RAG over schema metadata via FAISS embeddings; cut manual SQL dependency by ~40% in testing.",
      "Exposed as a REST API via FastAPI with async query execution and structured JSON responses, ready for BI tool and data portal integration.",
    ],
    links: [],
  },
  {
    title: "Real-Time Streaming Pipeline with Anomaly Detection",
    year: "2025",
    accentClass: "bg-gradient-to-r from-orange-500 to-rose-500",
    tags: ["Apache Kafka", "Spark Structured Streaming", "Python", "AWS S3", "Airflow"],
    points: [
      "Event-driven pipeline using Kafka + Spark Structured Streaming for near real-time ingestion, writing to partitioned S3 tables with Airflow-orchestrated alerting DAGs.",
      "Statistical anomaly detection integrated into Spark to flag irregular patterns within seconds; sustained 3× simulated load with zero message loss.",
    ],
    links: [],
  },
  {
    title: "RAG-Based Document Search & Q&A System",
    year: "2025",
    accentClass: "bg-gradient-to-r from-emerald-500 to-teal-500",
    tags: ["Python", "LangChain", "Pinecone", "OpenAI API", "FastAPI", "Docker"],
    points: [
      "Semantic search over document corpora using LangChain + OpenAI embeddings + Pinecone vector DB; RAG pipeline feeding retrieved chunks to GPT-4 for citation-aware answers.",
      "Containerized with Docker and served via FastAPI for repeatable deployment and clean integration with internal tooling.",
    ],
    links: [],
  },
  {
    title: "GEN-AI-EMAIL — Cover Letter & Cold Email Generator",
    year: "2024",
    accentClass: "bg-gradient-to-r from-sky-500 to-blue-600",
    tags: ["LangChain", "Streamlit", "LLaMA 3", "Groq API", "Python"],
    points: [
      "AI web app generating personalized cover letters and cold emails from uploaded PDF resumes and pasted job post links using LangChain orchestration.",
      "Powered by LLaMA 3 (70B) via Groq API for fast responses; Streamlit UI with PyMuPDF for PDF parsing.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/Naresh-081/GEN-AI-EMAIL", type: "github" }],
  },
  {
    title: "AI-Driven Real-Time Phishing Detection System",
    year: "2024",
    accentClass: "bg-gradient-to-r from-red-500 to-pink-600",
    tags: ["Python", "BERT", "FastAPI", "PyTorch", "Google Safe Browsing API"],
    points: [
      "Hybrid phishing detection using BERT + Google Safe Browsing API, achieving 100% accuracy on 66K+ samples; outperformed XGBoost baseline by 9%.",
      "FastAPI deployment handling 1000+ security requests/day with sub-second latency.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/Naresh-081/Phishing_App", type: "github" }],
  },
];

export default function Projects() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl lg:text-4xl font-bold mb-3 text-center text-slate-900"
      >
        Featured{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-slate-500 mb-14 max-w-md mx-auto text-sm"
      >
        Data engineering and AI projects spanning real-time pipelines, LLM applications, and cloud platforms
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
          >
            {/* Thin gradient top bar */}
            <div className={`h-1.5 w-full ${p.accentClass}`} />

            <div className="p-6 flex flex-col flex-1">
              {/* Title + year */}
              <div className="flex items-start justify-between gap-2 mb-4">
                <h3 className="text-base font-bold text-slate-900 leading-snug">{p.title}</h3>
                <span className="shrink-0 text-xs text-slate-400 font-medium mt-0.5">{p.year}</span>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-5 flex-1">
                {p.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {p.links.length > 0 && (
                <div className="flex gap-3 pt-4 border-t border-slate-100">
                  {p.links.map((link, k) => (
                    <a
                      key={k}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                    >
                      {link.type === "github" ? <FiGithub className="w-4 h-4" /> : <FiExternalLink className="w-4 h-4" />}
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
