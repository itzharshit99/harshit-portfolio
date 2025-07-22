function Projects() {
  const projects = [
    { title: 'Project 1', desc: 'A cool web app built with React.', link: '#' },
    { title: 'Project 2', desc: 'E-commerce site with payment integration.', link: '#' },
    { title: 'Project 3', desc: 'Portfolio website with animations.', link: '#' },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;