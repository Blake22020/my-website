<?php
header('Content-Type: application/json; charset=utf-8');

ini_set('display_errors', 1);
error_reporting(E_ALL);
$host = "localhost"; 
$user = "u3024666_Blake";   // твой пользователь MySQL
$pass = "1982374655Aa";   // твой пароль
$db   = "u3024666_Cars";     // имя базы

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

$sql = "SELECT * FROM cars";
$result = $conn->query($sql);

$cars = [];
while($row = $result->fetch_assoc()) {
    $cars[] = $row;
}

echo json_encode($cars, JSON_UNESCAPED_UNICODE);

$conn->close();
?>