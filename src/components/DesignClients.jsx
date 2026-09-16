import React, { useState, useMemo } from 'react';
import { clientCards } from '../data/clientProjects';
import ClientCarouselCard from './ClientCarouselCard';
import { useScrollReveal, useScrollRevealGroup } from '../hooks/useScrollReveal';
import '../styles/designClients.css';

export default function DesignClients({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Scroll reveal refs
  const headerRef = useScrollReveal({ threshold: 0.08 });
  const subbarRef = useScrollReveal({ threshold: 0.1 });
  const gridRef   = useScrollRevealGroup('.client-carousel-card', { threshold: 0.06 });

  const filteredCards = useMemo(() => {
    if (activeFilter === 'all') return clientCards;
    if (activeFilter === 'patuna') return clientCards.filter((c) => c.client.toLowerCase() === 'patuna');
    if (activeFilter === 'sapuhi') return clientCards.filter((c) => c.client.toLowerCase() === 'sapuhi');
    if (activeFilter === 'story') return clientCards.filter((c) => c.format === '9:16');
    if (activeFilter === 'carousel') return clientCards.filter((c) => c.format === '4:5');
    return clientCards;
  }, [activeFilter]);

  const totalArtworks = useMemo(() => {
    return clientCards.reduce((acc, c) => acc + c.slides.length, 0);
  }, []);

  return (
    <section id="design" className="design-clients-section" aria-label="Internship Design Showcase Section">
      <div className="container design-clients-container">
        {/* ─── Section Header ─── */}
        <div className="design-clients-header reveal-on-scroll" ref={headerRef}>
          <div className="design-clients-title-wrap">
            <div className="section-label">
              <span className="dot" aria-hidden="true" />
              <span>02 / INTERNSHIP DESIGN ARCHIVE</span>
            </div>

            <h2 className="editorial-heading design-clients-title">
              Internship Case Studies:<br />
              Patuna &amp; SAPUHI
            </h2>

            <p className="design-clients-desc">
              Koleksi karya desain visual selama program magang (internship) untuk <strong>Patuna Umrah &amp; Haji</strong> dan <strong>SAPUHI</strong>. Terbagi menjadi format vertikal <strong>9:16 Story / Reels</strong> dan multi-slide <strong>4:5 Feed Carousel</strong>. Setiap card memuat slide carousel mandiri yang dapat di-browse atau di-expand ke resolusi penuh.
            </p>
          </div>

          {/* ─── Filter Pills ─── */}
          <div className="client-filter-pills" role="tablist" aria-label="Filter internship cards">
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              className={`client-pill mono-text ${activeFilter === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              ALL ({clientCards.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'patuna'}
              className={`client-pill mono-text ${activeFilter === 'patuna' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('patuna')}
            >
              PATUNA
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'sapuhi'}
              className={`client-pill mono-text ${activeFilter === 'sapuhi' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('sapuhi')}
            >
              SAPUHI
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'story'}
              className={`client-pill mono-text ${activeFilter === 'story' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('story')}
            >
              9:16 STORY
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'carousel'}
              className={`client-pill mono-text ${activeFilter === 'carousel' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('carousel')}
            >
              4:5 CAROUSEL
            </button>
          </div>
        </div>

        {/* ─── Sub-Bar Metadata ─── */}
        <div className="design-clients-subbar reveal-on-scroll" ref={subbarRef}>
          <div className="subbar-meta-left mono-text">
            <span className="text-red">INTERNSHIP SHOWCASE</span>
            <span className="subbar-sep">//</span>
            <span>
              {clientCards.length} CARDS · {totalArtworks} ARTWORKS TOTAL
            </span>
          </div>
          <div className="subbar-meta-right mono-text">
            <span>FORMATS: 9:16 VERTICAL (STORY) &amp; 4:5 RECTANGLE (FEED)</span>
          </div>
        </div>

        {/* ─── Carousel Cards Grid (4 Cards) ─── */}
        <div className="carousel-cards-grid" ref={gridRef}>
          {filteredCards.map((card, idx) => (
            <ClientCarouselCard
              key={card.id}
              card={card}
              onSelectSlide={onSelectProject}
              className={`reveal-on-scroll reveal-delay-${(idx % 4) + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
