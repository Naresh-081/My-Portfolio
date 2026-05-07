import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold text-white">Naresh Vemula</p>
            <p className="text-xs text-slate-500 mt-0.5">Data Engineer · AWS · Snowflake · AI/LLM</p>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com/Naresh-081" target="_blank" rel="noopener noreferrer"
               className="text-slate-500 hover:text-white transition-colors">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/naresh-vemula-149b15238/" target="_blank" rel="noopener noreferrer"
               className="text-slate-500 hover:text-white transition-colors">
              <FaLinkedin size={18} />
            </a>
            <a href="mailto:vemulanaresh333@gmail.com"
               className="text-slate-500 hover:text-white transition-colors">
              <FaEnvelope size={18} />
            </a>
          </div>

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} · Built with Next.js &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
