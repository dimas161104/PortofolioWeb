import React, { useEffect } from 'react';
import { X, Play, ArrowUpRight, Film, Layers } from 'lucide-react';
import '../styles/modal.css';

export default function ProjectModal({ project, onClose }) {
  // ESC key listener & body scroll lock
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isVideo = project.category === 'video';
  const hasValidVideoUrl = Boolean(project.videoUrl && project.videoUrl.trim() !== '');

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="modal-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Navigation Bar */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="modal-badge text-red mono-text">
              {isVideo ? <Film size={12} /> : <Layers size={12} />}
              <span>{project.type}</span>
            </span>
            <span className="modal-meta-sep mono-text">/</span>
            <span className="modal-year mono-text">{project.year}</span>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal (ESC)"
          >
            <span className="mono-text">CLOSE [ESC]</span>
            <X size={18} />
          </button>
        </div>

        {/* Modal Main Media Display */}
        <div className="modal-media-container">
          {isVideo && hasValidVideoUrl ? (
            <div className="modal-video-frame">
              {project.videoUrl.includes('youtube') || project.videoUrl.includes('vimeo') ? (
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="modal-iframe-player"
                />
              ) : (
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay={false}
                  className="modal-native-player"
                  poster={project.image}
                />
              )}
            </div>
          ) : (
            <div className="modal-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="modal-showcase-image"
              />
              {isVideo && (
                <div className="modal-video-notice">
                  <span className="status-pill">
                    <span className="pulse-dot" />
                    <span>PREVIEW MODE · READY FOR MP4 / VIMEO / YOUTUBE URL</span>
                  </span>
                  <span className="mono-text video-spec-tag">
                    {project.resolution || '4K CINEMA // 16:9 // 60FPS'}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Body & Full Specifications */}
        <div className="modal-body">
          <div className="modal-title-row">
            <div>
              <span className="modal-project-ref mono-text">ARCHIVE SPEC // NO. {project.number}</span>
              <h2 id="modal-title" className="modal-title">
                {project.title}
              </h2>
            </div>
            {project.duration && (
              <div className="modal-runtime-chip mono-text">
                <Play size={11} fill="currentColor" />
                <span>{project.duration}</span>
              </div>
            )}
          </div>

          <p className="modal-full-description">
            {project.fullDescription || project.description}
          </p>

          <div className="modal-specs-grid">
            {project.client && (
              <div className="modal-spec-col">
                <span className="spec-label mono-text">CLIENT / COMMISSION</span>
                <span className="spec-value">{project.client}</span>
              </div>
            )}

            {project.deliverables && (
              <div className="modal-spec-col">
                <span className="spec-label mono-text">SCOPE OF DELIVERABLES</span>
                <span className="spec-value">{project.deliverables}</span>
              </div>
            )}

            <div className="modal-spec-col">
              <span className="spec-label mono-text">TOOLS & PRODUCTION</span>
              <div className="modal-tools-wrap">
                {(project.tools || []).map((tool) => (
                  <span key={tool} className="tool-badge mono-text">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Action Links */}
          <div className="modal-actions-footer">
            <button
              type="button"
              className="btn btn-black"
              onClick={onClose}
            >
              <span>RETURN TO PORTFOLIO</span>
            </button>
            <a
              href={`mailto:dimasarn.creative@example.com?subject=Inquiry: ${encodeURIComponent(project.title)}`}
              className="btn btn-outline"
            >
              <span>INQUIRE ABOUT THIS PROJECT</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
