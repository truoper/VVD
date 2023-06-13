const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Test = require('./models/testModel');

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://localhost:27017/crm_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Подключено к базе данных MongoDB');
  })
  .catch((err) => {
    console.error('Ошибка подключения к базе данных', err);
    process.exit(1);
  });

// Middleware для парсинга JSON
app.use(express.json());

// Получение списка тестов
app.get('/tests', async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    console.error('Ошибка при получении списка тестов', err);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

// Получение информации о тесте по ID
app.get('/tests/:id', async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    res.json(test);
  } catch (err) {
    console.error('Ошибка при получении информации о тесте', err);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

// Создание нового теста
app.post('/tests', async (req, res) => {
  try {
    const test = new Test(req.body);
    const result = await test.save();
    res.json(result);
  } catch (err) {
    console.error('Ошибка при создании теста', err);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

// Обновление информации о тесте по ID
app.put('/tests/:id', async (req, res) => {
  try {
    const result = await Test.findByIdAndUpdate(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    console.error('Ошибка при обновлении информации о тесте', err);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

// Удаление теста по ID
app.delete('/tests/:id', async (req, res) => {
  try {
    const result = await Test.findByIdAndDelete(req.params.id);
    res.json(result);
  } catch (err) {
    console.error('Ошибка при удалении теста', err);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
