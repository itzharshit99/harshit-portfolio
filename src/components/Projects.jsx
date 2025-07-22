import { useState, useEffect } from 'react';
import '../css/projects.css';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      title: 'Project 1',
      desc: 'A cool web app built with React, featuring real-time data and sleek UI.',
      image: 'https://via.placeholder.com/300x200',
      tech: ['React', 'Node.js', 'CSS'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Project 2',
      desc: 'E-commerce site with payment integration and responsive design.',
      image: 'https://via.placeholder.com/300x200',
      tech: ['React', 'Stripe', 'Tailwind'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Project 3',
      desc: 'Portfolio website with smooth animations and modern aesthetics.',
      image: 'https://via.placeholder.com/300x200',
      tech: ['React', 'Framer Motion', 'CSS'],
      demoLink: '#',
      githubLink: '#',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="projects-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="projects-container">
        <div className={`projects-content ${isVisible ? 'visible' : ''}`}>
          <div className="projects-badge">
            <span className="badge-icon">💻</span>
            <span>My Work</span>
          </div>
          <h2 className="projects-title">My Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span className="tech-tag" key={techIndex}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo">
                      View Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
        <span className="scroll-text">Explore More</span>
      </div>
    </section>
  );
}

export default Projects;