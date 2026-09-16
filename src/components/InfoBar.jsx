import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/infobar.css';

export default function InfoBar() {
  const sectionRef = useScrollReveal({ threshold: 0.15 });

  const items = [
    { label: "DISCIPLINE", value: "Identity + Film",  detail: "System & Motion" },
    { label: "ACADEMIA",   value: siteConfig.location,
      detail: siteConfig.education.degree.replace('D4 ', '') + ' (D4)' },
    { label: "OUTPUT",     value: siteConfig.status.outputProjects,
      detail: siteConfig.status.outputSubtitle },
    { label: "STATUS",     value: siteConfig.status.state, isAccent: true,
      detail: siteConfig.status.label }
  ];

  return (
    <section className="infobar-section reveal-on-scroll" ref={sectionRef} aria-label="Quick Overview">
      <div className="container infobar-container">
        <div className="infobar-grid">
          {items.map((item, index) => (
            <div key={item.label} className="infobar-col">
              <span className="infobar-label mono-text">{item.label}</span>
              <span className={`infobar-value ${item.isAccent ? 'text-red' : ''}`}>
                {item.value}
              </span>
              <span className="infobar-detail mono-text">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="divider-line" />
    </section>
  );
}
