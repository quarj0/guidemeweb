import React, { useState } from "react";


import '../styles/Feedback.css'

const ContactPage = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback) {
      setFeedbacks([...feedbacks, feedback]);
      setFeedback("");
    }
  };

  return (
    <div className="contact-page">
      <h2>Leave us a feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            placeholder="Enter your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
      <div className="feedbacks">
        <h3>Recent Feedbacks</h3>
        <ul>
          {feedbacks.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
