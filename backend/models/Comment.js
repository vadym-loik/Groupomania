const Sequelize = require('sequelize');
const db = require('../config/sequelize');

const Comment = db.define(
  'comments',
  {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    text: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { tableName: 'comment' }
);

// Comment.sync({ alter: true });

module.exports = Comment;
