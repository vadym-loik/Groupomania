const express = require('express');
const helmet = require('helmet');
const path = require('path');
const db = require('./config/db');
const userRoutes = require('./routes/user');

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

app.use('/signup', userRoutes);
app.use('/login', userRoutes);
app.use('/', userRoutes);
app.use('/user/:id', userRoutes);

// for management of image files
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
