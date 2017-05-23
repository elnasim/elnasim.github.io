<?php header("Content-Type: text/html; charset=utf-8");?>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<?php
if (isset ($_POST['phone'])) {
	$to = "Andybrown.art@gmail.com";
	$from = $_POST['phone'];
	$subject = "Заполнена контактная форма с ".$_SERVER['HTTP_REFERER'];
	$message = "Имя: ".$_POST['name']."\nEmail: ".$_POST['email']."\nНомер телефона: ".$_POST['phone']."\nФорма: ".$_POST['form_name']."\nIP: ".$_SERVER['REMOTE_ADDR'];
	$boundary = md5(date('r', time()));
	$filesize = '';
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "From: " . $from . "\r\n";
	$headers .= "Reply-To: " . $from . "\r\n";
	$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
	$message="
Content-Type: multipart/mixed; boundary=\"$boundary\"

--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit

$message";
  for($i=0;$i<count($_FILES['fileFF']['name']);$i++) {
      if(is_uploaded_file($_FILES['fileFF']['tmp_name'][$i])) {
         $attachment = chunk_split(base64_encode(file_get_contents($_FILES['fileFF']['tmp_name'][$i])));
         $filename = $_FILES['fileFF']['name'][$i];
         $filetype = $_FILES['fileFF']['type'][$i];
         $filesize += $_FILES['fileFF']['size'][$i];
         $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
     }
   }
   $message.="
--$boundary--";

  if ($filesize < 10000000) {
    mail($to, $subject, $message, $headers);
    $output = '<script>alert("Ваше сообщение получено, спасибо!");</script>';
  } else {
    $output = '<script>alert("Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.");</script>';
  }
 
}
?>

<?php 
 echo $output; 
 echo "<meta http-equiv='refresh' content='0; url=index.html'>";
 header('Refresh: 1; URL=index.html');
 ?>



