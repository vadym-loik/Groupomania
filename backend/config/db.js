const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'root', {
  dialect: 'mariadb',
  host: 'localhost',
});

// const test = async function (req, res) {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// };
// test();

module.exports = sequelize;
