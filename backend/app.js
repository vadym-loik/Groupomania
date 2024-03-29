const express = require('express');
const helmet = require('helmet');
const path = require('path');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');
const db = require('./config/db');
const cors = require('cors');

//check DB connection
try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const app = express();

//helmet helps secure Express apps by setting HTTP response headers
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

//cors module for headers
app.use(cors());

// for parsing json objects
app.use(express.json({ limit: '50mb' }));

app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

// for management of image files
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
