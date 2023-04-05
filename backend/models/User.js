const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;
const sequelize = require('../config/db');
const Post = require('./Post');
const Comment = require('./Comments');
const Like = require('./Likes');

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
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: 0,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  { tableName: 'user' }
);

User.hasMany(Post, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
});
Post.belongsTo(User);

User.hasMany(Comment, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
});
Comment.belongsTo(User);

User.hasMany(Like, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
});
Like.belongsTo(User);

(async () => {
  await sequelize.sync({ alter: true });
  // Code here
})();

module.exports = User;
