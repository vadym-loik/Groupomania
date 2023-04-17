const express = require('express');
const router = express.Router();
const validEmail = require('../middleware/email_validator');
const validPassword = require('../middleware/password_validator');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer_config');
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/', userCtrl.getAllUsers);

router.get('/profile/:id', auth, userCtrl.getOneUser);
router.put('/profile/:id', auth, multer, userCtrl.modifyUser);
router.delete('/profile/:id', auth, userCtrl.deleteUser);

module.exports = router;
