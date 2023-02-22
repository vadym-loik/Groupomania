const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const User = require('../models/user');

// SIGNUP
exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  bcrypt.hash(password, 10).then((hash) => {
    const user = new User({
      email: email,
      password: hash,
    });

    User.create(user).then(() =>
      res
        .status(200)
        .json({ message: 'Account created!' })
        .catch((error) => res.status(500).json({ error: error }))
    );
  });
};

// LOGIN
exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({
    where: { email: email },
  }).then((user) => {
    if (user === null) {
      res.status(401).json({ message: 'Invalid credentials!' });
    } else {
      bcrypt
        .compare(password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: 'Incorrect password!' });
          }

          const token = jwt.sign({ userId: user.id }, RANDOM_TOKEN_SECRET, {
            expiresIn: '24h',
          });
          res.status(200).json({
            userId: user.id,
            token: token,
          });
        })
        .catch((error) => {
          res.status(500).json({ error: error });
        });
    }
  });
};

// get all users
exports.getAll = (req, res, next) => {
  User.findAll((users) => {
    res.send(users);
  }).catch((err) => {
    console.log(err);
  });
};
