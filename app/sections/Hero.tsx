// sections/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Profile Image - Modern Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl bg-white border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500"
        >
          <Image
            src="/profile-pic.png"
            alt="Naresh Vemula"
            fill
            className="object-cover"
            priority
          />
          {/* Decorative border effect */}
          <div className="absolute inset-0 border-2 border-transparent hover:border-indigo-500 transition-all duration-300"></div>
        </motion.div>

        {/* Intro Text */}
        <div className="text-center lg:text-left max-w-2xl">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-5xl lg:text-6xl font-bold mb-4 text-gray-800"
          >
            Naresh Vemula
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
            className="text-2xl text-[#4f46e5] mb-6 font-medium"
          >
            MSCS Graduate Student • Frontend & ML Focused.
          </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Master’s in Computer Science student specializing in Frontend Development, Machine Learning and Genrative AI.
            Passionate about building intelligent systems that address real-world challenges.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <Link
              href="#contact"
              className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1EoO0co1SZIB7NUeXAHN1dmUNI1f3VVX0/view" // Replace with your actual resume path
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