const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');
const multer = require('../middleware/multer_config');
const auth = require('../middleware/auth');

router.post('/', multer, commentCtrl.createComment);
router.get('/:postId', commentCtrl.getAllCommentsByPost);
router.delete('/:id', commentCtrl.deleteComment);

module.exports = router;
