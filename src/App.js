import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Feedback from "./components/Feedback";


import './App.css'



function App() {
    return (
        <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Feedback />} />
        {/* <Route path="/about" element={<footer />} /> */}
        </Routes>
        </Router>
    );
    }

export default App;
