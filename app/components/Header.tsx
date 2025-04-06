// components/Header.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setActiveSection(sectionId.toLowerCase()); // Ensure lowercase match
    document.getElementById(sectionId.toLowerCase())?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <header className="fixed top-0 w-full backdrop-blur-md z-50 shadow-sm border-b border-gray-200 bg-white/90">
      <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Left-aligned name/logo */}
        <div className="flex-1">
          <Link 
            href="#hero" 
            onClick={(e) => handleScroll(e, 'hero')}
            className="text-3xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#3730a3] bg-clip-text text-transparent"
          >
            NARESH VEMULA
          </Link>
        </div>

        {/* Center-aligned navigation */}
        <div className="flex-1 flex justify-center">
          <div className="flex gap-8">
            {['education', 'skills', 'projects', 'contact'].map((section) => ( // Changed to lowercase
              <Link
                key={section}
                href={`#${section}`}
                onClick={(e) => handleScroll(e, section)}
                className={`capitalize text-lg font-medium px-2 py-1 transition-all ${
                  activeSection === section
                    ? 'text-[#4338ca] border-b-2 border-[#4f46e5]'
                    : 'text-gray-600 hover:text-[#4f46e5]'
                }`}
              >
                {section}
              </Link>
            ))}
          </div>
        </div>

        {/* Right-aligned social links */}
        <div className="flex-1 flex justify-end">
          <div className="flex gap-5">
            <a href="https://github.com/Naresh-081" target="_blank" className="text-gray-600 hover:text-[#4f46e5] transition-colors flex items-center">
              <FaGithub size={36} />
            </a>
            <a href="https://www.linkedin.com/in/naresh-vemula-149b15238/" target="_blank" className="text-gray-600 hover:text-[#4f46e5] transition-colors flex items-center">
              <FaLinkedin size={36} />
            </a>
            <a href="mailto:nvemula@islander.tamucc.edu" className="text-gray-600 hover:text-[#4f46e5] transition-colors flex items-center">
              <FaEnvelope size={36} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}