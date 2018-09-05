const mysql = require('mysql2/promise');
const config = require('../config/db');

async function getAllBooks() {
  const connection = await mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.db,
  });

  console.log('connection made');
  const sql = 'SELECT * FROM author;';

  const books = await connection.execute(sql);
  return books;
}

module.exports = {
  getAllBooks,
};
