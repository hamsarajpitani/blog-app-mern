const { signupUser, signinUser } = require('../controller/authController');

const router = require('express').Router();

router.route('/signup').post(signupUser);
router.route('/signin').post(signinUser);

module.exports = router