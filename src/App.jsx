import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import About from './components/About';
import DesignClients from './components/DesignClients';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import './styles/global.css';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');

  // IntersectionObserver to dynamically highlight current section in navigation
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'design', 'portfolio', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Flow */}
      <main id="main-content">
        <Hero />
        <InfoBar />
        <About />
        <DesignClients onSelectProject={(project) => setSelectedProject(project)} />
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
