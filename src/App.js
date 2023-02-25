import React from 'react';
import './App.css';
import './custom.css'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home';
import Tutorial1 from './components/Tutorial1';
import Tutorial2 from './components/Tutorial2';
import Tutorial3 from './components/Tutorial3';

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

export default App;
