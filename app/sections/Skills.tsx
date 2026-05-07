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

const borderColor: Record<string, string> = {
  indigo:  "border-indigo-500",
  blue:    "border-blue-500",
  orange:  "border-orange-500",
  sky:     "border-sky-500",
  violet:  "border-violet-500",
  emerald: "border-emerald-500",
};

const labelColor: Record<string, string> = {
  indigo:  "text-indigo-600",
  blue:    "text-blue-600",
  orange:  "text-orange-600",
  sky:     "text-sky-600",
  violet:  "text-violet-600",
  emerald: "text-emerald-600",
};

const badgeColor: Record<string, string> = {
  indigo:  "bg-indigo-50 text-indigo-700",
  blue:    "bg-blue-50 text-blue-700",
  orange:  "bg-orange-50 text-orange-700",
  sky:     "bg-sky-50 text-sky-700",
  violet:  "bg-violet-50 text-violet-700",
  emerald: "bg-emerald-50 text-emerald-700",
};

export default function Skills() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl lg:text-4xl font-bold mb-3 text-center text-slate-900"
      >
        Technical{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Skills
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-slate-500 mb-12 max-w-md mx-auto text-sm"
      >
        Core stack for building data pipelines, cloud platforms, and AI-powered analytics
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className={`bg-white border-l-4 ${borderColor[cat.accent]} border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow`}
          >
            <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${labelColor[cat.accent]}`}>
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`text-sm px-3 py-1 rounded-full font-medium ${badgeColor[cat.accent]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
