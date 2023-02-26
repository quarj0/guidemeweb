import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Donate.css";

function Donate({ setIsAuthenticated }) {
  const [donationAmount, setDonationAmount] = useState(0);
  const [error, setError] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const history = useNavigate();

  const handleDonationChange = (event) => {
    setDonationAmount(event.target.value);
    setIsButtonDisabled(event.target.value <= 0)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send a request to the server to process the donation
    try {
      const response = await fetch("/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: donationAmount }),
      });

      if (response.ok) {
        // Donation was successful
        setShowSuccessMessage(true);
      } else {
        // Donation failed
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("Error processing donation:", error);
      setError("Error processing donation");
    }
  };

  const handleDismissMessage = () => {
    setShowSuccessMessage(false);
    history.push("/");
  };

  return (
    <div className="donate-container">
      <h1>Donations are not enabled now!.</h1>
      <h1>Donate to Support Our Cause</h1>
      <p>Your donation will help us continue providing free educational resources to our community.</p>
      <form className="donate-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Donation Amount:</label>
        <input type="number" id="amount" name="amount" min="1" step="1" placeholder="$" required value={donationAmount} onChange={handleDonationChange} />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <button type="submit" disabled={isButtonDisabled} >Donate Now</button>
      </form>
      {showSuccessMessage && (
        <div className="success-message">
          <p>Thank you for your donation!</p>
          <button onClick={handleDismissMessage}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Donate;
