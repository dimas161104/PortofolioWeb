import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import IdCard from './IdCard';
import '../styles/hero.css';

export default function Hero() {
  const scrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const navOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        {/* Split Layout: Narrative & Action on Left, ID Card Pass on Right */}
        <div className="hero-split-layout">
          <div className="hero-left-col">
            {/* Top Kicker Label */}
            <div className="hero-kicker mono-text">
              <span>{siteConfig.hero.kicker}</span>
            </div>

            {/* Primary Massive Title with Stabilo Highlight */}
            <h1 className="hero-title">
              <span className="hero-title-highlight" title="R DIMAS ARN">
                <span className="hero-title-text">{siteConfig.hero.title}</span>
                <span className="stabilo-marker" aria-hidden="true" />
              </span>
            </h1>

            {/* Subtitle with Red Accent & Dynamic Descriptor */}
            <div className="hero-subtitle-wrapper">
              <span className="hero-subtitle text-red">{siteConfig.hero.subtitle}</span>
              <span className="hero-descriptor-badge mono-text">
                <span className="descriptor-pulse-dot" aria-hidden="true" />
                <span>{siteConfig.hero.descriptor}</span>
              </span>
            </div>

            {/* Editorial Narrative Bio */}
            <p className="hero-description">
              {siteConfig.hero.description}
            </p>

            {/* Action Buttons Row */}
            <div className="hero-actions">
              <a
                href="#portfolio"
                onClick={(e) => scrollTo(e, '#portfolio')}
                className="btn btn-black hero-btn"
                aria-label="View selected portfolio works"
              >
                <span>VIEW MY WORK</span>
                <ArrowDownRight size={16} />
              </a>

              <a
                href="#about"
                onClick={(e) => scrollTo(e, '#about')}
                className="btn btn-outline hero-btn"
                aria-label="Learn more about R Dimas ARN"
              >
                <span>ABOUT ME</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Creative Access ID Card */}
          <div className="hero-right-col">
            <IdCard />
          </div>
        </div>
      </div>

      {/* Bottom Index Bar (Matching Reference Screenshot) */}
      <div className="hero-bottom-index">
        <div className="container hero-index-container">
          <div className="hero-index-left mono-text">
            <span>{siteConfig.status.archiveIndex}</span>
          </div>
          <div className="hero-index-right mono-text">
            <span>{siteConfig.status.edition}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
