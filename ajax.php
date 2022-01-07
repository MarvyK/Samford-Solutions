<?php

if ( ($_POST['name']!="") && ($_POST['email']!="")){
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$category = $_POST['category'];
$message = $_POST['message'];

$to = "info@samford.co.za";
$subject = "Samford Solutions Contact Us Email from:: $name $surname";

$htmlContent = ' 
    <html>     
    <body>          
        <table cellspacing="0" style="border: 0; width: 100%;"> 
            <tr> 
                <th align="left">Name:</th><td>' . $name . '</td> 
            </tr> 
            <tr> 
                <th align="left">Surname:</th><td>' . $surname . '</td> 
            </tr> 
            <tr style="background-color: #e0e0e0;"> 
                <th align="left">Email:</th><td>' . $email . '</td> 
            </tr> 
            <tr> 
                <th align="left">Contact No:</th><td>' . $tel . '</td> 
            </tr>
            <tr> 
                <th align="left">Category:</th><td>' . $category . '</td> 
            </tr>
            <tr> 
                <th align="left">Message</th><td>' . $message . '</td> 
            </tr> 
        </table> 
    </body> 
    </html>'; 
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: <".$email.">" . "\r\n";
$sent = mail($to,$subject,$htmlContent,$headers);
if($sent){
//echo '<pre>';
//var_dump( $_POST );
	echo "<span style='color:green; font-weight:bold;'>
	Thank you for contacting us, we will get back to you shortly.
	</span>";
}
else{
	echo "<span style='color:red; font-weight:bold;'>
	Sorry! Your form submission is failed.
	</span>";
	}
}
?>