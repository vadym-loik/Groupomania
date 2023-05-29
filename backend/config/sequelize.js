const { Sequelize } = require('sequelize');
require('dotenv').config();

//sequelize configurations for connecting to the DB
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mariadb',
    host: process.env.DB_HOST,
  }
);

module.exports = sequelize;
