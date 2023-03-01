const express = require('express');
const router = express.Router();
const validEmail = require('../middleware/email_validator');
const validPassword = require('../middleware/password_validator');
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/', userCtrl.getAllUsers);
router.delete('/user/:id', userCtrl.deleteUser);

module.exports = router;
