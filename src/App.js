import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";



import Home from "./components/Home";
import LoginPage from "./components/Login";
import FeedbacksPage from "./components/Login";
import Signup from "./components/Signup";


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
        <Route path="/contact" element={<FeedbacksPage setAuthenticated={<setAuthenticated />} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/python" element={<PythonTutorial />} />
        </Routes>
        </Router>
    );
    }

export default App;
