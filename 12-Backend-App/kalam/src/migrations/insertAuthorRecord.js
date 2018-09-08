const mysql = require('mysql2/promise');
const config = require('../config/db');
const authors = require('./authorData');

async function insertAuthorRecords() {
  const connection = await mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.db,
  });
  console.log('connection made');

  try {
    for (const author of authors) {
      const sql = `INSERT INTO authors (title, description) VALUES ( '${author.title}', '${author.description}')`;
      connection.execute(sql);
    }
  } catch (err) {
    console.log(err);
  }
  console.log('insert done');
  connection.close();
}

insertAuthorRecords();
