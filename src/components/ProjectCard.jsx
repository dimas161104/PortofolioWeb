import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import '../styles/portfolio.css';

export default function ProjectCard({ project, onSelect, className = '' }) {
  const isVideo = project.category === 'video';

  return (
    <article 
      className={`portfolio-card ${isVideo ? 'is-video-card' : 'is-design-card'} ${className}`}
      onClick={() => onSelect(project)}
      tabIndex={0}
      role="button"
      aria-label={`Open project details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      {/* Thumbnail Container with 4:3 aspect ratio */}
      <div className="card-media-wrapper">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="card-image"
          loading="lazy"
        />

        {/* Video Overlay Badge */}
        {isVideo && (
          <div className="card-video-overlay">
            <div className="video-play-badge">
              <Play size={16} fill="white" strokeWidth={0} />
            </div>
            {project.duration && (
              <span className="video-time-tag mono-text">{project.duration}</span>
            )}
          </div>
        )}

        {/* Subtle corner registration mark */}
        <span className="card-corner-index mono-text">REF {project.number}</span>
      </div>

      {/* Card Content & Metadata */}
      <div className="card-body">
        <div className="card-meta-row">
          <span className="card-category text-red mono-text">{project.type}</span>
          <span className="card-year mono-text">{project.year}</span>
        </div>

        <h3 className="card-title">
          {project.title}
        </h3>

        <p className="card-description">
          {project.description}
        </p>

        {/* Tools Pill List */}
        <div className="card-tools-list">
          {project.tools.map((tool) => (
            <span key={tool} className="tool-badge mono-text">
              {tool}
            </span>
          ))}
        </div>

        {/* Card Footer Bar */}
        <div className="card-footer-row">
          <span className="card-format mono-text">
            {isVideo ? `RUN TIME · ${project.duration || '01:00'}` : (project.format || 'FORMAT · ARCHIVAL PDF')}
          </span>
          <span className="card-action-link mono-text">
            <span>{isVideo ? 'PLAY VIDEO' : 'VIEW PROJECT'}</span>
            {isVideo ? <Play size={12} fill="currentColor" /> : <ArrowUpRight size={13} />}
          </span>
        </div>
      </div>
    </article>
  );
}
