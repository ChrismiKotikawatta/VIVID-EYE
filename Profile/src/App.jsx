import React from 'react';
import PatientProfile from './components/PatientProfile';

const patientData = {
  name: 'John Doe',
  // Add other patient details here
};

function App() {
  return (
    <div className="App">
      <PatientProfile patient={patientData} />
    </div>
  );
}

export default App;
