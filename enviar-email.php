<?php
//Variáveis

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$first_user_ip = "";
$user_ip = "";
if(!empty($_SERVER['HTTP_CLIENT_IP'])) {   
    $first_user_ip = $_SERVER['HTTP_CLIENT_IP'];   
}   
//if user is from the proxy   
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {   
    $first_user_ip = $_SERVER['HTTP_X_FORWARDED_FOR'];   
}   
//if user is from the remote address   
else{   
    $first_user_ip = $_SERVER['REMOTE_ADDR'];   
} 

$user_ip = mb_strcut($first_user_ip,0, 11);
echo $user_ip;

$name = $_POST["nome"];
$email = $_POST["email"];
$telefone = $_POST["telefone"];
$mensagem = $_POST["mensagem"];
$assunto = $_POST["assunto"];
$estados = $_POST["estados"];



try {
    require_once "get_last_email.php";

    //Verificar se foi a mesma pessoa que enviou o email
    $same_person = false;
    

    if($last_ip == $user_ip){
        $same_person = true;  
    }else{
        if($last_name == $name && $last_email == $email || $last_name == $name && $last_tel == $telefone){
            $same_person = true;
        }
    }

    

    //Comparar as horas dos ultimos emails
    $can_send_email = false;

    $get_last_datetime = mb_strcut($last_hour, 11, 20);
    $get_last_datetime_hour =  mb_strcut($get_last_datetime, 0, 2);
    $get_last_datetime_minutes =  mb_strcut($get_last_datetime, 3, 2);
    date_default_timezone_set('America/Sao_Paulo');
    $currentTime = date("H:i:s");
    $get_current_datetime_minutes = mb_strcut($currentTime, 3, 2);
    $get_current_datetime_hour = mb_strcut($currentTime, 0, 2);

    if($get_current_datetime_minutes + 5 >= 60){
        //Só vai acontecer se os minutos forem maior que 55
        //Ultimo 09:45
        //Tentei 09:56
        //Não posso mandar até 09:50
        //--------------
        //Ultimo 09:56
        //Tentei 09:57
        //Não posso mandar até 08:02
        $ideal_minutes = 60 - $get_last_datetime_minutes;
        $ideal_hour = $get_last_datetime_hour + 1;
        if($get_current_datetime_hour == $get_last_datetime_hour && $get_last_datetime_minutes <= 55){
            $can_send_email = true;
        }else if($get_current_datetime_hour != $get_current_datetime_hour && $get_current_datetime_minutes >= $ideal_minutes){
            $can_send_email = true;
        }else if($get_current_datetime_hour && $get_last_datetime_minutes >= 55){
            $can_send_email = false;
        }else if($get_current_datetime_hour != $get_current_datetime_hour && $get_current_datetime_minutes < $ideal_minutes){
            $can_send_email = false;
        }
    }else if($get_current_datetime_minutes + 5 < 60){
        $ideal_minutes = $get_last_datetime_minutes + 5;
        $ideal_hour = $get_last_datetime_hour;
        if($get_current_datetime_hour == $ideal_hour){
            if($get_current_datetime_minutes <= $ideal_minutes){
                $can_send_email = false;
            }else if($get_current_datetime_minutes > $ideal_minutes){
                $can_send_email = true;
            }
        }else if($get_current_datetime_hour != $ideal_hour){
            $can_send_email = true;
        }
    }
    // echo $can_send_email ? "true" : "false";
    // echo $same_person ? "true" : "false";

    if($same_person == true && $can_send_email == true || $same_person == false){
        $query = "INSERT INTO emails (nome,email,tel,assunto,estado,mensagem,ip) VALUES (:nome,:email,:tel,:assunto,:estado,:mensagem,:ip);";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":nome", $name);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":tel", $telefone);
        $stmt->bindParam(":assunto", $assunto);
        $stmt->bindParam(":estado", $estados);
        $stmt->bindParam(":mensagem", $mensagem);
        $stmt->bindParam(":ip", $user_ip);
        $stmt->execute();
        $pdo = null;
        $stmt = null;

        
        // //Load Composer's autoloader
        // require 'vendor/autoload.php';

        // //Create an instance; passing `true` enables exceptions
        // $mail = new PHPMailer(true);

        // try {
        //     //Server settings
        //     //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        //     $mail->isSMTP();                                            //Send using SMTP
        //     $mail->CharSet = 'UTF-8';
        //     $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        //     $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        //     $mail->Username   = 'contatoleiplast@gmail.com';                     //SMTP username
        //     $mail->Password   = 'aqaruwzajoczditi';                               //SMTP password
        //     $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        //     $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //     //Recipients
        //     $mail->setFrom($email, $name);
        //     $mail->addAddress('contatoleiplast@gmail.com');     //Add a recipient  
        //     $mail->addAddress('comercial@leiplast.com.br');              //Name is optional
        //     $mail->addReplyTo($email);


        //     //Content
        //     $mail->isHTML(true);                                  //Set email format to HTML
        //     $mail->Subject = 'Contato pelo site';
        //     $body = "<html>
        //         <body>
        //             Contato através do site, seguem as informações:<br>
        //             Nome.......: <b>$name</b><br>
        //             E-mail.......: <b>$email</b><br>
        //             Telefone.......: <b>$telefone</b><br>
        //             Estado.......: <b>$estados</b><br>
        //             Assunto.......:  <b>$assunto</b><br>
        //             Mensagem.......: <b>$mensagem</b>
        //         </body>
        //     </html>";
        //     $mail->Body    = $body;
        //     $mail->AltBody = 'E-mail através do site.';
            
        //     //Este sempre deverá existir para garantir a exibição correta dos caracteres
        //     $headers  = "MIME-Version: 1.0\n";
        //     $headers .= "Content-type: text/html; charset=UTF-8\n";
        //     $headers .= "From: $name <$email>";

        //     $mail->send();
        //     header("Location: enviado-sucesso.php");
        //     exit;
        // } catch (Exception $e) {
        //     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        // }
    }else{
        header("Location: enviado-falha.php");
        exit;
    }
    
} catch (PDOException $e) {
    // header("Location: send-email-info.php");
    echo $e;
}

?>




