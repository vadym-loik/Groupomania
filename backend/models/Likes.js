const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      // define association here
      models.Like.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: 'CASCADE',
      }),
        models.Like.belongsTo(models.Post, {
          foreignKey: {
            allowNull: false,
          },
          onDelete: 'CASCADE',
        });
    }
  }

  Like.init(
    {
      likeId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: 'Like',
    }
  );
  return Like;
};

// const Sequelize = require('sequelize');
// const { DataTypes } = Sequelize;
// const sequelize = require('../config/db');

// const Like = sequelize.define(
//   'like',
//   {
//     likeId: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//   },
//   { tableName: 'like' }
// );

// Like.associate = (models) => {
//   Like.belongsTo(models.user, {
//     foreignKey: {
//       allowNull: false,
//     },
//     onDelete: 'CASCADE',
//   });
// };

// // Like.belongsTo(User, {
// //   foreignKey: {
// //     allowNull: false,
// //   },
// //   onDelete: 'CASCADE',
// // });

// module.exports = Like;
