const mysql = require('mysql2/promise');
const config = require('../config/db');

async function createDb() {
  const connection = await mysql.createConnection({ host: config.host, user: config.user });
  console.log('connection made');
  await connection.execute('CREATE DATABASE IF NOT EXISTS mountblue;');
  console.log('db created');
}

createDb();
