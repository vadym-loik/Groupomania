const mariadb = require('mariadb');

const pool = mariadb.createPool({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionLimit: 5,
});

// async function asyncFunction() {
//   let conn;
//   try {
//     conn = await pool.getConnection();
//   } finally {
//     if (conn) conn.release(); //release to pool
//     console.log('Connected!');
//   }
// }

module.exports = pool.promise(console.log('Connected DB'));
