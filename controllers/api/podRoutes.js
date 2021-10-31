const router = require("express").Router();
const { Pod, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/allpodpost", withAuth, async (req, res) => {
  try {
    const newPod = await Pod.findAll({
      include: [User],
    });
    const pods = newPod.map((pod) => pod.get({ plain: true }));
    console.log("pods", pods);
    res.render("allpodpost", {
      layout: "main",
      pods,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//render newpodpost
router.get("/allpodpost/new", withAuth, (req, res) => {
  res.render("newpodpost", {
    layout: "main",
  });
});

router.get('/allpodpost/:id', withAuth, async (req, res) => {
  // const body = req.body;
  try {
    const newPod = await Pod.findByPk(req.params.id);

    if (newPod) {
      const pod = newPod.get({ plain: true });

      res.render("singlepod", {
        layout: "main",
        pod
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get single pod post, render single pod
router.get("/allpodpost/:id", withAuth, async (req, res) => {
  try {
    const podData = await Pod.findByPk(req.params.id, {
      include: [User],
    });
    console.log("test     ", podData);
    const pod = podData.get({ plain: true });
    console.log("!!!!!!!!111", pod);
    res.render("singlepod", { pod });
  } catch (err) {
    res.status(400).json(err);
  }
});

//render updated page
router.get("/allpodpost/edit/:id", withAuth, async (req, res) => {
  try {
    const podData = await Pod.findByPk(req.params.id, {
      include: [User],
    });
    if (podData) {
      const pod = podData.get({ plain: true });
      console.log("!!!!!!!!*********", pod);
      res.render("updatepod", { pod });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/allpodpost/edit/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Pod.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!", affectedRows);
    console.log(req.body);
    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/allpodpost/edit/:id", withAuth, async (req, res) => {
  try {
    console.log("jjjjjjjjjjjjj", req.params.id);

    const podData = await Pod.destroy({
      where: {
        id: req.params.id,
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
