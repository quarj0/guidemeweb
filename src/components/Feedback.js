import { useState } from 'react';

import '../styles/Feedback.css';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ feedback }),
      });
      if (response.ok) {
        // Feedback submitted successfully, do something here (e.g. show a success message)
        alert('Feedback submitted successfully!');
        console.log('Feedback submitted successfully!');
      } else {
        // Feedback submission failed, handle the error here
        alert('Feedback submission failed!');
        console.error('Feedback submission failed!');
      }
    } catch (error) {
      // Network error, handle the error here
      console.error('Network error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="feedback">Feedback:</label>
      <textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
