const mysql = require('mysql2');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;
