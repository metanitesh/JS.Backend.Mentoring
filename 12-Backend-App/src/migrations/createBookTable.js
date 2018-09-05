const mysql = require('mysql2/promise');
const config = require('../config/db');

async function createBookTable() {
  const connection = await mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.db,
  });

  console.log('connection made');
  const sql = 'CREATE TABLE books (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description VARCHAR(5000), authorId int, FOREIGN KEY (authorId) REFERENCES authors(id))';

  await connection.execute(sql);
  console.log('table created');

  connection.close();
}

createBookTable();
