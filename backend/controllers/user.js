const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const User = require('../models/user');

// exports.sendMessage = (req, res) => {
//   res.send('Salut Vadym!');
// };

// SIGNUP
exports.signup = async function (req, res, next) {
  const { name, email, password } = req.body;

  const newUser = {
    name: name,
    email: email,
    password: password,
  };

  await User.create(newUser)
    .then(() => {
      res.status(201).json({ message: 'User created successfully' });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

// exports.signup = (req, res, next) => {
//   const { name, email, password } = req.body;

//   bcrypt.hash(password, 10).then((hash) => {
//     const user = new User({
//       name: name,
//       email: email,
//       password: hash,
//       admin: false,
//     });
//     User.create(user).then(() =>
//       res
//         .status(201)
//         .json({ message: 'Account created!' })
//         .catch((error) => res.status(400).json({ error: error }))
//     );
//   });
// };

// LOGIN
exports.login = async function (req, res, next) {
  const { email, password } = req.body;

  await User.findOne({ where: { email: email, password: password } })
    .then(() => {
      res.status(200).json({ message: 'User found!' });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

// exports.login = (req, res, next) => {
//   const { email, password } = req.body;
//   console.log(req.body);
//   User.findOne({
//     where: { email: email },
//   }).then((user) => {
//     if (!user) {
//       return res.status(401).json({ error: 'Incorrect e-mail' });
//     } else {
//       bcrypt
//         .compare(password, user.password)
//         .then((valid) => {
//           if (!valid) {
//             return res.status(401).json({ error: 'Incorrect password!' });
//           }

//           const token = jwt.sign({ userId: user._id }, RANDOM_TOKEN_SECRET, {
//             expiresIn: '24h',
//           });
//           res.status(200).json({
//             userId: user._id,
//             token: token,
//           });
//         })
//         .catch((error) => {
//           res.status(500).json({ error: error });
//         });
//     }
//   });
// };

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
