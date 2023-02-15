const mariadb = require('mariadb');
const dotenv = require('dotenv').config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionLimit: 5,
});

async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT 1 as val');
    // rows: [ {val: 1}, meta: ... ]

    const res = await conn.query('INSERT INTO myTable value (?, ?)', [
      1,
      'mariadb',
    ]);
    // res: { affectedRows: 1, insertId: 1, warningStatus: 0 }
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

module.exports = pool.promise(console.log('Connected DB'));
