const express = require('express');
const router = express.Router();
const emailValidator = require('../middleware/email_validator');
const passwordValidator = require('../middleware/password_validator');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer_config');
const userCtrl = require('../controllers/user');

router.post('/signup', emailValidator, passwordValidator, userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/', userCtrl.getAllUsers);

router.get('/profile/:id', auth, userCtrl.getOneUser);
router.put('/profile/:id', auth, multer, userCtrl.modifyUser);
router.delete('/profile/:id', auth, userCtrl.deleteUser);

module.exports = router;
