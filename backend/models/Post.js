const db = require('../config/sequelize');
const { Sequelize } = require('sequelize');

const Post = db.define(
  'post',
  {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    text: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { tableName: 'post' }
);

module.exports = Post;
