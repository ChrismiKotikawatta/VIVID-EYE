import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Switch
import SupervisorMenu from './components/SupervisorMenue'; // Import SupervisorMenu component
import Data from './components/data'; // Import Card component

function App() {
  return (
    <Router>
      
        <Routes> 
          <Route path="/" element={<SupervisorMenu/>} />
          <Route path="/patient-details" element={<Data/>} />
        </Routes>
      
    </Router>
  );
}

export default App;

