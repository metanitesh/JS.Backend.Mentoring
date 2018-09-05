const mysql = require('mysql2/promise');
const config = require('../config/db');

async function createAuthorTable() {
  const connection = await mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.db,
  });

  console.log('connection made');
  const sql = 'CREATE TABLE authors (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description VARCHAR(5000))';

  await connection.execute(sql);
  console.log('table created');

  connection.close();
}

createAuthorTable();
