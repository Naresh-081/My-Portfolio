'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setActiveSection(sectionId.toLowerCase());
    setIsMobileMenuOpen(false); // Close menu on selection
    document.getElementById(sectionId.toLowerCase())?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const navLinks = ['education', 'skills', 'projects', 'contact'];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Left-aligned name/logo */}
        <div className="text-3xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#3730a3] bg-clip-text text-transparent">
          <Link href="#hero" onClick={(e) => handleScroll(e, 'hero')}>
            NARESH VEMULA
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              onClick={(e) => handleScroll(e, section)}
              className={`capitalize text-lg font-medium transition-all ${
                activeSection === section
                  ? 'text-[#4338ca] border-b-2 border-[#4f46e5]'
                  : 'text-gray-600 hover:text-[#4f46e5]'
              }`}
            >
              {section}
            </Link>
          ))}
        </div>

        {/* Social Icons (always visible) */}
        <div className="hidden md:flex gap-5">
          <a href="https://github.com/Naresh-081" target="_blank" className="text-gray-600 hover:text-[#4f46e5]">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/naresh-vemula-149b15238/" target="_blank" className="text-gray-600 hover:text-[#4f46e5]">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:nvemula@islander.tamucc.edu" className="text-gray-600 hover:text-[#4f46e5]">
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-600 hover:text-[#4f46e5] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-5 py-4 space-y-4">
          {navLinks.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              onClick={(e) => handleScroll(e, section)}
              className={`block capitalize text-lg font-medium ${
                activeSection === section
                  ? 'text-[#4338ca]'
                  : 'text-gray-600 hover:text-[#4f46e5]'
              }`}
            >
              {section}
            </Link>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex justify-start gap-4 pt-4 border-t border-gray-100">
            <a href="https://github.com/Naresh-081" target="_blank" className="text-gray-600 hover:text-[#4f46e5]">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/naresh-vemula-149b15238/" target="_blank" className="text-gray-600 hover:text-[#4f46e5]">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:nvemula@islander.tamucc.edu" className="text-gray-600 hover:text-[#4f46e5]">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
