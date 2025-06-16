import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update current section based on scroll position
      const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'achievements', 'certifications', 'contact'];
      const sectionOffsets = sections.map(id => {
        const element = document.getElementById(id);
        return element ? element.offsetTop - 100 : 0;
      });
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= sectionOffsets[i]) {
          setCurrentSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <ParticleBackground />
      <Navigation currentSection={currentSection} />
      
      <div className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About scrollY={scrollY} />
        </section>
        
        <section id="education">
          <Education scrollY={scrollY} />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects scrollY={scrollY} />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="achievements">
          <Achievements />
        </section>
        
        <section id="certifications">
          <Certifications scrollY={scrollY} />
        </section>
        
        <section id="contact">
          <Contact scrollY={scrollY} />
        </section>
      </div>
    </div>
  );
};

export default Index;
