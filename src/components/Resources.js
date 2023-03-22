import React from 'react';
import './Resources.css'; // import CSS file

const resources = {
  python: [
    { title: 'Python for Everybody', url: 'https://www.py4e.com/' },
    { title: 'Python Documentation', url: 'https://docs.python.org/3/' },
    { title: 'Python Exercises', url: 'https://www.w3resource.com/python-exercises/' }
  ],
  javascript: [
    { title: 'JavaScript Tutorial', url: 'https://www.w3schools.com/js/' },
    { title: 'JavaScript Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { title: 'JavaScript Exercises', url: 'https://www.w3resource.com/javascript-exercises/' }
  ],
  react: [
    { title: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
    { title: 'React Tutorial', url: 'https://reactjs.org/tutorial/tutorial.html' },
    { title: 'React Exercises', url: 'https://www.w3resource.com/react-exercises/' }
  ],
  sql: [
    { title: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/' },
    { title: 'SQL Exercises', url: 'https://www.w3resource.com/sql-exercises/' }
  ],
  cryptography: [
    { title: 'Cryptography Tutorial', url: 'https://cryptography.io/en/latest/' },
    { title: 'Cryptography Exercises', url: 'https://cryptopals.com/' }
  ],
  html: [
    { title: 'HTML Tutorial', url: 'https://www.w3schools.com/html/' },
    { title: 'HTML Exercises', url: 'https://www.w3resource.com/html-exercises/' }
  ],
  css: [
    { title: 'CSS Tutorial', url: 'https://www.w3schools.com/css/' },
    { title: 'CSS Exercises', url: 'https://www.w3resource.com/css-exercises/' }
  ],
  kali_linux: [
    { title: 'Kali Linux Tutorial', url: 'https://www.kali.org/docs/' },
    { title: 'Kali Linux Exercises', url: 'https://www.hackthebox.eu/' }
  ],
  data_science: [
    { title: 'Data Science Tutorial', url: 'https://www.kaggle.com/learn/data-science' },
    { title: 'Data Science Exercises', url: 'https://www.kaggle.com/learn/data-science' }
  ]
};

const Resources = ({ topic }) => {
  const topicResources = resources[topic];

  return (
    <div className="resources-container"> {/* add class name */}
      <h2>Resources for {topic}</h2>
      <ul>
        {topicResources.map(resource => (
          <li key={resource.title}>
            <a href={resource.url}>{resource.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
