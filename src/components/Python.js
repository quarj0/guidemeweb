import React, { useState } from "react";
import { Link } from "react-router-dom";
// import pythonImg from "../assets/python.png";

import "../styles/Python.css";

const Python = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
              <Link to="/exercise" className="nav-link" onClick={closeMenu}>
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
      <div className="container">
        <div className="sidebar">
          <h3>Python</h3>
          <ul>
            <li>
              <Link to="/python/introduction">Introduction to Python</Link>
              <ul>
                <li>
                  <Link to="/python/basic-syntax">Basic Syntax</Link>
                </li>
                <li>
                  <Link to="/python/variables-data-types">
                    Variables and Data Types
                  </Link>
                </li>
                <li>
                  <Link to="/python/operators">Operators</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/python/control-structures">Control Structures</Link>
              <ul>
                <li>
                  <Link to="/python/if-else">If/Else Statements</Link>
                </li>
                <li>
                  <Link to="/python/loops">Loops</Link>
                </li>
                <li>
                  <Link to="/python/functions">Functions</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/python/lists-tuples-dictionaries">
                Lists, Tuples, and Dictionaries
              </Link>
              <ul>
                <li>
                  <Link to="/python/python-lists">Python Lists</Link>
                </li>
                <li>
                  <Link to="/python/python-tuples">Python Tuples</Link>
                </li>
                <li>
                  <Link to="/python/python-dictionaries">
                    Python Dictionaries
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/python/modules">Modules</Link>
              <ul>
                <li>
                  <Link to="/python/files-io">Files I/O</Link>
                </li>
                <li>
                  <Link to="/python/exception-handling">
                    Exception Handling
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/python/object-oriented-programming">
                Object-Oriented Programming
              </Link>
              <ul>
                <li>
                  <Link to="/python/classes-objects">Classes and Objects</Link>
                </li>
                <li>
                  <Link to="/python/inheritance">Inheritance</Link>
                </li>
                <li>
                  <Link to="/python/polymorphism">Polymorphism</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/python/regular-expressions">Regular Expressions</Link>
            </li>
            <li>
              <Link to="/python/testing">Testing in Python</Link>
            </li>
            <li>
              <Link to="/python/advanced-topics">Advanced Topics</Link>
              <ul>
                <li>
                  <Link to="/python/decorators">Decorators</Link>
                </li>
                <li>
                  <Link to="/python/generators">Generators</Link>
                </li>
                <li>
                  <Link to="/python/closures">Closures</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="main">
        </div>
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

export default Python;
