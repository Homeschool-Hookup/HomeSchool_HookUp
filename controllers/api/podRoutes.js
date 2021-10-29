<<<<<<< HEAD
const router = require('express').Router();
const { Pod, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/allpodpost', async (req, res) => {
=======
const router = require("express").Router();
const { Pod, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/allpodpost", async (req, res) => {
>>>>>>> 811069d0da28825a317ef582138e3c571a92e580
  const body = req.body;

  try {
    const newPod = await Pod.findAll({
<<<<<<< HEAD
      include: [User]
      // ...req.body,
      // user_id: req.session.user_id,
    });
    const pods = newPod.map((pod) => pod.get({ plain: true }));
    console.log("pods", pods);
    res.render("allpodpost", {
      layout: "main",
      pods
    })
    // res.status(200).json(newPod);
  } catch (err) {
    res.status(400).json(err);
  };
});

// router.get('/allpodpost', async (req, res) => {
//   res.render('allpodpost');
// });

router.get('/allpodpost/:id', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPod = await Pod.findByPk(req.params.id, {
      include: [User]
      // ...req.body,
      // user_id: req.session.user_id,
    });

    if (newPod) {
      const pod = newPod.get({ plain: true });

      res.render("singlepod", { pod });
    } else {
      res.status(404).end();
    }

    // res.status(200).json(newPod);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a pod
router.get('/:id', async (req, res) => {
  // This method renders the 'pod' template, and uses params to select the correct pod to render in the template, based on the id of the pod.
  // Now, we have access to a pod description in the 'pod' template.
  return res.render('allpodpost', pod[req.params.num - 1]);
});

router.post('/allpodpost', withAuth, async (req, res) => {
=======
      include: [User],
    });

    const pods = newPod.map((post) => post.get({ plain: true }));
    console.log("pods", pods);
    res.render("allpodpost", { pods });
  } catch (err) {
    // res.redirect("login");
    res.status(400).json(err);
  }
});

// router.get("/allpodpost", async (req, res) => {
//   res.render("allpodpost");
// });

router.get("/:id", async (req, res) => {
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

// Get a pod
router.get("/:id", async (req, res) => {
  // This method renders the 'pod' template, and uses params to select the correct pod to render in the template, based on the id of the pod.
  // Now, we have access to a pod description in the 'pod' template.
  return res.render("allpodpost", pod[req.params.num - 1]);
});

router.post("/allpodpost", withAuth, async (req, res) => {
>>>>>>> 811069d0da28825a317ef582138e3c571a92e580
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

<<<<<<< HEAD
router.put('/:id', withAuth, async (req, res) => {
=======
router.put("/:id", withAuth, async (req, res) => {
>>>>>>> 811069d0da28825a317ef582138e3c571a92e580
  try {
    const [affectedRows] = await Pod.update(req.body, {
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

<<<<<<< HEAD
router.delete('/:id', withAuth, async (req, res) => {
=======
router.delete("/:id", withAuth, async (req, res) => {
>>>>>>> 811069d0da28825a317ef582138e3c571a92e580
  try {
    const podData = await Pod.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!podData) {
      res.status(404).json({ message: "No pod found with this id!" });
      return;
    }

    res.status(200).json(podData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
