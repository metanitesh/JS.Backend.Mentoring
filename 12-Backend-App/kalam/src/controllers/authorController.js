const mysql = require('mysql2/promise');
const config = require('../config/db');

async function getAllAuthors() {
  const connection = await mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.db,
  });

  console.log('connection made');
  const sql = 'SELECT * FROM authors LIMIT 10;';

  const books = await connection.execute(sql);
  connection.close();
  return books;
}

async function getAuthorById(id) {
  const connection = await mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.db,
  });

  console.log('connection made');
  console.log(id);
  const sql = `SELECT authors.title, authors.description FROM authors WHERE authors.id= '${id}' LIMIT 1`;
  //   console.log(sql);
  let author;

  try {
    author = await connection.execute(sql);
  } catch (err) {
    console.log(err);
    connection.close();
  }

  //   console.log(author);
  connection.close();
  return author;
}

module.exports = {
  getAllAuthors,
  getAuthorById,
};
