const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const User = require('../models/User');

// SIGNUP
exports.signup = async (req, res, next) => {
  // const userObject = req.body;
  // console.log(userObject);

  await bcrypt.hash(req.body.password, 10).then((hash) => {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      isAdmin: false,
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
exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({
    where: { email: email.email },
  }).then((user) => {
    if (!user) {
      return res.status(401).json({ error: 'User not found!' });
    }
    bcrypt
      .compare(password.password, user.password)
      .then((valid) => {
        if (!valid) {
          return res.status(401).json({ error: 'Incorrect password!' });
        }
        res.status(200).json({
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

//GET ONE USER
exports.getOneUser = (req, res, next) => {
  User.findOne({
    attributes: ['userId', 'name', 'email', 'isAdmin'],
    where: { userId: req.params.id },
  })
    .then((user) => res.status(200).json({ user }))
    .catch((error) => res.status(404).json({ error }));
};

//MODIFY USER PROFILE
exports.modifyUser = (req, res, next) => {
  const userObject = req.file
    ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  User.findOne({ where: { id: req.params.id } })
    .then((user) => {
      //delete the old file in case a new file is different from the "avatar_default.png" image
      if (
        user.imageUrl != 'http://localhost:8000/images/avatar_default.png' &&
        req.file
      ) {
        const oldImage = user.imageUrl.split('/images/')[1];
        fs.unlink(`images/${oldImage}`, (error) => {
          console.log(error);
        });
      }
    })
    .catch((error) => {
      return res.status(400).json({ error });
    });

  //update the database
  User.update(
    { ...userObject, id: req.params.id },
    { where: { id: req.params.id } }
  ).then(() =>
    //if successful registration
    User.findOne({ where: { id: req.params.id } })
      .then((user) => {
        res.status(200).json({ message: 'Profile updated!', user });
      })
      .catch((error) => res.status(400).json(error))
  );
};

// GET ALL USERS
exports.getAllUsers = (req, res, next) => {
  User.findAll({ attributes: ['userId', 'name', 'email'] })
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

// DELETE USER
exports.deleteUser = (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found!' });
      }

      const filename = user.imageUrl.split('/images/')[1];
      if (user.imageUrl != 'http://localhost:8000/images/avatar_default.png') {
        //remove image only if different from avatar default.png image
        fs.unlink(`images/${filename}`, (error) => {
          if (error) {
            console.log(error);
          }
        });
      }

      //we delete the user from the database by indicating his id
      User.destroy({ where: { id: req.params.id } })
        .then((user) => res.status(200).json({ message: 'User deleted!' }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(400).json({ error }));
};
