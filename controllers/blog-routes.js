const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  const body = req.body;
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('allpodpost', {
      layout: 'blog-post',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/:id', withAuth, async (req, res) => {
  const body = req.body;
  try {
    const postData = await Post.findByPk({
      ...req.body,
      where: {
        userId: req.session.userId,
      },
    });
    res.status(200).json(newPod);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('newpodpost', {
    layout: 'blog-post',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('updatepodpost', {
        layout: 'blog-post',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;