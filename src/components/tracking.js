import React, { useState, useEffect } from 'react';
import Lesson from './lesson';
import Quiz from './quiz';
import ProgressTracker from './ProgressTracker';

function PythonComponent({ lessons, quizzes }) {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  // update progress when lesson or quiz is completed
  useEffect(() => {
    let totalLessons = lessons.length;
    let totalQuizzes = quizzes.length;
    let completedLessons = currentLessonIndex + (lessonCompleted ? 1 : 0);
    let completedQuizzes = currentQuizIndex + (quizCompleted ? 1 : 0);
    let newProgress = Math.floor(((completedLessons + completedQuizzes) / (totalLessons + totalQuizzes)) * 100);
    setProgress(newProgress);
  }, [currentLessonIndex, lessonCompleted, currentQuizIndex, quizCompleted, lessons.length, quizzes.length]);

  const handleLessonComplete = () => {
    setLessonCompleted(true);
  }

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  }

  const handleNext = () => {
    if (lessonCompleted && quizCompleted) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      setCurrentQuizIndex(currentQuizIndex + 1);
      setLessonCompleted(false);
      setQuizCompleted(false);
    } else if (lessonCompleted) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      setLessonCompleted(false);
    } else {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setQuizCompleted(false);
    }
  }

  const currentLesson = lessons[currentLessonIndex];
  const currentQuiz = quizzes[currentQuizIndex];

  return (
    <div>
      <ProgressTracker progress={progress} />
      {currentLesson && !lessonCompleted && (
        <Lesson content={currentLesson.content} onComplete={handleLessonComplete} />
      )}
      {currentQuiz && !quizCompleted && (
        <Quiz questions={currentQuiz.questions} onComplete={handleQuizComplete} />
      )}
      {lessonCompleted && quizCompleted && (
        <button onClick={handleNext}>Next</button>
      )}
    </div>
  );
}

export default PythonComponent;
