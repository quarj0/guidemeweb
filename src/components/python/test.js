import React, { useState } from "react";
import "./pythonshortest.css";

const questions = [
    {
      question: "What is the output of print(3 + 4 * 5)?",
      answers: [
        { text: "35", correct: false },
        { text: "23", correct: true },
        { text: "19", correct: false },
        { text: "None of the above", correct: false },
      ],
    },
    {
      question: "What is the output of print('hello' + 'world')?",
      answers: [
        { text: "helloworld", correct: true },
        { text: "hello world", correct: false },
        { text: "hello+world", correct: false },
        { text: "None of the above", correct: false },
      ],
    },
    {
      question: "What is the output of print(type('hello'))?",
      answers: [
        { text: "<class 'str'>", correct: true },
        { text: "<class 'int'>", correct: false },
        { text: "<class 'bool'>", correct: false },
        { text: "None of the above", correct: false },
      ],
    },
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
