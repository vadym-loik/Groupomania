const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const User = require('../models/User');
const path = require('path');

// SIGNUP
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        ...req.body,
        password: hash,
      });
      let { name, email, password } = user;
      User.create({ name, email, password })
        .then((newUser) => {
          console.log(
            'New user registered:',
            newUser.name,
            'userId:',
            newUser.id
          );
          res.status(201).json({
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
        .catch((error) => res.status(400).json(error));
    })
    .catch((error) => res.status(500).json(error));
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
  if (req.body.password) {
    //if the password has been modified, the hash is saved
    bcrypt
      .hash(req.body.password, 8)
      .then((hash) => {
        req.body.password = hash;
        User.update(req.body, { where: { id: req.params.id } })
          .then(() => {
            res.status(201).json({ message: 'Profile and password changed.' });
          })
          .catch((error) => res.status(400).json(error));
      })
      .catch((error) => res.status(500).json(error));
  } else {
    const userId = req.params.id;
    const updatedProfile = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      imageUrl: req.file
        ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        : null,
    };

    User.update(updatedProfile, { where: { id: userId } })
      .then((result) => {
        res.status(200).json({
          message: 'Profile updated successfully',
          newProfileInfo: updatedProfile,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Something went wrong',
        });
      });
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
  try {
    User.findOne({ where: { id: req.params.id } }).then((user) => {
      const filename = path.basename(`/backend/images/${user.imageUrl}`);
      console.log('line 44', filename);

      if (filename) {
        // if filename is not null we delete the existing file
        fs.unlink(`images/${filename}`, (error) => {
          if (error) throw error;
        });
      } else {
        console.log('This post has no file to delete.');
      }
      User.destroy({ where: { id: req.params.id } })
        .then(() => {
          res.status(200).json({ message: 'User deleted!' });
        })
        .catch((error) => res.status(400).json(error));
    });
  } catch {
    (error) => res.status(500).json(error);
  }
};
