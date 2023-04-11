const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  // class Post extends Model {
  //   static associate(models) {
  //     // define association here
  //     models.Post.belongsTo(models.User, {
  //       foreignKey: {
  //         allowNull: false,
  //       },
  //       onDelete: 'CASCADE',
  //     }),
  //       models.Post.hasMany(models.Comment);
  //     models.Post.hasMany(models.Like);
  //   }
  // }

  Post.init(
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
    {
      sequelize,
      modelName: 'Post',
    }
  );
  return Post;
};

// const Sequelize = require('sequelize');
// const { DataTypes } = Sequelize;
// const sequelize = require('../config/db');

// const Post = sequelize.define(
//   'post',
//   {
//     postId: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     text: {
//       type: DataTypes.STRING,
//     },
//     imageUrl: {
//       type: DataTypes.STRING,
//     },
//     date: {
//       type: DataTypes.DATE,
//     },
//     like: {
//       type: DataTypes.INTEGER,
//       defaultValue: 0,
//     },
//     comment: {
//       type: DataTypes.INTEGER,
//       defaultValue: 0,
//     },
//   },
//   { tableName: 'post' }
// );

// Post.associate = (models) => {
//   Post.belongsTo(models.user, {
//     foreignKey: {
//       allowNull: false,
//     },
//     onDelete: 'CASCADE',
//   });
//   Post.hasMany(models.comment);
//   Post.hasMany(models.like);
// };

// // Post.belongsTo(User, {
// //   foreignKey: {
// //     allowNull: false,
// //   },
// //   onDelete: 'CASCADE',
// // });
// // Post.hasMany(Comment);
// // Post.hasMany(Like);

// module.exports = Post;
