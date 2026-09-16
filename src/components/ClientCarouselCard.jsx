import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import '../styles/clientCarousel.css';

/**
 * ClientCarouselCard
 * Displays one project card with an internal slide carousel.
 * Supports:
 * - 1 to 10+ slides seamlessly (zero layout bug or overflow)
 * - Auto-play slide animation with normal speed (3.8s) for cards with > 1 slide
 * - Pauses auto-play on hover or focus for comfortable reading
 * - Dynamic aspect ratios: 9:16 (Story) & 4:5 (Feed Carousel)
 * - Swipe gestures, keyboard arrow navigation, dot indicators, and full modal expansion.
 */
export default function ClientCarouselCard({ card, onSelectSlide, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null); // 'next' | 'prev'
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const totalSlides = (card.slides && card.slides.length) || 0;

  // Safe cyclic clamp formula: handles 1, 5, 10, or 20+ slides safely
  const clamp = (index) => {
    if (totalSlides === 0) return 0;
    return ((index % totalSlides) + totalSlides) % totalSlides;
  };

  const safeIndex = totalSlides > 0 ? clamp(activeIndex) : 0;

  const goTo = useCallback(
    (newIndex, dir) => {
      if (isAnimating || totalSlides <= 1) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(clamp(newIndex));
        setIsAnimating(false);
      }, 330);
    },
    [isAnimating, totalSlides]
  );

  const prev = () => goTo(safeIndex - 1, 'prev');
  const next = () => goTo(safeIndex + 1, 'next');

  // Auto-play slide otomatis dengan kecepatan normal (3.8 detik)
  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return;

    const timer = setInterval(() => {
      goTo(safeIndex + 1, 'next');
    }, 3800);

    return () => clearInterval(timer);
  }, [totalSlides, isPaused, safeIndex, goTo]);

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
  };

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      delta > 0 ? next() : prev();
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  if (totalSlides === 0) return null;

  const activeSlide = card.slides[safeIndex] || card.slides[0];
  const isAspect45 = card.format === '4:5' || card.aspectRatio === '4 / 5';

  return (
    <article
      className={`client-carousel-card ${isAspect45 ? 'card-ratio-4-5' : 'card-ratio-9-16'} ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* ─── Card Header ─── */}
      <div className="ccc-header">
        <div className="ccc-header-left">
          <div className="ccc-badges-row">
            <span
              className="ccc-client-badge mono-text"
              style={{ borderColor: card.clientColor, color: card.clientColor }}
            >
              {card.client}
            </span>
            <span className={`ccc-format-pill mono-text ${isAspect45 ? 'pill-feed' : 'pill-story'}`}>
              {card.formatLabel || (isAspect45 ? '4:5 / CAROUSEL' : '9:16 / STORY')}
            </span>
          </div>
          <h3 className="ccc-client-name">{card.projectTitle || card.clientFull}</h3>
          <span className="ccc-type mono-text">{card.type}</span>
        </div>
        <div className="ccc-header-right">
          <span className="ccc-year mono-text">{card.year}</span>
        </div>
      </div>

      {/* ─── Carousel Viewer ─── */}
      <div
        className={`ccc-viewer ${isAspect45 ? 'ratio-4-5' : 'ratio-9-16'}`}
        role="region"
        aria-label={`${card.client} ${card.projectTitle} carousel (Slide ${safeIndex + 1} of ${totalSlides})`}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        tabIndex={0}
      >
        {/* Subtle auto-play progress bar on top */}
        {totalSlides > 1 && !isPaused && (
          <div key={safeIndex} className="ccc-autoplay-progress" aria-hidden="true" />
        )}

        {/* Active Slide */}
        <div className={`ccc-slide-wrapper ${isAnimating ? `is-sliding-${direction}` : ''}`}>
          <img
            key={activeSlide.id || safeIndex}
            src={activeSlide.image}
            alt={activeSlide.title || `${card.client} visual slide ${safeIndex + 1}`}
            className="ccc-slide-img"
            loading="lazy"
          />

          {/* Bottom gradient overlay with slide metadata */}
          <div className="ccc-slide-overlay">
            <div className="ccc-slide-meta">
              <span className="ccc-slide-type mono-text">
                {activeSlide.type || `SLIDE ${String(safeIndex + 1).padStart(2, '0')}`}
              </span>
              <span className="ccc-slide-title">{activeSlide.title}</span>
            </div>
            <button
              type="button"
              className="ccc-expand-btn mono-text"
              onClick={() =>
                onSelectSlide({
                  ...activeSlide,
                  client: card.client,
                  clientFull: card.clientFull,
                  tools: card.tools,
                  year: card.year,
                  fullDescription: activeSlide.description || card.description,
                  category: 'design',
                  format: card.format,
                  number: String(safeIndex + 1).padStart(2, '0')
                })
              }
              aria-label={`View full details for ${activeSlide.title}`}
            >
              <span>EXPAND</span>
              <ArrowUpRight size={12} />
            </button>
          </div>
        </div>

        {/* Navigation arrows — displayed when > 1 slide */}
        {totalSlides > 1 && (
          <>
            <button
              type="button"
              className="ccc-nav-btn ccc-prev"
              onClick={prev}
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="ccc-nav-btn ccc-next"
              onClick={next}
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Format Corner Tag */}
        <span className={`ccc-format-tag mono-text ${isAspect45 ? 'tag-feed' : 'tag-story'}`}>
          {card.format || (isAspect45 ? '4:5' : '9:16')}
        </span>
      </div>

      {/* ─── Dot Indicator Track (Auto scales 1 to 10+ slides) ─── */}
      {totalSlides > 1 && (
        <div className="ccc-dots-track" role="tablist" aria-label={`Slide indicators (1 to ${totalSlides})`}>
          {card.slides.map((slide, idx) => (
            <button
              key={slide.id || idx}
              type="button"
              role="tab"
              title={`Slide ${idx + 1} of ${totalSlides}: ${slide.title || ''}`}
              aria-selected={idx === safeIndex}
              aria-label={`Go to slide ${idx + 1} of ${totalSlides}: ${slide.title || ''}`}
              className={`ccc-dot ${idx === safeIndex ? 'is-active' : ''}`}
              onClick={() => goTo(idx, idx > safeIndex ? 'next' : 'prev')}
            />
          ))}
        </div>
      )}

      {/* ─── Slide Counter (Format: 01 / 10) ─── */}
      <div className="ccc-counter mono-text">
        <span className="ccc-counter-current">{String(safeIndex + 1).padStart(2, '0')}</span>
        <span className="ccc-counter-sep">/</span>
        <span className="ccc-counter-total">{String(totalSlides).padStart(2, '0')}</span>
      </div>

      {/* ─── Card Footer: Description, Tools & Role ─── */}
      <div className="ccc-footer">
        <p className="ccc-description">{card.description}</p>
        <div className="ccc-tools-row">
          {(card.tools || []).map((tool) => (
            <span key={tool} className="tool-badge mono-text">
              {tool}
            </span>
          ))}
        </div>
        <div className="ccc-role-row mono-text">
          <span className="ccc-role-label">ROLE</span>
          <span className="ccc-role-value">{card.roleLabel}</span>
        </div>
      </div>
    </article>
  );
}
