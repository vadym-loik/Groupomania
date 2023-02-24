// const mariadb = require('mariadb');
// const dotenv = require('dotenv').config();

// const pool = mariadb.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   connectionLimit: 5,
// });

// async function asyncFunction() {
//   let conn;
//   try {
//     conn = await pool.getConnection();
//     console.log(conn);
//   } catch (err) {
//     throw err;
//   } finally {
//     if (conn) return conn.end();
//   }
// }
// asyncFunction();

// module.exports = pool;

const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mariadb',
    host: process.env.DB_HOST,
  }
);

(async function (req, res) {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
