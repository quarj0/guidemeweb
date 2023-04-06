import React from "react";
import { Link } from "react-router-dom";

import HtmlTable from "./htmltable";
import "./html.css";

const HtmlReferences = () => {
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
      {/* References table */}
      <HtmlTable />

      <div>
        <h1 className="refh1">Learn more</h1>
        <ul className="reful">
          <li className="refli">
            <a
              className="refa"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
              target="_blank"
              rel="noreferrer"
            >
              HTML Element Reference
            </a>
          </li>
          <li className="refli">
            <a
              className="refa"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes"
              target="_blank"
              rel="noreferrer"
            >
              HTML Attribute Reference
            </a>
          </li>
          <li className="refli">
            <a
              className="refa"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes"
              target="_blank"
              rel="noreferrer"
            >
              HTML Global Attributes Reference
            </a>
          </li>
          <li className="refli">
            <a
              className="refa"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
              target="_blank"
              rel="noreferrer"
            >
              HTML anchor Element Reference
            </a>
          </li>
          <li className="refli">
            <a
              className="refa"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"
              target="_blank"
              rel="noreferrer"
            >
              HTML img Element Reference
            </a>
          </li>
          <li className="refli">
            <a
              className="refa"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
              target="_blank"
              rel="noreferrer"
            >
              HTML form Element Reference
            </a>
          </li>
        </ul>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12"></div>

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
            <a href="/htmlreference">
              <i className="fas fa-caret-up" size="50x"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HtmlReferences;
