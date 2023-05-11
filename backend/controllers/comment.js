const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');

//GET ALL COMMENTS BY POST
exports.getAllCommentsOfPost = (req, res, next) => {
  try {
    Comment.findAll({
      where: {
        postId: req.params.postId,
      },
      include: User,
    })
      .then((comment) => res.status(200).json(comment))
      .catch((error) => res.status(400).json({ error }));
  } catch {
    (error) => res.status(500).json(error);
  }
};

//GET ALL COMMENTS
exports.getAllComments = (req, res, next) => {
  try {
    Comment.findAll()
      .then((comment) => {
        res.status(200).json(comment);
      })
      .catch((error) => res.status(400).json(error));
  } catch {
    (error) => res.status(500).json(error);
  }
};

//CREATE COMMENT
exports.createComment = (req, res, next) => {
  try {
    let { text, userId, postId } = req.body;
    Comment.create({ text, postId, userId })
      .then((newComment) => {
        console.log('Comment added!');
        res.status(201).json(newComment);
      })
      .catch((error) => res.status(400).json(error));
  } catch {
    (error) => res.status(500).json(error);
  }
};

//DELETE COMMENT
exports.deleteComment = (req, res, next) => {
  try {
    Comment.destroy({ where: { id: req.params.id } })
      .then(() => {
        console.log('Comment deleted!');
        res.status(200);
      })
      .catch((error) => res.status(400).json(error));
  } catch {
    (error) => res.status(500).json(error);
  }
};
