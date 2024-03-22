<?php

// Receive and parse the POST request data
$requestBody = file_get_contents('php://input');
$data = json_decode($requestBody, true);

// Connect to the database
$servername = "localhost";
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "VIvidEye"; // Your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind the SQL statement to prevent SQL injection
$sql = "UPDATE patients SET Name = ?, Email = ?, Contact_number = ?, NIC_number = ? WHERE ID = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssi", $data['Name'], $data['Email'], $data['Contact_number'], $data['NIC_number'], $data['ID']);

// Execute the prepared statement
if ($stmt->execute()) {
    // Send success response
    $response = array("success" => true, "message" => "Patient details updated successfully");
    echo json_encode($response);
} else {
    // Send error response
    $response = array("success" => false, "message" => "Error updating patient details: " . $stmt->error);
    echo json_encode($response);
}

// Close the prepared statement and database connection
$stmt->close();
$conn->close();

?>
