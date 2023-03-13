import React from "react";
import { Link } from "react-router-dom";

import tutorials from "../components/Tutorials";

function Tutorials({ searchQuery }) {
  const filteredTutorials = tutorials.filter((tutorial) =>
    tutorial.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="tutorial-list">
        <div className="landing-page-tutorials">
      {filteredTutorials.map((tutorial, index) => (
        <div className="tutorial-card" key={index}>
          <div className="tutorial-card-img">
            <img src={tutorial.image} alt={tutorial.title} />
          </div>
          <div className="tutorial-card-content">
            <h3>{tutorial.title}</h3>
            <p>{tutorial.description}</p>
            <Link to={tutorial.link} className="btn-start-learning">
              Start Learning
            </Link>
            <Link to={tutorial.reference} className="btn-reference">
              Reference
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Tutorials;
