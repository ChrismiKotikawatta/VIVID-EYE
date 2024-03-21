// App.jsx
import React from 'react';
import TestStart from './testStart';

function App() {
  const userName = "John"; // You can replace this with dynamic data
  return (
    <div className="App">
      <TestStart userName={userName} />
    </div>
  );
}

export default App;
