import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../css/hero.css';
function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer", 
    "Tech Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-badge">
            <span className="badge-icon">👋</span>
            <span>Welcome to my portfolio</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-name">Harshit Jain</span>
          </h1>
          
          <div className="hero-subtitle">
            <span className="subtitle-prefix">I'm a </span>
            <span className="dynamic-role">{roles[currentRole]}</span>
          </div>
          
          <p className="hero-description">
            Passionate about creating beautiful, functional, and user-friendly digital experiences. 
            I bring ideas to life through clean code and innovative design.
          </p>
          
          <div className="hero-actions">
            <Link 
              to="projects" 
              smooth={true} 
              duration={800}
              className="cta-primary"
            >
              <span>View My Work</span>
              <svg className="cta-icon" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            
            <Link 
              to="contact" 
              smooth={true} 
              duration={800}
              className="cta-secondary"
            >
              Let's Connect
            </Link>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
        
        <div className={`hero-visual ${isVisible ? 'visible' : ''}`}>
          <div className="hero-avatar">
            <div className="avatar-ring"></div>
            <div className="avatar-image">
              <span className="avatar-emoji">👨‍💻</span>
            </div>
          </div>
          
          <div className="floating-cards">
            <div className="tech-card card-1">
              <span>⚛️</span>
              <span>React</span>
            </div>
            <div className="tech-card card-2">
              <span>🎨</span>
              <span>Design</span>
            </div>
            <div className="tech-card card-3">
              <span>⚡</span>
              <span>Fast</span>
            </div>
            <div className="tech-card card-4">
              <span>🚀</span>
              <span>Modern</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  );
}

export default Hero;