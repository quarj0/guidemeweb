import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Home from "./components/Home";
import Projects from "./components/Projects";
import Python from "./components/Python";
import Kali from "./components/Kali";

import './App.css';
import Quiz from "./components/Quiz";


function App() {
    return (
        <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/python" element={<Python />} />
        <Route path="/kali-linux" element={<Kali />} />
        <Route path="/projects" element={<Projects />} />
        </Routes>
        </Router>
    );
    }

export default App;
