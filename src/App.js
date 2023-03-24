import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Home from "./components/Home";
import Projects from "./components/Projects";
import Exercise from "./components/Exercise";
import Python from "./components/Python";

import './App.css';


function App() {
    return (
        <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/python" element={<Python />} />
        <Route path="/projects" element={<Projects />} />
        </Routes>
        </Router>
    );
    }

export default App;
