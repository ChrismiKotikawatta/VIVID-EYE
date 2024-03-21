import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PatientProfile = () => {
  const { id } = useParams();
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    fetch(`backend-url/patients/${id}`)
      .then(response => response.json())
      .then(data => setPatientData(data))
      .catch(error => console.error('Error fetching patient data:', error));
  }, [id]);

  const handleEdit = () => {
    // Implement edit functionality
    console.log('Edit button clicked');
  };

  return (
    <div>
      {patientData ? (
        <div>
          <h2>Patient Profile</h2>
          <p>Name: {patientData.name}</p>
          <p>ID: {patientData.id}</p>
          <p>Email: {patientData.email}</p>
          <p>Contact number: {patientData.contactNumber}</p>
          <p>NIC number: {patientData.nicNumber}</p>
          {/* Add other patient details here */}
          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PatientProfile;


