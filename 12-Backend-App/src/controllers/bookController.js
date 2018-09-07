const mysql = require('mysql2/promise');
const config = require('../config/db');

async function getAllBooks() {
  const connection = await mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.db,
  });

  console.log('connection made');
  const sql = 'SELECT books.id, books.title, books.description, authors.title as author FROM books, authors WHERE books.authorId = authors.id LIMIT 10';
  let books;

  try {
    books = await connection.execute(sql);
  } catch (err) {
    console.log(err);
    connection.close();
  }
  connection.close();
  return books;
}

async function getBookById(id) {
  const connection = await mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.db,
  });

  console.log('connection made');
  const sql = `SELECT books.id, books.title, books.description, authors.title as author FROM books, authors WHERE books.authorId = authors.id AND books.id = ${id} LIMIT 1`;
  let books;

  try {
    books = await connection.execute(sql);
  } catch (err) {
    console.log(err);
    connection.close();
  }

  //   console.log(books);
  connection.close();
  return books;
}

module.exports = {
  getAllBooks,
  getBookById,
};
