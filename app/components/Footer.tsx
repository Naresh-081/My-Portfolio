// src/app/components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/Naresh-081" target="_blank" className="hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/nareshvemula" target="_blank" className="hover:text-white transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:nvemula@islander.tamucc.edu" className="hover:text-white transition-colors">
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Naresh Vemula. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}