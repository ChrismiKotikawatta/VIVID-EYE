import React, { useState } from 'react';
import './PatientProfile.css';

const PatientProfile = ({ patient }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPatient, setEditedPatient] = useState(patient);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPatient({ ...editedPatient, [name]: value });
  };

  const handleSubmit = () => {
    // Here you can implement the logic to submit the edited patient details
    setIsEditing(false);
    // Example: Call an API to save the edited patient details
  };

  return (
    <div className="PatientProfile">
      <h2>Patient Profile</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editedPatient.name}
            onChange={handleInputChange}
          />
          {/* Add other input fields for patient details */}
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>Name: {patient.name}</p>
          <p>Name: {patient.name}</p>
          <p>Name: {patient.name}</p>
          <p>Name: {patient.name}</p>
          <p>Name: {patient.name}</p>
          <p>Name: {patient.name}</p>
          <p>Name: {patient.name}</p>
          {/* Display other patient details */}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PatientProfile;
