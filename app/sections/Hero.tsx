'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { value: "3+",   label: "Years Experience" },
  { value: "3M+",  label: "Records / Day" },
  { value: "AWS",  label: "& Snowflake" },
  { value: "LLM",  label: "RAG · LangChain" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#020617] overflow-hidden">

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── Text ── */}
          <div className="flex-1 text-center lg:text-left">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none mb-5"
            >
              Naresh<br className="hidden lg:block" /> Vemula
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl lg:text-2xl font-semibold mb-6 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent"
            >
              Data Engineer · Cloud &amp; ETL · AI / LLM
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-base lg:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              3+ years building scalable ETL/ELT pipelines, real-time streaming systems,
              and cloud-native platforms on AWS and Snowflake. Integrating LLM capabilities —
              RAG, LangChain, vector search — into production data workflows.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-4 gap-4 mb-10 max-w-sm mx-auto lg:mx-0"
            >
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-indigo-500/40 pl-3">
                  <p className="text-lg font-bold text-white">{s.value}</p>
                  <p className="text-xs text-slate-500 leading-tight mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <Link
                href="#contact"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3 rounded-lg font-medium text-sm transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          {/* ── Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="shrink-0 relative"
          >
            {/* glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-600/40 to-violet-600/30 rounded-3xl blur-2xl" />
            <div className="relative w-60 h-60 lg:w-76 lg:h-76 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                 style={{ width: '18rem', height: '18rem' }}>
              <Image
                src="/profile-pic.png"
                alt="Naresh Vemula"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
