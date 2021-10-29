const router = require('express').Router();
const { Project, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/allprojects', async (req, res) => {
  try {
    const newProject = await Project.findAll({
      include: [User]
      // ...req.body,
      // user_id: req.session.user_id,
    });

    const projects = newProject.map((project) => project.get({ plain: true }));
    console.log("projects", projects);
    res.render("allprojectposts", {
      layout: "main",
      projects
    })
    // res.status(200).json(newPod);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/allprojects', async (req, res) => {
  res.render('allprojectposts');
});

router.get('/:id', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newProject = await Project.findByPk({ ...body, userId: req.session.userId });
    res.json(newProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a project
router.get('/projects/:id', async (req, res) => {
  // This method renders the 'project' template, and uses params to select the correct project to render in the template, based on the id of the project.
  // Now, we have access to a project description in the 'project' template.
  return res.render('allprojectposts', project[req.params.num - 1]);
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Project.update(req.body, {
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
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
