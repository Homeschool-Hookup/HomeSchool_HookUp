const router = require('express').Router();
const { Pod } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    const body = req.body;

    try {
      const newPod = await Pod.findAll({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPod);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/pod', async (req, res) => {
    res.render('allpodpost');
  });
  
  // Get a pod
  router.get('/pod/:id', async (req, res) => {
    // This method renders the 'pod' template, and uses params to select the correct pod to render in the template, based on the id of the pod.
    // Now, we have access to a pod description in the 'pod' template.
    return res.render('allpodpost', pod[req.params.num - 1]);
  });

  router.get('/:id', withAuth, async (req, res) => {
    const body = req.body;

    try {
      const newPod = await Pod.find({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPod);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/', withAuth, async (req, res) => {
  try {
    const newPod = await Pod.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPod);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const podData = await Pod.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!podData) {
      res.status(404).json({ message: 'No pod found with this id!' });
      return;
    }

    res.status(200).json(podData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
