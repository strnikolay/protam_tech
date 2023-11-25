<?php

// mb_internal_encoding("UTF-8");
// ini_set('error_reporting', E_ALL);
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	//if ($_SERVER["REQUEST_METHOD"] == "POST") {

	//require '/mail/phpmailer/phpmailer.php';
	//require '/mail/phpmailer/SMTP.php';
	require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/phpmailer.php');
	require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/smtp.php');
	require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/class.phpmailer.php');
	require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/exception.php');
	//require '/phpmailer/SMTP.php';
		//require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/php/config.php');
		//require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/php/valid.php');

		//if(defined('HOST') && HOST != '') {
		$mail = new PHPMailer;
		$mail->isSMTP();
		//$mail->Host = 'ssl://smtp.yandex.ru';
		$mail->Host = 'smtp.yandex.ru';
			$mail->SMTPAuth = true;
			$mail->Username = 'protam.tech2';
			$mail->Password = 'kvwnhaqkktukbqxh';
			//$mail->Password = 'ArtVlad1719';
			//$mail->Username = 'strnikolay';
			//$mail->Password = '!Cyborg55';
			//$mail->Password = 'hfjualaqxzxhoril';
			$mail->SMTPSecure = 'ssl';
			$mail->Port = 465;
			//$mail->AddReplyTo("protam.tech@yandex.ru");
			$mail->SMTPDebug = 1;
		

		//$mail->setFrom("protam.tech@yandex.ru");
    //$mail->addAddress("protam.tech@yandex.ru");
		$mail->setFrom("protam.tech2@yandex.ru");
    $mail->addAddress("protam.tech2@yandex.ru");
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
		$mail->Subject = 'Заявка с сайта';
		$mail->Body = "tujfyj"; 
		$mail->msgHTML("<html><body>
                <h1>Здравствуйте!</h1>
                <p>Это тестовое письмо.</p>
                </html></body>");

		if(!$mail->send()) {
			echo "отправлено";
    } else {
      //echo json_encode($msgs);
			echo 'Ошибка: ' . $mail->ErrorInfo;
    }
	
	//} else{
  //  header ("Location: /"); // главная страница вашего лендинга
	//}