// testStart.jsx
import React from 'react';
import './testStart.css';

const TestStart = ({ userName }) => {
  return (
    <div className="test-start-container">
      <h1>Hello, {userName}!</h1>
      <p>Start the test when you're ready.</p>
      <button className="start-button">Start</button>
    </div>
  );
};

export default TestStart;
