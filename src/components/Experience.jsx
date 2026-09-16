import React from 'react';
import { experiences } from '../data/experience';
import '../styles/about.css';

export default function Experience() {
  return (
    <div className="experience-block">
      <div className="experience-header mono-text">
        <span>TRACK RECORD & INVOLVEMENT</span>
      </div>

      <div className="experience-list">
        {experiences.map((item) => (
          <div key={item.id} className="experience-item">
            <div className="experience-item-top">
              <h4 className="experience-role">{item.role}</h4>
              <span className="experience-period mono-text">{item.period}</span>
            </div>
            <p className="experience-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
