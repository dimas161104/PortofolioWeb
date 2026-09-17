import React, { useMemo } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal, useScrollRevealGroup } from '../hooks/useScrollReveal';
import '../styles/portfolio.css';
import { useState } from 'react';

const INITIAL_PROJECTS_COUNT = 6;
const LOAD_MORE_INCREMENT = 6;

export default function Portfolio({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS_COUNT);

  // Scroll reveal refs
  const headerRef = useScrollReveal({ threshold: 0.1 });
  const subbarRef = useScrollReveal({ threshold: 0.1 });
  const gridRef = useScrollRevealGroup('.portfolio-card', { threshold: 0.07 });

  // Compute category counts
  const counts = useMemo(() => {
    return {
      all: projects.length,
      design: projects.filter((p) => p.category === 'design').length,
      video: projects.filter((p) => p.category === 'video').length,
    };
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  // Sliced list based on visible count
  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const remainingCount = filteredProjects.length - displayedProjects.length;
  const hasMore = remainingCount > 0;

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(INITIAL_PROJECTS_COUNT);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_INCREMENT);
  };

  return (
    <section id="portfolio" className="portfolio-section" aria-label="Selected Works">
      <div className="container portfolio-container">
        {/* Section Top Header & Filters */}
        <div className="portfolio-header-top reveal-on-scroll" ref={headerRef}>
          <div className="portfolio-title-group">
            <div className="section-label">
              <span className="dot" aria-hidden="true" />
              <span>04 / SELECTED WORKS</span>
            </div>
            <h2 className="editorial-heading portfolio-title">
              Curated Design &amp; Video<br />Portfolio
            </h2>
            <p className="portfolio-subtitle">
              A selection of creative works spanning graphic design, visual identity, editorial layouts, video, and digital motion.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="portfolio-filter-group" role="tablist" aria-label="Portfolio Category Filters">
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              className={`filter-btn mono-text ${activeFilter === 'all' ? 'is-active' : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              <span className="filter-label">ALL</span>
              <span className="filter-count">{counts.all}</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'design'}
              className={`filter-btn mono-text ${activeFilter === 'design' ? 'is-active' : ''}`}
              onClick={() => handleFilterChange('design')}
            >
              <span className="filter-label">DESIGN</span>
              <span className="filter-count">{counts.design}</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'video'}
              className={`filter-btn mono-text ${activeFilter === 'video' ? 'is-active' : ''}`}
              onClick={() => handleFilterChange('video')}
            >
              <span className="filter-label">VIDEO</span>
              <span className="filter-count">{counts.video}</span>
            </button>
          </div>
        </div>

        {/* Archival Sub-Bar */}
        <div className="portfolio-subbar reveal-on-scroll" ref={subbarRef}>
          <div className="subbar-meta-left mono-text">
            <span className="text-red">PUBLIC PORTFOLIO</span>
            <span className="subbar-sep">//</span>
            <span>DESIGN &amp; VIDEO ARCHIVE</span>
          </div>
          <div className="subbar-meta-right mono-text">
            <span>SHOWING {displayedProjects.length} OF {filteredProjects.length} PROJECTS</span>
          </div>
        </div>

        {/* Portfolio Grid — each card gets staggered reveal via observer */}
        <div className="portfolio-grid" role="region" aria-live="polite" ref={gridRef}>
          {displayedProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              className={`reveal-on-scroll reveal-delay-${Math.min((idx % 3) + 1, 6)}`}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="portfolio-load-more-wrap reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <button
              type="button"
              className="btn btn-black load-more-btn"
              onClick={handleLoadMore}
              aria-label={`Load more projects. ${remainingCount} remaining`}
            >
              <span>LOAD MORE PROJECTS ({remainingCount} REMAINING)</span>
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
