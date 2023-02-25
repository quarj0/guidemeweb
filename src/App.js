import React from 'react';
import './App.css';
import './index.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import Tutorial1 from './components/Tutorial1';
import Tutorial2 from './components/Tutorial2';
import Tutorial3 from './components/Tutorial3';
import Python from './components/images/Python.png';
import DataScince from './components/images/analysis.png';
import Script from './components/images/script.jpeg';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Python & Kali Linux Tutorials</h1>
          <p>Learn Python and Kali Linux with our free tutorials</p>
          <Link to="/tutorials"><button>Get Started</button></Link>
        </header>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/tutorials" component={Home} />
          <Route exact path="/tutorial1" component={Tutorial1} />
          <Route exact path="/tutorial2" component={Tutorial2} />
          <Route exact path="/tutorial3" component={Tutorial3} />
        </Routes>
        <footer>
          <p>&copy; 2023 Python & Kali Linux Tutorials</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section>
      <h2>Our Tutorials</h2>
      <div className="tutorial">
        <img src={Python} alt="Tutorial 1" />
        <h3>Tutorial 1</h3>
        <p>Python the most popular programming language among...</p>
        <Link to="/tutorial1"><button>Read More</button></Link>
      </div>
      <div className="tutorial">
        <img src={DataScince} alt="Tutorial 2" />
        <h3>Analysis With Python</h3>
        <p>Data Analysis is the most...</p>
        <Link to="/tutorial2"><button>Read More</button></Link>
      </div>
      <div className="tutorial">
        <img src={Script} alt="Tutorial 3" />
        <h3>Tutorial 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to="/tutorial3"><button>Read More</button></Link>
      </div>
    </section>
  );
}

export default App;
