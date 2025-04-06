// src/app/sections/Skills.tsx
'use client';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWraper';
import Image from 'next/image';

const skills = [
  { name: "Python", logo: "/skills/python-5.svg" },
  { name: "JavaScript", logo: "/skills/javascript-2.svg" },
  { name: "C", logo: "/skills/c-1.svg" },
  { name: "NumPy", logo: "/skills/numpy-1.svg" },
  { name: "Pandas", logo: "/skills/pandas.svg" },
  { name: "Matplotlib", logo: "/skills/matplotlib-1.svg" },
  { name: "HTML", logo: "/skills/html-1.svg" },
  { name: "CSS", logo: "/skills/css-3.svg" },
  { name: "Tailwind", logo: "/skills/tailwind-css-2.svg" },
  { name: "React.js", logo: "/skills/react-2.svg" },
  { name: "Next.js", logo: "/skills/next-js.svg" },
  { name: "Figma", logo: "/skills/figma-icon.svg" },
  { name: "Git", logo: "/skills/git.svg" },
  { name: "Linux", logo: "/skills/linux-tux.svg" },
  { name: "Postman", logo: "/skills/postman.svg" },
  { name: "GitHub", logo: "/skills/github-icon-2.svg" },
  { name: "Docker", logo: "/skills/docker.svg" }
];

const slideIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12 text-center text-gray-800"
      >
        My <span className="text-[#4f46e5]">Tech Stack</span>
      </motion.h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-20px" }}
            variants={slideIn}
            custom={index}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.1,
                boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.3)'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="
                w-20 h-20 p-4
                bg-white
                rounded-xl shadow-md
                flex items-center justify-center
                border border-gray-100
                cursor-default
              "
            >
              <Image
                src={skill.logo}
                alt={skill.name}
                width={48}  // Explicit width
                height={48} // Explicit height
                className="object-contain"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
              />
            </motion.div>
            <motion.span 
              className="mt-3 text-sm font-medium text-gray-600"
              whileHover={{ color: '#4f46e5' }}
            >
              {skill.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}