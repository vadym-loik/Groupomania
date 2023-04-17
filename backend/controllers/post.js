const Post = require('../models/Post');
const User = require('../models/User');
const fs = require('fs');

//CREATE A POST
exports.createPost = (req, res, next) => {
  let imageUrl = '';
  if (req.file) {
    imageUrl = `${req.protocol}://${req.get('host')}/images/${
      req.file.filename
    }`;
  }

  Post.create({
    text: req.body.text,
    userId: req.body.userId,
    imageUrl: imageUrl,
  })
    .then((post) => res.status(201).json({ message: 'Post saved!', post }))
    .catch((error) => res.status(400).json({ error }));
};

//GET ONE POST
exports.getOnePost = (req, res, next) => {
  Post.findOne({
    where: { id: req.params.id },
    include: {
      model: User,
      attributes: {
        exclude: ['id', 'password', 'email'],
      },
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
  Post.findAll({
    include: {
      model: User,
      attributes: {
        exclude: ['id', 'password', 'email', 'createdAt', 'updatedAt'],
      },
    },
    //sort by date from newest to least recent
    order: [['createdAt', 'DESC']],
  })
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(404).json({ error }));
};

//MODIFY POST

exports.modifyPost = (req, res, next) => {
  const postObject = req.file
    ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      if (req.file) {
        const oldImage = post.imageUrl.split('/images/')[1];
        fs.unlink(`images/${oldImage}`, (error) => {
          console.log(error);
        });
      }

      if (!post) {
        return res.status(404).json({ error: 'Post not found!' });
      }

      User.findOne({ where: { id: req.auth.userId } })
        .then((user) => {
          //check whoever wants to edit the post is the author of the post or the administrator
          if (user.isAdmin || req.auth.userId === post.userId) {
            //update the database
            Post.update(
              { ...postObject, id: req.params.id },
              { where: { id: req.params.id } }
            )
              .then(() =>
                Post.findOne({ where: { id: req.params.id } })
                  .then((post) => {
                    res.status(200).json({ message: 'Post updated!', post });
                  })
                  .catch((error) => res.status(400).json(error))
              )
              .catch((error) => res.status(400).json(error));
          } else {
            return res
              .status(401)
              .json({ error: 'Modification not permitted!' });
          }
        })
        .catch((error) => res.status(400).json(error));
    })
    .catch((error) => res.status(400).json({ error }));
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
        //we delete the user from the database by indicating his id
        Post.destroy({ where: { id: req.params.id } })
          .then((user) => res.status(200).json({ message: 'Post deleted!' }))
          .catch((error) => res.status(400).json({ error }));
      });
    })

    .catch((error) => res.status(400).json({ error }));
};
