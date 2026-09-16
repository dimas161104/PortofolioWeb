import React from 'react';
import { competencies } from '../data/experience';
import '../styles/about.css';

export default function Skills() {
  return (
    <div className="skills-block">
      <div className="skills-header mono-text">
        <span>COMPETENCY MATRIX</span>
      </div>
      <div className="skills-tags-wrapper">
        {competencies.map((skill) => (
          <span key={skill} className="skill-tag mono-text">
            <span className="skill-dot" aria-hidden="true">•</span>
            <span>{skill}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
