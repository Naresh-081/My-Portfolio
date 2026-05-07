'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Tesla",
    role: "Data Engineer",
    location: "Texas, USA",
    period: "Jan 2026 – Present",
    badge: "AI / LLM",
    points: [
      "Built and maintained PySpark pipelines on AWS (S3, Glue, EMR) processing 3M+ records/day from vehicle telemetry and manufacturing feeds; added Airflow orchestration with retry logic and SLA alerting, reducing pipeline failures by ~15%.",
      "Deployed Kafka + Spark Structured Streaming for real-time sensor data ingestion, reducing end-to-end latency from hours to under 5 minutes and enabling live operational dashboards.",
      "Optimized Snowflake data models via query profiling, clustering keys, and materialized views, cutting dashboard runtimes by 25–30%; enforced data quality with Great Expectations, improving accuracy by 10–15%.",
      "Delivered an LLM-powered NL-to-SQL interface (LangChain + OpenAI + FAISS) on top of Snowflake, reducing manual SQL dependency by ~30% and enabling self-service analytics for non-technical stakeholders.",
    ],
  },
  {
    company: "Infosys",
    role: "Associate Data Engineer",
    location: "Hyderabad, India",
    period: "Nov 2022 – Dec 2023",
    points: [
      "Developed Python/SQL ETL pipelines ingesting 1M+ records/day from 6+ sources into Snowflake; improved query performance by 10–15% through partition pruning and index optimization.",
      "Managed Kafka event ingestion (thousands of events/min) and automated Airflow DAGs for daily/hourly batch jobs, cutting manual processing overhead by ~15% and improving SLA compliance.",
      "Standardized cross-source transformation logic using reusable SQL templates and dbt-style models, reducing data inconsistency issues and analyst fix requests.",
    ],
  },
  {
    company: "Wipro",
    role: "Data Engineering Intern",
    location: "Hyderabad, India",
    period: "Feb 2021 – Oct 2022",
    points: [
      "Built Python/SQL ETL pipelines on 100K–300K record daily datasets; used AWS S3 and Glue for ingestion and assisted in dimensional data modeling for a BI team of 8 analysts.",
      "Optimized slow SQL transforms and PySpark jobs, improving daily processing throughput across two client project workloads.",
    ],
  },
];

export default function Experience() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl lg:text-4xl font-bold mb-3 text-center text-slate-900"
      >
        Work{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-slate-500 mb-14 max-w-md mx-auto text-sm"
      >
        3+ years across data engineering, real-time streaming, and AI-powered analytics
      </motion.p>

      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-10 space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />

            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap mb-0.5">
                    <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                    {exp.badge && (
                      <span className="text-xs font-semibold bg-violet-100 text-violet-700 px-2.5 py-0.5 rounded-full border border-violet-200">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-indigo-600 font-semibold">{exp.company}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-medium text-slate-700">{exp.period}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{exp.location}</p>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5">
                {exp.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
