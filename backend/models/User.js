const Sequelize = require('sequelize');
const db = require('../config/sequelize');

//user model
const User = db.define(
  'user',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    imageUrl: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      default: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  { tableName: 'user' }
);

// User.sync({ alter: true });

module.exports = User;
