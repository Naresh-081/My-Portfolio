'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navLinks = ['education', 'skills', 'experience', 'projects', 'contact'];

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        <Link
          href="#hero"
          onClick={(e) => scrollTo(e, 'hero')}
          className={`text-lg font-bold tracking-tight transition-colors ${
            scrolled ? 'text-slate-900' : 'text-white'
          }`}
        >
          Naresh Vemula
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((s) => (
            <Link
              key={s}
              href={`#${s}`}
              onClick={(e) => scrollTo(e, s)}
              className={`capitalize text-sm font-medium transition-colors ${
                activeSection === s
                  ? 'text-indigo-600'
                  : scrolled
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-white/70 hover:text-white'
              }`}
            >
              {s}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Naresh-081"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${scrolled ? 'text-slate-500 hover:text-slate-900' : 'text-white/70 hover:text-white'}`}
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/naresh-vemula-149b15238/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${scrolled ? 'text-slate-500 hover:text-slate-900' : 'text-white/70 hover:text-white'}`}
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://drive.google.com/file/d/1yJyZ5eBI1CcaHf9VpJ-O-4FyDNT95WqP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1.5 rounded-lg transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden text-sm font-medium ${scrolled ? 'text-slate-700' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕ Close' : '☰ Menu'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3">
          {navLinks.map((s) => (
            <Link
              key={s}
              href={`#${s}`}
              onClick={(e) => scrollTo(e, s)}
              className={`block capitalize text-sm font-medium py-1 ${
                activeSection === s ? 'text-indigo-600' : 'text-slate-600'
              }`}
            >
              {s}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1yJyZ5eBI1CcaHf9VpJ-O-4FyDNT95WqP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-medium text-indigo-600 pt-1"
          >
            View Resume →
          </a>
        </div>
      )}
    </header>
  );
}
