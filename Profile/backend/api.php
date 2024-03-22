<?php
include_once("core.php");
// adding core.php filr here bcz i am fetching data using react by avoiding core issues

$connect = mysqli_connect("localhost", "root", "" , "VividEye");
$sql = "SELECT *FROM patients ORDER BY ID DESC ";
$result = mysqli_query($connect,$sql);
$json_array = array();
while($row = mysqli_fetch_assoc($result)){
     $json_array[] =$row;
}

echo json_encode($json_array);

 ?>