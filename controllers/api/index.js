const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const podRoutes = require("./podRoutes");
const projectRoutes = require("./projectRoutes");
const selfCareRoutes = require("./selfcareRoutes");
//const profileRoutes = require('./profileRoutes.js');

router.use("/user", userRoutes);
router.use("/pod", podRoutes);
router.use("/projects", projectRoutes);
router.use("/self-care", selfCareRoutes);
// router.use('/profile', profileRoutes);

module.exports = router;
