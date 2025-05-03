const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(bodyParser.json());

// Подключение к MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'pizza_project'
});

// Таблица orders должна существовать заранее

app.post('/api/orders', (req, res) => {
  try {
    const cart = req.body.cart;
    console.log("Получена корзина:", cart);

    if (!cart || Object.keys(cart).length === 0) {
      console.log("Корзина пуста");
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const values = Object.entries(cart).map(([name, item]) => [name, item.price, item.count]);
    console.log("Значения для вставки:", values);

    const sql = 'INSERT INTO orders2 (name, price, count) VALUES ?';
    connection.query(sql, [values], (err, result) => {
      if (err) {
        console.error('Ошибка при вставке:', err);
        return res.status(500).json({ message: 'Database error', error: err });
      }
      console.log('Успешно вставлено:', result);
      res.status(200).json({ message: 'Order saved successfully' });
    });
  } catch (e) {
    console.error("Внутренняя ошибка:", e);
    res.status(500).json({ message: 'Server error', error: e });
  }
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
