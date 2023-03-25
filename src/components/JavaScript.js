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
      <div className="container">
        <div className="sidebar">
          <h3>JavaScript</h3>
          <ul>
            <li>
              <Link to="/javascript/introduction">
                Introduction to JavaScript
              </Link>
              <ul>
                <li>
                  <Link to="/javascript/basic-syntax">Basic Syntax</Link>
                </li>
                <li>
                  <Link to="/javascript/variables-data-types">
                    Variables and Data Types
                  </Link>
                </li>
                <li>
                  <Link to="/javascript/operators">Operators</Link>
                </li>
                <li>
                  <Link to="/javascript/comments">Comments</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/javascript/control-structures">
                Control Structures
              </Link>
              <ul>
                <li>
                  <Link to="/javascript/if-else">If/Else Statements</Link>
                </li>
                <li>
                  <Link to="/javascript/loops">Loops</Link>
                </li>
                <li>
                  <Link to="/javascript/functions">Functions</Link>
                </li>
                <li>
                  <Link to="/javascript/switch">Switch Statements</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/javascript/arrays">Arrays</Link>
              <ul>
                <li>
                  <Link to="/javascript/javascript-arrays">
                    JavaScript Arrays
                  </Link>
                </li>
                <li>
                  <Link to="/javascript/creating-arrays">Creating Arrays</Link>
                </li>
                <li>
                  <Link to="/javascript/accessing-arrays">
                    Accessing Arrays
                  </Link>
                </li>
                <li>
                  <Link to="/javascript/array-methods">Array Methods</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/javascript/objects">Objects</Link>
              <ul>
                <li>
                  <Link to="/javascript/javascript-objects">
                    JavaScript Objects
                  </Link>
                </li>
                <li>
                  <Link to="/javascript/creating-objects">
                    Creating Objects
                  </Link>
                </li>
                <li>
                  <Link to="/javascript/accessing-objects">
                    Accessing Objects
                  </Link>
                </li>
                <li>
                  <Link to="/javascript/object-methods">Object Methods</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/javascript/functions">Functions</Link>
              <ul>
                <li>
                  <Link to="/javascript/javascript-functions">
                    JavaScript Functions
                  </Link>
                </li>
                <li>
                  <Link to="/javascript/defining-functions">
                    Defining Functions
                  </Link>
                </li>
                <li>
                  <Link to="/javascript/function-arguments">
                    Function Arguments
                  </Link>
                </li>
                <li>
                  <Link to="/javascript/function-parameters">
                    Function Parameters
                  </Link>
                </li>
                <li>
                  <Link to="/javascript/function-return">Function Return</Link>
                </li>
                <li>
                  <Link to="/javascript/function-scopes">Function Scopes</Link>
                </li>
                <li>
                  <Link to="/javascript/callback-functions">
                    Callback Functions
                  </Link>
                </li>
                <li>
                  <Link to="/javascript/function-closures">
                    Function Closures
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/javascript/events">Events</Link>
              <ul>
                <li>
                  <Link to="/javascript/javascript-events">
                    JavaScript Events
                  </Link>
                </li>
                <li>
                  <Link to="/javascript/event-handlers">Event Handlers</Link>
                </li>
                <li>
                  <Link to="/javascript/event-listeners">Event Listeners</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/javascript/ajax">AJAX</Link>
              <ul>
                <li>
                  <Link to="/javascript/xmlhttprequest">XMLHttpRequest</Link>
                </li>
                <li>
                  <Link to="/javascript/fetch-api">Fetch API</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/javascript/jquery">jQuery</Link>
            </li>
          </ul>
        </div>
        <div className="main"></div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h4>About Us</h4>
              <p>
                We are a team of passionate Python developers who love sharing
                our knowledge with others. Our mission is to provide
                high-quality tutorials, Quizzess, and references to help anyone
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
                  <Link to="/quiz">Quizzess</Link>
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
            <a href="#/">
              <i className="fas fa-caret-up" size="50x"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Python;
