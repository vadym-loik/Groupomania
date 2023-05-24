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
exports.createPost = (req, res, next) => {
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

//READ POST
exports.readPost = (req, res, next) => {
  const postId = req.params.id;

  Post.findOne({ where: { id: postId } }).then((post) => {
    const readers = req.body.readers;

    if (post.readers.includes(readers)) {
      return res.status(304).json({
        message: 'User already read the post.',
      });
    } else {
      post
        .update({ readers: readers })
        .then((post) => {
          post.save().then(() => {
            res.status(200).json({
              message: 'User successfully added.',
            });
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: error.message || error,
          });
        });
    }
  });
};

//DELETE POST
exports.deletePost = (req, res, next) => {
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
