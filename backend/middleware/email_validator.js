// A simple module to validate an e-mail address
const emailValidator = require('email-validator');

module.exports = (req, res, next) => {
  if (!emailValidator.validate(req.body.email)) {
    return res.status(400).json({
      message: 'Please enter a valid email address!',
    });
  } else {
    next();
  }
};
