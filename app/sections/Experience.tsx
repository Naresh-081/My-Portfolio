'use client';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    company: "Northern Trust",
    role: "Data Engineer",
    location: "TX, USA",
    duration: "Aug 2025 - Dec 2025",
    points: [
      "Engineered data pipelines in Python and SQL for 15M+ daily financial transactions, enhancing efficiency by 32%.",
      "Optimized cloud-based data models in Snowflake, improving query performance by 27%.",
      "Integrated multi-source datasets from APIs and Kafka using PySpark and AWS Glue.",
      "Ensured 99.8% accuracy in regulatory reporting through automated anomaly detection on 2TB monthly datasets."
    ]
  },
  {
    company: "Hexaware Technologies",
    role: "Data Engineer",
    location: "India",
    duration: "Sep 2021 - Dec 2023",
    points: [
      "Developed end-to-end ETL pipelines processing 20GB+ daily enterprise data using Airflow.",
      "Designed relational data models in Amazon Redshift, reducing query execution time by 28%.",
      "Accelerated batch processing jobs using PySpark on AWS EMR, reducing processing time by 35%.",
      "Collaborated on 12+ production releases with zero critical failures using CI/CD pipelines."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-16 text-center text-gray-800"
        >
          Work <span className="text-[#4f46e5]">Experience</span>
        </motion.h2>

        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#4f46e5] border-4 border-white shadow-sm" />
              
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                      <FiBriefcase className="text-[#4f46e5] text-xl" />
                      {exp.role}
                    </h3>
                    <p className="text-[#4f46e5] font-semibold text-lg">{exp.company}</p>
                  </div>
                  
                  <div className="text-sm text-gray-500 space-y-1">
                    <p className="flex items-center gap-2">
                      <FiCalendar /> {exp.duration}
                    </p>
                    <p className="flex items-center gap-2">
                      <FiMapPin /> {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4f46e5] shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}