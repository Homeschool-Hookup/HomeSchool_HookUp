const router = require("express").Router();
const { Pod, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/allpodpost", async (req, res) => {
  const body = req.body;

  try {
    const newPod = await Pod.findAll({
      include: [User],
      // ...req.body,
      // user_id: req.session.user_id,
    });
    const pods = newPod.map((pod) => pod.get({ plain: true }));
    console.log("pods", pods);
    res.render("allpodpost", {
      layout: "main",
      pods,
    });
    // res.status(200).json(newPod);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/allpodpost', async (req, res) => {
//   res.render('allpodpost');
// });

router.get("/:id", withAuth, async (req, res) => {
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
// router.get("/allpodpost/new", (req, res) => {
//   res.render("newpodpost", {
//     layout: "main",
//   });
// });

router.get("/allpodpost/new", (req, res) => {
  res.render("newpodpost", {
    layout: "main",
  });
});

router.post("/allpodpost/new", withAuth, async (req, res) => {
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

router.put("/:id", withAuth, async (req, res) => {
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

router.delete("/:id", withAuth, async (req, res) => {
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
