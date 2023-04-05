const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;
const sequelize = require('../config/db');

const Post = sequelize.define(
  'post',
  {
    postId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    comment: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { tableName: 'post' }
);

module.exports = Post;
