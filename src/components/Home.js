import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import ML from "../assets/ML.png";
import Kali from "../assets/kali.png";
import python from "../assets/python.png";
import visual from "../assets/python-visual.png";
import cryptography from "../assets/cryptography.jpeg";
import Reactlogo from "../assets/logo512.png";
import SQL from "../assets/sql.png";
import video from "../assets/video.gif";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
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
                Quizes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resouces" className="nav-link" onClick={closeMenu}>
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" onClick={closeMenu}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <div className="landing-page">
          <div className="landing-page-header">
            <h1>Guide Me Learn</h1>
            <p>
              Learn a skill with our online tutorials, references, and
              exercises.
            </p>
            <form className="search-form">
              <input
                type="text"
                placeholder="Search..."
                onChange={handleSearchInput}
                value={searchQuery}
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>

          <div className="landing-page-tutorials">
            <h2>Popular Tutorials</h2>
            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={python} alt="python logo" />
              </div>
              <div className="tutorial-card-content">
                <h3>Python</h3>
                <p>Learn Python programming language.</p>
                <Link to="/python" className="btn-start-learning">
                  Start Learning
                </Link>
                <Link to="/reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>

            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={ML} alt="machine-learning img" />
              </div>
              <div className="tutorial-card-content">
                <h3>Python Machine Learning</h3>
                <p>
                  Learn how to build machine learning models using Python
                  programming language.
                </p>
                <Link to="#start" className="btn-start-learning">
                  Start Learning
                </Link>
                <Link to="#reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>

            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={js} alt="js-icon" />
              </div>
              <div className="tutorial-card-content">
                <h3>JavaScript</h3>
                <p>Learn JavaScript programming language.</p>
                <Link to="/javascript" className="btn-start-learning">
                  Start Learning
                </Link>
                <Link to="/reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>

            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={visual} alt="python-visualization img" />
              </div>
              <div className="tutorial-card-content">
                <h3>Python Data Visualization</h3>
                <p>
                  Learn how to visualize data using Python programming language.
                </p>
                <Link to="#start" className="btn-start-learning">
                  Start Learning
                </Link>
                <Link to="#reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>

            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={SQL} alt="Structred Query Language img" />
              </div>
              <div className="tutorial-card-content">
                <h3>SQL Database Language </h3>
                <p>Learn the basics of SQL programming language.</p>
                <Link to="#start" className="btn-start-learning">
                  Start Learning
                </Link>
                <Link to="#reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>

            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={Kali} alt="Kali linux operating system img" />
              </div>
              <div className="tutorial-card-content">
                <h3>Kali Linux </h3>
                <p>Learn the basics of Kali Linux operating system.</p>
                <Link to="#start" className="btn-start-learning">
                  Start Learning
                </Link>
                <Link to="#reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>

            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={cryptography} alt="cryptography img" />
              </div>
              <div className="tutorial-card-content">
                <h3>Cryptography</h3>
                <p>
                  Learn how to perform cryptography using Kali Linux operating
                  system.
                </p>
                <Link to="#start" className="btn-start-learning">
                  Start Learning
                </Link>
                <Link to="#reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>
            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={html} alt="html logo" />
              </div>
              <div className="tutorial-card-content">
                <h3>HTML</h3>
                <p>Learn how to create web pages using HTML.</p>
                <Link to="#start" className="btn-start-learning">
                  Start Learning
                </Link>
                <Link to="#reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>
            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={css} alt="CSS logo" />
              </div>
              <div className="tutorial-card-content">
                <h3>CSS</h3>
                <p>Learn how to style web pages using CSS.</p>
                <Link to="#start" className="btn-start-learning">
                  Start Learning
                </Link>
                <Link to="#reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>
            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={Reactlogo} alt="react logo" />
              </div>
              <div className="tutorial-card-content">
                <h3>React</h3>
                <p>Learn how to create web applications using React.</p>
                <Link to="#start" className="btn-start-learning">
                  Start Learning
                </Link>
                <Link to="#reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="gifarea">
          <div className="gif">
            <div className="tutorial-card-content">
              <h2>Learn how to code for free </h2>
              <div className="tutorial-card-img">
                <img src={video} alt="coding gif" />
              </div>
              <p className="gif-text">
                <i>"The best way to learn to code is to code."</i>
                <br />
                <br />
                <i>From great responsibilities comes great opportunities.</i>
              </p>
            </div>
          </div>
        </section>
      </main>
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
            <a href="#top">
              <i className="fas fa-caret-up" size="50x"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Home;
