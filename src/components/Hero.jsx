import React from 'react';
import '@/styles/Hero.css';

function Hero() {
  return (
    <header id="about" className="hero-section">
      <div className="portfolio-container">
        <div className="hero-content">
          <h1>Hi, I'm a Developer &<br/>Scientific Researcher</h1>
          <p>Building high-performance numerical software, optimizing computational parallel frameworks, and training distributed machine learning models.</p>
          <a href="#projects" className="cta-btn">View My Work</a>
        </div>
      </div>
    </header>
  );
}

export default Hero;