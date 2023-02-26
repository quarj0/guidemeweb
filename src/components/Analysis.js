import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Tutorial.css";

// Introduction component
function Introduction() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  let contents;

  switch (step) {
    case 1:
      contents = (
        <>
          <section>
            <h2>Python Data Science</h2>
            <p>
              Data Analysis is the most important skill in today's world. Python
              provides several powerful libraries for data analysis and
              visualization.
            </p>
            <p>
              In this tutorial, you will learn how to use Python to analyze data
              and create beautiful data visualizations.
            </p>
            <button className="tutorial-button" onClick={nextStep}>
              Next
            </button>
          </section>
        </>
      );

      break;

    default:
      contents = (
        <>
          <section>
            <p>Thank you for learning with us.</p>
            <p>
              Please check out our other tutorials and courses on our website.
            </p>
            <Link to="/analysis">Advanced Python</Link>
            <button className="tutorial-button" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button" onClick={prevStep}>
              Previous
            </button>
          </section>
        </>
      );
  }

  return <div className="tutorial-section">{contents}</div>;
}

// Full Tutorial component
function Tutorial1({ searchTerm, searchResults }) {
  const filteredResults = searchResults.filter(
    (result) =>
      result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="introduction">
      <header className="tutorial-header">
        <h1>Python Basics</h1>
      </header>
      <main className="tutorial-content">
        {filteredResults.length > 0 ? (
          filteredResults.map((result) => (
            <div key={result.id} className="tutorial">
              <h2>{result.title}</h2>
              <p>{result.description}</p>
              <Link to={`/tutorial/${result.id}`} className="link">
                Read more
              </Link>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
        <Introduction />
      </main>
      <footer className="tutorial-footer">
        <Link to="/" className="link">
          Back to Tutorials
        </Link>
      </footer>
    </div>
  );
}

export default Tutorial1;
