import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm font-medium text-white">Naresh Vemula</p>

          <div className="flex items-center gap-5">
            <a href="https://github.com/Naresh-081" target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/naresh-vemula-149b15238/" target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:vemulanaresh333@gmail.com" className="hover:text-white transition-colors">
              <FaEnvelope size={20} />
            </a>
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} · Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
