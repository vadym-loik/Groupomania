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
