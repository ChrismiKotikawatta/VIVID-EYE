import React, { useState, useEffect } from "react";
import "./PatientProfile.css";

const PatientProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [patient, setPatient] = useState({
    ID: "",
    Name: "",
    Email: "",
    Contact_number: "",
    NIC_number: "",
  });

  useEffect(() => {
    // Fetch data for a specific user ID (for example, user ID 1)
    const userID = 1; // Change this to the desired user ID
    fetch(`http://127.0.0.1/VividEye/api/api.php?userID=${userID}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.length > 0) {
          console.log("API Response:", result[0]); // Log the response for debugging
          setPatient(result[0]);
        } else {
          console.error(
            "API response is empty or does not contain expected data."
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching patient data:", error);
      });
  }, []);

  const [editedPatient, setEditedPatient] = useState({ ...patient });

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
          <label>ID:</label>
          <input
            type="text"
            name="ID"
            value={editedPatient.ID}
            onChange={handleInputChange}
          />
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={editedPatient.Name}
            onChange={handleInputChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="Email"
            value={editedPatient.Email}
            onChange={handleInputChange}
          />
          <label>Contact Number:</label>
          <input
            type="text"
            name="Contact_number"
            value={editedPatient.Contact_number}
            onChange={handleInputChange}
          />
          <label>NIC:</label>
          <input
            type="text"
            name="NIC_number"
            value={editedPatient.NIC_number}
            onChange={handleInputChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>ID: {patient.ID}</p>
          <p>Name: {patient.Name}</p>
          <p>Email: {patient.Email}</p>
          <p>Contact Number: {patient.Contact_number}</p>
          <p>NIC: {patient.NIC_number}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PatientProfile;
