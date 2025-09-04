import React from "react";
import "./App.css";

const App = () => {
  const handleButtonClick = () => {
    alert("Feature coming soon!");
  };

  return (
    <div>
      <header className="header">
        <h1>Smart Campus Management System</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <h2>Welcome to Smart Campus</h2>
        <p>Manage your campus efficiently with our smart solutions.</p>
        <button onClick={handleButtonClick}>Get Started</button>
      </section>

      <section id="features">
        <h2>Features</h2>
        <div className="features-container">
          <div className="feature-box">
            <h3>Attendance Tracking</h3>
            <p>Track student attendance with BLE beacons.</p>
          </div>
          <div className="feature-box">
            <h3>Event Management</h3>
            <p>Organize and manage campus events easily.</p>
          </div>
          <div className="feature-box">
            <h3>Notifications</h3>
            <p>Send instant notifications to students and staff.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2025 Smart Campus Management System</p>
      </footer>
    </div>
  );
};

export default App;
