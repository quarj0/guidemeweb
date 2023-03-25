import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Home from "./components/Home";
import Projects from "./components/Projects";
import Python from "./components/Python";
import Kali from "./components/Kali";
import JavaScript from './components/JavaScript';
import HTML from './components/html';
import CSS from './components/CSS';
import SQL from './components/sql';
import ML from './components/machine-learning';
import ReactJs from './components/react';
import Cryptography from './components/cryptography';

import './App.css';
import Quiz from "./components/Quiz";


function App() {
    return (
        <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/python" element={<Python />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/sql" element={<SQL />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/ml" element={<ML />} />
        <Route path="/react" element={<ReactJs />} />
        <Route path="/python" element={<Python />} />
        <Route path="/kali-linux" element={<Kali />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cryptography" element={<Cryptography />} />
        </Routes>
        </Router>
    );
    }

export default App;
