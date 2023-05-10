const Post = require('../models/Post');
const User = require('../models/User');
const fs = require('fs');

//CREATE A POST
exports.createPost = (req, res, next) => {
  if (req.file) {
    req.body.file = req.file.filename;
  } else {
    req.body.file = null;
  }
  try {
    console.log(req.body);
    let { text, file, userId } = req.body;

    Post.create({ text, file, userId })
      .then((newPost) => {
        console.log('Post created!');
        res.status(201).json(newPost);
      })
      .catch((error) => res.status(400).json(error));
  } catch {
    (error) => res.status(500).json(error);
  }
};

//GET ONE POST
exports.getOnePost = (req, res, next) => {
  Post.findOne({
    where: { id: req.params.id },
    include: {
      model: User,
    },
  })
    .then((post) => {
      //if the post does not exist
      if (post === null) {
        return res.status(404).json({ message: 'This post does not exist!' });
      } else {
        res.status(200).json(post);
      }
    })
    .catch((error) => res.status(404).json({ error }));
};

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

//MODIFY POST
exports.modifyPost = (req, res, next) => {
  req.file
    ? (req.body.file = req.file.filename)
    : console.log('we keep the same picture'); //we check if the user has uploaded a new photo
  if (req.file) {
    //remove the old image from the post
    Post.findOne({ where: { id: req.params.id } })
      .then((post) => {
        if (post.file) {
          //if post.file is not null we delete the existing file
          fs.unlink(`images/${post.file}`, (error) => {
            if (error) throw err;
          });
        } else {
          console.log('the image to replace is NULL');
        }
      })
      .catch((error) => res.status(400).json(error));
  }
  try {
    Post.update(req.body, { where: { id: req.params.id } })
      .then(() => {
        let updatedPost = { ...req.body };
        res.status(201).json(updatedPost);
      })
      .catch((error) => res.status(400).json(error));
  } catch {
    (error) => res.status(500).json(error);
  }
};

//DELETE POST
exports.deletePost = (req, res, next) => {
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      if (!post) {
        return res.status(404).json({ error: 'Post not found!' });
      }

      //verify that the person who wants to delete the post is the author of the post or the administrator
      User.findOne({ where: { id: req.auth.userId } })
        .then((user) => {
          if (!user.isAdmin && req.auth.userId != post.userId) {
            return res.status(401).json({ error: 'Deletion not allowed!' });
          }
        })
        .catch((error) => res.status(400).json({ error }));

      const filename = post.imageUrl.split('/images/')[1];

      //1st arg: file path, 2nd arg: the callback=what to do once the image is deleted
      fs.unlink(`images/${filename}`, () => {
        //we delete the post from the database by indicating his id
        Post.destroy({ where: { id: req.params.id } })
          .then(() => res.status(200).json({ message: 'Post deleted!' }))
          .catch((error) => res.status(400).json({ error }));
      });
    })

    .catch((error) => res.status(400).json({ error }));
};
