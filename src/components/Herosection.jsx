import React from 'react';
import './HeroSection.css';

const HeroSection = ({ title, subtitle }) => {
  return (
    <section className="hero-section">
      {/* Decorative elements */}
      <div className="hero-decoration hero-decoration-1"></div>
      <div className="hero-decoration hero-decoration-2"></div>
      <div className="hero-decoration hero-decoration-3"></div>
      
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
    </section>
  );
};
 export default HeroSection;