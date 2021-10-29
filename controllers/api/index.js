const router = require("express").Router();

const userRoutes = require('./user-routes.js');
//const blogPostRoutes = require('./blog-routes');
//const commentRoutes = require('./comment-routes');
const podRoutes = require('./podRoutes');
const projectRoutes = require('./projectRoutes');
const selfCareRoutes = require('./selfCareRoutes');
//const profileRoutes = require('./profileRoutes.js');

router.use('/user', userRoutes);
router.use('/pod', podRoutes);
router.use('/projects', projectRoutes);
router.use('/self-care', selfCareRoutes);
// router.use('/profile', profileRoutes);
//router.use('/blog-post', postRoutes);
//router.use('/comment', commentRoutes);

module.exports = router;
