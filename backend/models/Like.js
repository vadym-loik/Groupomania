const Sequelize = require('sequelize');
const db = require('../config/sequelize');

const Like = db.define(
  'comments',
  {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    like: {
      type: Sequelize.BOOLEAN,
    },
  },
  { tableName: 'like' }
);

// Like.sync({ alter: true });

module.exports = Like;
