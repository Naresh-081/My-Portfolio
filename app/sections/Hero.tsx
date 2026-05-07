'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "3M+", label: "Records/Day (Tesla)" },
  { value: "AWS", label: "& Snowflake" },
  { value: "LLM", label: "RAG / LangChain" }
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl bg-white border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 shrink-0"
        >
          <Image
            src="/profile-pic.png"
            alt="Naresh Vemula"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Intro Text */}
        <div className="text-center lg:text-left max-w-2xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to opportunities
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.05, type: 'spring', stiffness: 100 }}
            className="text-5xl lg:text-6xl font-bold mb-3 text-gray-800"
          >
            Naresh Vemula
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
            className="text-2xl text-[#4f46e5] mb-5 font-semibold"
          >
            Data Engineer · Cloud & ETL · AI/LLM
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 100 }}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Data Engineer with 3+ years of experience building scalable ETL/ELT pipelines, real-time streaming systems,
            and cloud-native data platforms on AWS and Snowflake. Experienced integrating LLM capabilities — RAG, LangChain,
            vector search — into data workflows to enable self-service analytics and AI-powered data discovery.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="grid grid-cols-4 gap-4 mb-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-xl font-bold text-[#4f46e5]">{stat.value}</p>
                <p className="text-xs text-gray-500 leading-tight">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.25, type: 'spring', stiffness: 100 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <Link
              href="#contact"
              className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1yJyZ5eBI1CcaHf9VpJ-O-4FyDNT95WqP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-lg hover:shadow-xl border border-gray-200"
            >
              View Resume
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
