<?php
require_once 'config.php';

// Выполнение SQL-запроса для выборки всех данных из таблицы
$sql = 'SELECT * FROM responses';
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Создаем таблицу для отображения данных
    echo '<table>';
    echo '<tr><th>ID</th><th>Имя</th><th>Email</th><th>Возраст</th><th>Ответ</th></tr>';

    // Цикл для обхода результирующего набора данных
    while ($row = $result->fetch_assoc()) {
        // Выводим каждую строку в таблицу
        echo '<tr>';
        echo '<td>' . $row['id'] . '</td>';
        echo '<td>' . $row['name'] . '</td>';
        echo '<td>' . $row['email'] . '</td>';
        echo '<td>' . $row['age'] . '</td>';
        echo '<td>' . $row['response'] . '</td>';
        echo '</tr>';
    }

    echo '</table>';
} else {
    echo 'Нет данных.';
}

// Закрываем соединение
$conn->close();
?>
