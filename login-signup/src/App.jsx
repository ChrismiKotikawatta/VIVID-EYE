import { Routes, Route } from 'react-router-dom';
import "./loginSignup.css";
import Login from './Login';
import Signup from './Signup';
import React from 'react';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
