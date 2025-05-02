const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
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
  const cart = req.body.cart;

  if (!cart || Object.keys(cart).length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  const values = Object.entries(cart).map(([name, item]) => [name, item.count, item.price, item.count * item.price]);

  const sql = 'INSERT INTO orders (pizza_name, quantity, unit_price, total_price) VALUES ?';

  connection.query(sql, [values], (err, result) => {
    if (err) {
      console.error('Ошибка записи заказа:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(200).json({ message: 'Order saved' });
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
