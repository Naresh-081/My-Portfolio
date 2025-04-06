// sections/Education.tsx
'use client';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-gray-800"
        >
          My <span className="text-[#4f46e5]">Education</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Masters Degree - Slides from left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
          >
            <h3 className="text-xl font-bold mb-2 text-[#4f46e5]">
              Master of Science in Computer Science
            </h3>
            <p className="text-gray-600 mb-1">
              Texas A&M University - Corpus Christi
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Expected Dec 2025 • GPA: 3.7/4.0
            </p>
            
            <h4 className="font-semibold mb-2 text-gray-800">
              Relevant Coursework:
            </h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Advanced Software Engineering</li>
              <li>• Machine Learning Systems</li>
              <li>• Natural Language Processing</li>
              <li>• Cloud Computing Architecture</li>
            </ul>
          </motion.div>

          {/* Bachelors Degree - Slides from right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
          >
            <h3 className="text-xl font-bold mb-2 text-[#4f46e5]">
              Bachelor of Technology in Computer Science
            </h3>
            <p className="text-gray-600 mb-1">
              Mahatma Gandhi Institute of Technology
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Aug 2023 • GPA: 3.1/4.0
            </p>
            
            <h4 className="font-semibold mb-2 text-gray-800">
              Relevant Coursework:
            </h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Data Structures & Algorithms</li>
              <li>• Database Management Systems</li>
              <li>• Artificial Intelligence</li>
              <li>• Computer Networks</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center text-gray-600 max-w-3xl mx-auto"
        >
          <p>
            My academic journey has equipped me with both theoretical knowledge and practical skills,
            particularly in AI/ML systems and software engineering principles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}