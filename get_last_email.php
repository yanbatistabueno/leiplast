<?php

try {
    require_once "database-setup.php";
    $get_last_email = "SELECT * FROM emails ORDER BY id DESC LIMIT 1";
    $stmtg = $pdo->prepare($get_last_email);
    $stmtg->execute();
    $array = $stmtg->fetchAll();
    //Pegar Informações do ultimo email enviado na database
    foreach ($array as $x){
        $last_name =  $x[1];
        $last_email = $x[2];
        $last_tel = $x[3];
        $last_ip = $x[7];
        $last_hour = $x[8];
    }
    

} catch (e) {
    echo("Connection failed: " . $e);
}

