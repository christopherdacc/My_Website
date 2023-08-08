<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $recipient = "christopher_daccache_work@outlook.com"; // Your email address
  $subject = "New Contact Form Submission";
  
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Build the email message
  $emailMessage = "Name: $name\n";
  $emailMessage .= "Email: $email\n";
  $emailMessage .= "Message:\n$message";

  // Send the email
  $headers = "From: $email";
  mail($recipient, $subject, $emailMessage, $headers);

  // Redirect back to the contact form with a success message
  header("Location: contact.html?success=true");
  exit;
}
?>
