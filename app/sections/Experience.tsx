'use client';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    company: "Tesla",
    role: "Data Engineer",
    location: "Texas, USA",
    duration: "Jan 2026 – Present",
    aiHighlight: true,
    points: [
      "Built and maintained PySpark pipelines on AWS (S3, Glue, EMR) processing 3M+ records/day from vehicle telemetry and manufacturing feeds; added Airflow orchestration with retry logic and SLA alerting, reducing pipeline failures by ~15%.",
      "Deployed Kafka + Spark Structured Streaming for real-time sensor data ingestion, reducing end-to-end latency from hours to under 5 minutes and enabling live operational dashboards for engineering teams.",
      "Optimized Snowflake data models via query profiling, clustering keys, and materialized views, cutting dashboard runtimes by 25–30%; enforced data quality with Great Expectations, improving data accuracy scores by 10–15%.",
      "Delivered an LLM-powered NL-to-SQL interface (LangChain + OpenAI + FAISS) on top of Snowflake, reducing manual SQL dependency by ~30% and enabling self-service analytics for non-technical stakeholders."
    ]
  },
  {
    company: "Infosys",
    role: "Associate Data Engineer",
    location: "Hyderabad, India",
    duration: "Nov 2022 – Dec 2023",
    points: [
      "Developed Python/SQL ETL pipelines ingesting 1M+ records/day from 6+ sources into Snowflake; improved query performance by 10–15% through partition pruning and index optimization.",
      "Managed Kafka event ingestion (thousands of events/min) and automated Airflow DAGs for daily/hourly batch jobs, cutting manual processing overhead by ~15% and improving SLA compliance.",
      "Standardized cross-source transformation logic using reusable SQL templates and dbt-style models, reducing data inconsistency issues and analyst fix requests."
    ]
  },
  {
    company: "Wipro",
    role: "Data Engineering Intern",
    location: "Hyderabad, India",
    duration: "Feb 2021 – Oct 2022",
    points: [
      "Built Python/SQL ETL pipelines on 100K–300K record daily datasets; used AWS S3 and Glue for ingestion and assisted in dimensional data modeling for a BI team of 8 analysts.",
      "Optimized slow SQL transforms and PySpark jobs, improving daily processing throughput across two client project workloads."
    ]
  }
];

export default function Experience() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-16 text-center text-gray-800"
      >
        Work <span className="text-[#4f46e5]">Experience</span>
      </motion.h2>

      <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-12 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#4f46e5] border-4 border-white shadow-sm" />

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                <div>
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <FiBriefcase className="text-[#4f46e5]" />
                      {exp.role}
                    </h3>
                    {exp.aiHighlight && (
                      <span className="px-2 py-0.5 text-xs font-semibold bg-violet-100 text-violet-700 rounded-full border border-violet-200">
                        AI / LLM
                      </span>
                    )}
                  </div>
                  <p className="text-[#4f46e5] font-semibold text-lg">{exp.company}</p>
                </div>

                <div className="text-sm text-gray-500 space-y-1 shrink-0">
                  <p className="flex items-center gap-2"><FiCalendar /> {exp.duration}</p>
                  <p className="flex items-center gap-2"><FiMapPin /> {exp.location}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4f46e5] shrink-0" />
                    {point}
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
