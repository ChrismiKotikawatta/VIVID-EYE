import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Switch
import SupervisorMenu from './Components/SupervisorMenu'; // Import SupervisorMenu component
import Data from './Components/data'; // Import Card component

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

 


// import React,{useState, useEffect} from 'react';
// import './App.css';
// import Data from './data';
// //import './App.scss';


// function App() {
//   return (
//     <div className="container">
//       <Data />
     
//     </div>
//   );
// }

// export default App;