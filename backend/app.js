const express = require('express');
const helmet = require('helmet');
const path = require('path');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentsRoutes = require('./routes/comments');
const db = require('./config/db');

try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// (async function (req, res) {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

const app = express();
app.use(helmet());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// for parsing json objects
app.use(express.json());

app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comments', commentsRoutes);

// for management of image files
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
