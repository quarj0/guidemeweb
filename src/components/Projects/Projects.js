import React, { useState } from "react";

import { Link } from "react-router-dom";

const Projects = () => {
  const [menuOpen, setMenuOpen] = useState("");

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "Python Web Scraper",
      description:
        "A web scraper built with Python that extracts data from websites.",
      image: "https://via.placeholder.com/150",
      technologies: ["Python", "BeautifulSoup", "Requests"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/example/python-web-scraper",
    },
    {
      id: 2,
      title: "React Todo List",
      description: "A simple todo list app built with React and Redux.",
      image: "https://via.placeholder.com/150",
      technologies: ["React", "Redux"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/example/react-todo-list",
    },
    {
      id: 3,
      title: "JavaScript Calculator",
      description: "A calculator app built with vanilla JavaScript.",
      image: "https://via.placeholder.com/150",
      technologies: ["JavaScript"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/example/javascript-calculator",
    },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            GUIDE ME LEARN
          </Link>
          <div
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            onClick={handleMenuClick}
          >
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
          <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/quizzes" className="nav-link" onClick={closeMenu}>
                Quiz{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tutorial" className="nav-link" onClick={closeMenu}>
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link" onClick={closeMenu}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="projects-container">
        <h1 className="my-5">Projects</h1>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="card-text">
                    <strong>Technologies used:</strong>{" "}
                    {project.technologies.join(", ")}
                  </p>
                  <a href={project.demoLink} className="btn btn-primary mr-2">
                    Demo
                  </a>
                  <a href={project.githubLink} className="btn btn-secondary">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <h4>About Us</h4>
                <p>
                  We are a team of passionate Python developers who love sharing
                  our knowledge with others. Our mission is to provide
                  high-quality tutorials, Quizzes, and references to help anyone
                  learn and master Python programming.
                </p>
              </div>
              <div className="col-md-3 col-sm-6">
                <h4>Quick Links</h4>
                <ul className="quick-links">
                  <li>
                    <Link to="/tutorial">Tutorials</Link>
                  </li>
                  <li>
                    <Link to="/references">References</Link>
                  </li>
                  <li>
                    <Link to="/Quiz">Quizzes</Link>
                  </li>
                  <li>
                    <Link to="/feedback">Feedback</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h4>Follow Us</h4>
                <ul className="social-icons">
                  <li>
                    <a href="https://www.facebook.com/quarjo.young/">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/quarjowusu/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/quarjowusu/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/quarjo/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/hacks-and-codes">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="clearfix"></div>

              <hr />

              <div>
                <p className="text-center">
                  &copy; 2021 Hacks and Codes. All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="footer-caret">
              <a href="/">
                <i className="fas fa-caret-up" size="50x"></i>
              </a>
            </div>
          </div>
        </footer>
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
    </>
  );
};

export default Projects;
