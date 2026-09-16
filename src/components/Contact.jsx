import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/contact.css';

export default function Contact() {
  const headerRef  = useScrollReveal({ threshold: 0.1 });
  const titleRef   = useScrollReveal({ threshold: 0.1 });
  const descRef    = useScrollReveal({ threshold: 0.1 });
  const actionsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="contact" className="contact-section" aria-label="Contact and Collaboration">
      <div className="container contact-container">
        {/* Top Kicker Row */}
        <div className="contact-header-meta reveal-on-scroll" ref={headerRef}>
          <div className="contact-label mono-text">
            <span className="contact-square" aria-hidden="true">■</span>
            <span>{siteConfig.cta.kicker}</span>
          </div>
          <div className="contact-status-meta mono-text">
            <span>{siteConfig.cta.statusBadge}</span>
          </div>
        </div>

        {/* Large White Headline */}
        <h2 className="contact-headline reveal-on-scroll" ref={titleRef}>
          LET'S CREATE<br />SOMETHING GREAT.
        </h2>

        {/* Supporting Narrative */}
        <p className="contact-description reveal-on-scroll" ref={descRef}>
          {siteConfig.cta.description}
        </p>

        {/* Action Buttons Row */}
        <div className="contact-actions-row reveal-on-scroll" ref={actionsRef}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="btn btn-white contact-btn"
            aria-label="Send email to R Dimas ARN"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-white-outline contact-btn"
            aria-label="Visit Instagram profile"
          >
            <span>VIEW INSTAGRAM</span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-white-outline contact-btn"
            aria-label="Visit LinkedIn profile"
          >
            <span>VIEW LINKEDIN</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
