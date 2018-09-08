const mysql = require('mysql2/promise');
const config = require('../config/db');
const books = require('./bookData');

async function insertBookRecords() {
  const connection = await mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.db,
  });
  console.log('connection made');


  for (const book of books) {
    try {
      const sql = `INSERT INTO books (title, description, authorId) VALUES ( '${book.title}', '${book.description}', '${book.authorId}')`;
      await connection.execute(sql);
    } catch (err) {
      console.log(err);
    }
  }

  console.log('insert done');
  connection.close();
}

insertBookRecords();
