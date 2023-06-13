const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; // Указать URL нашей MongoDB базы данных

const connectDB = async () => {
  try {
    const client = await MongoClient.connect(url);
    console.log('Подключено к базе данных MongoDB');
    return client.db('crm_test'); // Указать имя нашей базы данных
  } catch (err) {
    console.error('Ошибка подключения к базе данных', err);
    process.exit(1);
  }
};

module.exports = connectDB;
