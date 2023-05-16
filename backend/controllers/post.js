const Post = require('../models/Post');
const User = require('../models/User');
const fs = require('fs');

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
  let post, text, userId;
  let imageUrl = null;

  if (req.file) {
    const parsed = JSON.parse(req.body);
    console.log(parsed);
    return false;
    imageUrl = req.protocol + '://' + req.get('host');
    text = parsed.text;
    userId = parsed.userId;
    imageUrl += '/images/' + req.file.filename;
  } else {
    text = req.body.text;
    userId = req.body.userId;
  }

  post = new Post({
    text,
    imageUrl,
    // read: 0,
    // usersRead: [],
    userId,
  });

  Post.create(post)
    .then(() => {
      res.status(201).json({
        message: 'Post successfully added!',
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message || error,
      });
    });
};

// exports.createPost = (req, res) => {
//   if (req.file) {
//     req.body.file = req.file.filename;
//   } else {
//     req.body.file = null;
//   }
//   try {
//     console.log(req.body);
//     let { text, file, userId } = req.body;
//     Post.create({ text, file, userId })
//       .then((newPost) => {
//         console.log('New post added!');
//         res.status(201).json(newPost);
//       })
//       .catch((error) => res.status(400).json(error));
//   } catch {
//     (error) => res.status(500).json(error);
//   }
// };

//DELETE POST
exports.deletePost = (req, res) => {
  try {
    Post.findOne({ where: { id: req.params.id } }).then((post) => {
      if (post.file) {
        // if post.file is not null we delete the existing file
        fs.unlink(`images/${post.file}`, (error) => {
          if (error) throw err;
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
