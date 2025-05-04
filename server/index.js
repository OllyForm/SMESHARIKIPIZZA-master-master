const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const { v4: uuidv4 } = require('uuid'); // добавь наверху файла

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
    const address = req.body.address;
    const orderId = uuidv4(); // уникальный ID заказа

    if (!cart || Object.keys(cart).length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }
    if (!address || address.trim() === "") {
      return res.status(400).json({ message: 'Address is empty' });
    }

    const values = Object.entries(cart).map(([name, item]) => [
      orderId,
      name,
      item.price,
      item.count,
      address
    ]);

    const sql = 'INSERT INTO orders_with_address (order_id, name, price, count, address) VALUES ?';
    connection.query(sql, [values], (err, result) => {
      if (err) {
        console.error('Ошибка при вставке:', err);
        return res.status(500).json({ message: 'Database error', error: err });
      }
      res.status(200).json({ message: 'Order saved successfully', orderId });
    });
  } catch (e) {
    console.error("Внутренняя ошибка:", e);
    res.status(500).json({ message: 'Server error', error: e });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
