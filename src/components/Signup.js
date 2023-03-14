import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import '../styles/signup.css';

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:5001/register", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      history.push("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          GUIDE ME LEARN
        </Link>
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={handleMenuClick}
        >
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" onClick={closeMenu}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/feedback" className="nav-link" onClick={closeMenu}>
              Feedback
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form" >
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="username" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="new-password" />
          </div>
          <div className="form-control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              autoComplete="new-password" />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div></>
  );
}

export default SignupPage;
