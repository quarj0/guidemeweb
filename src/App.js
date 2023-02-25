import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './components/Tutorial.css';
import Basics from './components/Basics';
import Advanced from './components/Advanced';
import Analysis from './components/Analysis';
import Python from './components/images/Python.png';
import DataScince from './components/images/analysis.png';
import Script from './components/images/script.jpeg';

import { useState } from 'react';

function App() {

  function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = () => {
      // Perform search with searchTerm
      console.log(`Searching for ${searchTerm}`);
    };
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };

  return (
    <section className="w3-container bg-animation">
      <Router>
        <div className="App">
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                Python Tutorials
              </Link>
              <div className="search-bar">
                <input type="text" placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={handleSearch}/>
              </div>
              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to="/" className="nav-links">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-links">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/basics" element={<Basics />} />
            <Route path="/advanced" element={<Advanced />} />
            <Route path="/analysis" element={<Analysis />} />
          </Routes>
          <footer className="w3-container w3-black">
            <p className="w3-center">&copy; 2023 Python Tutorials</p>
          </footer>
        </div>
      </Router>
    </section>
  );
}

function Home() {
  return (
    <section className="w3-container">
      <h2>Our Tutorials</h2>
      <div className="tutorial">
        <img src={Python} alt="Tutorial 1" />
        <h3>Python Basics</h3>
        <p>Python is the most popular programming language among beginners, thanks to its simplicity and readability.</p>
        <Link to="/basics"><button className="btn-read-more">Read More</button></Link>
      </div>
      <div className="tutorial">
        <img src={Script} alt="Tutorial 2" />
        <h3>Advanced Python</h3>
        <p>Once you have learned the basics of Python, you can start exploring its advanced features.</p>
        <Link to="/advanced"><button className="btn-read-more">Read More</button></Link>
      </div>
      <div className="tutorial">
        <img src={DataScince} alt="Tutorial 3" />
        <h3>Data Analysis with Python</h3>
        <p>Data Analysis is the most important skill in today's world. Python provides several powerful libraries for data analysis and visualization.</p>
        <Link to="/analysis"><button className="btn-read-more">Read More</button></Link>
      </div>
    </section>
  );
}

function Tutorials() {
  return (
    <section className="w3-container">
      <h2>Tutorials</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basics" element={<Basics />} />
        <Route path="/advanced" element={<Advanced />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>

    </section>
  );
}
}

export default App;
