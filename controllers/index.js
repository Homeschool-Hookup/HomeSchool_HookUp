const router = require("express").Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const blogPostRoutes = require('./blog-routes.js');

//const userRoutes = require('./user-routes.js');

router.use('/', homeRoutes);
//const userRoutes = require('./user-routes.js');
//router.use('/user', userRoutes);
router.use("/blog-post", blogPostRoutes);
router.use("/api", apiRoutes);

module.exports = router;
