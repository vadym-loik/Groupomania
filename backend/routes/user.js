const express = require('express');
const router = express.Router();
const validEmail = require('../middleware/email_validator');
const validPassword = require('../middleware/password_validator');
const userCtrl = require('../controllers/user');

router.post('/signup', validEmail, validPassword, userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/users', userCtrl.getAll);

module.exports = router;
