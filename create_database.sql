-- Создание базы данных
CREATE DATABASE IF NOT EXISTS survey;
USE survey;

-- Создание таблицы responses
CREATE TABLE IF NOT EXISTS responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    response TEXT NOT NULL
);
