import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Smart Campus Management</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Hello, {name}!</h2>
          <h3>Campus Timings:</h3>
          <ul>
            <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
            <li>Saturday: 9:00 AM - 2:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
          <button onClick={() => setSubmitted(false)}>Enter Again</button>
        </div>
      )}
    </div>
  );
};

export default App;
