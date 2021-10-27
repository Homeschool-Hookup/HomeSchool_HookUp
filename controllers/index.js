const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const blogPostRoutes = require('./blog-route.js');

router.use('/', homeRoutes);
router.use('/blog-post', blogPostRoutes);
router.use('/api', apiRoutes);

module.exports = router;