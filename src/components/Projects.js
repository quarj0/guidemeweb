import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Python Web Scraper',
      description: 'A web scraper built with Python that extracts data from websites.',
      image: 'https://via.placeholder.com/150',
      technologies: ['Python', 'BeautifulSoup', 'Requests'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/example/python-web-scraper'
    },
    {
      id: 2,
      title: 'React Todo List',
      description: 'A simple todo list app built with React and Redux.',
      image: 'https://via.placeholder.com/150',
      technologies: ['React', 'Redux'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/example/react-todo-list'
    },
    {
      id: 3,
      title: 'JavaScript Calculator',
      description: 'A calculator app built with vanilla JavaScript.',
      image: 'https://via.placeholder.com/150',
      technologies: ['JavaScript'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/example/javascript-calculator'
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="my-5">Projects</h1>
      <div className="row">
        {projects.map(project => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p className="card-text"><strong>Technologies used:</strong> {project.technologies.join(', ')}</p>
                <a href={project.demoLink} className="btn btn-primary mr-2">Demo</a>
                <a href={project.githubLink} className="btn btn-secondary">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .projects-container {
          padding: 40px 0;
        }
        .card {
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .card-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 16px;
        }
        .card-text {
          margin-bottom: 16px;
        }
        .btn {
          font-size: 16px;
          padding: 8px 16px;
          border-radius: 4px;
          text-transform: uppercase;
          font-weight: bold;
        }
        @media (max-width: 767px) {
          .card {
            height: 380px;
          }
          .card-img-top {
            height: 200px;
            object-fit: cover;
          }
          .card-title {
            font-size: 18px;
            margin-bottom: 12px;
          }
          .btn {
            font-size: 14px;
            padding: 6px 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
