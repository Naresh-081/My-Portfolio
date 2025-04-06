// src/app/sections/Projects.tsx
'use client';
import { useState, useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '../components/SectionWraper';

const projects = [
  {
    title: "Empath AI",
    description: "Emotion-sensitive support bot with human assistance",
    tags: ["Python", "React.js", "FastAPI", "NLP", "LLMs"],
    image: "/empath.png",
    points: [
      "Achieved 90% accuracy in emotion detection using TextBlob and Google LearnLM",
      "Reduced response latency by 25% through optimized API architecture",
      "Increased user engagement by 20% with seamless AI-human handoff"
    ],
    links: [
      { name: "Demo", url: "#", icon: <FiExternalLink /> },
      { name: "Code", url: "https://github.com/your-repo/empath-ai", icon: <FiGithub /> }
    ]
  },
  {
    title: "UniLink",
    description: "Distributed social platform for university students",
    tags: ["FastAPI", "Cassandra", "Kafka", "Docker", "Redis"],
    image: "/unilink.png",
    points: [
      "Built real-time messaging with WebSocket and Kafka integration",
      "Scaled to 10,000+ users with Cassandra database",
      "Reduced load times by 40% using Redis caching"
    ],
    links: [
      { name: "Live", url: "#", icon: <FiExternalLink /> },
      { name: "Code", url: "https://github.com/your-repo/unilink", icon: <FiGithub /> }
    ]
  },
  {
    title: "CCP Analyzer",
    description: "Customer churn prediction system",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    image: "/ccp.png",
    points: [
      "85% prediction accuracy using ensemble methods",
      "Automated feature engineering pipeline",
      "Interactive dashboard for business insights"
    ],
    links: [
      { name: "Case Study", url: "#", icon: <FiExternalLink /> },
      { name: "Notebook", url: "https://github.com/your-repo/ccp-analyzer", icon: <FiGithub /> }
    ]
  },
  {
    title: "XYZ Vision",
    description: "Computer vision for industrial automation",
    tags: ["Python", "OpenCV", "TensorFlow", "Flask"],
    image: "/ccp.png",
    points: [
      "Real-time object detection with 95% precision",
      "Reduced processing time by 60% with model optimization",
      "Custom dashboard for quality control monitoring"
    ],
    links: [
      { name: "Demo", url: "#", icon: <FiExternalLink /> },
      { name: "Research", url: "https://github.com/your-repo/xyz-vision", icon: <FiGithub /> }
    ]
  }// ... (keep your existing projects array)
];

const slideInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const projectVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0
  })
};

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const navigateProject = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    } else {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  return (
    <SectionWrapper id="projects">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={slideInVariants}
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Featured <span className="text-[#4f46e5]">Projects</span>
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={() => navigateProject(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
          >
            <FiChevronLeft className="w-6 h-6 text-[#4f46e5]" />
          </button>
          
          <button 
            onClick={() => navigateProject(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
          >
            <FiChevronRight className="w-6 h-6 text-[#4f46e5]" />
          </button>

          {/* Project Content */}
          <div className="flex flex-col lg:flex-row gap-8 items-center px-10">
            {/* Image Card (Left) */}
            <motion.div
              key={`image-${currentProject}`}
              custom={direction}
              variants={projectVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full lg:w-1/2 relative aspect-video rounded-xl shadow-xl overflow-hidden"
              onMouseEnter={() => setHoveredProject(currentProject)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Image
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Hover Overlay */}
              {hoveredProject === currentProject && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-[#4f46e5]/90 flex flex-col items-center justify-center gap-4 p-6"
                >
                  <h3 className="text-xl font-bold text-white">Project Links</h3>
                  <div className="flex flex-col gap-3 w-full max-w-xs">
                    {projects[currentProject].links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white text-[#4f46e5] py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                      >
                        {link.icon}
                        {link.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Details Card (Right) */}
            <motion.div
              key={`details-${currentProject}`}
              custom={direction}
              variants={projectVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                delay: 0.1
              }}
              className="w-full lg:w-1/2 space-y-6 bg-white p-8 rounded-xl shadow-md border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-800">{projects[currentProject].title}</h3>
              
              <p className="text-gray-600">{projects[currentProject].description}</p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
                <ul className="space-y-2">
                  {projects[currentProject].points.map((point, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-[#4f46e5] mr-2">•</span>
                      <span className="text-gray-600">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <h4 className="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].tags.map((tag, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.05 }}
                      className="px-3 py-1 bg-[#4f46e5]/10 text-[#4f46e5] text-sm rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Dot Indicators */}
          <motion.div 
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentProject ? 1 : -1);
                  setCurrentProject(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentProject 
                    ? 'bg-[#4f46e5] w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}