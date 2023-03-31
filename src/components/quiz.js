import React, { useState } from "react";
import "./Quiz.css";

function Quiz({ questions, onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswerIndex(answerIndex);
  };

  const handleNextQuestionClick = () => {
    if (selectedAnswerIndex === questions[currentQuestionIndex].answerIndex) {
      setScore(score + 1);
    }
    setSelectedAnswerIndex(-1);
    if (currentQuestionIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleRestartClick = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(-1);
    setShowResult(false);
    setScore(0);
  };

  const getScore = () => {
    return `${score} / ${questions.length}`;
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h1>{currentQuestion.question}</h1>
      <ul>
        {currentQuestion.choices.map((choice, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(index)}
            className={selectedAnswerIndex === index ? "selected" : ""}
          >
            {choice}
          </li>
        ))}
      </ul>
      {selectedAnswerIndex > -1 && !showResult && (
        <button onClick={handleNextQuestionClick}>
          {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next Question"}
        </button>
      )}
      {showResult && (
        <div>
          <p>Your score: {getScore()}</p>
          <button onClick={handleRestartClick}>Restart</button>
          <button onClick={onComplete}>Back to Lessons</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
