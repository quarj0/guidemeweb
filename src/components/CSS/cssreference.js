/* eslint-disable react/style-prop-object */
import React from "react";
import { Link } from "react-router-dom";

import selectors from "./referencedata";

const CSSReference = () => {
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
      <div className="refdiv">
        <h1 className="refh1">CSS References</h1>
        <table className="reftable">
          <thead>
            <tr>
              <th className="reftableth">Name</th>
              <th className="reftableth">Description</th>
              <th className="reftableth">Example</th>
              <th className="reftableth">Example Description</th>
            </tr>
          </thead>
          {selectors.map((css) => (
            <tr key={css.id}>
              <td className="reftabletd">{css.name}</td>
              <td className="reftabletd">{css.description}</td>
              <td className="reftabletd">{css.example}</td>
              <td className="reftabletd">{css.exampleDescription}</td>
            </tr>
          ))}
        </table>
      </div>
      <div>
        <p className="text-center" >
          &copy; 2021 Guide Me Learn. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default CSSReference;
