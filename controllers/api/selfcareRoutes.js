const router = require('express').Router();
const { SelfCarePost, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/allselfcare', async (req, res) => {
  const body = req.body;

  try {
    const newSelfCarePost = await SelfCarePost.findAll({
      include: [User]
    });
    const selfcare = newSelfCarePost.map((self) => self.get({ plain: true }));
    console.log("selfcare", selfcare);
    res.render("allselfcare", {
      layout: "main",
      selfcare
    })
    // res.status(200).json(newPod);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/allselfcare', async (req, res) => {
  res.render('allselfcare');
});

router.get('/:id', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newSelfCarePost = await SelfCarePost.findByPk({ ...body, userId: req.session.userId });
    res.json(newSelfCarePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a selfcare
router.get('/self-care/:id', async (req, res) => {
  // This method renders the 'pod' template, and uses params to select the correct pod to render in the template, based on the id of the pod.
  // Now, we have access to a pod description in the 'pod' template.
  return res.render('allselfcare', selfCarePost[req.params.num - 1]);
});

router.get('/allselfcare/new', (req, res) => {
  res.render('newselfcare', {
    layout: 'main',
  });
});

router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newSelfCarePost = await SelfCarePost.create({ ...body, userId: req.session.userId });
    res.json(newSelfCarePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await SelfCarePost.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = SelfCarePost.destroy({
      where: {
        id: req.params.id,
      },
    });

    //     if (affectedRows > 0) {
    //       res.status(200).end();
    //     } else {
    //       res.status(404).end();
    //     }
    //   } catch (err) {
    //     res.status(500).json(err);
    //   }
    // });

    if (!selfCarePostData) {
      res.status(404).json({ message: 'No self care post found with this id!' });
      return;
    }

    res.status(200).json(podData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
