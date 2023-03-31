import React, { useState } from "react";

function Quiz({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswerIndex(answerIndex);
  };

  const handleNextQuestionClick = () => {
    setSelectedAnswerIndex(-1);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleShowResultClick = () => {
    setShowResult(true);
  };

  const handleRestartClick = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(-1);
    setShowResult(false);
  };

  const getScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].choices[selectedAnswerIndex[i]] === questions[i].answer) {
        score++;
      }
    }
    return `${score} / ${questions.length}`;
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
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
        <button onClick={isLastQuestion ? handleShowResultClick : handleNextQuestionClick}>
          {isLastQuestion ? "Show result" : "Next question"}
        </button>
      )}
      {showResult && (
        <div>
          <p>Your score: {getScore()}</p>
          <button onClick={handleRestartClick}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
