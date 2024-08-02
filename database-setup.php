<?php

// $dsn = "mysql:host=localhost;dbname=id21100923_yan";
// $dbusername = "id21100923_yan";
// $dbpassword = "Gohanyan1!";

$dsn = "mysql:host=localhost;dbname=leiplast";
$dbusername = "root";
$dbpassword = "";

try {
    $pdo = new PDO($dsn, $dbusername, $dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo("Connection failed: " .$e->getMessage());
}