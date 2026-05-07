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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
          Work{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          3+ years across data engineering, real-time streaming, and AI-powered analytics
        </p>
      </motion.div>

      <div className="relative pl-4 md:pl-8">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-slate-700 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[21px] md:-left-[25px] top-7 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#040d1c] shadow-lg shadow-indigo-500/30 group-hover:scale-125 transition-transform duration-300" />

              <div className="bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 md:p-7 shadow-lg hover:shadow-indigo-500/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 ml-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap mb-1">
                      <h3 className="text-base font-bold text-white">{exp.role}</h3>
                      {exp.badge && (
                        <span className="text-xs font-semibold bg-violet-500/15 text-violet-400 px-2.5 py-0.5 rounded-full border border-violet-500/25">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-indigo-400 font-semibold text-sm">{exp.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-medium text-slate-300">{exp.period}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500/60 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
