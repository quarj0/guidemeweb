import React from "react";
import { Link } from "react-router-dom";

import "./ReferencesPage.css";

const ReferencesPage = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

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
                Exercise
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
      <section>
        <div className="refdiv">
          <h1 className="refh1">References</h1>
        </div>
      </section>
      <section>
        <div className="refdiv">
          <p className="">
            This page contains links to reference pages for various programming,
            web development, and computer science topics. The reference pages
            contain code snippets and explanations of the code. The reference
            pages are intended to be used as a reference for learning and
            practicing programming and web development.
          </p>
          <p>
            The reference pages are not intended to be used as a substitute for
            a textbook or other learning material. It is recommended that you
            use a textbook or other learning material to learn the concepts and
            then use the reference pages to practice.
          </p>
          <p>More reference pages will be added in the future.</p>
        </div>
      </section>

      <div>
        <h1 className="refh1">Visit links below to learn more</h1>
        <ul className="reful">
          <li className="refli">
            <a className="refa" href="/htmlreferences">
              HTML Reference
            </a>
          </li>
          <li className="refli">
            <a className="refa" href="/cssreference">
              CSS Reference
            </a>
          </li>
          <li className="refli">
            <a className="refa" href="/pythonreference">
              Python Reference
            </a>
          </li>
          <li className="refli">
            <a className="refa" href="/reactreference">
              React Reference
            </a>
          </li>
          <li className="refli">
            <a className="refa" href="/sqlreference">
              SQL Reference
            </a>
          </li>
          <li className="refli">
            <a className="refa" href="/kalireference">
              Kali Linux Reference
            </a>
          </li>
          <li className="refli">
            <a className="refa" href="/javascriptreference">
              JavaScript Reference
            </a>
          </li>
          <li className="refli">
            <a className="refa" href="/mlreference">
              Machine Learning Reference
            </a>
          </li>

          <li className="refli">
            <a className="refa" href="/gitreference">
              Git Reference
            </a>
          </li>
          <li className="refli">
            <a className="refa" href="/networkpreference">
              Networking Reference
            </a>
          </li>
          <li className="refli">
            <a className="refa" href="/guiereference">
              Python GUI Reference
            </a>
          </li>
          <li className="refli">
            <a className="refa" href="/cryptographyference">
              Cryptography Reference
            </a>
          </li>
          <li className="refli">
            <a className="refa" href="/dsreference">
              Data Science Reference
            </a>
          </li>

          <li className="refli">
            <a className="refa" href="/reactnativereference">
              React Native Reference
            </a>
          </li>
        </ul>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h4>Follow Us</h4>
              <ul className="social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/quarjo.young/"
                    title="contact me via facebook"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/quarjowusu/"
                    title="contact me via twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/quarjowusu/"
                    title="contact me via instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/quarjo/"
                    title="contact me via linkedin"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/hacks-and-codes"
                    title="contact me via github"
                  >
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
            <i className="fas fa-caret-up" size="50x"></i>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ReferencesPage;
