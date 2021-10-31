const router = require("express").Router();
const { User } = require("../../models");

router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.userId = userData.id;
    req.session.username = userData.username;
    req.session.email = userData.email;
    req.session.loggedIn = true;
    res.json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    req.session.userId = user.id;
    req.session.username = user.username;
    req.session.loggedIn = true;
    res.json({ user, message: "You are now logged in!" });
  } catch (err) {
    res.status(400).json({ message: "No user account found!" });
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
