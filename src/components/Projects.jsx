import React from 'react';
import '@/styles/Projects.css';

function Projects() {
  const projectList = [
    {
      id: 1,
      title: "High-Performance Numerical Software",
      description: "GPU-accelerated parallel framework for solving complex coupled fluid mechanics and morphodynamics equations.",
      tags: ["C++", "JAX", "Parallel Computing"]
    },
    {
      id: 2,
      title: "Scientific Machine Learning Pipelines",
      description: "Distributed multi-GPU training architectures for physics-informed neural networks and climate surrogate models.",
      tags: ["Python", "JAX/Flax", "HPC"]
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="portfolio-container">
        <h2>Selected Research & Projects</h2>
        <div className="projects-grid">
          {projectList.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-placeholder">Code Architecture</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div class="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;