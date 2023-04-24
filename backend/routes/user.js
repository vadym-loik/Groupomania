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

router.get('/profile/:id', userCtrl.getOneUser);
router.put('/profile/:id', multer, userCtrl.modifyUser);
router.delete('/profile/:id', userCtrl.deleteUser);

module.exports = router;
