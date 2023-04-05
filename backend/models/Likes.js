const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;
const sequelize = require('../config/db');

const Like = sequelize.define(
  'like',
  {
    likeId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  { tableName: 'like' }
);

module.exports = Like;
