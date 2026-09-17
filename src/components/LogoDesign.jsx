import React, { useMemo } from 'react';
import { logoProjects } from '../data/logoProjects';
import LogoDesignCard from './LogoDesignCard';
import { useScrollReveal, useScrollRevealGroup } from '../hooks/useScrollReveal';
import '../styles/logoDesign.css';

/**
 * LogoDesign Section
 * Dedicated showcase for Logo Design & Brand Identity projects.
 * 
 * Features:
 * - Editorial Swiss Header with numbered section kicker.
 * - Archival metadata sub-bar with dynamic project and mockup counters.
 * - Staggered scroll-reveal animation integration.
 * - Scalable layout: smoothly renders any number of logo projects from logoProjects.js.
 */
export default function LogoDesign({ onSelectProject }) {
  const headerRef = useScrollReveal({ threshold: 0.08 });
  const subbarRef = useScrollReveal({ threshold: 0.1 });
  const listRef = useScrollRevealGroup('.logo-project-card', { threshold: 0.06 });

  // Calculate total mockups across all logo projects
  const totalMockups = useMemo(() => {
    return logoProjects.reduce((acc, p) => acc + (p.mockups ? p.mockups.length : 0), 0);
  }, []);

  return (
    <section id="logos" className="logo-design-section" aria-label="Logo Design & Visual Identity">
      <div className="container logo-design-container">
        {/* ─── Section Header ─── */}
        <div className="logo-design-header reveal-on-scroll" ref={headerRef}>
          <div className="logo-design-title-wrap">
            <div className="section-label">
              <span className="dot" aria-hidden="true" />
              <span>03 / LOGOMARK &amp; BRAND IDENTITY</span>
            </div>

            <h2 className="editorial-heading logo-design-title">
              Visual Identity &amp;<br />Logo Design Archive
            </h2>

            <p className="logo-design-desc">
              Koleksi karya desain logo, monogram, dan sistem identitas visual kustom. Setiap proyek mencakup eksplorasi konsep bentuk, filosofi geometri, palet warna, serta simulasi penerapan mockup pada media fisik dan digital.
            </p>
          </div>

          <div className="logo-design-stats mono-text">
            <div className="stat-pill">
              <span className="stat-label">PROJECTS:</span>
              <span className="stat-value text-red">{logoProjects.length} CASE STUDIES</span>
            </div>
            <div className="stat-pill">
              <span className="stat-label">APPLICATIONS:</span>
              <span className="stat-value">{totalMockups} MOCKUPS</span>
            </div>
          </div>
        </div>

        {/* ─── Archival Sub-Bar Metadata ─── */}
        <div className="logo-design-subbar reveal-on-scroll" ref={subbarRef}>
          <div className="subbar-meta-left mono-text">
            <span className="text-red">BRANDMARK ARCHIVE</span>
            <span className="subbar-sep">//</span>
            <span>SYSTEMATIC LOGO REPERTOIRE</span>
          </div>
          <div className="subbar-meta-right mono-text">
            <span>
              SHOWING {logoProjects.length} SYSTEMS · {totalMockups} REAL-WORLD MOCKUPS TOTAL
            </span>
          </div>
        </div>

        {/* ─── Logo Projects List ─── */}
        <div className="logo-projects-stack" ref={listRef} role="region" aria-live="polite">
          {logoProjects.map((project, idx) => (
            <LogoDesignCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
              className={`reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
