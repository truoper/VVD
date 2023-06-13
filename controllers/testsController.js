const connectDB = require('../database');

// Получение списка тестов
exports.getTests = async (req, res) => {
  try {
    const db = await connectDB();
    const tests = await db.collection('tests').find().toArray();
    res.json(tests);
  } catch (err) {
    console.error('Ошибка при получении списка тестов', err);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
};

// Получение информации о тесте по ID
exports.getTestById = async (req, res) => {
  try {
    const db = await connectDB();
    const test = await db.collection('tests').findOne({ _id: req.params.id });
    res.json(test);
  } catch (err) {
    console.error('Ошибка при получении информации о тесте', err);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
};

// Создание нового теста
exports.createTest = async (req, res) => {
  try {
    const db = await connectDB();
    const result = await db.collection('tests').insertOne(req.body);
    res.json(result.ops[0]);
  } catch (err) {
    console.error('Ошибка при создании теста', err);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
};

// Обновление информации о тесте по ID
exports.updateTest = async (req, res) => {
  try {
    const db = await connectDB();
    const result = await db.collection('tests').updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(result);
  } catch (err) {
    console.error('Ошибка при обновлении информации о тесте', err);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
};

// Удаление теста по ID
exports.deleteTest = async (req, res) => {
  try {
    const db = await connectDB();
    const result = await db.collection('tests').deleteOne({ _id: req.params.id });
    res.json(result);
  } catch (err) {
    console.error('Ошибка при удалении теста', err);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
};
