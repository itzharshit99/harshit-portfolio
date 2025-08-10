import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../css/projects.css';

// Simple 3D Card Components
const CardContainer = ({ children, className }) => {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateXValue = (e.clientY - centerY) / 10;
    const rotateYValue = (centerX - e.clientX) / 10;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
};

const CardItem = ({ children, className, translateZ = 0, as: Component = "div", ...props }) => {
  return (
    <Component
      className={className}
      style={{
        transform: `translateZ(${translateZ}px)`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      title: 'Project 1',
      desc: 'A cool web app built with React, featuring real-time data and sleek UI.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
      tech: ['React', 'Node.js', 'CSS'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Project 2',
      desc: 'E-commerce site with payment integration and responsive design.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
      tech: ['React', 'Stripe', 'Tailwind'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Project 3',
      desc: 'Portfolio website with smooth animations and modern aesthetics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
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
        <motion.div 
          className="gradient-orb orb-1"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="gradient-orb orb-2"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="projects-container">
        <div className={`projects-content ${isVisible ? 'visible' : ''}`}>
          <motion.div 
            className="projects-badge"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-icon">💻</span>
            <span>My Work</span>
          </motion.div>
          
          <motion.h2 
            className="projects-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            My Projects
          </motion.h2>
          
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                <CardContainer className="project-card">
                  <div className="card-body">
                    <CardItem translateZ="50">
                      <div className="project-content">
                        <h3>{project.title}</h3>
                      </div>
                    </CardItem>
                    
                    <CardItem translateZ="60">
                      <div className="project-content">
                        <p>{project.desc}</p>
                      </div>
                    </CardItem>
                    
                    <CardItem translateZ="100">
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                    </CardItem>

                    <CardItem translateZ="80">
                      <div className="project-tech">
                        {project.tech.map((tech, techIndex) => (
                          <span className="tech-tag" key={techIndex}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardItem>

                    <CardItem translateZ="20">
                      <div className="project-links">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo">
                          View Demo
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                          GitHub
                        </a>
                      </div>
                    </CardItem>
                  </div>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="scroll-dot"></div>
        <span className="scroll-text">Explore More</span>
      </motion.div>
    </section>
  );
}

export default Projects;