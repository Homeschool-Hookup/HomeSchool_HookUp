const router = require('express').Router();


const userRoutes = require('./user-routes.js');
const blogPostRoutes = require('./blog-routes');
//const commentRoutes = require('./comment-routes');


router.use('/user', userRoutes);
router.use('/blog-post', postRoutes);
//router.use('/comment', commentRoutes);

module.exports = router;
