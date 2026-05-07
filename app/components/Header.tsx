'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navLinks = ['experience', 'skills', 'projects', 'education', 'contact'];

export default function Header() {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-[2px] w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#020617]/90 backdrop-blur-md border-b border-slate-800'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        <Link
          href="#hero"
          onClick={(e) => scrollTo(e, 'hero')}
          className="text-base font-bold tracking-tight text-white hover:text-indigo-400 transition-colors"
        >
          Naresh Vemula
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((s) => (
            <Link
              key={s}
              href={`#${s}`}
              onClick={(e) => scrollTo(e, s)}
              className={`capitalize text-sm font-medium transition-colors ${
                active === s
                  ? 'text-indigo-400'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {s}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/Naresh-081" target="_blank" rel="noopener noreferrer"
             className="text-slate-400 hover:text-white transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/naresh-vemula-149b15238/" target="_blank" rel="noopener noreferrer"
             className="text-slate-400 hover:text-white transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://drive.google.com/file/d/1yJyZ5eBI1CcaHf9VpJ-O-4FyDNT95WqP/view?usp=sharing"
            target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1.5 rounded-lg transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#040d1c] border-t border-slate-800 px-4 py-4 space-y-3">
          {navLinks.map((s) => (
            <Link key={s} href={`#${s}`} onClick={(e) => scrollTo(e, s)}
              className={`block capitalize text-sm font-medium py-1.5 ${active === s ? 'text-indigo-400' : 'text-slate-400'}`}>
              {s}
            </Link>
          ))}
          <a href="https://drive.google.com/file/d/1yJyZ5eBI1CcaHf9VpJ-O-4FyDNT95WqP/view?usp=sharing"
             target="_blank" rel="noopener noreferrer"
             className="block text-sm font-semibold text-indigo-400 pt-2 border-t border-slate-800">
            View Resume →
          </a>
        </div>
      )}
    </header>
  );
}
