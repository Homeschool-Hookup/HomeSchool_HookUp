const router = require("express").Router();
const { User, Pod, Project, SelfCarePost } = require("../models");
const withAuth = require("../utils/auth");
//const Profile = require('../models/Profile');

router.get("/", (req, res) => {
  res.render("homepage");
});

// route to get all blog-posts
// router.get('/post', async (req, res) => {
//   const postData = await Post.findAll().catch((err) => {
//       res.json(err);
//     });
//       const posts = postData.map((dish) => post.get({ plain: true }));
//       res.render('allpodpost', { posts });
//     });

// router.get('/post', (req, res) => {
//   res.render('allpodpost');
// });

// route to get one profile
// router.get('/profile/:id', async (req, res) => {
//   try{
//       const profileData = await Profile.findByPk(req.params.id);
//       if(!profileData) {
//           res.status(404).json({message: 'No profile with this id!'});
//           return;
//       }
//       const profile = profileData.get({ plain: true });
//       res.render('profile', profile);
//     } catch (err) {
//         res.status(500).json(err);
//     };
// });

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ["password"] },
    });
    const user = userData.get({ plain: true });
    res.render("profile", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
