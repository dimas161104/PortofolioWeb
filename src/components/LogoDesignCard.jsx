import React, { useState } from 'react';
import { Layers, Maximize2, Sun, Moon, ArrowUpRight, Sparkles } from 'lucide-react';
import '../styles/logoDesign.css';

/**
 * LogoDesignCard
 * Editorial card component for showcasing a single logo design case study.
 * 
 * Features:
 * - Primary Logo Stage with interactive [Light / Dark] background canvas toggle.
 * - Conceptual narrative, design philosophy quote, color palette swatch, and typography specs.
 * - Interactive Mockup Showcase with active preview, caption, and clickable thumbnail selector.
 * - Fully scalable: supports 1, 2, 3, 5, or 10+ mockups seamlessly.
 * - Lightbox expansion support via onSelectProject callback.
 */
export default function LogoDesignCard({ project, onSelectProject, className = '' }) {
  const [activeMockupIndex, setActiveMockupIndex] = useState(0);
  const [isLogoDarkCanvas, setIsLogoDarkCanvas] = useState(false);
  const [isMockupTransitioning, setIsMockupTransitioning] = useState(false);

  const mockups = project.mockups || [];
  const currentMockup = mockups[activeMockupIndex] || mockups[0];

  const handleSelectMockup = (idx) => {
    if (idx === activeMockupIndex || isMockupTransitioning) return;
    setIsMockupTransitioning(true);
    setTimeout(() => {
      setActiveMockupIndex(idx);
      setIsMockupTransitioning(false);
    }, 180);
  };

  const handleOpenModal = (imageToView, titleToView, typeToView, captionToView) => {
    if (onSelectProject) {
      onSelectProject({
        id: `${project.id}-${titleToView}`,
        number: project.number,
        title: `${project.title} — ${titleToView}`,
        type: typeToView || project.category,
        year: project.year,
        image: imageToView,
        format: 'LOGO DESIGN & BRANDING CASE STUDY',
        description: captionToView || project.concept.overview,
        fullDescription: `${project.concept.overview}\n\nFilosofi Desain:\n${project.concept.philosophy}\n\nTipografi: ${project.concept.typography}\nDeliverables: ${project.deliverables || 'Logo System, Brand Identity, Mockups'}`,
        tools: ['ILLUSTRATOR', 'FIGMA', 'PHOTOSHOP', 'VECTOR GRID'],
        client: project.client,
        deliverables: project.deliverables,
        featured: true
      });
    }
  };

  return (
    <article className={`logo-project-card ${className}`}>
      {/* ─── Card Top Architectural Header ─── */}
      <div className="lpc-header">
        <div className="lpc-header-left">
          <div className="lpc-ref-badge mono-text">
            <span className="lpc-ref-num text-red">REF {project.number}</span>
            <span className="lpc-meta-sep">//</span>
            <span className="lpc-client-label">{project.client}</span>
          </div>
          <h3 className="lpc-project-title">{project.title}</h3>
          <span className="lpc-tagline mono-text">{project.tagline}</span>
        </div>

        <div className="lpc-header-right">
          <span className="lpc-category-pill mono-text">{project.category}</span>
          <span className="lpc-year mono-text">{project.year}</span>
        </div>
      </div>

      {/* ─── Dual-Panel Grid: Logo Showcase + Mockup Showcase ─── */}
      <div className="lpc-body-grid">
        {/* ── Left Column: Primary Logo & Design Concept ── */}
        <div className="lpc-col-logo">
          {/* Logo Presentation Stage Canvas */}
          <div className="lpc-stage-wrapper">
            <div className="lpc-stage-toolbar mono-text">
              <span className="lpc-stage-label">
                <Sparkles size={11} className="text-red" />
                <span>{project.primaryLogo.label}</span>
              </span>
              <div className="lpc-stage-controls">
                <button
                  type="button"
                  className={`lpc-canvas-btn ${!isLogoDarkCanvas ? 'is-active' : ''}`}
                  onClick={() => setIsLogoDarkCanvas(false)}
                  title="Preview on Light Canvas"
                  aria-label="Preview on Light Canvas"
                >
                  <Sun size={12} />
                  <span>LIGHT</span>
                </button>
                <button
                  type="button"
                  className={`lpc-canvas-btn ${isLogoDarkCanvas ? 'is-active' : ''}`}
                  onClick={() => setIsLogoDarkCanvas(true)}
                  title="Preview on Dark Canvas"
                  aria-label="Preview on Dark Canvas"
                >
                  <Moon size={12} />
                  <span>DARK</span>
                </button>
                <button
                  type="button"
                  className="lpc-zoom-btn"
                  onClick={() =>
                    handleOpenModal(
                      project.primaryLogo.image,
                      'Primary Logomark Specimen',
                      'VECTOR LOGOMARK GRID',
                      project.concept.philosophy
                    )
                  }
                  title="Zoom & View Full Logo"
                  aria-label="Zoom & View Full Logo"
                >
                  <Maximize2 size={12} />
                </button>
              </div>
            </div>

            {/* Logo Viewer Canvas */}
            <div
              className={`lpc-logo-canvas ${isLogoDarkCanvas ? 'canvas-dark' : 'canvas-light'}`}
              onClick={() =>
                handleOpenModal(
                  project.primaryLogo.image,
                  'Primary Logomark Specimen',
                  'VECTOR LOGOMARK GRID',
                  project.concept.philosophy
                )
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleOpenModal(
                    project.primaryLogo.image,
                    'Primary Logomark Specimen',
                    'VECTOR LOGOMARK GRID',
                    project.concept.philosophy
                  );
                }
              }}
              aria-label={`View ${project.title} logo in full screen`}
            >
              <img
                src={project.primaryLogo.image}
                alt={project.primaryLogo.alt || `${project.title} logo mark`}
                className="lpc-logo-image"
                loading="lazy"
              />
              <span className="lpc-canvas-hint mono-text">CLICK TO EXPAND LOGO SPEC</span>
            </div>
          </div>

          {/* Conceptual Description & Philosophy */}
          <div className="lpc-concept-box">
            <div className="lpc-concept-header mono-text">
              <span className="text-red">CONCEPT &amp; RATIONALE</span>
              <span className="lpc-meta-sep">//</span>
              <span>DESIGN PHILOSOPHY</span>
            </div>
            <p className="lpc-concept-overview">{project.concept.overview}</p>
            <blockquote className="lpc-concept-philosophy">
              "{project.concept.philosophy}"
            </blockquote>

            {/* Color Palette Swatches */}
            {project.concept.colors && project.concept.colors.length > 0 && (
              <div className="lpc-swatches-row">
                <span className="lpc-swatches-label mono-text">PALETTE:</span>
                <div className="lpc-swatches-list">
                  {project.concept.colors.map((color, cIdx) => (
                    <div
                      key={cIdx}
                      className="lpc-swatch-item"
                      title={`${color.name} (${color.hex})`}
                    >
                      <span
                        className="lpc-swatch-circle"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="lpc-swatch-hex mono-text">{color.hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Typography Spec */}
            {project.concept.typography && (
              <div className="lpc-typography-row mono-text">
                <span className="lpc-typo-label">TYPE:</span>
                <span className="lpc-typo-value">{project.concept.typography}</span>
              </div>
            )}
          </div>
        </div>

        {/* ── Right Column: Interactive Mockup Showcase ── */}
        <div className="lpc-col-mockup">
          <div className="lpc-mockup-wrapper">
            {/* Mockup Toolbar Meta */}
            <div className="lpc-mockup-toolbar mono-text">
              <div className="lpc-mockup-type-badge">
                <Layers size={11} className="text-red" />
                <span>{currentMockup ? currentMockup.type : 'BRAND MOCKUP'}</span>
              </div>
              <div className="lpc-mockup-counter">
                <span>
                  MOCKUP {activeMockupIndex + 1} OF {mockups.length}
                </span>
                <button
                  type="button"
                  className="lpc-zoom-btn"
                  onClick={() =>
                    currentMockup &&
                    handleOpenModal(
                      currentMockup.image,
                      currentMockup.title,
                      `${currentMockup.type} MOCKUP`,
                      currentMockup.caption
                    )
                  }
                  title="Expand Mockup"
                  aria-label="Expand Mockup"
                >
                  <Maximize2 size={12} />
                </button>
              </div>
            </div>

            {/* Active Mockup Image Viewer */}
            <div
              className="lpc-mockup-viewer"
              onClick={() =>
                currentMockup &&
                handleOpenModal(
                  currentMockup.image,
                  currentMockup.title,
                  `${currentMockup.type} MOCKUP`,
                  currentMockup.caption
                )
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && currentMockup) {
                  handleOpenModal(
                    currentMockup.image,
                    currentMockup.title,
                    `${currentMockup.type} MOCKUP`,
                    currentMockup.caption
                  );
                }
              }}
              aria-label={`View mockup ${currentMockup ? currentMockup.title : ''} in full resolution`}
            >
              {currentMockup && (
                <img
                  key={currentMockup.id}
                  src={currentMockup.image}
                  alt={currentMockup.title}
                  className={`lpc-mockup-img ${isMockupTransitioning ? 'is-fading' : ''}`}
                  loading="lazy"
                />
              )}
              <div className="lpc-mockup-hover-overlay">
                <span className="lpc-expand-pill mono-text">
                  <span>EXPAND HIGH-RES</span>
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </div>

            {/* Active Mockup Information Box */}
            {currentMockup && (
              <div className="lpc-mockup-info">
                <div className="lpc-mockup-info-top">
                  <h4 className="lpc-mockup-title">{currentMockup.title}</h4>
                  <span className="lpc-mockup-pill mono-text">{currentMockup.type}</span>
                </div>
                <p className="lpc-mockup-caption">{currentMockup.caption}</p>
              </div>
            )}

            {/* ── Scalable Mockup Thumbnail Selector ── */}
            {mockups.length > 1 && (
              <div className="lpc-thumbnails-section">
                <div className="lpc-thumbnails-header mono-text">
                  <span>SELECT MOCKUP MEDIA APPLICATION:</span>
                  <span className="text-red">[{mockups.length} PREVIEWS]</span>
                </div>

                <div
                  className="lpc-thumbnails-scroll"
                  role="tablist"
                  aria-label={`${project.title} mockup previews`}
                >
                  {mockups.map((m, idx) => (
                    <button
                      key={m.id}
                      type="button"
                      role="tab"
                      aria-selected={idx === activeMockupIndex}
                      className={`lpc-thumb-card ${idx === activeMockupIndex ? 'is-active' : ''}`}
                      onClick={() => handleSelectMockup(idx)}
                    >
                      <div className="lpc-thumb-media">
                        <img src={m.image} alt={m.title} loading="lazy" />
                        <span className="lpc-thumb-type mono-text">{m.type}</span>
                      </div>
                      <div className="lpc-thumb-body">
                        <span className="lpc-thumb-idx mono-text">0{idx + 1}</span>
                        <span className="lpc-thumb-title">{m.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─── Card Bottom Footer: Tag Badges & Action ─── */}
      <div className="lpc-footer">
        <div className="lpc-tags-list">
          {project.tags &&
            project.tags.map((tag, tIdx) => (
              <span key={tIdx} className="lpc-tag mono-text">
                #{tag}
              </span>
            ))}
        </div>

        <button
          type="button"
          className="btn btn-outline lpc-case-study-btn mono-text"
          onClick={() =>
            handleOpenModal(
              project.primaryLogo.image,
              'Full Identity Case Study',
              project.category,
              project.concept.overview
            )
          }
        >
          <span>VIEW FULL CASE STUDY</span>
          <ArrowUpRight size={14} />
        </button>
      </div>
    </article>
  );
}
