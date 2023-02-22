const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define(
  'user',
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    photo: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { tableName: 'user' }
);

module.exports = User;
