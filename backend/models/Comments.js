const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;
const sequelize = require('../config/db');

const Comment = sequelize.define(
  'comment',
  {
    commentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: 'comment' }
);

module.exports = Comment;
