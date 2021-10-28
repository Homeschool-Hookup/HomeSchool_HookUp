const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");

const blogPostRoutes = require("./blog-route.js");
//const userRoutes = require('./user-routes.js');

router.use("/", homeRoutes);
//router.use('/user', userRoutes);
router.use("/blog-post", blogPostRoutes);
router.use("/api", apiRoutes);

module.exports = router;
