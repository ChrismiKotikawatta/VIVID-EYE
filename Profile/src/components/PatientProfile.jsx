import React, { useState } from 'react';
import './PatientProfile.css';
import patientImg from '../patient.jpg'; // Adjust the path as needed

const PatientProfile = ({ patient }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPatient, setEditedPatient] = useState(patient);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPatient({ ...editedPatient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={editedPatient.age}
            onChange={handleInputChange}
          />
          <label>Color Blindness Type:</label>
          <input
            type="text"
            name="colorBlindnessType"
            value={editedPatient.colorBlindnessType}
            onChange={handleInputChange}
          />
          <label>Color Blindness Severity:</label>
          <input
            type="text"
            name="colorBlindnessSeverity"
            value={editedPatient.colorBlindnessSeverity}
            onChange={handleInputChange}
          />
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobileNumber"
            value={editedPatient.mobileNumber}
            onChange={handleInputChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={editedPatient.email}
            onChange={handleInputChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <img src={patientImg} alt="Profile" />
          <p>Name: {patient.name}</p>
          <p>Age: {patient.age}</p>
          <p>Color Blindness Type: {patient.colorBlindnessType}</p>
          <p>Color Blindness Severity: {patient.colorBlindnessSeverity}</p>
          <p>Mobile Number: {patient.mobileNumber}</p>
          <p>Email: {patient.email}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PatientProfile;
