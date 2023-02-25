import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "./components/Tutorial.css";
import Basics from "./components/Basics";
import Advanced from "./components/Advanced";
import Analysis from "./components/Analysis";
import Network from "./components/Network";
import Login from "./components/Login";
import Signup from "./components/register";
import Python from "./components/images/Python.png";
import DataScince from "./components/images/analysis.png";
import Script from "./components/images/script.jpeg";
import network from "./components/images/network.jpeg";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const tutorials = [
    {
      id: 1,
      title: "Python Basics",
      description:
        "Python is the most popular programming language among beginners, thanks to its simplicity and readability.",
      image: Python,
      path: "/basics",
    },
    {
      id: 2,
      title: "Advanced Python",
      description:
        "Once you have learned the basics of Python, you can start exploring its advanced features.",
      image: Script,
      path: "/advanced",
    },
    {
      id: 3,
      title: "Data Analysis with Python",
      description:
        "Data Analysis is the most important skill in today's world. Python provides several powerful libraries for data analysis and visualization.",
      image: DataScince,
      path: "/analysis",
    },

    {
      id: 4,
      title: "Python for Networking",
      description:
        "Networking is the process of connecting two or more computing devices together for the purpose of sharing data. In this tutorial, you will learn how to use Python to create a simple network application.",
      image: network,
      path: "/network",
    },

    
  ];

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
                  <Link to="/login" className="nav-links">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-links">
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {searchResults.length > 0 ? (
            <Routes>
              <Route
                path="/"
                element={
                  <Home tutorials={searchResults} searchTerm={searchTerm} />
                }
              />
            </Routes>
          ) : (
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home tutorials={tutorials} searchTerm={searchTerm} searchResults={searchResults} />} />
            <Route path="/basics" element={<Basics searchTerm={searchTerm} searchResults={searchResults} />} />
            <Route path="/advanced" element={<Advanced searchTerm={searchTerm} searchResults={searchResults} />} />
            <Route path="/analysis" element={<Analysis searchTerm={searchTerm} searchResults={searchResults} />} />
            <Route path="/network" element={<Network searchTerm={searchTerm} searchResults={searchResults} />} />
            </Routes>
          )}
          <footer className="w3-container w3-black">
            <p className="w3-center">&copy; 2023 Python Tutorials</p>
          </footer>
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

function Tutorials() {
  return (
    <section className="w3-container">
      <h2>Tutorials</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basics" element={<Basics />} />
        <Route path="/advanced" element={<Advanced />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/network" element={<Network />} />
      </Routes>
    </section>
  );
}

export default App;
