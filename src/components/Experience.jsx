import React from 'react';
import '@/styles/Experience.css';

function Experience() {
  const timelineData = [
    {
      id: 1,
      role: "Academic Researcher & Instructor",
      date: "Present",
      description: "Optimizing exascale computational architectures, developing geospatial processing tools, and instructing advanced parallel computing paradigms."
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="portfolio-container">
        <h2>Experience</h2>
        <div className="timeline">
          {timelineData.map((item) => (
            <div key={item.id} className="timeline-item">
              <h4>{item.role}</h4>
              <span className="timeline-date">{item.date}</span>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;