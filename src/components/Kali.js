import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/kali.css";

const LinuxSidebar = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const topics = [
    {
      name: "Basic Commands",
      subtopics: [
        {
          name: "Navigation",
          exercises: [
            "Use `cd` to navigate to your home directory.",
            "Use `ls` to list the contents of the current directory.",
            "Use `pwd` to print the current working directory.",
          ],
        },
        {
          name: "File Management",
          exercises: [
            "Use `touch` to create a new empty file.",
            "Use `cp` to copy a file to a new location.",
            "Use `rm` to delete a file.",
          ],
        },
      ],
    },
    {
      name: "System Administration",
      subtopics: [
        {
          name: "Users and Groups",
          exercises: [
            "Use `useradd` to create a new user account.",
            "Use `passwd` to change a user's password.",
            "Use `groupadd` to create a new group.",
          ],
        },
        {
          name: "Permissions",
          exercises: [
            "Use `chmod` to change a file's permissions.",
            "Use `chown` to change a file's owner.",
            "Use `chgrp` to change a file's group.",
          ],
        },
      ],
    },
  ];

  const handleTopicClick = (index) => {
    setSelectedTopic(index);
  };

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
              <Link to="/quiz" className="nav-link" onClick={closeMenu}>
                Quizzes
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
      <div className="sidebar-container">
        <h2>Linux</h2>
        <ul className="topics-list">
          {topics.map((topic, index) => (
            <li
              key={index}
              className={`topic-item ${
                selectedTopic === index ? "selected" : ""
              }`}
              onClick={() => handleTopicClick(index)}
            >
              {topic.name}
            </li>
          ))}
        </ul>
        {selectedTopic !== null && (
          <ul className="subtopics-list">
            {topics[selectedTopic].subtopics.map((subtopic, index) => (
              <li key={index} className="subtopic-item">
                <h3>{subtopic.name}</h3>
                <ul className="exercises-list">
                  {subtopic.exercises.map((exercise, index) => (
                    <li key={index} className="exercise-item">
                      {exercise}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h4>About Us</h4>
              <p>
                We are a team of passionate Python developers who love sharing
                our knowledge with others. Our mission is to provide
                high-quality tutorials, exercises, and references to help anyone
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
                  <Link to="/exercises">Exercises</Link>
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
            <a href="">
              <i className="fas fa-caret-up" size="50x"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LinuxSidebar;
