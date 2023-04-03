import React, { useState } from 'react';

import "./pylesson.css";

const PythonLessons = ({ lessons }) => {
  const [activeLesson, setActiveLesson] = useState(null);

  const handleLessonClick = (id) => {
    setActiveLesson(id);
  };

  return (
    <div className="python-lessons">
      <h1>Welcome to Python Lessons!</h1>
      <div className="lesson-list">
        <h2>Lessons</h2>
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <button
                className={activeLesson === lesson.id ? 'active' : ''}
                onClick={() => handleLessonClick(lesson.id)}
              >
                {lesson.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="lesson-content">
        {activeLesson !== null && (
          <>
            <h2>{lessons.find((lesson) => lesson.id === activeLesson).title}</h2>
            <div className="content" dangerouslySetInnerHTML={{ __html: lessons.find((lesson) => lesson.id === activeLesson).content }} />
          </>
        )}
      </div>
    </div>
  );
};

export default PythonLessons;
