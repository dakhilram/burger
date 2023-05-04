<?php

// database connection
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "jyo";

// create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// check if email and password are set
if (isset($_POST['email']) && isset($_POST['password'])) {
  $email = $_POST['email'];
  $password = $_POST['password'];

  // query to check user authentication
  $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
  $result = mysqli_query($conn, $sql);

  // check if user exists
  if (mysqli_num_rows($result) > 0) {
    // user is authenticated
    echo "success";
  } else {
    // user authentication failed
    echo "error";
  }
}

// close database connection
mysqli_close($conn);

?>
