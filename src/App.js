import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";



import Home from "./components/Home";
import LoginPage from "./components/Login";
import Signup from "./components/Signup";
import Feedback from "./components/Feedback";
import Projects from "./components/Projects";
import Exercise from "./components/Exercise";


import './App.css'
import PythonTutorial from "./components/Python";




function App() {
    const [authenticated, setAuthenticated] = useState(false);

    const checkAuthenticated = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("/api/user", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.data.email) {
            setAuthenticated(true);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
  
    checkAuthenticated()
    return (
        <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage setAuthenticated={<setAuthenticated />} />} />
        <Route path="/contact" element={<Feedback setAuthenticated={<setAuthenticated />} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/python" element={<PythonTutorial />} />
        <Route path="/projects" element={<Projects />} />
        </Routes>
        </Router>
    );
    }

export default App;
