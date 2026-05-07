'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "LLM-Powered NL-to-SQL Data Assistant",
    year: "2026",
    gradient: "from-violet-600 to-indigo-600",
    icon: "🤖",
    tags: ["Python", "LangChain", "OpenAI API", "FAISS", "Snowflake", "FastAPI"],
    points: [
      "Built an AI assistant converting natural language to Snowflake SQL using LangChain + OpenAI, with RAG over schema metadata via FAISS embeddings; cut manual SQL dependency by ~40% in testing.",
      "Exposed the pipeline as a REST API via FastAPI with async query execution and structured JSON responses, ready for BI tool integration."
    ],
    links: []
  },
  {
    title: "Real-Time Streaming Pipeline with Anomaly Detection",
    year: "2025",
    gradient: "from-orange-500 to-rose-600",
    icon: "⚡",
    tags: ["Apache Kafka", "Spark Structured Streaming", "Python", "AWS S3", "Airflow"],
    points: [
      "Designed an event-driven pipeline using Kafka and Spark Structured Streaming to ingest high-volume data in near real-time, writing enriched outputs to partitioned S3 tables with Airflow-orchestrated alerting DAGs.",
      "Integrated statistical anomaly detection into the Spark pipeline to flag irregular patterns within seconds; sustained 3× simulated load with zero message loss."
    ],
    links: []
  },
  {
    title: "RAG-Based Document Search & Q&A System",
    year: "2025",
    gradient: "from-emerald-500 to-teal-600",
    icon: "🔍",
    tags: ["Python", "LangChain", "Pinecone", "OpenAI API", "FastAPI", "Docker"],
    points: [
      "Built a semantic search system over document corpora using LangChain, OpenAI embeddings, and Pinecone vector DB; implemented RAG pipeline feeding retrieved chunks to GPT-4 for grounded, citation-aware answers.",
      "Containerized the full stack with Docker and served via FastAPI, enabling repeatable deployment and clean integration with existing internal tooling."
    ],
    links: []
  },
  {
    title: "GEN-AI-EMAIL – Cover Letter & Cold Email Generator",
    year: "2024",
    gradient: "from-sky-500 to-blue-600",
    icon: "✉️",
    tags: ["LangChain", "Streamlit", "LLaMA 3", "Groq API", "Python", "PyMuPDF"],
    points: [
      "Developed an AI-powered web app that generates personalized cover letters and cold emails by uploading PDF resumes and extracting job details via pasted job post links.",
      "Powered by LLaMA 3 (70B) via Groq API for fast LLM responses; built with Streamlit UI and LangChain orchestration."
    ],
    links: [{ label: "GitHub", url: "https://github.com/Naresh-081/GEN-AI-EMAIL", icon: "github" }]
  },
  {
    title: "AI-Driven Real-Time Phishing Detection System",
    year: "2024",
    gradient: "from-red-500 to-pink-600",
    icon: "🛡️",
    tags: ["Python", "BERT", "FastAPI", "PyTorch", "Google Safe Browsing API"],
    points: [
      "Built a hybrid phishing detection system using BERT and Google Safe Browsing API, achieving 100% accuracy in phishing URL and email classification; trained on 66K+ samples.",
      "Deployed with FastAPI handling 1000+ security requests/day with sub-second latency, outperforming XGBoost baseline by 9%."
    ],
    links: [{ label: "GitHub", url: "https://github.com/Naresh-081/Phishing_App", icon: "github" }]
  }
];

export default function Projects() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-center text-gray-800"
      >
        Featured <span className="text-[#4f46e5]">Projects</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-gray-500 mb-12 max-w-xl mx-auto"
      >
        Data engineering and AI projects spanning real-time pipelines, LLM applications, and cloud platforms
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            {/* Gradient header */}
            <div className={`bg-gradient-to-r ${project.gradient} px-5 py-4 flex items-center justify-between`}>
              <span className="text-2xl">{project.icon}</span>
              <span className="text-white/80 text-sm font-medium">{project.year}</span>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-bold text-gray-800 mb-3 leading-snug">
                {project.title}
              </h3>

              <ul className="space-y-2 mb-4 flex-1">
                {project.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4f46e5] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.links.length > 0 && (
                <div className="flex gap-3 pt-2 border-t border-gray-100">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[#4f46e5] hover:text-[#4338ca] font-medium transition-colors"
                    >
                      {link.icon === "github" ? <FiGithub className="w-4 h-4" /> : <FiExternalLink className="w-4 h-4" />}
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
