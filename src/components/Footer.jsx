import React from 'react';
import { ArrowUp } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/footer.css';

export default function Footer() {
  const footerRef = useScrollReveal({ threshold: 0.1 });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-wrapper reveal-on-scroll" ref={footerRef} aria-label="Page Footer">
      {/* Primary Red Footer Bar */}
      <div className="footer-main">
        <div className="container footer-container">
          <div className="footer-brand">
            <h3 className="footer-title">{siteConfig.name}</h3>
            <span className="footer-role mono-text">{siteConfig.role}</span>
          </div>

          <div className="footer-right">
            <span className="footer-copyright mono-text">{siteConfig.copyright.text}</span>
            <button
              type="button"
              className="back-to-top-btn mono-text"
              onClick={scrollToTop}
              aria-label="Scroll smoothly back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Archival Bottom Strip (Matches Reference Screenshot) */}
      <div className="footer-archival-strip">
        <div className="container archival-container mono-text">
          <div className="archival-left">
            <span>{siteConfig.name}</span>
            <span className="archival-dot">•</span>
            <span>[C] {siteConfig.copyright.year}</span>
          </div>
          <div className="archival-center">
            <span>{siteConfig.locationFull.toUpperCase()}</span>
          </div>
          <div className="archival-right">
            <span>{siteConfig.copyright.bottomTicker}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
