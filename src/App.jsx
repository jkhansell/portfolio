import React from 'react';
import '@/styles/Global.css';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
      </main>

      <footer id="contact" className="footer-section">
        <div className="portfolio-container">
          <h2>Get In Touch</h2>
          <p>Interested in scientific collaboration, computing research, or development workflows?</p>
          <div className="contact-links">
            <a href="https://github.com/jkhansell" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:your.email@example.com">Email</a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} • Built with React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;