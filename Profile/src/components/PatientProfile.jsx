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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have an API endpoint to update patient details
    fetch("http://localhost/VividEye/dbcon.php/updatePatient.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patient), // Send the patient data
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update patient details.");
        }
        // Here you can handle successful response, such as displaying a success message
        console.log("Patient details updated successfully.");
        setIsEditing(false); // Close the editing mode after successful update
      })
      .catch((error) => {
        // Here you can handle errors, such as displaying an error message
        console.error("Error updating patient details:", error);
      });
  };

  return (
    <div className="PatientProfile">
      <h2>Patient Profile</h2>
      <div>
        <p>ID: {patient.ID}</p>
        <p>Name: {patient.Name}</p>
        <p>Email: {patient.Email}</p>
        <p>Contact Number: {patient.Contact_number}</p>
        <p>NIC: {patient.NIC_number}</p>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="Name"
              value={patient.Name}
              onChange={handleInputChange}
            />
            <label>Email:</label>
            <input
              type="email"
              name="Email"
              value={patient.Email}
              onChange={handleInputChange}
            />
            <label>Contact Number:</label>
            <input
              type="text"
              name="Contact_number"
              value={patient.Contact_number}
              onChange={handleInputChange}
            />
            <label>NIC:</label>
            <input
              type="text"
              name="NIC_number"
              value={patient.NIC_number}
              onChange={handleInputChange}
            />
            <button type="submit">Save</button>
          </form>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default PatientProfile;
