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
    readers: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    },
  },
  { tableName: 'post' }
);

// Post.sync({ alter: true });

module.exports = Post;
