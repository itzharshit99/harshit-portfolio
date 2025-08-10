import { useState, useEffect } from 'react';
import '../css/about.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🚀' },
    { name: 'UI/UX Design', icon: '🖌️' },
    { name: 'Git', icon: '📚' },
  ];

  const experiences = [
    {
      title: 'Software Developer Intern @mediaAMP',
      duration: 'May-2025 to July-2025 ',
      description: 'Building responsive web applications using React and modern frameworks.',
    },
    {
      title: 'Full Stack Developer Intern @EngineerCore',
      duration: 'May-2024 to June-2024',
      description: 'Designed user-friendly interfaces for web and mobile apps.',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="about-container">
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-badge">
            <span className="badge-icon">🌟</span>
            <span>About Harshit Jain</span>
          </div>

          <h2 className="about-title">Who Am I?</h2>
          <p className="about-description">
            I'm Harshit Jain, a passionate Full Stack Developer and UI/UX Designer with over 2 years
            of experience crafting seamless, user-friendly digital experiences. I specialize in
            building responsive web applications using React, JavaScript, and modern frameworks,
            while ensuring clean code and innovative design. My mission is to turn ideas into reality
            with a focus on performance and aesthetics.
          </p>

          <div className="skills-section">
            <h3 className="skills-title">My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <h3 className="experience-title">My Journey</h3>
            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <div className="experience-card" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="experience-content">
                    <h4>{exp.title}</h4>
                    <span className="duration">{exp.duration}</span>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
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

export default About;