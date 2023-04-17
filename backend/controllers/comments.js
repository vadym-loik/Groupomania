const Comment = require('../models/Comments');
const User = require('../models/User');

//CREATE COMMENT
exports.createComment = (req, res, next) => {
  if (!req.body.postId || !req.body.userId || !req.body.text) {
    res.status(400).json({
      message: 'Please check that the fields are all filled in!',
    });
    return;
  }

  Comment.create({
    postId: req.body.postId,
    userId: req.body.userId,
    description: req.body.text,
  })
    .then((comment) =>
      res.status(201).json({ message: 'Comment added!', comment })
    )
    .catch((error) => res.status(400).json({ error }));
};

//GET ALL COMMENTS BY POST
exports.getAllCommentsByPost = (req, res, next) => {
  Comment.findAll({
    where: {
      postId: req.params.postid,
    },
    include: {
      model: User,
      attributes: {
        exclude: ['id', 'password', 'email', 'createdAt', 'updatedAt'],
      },
    },
    order: [['createdAt', 'DESC']],
  })
    .then((comment) => res.status(200).json(comment))
    .catch((error) => res.status(404).json({ error }));
};

//DELETE COMMENT
exports.deleteComment = (req, res, next) => {
  Comment.findOne({ where: { id: req.params.id } })
    .then((comment) => {
      if (!comment) {
        return res.status(404).json({ error: 'Comment not found!' });
      }

      //check whoever wants to edit the post is the author of the post or the administrator
      User.findOne({ where: { id: req.auth.userId } })
        .then((user) => {
          if (!user.isAdmin && req.auth.userId != comment.userId) {
            return res.status(401).json({ error: 'Deletion not allowed!' });
          }
        })
        .catch((error) => res.status(400).json({ error }));

      Comment.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: 'Comment deleted!' }))
        .catch((error) => res.status(400).json({ error }));
    })

    .catch((error) => res.status(400).json({ error }));
};
