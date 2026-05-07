'use client';
import { motion } from 'framer-motion';

const categories = [
  {
    label: "Languages & Query",
    accent: "indigo",
    skills: ["Python", "SQL", "PySpark", "Spark SQL"],
  },
  {
    label: "Data Engineering",
    accent: "blue",
    skills: ["ETL / ELT Pipelines", "Apache Airflow", "dbt", "Apache Spark", "Delta Lake", "Apache Iceberg", "Data Modeling"],
  },
  {
    label: "Streaming & Real-Time",
    accent: "orange",
    skills: ["Apache Kafka", "Spark Structured Streaming"],
  },
  {
    label: "Cloud & Platforms",
    accent: "sky",
    skills: ["AWS S3", "AWS Glue", "AWS EMR", "AWS Lambda", "Redshift", "Athena", "Snowflake", "Databricks"],
  },
  {
    label: "AI / LLM (Applied)",
    accent: "violet",
    skills: ["LangChain", "OpenAI API", "RAG Pipelines", "FAISS", "Pinecone", "Embeddings", "Semantic Search"],
  },
  {
    label: "DevOps & Quality",
    accent: "emerald",
    skills: ["Docker", "FastAPI", "GitHub Actions", "Git", "Great Expectations", "Pipeline Monitoring"],
  },
];

const styles: Record<string, { border: string; label: string; badge: string; glow: string }> = {
  indigo:  { border: "border-indigo-500/50",  label: "text-indigo-400",  badge: "bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/25 border border-indigo-500/20",  glow: "hover:shadow-indigo-500/10" },
  blue:    { border: "border-blue-500/50",    label: "text-blue-400",    badge: "bg-blue-500/10 text-blue-300 hover:bg-blue-500/25 border border-blue-500/20",            glow: "hover:shadow-blue-500/10" },
  orange:  { border: "border-orange-500/50",  label: "text-orange-400",  badge: "bg-orange-500/10 text-orange-300 hover:bg-orange-500/25 border border-orange-500/20",    glow: "hover:shadow-orange-500/10" },
  sky:     { border: "border-sky-500/50",     label: "text-sky-400",     badge: "bg-sky-500/10 text-sky-300 hover:bg-sky-500/25 border border-sky-500/20",                glow: "hover:shadow-sky-500/10" },
  violet:  { border: "border-violet-500/50",  label: "text-violet-400",  badge: "bg-violet-500/10 text-violet-300 hover:bg-violet-500/25 border border-violet-500/20",    glow: "hover:shadow-violet-500/10" },
  emerald: { border: "border-emerald-500/50", label: "text-emerald-400", badge: "bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/25 border border-emerald-500/20", glow: "hover:shadow-emerald-500/10" },
};

export default function Skills() {
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
          Technical{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Core stack for building data pipelines, cloud platforms, and AI-powered analytics
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => {
          const s = styles[cat.accent];
          return (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`bg-slate-900/60 border-l-4 ${s.border} border border-slate-800 rounded-2xl p-5 hover:border-slate-700 hover:-translate-y-0.5 hover:shadow-xl ${s.glow} transition-all duration-300`}
            >
              <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${s.label}`}>
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1 rounded-full font-medium cursor-default transition-all duration-200 ${s.badge}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
