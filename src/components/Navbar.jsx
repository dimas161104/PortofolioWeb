import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, User } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import '../styles/navbar.css';

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for shadow / compact mode
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
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
    <header className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      {/* Primary Sticky Nav Bar */}
      <nav className="navbar-main" aria-label="Main Navigation">
        <div className="container nav-container">
          {/* Logo / Brand Name */}
          <a 
            href="#hero" 
            className="brand-logo" 
            onClick={(e) => scrollToSection(e, '#hero')}
            aria-label="R DIMAS ARN Homepage"
          >
            <span className="brand-name">{siteConfig.name}</span>
            <span className="brand-dot" aria-hidden="true">•</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="desktop-nav-group">
            <ul className="nav-links" role="list">
              {siteConfig.navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`nav-link ${isActive ? 'is-active' : ''}`}
                    >
                      {link.label}
                      {isActive && <span className="nav-active-bar" />}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="nav-divider-vertical" aria-hidden="true" />

            {/* Quick Contact Action Button */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="nav-cta-btn"
              aria-label="Get in touch"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Red Circle Profile Avatar */}
            <a 
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="nav-avatar-icon" 
              title="About R Dimas ARN"
              aria-label="View profile details"
            >
              <User size={13} strokeWidth={2.5} />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Secondary Status Sub-Bar (Matches Reference Image) */}
      <div className="navbar-subbar">
        <div className="container subbar-container">
          <div className="subbar-left">
            <span className="subbar-square">■</span>
            <span className="subbar-text">{siteConfig.status.yearLabel}</span>
            <span className="status-pill">
              <span className="pulse-dot" />
              <span>{siteConfig.status.badgeText}</span>
            </span>
          </div>
          <div className="subbar-right">
            <span className="subbar-text mono-text">
              {siteConfig.regionCode} · {siteConfig.deliveryScope}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <span className="brand-name">{siteConfig.name}</span>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <ul className="mobile-nav-list" role="list">
            {siteConfig.navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={18} className="mobile-link-arrow" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn btn-black mobile-cta-btn"
            >
              <span>GET IN TOUCH DIRECTLY</span>
              <ArrowUpRight size={16} />
            </a>
            <div className="mobile-subinfo mono-text">
              <span>{siteConfig.locationFull}</span>
              <span>{siteConfig.status.yearLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
