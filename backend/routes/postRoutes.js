const { createPost } = require('../controller/postController');
const { auth } = require('../middleware/auth');

const router = require('express').Router();

router.route('/').post(auth,createPost)

module.exports = router