import React from 'react';
import { aboutBio } from '../data/experience';
import Experience from './Experience';
import Skills from './Skills';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/about.css';

export default function About() {
  const headerRef    = useScrollReveal({ threshold: 0.1 });
  const titleRef     = useScrollReveal({ threshold: 0.1 });
  const leftColRef   = useScrollReveal({ threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  const rightColRef  = useScrollReveal({ threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  return (
    <section id="about" className="about-section" aria-label="About R Dimas ARN">
      <div className="container about-container">
        {/* Top Section Header */}
        <div className="about-header-meta reveal-on-scroll" ref={headerRef}>
          <div className="section-label">
            <span className="dot" aria-hidden="true" />
            <span>{aboutBio.kicker}</span>
          </div>
          <div className="about-sublabel mono-text">
            <span>{aboutBio.sublabel}</span>
          </div>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="editorial-heading about-main-title reveal-on-scroll" ref={titleRef}>
          {aboutBio.headline}
        </h2>

        {/* Two-Column Editorial Grid */}
        <div className="about-grid">
          {/* Left Column */}
          <div className="about-left-col reveal-from-left" ref={leftColRef}>
            <div className="about-bio-text">
              {aboutBio.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Philosophy Callout */}
            <div className="philosophy-card">
              <span className="philosophy-label mono-text">
                {aboutBio.philosophy.label}
              </span>
              <blockquote className="philosophy-quote">
                {aboutBio.philosophy.quote}
              </blockquote>
            </div>
          </div>

          {/* Right Column */}
          <div className="about-right-col reveal-from-right" ref={rightColRef}>
            {/* 3 Identity Cards */}
            <div className="identity-cards-row">
              {aboutBio.identityCards.map((card, idx) => (
                <div
                  key={idx}
                  className={`identity-card ${card.isAccent ? 'is-accent-card' : ''}`}
                >
                  <span className="identity-card-label mono-text">{card.label}</span>
                  <div className="identity-card-lines">
                    {card.lines.map((line, lIdx) => (
                      <span
                        key={lIdx}
                        className={`identity-line ${card.isAccent ? 'text-red' : ''}`}
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                  {card.institution && (
                    <span className="identity-card-institution mono-text">
                      {card.institution}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Experience Timeline */}
            <Experience />

            {/* Competency Matrix */}
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
