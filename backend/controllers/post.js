const Post = require('../models/Post');
const User = require('../models/User');
const fs = require('fs');
const path = require('path');

//GET ALL POSTS
exports.getAllPosts = (req, res, next) => {
  try {
    Post.findAll({ include: User })
      .then((posts) => {
        res.status(200).json(posts);
      })
      .catch((error) => res.status(400).json(error));
  } catch {
    (error) => res.status(500).json(error);
  }
};

//CREATE A POST
exports.createPost = (req, res) => {
  const newPost = {
    text: req.body.text,
    userId: req.body.userId,
    imageUrl: req.file
      ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      : null,
  };

  try {
    Post.create(newPost)
      .then((newPost) => {
        console.log('New post added!');
        res.status(201).json(newPost);
      })
      .catch((error) => res.status(400).json(error));
  } catch {
    (error) => res.status(500).json(error);
  }
};

//DELETE POST
exports.deletePost = (req, res) => {
  try {
    Post.findOne({ where: { id: req.params.id } }).then((post) => {
      const filename = path.basename(`/backend/images/${post.imageUrl}`);

      if (post.imageUrl) {
        // if filename is not null we delete the existing file
        fs.unlink(`images/${filename}`, (error) => {
          if (error) throw error;
        });
      } else {
        console.log('This post has no file to delete.');
      }

      Post.destroy({ where: { id: req.params.id } })
        .then((post) => {
          console.log('Post deleted!');
          res.status(200).json(post);
        })
        .catch((error) => res.status(400).json(error));
    });
  } catch {
    (error) => res.status(500).json(error);
  }
};
