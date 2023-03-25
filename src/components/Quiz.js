import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/quiz.css";

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswered, setIsAnswered] = useState(Array(quizData.length).fill(false));
  const [timeRemaining, setTimeRemaining] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsAnswered((prevIsAnswered) => {
      const newIsAnswered = [...prevIsAnswered];
      newIsAnswered[currentQuestion] = true;
      return newIsAnswered;
    });
  };

  const handleNextButtonClick = () => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    if (currentQuestion >= quizData.length) {
      setShowScore(true);
      return;
    }
    if (isAnswered[currentQuestion]) {
      setSelectedOption("");
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
      }
    }
  }, [currentQuestion, isAnswered, quizData.length]);

  useEffect(() => {
    if (selectedOption !== "" || isAnswered[currentQuestion]) {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [selectedOption, isAnswered, currentQuestion]);

  useEffect(() => {
    setTimeRemaining(quizData.length * 60);
  }, [quizData.length]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const handleFinishButtonClick = () => {
    setShowScore(true);
  };

  return (
    <div className="quiz-container">
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
              <Link to="/quiz" className="nav-link" onClick={closeMenu}>
                Quizzes{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tutorial" className="nav-link" onClick={closeMenu}>
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link" onClick={closeMenu}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="navbar">
        <h1>Python Quiz</h1>
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {quizData.length}
          </div>
        ) : (
          <>
            <div className="question-count">
              Question {currentQuestion + 1} of {quizData.length}
            </div>
            <div className="time-remaining">
              Time remaining: {formatTime(timeRemaining)}
            </div>
            <button className="finish-button" onClick={handleFinishButtonClick}>
              Finish
            </button>
          </>
        )}
      </div>

      {!showScore && (
        <div className="quiz-question-container">
              <div className="quiz-options">
      {quizData[currentQuestion].options.map((option, index) => (
        <div
          key={index}
          className={`quiz-option ${isAnswered[currentQuestion] && option === quizData[currentQuestion].correctAnswer ? "correct" : ""} ${isAnswered[currentQuestion] && option !== quizData[currentQuestion].correctAnswer && selectedOption === option ? "wrong" : ""}`}
          onClick={() => handleOptionClick(option)}
        >
          <span className="option">{option}</span>
        </div>
      ))}
    </div>
    <div className="quiz-question-tracker">
      {quizData.map((question, index) => (
        <div
          key={index}
          className={`question-number ${isAnswered[index] ? "answered" : "unanswered"} ${currentQuestion === index ? "active" : ""}`}
          onClick={() => handleOptionClick(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  </div>
)}
{!showScore && selectedOption !== "" && (
  <button className="next-button" onClick={handleNextButtonClick}>
    Next
  </button>
)}
 <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h4>About Us</h4>
              <p>
                We are a team of passionate Python developers who love sharing
                our knowledge with others. Our mission is to provide
                high-quality tutorials, exercises, and references to help anyone
                learn and master Python programming.
              </p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Quick Links</h4>
              <ul className="quick-links">
                <li>
                  <Link to="/tutorial">Tutorials</Link>
                </li>
                <li>
                  <Link to="/references">References</Link>
                </li>
                <li>
                  <Link to="/quiz">Quizzes</Link>
                </li>
                <li>
                  <Link to="/feedback">Feedback</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Follow Us</h4>
              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com/quarjo.young/">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/quarjowusu/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/quarjowusu/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/quarjo/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/hacks-and-codes">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="clearfix"></div>

            <hr />

            <div>
              <p className="text-center">
                &copy; 2021 Hacks and Codes. All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="footer-caret">
            <a href="/">
              <i className="fas fa-caret-up" size="50x"></i>
            </a>
          </div>
        </div>
      </footer>
</div>
);
};

export default Quiz;
