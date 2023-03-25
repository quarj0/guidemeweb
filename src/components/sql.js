import React, { useState } from 'react';

import '../styles/sql.css';

const topics = [
  {
    id: 1,
    title: 'Introduction to SQL',
    subtopics: [
      {
        id: 1,
        title: 'Basic Syntax',
        content: 'This lesson covers the basic syntax of SQL statements...',
        examples: ['SELECT * FROM table_name;', 'UPDATE table_name SET column_name = value WHERE condition;']
      },
      {
        id: 2,
        title: 'Data Types',
        content: 'This lesson covers the different data types that can be used in SQL...',
        examples: ['INT', 'VARCHAR', 'DATE']
      },
      // additional subtopics for the topic
    ]
  },
  {
    id: 2,
    title: 'SQL Joins',
    subtopics: [
      // subtopics for the topic
    ]
  },
  // additional topics
]

const Lesson = ({ topicIndex, subtopicIndex }) => {
  const [currentSubtopicIndex, setCurrentSubtopicIndex] = useState(subtopicIndex);
  const currentSubtopic = topics[topicIndex].subtopics[currentSubtopicIndex];
  const currentTopic = topics[topicIndex];

  const handlePrevious = () => {
    if (currentSubtopicIndex > 0) {
      setCurrentSubtopicIndex(currentSubtopicIndex - 1);
    } else if (topicIndex > 0) {
      setCurrentSubtopicIndex(topics[topicIndex - 1].subtopics.length - 1);
      topicIndex(topicIndex - 1);
    }
  }

  const handleNext = () => {
    if (currentSubtopicIndex < currentTopic.subtopics.length - 1) {
      setCurrentSubtopicIndex(currentSubtopicIndex + 1);
    } else if (topicIndex < topics.length - 1) {
      setCurrentSubtopicIndex(0);
      topicIndex(topicIndex + 1);
    }
  }

  return (
    <div className="lesson">
      <div className="sidebar">
        <h3>SQL</h3>
        <ul>
          {topics.map((topic, index) => (
            <li key={index}>
              <a href="#">{topic.title}</a>
              <ul>
                {topic.subtopics.map((subtopic, index) => (
                  <li key={index}>
                    <a href="#">{subtopic.title}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <h2>{currentSubtopic.title}</h2>
        <p>{currentSubtopic.content}</p>
        <ul>
          {currentSubtopic.examples.map((example, index) => (
            <li key={index}>{example}</li>
          ))}
        </ul>
        <div className="nav-buttons">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Lesson;
