const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const User = require('../models/user');

// exports.sendMessage = (req, res) => {
//   res.send('Salut Vadym!');
// };

// SIGNUP
exports.signup = function (req, res, next) {
  const userObject = req.body;
  console.log(userObject);

  bcrypt.hash(req.body.password, 10).then((hash) => {
    User.create({
      ...userObject,
      password: hash,
      admin: false,
    })
      .then(() => {
        res.status(201).json({ message: 'User created successfully' });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  });
};

// LOGIN
// exports.login = async function (req, res, next) {
//   const { email, password } = req.body;

//   await User.findOne({ where: { email: email, password: password } })
//     .then(() => {
//       res.status(200).json({ message: 'User found!' });
//     })
//     .catch((error) => {
//       res.status(400).json({ error });
//     });
// };

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({
    where: { email: email },
  }).then((user) => {
    if (!user) {
      return res.status(401).json({ error: 'User not found!' });
    }
    bcrypt
      .compare(password, user.password)
      .then((valid) => {
        if (!valid) {
          return res.status(401).json({ error: 'Incorrect password!' });
        }
        res.status(200).json({
          name: user.name,
          userId: user.id,
          token: jwt.sign(
            {
              userId: user.id,
            },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' }
          ),
        });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  });
};

// get all users
exports.getAllUsers = (req, res, next) => {
  User.findAll({ attributes: ['userId', 'name', 'email'] })
    .then((User) => {
      res.status(200).json(User);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

// DELETE USER
exports.deleteUser = (req, res, next) => {
  User.destroy({
    where: {
      userId: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: 'User deleted!' });
    })
    .catch((error) => res.status(500).json({ error }));
};
