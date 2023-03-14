import { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const FeedbacksPage = ({ authenticated }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackInput, setFeedbackInput] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("/api/feedbacks");
        setFeedbacks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeedbacks();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "/api/feedbacks",
        { content: feedbackInput },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setFeedbackInput("");
      setFeedbacks([response.data, ...feedbacks]);
    } catch (error) {
      console.log(error);
    }
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>Feedbacks</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter feedback"
          value={feedbackInput}
          onChange={(event) => setFeedbackInput(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {feedbacks.map((feedback) => (
        <div key={feedback.id}>
          <h3>{feedback.user.email}</h3>
          <p>{feedback.content}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbacksPage;
