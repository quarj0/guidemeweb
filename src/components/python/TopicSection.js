

import React from 'react';
import { Link } from 'react-router-dom';
import './testt.css';

function TopicSection(props) {
  return (
    <div className="topic-section">
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <p>{props.description}</p>
      <div className="resources">
        <h3>Resources:</h3>
        <ul>
          {props.resources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noreferrer">{resource.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <Link to={props.link}>Learn more</Link>
    </div>
  );
}

export default TopicSection;
