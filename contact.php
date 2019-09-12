<?php

if (isset($_POST["submit"])){
  $nameUser = $_POST["name"];
  $emailUser = $_POST["email"];
  $messageUser = $_POST["message"];

$mailTo = "shikderhafiz@gmail.com";
$subjectEmail = "From: $emailUser";
$messageEmail = "You have received an email regarding your Portfolio: " . $nameUser ."<br/>" .
$messageUser;

mail ($mailTo, $subjectUser, $messageEmail);
header ("Thank You! Your form was submitted successfully");  
}

 ?>
