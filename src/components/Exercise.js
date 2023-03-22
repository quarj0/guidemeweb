import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/quiz.css';

const questions = [
  {
    question: 'What is the output of the following code? print(2+3)',
    answer: '5'
  },
  {
    question: 'What is the output of the following code? x = 5\ny = 2\nprint(x % y)',
    answer: '1'
  },
  // ... add more questions here
];

  const Exercise = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // const handleSearchInput = (event) => {
  //   setSearchTerm(event.target.value);
  // };


  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer(false);
    }
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
    if (currentQuestionIndex === questions.length - 1) {
      const score = Math.round((correctAnswers / questions.length) * 100);
      if (score >= 75) {
        alert(`Congratulations, you passed the exercise with a score of ${score}%`);
      } else {
        alert(`Sorry, you failed the exercise with a score of ${score}%. Please try again.`);
      }
      setCurrentQuestionIndex(0);
      setCorrectAnswers(0);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(15);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
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
              <Link to="/learn" className="nav-link" onClick={closeMenu}>
                Learn
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resouces" className="nav-link" onClick={closeMenu}>
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" onClick={closeMenu}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <h2>Python Exercise</h2>
      <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
      <p>Time Left: {timeLeft}s</p>
      <h3>{currentQuestion.question}</h3>
      <input type="text" placeholder="Enter your answer" onChange={(e) => {
        if (e.target.value === currentQuestion.answer) {
          handleAnswer(true);
        }
      }} />
    </div>
  );
};

export default Exercise;
