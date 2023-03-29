import React, { useState } from "react";
import "./pythonshortest.css";

const questions = [
  // questions array goes here
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (correct) => {
    if (correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-container">
          <h1>Your score is {score} out of {questions.length}</h1>
        </div>
      ) : (
        <div className="question-container">
          <h1>{questions[currentQuestion].question}</h1>
          {questions[currentQuestion].answers.map((answer, index) => (
            <button key={index} className="answer-button" onClick={() => handleAnswerButtonClick(answer.correct)}>
              {answer.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
