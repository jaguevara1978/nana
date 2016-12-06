<?php
if (!empty($_POST)) {
	$name        = $_POST['name'];
	$email       = $_POST['email'];
	$message     = $_POST['message'];
	$subject     = $_POST['subject'];
	$formcontent = "From: $name \n Message: $message";
	$recipient   = "youremail@email.com";
	$subject     = $subject;
	$mailheader  = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader);
	header("Location:http://ava-themes.com/HTML/Athletica/homepage-one.html");
	exit;
} else {
	echo "Something went wrong. Plase go back and submit form again.";
}
?>