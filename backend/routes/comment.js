const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');
const multer = require('../middleware/multer_config');
const auth = require('../middleware/auth');

//routes for comments
router.post('/', auth, multer, commentCtrl.createComment);
router.get('/:postId', auth, commentCtrl.getAllCommentsOfPost);
router.delete('/:id', auth, commentCtrl.deleteComment);

module.exports = router;
