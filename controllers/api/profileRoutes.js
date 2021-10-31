// const router = require('express').Router();
// //const Profile = require('../../models/Profile');
// const { Pod, Project, SelfCarePost } = require('../../models');

// const withAuth = require("../utils/auth");

// route to create/add a profile using async/await
// router.post('/', async (req, res) => {
//   try { 
//     const profileData = await Profile.create({
//     profile_name: req.body.profile_name,
//     profile_email: req.body.profile_email,
//     description: req.body.description,

//   });

// router.get("/", withAuth, async (req, res) => {
//     try {
//         const allData = { ...podData, ...projectData, ...selfData };
//         const podData = await Pod.findAll({
//             where: {
//                 user_id: req.session.user_id,
//             }
//         });
//         const projectData = await Project.findAll({
//             where: {
//                 user_id: req.session.user_id,
//             }
//         });      
//         const selfData = await SelfCarePost.findAll({
//             where: {
//                 user_id: req.session.user_id,
//             }
//         });
//         res.status(200).json(allData)
//         res.render("profile", {
//             layout: "main"
//         })

// if the profile is successfully created, the new response will be returned as json
//res.status(200).json(profileData)
// } catch (err) {
//   res.status(400).json(err);
// }
// });

// module.exports = router;