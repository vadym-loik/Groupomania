const Sequelize = require('sequelize');
const db = require('../config/sequelize');

const Comments = db.define(
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
  },
  { tableName: 'comment' }
);

module.exports = Comments;
