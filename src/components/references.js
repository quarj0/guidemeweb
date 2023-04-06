import React from 'react';
import { Link } from 'react-router-dom';

import HtmlTable from './HTML/htmltable';
import './ReferencesPage.css';

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
    <section>
    <div className='refdiv'>
    <h1 className='refh1'>References</h1>
    <HtmlTable />
    </div>
    </section>

<div>
<h1 className='refh1'>Visit links below to learn more</h1>
<ul className='reful'>
<li className='refli'><a className='refa' href="/htmlreferences">HTML Reference</a></li>
<li className='refli'><a className='refa' href="/cssreference">CSS Reference</a></li>
<li className='refli'><a className='refa' href="/pythonreference">Python Reference</a></li>
<li className='refli'><a className='refa' href="/reactreference">React Reference</a></li>
<li className='refli'><a className='refa' href="/sqlreference">SQL Reference</a></li>
<li className='refli'><a className='refa' href="/kalireference">Kali Linux Reference</a></li>
<li className='refli'><a className='refa' href="/javascriptreference">JavaScript Reference</a></li>
</ul>
</div>
</>
);
}

export default ReferencesPage;