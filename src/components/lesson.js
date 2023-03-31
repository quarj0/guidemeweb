import React, { useState } from "react";

import "../styles/lesson.css";

function Lesson({ lessonData, onLessonComplete }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});

  const handleAnswerChange = (stepIndex, answer) => {
    setUserAnswers({
      ...userAnswers,
      [stepIndex]: answer,
    });
  };

  const handleNextStepClick = () => {
    setCurrentStepIndex(currentStepIndex + 1);
  };

  const handlePrevStepClick = () => {
    setCurrentStepIndex(currentStepIndex - 1);
  };

  const handleShowResultClick = () => {
    setShowResult(true);
  };

  const handleLessonComplete = () => {
    onLessonComplete(userAnswers);
  };

  const currentStep = lessonData.steps[currentStepIndex];

  const isLastStep = currentStepIndex === lessonData.steps.length - 1;

  return (
    <div>
      <h1>{currentStep.title}</h1>
      <p>{currentStep.content}</p>
      <ul>
        {currentStep.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name={`step-${currentStepIndex}-answer`}
                value={option}
                checked={userAnswers[currentStepIndex] === option}
                onChange={(e) => handleAnswerChange(currentStepIndex, e.target.value)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <div>
        {currentStepIndex > 0 && (
          <button onClick={handlePrevStepClick}>Previous Step</button>
        )}
        {!isLastStep ? (
          <button onClick={handleNextStepClick}>Next Step</button>
        ) : (
          <button onClick={handleShowResultClick}>Show Result</button>
        )}
      </div>
      {showResult && (
        <div>
          <h2>Result</h2>
          <ul>
            {lessonData.steps.map((step, index) => (
              <li key={index}>
                {step.title}: {userAnswers[index] === step.answer ? "Correct" : "Incorrect"}
              </li>
            ))}
          </ul>
          <button onClick={handleLessonComplete}>Finish Lesson</button>
        </div>
      )}
    </div>
  );
}

export default Lesson;
