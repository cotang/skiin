<?php
// include PHPMailer
require_once("class.phpmailer.php");

// check POST data
$post = (!empty($_POST)) ? true : false;

// if true then get POST data
if($post) {
	// if ($_POST["name"]) $name = htmlspecialchars($_POST["name"]);
	if ($_POST["email"]) $email = htmlspecialchars($_POST["email"]);
	// if ($_POST["text"]) $text = htmlspecialchars($_POST["text"]);
	$error = "";

	// check required fields
	// if empty then add error message
	// if(!$name) {
	// 	$error .= "Please write name<br>";
	// }
	if(!$email) {
		$error .= "Please write E-Mail<br>";
	}

	// if not error then send mail
	if(!$error) {
		$mail = new PHPMailer(); // init class PHPMailer
		$mail->From = $email; // e-mail from
		// $mail->FromName = $name; // name from
		$mail->AddAddress('warlocked@mail.ru', 'Konstantin Bogdanov'); // e-mail and name to
		$mail->IsHTML(true); // HTML format for mail
		$mail->Subject = "The correspondence from SKIIN"; // mail subject

		// if attached file then add this
		// if(isset($_FILES['file'])) {
		// 	if($_FILES['file']['error'][0] == 0){
		// 		$mail->AddAttachment($_FILES['file']['tmp_name'][0], $_FILES['file']['name'][0]);
		// 	}
		// }

		// mail body
		$message = "<strong>E-mail</strong>: ".$email."<br>";
		// $message .= "<strong>Name</strong>: " .$name."<br>";
		// $message .= "<strong>Text</strong>:<br>".$text."<br>";
		$mail->Body = $message;

		// send mail
		if ($mail->Send()) echo 'OK';

	}
	else {
		// if has error then write this
		echo '<span class="notification-error">'.$error.'</span>';
	}
}
?>