'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    label: "Languages & Query",
    color: "blue" as const,
    skills: ["Python", "SQL", "PySpark", "Spark SQL"]
  },
  {
    label: "Data Engineering",
    color: "indigo" as const,
    skills: ["ETL / ELT Pipelines", "Apache Airflow", "dbt", "Apache Spark", "Delta Lake", "Apache Iceberg", "Data Modeling"]
  },
  {
    label: "Streaming & Real-Time",
    color: "orange" as const,
    skills: ["Apache Kafka", "Spark Structured Streaming"]
  },
  {
    label: "Cloud & Platforms",
    color: "sky" as const,
    skills: ["AWS S3", "AWS Glue", "AWS EMR", "AWS Lambda", "Redshift", "Athena", "Snowflake", "Databricks"]
  },
  {
    label: "AI / LLM (Applied)",
    color: "violet" as const,
    skills: ["LangChain", "OpenAI API", "RAG Pipelines", "FAISS", "Pinecone", "Embeddings", "Semantic Search"]
  },
  {
    label: "DevOps & Quality",
    color: "emerald" as const,
    skills: ["Docker", "FastAPI", "GitHub Actions (CI/CD)", "Git", "Great Expectations", "Pipeline Monitoring"]
  }
];

type ColorKey = "blue" | "indigo" | "orange" | "sky" | "violet" | "emerald";

const colorMap: Record<ColorKey, { card: string; badge: string; header: string; dot: string }> = {
  blue:    { card: "border-blue-200 bg-blue-50/60",    badge: "bg-blue-100 text-blue-700",    header: "text-blue-600",    dot: "bg-blue-500" },
  indigo:  { card: "border-indigo-200 bg-indigo-50/60", badge: "bg-indigo-100 text-indigo-700", header: "text-indigo-600",  dot: "bg-indigo-500" },
  orange:  { card: "border-orange-200 bg-orange-50/60", badge: "bg-orange-100 text-orange-700", header: "text-orange-600",  dot: "bg-orange-500" },
  sky:     { card: "border-sky-200 bg-sky-50/60",       badge: "bg-sky-100 text-sky-700",       header: "text-sky-600",     dot: "bg-sky-500" },
  violet:  { card: "border-violet-200 bg-violet-50/60", badge: "bg-violet-100 text-violet-700", header: "text-violet-600",  dot: "bg-violet-500" },
  emerald: { card: "border-emerald-200 bg-emerald-50/60", badge: "bg-emerald-100 text-emerald-700", header: "text-emerald-600", dot: "bg-emerald-500" }
};

export default function Skills() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-center text-gray-800"
      >
        Technical <span className="text-[#4f46e5]">Skills</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-gray-500 mb-10 max-w-xl mx-auto"
      >
        Core stack for building data pipelines, cloud platforms, and AI-powered analytics
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, index) => {
          const colors = colorMap[cat.color];
          return (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`rounded-xl border p-5 ${colors.card}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-2 h-2 rounded-full shrink-0 ${colors.dot}`} />
                <h3 className={`font-semibold text-sm uppercase tracking-wider ${colors.header}`}>
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${colors.badge}`}
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
