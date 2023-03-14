import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";


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

  // const filteredTutorials = (tutorials) => {
  //   if (searchQuery === "") {
  //     return tutorials;
  //   }
  //   return tutorials.filter((tutorial) =>
  //     tutorial.title.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // };

  // const filteredTutorial = filteredTutorials(tutorials);

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
              <Link to="/contact" className="nav-link" onClick={closeMenu}>
                Contact
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
                <img src="https://via.placeholder.com/350x200" alt="Tutorial" />
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
                <img src="https://via.placeholder.com/350x200" alt="Tutorial" />
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
                <img src="https://via.placeholder.com/350x200" alt="Tutorial" />
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
                <img src="https://via.placeholder.com/350x200" alt="Tutorial" />
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
                <img src="https://via.placeholder.com/350x200" alt="Tutorial" />
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
                <img src="https://via.placeholder.com/350x200" alt="Tutorial" />
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
                <img src="https://via.placeholder.com/350x200" alt="Tutorial" />
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
                <img src="./assets/html.png" alt="Tutorial" />
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
                <img src="https://via.placeholder.com/350x200" alt="Tutorial" />
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
                <img src="https://via.placeholder.com/350x200" alt="Tutorial" />
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
        {/* <section className="reference" id="reference">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2></h2> */}
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
                  <Link to="/contact">Contact Us</Link>
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
