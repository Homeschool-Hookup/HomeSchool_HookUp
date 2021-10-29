const router = require("express").Router();
const { Project, SelfCarePost, Pod, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  //   const body = req.body;
  try {
    const podData = await Pod.findAll({
      include: [User],
      //   where: {
      //     userId: req.session.userId,
      //   },
    });

    const pods = podData.map((post) => post.get({ plain: true }));

    res.render("allpodpost", { pods });
  } catch (err) {
    res.redirect("login");
  }
});

router.get("/new", (req, res) => {
  res.render("newpodpost", {
    layouts: "main",
  });
});

router.get("/edit/:id", async (req, res) => {
  try {
    const podData = await Pod.findByPk(req.params.id);

    if (podData) {
      const pods = podData.get({ plain: true });

      res.render("updatepodpost", {
        layouts: "main",
        pods,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});
router.get("/", async (req, res) => {
  try {
    const newProject = await Project.findAll({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/projects", async (req, res) => {
  res.render("allprojectposts");
});

router.get("/:id", withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newProject = await Project.findByPk({
      ...body,
      userId: req.session.userId,
    });
    res.json(newProject);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/", async (req, res) => {
  const body = req.body;

  try {
    const newSelfCarePost = await SelfCarePost.findAll({
      ...body,
      userId: req.session.userId,
    });
    res.json(newSelfCarePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/self-care", async (req, res) => {
  res.render("allselfcare");
});

router.get("/:id", async (req, res) => {
  const body = req.body;

  try {
    const newSelfCarePost = await SelfCarePost.findByPk({
      ...body,
      userId: req.session.userId,
    });
    res.json(newSelfCarePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// const router = require('express').Router();
// const { Post } = require('../models');
// const withAuth = require('../utils/auth');

// router.get('/', withAuth, async (req, res) => {
//   const body = req.body;
//   try {
//     const postData = await Post.findAll({
//       where: {
//         userId: req.session.userId,
//       },
//     });

//     const posts = postData.map((post) => post.get({ plain: true }));

//     res.render('allpodpost', {
//       layout: 'blog-post',
//       posts,
//     });
//   } catch (err) {
//     res.redirect('login');
//   }
// });

// router.get('/:id', withAuth, async (req, res) => {
//   const body = req.body;
//   try {
//     const postData = await Post.findByPk({
//       ...req.body,
//       where: {
//         userId: req.session.userId,
//       },
//     });
//     res.status(200).json(newPod);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/new', withAuth, (req, res) => {
//   res.render('newpodpost', {
//     layout: 'blog-post',
//   });
// });

// router.get('/edit/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id);

//     if (postData) {
//       const post = postData.get({ plain: true });

//       res.render('updatepodpost', {
//         layout: 'blog-post',
//         post,
//       });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.redirect('login');
//   }
// });

// module.exports = router;
