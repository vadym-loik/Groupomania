const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      // define association here
      models.Comment.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: 'CASCADE',
      }),
        models.Comment.belongsTo(models.Post, {
          foreignKey: {
            allowNull: false,
          },
          onDelete: 'CASCADE',
        });
    }
  }

  Comment.init(
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
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};

// const Sequelize = require('sequelize');
// const { DataTypes } = Sequelize;
// const sequelize = require('../config/db');

// const Comment = sequelize.define(
//   'comment',
//   {
//     commentId: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     text: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   { tableName: 'comment' }
// );

// Comment.associate = (models) => {
//   Comment.belongsTo(models.user, {
//     foreignKey: {
//       allowNull: false,
//     },
//     onDelete: 'CASCADE',
//   });
// };

// // Comment.belongsTo(User, {
// //   foreignKey: {
// //     allowNull: false,
// //   },
// //   onDelete: 'CASCADE',
// // });

// module.exports = Comment;
