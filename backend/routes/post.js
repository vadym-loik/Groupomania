const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const multer = require('../middleware/multer_config');
const auth = require('../middleware/auth');

router.post('/', multer, postCtrl.createPost);
router.get('/:id', postCtrl.getOnePost);
router.get('/', postCtrl.getAllPosts);
router.put('/:id', multer, postCtrl.modifyPost);
router.delete('/:id', postCtrl.deletePost);

module.exports = router;
