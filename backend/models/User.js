const { Model, Sequelize } = require('sequelize');

const sequelize = require('../config/db');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.User.hasMany(models.Post);
      models.User.hasMany(models.Comment);
      models.User.hasMany(models.Like);
    }
  }

  User.init(
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
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};

(async () => {
  await sequelize.sync({ force: true });
})();

// const Sequelize = require('sequelize');
// const { DataTypes } = Sequelize;
// const sequelize = require('../config/db');

// const User = sequelize.define(
//   'user',
//   {
//     userId: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     photo: {
//       type: DataTypes.STRING,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     isAdmin: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       default: 0,
//     },
//     createdAt: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: Sequelize.NOW,
//     },
//     updatedAt: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: Sequelize.NOW,
//     },
//   },
//   { tableName: 'user' }
// );

// User.associate = (models) => {
//   User.hasMany(models.post);
//   User.hasMany(models.comment);
//   User.hasMany(models.like);
// };

// // User.hasMany(Post);
// // User.hasMany(Comment);
// // User.hasMany(Like);

// module.exports = User;
