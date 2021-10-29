const router = require('express').Router();
const Profile = require('../../models/Profile');

// route to create/add a profile using async/await
router.post('/', async (req, res) => {
  try { 
    const profileData = await Profile.create({
    profile_name: req.body.profile_name,
    profile_email: req.body.profile_email,
    description: req.body.description,
      
  });

  // if the profile is successfully created, the new response will be returned as json
  res.status(200).json(profileData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;