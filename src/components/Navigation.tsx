
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  currentSection: string;
}

const Navigation = ({ currentSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👋' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
    { id: 'certifications', label: 'Certificates', icon: '📜' },
    { id: 'contact', label: 'Contact', icon: '📬' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-white/70 hover:text-white transition-all duration-300 text-sm font-medium relative",
                  currentSection === item.id && "text-white"
                )}
              >
                <span className="flex items-center space-x-2">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                {currentSection === item.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 text-white"
        >
          <div className={cn("w-6 h-6 relative transform transition-transform duration-300", isOpen && "rotate-90")}>
            <span className={cn("absolute inset-x-0 h-0.5 bg-white transform transition-all duration-300", isOpen ? "top-3 rotate-45" : "top-1")} />
            <span className={cn("absolute inset-x-0 top-3 h-0.5 bg-white transform transition-all duration-300", isOpen && "opacity-0")} />
            <span className={cn("absolute inset-x-0 h-0.5 bg-white transform transition-all duration-300", isOpen ? "top-3 -rotate-45" : "top-5")} />
          </div>
        </button>

        {isOpen && (
          <div className="absolute top-16 right-0 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 min-w-[200px]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-3",
                  currentSection === item.id && "text-white bg-white/10"
                )}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
