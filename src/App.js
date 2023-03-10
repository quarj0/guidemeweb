import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Basics from "./components/Basics";
import Advanced from "./components/Advanced";
import Analysis from "./components/Analysis";
import Network from "./components/Network";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import tutorials from "./components/tutorials.js";
import "./App.css";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);



  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    console.log("Search term:", searchTerm);
    const filtered = tutorials.filter((tutorial) =>
      tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filtered);
  }

  return (
    <section className="w3-container bg-animation">
      <Router>
        <div className="App">
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                Python Tutorials
              </Link>
              <form className="search-bar" onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </form>
              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to="/" className="nav-links">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/donate" className="nav-links">
                    Donate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-links">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route
              path="/donate"
              element={<Donate searchTerm={searchTerm} searchResults={searchResults} />}
            />
            <Route
              path="/contact"
              element={<Contact searchTerm={searchTerm} searchResults={searchResults} />}
            />
            <Route
              path="/"
              element={<Home tutorials={tutorials} searchTerm={searchTerm} searchResults={searchResults} />}
            />
            <Route
              path="/basics"
              element={<Basics searchTerm={searchTerm} searchResults={searchResults} />}
            />
            <Route
              path="/advanced"
              element={<Advanced searchTerm={searchTerm} searchResults={searchResults} />}
            />
            <Route
              path="/analysis"
              element={<Analysis searchTerm={searchTerm} searchResults={searchResults} />}
            />
            <Route
              path="/network"
              element={<Network searchTerm={searchTerm} searchResults={searchResults} />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </section>
  );
}
function Home({ tutorials, searchTerm }) {
  const filtered = tutorials.filter((tutorial) =>
    tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w3-container">
      <h2>Our Tutorials</h2>
      {filtered.map((tutorial) => (
        <div className="tutorial" key={tutorial.id}>
          <img src={tutorial.image} alt={tutorial.title} />
          <h3>{tutorial.title}</h3>
          <p>{tutorial.description}</p>
          <Link to={tutorial.path}>
            <button className="btn-read-more">Read More</button>
          </Link>
        </div>
      ))}
    </section>
  );
}


export default App;
