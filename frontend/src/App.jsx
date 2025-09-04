<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Smart Campus Management Demo</title>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    const App = () => {
      const [name, setName] = React.useState("");
      const [submitted, setSubmitted] = React.useState(false);

      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
      };

      return (
        <div>
          <h1>Smart Campus Management</h1>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <label>
                Enter your name: 
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
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

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
  </script>
</body>
</html>
