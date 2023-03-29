/* eslint-disable no-dupe-keys */
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

      question: "What is the output of print(type(3.14))?",
        answers: [
            { text: "<class 'str'>", correct: false },
            { text: "<class 'int'>", correct: false },
            { text: "<class 'bool'>", correct: false },
            { text: "<class 'float'>", correct: true },
        ],

        question: "What is the output of print(type(True))?",
        answers: [
            { text: "<class 'str'>", correct: false },
            { text: "<class 'int'>", correct: false },
            { text: "<class 'bool'>", correct: true },
            { text: "<class 'float'>", correct: false },
        ],

        question: "What is the output of print(type(3))?",
        answers: [
            { text: "<class 'str'>", correct: false },
            { text: "<class 'int'>", correct: true },
            { text: "<class 'bool'>", correct: false },
            { text: "<class 'float'>", correct: false },
        ],

        question: "How do you create a variable with the numeric value 5?",
        answers: [
            { text: "x = 5", correct: true },
            { text: "x = int(5)", correct: false },
            { text: "x = '5'", correct: false },
            { text: "x = 'int(5)'", correct: false },
        ],

        question: "How do you create a variable with the floating number 5.5?",
        answers: [
            { text: "x = 5.5", correct: true },
            { text: "x = float(5.5)", correct: false },
            { text: "x = '5.5'", correct: false },
            { text: "x = 'float(5.5)'", correct: false },
        ],

        question: "If a python cannot find a variable in the local scope, where does it look for it?",
        answers: [
            { text: "The global scope", correct: true },
            { text: "The local scope", correct: false },
            { text: "The parent scope", correct: false },
            { text: "The child scope", correct: false },
        ],

        question: "In python, what is the output of print(5 == 5)?",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
            { text: "None", correct: false },
            { text: "Error", correct: false },
        ],

        question: "Define a function called 'my_function' that takes no arguments and prints 'Hello World!'",
        answers: [
            { text: "def my_function(): print('Hello World!')", correct: true },
            { text: "def my_function(): 'Hello World!'", correct: false },
            { text: "def my_function(): print('Hello World!')", correct: false },
            { text: "def my_function(): 'Hello World!'", correct: false },
        ],

        question: "Define a function called 'my_function' that takes one argument and prints it",
        answers: [
            { text: "def my_function(x): print(x)", correct: true },
            { text: "def my_function(x): print('x')", correct: false },
            { text: "def my_function(x): print('x')", correct: false },
            { text: "def my_function(x): print('x')", correct: false },
        ],

        question: "A function that takes no arguments and returns a value is called a(n):",
        answers: [
            { text: "No function", correct: false },
            { text: "Method", correct: false },
            { text: "Procedure", correct: false },
            { text: "Function", correct: true },
        ],

        question: "A function that takes arguments and returns a value is called a(n):",
        answers: [
            { text: "No function", correct: false },
            { text: "Method", correct: false },
            { text: "Procedure", correct: false },
            { text: "Function", correct: true },
        ],

        question: "If a class has a method called 'my_method', what is the correct way to call it?",
        answers: [
            { text: "my_method()", correct: true },
            { text: "my_method", correct: false },
            { text: "my_method()", correct: false },
            { text: "my_method()", correct: false },
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
