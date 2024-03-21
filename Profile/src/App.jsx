import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Data from './Data'; // Adjust the import path here
import PatientProfile from './PatientProfile'; // Assuming PatientProfile.jsx is inside a components folder

const App = () => {
  return (
    <Router>
      <div>
        <BrowserRouter>
        <Route>
          <Route path="/" exact element={Data} />
          <Route path="/profile/:id"elementt={PatientProfile} />
          
        </Route>
        </BrowserRouter>
      </div>
    </Router>
  );
};

export default App;

