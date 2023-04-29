import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import Projects from "./components/Projects/Projects";
import Python from "./components/python/Python";
import Kali from "./components/Kali/Kali";
import JavaScript from './components/JavaScript/JavaScript';
import HTML from './components/HTML/html';
import CSS from './components/CSS/CSS';
import SQL from './components/SQL/sql';
import ML from './components/Machine Learning/machine-learning';
import ReactJs from './components/React/React';
import Cryptography from  './components/Kali/cryptography';
import ReferencesPage from "./components/references";
import HtmlReferences from "./components/HTML/htmlreference";
import CSSReference from "./components/CSS/cssreference";


function App() {
    return (
        <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/python" element={<Python />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/sql" element={<SQL />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/ml" element={<ML />} />
        <Route path="/react" element={<ReactJs />} />
        <Route path="/kali-linux" element={<Kali />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cryptography" element={<Cryptography />} />
        <Route path="/reference" element={<ReferencesPage />} />
        <Route path="/htmlreferences" element={<HtmlReferences />} />
        <Route path="/cssreference" element={<CSSReference />} />
        </Routes>
        </Router>
    );
    }

export default App;
