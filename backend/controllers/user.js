const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const User = require('../models/User');

// SIGNUP
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      isAdmin: false,
    });

    console.log(user);

    user
      .save()
      .then(() => {
        res.status(201).json({ message: 'User created successfully' });
        console.log(User);
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  });
};

// LOGIN
exports.login = (req, res, next) => {
  // const { email, password } = req.body;

  User.findOne({
    where: { email: req.body.email },
  }).then((user) => {
    if (!user) {
      return res.status(401).json({ error: 'User not found!' });
    }
    bcrypt
      .compare(req.body.password, user.password)
      .then((valid) => {
        if (!valid) {
          return res.status(401).json({ error: 'Incorrect password!' });
        }
        res.status(200).json({
          userId: user.id,
          isAdmin: user.isAdmin,
          token: jwt.sign(
            {
              userId: user.id,
              isAdmin: user.isAdmin,
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

//GET ONE USER
exports.getOneUser = (req, res, next) => {
  try {
    User.findOne({
      where: { id: req.params.id },
    })
      .then((user) => res.status(200).json({ user }))
      .catch((error) => res.status(400).json({ error }));
  } catch {
    (error) => res.status(500).json(error);
  }
};

//MODIFY USER PROFILE
exports.modifyUser = (req, res, next) => {
  req.file
    ? (req.body.profile = req.file.filename)
    : console.log('we keep the same picture'); //we check if the user has uploaded a new photo
  if (req.file) {
    //remove the old profile photo
    User.findOne({ where: { id: req.params.id } })
      .then((user) => {
        if (user.profile !== 'avatar_default.png') {
          //if the profile picture is not the default one, you can delete it
          fs.unlink(`images/${user.profile}`, (error) => {
            if (error) throw err;
          });
        } else {
          console.log(
            'This file cannot be deleted because it is the default image.'
          );
        }
      })
      .catch((error) => res.status(400).json(error));
  }
  if (req.body.password) {
    //if the password has been modified, the hash is saved
    bcrypt
      .hash(req.body.password, 8)
      .then((hash) => {
        req.body.password = hash;
        User.update(req.body, { where: { id: req.params.id } })
          .then((user) => {
            res.status(201).json({ message: 'profile and password changed' });
          })
          .catch((error) => res.status(400).json(error));
      })
      .catch((error) => res.status(500).json(error));
  } else {
    //the password has not been changed so we can save our data directly
    User.update(req.body, { where: { id: req.params.id } })
      .then(() => res.status(201).json({ message: 'updated profile' }))
      .catch((error) => res.status(400).json(error));
  }
};

// GET ALL USERS
exports.getAllUsers = (req, res, next) => {
  User.findAll({ attributes: ['id', 'name', 'email'] })
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

// DELETE USER
exports.deleteUser = (req, res, next) => {
  console.log('User id to delete: ', req.params.id);
  try {
    User.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.status(200).json({ message: 'User deleted!' });
      })
      .catch((error) => res.status(400).json(error));
  } catch {
    (error) => res.status(500).json(error);
  }
};
