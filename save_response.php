<?php
// Получаем данные из POST-запроса
$data = json_decode(file_get_contents('php://input'), true);

// Подключаемся к базе данных
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "survey";

$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Подготавливаем SQL-запрос для вставки данных
$stmt = $conn->prepare("INSERT INTO responses (name, email, age, response) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssis", $name, $email, $age, $response);

// Извлекаем данные из полученного JSON-объекта
$name = $data['name'];
$email = $data['email'];
$age = $data['age'];
$response = $data['response'];

// Выполняем запрос
if ($stmt->execute()) {
    echo "Data saved successfully!";
} else {
    echo "Error: " . $stmt->error;
}

// Закрываем соединение и освобождаем ресурсы
$stmt->close();
$conn->close();
?>
