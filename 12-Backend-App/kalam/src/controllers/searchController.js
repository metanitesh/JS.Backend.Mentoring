const mysql = require('mysql2/promise');
const config = require('../config/db');

async function searchByFullText(text) {
  const connection = await mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.db,
  });

  console.log('connection made');
  const sql = `SELECT * FROM books WHERE MATCH (title,description) AGAINST ('${text}' IN NATURAL LANGUAGE MODE)`;

  let results;
  try {
    results = await connection.execute(sql);
  } catch (error) {
    console.log(error);
  }

  connection.close();
  return results;
}

module.exports = {
  searchByFullText,
  // searchByLike,
};
